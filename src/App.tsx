import { useState, useRef, useLayoutEffect, useEffect, type CSSProperties } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';

const green = '#50f096';
const navy = '#28234b';
const muted = 'rgba(40,35,75,0.55)';
const gray = '#f2f2f2';
const line = 'rgba(40,35,75,0.08)';
const shadowSoft = '0 12px 36px rgba(40,35,75,0.08)';
const shell = 'w-[min(calc(100%-32px),1180px)] mx-auto';

function NavToggle() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.startsWith('/business') ? 'business'
               : location.pathname.startsWith('/corporate') ? 'corporate'
               : 'people';

  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillRect, setPillRect] = useState({ left: 4, width: 100 });

  const options = ['people', 'business', 'corporate'] as const;
  const labels = { people: 'Pessoas', business: 'Negócios', corporate: 'Comunidade' };
  const routes = { people: '/people', business: '/business', corporate: '/corporate' };

  const measure = () => {
    const idx = options.indexOf(active as typeof options[number]);
    const btn = btnRefs.current[idx];
    const track = trackRef.current;
    if (!btn || !track) return;
    const tBox = track.getBoundingClientRect();
    const bBox = btn.getBoundingClientRect();
    setPillRect({ left: bBox.left - tBox.left, width: bBox.width });
  };

  useLayoutEffect(() => { measure(); }, [active]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  return (
    <div
      ref={trackRef}
      className="relative flex items-center rounded-full"
      style={{ background: gray, padding: '4px', boxShadow: 'inset 0 2px 8px rgba(40,35,75,0.10)' }}
    >
      <motion.div
        className="absolute top-1 bottom-1 rounded-full pointer-events-none"
        animate={{
          left: pillRect.left,
          width: pillRect.width,
          backgroundColor: active === 'people' ? green : active === 'business' ? '#2D2F5E' : '#00A896',
        }}
        transition={{
          left: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
          width: { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 },
          backgroundColor: { duration: 0.28 },
        }}
        style={{ boxShadow: active === 'people' ? '0 2px 12px rgba(80,240,150,0.35)' : 'none' }}
      />
      {options.map((option, i) => (
        <button
          key={option}
          ref={(el: HTMLButtonElement | null) => { btnRefs.current[i] = el; }}
          onClick={() => { if (option !== active) navigate(routes[option]); }}
          className="relative z-10 rounded-full"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px 18px', fontSize: '13px', fontWeight: 700,
            fontFamily: "'Ferom', sans-serif", whiteSpace: 'nowrap',
            color: active === option
              ? (active === 'people' ? navy : '#fff')
              : 'rgba(40,35,75,0.45)',
          }}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}

function BentoSection({ nav }: { nav: ReturnType<typeof useNavigate> }) {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const items = [
    { num: '01', tag: 'Descoberta', title: 'Encontre o que pulsa', desc: 'Lugares únicos, experiências reais e negócios do bairro que você ainda não conhece, organizados por contexto e confiança.' },
    { num: '02', tag: 'Comunidades', title: 'Seu bairro tem voz', desc: 'Entre em grupos locais, troque indicações e construa vínculos reais com quem divide o mesmo território.' },
    { num: '03', tag: 'Eventos', title: 'Acontece agora', desc: 'Rolês, encontros e movimentações perto de você, com pessoas que você pode conhecer.' },
    { num: '04', tag: 'Negócios', title: 'O melhor a sua volta', desc: 'Vitrines locais e perfis verificados para você descobrir e apoiar quem faz a sua localidade pulsar.' },
    { num: '05', tag: 'Matilha', title: 'Sua Matilha. Suas Regras.', desc: 'Crie grupos privados com sua família, seus amigos, seus vizinhos, com regras claras, convite por aprovação e rituais que mantêm o grupo vivo sem esforço.' },
  ];

  return (
    <section id="produtos" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className={shell}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}
        >
          <p style={{ margin: '0 0 12px', fontSize: '22px', fontWeight: 700, letterSpacing: '0.1em', color: navy, textTransform: 'uppercase' as const }}>
            Produtos
          </p>
          <h2 style={{ margin: 0, fontSize: 'clamp(32px, 4.5vw, 62px)', lineHeight: 1.0, letterSpacing: '-0.05em', fontWeight: 900, color: navy }}>
            Tudo o que você precisa<br />
            <span>está no seu bairro</span>
          </h2>
          <p style={{ margin: '16px 0 0', fontSize: '16px', color: navy, opacity: 0.7, lineHeight: 1.65 }}>
            Cinco ferramentas construídas em torno de um único princípio: <strong>confiança real</strong>.
          </p>
        </motion.div>

        <div style={{ height: '1px', background: 'rgba(40,35,75,0.14)' }} />

        {items.map((item, i) => {
          const isActive = activeRow === i;
          const isDimmed = activeRow !== null && !isActive;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveRow((prev: number | null) => prev === i ? null : i)}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              style={{ position: 'relative', cursor: 'pointer', borderRadius: '12px', background: gray, marginTop: '4px' }}
            >
              <motion.div
                animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: navy, transformOrigin: 'top', borderRadius: '3px 0 0 3px' }}
              />
              <motion.div
                animate={{ opacity: isDimmed ? 0.35 : 1 }}
                transition={{ duration: 0.2 }}
                style={{ padding: '0 20px 24px 20px' }}
              >
                <div
                  className="grid"
                  style={{ gridTemplateColumns: '32px minmax(0,110px) 1fr', alignItems: 'baseline', padding: '24px 0 0' }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(40,35,75,0.25)' }}>
                    {item.num}
                  </span>
                  <motion.span
                    animate={{ color: isActive ? navy : 'rgba(40,35,75,0.4)' }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' as const, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}
                  >
                    {item.tag}
                  </motion.span>
                  <motion.h3
                    animate={{ color: isActive ? navy : 'rgba(40,35,75,0.72)' }}
                    transition={{ duration: 0.2 }}
                    style={{ margin: 0, fontSize: 'clamp(20px, 3vw, 43px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
                <motion.div
                  initial={false}
                  animate={{ maxHeight: isActive ? 200 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden', paddingLeft: '32px' }}
                >
                  <p style={{ margin: '12px 0 0', fontSize: '15px', color: muted, lineHeight: 1.7, maxWidth: '52ch' }}>
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={() => nav('/cadastro?mode=people')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: 700, color: navy, fontFamily: "'Ferom', sans-serif" }}
          >
            Comece a farejar lugares incríveis→
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();

  const btnDark: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 36px', borderRadius: '999px', fontWeight: 700,
    background: navy, color: '#f2f2f2', border: 'none', cursor: 'pointer',
    fontSize: '18px', fontFamily: "'Ferom', sans-serif", minHeight: '48px',
  };

  const logoFilter = 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(600%) hue-rotate(215deg) brightness(85%)';

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ background: green, minHeight: '100vh', fontFamily: "'Ferom', Inter, -apple-system, sans-serif", color: navy }}
    >
      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '60px', zIndex: 80,
        background: 'rgba(40,35,75,0.97)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(80,240,150,0.14)',
        display: 'flex', alignItems: 'center',
      }}>
        <div className={shell} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/mascote-colorido.png" alt="Sniffer" style={{ height: '38px', width: 'auto' }} />
            <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '20px', width: 'auto', maxWidth: '120px', objectFit: 'contain' }} />
          </a>
          <div className="hidden md:block">
            <NavToggle />
          </div>
          <button
            onClick={() => navigate('/cadastro?mode=people')}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '9px 20px', borderRadius: '999px',
              background: `linear-gradient(180deg, #68f6a5 0%, ${green} 100%)`,
              color: navy, border: 'none', cursor: 'pointer',
              fontSize: '13px', fontWeight: 700, fontFamily: "'Ferom', sans-serif",
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            Seja parte dessa revolução
          </button>
        </div>
      </nav>

      <main id="top" style={{ paddingTop: '60px' }}>

        {/* ── Hero ── */}
        <section style={{ padding: 'clamp(64px, 8vw, 96px) 0 clamp(40px, 6vw, 60px)' }}>
          <div className={`${shell} grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
            <div>
              <h1 style={{ margin: 0, fontSize: 'clamp(34px, 5.5vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.04em', fontWeight: 900, color: navy }}>
                Descubra o que realmente vale a pena na{' '}
                <span style={{ fontFamily: "'Buasley', cursive", fontWeight: 400, whiteSpace: 'nowrap' }}>sua cidade</span>.
              </h1>
              <p style={{ margin: '20px 0 0', fontSize: 'clamp(16px, 1.8vw, 20px)', color: navy, opacity: 0.7, maxWidth: '36ch', lineHeight: 1.6 }}>
                Lugares, pessoas, comunidades e eventos. Todos conectados por contexto real pra você viver sua cidade de verdade.
              </p>
              <div style={{ marginTop: '28px' }}>
                <button onClick={() => navigate('/cadastro?mode=people')} style={btnDark}>
                  Bora farejar!
                </button>
              </div>
              <div className="flex flex-col gap-y-2 mt-6" style={{ fontSize: '13px' }}>
                {['Comunidades locais', 'Eventos e interações reais', 'Baseado em confiança, não em poluição digital'].map(item => (
                  <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: navy, opacity: 0.65 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '999px', background: navy, opacity: 0.5, flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:block" style={{ position: 'relative', minHeight: '540px' }}>
              <div style={{ position: 'absolute', inset: '4% 10% 10% 8%', borderRadius: '40px', background: 'radial-gradient(circle, rgba(40,35,75,0.16) 0%, rgba(40,35,75,0.05) 40%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }} />
              <div style={{ position: 'absolute', right: '10px', top: '12px', width: 'min(260px,100%)', background: 'rgba(17,16,38,0.96)', borderRadius: '40px', padding: '14px', boxShadow: '0 30px 80px rgba(40,35,75,0.28)', zIndex: 2 }}>
                <div style={{ width: '34%', height: '28px', background: '#111026', borderRadius: '0 0 18px 18px', margin: '-2px auto 10px' }} />
                <div style={{ borderRadius: '28px', minHeight: '400px', overflow: 'hidden' }}>
                  <img src="/AppScreenshot.png" alt="App Sniffer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', left: 0, bottom: '120px', width: '220px', padding: '16px', borderRadius: '24px', zIndex: 3, background: 'rgba(255,255,255,0.95)', border: `1px solid ${line}`, boxShadow: shadowSoft }}>
                <strong style={{ display: 'block', fontSize: '15px', marginBottom: '6px', color: navy }}>Hoje à noite</strong>
                <p style={{ color: muted, margin: '0 0 10px', fontSize: '13px', lineHeight: 1.5 }}>Encontro aberto com pessoas e negócios locais</p>
                <span style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: '999px', background: navy, color: '#f2f2f2', fontSize: '12px', fontWeight: 700 }}>Evento em destaque</span>
              </div>
              <div style={{ position: 'absolute', right: '-8px', bottom: '20px', width: '200px', padding: '16px', borderRadius: '20px', zIndex: 3, background: 'rgba(255,255,255,0.95)', border: `1px solid ${line}`, boxShadow: shadowSoft }}>
                <strong style={{ display: 'block', fontSize: '14px', marginBottom: '6px', color: navy }}>Gente de verdade</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px', lineHeight: 1.5 }}>Perfis, lugares e recomendações validados por quem realmente vive o bairro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quem Somos ── */}
        <section style={{ padding: '16px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: gray, borderRadius: '32px', padding: '4px' }}
            >
              <div style={{ background: '#fff', borderRadius: '28px', padding: 'clamp(32px,5vw,56px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: `radial-gradient(circle, rgba(80,240,150,0.12), transparent 70%)`, right: '-60px', bottom: '-60px', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
                  <h2 style={{ margin: '0 0 32px', fontSize: 'clamp(28px,3.5vw,54px)', lineHeight: 1.0, letterSpacing: '-0.04em', fontWeight: 600, color: navy }}>
                    Quem Somos
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}>
                      Você já passou por uma rua mil vezes e nunca reparou naquele lugar incrível escondido ali? A{' '}
                      <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: logoFilter }} />{' '}
                      nasceu dessa mesma curiosidade. Somos o faro que faltava no seu bairro: o elo de confiança que ajuda as pessoas a descobrirem o que realmente está vivo e pulsante ao redor delas.
                    </p>
                    <p style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}>
                      Nossa missão é simples: transformar a curiosidade em um motivo novo para sair de casa. Na{' '}
                      <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: logoFilter }} />
                      , a tecnologia não serve para te prender online, mas para te levar de volta para a calçada.
                    </p>
                  </div>
                  <div style={{ marginTop: '36px' }}>
                    <button onClick={() => navigate('/cadastro?mode=people')} style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      padding: '14px 32px', borderRadius: '999px', fontWeight: 700,
                      background: green, color: navy, border: 'none', cursor: 'pointer',
                      fontSize: '16px', fontFamily: "'Ferom', sans-serif", minHeight: '52px',
                    }}>
                      A revolução é local. Faça parte →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Quem faz a Sniffer ── */}
        <section style={{ padding: '16px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: gray, borderRadius: '32px', padding: 'clamp(32px,5vw,56px)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ margin: '0 0 24px', fontSize: 'clamp(28px,3.5vw,54px)', lineHeight: 1.0, letterSpacing: '-0.04em', fontWeight: 600, color: '#332d59' }}>
                  Quem faz a{' '}
                  <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: logoFilter }} />
                </h2>
                <p style={{ margin: 0, fontSize: '18px', color: navy, lineHeight: 1.75 }}>
                  Somos uma matilha de exploradores e especialistas em tecnologia apaixonados pela vida urbana. A{' '}
                  <img src="/logo-sniffer-wordmark.png" alt="Sniffer" style={{ height: '1.05em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.12em', filter: logoFilter }} />{' '}
                  nasceu de quem valoriza o que acontece na calçada: cada vitrine, cada aroma e cada porta aberta. Unimos essa sensibilidade humana a uma inteligência consciente para criar um ecossistema que protege a essência do bairro e prioriza as relações reais. Construímos a solução que faltava para transformar a curiosidade da vizinhança em descobertas reais e conexões autênticas para o seu dia a dia.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Produtos ── */}
        <BentoSection nav={navigate} />

        {/* ── RASTRO ── */}
        <section style={{ padding: '16px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: '32px', overflow: 'hidden', background: navy, boxShadow: '0 32px 80px rgba(40,35,75,0.45)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
                <div style={{ padding: 'clamp(32px,5vw,52px)' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: '999px', background: green, marginBottom: '24px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em', color: navy }}>RASTRO</span>
                  </div>
                  <h2 style={{ margin: '0 0 20px', fontSize: 'clamp(28px,3.5vw,50px)', lineHeight: 1.04, letterSpacing: '-0.045em', fontWeight: 900, color: '#f2f2f2' }}>
                    Antes de todos.<br />
                    <span style={{ color: green }}>Para sempre.</span>
                  </h2>
                  <p style={{ margin: '0 0 32px', fontSize: '17px', color: 'rgba(242,242,242,0.65)', lineHeight: 1.75, maxWidth: '50ch' }}>
                    Você sempre é o primeiro a experimentar tudo. O primeiro a descobrir, o primeiro a indicar, o primeiro a chegar. O Rastro é pra gente como você. Benefícios exclusivos para as primeiras{' '}
                    <strong style={{ color: '#f2f2f2' }}>30.000 pessoas</strong>{' '}
                    e um selo permanente que ninguém mais vai conseguir. O Rastro não se compra. Se conquista.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
                    {[
                      'Selo permanente de Fundador no seu perfil, visível para toda a rede.',
                      'Acesso garantido ao ambiente de testes — experimente e influencie nossas inovações antes de todo o ecossistema.',
                    ].map((text, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                        style={{ padding: '16px 20px', borderRadius: '12px', background: green }}
                      >
                        <span style={{ fontSize: '15px', color: '#f2f2f2', lineHeight: 1.6 }}>{text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex lg:hidden justify-center mb-6">
                    <motion.img
                      src="/selo-sniffer.png"
                      alt="Selo Early Adopter"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                    />
                  </div>
                  <button onClick={() => navigate('/cadastro?mode=people')} className="w-full sm:w-auto" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    padding: '14px 36px', borderRadius: '999px', fontWeight: 900,
                    background: green, color: navy, border: 'none', cursor: 'pointer',
                    fontSize: '16px', fontFamily: "'Ferom', sans-serif", minHeight: '45px',
                  }}>
                    Quero meu selo Rastro →
                  </button>
                  <p style={{ margin: '16px 0 0', fontSize: '13px', color: 'rgba(242,242,242,0.32)', fontStyle: 'italic' }}>
                    Uma vez preenchidas as 30.000 vagas, o programa será selado para sempre.
                  </p>
                </div>
                <div className="hidden lg:flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', borderLeft: '1px solid rgba(80,240,150,0.22)' }}>
                  <motion.img
                    src="/selo-sniffer.png"
                    alt="Selo Early Adopter"
                    animate={{ y: [0, -24, 0], rotate: [0, 3, -3, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Spotlight ── */}
        <section style={{ padding: '16px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: gray, borderRadius: '32px', padding: '4px' }}
            >
              <div style={{ background: '#fff', borderRadius: '28px', padding: 'clamp(32px,5vw,48px)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: green, marginBottom: '20px' }}>
                  <span style={{ fontSize: '14px' }}>🔦</span>
                  <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.09em', color: '#0aa689' }}>SPOTLIGHT</span>
                </div>
                <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(28px,3.5vw,54px)', lineHeight: 1.0, letterSpacing: '-0.04em', fontWeight: 900, color: navy }}>
                  Sua vitrine viva o tempo todo.
                </h2>
                <p style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.75, maxWidth: '60ch' }}>
                  Imagina abrir o app e ver todas as promoções, eventos e novidades acontecendo agora perto de você. Aquele café com desconto na esquina, a manicure com 30% off na terça, o happy hour que começou há 10 minutos. O Spotlight te mostra o que está rolando no seu bairro em tempo real — pra você finalmente parar de descobrir as coisas boas depois que acabaram.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── De Vizinho para Vizinho ── */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: navy, position: 'relative', overflow: 'hidden' }}>
          {/* Radial glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(80,240,150,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className={shell} style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Tag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: '999px', background: green, marginBottom: '36px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em', color: navy, fontFamily: "'Ferom', sans-serif" }}>DE VIZINHO PARA VIZINHO</span>
              </div>

              {/* Quote — large headline */}
              <div style={{ margin: '0 0 48px', paddingLeft: '24px', borderLeft: `3px solid ${green}`, fontSize: 'clamp(28px,3.6vw,52px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', maxWidth: '22ch', fontFamily: "'Ferom', sans-serif" }}>
                "Seu <span style={{ fontFamily: "'Buasley', cursive", fontWeight: 400 }}>bairro</span> tem voz. Com a{' '}
                <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '1.2em', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }} />,{' '}
                tem <span style={{ fontFamily: "'Buasley', cursive", fontWeight: 400 }}>presença."</span>
              </div>

              {/* Body paragraphs */}
              <div style={{ maxWidth: '64ch' }}>
                <p style={{ margin: '0 0 20px', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                  Você lembra quando conhecer um lugar bom era simples? Alguém de confiança te puxava pelo braço e dizia:{' '}
                  <em style={{ color: '#fff' }}>"Vem comigo, você precisa conhecer esse lugar."</em>{' '}
                  Não tinha feed, não tinha anúncio. Tinha gente olhando nos olhos e dividindo o que amava no bairro.
                </p>
                <p style={{ margin: '0 0 20px', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                  Esse saber não desapareceu. Ele só ficou sem caminho pra circular. Está no Seu Carlos que conhece cada esquina do Bixiga, na Dona Marta que sabe qual feira monta mais cedo, no amigo que sempre descobre o restaurante antes de todo mundo.
                </p>

                {/* Buasley highlight — isolated block to avoid flex wrapping artifacts */}
                <div style={{ margin: '0 0 20px', display: 'block', overflow: 'hidden' }}>
                  <span style={{ color: green, fontWeight: 400, fontSize: '22px', fontFamily: "'Buasley', cursive", display: 'block', lineHeight: 1.5 }}>
                    A{' '}
                    <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }} />
                    {' '}te mostra o caminho.
                  </span>
                </div>

                <p style={{ margin: '0 0 20px', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                  A gente pega esse conhecimento que já existe — vivo, real, espalhado por milhares de pessoas — e dá mobilidade pra ele correr de vizinho pra vizinho, de bairro pra bairro.
                </p>
                <p style={{ margin: '0 0 20px', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                  Tecnologia aqui não substitui ninguém. Ela só garante que quando a Dona Marta indicar a melhor coxinha da rua dela, essa indicação chegue até você antes que o lugar feche.
                </p>
                <p style={{ margin: 0, fontWeight: 700, color: green, fontSize: '17px', lineHeight: 1.8 }}>
                  Seu bairro sempre teve voz. Agora ele tem presença.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/cadastro?mode=people')}
                className="w-full sm:w-auto"
                style={{ marginTop: '44px', padding: '14px 40px', borderRadius: '999px', background: green, color: navy, fontWeight: 900, fontSize: '17px', border: 'none', cursor: 'pointer', fontFamily: "'Ferom', sans-serif", minHeight: '45px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Faça parte →
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: navy, color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
        <div className={shell} style={{ padding: '48px 0 36px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
            <div className="sm:col-span-2 md:col-span-5">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
                <img src="/mascote-white.png" alt="Sniffer mascote" style={{ height: '44px', width: 'auto' }} />
                <img src="/logo-sniffer-marca-white.png" alt="Sniffer" style={{ height: '28px', width: 'auto' }} />
              </div>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, maxWidth: '30ch', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                Comunidade – <span style={{ fontFamily: "'Buasley', cursive", fontSize: '18px', color: '#fff' }}>experiência</span> – Comodidade
              </p>
            </div>
            <div className="hidden md:block md:col-span-1" />
            {[
              { label: 'PRODUTO', links: ['Pessoas', 'Negócios', 'Comunidade', 'Early Adopters'] },
              { label: 'EMPRESA', links: ['Quem Somos', 'Cadastro', 'Contato'] },
              { label: 'LEGAL', links: ['Termos de Uso', 'Privacidade', 'Cookies'] },
            ].map(col => (
              <div key={col.label} className="md:col-span-2">
                <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px' }}>{col.label}</strong>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '10px', fontSize: '14px' }}>{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={shell} style={{ borderTop: '1px solid rgba(80,240,150,0.20)', padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            © 2026 <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '14px', width: 'auto', opacity: 0.6 }} /> · Todos os direitos reservados.
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            Feito com <span style={{ color: green, margin: '0 2px' }}>♥</span> no Brasil
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
