import React from 'react';

export default function About({ t }) {
  return (
    <section className="araa-section" style={{ backgroundColor: '#F5E7BE' }}>
      <div className="bg-texture-cream" />

      <div className="container-narrow" style={{ position: 'relative' }}>
        <div className="araa-split" data-reveal="">
          {/* Text & Stats Column */}
          <div style={{ display: 'grid', gap: '24px' }}>
            <div className="kicker" style={{ color: '#123A1E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              <span>{t.sobreKicker}</span>
            </div>

            <h2 className="section-title" style={{ color: '#123A1E' }}>
              {t.sobreTitulo}
            </h2>

            <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>
              {t.sobreP1}
            </p>

            <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>
              {t.sobreP2}
            </p>

            {/* Statistics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '18px',
                marginTop: '8px'
              }}
            >
              <div style={{ borderTop: '2px solid #F6C744', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 36px)', color: '#123A1E' }}>
                  100%
                </div>
                <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#123A1E' }}>
                  {t.stat1}
                </div>
              </div>

              <div style={{ borderTop: '2px solid #E2762A', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 36px)', color: '#123A1E' }}>
                  200
                </div>
                <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#123A1E' }}>
                  {t.stat2}
                </div>
              </div>

              <div style={{ borderTop: '2px solid #85862E', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 36px)', color: '#123A1E' }}>
                  4
                </div>
                <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#123A1E' }}>
                  {t.stat3}
                </div>
              </div>
            </div>
          </div>

          {/* Photo Column */}
          <div style={{ position: 'relative' }}>
            <img
              src="/assets/foto-cafe.jpg"
              alt="Mesa de café da manhã do Araá"
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                objectFit: 'cover',
                borderRadius: 'clamp(20px, 3vw, 32px)',
                display: 'block',
                boxShadow: '0 20px 40px rgba(18,58,30,0.12)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
