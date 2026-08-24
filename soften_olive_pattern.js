import fs from 'fs';
import zlib from 'zlib';

function parsePNG(filePath) {
  const data = fs.readFileSync(filePath);
  let pos = 8, idatChunks = [], w = 0, h = 0;
  while (pos < data.length) {
    const len = data.readUInt32BE(pos);
    const type = data.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      w = data.readUInt32BE(pos + 8);
      h = data.readUInt32BE(pos + 12);
    } else if (type === 'IDAT') {
      idatChunks.push(data.subarray(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const stride = 1 + w * 4;
  const img = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    const filter = raw[y * stride];
    const rowOffset = y * stride + 1;
    const outOffset = y * w * 4;
    for (let x = 0; x < w * 4; x++) {
      let val = raw[rowOffset + x];
      let left = (x >= 4) ? img[outOffset + x - 4] : 0;
      let up = (y > 0) ? img[(y - 1) * w * 4 + x] : 0;
      let upLeft = (y > 0 && x >= 4) ? img[(y - 1) * w * 4 + x - 4] : 0;
      if (filter === 1) val = (val + left) & 0xff;
      else if (filter === 2) val = (val + up) & 0xff;
      else if (filter === 3) val = (val + Math.floor((left + up) / 2)) & 0xff;
      else if (filter === 4) {
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        let pr = (pa <= pb && pa <= pc) ? left : (pb <= pc ? up : upLeft);
        val = (val + pr) & 0xff;
      }
      img[outOffset + x] = val;
    }
  }
  return { w, h, img };
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
  }
  return (c ^ 0xffffffff) | 0;
}

function writePNG(outPath, w, h, img) {
  const stride = 1 + w * 4;
  const raw = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    raw[y * stride] = 0;
    img.copy(raw, y * stride + 1, y * w * 4, (y + 1) * w * 4);
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeInt32BE(crc, 8 + len);
    return buf;
  }

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData.writeUInt8(8, 8);
  ihdrData.writeUInt8(6, 9);
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const finalBuf = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(outPath, finalBuf);
}

const template = parsePNG('assets/pattern-fruits-green-orig.png');
const { w, h, img } = template;

// Verde floresta suave e elegante: R:22, G:64, B:34
const olivePatternSoftDarkGreen = Buffer.alloc(img.length);
for (let i = 0; i < img.length; i += 4) {
  const a = img[i + 3];
  if (a > 0) {
    olivePatternSoftDarkGreen[i] = 24;
    olivePatternSoftDarkGreen[i + 1] = 68;
    olivePatternSoftDarkGreen[i + 2] = 36;
    // Suaviza levemente o alpha da linha
    olivePatternSoftDarkGreen[i + 3] = Math.round(a * 0.85);
  }
}

writePNG('assets/pattern-fruits-olive.png', w, h, olivePatternSoftDarkGreen);
writePNG('public/assets/pattern-fruits-olive.png', w, h, olivePatternSoftDarkGreen);

console.log('Soft dark green pattern applied to olive background!');
