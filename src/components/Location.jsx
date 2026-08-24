import React from 'react';
import { links } from '../data/content';

export default function Location({ t }) {
  const horarios = t.horarios || [];

  return (
    <section id="local" className="araa-section" style={{ backgroundColor: '#123A1E', padding: 'clamp(70px, 10vw, 110px) 0 clamp(80px, 11vw, 120px)' }}>
      <div className="bg-texture-green" />

      <div className="container" style={{ position: 'relative' }}>
        <div className="araa-split" data-reveal="" style={{ alignItems: 'start' }}>
          {/* Info Column */}
          <div style={{ display: 'grid', gap: '24px' }}>
            <div className="kicker" style={{ color: '#F7EFCF' }}>
              <img src="/assets/logo-cream.png" alt="" style={{ width: '15px', height: '15px' }} />
              <span>{t.localKicker}</span>
            </div>

            <h2 className="section-title" style={{ color: '#F7EFCF' }}>
              {t.localTitulo}
            </h2>

            {/* Address */}
            <div style={{ display: 'grid', gap: '6px' }}>
              <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.75)' }}>
                {t.enderecoLabel}
              </div>
              <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.5, color: 'rgba(247,239,207,0.92)' }}>
                Jardim dos Discos, Morro da Urca<br />
                Av. Pasteur, 520 &mdash; Urca, Rio de Janeiro
              </p>
            </div>

            {/* Schedule */}
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.75)' }}>
                {t.horarioLabel}
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                {horarios.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '16px',
                      borderBottom: '1px solid rgba(247,239,207,0.2)',
                      paddingBottom: '8px'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-oswald)', fontWeight: 400, fontSize: 'clamp(13.5px, 1.3vw, 15px)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.9)' }}>
                      {h.dia}
                    </span>
                    <span style={{ fontFamily: 'var(--font-oswald)', fontWeight: 500, fontSize: 'clamp(13.5px, 1.3vw, 15px)', color: '#F6C744' }}>
                      {h.hora}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '6px 0 0', fontSize: '13.5px', lineHeight: 1.5, color: 'rgba(247,239,207,0.6)' }}>
                {t.horarioNota}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
              <a
                href={links.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  background: '#F7EFCF',
                  color: '#123A1E',
                  padding: '13px 24px',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F6C744')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#F7EFCF')}
              >
                {t.localCta1}
              </a>

              <a
                href={links.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(247,239,207,0.55)',
                  color: '#F7EFCF',
                  padding: '13px 24px',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(247,239,207,0.14)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                TripAdvisor
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div
            style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '1px solid rgba(247,239,207,0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
              minHeight: 'clamp(320px, 45vw, 520px)',
              height: '100%'
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Ara%C3%A1%20Morro%20da%20Urca%2C%20Av.%20Pasteur%20520%2C%20Urca%2C%20Rio%20de%20Janeiro&output=embed"
              title="Mapa do Araá no Morro da Urca"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 'clamp(320px, 45vw, 520px)',
                border: 0,
                display: 'block',
                filter: 'saturate(0.9)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
