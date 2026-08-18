import React, { useState, useRef, useEffect } from 'react';
import { getSiteContent } from './data/content';

export default function App() {
  const [lang, setLang] = useState('pt');
  const [catAtiva, setCatAtiva] = useState(0);
  const [faqAberto, setFaqAberto] = useState(-1);

  const railRef = useRef(null);
  const loopTimerRef = useRef(null);

  const content = getSiteContent(lang);
  const {
    langLabel,
    whatsappUrl,
    reservaUrl,
    navMenu,
    navEspaco,
    navEventos,
    navLocal,
    navFaq,
    navReservar,
    heroLead,
    heroCtaReserva,
    heroCtaMenu,
    heroTag1,
    heroTag2,
    heroTag3,
    sobreKicker,
    sobreTitulo,
    sobreP1,
    sobreP2,
    stat1,
    stat2,
    stat3,
    menuKicker,
    menuTitulo,
    menuLead,
    legendaV,
    legendaVG,
    legendaCompartilhar,
    menuCta,
    espacoKicker,
    espacoTitulo,
    espacoLead,
    eventosKicker,
    eventosTitulo,
    eventosP1,
    eventosItens,
    eventosCta,
    reservasKicker,
    reservasTitulo,
    reservasLead,
    reservaCard1Titulo,
    reservaCard1Texto,
    reservaCard1Cta,
    reservaCard2Titulo,
    reservaCard2Texto,
    reservaCard2Cta,
    reservaCard3Titulo,
    reservaCard3Texto,
    reservaCard3Cta,
    localKicker,
    localTitulo,
    enderecoLabel,
    horarioLabel,
    horarios,
    horarioNota,
    localCta1,
    faqTitulo,
    faqs,
    footerNav,
    footerContato,
    footerHorario,
    footerCredito,
    secoes,
    ambientes
  } = content;

  // Triplicar lista para carrossel contínuo com salto imperceptível
  const ambientesLoop = [...ambientes, ...ambientes, ...ambientes];

  const catIdx = Math.min(catAtiva, secoes.length - 1);
  const secaoAtiva = secoes[catIdx] || { titulo: '', nota: '', itens: [] };

  const rolarRail = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const figs = Array.from(el.querySelectorAll('figure'));
    if (!figs.length) return;
    const centro = el.scrollLeft + el.clientWidth / 2;
    let i = 0;
    let melhor = Infinity;
    figs.forEach((f, k) => {
      const fc = f.offsetLeft + f.offsetWidth / 2;
      if (Math.abs(fc - centro) < melhor) {
        melhor = Math.abs(fc - centro);
        i = k;
      }
    });
    const alvo = figs[Math.max(0, Math.min(figs.length - 1, i + dir))];
    if (alvo) {
      el.scrollTo({
        left: alvo.offsetLeft - (el.clientWidth - alvo.offsetWidth) / 2,
        behavior: 'smooth'
      });
    }
  };

  const ajustarLoop = () => {
    const el = railRef.current;
    if (!el) return;
    const terco = el.scrollWidth / 3;
    if (terco < 40) return;
    if (el.scrollLeft < terco * 0.35) {
      el.scrollLeft += terco;
    } else if (el.scrollLeft > terco * 1.65) {
      el.scrollLeft -= terco;
    }
  };

  const handleRailScroll = () => {
    clearTimeout(loopTimerRef.current);
    loopTimerRef.current = setTimeout(() => {
      ajustarLoop();
    }, 160);
  };

  useEffect(() => {
    const el = railRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollLeft = el.scrollWidth / 3;
      });
    }

    const alvos = Array.from(document.querySelectorAll('[data-reveal]'));
    let obs;
    if (window.IntersectionObserver && alvos.length) {
      alvos.forEach((n) => {
        n.style.opacity = '0';
        n.style.transform = 'translateY(26px)';
        n.style.transition = 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)';
      });
      obs = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.style.opacity = '1';
            e.target.style.transform = 'none';
            obs.unobserve(e.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
      );
      alvos.forEach((n) => obs.observe(n));
    }

    return () => {
      clearTimeout(loopTimerRef.current);
      if (obs) obs.disconnect();
    };
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const tabBaseStyle = "flex: 0 0 auto; white-space: nowrap; font-family: Oswald, sans-serif; font-weight: 500; font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 17px; border-radius: 999px; cursor: pointer; transition: all 0.25s cubic-bezier(0.16,1,0.3,1);";

  return (
    <div style={{ fontFamily: 'Karla, system-ui, sans-serif', background: '#F5E7BE', overflowX: 'hidden' }}>
      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90, background: 'rgba(18,58,30,0.94)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(245,231,190,0.18)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '28px' }}>
          <a href="#topo" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#F5E7BE', flex: '0 0 auto' }}>
            <img src="/assets/logo-yellow.png" alt="Logo Araá" style={{ width: '26px', height: '26px', display: 'block' }} />
            <span style={{ fontFamily: "'Kumbh Sans', sans-serif", fontWeight: 700, fontSize: '20px', letterSpacing: '0.16em', color: '#F5E7BE' }}>ARAÁ</span>
          </a>
          <div className="araa-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '22px', marginLeft: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="#cardapio" className="nav-link-hover" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(245,231,190,0.86)' }}>{navMenu}</a>
            <a href="#espaco" className="nav-link-hover" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(245,231,190,0.86)' }}>{navEspaco}</a>
            <a href="#eventos" className="nav-link-hover" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(245,231,190,0.86)' }}>{navEventos}</a>
            <a href="#local" className="nav-link-hover" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(245,231,190,0.86)' }}>{navLocal}</a>
            <a href="#faq" className="nav-link-hover" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(245,231,190,0.86)' }}>{navFaq}</a>
            <button onClick={toggleLang} className="nav-lang-btn" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.12em', background: 'transparent', color: 'rgba(245,231,190,0.7)', border: '1px solid rgba(245,231,190,0.35)', borderRadius: '999px', padding: '6px 12px', cursor: 'pointer' }}>{langLabel}</button>
            <a href={reservaUrl} target="_blank" rel="noopener noreferrer" className="nav-reserva-btn" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.13em', textTransform: 'uppercase', background: '#D9342B', color: '#F5E7BE', padding: '10px 20px', borderRadius: '999px' }}>{navReservar}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="topo" style={{ position: 'relative', minHeight: '100dvh', display: 'flex', alignItems: 'flex-end', background: '#123A1E', overflow: 'hidden' }}>
        <img src="/assets/vista.jpg" alt="Vista do Rio de Janeiro a partir do Morro da Urca" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,58,30,0.72) 0%, rgba(18,58,30,0.35) 38%, rgba(18,58,30,0.9) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: '22px', border: '1px solid rgba(245,231,190,0.38)', borderRadius: '44px', pointerEvents: 'none' }}></div>
        <div className="araa-hero-inner" style={{ position: 'relative', width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '130px clamp(22px, 5vw, 60px) 74px', display: 'grid', gap: '34px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Oswald, sans-serif', fontSize: '13px', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#F6C744', animation: 'araaUp 0.9s cubic-bezier(0.16,1,0.3,1) both' }}>
            <span>Restaurante</span>
            <img src="/assets/logo-yellow.png" alt="" style={{ width: '15px', height: '15px', animation: 'araaFloat 7s ease-in-out infinite' }} />
            <span>Morro da Urca</span>
          </div>
          <h1 style={{ animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s both', margin: 0, fontFamily: "'Kumbh Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(60px, 12vw, 168px)', lineHeight: 0.86, letterSpacing: '0.06em', color: '#F7EFCF' }}>ARAÁ</h1>
          <p style={{ animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both', margin: 0, maxWidth: '620px', fontSize: 'clamp(19px, 2vw, 25px)', lineHeight: 1.45, color: 'rgba(247,239,207,0.94)', textWrap: 'pretty' }}>{heroLead}</p>
          <div style={{ animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a href={reservaUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-reserva" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#D9342B', color: '#F7EFCF', padding: '17px 34px', borderRadius: '999px' }}>{heroCtaReserva}</a>
            <a href="#cardapio" className="hero-btn-menu" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(247,239,207,0.6)', color: '#F7EFCF', padding: '17px 34px', borderRadius: '999px' }}>{heroCtaMenu}</a>
          </div>
          <div style={{ animation: 'araaUp 1s cubic-bezier(0.16,1,0.3,1) 0.42s both', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 22px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.72)', paddingTop: '8px', borderTop: '1px solid rgba(247,239,207,0.22)' }}>
            <span>{heroTag1}</span>
            <img src="/assets/logo-cream.png" alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
            <span>{heroTag2}</span>
            <img src="/assets/logo-cream.png" alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
            <span>{heroTag3}</span>
          </div>
        </div>
      </header>

      {/* SOBRE */}
      <section className="araa-section" style={{ position: 'relative', background: '#F5E7BE', padding: '110px 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-fruits-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.16, pointerEvents: 'none' }}></div>
        <div className="araa-split" data-reveal="" style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '68px', alignItems: 'center' }}>
          <div style={{ display: 'grid', gap: '26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#85862E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              <span>{sobreKicker}</span>
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, textTransform: 'uppercase', color: '#123A1E' }}>{sobreTitulo}</h2>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>{sobreP1}</p>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>{sobreP2}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '18px', marginTop: '8px' }}>
              <div style={{ borderTop: '2px solid #D9342B', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '34px', color: '#123A1E' }}>100%</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#85862E' }}>{stat1}</div>
              </div>
              <div style={{ borderTop: '2px solid #E2762A', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '34px', color: '#123A1E' }}>200</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#85862E' }}>{stat2}</div>
              </div>
              <div style={{ borderTop: '2px solid #85862E', paddingTop: '12px' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '34px', color: '#123A1E' }}>4</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#85862E' }}>{stat3}</div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="/assets/foto-cafe.jpg" alt="Mesa de cafe da manha do Araa" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '14px', border: '1px solid rgba(247,239,207,0.75)', borderRadius: '24px', pointerEvents: 'none' }}></div>
          </div>
        </div>
      </section>

      {/* FAIXA DE FOTOS GASTRONOMIA */}
      <section style={{ background: '#123A1E', padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          <img src="/assets/foto-carne.jpg" alt="Corte grelhado" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
          <img src="/assets/foto-linguica.jpg" alt="Linguica com mandioca frita" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
          <img src="/assets/foto-03.jpg" alt="Prato do Araa" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
          <img src="/assets/foto-07.jpg" alt="Prato do Araa" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
          <img src="/assets/foto-10.jpg" alt="Prato do Araa" style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="araa-section" style={{ position: 'relative', background: '#85862E', padding: '100px 24px 120px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-fruits-light.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.22, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'grid', gap: '16px', justifyItems: 'center', marginBottom: '54px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5E7BE' }}>
              <img src="/assets/logo-cream.png" alt="" style={{ width: '15px', height: '15px' }} />
              {menuKicker}
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(36px, 5vw, 62px)', lineHeight: 1, textTransform: 'uppercase', color: '#F7EFCF' }}>{menuTitulo}</h2>
            <p style={{ margin: 0, maxWidth: '620px', fontSize: '17px', lineHeight: 1.6, color: 'rgba(247,239,207,0.9)' }}>{menuLead}</p>
          </div>

          <div className="araa-paper" data-reveal="" style={{ position: 'relative', background: '#FAF0CE', borderRadius: '26px', padding: '56px clamp(24px, 5vw, 64px) 64px', boxShadow: '0 30px 70px rgba(18,58,30,0.28)' }}>
            <div style={{ display: 'grid', justifyItems: 'center', gap: '6px', paddingBottom: '26px', borderBottom: '1.5px solid rgba(18,58,30,0.45)' }}>
              <img src="/assets/logo-green.png" alt="Logo Araa" style={{ width: '30px', height: '30px' }} />
              <div style={{ fontFamily: "'Kumbh Sans', sans-serif", fontWeight: 700, fontSize: '30px', letterSpacing: '0.14em', textIndent: '0.14em', color: '#123A1E' }}>ARAÁ</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '9.5px', letterSpacing: '0.34em', textIndent: '0.34em', textTransform: 'uppercase', color: 'rgba(18,58,30,0.85)' }}>Gastronomia &#10033; Brasilidade</div>
            </div>

            {/* ABAS DO CARDÁPIO */}
            <div className="araa-rail" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-start', overflowX: 'auto', scrollbarWidth: 'none', marginTop: '28px', paddingBottom: '4px' }}>
              {secoes.map((s, i) => {
                const isActive = i === catIdx;
                return (
                  <button
                    key={s.titulo}
                    onClick={() => setCatAtiva(i)}
                    style={{
                      flex: '0 0 auto',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 500,
                      fontSize: '12.5px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '10px 17px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                      background: isActive ? '#123A1E' : 'transparent',
                      color: isActive ? '#FAF0CE' : 'rgba(18,58,30,0.72)',
                      border: isActive ? '1.5px solid #123A1E' : '1.5px solid rgba(18,58,30,0.35)'
                    }}
                  >
                    {s.titulo}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', margin: '40px 0 10px', paddingBottom: '12px', borderBottom: '1.5px solid rgba(18,58,30,0.28)' }}>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(24px, 3.2vw, 34px)', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#123A1E' }}>{secaoAtiva.titulo}</span>
              {secaoAtiva.nota && (
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '12.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(18,58,30,0.6)' }}>{secaoAtiva.nota}</span>
              )}
            </div>
            <div style={{ height: '20px' }}></div>

            {/* ITENS DA SEÇÃO ATIVA */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '20px 56px', alignItems: 'start', alignContent: 'start' }}>
              {secaoAtiva.itens.map((item, idx) => (
                <div key={idx} style={{ breakInside: 'avoid' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '16.5px', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#123A1E' }}>{item.nome}</span>
                    {item.tag && (
                      <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#85862E' }}>{item.tag}</span>
                    )}
                  </div>
                  {item.desc && (
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: '15px', lineHeight: 1.42, color: 'rgba(18,58,30,0.82)', paddingLeft: '14px', maxWidth: '48ch', textWrap: 'pretty' }}>{item.desc}</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 26px', justifyContent: 'center', marginTop: '30px', paddingTop: '26px', borderTop: '1.5px solid rgba(18,58,30,0.5)', fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(18,58,30,0.75)' }}>
              <span>{legendaV}</span>
              <span>{legendaVG}</span>
              <span>{legendaCompartilhar}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <a href="https://livemenu.app/menu/6932e39d799ffa9c8338b779" target="_blank" rel="noopener noreferrer" className="menu-full-cta" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#123A1E', color: '#FAF0CE', padding: '15px 30px', borderRadius: '999px' }}>{menuCta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ESPAÇO */}
      <section id="espaco" className="araa-section" style={{ position: 'relative', background: '#123A1E', padding: '110px 0 120px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-tropico-light.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.3, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'grid', gap: '14px', maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F6C744' }}>
                <img src="/assets/logo-yellow.png" alt="" style={{ width: '15px', height: '15px' }} />
                {espacoKicker}
              </div>
              <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(36px, 5vw, 62px)', lineHeight: 1, textTransform: 'uppercase', color: '#F7EFCF' }}>{espacoTitulo}</h2>
              <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: 'rgba(247,239,207,0.82)', textWrap: 'pretty' }}>{espacoLead}</p>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <button onClick={() => rolarRail(-1)} aria-label="Anterior" className="rail-nav-btn" style={{ position: 'absolute', left: 'clamp(10px, 3vw, 34px)', top: 'calc(50% - 26px)', transform: 'translateY(-50%)', zIndex: 3, width: '56px', height: '56px', borderRadius: '50%', border: 0, background: 'rgba(247,239,207,0.94)', color: '#123A1E', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: '30px', lineHeight: 1, padding: '0 4px 4px 0', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.28)' }}>&#8249;</button>
          <button onClick={() => rolarRail(1)} aria-label="Próximo" className="rail-nav-btn" style={{ position: 'absolute', right: 'clamp(10px, 3vw, 34px)', top: 'calc(50% - 26px)', transform: 'translateY(-50%)', zIndex: 3, width: '56px', height: '56px', borderRadius: '50%', border: 0, background: 'rgba(247,239,207,0.94)', color: '#123A1E', fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: '30px', lineHeight: 1, padding: '0 0 4px 4px', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.28)' }}>&#8250;</button>
          <div ref={railRef} id="araa-espaco-rail" className="araa-rail" onScroll={handleRailScroll} style={{ display: 'flex', gap: '18px', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', padding: '0 max(24px, calc(50vw - 616px)) 6px' }}>
            {ambientesLoop.map((amb, idx) => (
              <figure key={idx} style={{ flex: '0 0 auto', width: 'min(400px, 80vw)', margin: 0, scrollSnapAlign: 'center', display: 'grid', gap: '14px', overflow: 'hidden' }}>
                <img src={amb.src} alt={amb.nome} className="ambiente-img" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: '18px', display: 'block' }} />
                <figcaption style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <img src="/assets/logo-yellow.png" alt="" style={{ width: '13px', height: '13px' }} />
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.9)' }}>{amb.nome}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="araa-section" style={{ position: 'relative', background: '#F5E7BE', padding: '110px 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-fruits-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.16, pointerEvents: 'none' }}></div>
        <div className="araa-split" data-reveal="" style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '62px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="/assets/espaco-corredor.jpg" alt="Salao principal corredor" style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '14px', border: '1px solid rgba(247,239,207,0.7)', borderRadius: '24px', pointerEvents: 'none' }}></div>
          </div>
          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#85862E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              {eventosKicker}
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, textTransform: 'uppercase', color: '#123A1E' }}>{eventosTitulo}</h2>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.62, color: 'rgba(18,58,30,0.86)', textWrap: 'pretty' }}>{eventosP1}</p>
            <div style={{ display: 'grid', gap: '12px' }}>
              {eventosItens.map((ev, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'baseline', borderBottom: '1px solid rgba(18,58,30,0.18)', paddingBottom: '12px' }}>
                  <img src="/assets/logo-red.png" alt="" style={{ width: '13px', height: '13px', flex: '0 0 auto' }} />
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '16px', letterSpacing: '0.02em', color: '#123A1E' }}>{ev}</span>
                </div>
              ))}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="eventos-cta" style={{ justifySelf: 'start', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '14px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#123A1E', color: '#F5E7BE', padding: '16px 30px', borderRadius: '999px' }}>{eventosCta}</a>
          </div>
        </div>
      </section>

      {/* RESERVAS */}
      <section id="reservas" style={{ position: 'relative', background: '#F5E7BE', padding: '20px 24px 110px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-fruits-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.16, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '14px', maxWidth: '680px', marginBottom: '44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#85862E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              {reservasKicker}
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, textTransform: 'uppercase', color: '#123A1E' }}>{reservasTitulo}</h2>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, color: 'rgba(18,58,30,0.84)', textWrap: 'pretty' }}>{reservasLead}</p>
          </div>
          <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#123A1E', borderRadius: '24px', padding: '34px', display: 'grid', gap: '16px', alignContent: 'start' }}>
              <img src="/assets/logo-yellow.png" alt="" style={{ width: '40px', height: '40px' }} />
              <h3 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '24px', textTransform: 'uppercase', color: '#F7EFCF' }}>{reservaCard1Titulo}</h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.55, color: 'rgba(247,239,207,0.82)' }}>{reservaCard1Texto}</p>
              <a href={reservaUrl} target="_blank" rel="noopener noreferrer" className="reserva-card-btn-1" style={{ justifySelf: 'start', marginTop: '6px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#F6C744', color: '#123A1E', padding: '14px 26px', borderRadius: '999px' }}>{reservaCard1Cta}</a>
            </div>
            <div style={{ background: '#D9342B', borderRadius: '24px', padding: '34px', display: 'grid', gap: '16px', alignContent: 'start' }}>
              <img src="/assets/logo-cream.png" alt="" style={{ width: '40px', height: '40px' }} />
              <h3 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '24px', textTransform: 'uppercase', color: '#FAF0CE' }}>{reservaCard2Titulo}</h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.55, color: 'rgba(250,240,206,0.9)' }}>{reservaCard2Texto}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="reserva-card-btn-2" style={{ justifySelf: 'start', marginTop: '6px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#FAF0CE', color: '#123A1E', padding: '14px 26px', borderRadius: '999px' }}>{reservaCard2Cta}</a>
            </div>
            <div style={{ background: '#F5E7BE', border: '1.5px solid rgba(18,58,30,0.35)', borderRadius: '24px', padding: '34px', display: 'grid', gap: '16px', alignContent: 'start' }}>
              <img src="/assets/logo-red.png" alt="" style={{ width: '40px', height: '40px' }} />
              <h3 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '24px', textTransform: 'uppercase', color: '#123A1E' }}>{reservaCard3Titulo}</h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.55, color: 'rgba(18,58,30,0.82)' }}>{reservaCard3Texto}</p>
              <a href="https://www.parquebondinho.com" target="_blank" rel="noopener noreferrer" className="reserva-card-btn-3" style={{ justifySelf: 'start', marginTop: '6px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1.5px solid #123A1E', color: '#123A1E', padding: '14px 26px', borderRadius: '999px' }}>{reservaCard3Cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E HORÁRIOS */}
      <section id="local" className="araa-section" style={{ position: 'relative', background: '#123A1E', padding: '110px 24px 120px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-tropico-light.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.22, pointerEvents: 'none' }}></div>
        <div className="araa-split" data-reveal="" style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '54px', alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: '26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F6C744' }}>
              <img src="/assets/logo-yellow.png" alt="" style={{ width: '15px', height: '15px' }} />
              {localKicker}
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, textTransform: 'uppercase', color: '#F7EFCF' }}>{localTitulo}</h2>
            <div style={{ display: 'grid', gap: '6px' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#85862E' }}>{enderecoLabel}</div>
              <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.5, color: 'rgba(247,239,207,0.92)' }}>Jardim dos Discos, Morro da Urca<br />Av. Pasteur, 520 &mdash; Urca, Rio de Janeiro</p>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#85862E' }}>{horarioLabel}</div>
              {horarios.map((h, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '18px', borderBottom: '1px solid rgba(247,239,207,0.2)', paddingBottom: '9px' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: '15px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.9)' }}>{h.dia}</span>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '15px', color: '#F6C744' }}>{h.hora}</span>
                </div>
              ))}
              <p style={{ margin: '6px 0 0', fontSize: '14px', lineHeight: 1.5, color: 'rgba(247,239,207,0.6)' }}>{horarioNota}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="https://maps.app.goo.gl/r4QkZnxLQaUDboBfA" target="_blank" rel="noopener noreferrer" className="local-map-btn" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', background: '#F7EFCF', color: '#123A1E', padding: '14px 26px', borderRadius: '999px' }}>{localCta1}</a>
              <a href="https://www.tripadvisor.com.br/Restaurant_Review-g303506-d34261205-Reviews-Araa-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html" target="_blank" rel="noopener noreferrer" className="local-ta-btn" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(247,239,207,0.55)', color: '#F7EFCF', padding: '14px 26px', borderRadius: '999px' }}>TripAdvisor</a>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '26px', overflow: 'hidden', border: '1px solid rgba(247,239,207,0.3)' }}>
            <iframe src="https://www.google.com/maps?q=Ara%C3%A1%20Morro%20da%20Urca%2C%20Av.%20Pasteur%20520%2C%20Urca%2C%20Rio%20de%20Janeiro&output=embed" title="Mapa do Araa no Morro da Urca" loading="lazy" style={{ width: '100%', height: '520px', border: 0, display: 'block', filter: 'saturate(0.9)' }}></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="araa-section" style={{ position: 'relative', background: '#F5E7BE', padding: '110px 24px 120px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-fruits-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.13, pointerEvents: 'none' }}></div>
        <div data-reveal="" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '14px', justifyItems: 'center', textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#85862E' }}>
              <img src="/assets/logo-green.png" alt="" style={{ width: '15px', height: '15px', opacity: 0.85 }} />
              FAQ
            </div>
            <h2 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, textTransform: 'uppercase', color: '#123A1E' }}>{faqTitulo}</h2>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {faqs.map((f, i) => {
              const isOpen = faqAberto === i;
              return (
                <div key={i} style={{ background: '#FAF0CE', border: '1px solid rgba(18,58,30,0.2)', borderRadius: '18px', overflow: 'hidden' }}>
                  <button onClick={() => setFaqAberto(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left', background: 'transparent', border: 0, padding: '20px 24px', cursor: 'pointer' }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '17px', letterSpacing: '0.02em', color: '#123A1E', flex: 1 }}>{f.q}</span>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', color: '#D9342B', lineHeight: 1 }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <p style={{ margin: 0, padding: '0 24px 22px', fontSize: '16.5px', lineHeight: 1.6, color: 'rgba(18,58,30,0.84)', textWrap: 'pretty' }}>{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: 'relative', background: '#123A1E', padding: '74px 24px 40px', borderTop: '6px solid #85862E', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/pattern-tropico-light.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', opacity: 0.2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '42px', alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: '14px', justifyItems: 'start' }}>
            <img src="/assets/logo-yellow.png" alt="Logo Araa" style={{ width: '46px', height: '46px' }} />
            <div style={{ fontFamily: "'Kumbh Sans', sans-serif", fontWeight: 700, fontSize: '34px', letterSpacing: '0.16em', color: '#F7EFCF' }}>ARAÁ</div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.7)' }}>Morro da Urca &#10033; Rio de Janeiro</div>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#85862E' }}>{footerNav}</div>
            <a href="#cardapio" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navMenu}</a>
            <a href="#espaco" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navEspaco}</a>
            <a href="#eventos" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navEventos}</a>
            <a href="#reservas" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navReservar}</a>
            <a href="#faq" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navFaq}</a>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#85862E' }}>{footerContato}</div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>WhatsApp &mdash; (21) 96610-5728</a>
            <a href="https://www.instagram.com/araa.brasil/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>Instagram @araa.brasil</a>
            <a href="https://maps.app.goo.gl/r4QkZnxLQaUDboBfA" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>Google Maps</a>
            <a href={reservaUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(247,239,207,0.88)', fontSize: '16px' }}>{navReservar}</a>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#85862E' }}>{horarioLabel}</div>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'rgba(247,239,207,0.88)' }}>{footerHorario}</p>
          </div>
        </div>
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '46px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(247,239,207,0.2)', display: 'flex', flexWrap: 'wrap', gap: '12px 24px', justifyContent: 'space-between', fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(247,239,207,0.55)' }}>
          <span>&copy; 2026 Araá Brasil</span>
          <span>{footerCredito}</span>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" style={{ position: 'fixed', right: '22px', bottom: '22px', zIndex: 95, display: 'flex', alignItems: 'center', gap: '10px', background: '#123A1E', color: '#F7EFCF', border: '1px solid rgba(247,239,207,0.35)', padding: '14px 22px', borderRadius: '999px', boxShadow: '0 14px 34px rgba(18,58,30,0.42)', fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        <img src="/assets/logo-yellow.png" alt="" style={{ width: '17px', height: '17px' }} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
