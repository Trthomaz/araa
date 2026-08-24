import React, { useRef, useEffect } from 'react';

export default function Carousel({ t }) {
  const railRef = useRef(null);
  const loopTimerRef = useRef(null);

  const ambientes = t.ambientes || [];
  // 3 voltas para permitir rolagem infinita contínua
  const ambientesLoop = [...ambientes, ...ambientes, ...ambientes];

  const rolarRail = (dir) => {
    const el = railRef.current;
    if (!el) return;

    const figures = el.querySelectorAll('figure');
    if (!figures.length) return;

    const centro = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;

    figures.forEach((f, idx) => {
      const fCenter = f.offsetLeft + f.offsetWidth / 2;
      const diff = Math.abs(fCenter - centro);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    const targetIdx = Math.max(0, Math.min(figures.length - 1, closestIdx + dir));
    const target = figures[targetIdx];

    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: 'smooth'
    });
  };

  const ajustarLoop = () => {
    const el = railRef.current;
    if (!el) return;
    const terco = el.scrollWidth / 3;
    if (terco < 40) return;

    if (el.scrollLeft < terco * 0.35) {
      el.scrollLeft += terco;
    } else if (el.scrollLeft > terco * 1.65) {
      el.scrollLeft -= terco;
    }
  };

  const onScroll = () => {
    if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    loopTimerRef.current = setTimeout(ajustarLoop, 160);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = railRef.current;
      if (el) {
        el.scrollLeft = el.scrollWidth / 3;
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    };
  }, []);

  return (
    <section id="espaco" className="araa-section" style={{ backgroundColor: '#123A1E', padding: 'clamp(70px, 10vw, 110px) 0' }}>
      <div className="bg-texture-green" />

      {/* Header Container */}
      <div className="container" style={{ position: 'relative', marginBottom: '36px' }}>
        <div style={{ maxWidth: '640px', display: 'grid', gap: '14px' }}>
          <div className="kicker" style={{ color: '#F7EFCF' }}>
            <img src="/assets/logo-cream.png" alt="" style={{ width: '15px', height: '15px' }} />
            <span>{t.espacoKicker}</span>
          </div>

          <h2 className="section-title" style={{ color: '#F7EFCF' }}>
            {t.espacoTitulo}
          </h2>

          <p style={{ margin: 0, fontSize: 'clamp(15px, 1.7vw, 17px)', lineHeight: 1.6, color: 'rgba(247,239,207,0.85)', textWrap: 'pretty' }}>
            {t.espacoLead}
          </p>
        </div>
      </div>

      {/* Carousel Track with Buttons */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Left Arrow */}
        <button
          onClick={() => rolarRail(-1)}
          aria-label="Ambiente anterior"
          style={{
            position: 'absolute',
            left: 'clamp(10px, 3vw, 34px)',
            top: '45%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: 'clamp(44px, 5vw, 56px)',
            height: 'clamp(44px, 5vw, 56px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(247,239,207,0.92)',
            color: '#123A1E',
            fontFamily: 'var(--font-oswald)',
            fontWeight: 300,
            fontSize: 'clamp(24px, 3vw, 30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F6C744')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(247,239,207,0.92)')}
        >
          &#8249;
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => rolarRail(1)}
          aria-label="Próximo ambiente"
          style={{
            position: 'absolute',
            right: 'clamp(10px, 3vw, 34px)',
            top: '45%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: 'clamp(44px, 5vw, 56px)',
            height: 'clamp(44px, 5vw, 56px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(247,239,207,0.92)',
            color: '#123A1E',
            fontFamily: 'var(--font-oswald)',
            fontWeight: 300,
            fontSize: 'clamp(24px, 3vw, 30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F6C744')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(247,239,207,0.92)')}
        >
          &#8250;
        </button>

        {/* Rail */}
        <div
          ref={railRef}
          className="araa-rail"
          onScroll={onScroll}
          style={{
            display: 'flex',
            gap: 'clamp(12px, 2vw, 20px)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: 'max(16px, calc(50vw - 616px))',
            paddingRight: 'max(16px, calc(50vw - 616px))',
            paddingBottom: '8px'
          }}
        >
          {ambientesLoop.map((amb, idx) => (
            <figure
              key={idx}
              style={{
                flex: '0 0 auto',
                width: 'min(380px, 78vw)',
                margin: 0,
                scrollSnapAlign: 'center',
                display: 'grid',
                gap: '12px',
                overflow: 'hidden'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '18px' }}>
                <img
                  src={amb.src}
                  alt={amb.nome}
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              <figcaption style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/assets/logo-yellow.png" alt="" style={{ width: '13px', height: '13px' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 500,
                    fontSize: 'clamp(13.5px, 1.3vw, 15px)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(247,239,207,0.92)'
                  }}
                >
                  {amb.nome}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
