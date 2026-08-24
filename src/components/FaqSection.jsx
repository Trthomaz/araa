import React, { useState } from 'react';

export default function FaqSection({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = t.faqs || [];

  const toggleFaq = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="araa-section" style={{ backgroundColor: '#F5E7BE', padding: 'clamp(70px, 10vw, 110px) 0 clamp(80px, 11vw, 120px)' }}>
      <div className="bg-texture-cream" />

      <div className="container-tight" data-reveal="" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'grid', gap: '14px', justifyItems: 'center', textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 44px)' }}>
          <div className="kicker" style={{ color: '#123A1E', justifyContent: 'center' }}>
            <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
            <span>FAQ</span>
          </div>

          <h2 className="section-title" style={{ color: '#123A1E' }}>
            {t.faqTitulo}
          </h2>
        </div>

        {/* Faq Accordion List */}
        <div style={{ display: 'grid', gap: '12px' }}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#FAF0CE',
                  border: '1px solid rgba(18,58,30,0.2)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.2s ease',
                  boxShadow: isOpen ? '0 8px 24px rgba(18,58,30,0.08)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 0,
                    padding: 'clamp(16px, 2.5vw, 20px) clamp(18px, 3vw, 24px)',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 500,
                      fontSize: 'clamp(15.5px, 1.5vw, 17.5px)',
                      letterSpacing: '0.02em',
                      color: '#123A1E',
                      flex: 1
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-oswald)',
                      fontSize: 'clamp(20px, 2.5vw, 24px)',
                      color: '#123A1E',
                      lineHeight: 1,
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p
                    style={{
                      margin: 0,
                      padding: '0 clamp(18px, 3vw, 24px) clamp(18px, 2.5vw, 22px)',
                      fontSize: 'clamp(15px, 1.5vw, 16.5px)',
                      lineHeight: 1.6,
                      color: 'rgba(18,58,30,0.84)',
                      textWrap: 'pretty',
                      animation: 'slideDown 0.25s ease'
                    }}
                  >
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
