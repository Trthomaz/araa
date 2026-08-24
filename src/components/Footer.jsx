import React from 'react';
import { links } from '../data/content';
import { InstagramIcon, TripadvisorIcon, WhatsappIcon } from './SocialIcons';

export default function Footer({ t }) {
  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#123A1E',
        padding: 'clamp(50px, 8vw, 74px) 0 40px',
        overflow: 'hidden'
      }}
    >
      <div className="bg-texture-green" />

      <div className="container" style={{ position: 'relative' }}>
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            alignItems: 'start'
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src="/assets/logo-cream.png" alt="Logo Araá" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
              <img src="/assets/marca-cream.png" alt="ARAÁ" style={{ height: '28px', width: 'auto', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.7)' }}>
              <span>Morro da Urca</span>
              <img src="/assets/logo-cream.png" alt="" style={{ width: '10px', height: '10px', opacity: 0.7 }} />
              <span>Rio de Janeiro</span>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
              <a
                href={links.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(247,239,207,0.08)',
                  border: '1px solid rgba(247,239,207,0.3)',
                  color: 'rgba(247,239,207,0.88)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6C744';
                  e.currentTarget.style.borderColor = '#F6C744';
                  e.currentTarget.style.color = '#123A1E';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(247,239,207,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(247,239,207,0.3)';
                  e.currentTarget.style.color = 'rgba(247,239,207,0.88)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={links.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(247,239,207,0.08)',
                  border: '1px solid rgba(247,239,207,0.3)',
                  color: 'rgba(247,239,207,0.88)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6C744';
                  e.currentTarget.style.borderColor = '#F6C744';
                  e.currentTarget.style.color = '#123A1E';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(247,239,207,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(247,239,207,0.3)';
                  e.currentTarget.style.color = 'rgba(247,239,207,0.88)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <TripadvisorIcon size={19} />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.75)' }}>
              {t.footerNav}
            </div>
            <a href="#cardapio" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '15px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}>
              {t.navMenu}
            </a>
            <a href="#espaco" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '15px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}>
              {t.navEspaco}
            </a>
            <a href="#eventos" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '15px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}>
              {t.navEventos}
            </a>
            <a href="#reservas" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '15px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}>
              {t.navReservar}
            </a>
            <a href="#faq" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '15px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}>
              {t.navFaq}
            </a>
          </div>

          {/* Contact Col */}
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.75)' }}>
              {t.footerContato}
            </div>
            <a
              href={links.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'rgba(247,239,207,0.88)', fontSize: '15px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}
            >
              <WhatsappIcon size={16} />
              (21) 96610-5728
            </a>
            <a
              href={links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'rgba(247,239,207,0.88)', fontSize: '15px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,239,207,0.88)')}
            >
              <InstagramIcon size={16} />
              @araa.brasil
            </a>
          </div>

          {/* Schedule Summary Col */}
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.75)' }}>
              {t.horarioLabel}
            </div>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'rgba(247,239,207,0.88)' }}>
              {t.footerHorario}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: 'relative',
            marginTop: 'clamp(32px, 5vw, 46px)',
            paddingTop: '20px',
            borderTop: '1px solid rgba(247,239,207,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 24px',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-oswald)',
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(247,239,207,0.55)'
          }}
        >
          <span>&copy; 2026 Ara&aacute; Brasil</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {t.footerCredito}
            <img src="/assets/logo-cream.png" alt="" style={{ width: '10px', height: '10px', opacity: 0.55 }} />
            {t.footerCredito2}
          </span>
        </div>
      </div>
    </footer>
  );
}
