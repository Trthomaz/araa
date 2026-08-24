import React from 'react';

export default function PhotoStrip() {
  const photos = [
    { src: '/assets/foto-carne.jpg', alt: 'Corte grelhado' },
    { src: '/assets/foto-linguica.jpg', alt: 'Linguiça com mandioca frita' },
    { src: '/assets/foto-03.jpg', alt: 'Prato do Araá' },
    { src: '/assets/foto-07.jpg', alt: 'Prato do Araá' },
    { src: '/assets/foto-10.jpg', alt: 'Prato do Araá' },
    { src: '/assets/foto-12.jpg', alt: 'Prato do Araá' }
  ];

  return (
    <section style={{ backgroundColor: '#123A1E', padding: 0, overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} style={{ flex: '1 1 200px', overflow: 'hidden', height: 'clamp(200px, 22vw, 280px)' }}>
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
