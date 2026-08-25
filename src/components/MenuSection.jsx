import React, { useState } from 'react';
import { links } from '../data/content';

export default function MenuSection({ t }) {
  const [activeTab, setActiveTab] = useState(0);

  const secoes = t.secoes || [];
  const currentSecao = secoes[activeTab] || secoes[0] || { titulo: '', nota: '', itens: [] };

  return (
    <section id="cardapio" className="araa-section" style={{ backgroundColor: '#85862E', padding: 'clamp(70px, 10vw, 110px) 0' }}>
      <div className="bg-texture-olive" />

      <div className="container-narrow" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'grid', gap: '16px', justifyItems: 'center', marginBottom: 'clamp(36px, 5vw, 54px)' }}>
          <div className="kicker" style={{ color: '#F5E7BE', justifyContent: 'center' }}>
            <img src="/assets/logo-cream.png" alt="" style={{ width: '15px', height: '15px' }} />
            <span>{t.menuKicker}</span>
          </div>

          <h2 className="section-title" style={{ color: '#F7EFCF' }}>
            {t.menuTitulo}
          </h2>

          <p style={{ margin: 0, maxWidth: '620px', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.6, color: 'rgba(247,239,207,0.9)', textWrap: 'pretty' }}>
            {t.menuLead}
          </p>
        </div>

        {/* Paper Container */}
        <div
          data-reveal=""
          style={{
            position: 'relative',
            backgroundColor: '#FAF0CE',
            borderRadius: 'clamp(18px, 3vw, 26px)',
            padding: 'clamp(32px, 5vw, 56px) clamp(18px, 4vw, 54px) clamp(36px, 5vw, 64px)',
            boxShadow: '0 30px 70px rgba(18,58,30,0.28)'
          }}
        >
          {/* Card Top Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingBottom: '22px', borderBottom: '1.5px solid rgba(18,58,30,0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <img src="/assets/logo-green.png" alt="Logo Araá" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
              <img src="/assets/marca-green.png" alt="ARAÁ" style={{ height: '26px', width: 'auto', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-oswald)', fontSize: '10px', letterSpacing: '0.34em', textTransform: 'uppercase', color: 'rgba(18,58,30,0.85)' }}>
              <span>Gastronomia</span>
              <img src="/assets/logo-green.png" alt="" style={{ width: '10px', height: '10px', opacity: 0.85 }} />
              <span>Brasilidade</span>
            </div>
          </div>

          {/* Categories Tabs */}
          <div
            className="araa-rail"
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'flex-start',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              marginTop: '24px',
              paddingBottom: '16px',
              borderBottom: '1.5px solid rgba(18,58,30,0.35)'
            }}
          >
            {secoes.map((secao, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    flex: '0 0 auto',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 500,
                    fontSize: 'clamp(11.5px, 1.2vw, 13px)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backgroundColor: isActive ? '#123A1E' : 'transparent',
                    color: isActive ? '#FAF0CE' : 'rgba(18,58,30,0.72)',
                    border: isActive ? '1.5px solid #123A1E' : '1.5px solid rgba(18,58,30,0.35)'
                  }}
                >
                  {secao.titulo}
                </button>
              );
            })}
          </div>

          {/* Current Section Title with Custom Banner & Note */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: '36px 0 20px',
              flexWrap: 'wrap'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                padding: '3px',
                backgroundColor: '#123A1E',
                clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'clamp(275px, 34vw, 350px)',
                  padding: '7px clamp(15px, 1.8vw, 18px) 7px clamp(12px, 1.4vw, 16px)',
                  backgroundColor: '#FAF0CE',
                  clipPath: 'polygon(11px 0, calc(100% - 11px) 0, 100% 50%, calc(100% - 11px) 100%, 11px 100%, 0 50%)'
                }}
              >
                {/* Logo symbol */}
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '9px', flexShrink: 0 }}>
                  <img src="/assets/logo-green.png" alt="" style={{ width: 'clamp(18px, 2.2vw, 24px)', height: 'clamp(18px, 2.2vw, 24px)' }} />
                </div>

                {/* Title Text */}
                <span style={{ whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 600,
                      fontSize: 'clamp(18px, 2.2vw, 24px)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#123A1E',
                      lineHeight: 1.1
                    }}
                  >
                    {currentSecao.titulo}
                  </span>
                  {currentSecao.nota && (
                    <span
                      style={{
                        marginLeft: '6px',
                        fontFamily: 'var(--font-oswald)',
                        fontWeight: 400,
                        fontSize: '13px',
                        letterSpacing: '0.02em',
                        textTransform: 'none',
                        color: 'rgba(18,58,30,0.6)'
                      }}
                    >
                      ({currentSecao.nota})
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Section Items Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '20px 48px',
              alignItems: 'start'
            }}
          >
            {currentSecao.itens.map((item, i) => (
              <div key={i} style={{ breakInside: 'avoid', display: 'grid', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: 'clamp(15px, 1.4vw, 16.5px)', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#123A1E' }}>
                    {item.nome}
                  </span>
                  {item.tag && (
                    <span style={{ fontFamily: 'var(--font-oswald)', fontWeight: 500, fontSize: '10.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#85862E' }}>
                      {item.tag}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 300, fontSize: '14.5px', lineHeight: 1.42, color: 'rgba(18,58,30,0.82)', paddingLeft: '8px', maxWidth: '48ch', textWrap: 'pretty' }}>
                    {item.desc}
                  </div>
                )}
                {item.porcao && (
                  <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#123A1E', paddingLeft: '8px', marginTop: '2px' }}>
                    {item.porcao}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ marginTop: '32px', paddingTop: '22px', borderTop: '1.5px solid rgba(18,58,30,0.35)' }} />

          {/* CTA Full Menu */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href={links.cardapioLiveMenu}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-oswald)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: '#123A1E',
                color: '#FAF0CE',
                padding: '14px 28px',
                borderRadius: '999px',
                transition: 'all 0.2s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#85862E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#123A1E')}
            >
              {t.menuCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
