import React, { useState, useEffect } from 'react';
import { content } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PhotoStrip from './components/PhotoStrip';
import MenuSection from './components/MenuSection';
import Carousel from './components/Carousel';
import Events from './components/Events';
import Reservations from './components/Reservations';
import Location from './components/Location';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WhatsappFab from './components/WhatsappFab';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('araa_lang') || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('araa_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Scroll reveal observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !revealElements.length) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  const t = content[lang] || content.pt;

  return (
    <div style={{ backgroundColor: '#F5E7BE', overflowX: 'hidden', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <PhotoStrip />
        <MenuSection t={t} />
        <Carousel t={t} />
        <Events t={t} />
        <Reservations t={t} />
        <Location t={t} />
        <FaqSection t={t} />
      </main>
      <Footer t={t} />
      <WhatsappFab />
    </div>
  );
}
