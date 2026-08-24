import React from 'react';
import { links } from '../data/content';

export default function Events({ t }) {
  const eventosItens = t.eventosItens || [];

  return (
    <section id="eventos" className="araa-section" style={{ backgroundColor: '#F5E7BE' }}>
      <div className="bg-texture-cream" />

      <div className="container-narrow" style={{ position: 'relative' }}>
        <div className="araa-split" data-reveal="">
          {/* Photo Column */}
          <div style={{ position: 'relative', order: 1 }}>
            <img
              src="/assets/evento.jpg"
              alt="Mesa posta para evento com vista do Cristo Redentor"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: 'clamp(20px, 3vw, 32px)',
                display: 'block',
                boxShadow: '0 20px 40px rgba(18,58,30,0.12)'
              }}
            />
          </div>

          {/* Content Column */}
          <div style={{ display: 'grid', gap: '22px', order: 2 }}>
            <div className="kicker" style={{ color: '#123A1E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              <span>{t.eventosKicker}</span>
            </div>

            <h2 className="section-title" style={{ color: '#123A1E' }}>
              {t.eventosTitulo}
            </h2>

            <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>
              {t.eventosP1}
            </p>

            <div style={{ display: 'grid', gap: '12px' }}>
              {eventosItens.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'baseline',
                    borderBottom: '1px solid rgba(18,58,30,0.18)',
                    paddingBottom: '10px'
                  }}
                >
                  <img src="/assets/logo-green.png" alt="" style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-oswald)', fontWeight: 400, fontSize: 'clamp(14.5px, 1.4vw, 16px)', letterSpacing: '0.02em', color: '#123A1E' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '8px' }}>
              <a
                href={links.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 500,
                  fontSize: 'clamp(13px, 1.3vw, 14px)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  background: '#123A1E',
                  color: '#F5E7BE',
                  padding: '15px 30px',
                  borderRadius: '999px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#85862E')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#123A1E')}
              >
                {t.eventosCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
