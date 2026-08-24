import React from 'react';
import { links } from '../data/content';

export default function Hero({ t }) {
  return (
    <header
      id="topo"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: '#123A1E',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <img
        src="/assets/praia.jpg"
        alt="Vista do Rio de Janeiro a partir do Morro da Urca"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%'
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18,58,30,0.72) 0%, rgba(18,58,30,0.35) 38%, rgba(18,58,30,0.92) 100%)'
        }}
      />

      {/* Content Inner */}
      <div
        className="container"
        style={{
          position: 'relative',
          paddingTop: 'clamp(110px, 10vw, 150px)',
          paddingBottom: 'clamp(40px, 6vw, 74px)',
          display: 'grid',
          gap: 'clamp(20px, 2.4vw, 34px)',
          zIndex: 2
        }}
      >
        {/* Kicker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-oswald)',
            fontSize: 'clamp(11px, 1.4vw, 13px)',
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: '#F7EFCF',
            animation: 'araaUp 0.9s cubic-bezier(0.16,1,0.3,1) both'
          }}
        >
          <span>Restaurante</span>
          <img
            src="/assets/logo-cream.png"
            alt=""
            style={{ width: '15px', height: '15px', display: 'block' }}
          />
          <span>Morro da Urca</span>
        </div>

        {/* Main Brand Title */}
        <h1
          style={{
            animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            margin: 0,
            lineHeight: 0
          }}
        >
          <img
            src="/assets/marca-cream.png"
            alt="ARAÁ"
            style={{
              width: 'clamp(210px, 46vw, 640px)',
              height: 'auto',
              display: 'block'
            }}
          />
        </h1>

        {/* Lead text */}
        <p
          style={{
            animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both',
            margin: 0,
            maxWidth: '620px',
            fontSize: 'clamp(17px, 2.2vw, 25px)',
            lineHeight: 1.45,
            color: 'rgba(247,239,207,0.94)',
            textWrap: 'pretty'
          }}
        >
          {t.heroLead}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            alignItems: 'center'
          }}
        >
          <a
            href={links.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-oswald)',
              fontWeight: 500,
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#F6C744',
              color: '#123A1E',
              padding: 'clamp(13px, 2vh, 17px) clamp(24px, 3vw, 34px)',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
              textAlign: 'center'
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
            {t.heroCtaReserva}
          </a>

          <a
            href="#cardapio"
            style={{
              fontFamily: 'var(--font-oswald)',
              fontWeight: 500,
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              border: '1px solid rgba(247,239,207,0.6)',
              color: '#F7EFCF',
              padding: 'clamp(13px, 2vh, 17px) clamp(24px, 3vw, 34px)',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F7EFCF';
              e.currentTarget.style.color = '#123A1E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#F7EFCF';
            }}
          >
            {t.heroCtaMenu}
          </a>
        </div>

        {/* Feature Tags */}
        <div
          style={{
            animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.42s both',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px 18px',
            fontFamily: 'var(--font-oswald)',
            fontSize: 'clamp(10.5px, 1.3vw, 12px)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(247,239,207,0.72)',
            paddingTop: '12px',
            borderTop: '1px solid rgba(247,239,207,0.22)'
          }}
        >
          <span>{t.heroTag1}</span>
          <img src="/assets/logo-cream.png" alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
          <span>{t.heroTag2}</span>
          <img src="/assets/logo-cream.png" alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
          <span>{t.heroTag3}</span>
        </div>
      </div>
    </header>
  );
}
