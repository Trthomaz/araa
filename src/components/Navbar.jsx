import React, { useState, useEffect } from 'react';
import { links } from '../data/content';
import { InstagramIcon, TripadvisorIcon } from './SocialIcons';

export default function Navbar({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Previne scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#cardapio', label: t.navMenu },
    { href: '#espaco', label: t.navEspaco },
    { href: '#eventos', label: t.navEventos },
    { href: '#local', label: t.navLocal },
    { href: '#faq', label: t.navFaq },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: scrolled ? 'rgba(18,58,30,0.96)' : 'rgba(18,58,30,0.5)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(6px)',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'blur(6px)',
          transition: 'background-color 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease',
          padding: scrolled ? '12px 0' : '17px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          {/* Logo */}
          <a
            href="#topo"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: '#F5E7BE', flexShrink: 0 }}
            aria-label="Araá Restaurante - Início"
          >
            <img src="/assets/logo-cream.png" alt="" style={{ width: '25px', height: '25px', objectFit: 'contain', display: 'block' }} />
            <img src="/assets/marca-cream.png" alt="ARAÁ" style={{ height: '20px', width: 'auto', display: 'block' }} />
          </a>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '22px',
              marginLeft: 'auto'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 400,
                  fontSize: '13px',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,231,190,0.86)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F6C744')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,231,190,0.86)')}
              >
                {link.label}
              </a>
            ))}

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href={links.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(245,231,190,0.1)',
                  border: '1px solid rgba(245,231,190,0.28)',
                  color: 'rgba(245,231,190,0.9)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6C744';
                  e.currentTarget.style.borderColor = '#F6C744';
                  e.currentTarget.style.color = '#123A1E';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245,231,190,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(245,231,190,0.28)';
                  e.currentTarget.style.color = 'rgba(245,231,190,0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={links.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                style={{
                  width: '34px',
                  height: '34px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(245,231,190,0.1)',
                  border: '1px solid rgba(245,231,190,0.28)',
                  color: 'rgba(245,231,190,0.9)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6C744';
                  e.currentTarget.style.borderColor = '#F6C744';
                  e.currentTarget.style.color = '#123A1E';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245,231,190,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(245,231,190,0.28)';
                  e.currentTarget.style.color = 'rgba(245,231,190,0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <TripadvisorIcon size={18} />
              </a>
            </div>

            {/* Language Switch */}
            <button
              onClick={toggleLang}
              aria-label="Alterar idioma"
              style={{
                fontFamily: 'var(--font-oswald)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                background: 'transparent',
                color: 'rgba(245,231,190,0.8)',
                border: '1px solid rgba(245,231,190,0.35)',
                borderRadius: '999px',
                padding: '5px 12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F6C744';
                e.currentTarget.style.borderColor = '#F6C744';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245,231,190,0.8)';
                e.currentTarget.style.borderColor = 'rgba(245,231,190,0.35)';
              }}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            {/* Reserva CTA */}
            <a
              href={links.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-oswald)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                background: '#F6C744',
                color: '#123A1E',
                padding: '9px 18px',
                borderRadius: '999px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F7EFCF';
                e.currentTarget.style.color = '#123A1E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F6C744';
                e.currentTarget.style.color = '#123A1E';
              }}
            >
              {t.navReservar}
            </a>
          </div>

          {/* Mobile Right Controls: Lang + Hamburger */}
          <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="mobile-controls">
            <style>{`
              @media (max-width: 900px) {
                .mobile-controls {
                  display: flex !important;
                }
              }
            `}</style>
            
            <button
              onClick={toggleLang}
              aria-label="Alterar idioma"
              style={{
                fontFamily: 'var(--font-oswald)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                background: 'transparent',
                color: 'rgba(245,231,190,0.8)',
                border: '1px solid rgba(245,231,190,0.35)',
                borderRadius: '999px',
                padding: '4px 10px',
                cursor: 'pointer'
              }}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div
        className="mobile-nav-drawer"
        style={{
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          pointerEvents: mobileMenuOpen ? 'all' : 'none'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba(245,231,190,0.15)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <img src="/assets/logo-cream.png" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain', display: 'block' }} />
            <img src="/assets/marca-cream.png" alt="ARAÁ" style={{ height: '18px', width: 'auto', display: 'block' }} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar"
            style={{ color: '#F5E7BE', fontSize: '24px', padding: '4px 8px', lineHeight: 1 }}
          >
            &times;
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-oswald)',
                fontSize: '18px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F7EFCF',
                padding: '8px 0',
                borderBottom: '1px solid rgba(245,231,190,0.08)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: 'auto', paddingTop: '20px' }}>
          <a
            href={links.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            style={{
              display: 'block',
              textAlign: 'center',
              fontFamily: 'var(--font-oswald)',
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#F6C744',
              color: '#123A1E',
              padding: '14px 20px',
              borderRadius: '999px'
            }}
          >
            {t.navReservar}
          </a>
          <a
            href={links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            style={{
              display: 'block',
              textAlign: 'center',
              fontFamily: 'var(--font-oswald)',
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '0.1em',
              border: '1px solid rgba(247,239,207,0.4)',
              color: '#F7EFCF',
              padding: '12px 20px',
              borderRadius: '999px'
            }}
          >
            WhatsApp
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', paddingTop: '6px' }}>
            <a
              href={links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={handleLinkClick}
              style={{
                width: '48px',
                height: '48px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(247,239,207,0.08)',
                border: '1px solid rgba(247,239,207,0.3)',
                color: '#F7EFCF'
              }}
            >
              <InstagramIcon size={21} />
            </a>
            <a
              href={links.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              onClick={handleLinkClick}
              style={{
                width: '48px',
                height: '48px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(247,239,207,0.08)',
                border: '1px solid rgba(247,239,207,0.3)',
                color: '#F7EFCF'
              }}
            >
              <TripadvisorIcon size={23} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
