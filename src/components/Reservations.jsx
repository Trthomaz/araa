import React from 'react';
import { links } from '../data/content';

export default function Reservations({ t }) {
  return (
    <section id="reservas" style={{ position: 'relative', backgroundColor: '#F5E7BE', padding: 'clamp(30px, 5vw, 60px) 0 clamp(70px, 10vw, 110px)' }}>
      <div className="bg-texture-cream" />

      <div className="container-narrow" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'grid', gap: '14px', maxWidth: '680px', marginBottom: 'clamp(32px, 5vw, 44px)' }}>
          <div className="kicker" style={{ color: '#123A1E' }}>
            <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
            <span>{t.reservasKicker}</span>
          </div>

          <h2 className="section-title" style={{ color: '#123A1E' }}>
            {t.reservasTitulo}
          </h2>

          <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: 1.6, color: 'rgba(18,58,30,0.84)', textWrap: 'pretty' }}>
            {t.reservasLead}
          </p>
        </div>

        {/* Cards Grid */}
        <div
          data-reveal=""
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)'
          }}
        >
          {/* Card 1: Reserva Online */}
          <div
            style={{
              backgroundColor: '#F6C744',
              borderRadius: '24px',
              padding: 'clamp(26px, 4vw, 34px)',
              display: 'grid',
              gap: '16px',
              alignContent: 'start',
              boxShadow: '0 12px 30px rgba(246,199,68,0.25)'
            }}
          >
            <img src="/assets/logo-green.png" alt="" style={{ width: '40px', height: '40px' }} />
            <h3 style={{ margin: 0, fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(20px, 2.2vw, 24px)', textTransform: 'uppercase', color: '#123A1E' }}>
              {t.reservaCard1Titulo}
            </h3>
            <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.4vw, 16px)', lineHeight: 1.55, color: 'rgba(18,58,30,0.86)' }}>
              {t.reservaCard1Texto}
            </p>
            <a
              href={links.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                justifySelf: 'start',
                marginTop: '6px',
                fontFamily: 'var(--font-oswald)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: '#123A1E',
                color: '#FAF0CE',
                padding: '13px 24px',
                borderRadius: '999px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FAF0CE';
                e.currentTarget.style.color = '#123A1E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#123A1E';
                e.currentTarget.style.color = '#FAF0CE';
              }}
            >
              {t.reservaCard1Cta}
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div
            style={{
              backgroundColor: '#123A1E',
              borderRadius: '24px',
              padding: 'clamp(26px, 4vw, 34px)',
              display: 'grid',
              gap: '16px',
              alignContent: 'start',
              boxShadow: '0 12px 30px rgba(18,58,30,0.15)'
            }}
          >
            <img src="/assets/logo-yellow.png" alt="" style={{ width: '40px', height: '40px' }} />
            <h3 style={{ margin: 0, fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(20px, 2.2vw, 24px)', textTransform: 'uppercase', color: '#F7EFCF' }}>
              {t.reservaCard2Titulo}
            </h3>
            <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.4vw, 16px)', lineHeight: 1.55, color: 'rgba(247,239,207,0.82)' }}>
              {t.reservaCard2Texto}
            </p>
            <a
              href={links.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                justifySelf: 'start',
                marginTop: '6px',
                fontFamily: 'var(--font-oswald)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: '#F6C744',
                color: '#123A1E',
                padding: '13px 24px',
                borderRadius: '999px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#F7EFCF')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F6C744')}
            >
              {t.reservaCard2Cta}
            </a>
          </div>

          {/* Card 3: Parque Bondinho */}
          <div
            style={{
              backgroundColor: '#F5E7BE',
              border: '1.5px solid rgba(18,58,30,0.35)',
              borderRadius: '24px',
              padding: 'clamp(26px, 4vw, 34px)',
              display: 'grid',
              gap: '16px',
              alignContent: 'start'
            }}
          >
            <img src="/assets/logo-green.png" alt="" style={{ width: '40px', height: '40px' }} />
            <h3 style={{ margin: 0, fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(20px, 2.2vw, 24px)', textTransform: 'uppercase', color: '#123A1E' }}>
              {t.reservaCard3Titulo}
            </h3>
            <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.4vw, 16px)', lineHeight: 1.55, color: 'rgba(18,58,30,0.82)' }}>
              {t.reservaCard3Texto}
            </p>
            <a
              href={links.bondinhoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                justifySelf: 'start',
                marginTop: '6px',
                fontFamily: 'var(--font-oswald)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: '1.5px solid #123A1E',
                color: '#123A1E',
                padding: '13px 24px',
                borderRadius: '999px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#123A1E';
                e.currentTarget.style.color = '#FAF0CE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#123A1E';
              }}
            >
              {t.reservaCard3Cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
