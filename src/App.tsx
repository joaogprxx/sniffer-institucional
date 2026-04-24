import { useState, type CSSProperties, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';

const shell = 'w-[min(calc(100%-32px),1180px)] mx-auto';

const green = '#50f296';
const teal = '#0aa689';
const navy = '#332d59';
const muted = 'rgba(17,16,38,0.55)';
const surface = 'rgba(255,255,255,0.82)';
const line = 'rgba(17,16,38,0.08)';
const shadowSoft = '0 12px 36px rgba(17,16,38,0.05)';

function ProductItem({ emoji, tag, title, desc, defaultOpen = false }: { emoji: string; tag: string; title: string; desc: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${line}` }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', minHeight: '44px' }}
      >
        <span style={{ fontSize: '20px', flexShrink: 0 }}>{emoji}</span>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: teal, background: 'rgba(80,242,150,0.12)', padding: '4px 8px', borderRadius: '999px', border: '1px solid rgba(80,242,150,0.24)', flexShrink: 0, whiteSpace: 'nowrap' }}>{tag}</span>
        <span style={{ fontSize: 'clamp(15px, 4vw, 18px)', fontWeight: 700, color: '#111026', flex: 1, fontFamily: "'Ferom', Inter, sans-serif", minWidth: 0 }}>{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '24px', color: muted, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}
        >+</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ margin: '0 0 22px', color: muted, fontSize: '15px', lineHeight: 1.7, maxWidth: '72ch', paddingLeft: '30px' }}>{desc}</p>
      </motion.div>
    </div>
  );
}


function BentoSection({ navigate: _navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const toggleRow = (i: number) => setActiveRow(prev => prev === i ? null : i);

  const items = [
    { num: '01', tag: 'Descoberta', title: 'Encontre o que pulsa', desc: 'Lugares únicos, experiências reais e negócios do bairro que você ainda não conhece, organizados por contexto e confiança.' },
    { num: '02', tag: 'Comunidades', title: 'Seu bairro tem voz', desc: 'Entre em grupos locais, troque indicações e construa vínculos reais com quem divide o mesmo território.' },
    { num: '03', tag: 'Eventos', title: 'Acontece Agora', desc: 'Rolês, encontros e movimentações perto de você, com pessoas que você pode conhecer.' },
    { num: '04', tag: 'Negócios', title: 'O melhor a sua volta', desc: 'Vitrines locais e perfis verificados para você descobrir e apoiar quem faz a sua localidade pulsar.' },
    { num: '05', tag: 'Matilha', title: 'Sua Matilha. Suas Regras.', desc: 'Crie grupos privados com sua família, seus amigos, seus vizinhos, com regras claras, convite por aprovação e rituais que mantêm o grupo vivo sem esforço.' },
  ];

  return (
    <section id="produtos" className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-[100px] lg:pb-[120px]">
      <div className={shell}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 6vw, 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ maxWidth: '700px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ margin: '0 0 16px', fontSize: '22px', fontWeight: 700, letterSpacing: '0.1em', color: green, fontFamily: "'Ferom', Inter, sans-serif", textTransform: 'uppercase' as const, padding: '0 16px' }}>
              Produtos
            </p>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px, 4.8vw, 62px)', lineHeight: 1.0, letterSpacing: '-0.05em', fontWeight: 800, fontFamily: "'Ferom', Inter, sans-serif", color: '#111026' }}>
              Tudo que você precisa.<br />
              <span style={{ color: green }}>No seu bairro.</span>
            </h2>
            <p style={{ margin: '16px 0 0', fontSize: '16px', color: navy, lineHeight: 1.65, textAlign: 'center' as const, fontFamily: "'Ferom', Inter, sans-serif" }}>
              Cinco ferramentas construídas em torno de um único princípio: <strong>confiança real</strong>.
            </p>
          </div>
        </motion.div>

        {/* Top rule */}
        <div style={{ height: '2px', background: 'rgba(17,16,38,0.10)' }} />

        {/* Rows */}
        {items.map((item, i) => {
          const isActive = activeRow === i;
          const isDimmed = activeRow !== null && !isActive;
          return (
            // Outer div owns only the scroll-reveal animation.
            // Its `transition` is intentionally scoped to the enter animation via
            // `viewport={{ once: true }}` — it will not re-fire on hover, so it
            // cannot slow down hover state changes on inner elements.
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => toggleRow(i)}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              style={{ position: 'relative', borderBottom: '1px solid rgba(17,16,38,0.08)', cursor: 'pointer' }}
            >
              {/* Left accent bar */}
              <motion.div
                animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: green, transformOrigin: 'top', borderRadius: '0 0 2px 2px' }}
              />

              {/* Dim wrapper — owns its own fast transition, isolated from scroll reveal */}
              <motion.div
                animate={{ opacity: isDimmed ? 0.30 : 1 }}
                transition={{ duration: 0.2 }}
                // Consistent paddingBottom on every row replaces the conditional spacer.
                // The description expands inside this padding, so there are no layout
                // jumps caused by a spacer div appearing/disappearing instantly.
                style={{ padding: '0 0 30px 20px' }}
              >
                {/* Main row — num | tag | title */}
                <div
                  className="grid"
                  style={{ gridTemplateColumns: '32px minmax(0, 110px) 1fr', alignItems: 'baseline', gap: '0', padding: '30px 0 0' }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(17,16,38,0.22)', fontFamily: "'Ferom', Inter, sans-serif", userSelect: 'none' as const }}>
                    {item.num}
                  </span>
                  <motion.span
                    animate={{ color: isActive ? teal : 'rgba(17,16,38,0.38)' }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', fontFamily: "'Ferom', Inter, sans-serif", textTransform: 'uppercase' as const, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}
                  >
                    {item.tag}
                  </motion.span>
                  <motion.h3
                    animate={{ color: isActive ? '#111026' : 'rgba(17,16,38,0.72)' }}
                    transition={{ duration: 0.2 }}
                    style={{ margin: 0, fontSize: 'clamp(20px, 3vw, 46px)', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: "'Ferom', Inter, sans-serif", lineHeight: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>

                {/* Description — slides in below the title on hover.
                    maxHeight animates between a numeric 0 and a numeric cap (200px is
                    safely larger than any description will ever render), so Framer
                    Motion can interpolate it correctly — unlike `height: 'auto'` which
                    cannot be interpolated from 0. overflow: hidden clips the content
                    during the transition. */}
                <motion.div
                  initial={false}
                  animate={{
                    maxHeight: isActive ? 200 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden', paddingLeft: '32px' }}
                >
                  <p style={{ margin: '12px 0 0', fontSize: '15px', color: muted, lineHeight: 1.7, maxWidth: '52ch', fontFamily: "'Ferom', Inter, sans-serif" }}>
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Mascot + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '48px', gap: '12px' }}>
          <img src="/logo-sniffer.png" alt="Sniffer mascote" style={{ width: '64px', height: 'auto' }} />
          <button
            onClick={() => _navigate('/cadastro?mode=people')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 700, color: green, fontFamily: "'Ferom', Inter, sans-serif", textAlign: 'center' }}
          >
            Comece a farejar bons lugares →
          </button>
        </div>

      </div>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();

  const btnPrimary: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 24px', borderRadius: '999px', fontWeight: 700,
    background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)',
    color: '#111026', border: '1px solid transparent', cursor: 'pointer',
    boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '15px',
    fontFamily: "'Ferom', Inter, sans-serif",
  };

  const h2Style: CSSProperties = {
    margin: 0, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.02,
    letterSpacing: '-0.045em', fontWeight: 800, fontFamily: "'Ferom', Inter, sans-serif",
  };


  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(80,242,150,0.14), transparent 28%),
          radial-gradient(circle at top right, rgba(51,45,89,0.08), transparent 24%),
          linear-gradient(180deg, #F2F2F2 0%, #ebebeb 100%)
        `,
        minHeight: '100vh',
        fontFamily: "'Ferom', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#111026',
        lineHeight: '1.5',
      }}
    >
      {/* ── Navbar ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '48px', zIndex: 75, background: 'transparent', pointerEvents: 'none' }}>
        <div className={shell} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', pointerEvents: 'none' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit', pointerEvents: 'auto' }}>
            <img src="/logo-sniffer.png" alt="Sniffer" style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 10px 18px rgba(80,242,150,0.22))' }} />
            <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '24px', width: 'auto', maxWidth: 'min(28vw, 140px)', objectFit: 'contain' }} />
          </a>
          <button onClick={() => navigate('/cadastro?mode=people')} style={{ ...btnPrimary, padding: '10px 16px', fontSize: '13px', whiteSpace: 'nowrap', pointerEvents: 'auto' }}>
            Faça Parte
          </button>
        </div>
      </div>

      <main id="top" className="pt-24 md:pt-[48px]">
        {/* ── Hero ── */}
        <section style={{ padding: 'clamp(64px, 10vw, 96px) 0 28px' }}>
          <div className={`${shell} grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
            <div>
              <h1 style={{ margin: 0, fontSize: 'clamp(30px, 5.5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.04em', maxWidth: '14ch', fontWeight: 800, color: navy, textAlign: 'left' }}>
                Descubra o que realmente vale a pena na <span style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400, whiteSpace: 'nowrap' }}>sua cidade</span>.
              </h1>
              <p style={{ margin: '16px 0 0', fontSize: 'clamp(15px, 1.8vw, 20px)', color: muted, maxWidth: '33ch', lineHeight: 1.6 }}>
                Lugares, pessoas, comunidades e eventos conectados por contexto real — pra você viver sua cidade de verdade.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
                <button onClick={() => navigate('/cadastro?mode=people')} style={{ ...btnPrimary, fontSize: '15px', width: '100%', maxWidth: '320px', minHeight: '48px' }}>
                  A revolução é local. Faça parte
                </button>
              </div>
              <div className="flex flex-col gap-y-2 mt-5" style={{ color: muted, fontSize: '13px' }}>
                {['Comunidades locais', 'Eventos e interações reais', 'Baseado em confiança, não em poluição digital'].map(item => (
                  <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '999px', background: navy, opacity: 0.5, flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:block" style={{ position: 'relative', minHeight: '560px' }}>
              <div style={{ position: 'absolute', inset: '4% 10% 10% 8%', borderRadius: '40px', background: 'radial-gradient(circle, rgba(80,242,150,0.24) 0%, rgba(80,242,150,0.07) 36%, transparent 68%)', filter: 'blur(18px)', zIndex: 0 }} />
              <div style={{ position: 'absolute', right: '10px', top: '12px', width: 'min(300px, 100%)', background: 'rgba(17,16,38,0.96)', borderRadius: '40px', padding: '14px', boxShadow: '0 30px 80px rgba(17,16,38,0.2)', zIndex: 2 }}>
                <div style={{ width: '34%', height: '28px', background: '#111026', borderRadius: '0 0 18px 18px', margin: '-2px auto 10px' }} />
                <div style={{ background: 'linear-gradient(180deg, rgba(80,242,150,0.12) 0%, rgba(61,220,132,0.06) 100%)', borderRadius: '28px', minHeight: '440px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/AppScreenshot.png" alt="Screenshot do app Sniffer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', left: 0, bottom: '100px', width: '220px', padding: '18px', borderRadius: '24px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '15px', marginBottom: '6px' }}>Hoje à noite</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Encontro aberto com pessoas e negócios locais</p>
                <span style={{ display: 'inline-flex', marginTop: '10px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(80,242,150,0.14)', color: teal, fontSize: '12px', fontWeight: 700 }}>Evento em destaque</span>
              </div>
              <div style={{ position: 'absolute', right: '-8px', bottom: '20px', width: '200px', padding: '16px', borderRadius: '20px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Gente de verdade</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Perfis, lugares e recomendações validados por quem realmente vive o bairro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quem Somos ── */}
        <section id="ao-vivo" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 md:p-12"
              style={{ borderRadius: '32px', background: surface, border: `1px solid ${line}`, boxShadow: shadowSoft, position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.14), transparent 70%)', right: '-60px', bottom: '-60px', pointerEvents: 'none' }} />
              <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ ...h2Style, marginBottom: '32px', color: navy }}>Quem Somos</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}>
                    Você já passou por uma rua mil vezes e nunca reparou naquele lugar incrível escondido ali? A Sniffer nasceu dessa mesma curiosidade. Mais que uma rede social, somos o faro que faltava no seu bairro: o elo de confiança que ajuda as pessoas a descobrirem o que realmente está vivo e pulsante ao redor delas.
                  </motion.p>
                  <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}>
                    Nossa missão é simples: transformar a curiosidade em um motivo novo para sair de casa. Queremos que a vizinhança sinta o cheiro do que é autêntico e descubra lugares, sabores e experiências que estão logo ali, esperando para serem encontrados. Na Sniffer, a tecnologia não serve para te prender online, mas para te levar de volta para a calçada.
                  </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ marginTop: '36px' }}>
                  <button onClick={() => navigate('/cadastro?mode=people')} className="w-full sm:w-auto" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 28px', borderRadius: '999px', fontWeight: 700, background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)', color: '#111026', border: 'none', cursor: 'pointer', boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif", minHeight: '48px' }}>
                    A revolução é local. Faça parte →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ── Quem faz a Sniffer ── */}
        <section style={{ padding: '0 0 42px' }}>
          <div id="confianca" className={`${shell} p-6 sm:p-10 md:p-12`} style={{ borderRadius: '32px', background: '#F5F5F3', color: navy, boxShadow: '0 8px 32px rgba(17,16,38,0.06)', overflow: 'hidden', position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ ...h2Style, color: navy, marginBottom: '24px' }}>Quem faz a Sniffer</h2>
              <p style={{ margin: 0, fontSize: '18px', color: navy, lineHeight: 1.75 }}>
                Somos uma matilha de exploradores e especialistas em tecnologia apaixonados pela vida urbana. A Sniffer nasceu de quem valoriza o que acontece na calçada: cada vitrine, cada aroma e cada porta aberta. Unimos essa sensibilidade humana a uma inteligência consciente para criar um ecossistema que protege a essência do bairro e prioriza as relações reais. Construímos a solução que faltava para transformar a curiosidade da vizinhança em descobertas reais e conexões autênticas para o seu dia a dia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Produtos — bento mural ── */}
        <BentoSection navigate={navigate} />

        {/* ── RASTRO Early Adopter ── */}
        <section id="rastro" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: '36px', overflow: 'hidden', position: 'relative', background: 'linear-gradient(135deg, #1b4d32 0%, #1e3d28 55%, #164d2a 100%)', boxShadow: '0 32px 80px rgba(27,77,50,0.45)' }}
            >
              {/* Radial glow — Explorador Green Principal #3DDC84 */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 35%, rgba(61,220,132,0.16) 0%, rgba(46,204,113,0.05) 45%, transparent 70%)', pointerEvents: 'none' }} />
              <svg viewBox="0 0 690 430" aria-hidden="true" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.32, pointerEvents: 'none' }}>
                {/* Rota principal — Green Principal #3DDC84 */}
                <path d="M 60,200 C 120,160 200,100 300,120 C 400,140 440,220 520,200 C 580,185 630,140 690,160" fill="none" stroke="#3DDC84" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                {/* Desvio bairro — Green Alternativo #6DC96A */}
                <path d="M 300,120 C 310,80 340,50 370,70 C 400,90 390,130 360,150 C 330,170 290,160 300,120 Z" fill="none" stroke="#6DC96A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                {/* Nó de chegada — Green Principal */}
                <circle cx="520" cy="200" r="18" fill="none" stroke="#3DDC84" strokeWidth="10" />
                <circle cx="520" cy="200" r="6" fill="#3DDC84" opacity="0.7" />
                {/* Ponto de partida — Green Alternativo */}
                <circle cx="60" cy="200" r="10" fill="none" stroke="#6DC96A" strokeWidth="8" />
                {/* Ramificação — Green Esmeralda #2ECC71 tracejado */}
                <path d="M 440,210 C 460,260 480,300 520,320 C 550,335 580,330 610,310" fill="none" stroke="#2ECC71" strokeWidth="8" strokeLinecap="round" strokeDasharray="18 10" />
              </svg>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-0">
                <div className="p-6 sm:p-10 lg:px-[52px] lg:py-[56px]" style={{ position: 'relative', zIndex: 1 }}>

                  <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(30px, 3.8vw, 50px)', lineHeight: 1.04, letterSpacing: '-0.045em', fontWeight: 800, color: '#F2F2F2', fontFamily: "'Ferom', Inter, sans-serif" }}>
                    Antes de todos.<br />
                    <span style={{ color: '#3DDC84' }}>Para sempre.</span>
                  </h2>
                  <p style={{ margin: '0 0 32px', fontSize: '17px', color: 'rgba(242,242,242,0.65)', lineHeight: 1.75, maxWidth: '50ch', fontFamily: "'Ferom', Inter, sans-serif" }}>
                    Você sempre é o primeiro a experimentar tudo. O primeiro a descobrir, o primeiro a indicar, o primeiro a chegar. O Rastro é pra gente como você. Benefícios exclusivos para as primeiras{' '}
                    <strong style={{ color: '#F2F2F2', fontWeight: 700 }}>30.000 pessoas</strong>{' '}
                    e um selo permanente que ninguém mais vai conseguir. O Rastro não se compra. Se conquista.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                    {[
                      { icon: '🔖', text: 'Selo permanente de Fundador no seu perfil, visível para toda a rede.' },
                      { icon: '🧪', text: 'Acesso garantido ao ambiente de testes — experimente e influencie nossas inovações antes de todo o ecossistema.' },
                    ].map((b, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 16px', borderRadius: '16px', background: 'rgba(61,220,132,0.07)', border: '1px solid rgba(61,220,132,0.18)' }}>
                        <span style={{ fontSize: '17px', flexShrink: 0, marginTop: '2px' }}>{b.icon}</span>
                        <span style={{ fontSize: '15px', color: 'rgba(242,242,242,0.78)', lineHeight: 1.6, fontFamily: "'Ferom', Inter, sans-serif" }}>{b.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Seal visible on mobile — compact, centered above the CTA */}
                  <div className="flex lg:hidden justify-center mb-4">
                    <motion.img
                      src="/selo-eap-estatico.png"
                      alt="Selo Early Adopter"
                      animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                    />
                  </div>
                  <button onClick={() => navigate('/cadastro?mode=people')} className="w-full sm:w-auto" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px 36px', borderRadius: '999px', fontWeight: 800, background: green, color: '#111026', border: 'none', cursor: 'pointer', boxShadow: `0 12px 40px rgba(80,242,150,0.4)`, fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif", letterSpacing: '-0.01em', minHeight: '48px' }}>
                    Quero meu selo Rastro →
                  </button>
                  <p style={{ margin: '18px 0 0', fontSize: '13px', color: 'rgba(242,242,242,0.32)', fontStyle: 'italic' }}>
                    Uma vez preenchidas as 30.000 vagas, o programa será selado para sempre.
                  </p>
                </div>
                <div className="hidden lg:flex" style={{ position: 'relative', zIndex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', borderLeft: '1px solid rgba(61,220,132,0.22)', gap: '12px' }}>
                  <motion.img
                    src="/selo-eap-estatico.png"
                    alt="Selo Early Adopter"
                    animate={{ y: [0, -24, 0], rotate: [0, 3, -3, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '280px', height: '280px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Spotlight ── */}
        <section style={{ padding: '42px 0' }}>
          <div className={shell}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0"
              style={{ borderRadius: '32px', overflow: 'hidden', background: surface, border: `1px solid ${line}`, boxShadow: shadowSoft }}
            >
              <div className="p-6 sm:p-8 md:px-12 md:py-11">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.10)', border: '1px solid rgba(80,242,150,0.24)', marginBottom: '20px' }}>
                  <span style={{ fontSize: '14px' }}>🔦</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.09em', color: teal }}>SPOTLIGHT</span>
                </div>
                <h2 style={{ ...h2Style, marginBottom: '16px' }}>Sua vitrine, viva o tempo todo.</h2>
                <p style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.75, maxWidth: '54ch' }}>
                  Imagina abrir o app e ver todas as promoções, eventos e novidades acontecendo agora perto de você. Aquele café com desconto na esquina, a manicure com 30% off na terça, o happy hour que começou há 10 minutos. O Spotlight te mostra o que está rolando no seu bairro em tempo real — pra você finalmente parar de descobrir as coisas boas depois que acabaram.
                </p>
                {/* Feature tags visible on mobile only — stacked inline below the copy */}
                <div className="flex flex-col md:hidden gap-2 mt-5">
                  {[
                    { label: 'Promoções em tempo real', icon: '⚡' },
                    { label: 'Eventos perto de você', icon: '📍' },
                    { label: 'Novidades do bairro', icon: '✨' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '14px', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 2px 8px rgba(17,16,38,0.04)' }}>
                      <span style={{ fontSize: '18px' }}>{item.icon}</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#111026' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Feature tags visible on desktop only — right sidebar */}
              <div className="hidden md:flex" style={{ flexDirection: 'column', gap: '10px', padding: '44px 40px', borderLeft: `1px solid ${line}`, minWidth: '220px', justifyContent: 'center', background: 'rgba(80,242,150,0.04)' }}>
                {[
                  { label: 'Promoções em tempo real', icon: '⚡' },
                  { label: 'Eventos perto de você', icon: '📍' },
                  { label: 'Novidades do bairro', icon: '✨' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '14px', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 2px 8px rgba(17,16,38,0.04)' }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#111026' }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── De Vizinho para Vizinho ── */}
        <section id="vizinho" className="py-16 sm:py-20 md:py-24 lg:py-[100px]" style={{ background: 'linear-gradient(155deg, #1b4d32 0%, #1e3d28 60%, #164d2a 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* Radial glow — Explorador */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(61,220,132,0.14) 0%, rgba(46,204,113,0.04) 50%, transparent 70%)', pointerEvents: 'none' }} />
          <svg viewBox="0 0 690 430" aria-hidden="true" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.28, pointerEvents: 'none', transform: 'scaleX(-1)' }}>
            <path d="M 340,0 C 420,40 520,80 500,170 C 480,250 380,260 340,300 C 300,340 260,390 310,400 C 360,410 430,380 480,350 C 540,315 590,290 620,300 C 650,310 660,340 640,370" fill="none" stroke="#3DDC84" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 340,300 C 280,340 200,370 180,340 C 155,305 190,260 240,250 C 290,240 330,260 340,300 Z" fill="none" stroke="#6DC96A" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="640" cy="378" rx="22" ry="16" fill="none" stroke="#2ECC71" strokeWidth="14" />
          </svg>
          <div className={shell} style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(61,220,132,0.12)', border: '1px solid rgba(61,220,132,0.25)', marginBottom: '36px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: '#3DDC84', fontFamily: "'Ferom', Inter, sans-serif" }}>DE VIZINHO PARA VIZINHO</span>
              </div>
              <blockquote style={{ margin: '0 0 44px', padding: '0 0 0 24px', borderLeft: '3px solid #3DDC84', fontSize: 'clamp(28px, 3.8vw, 52px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff', maxWidth: '22ch', fontFamily: "'Ferom', Inter, sans-serif" }}>
                "Seu <span style={{ fontFamily: "'Buasley', cursive", fontWeight: 400, letterSpacing: '0.01em' }}>bairro</span> tem voz. Com a{' '}
                <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '0.9em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.1em' }} />,{' '}
                tem <span style={{ fontFamily: "'Buasley', cursive", fontWeight: 400, letterSpacing: '0.01em' }}>presença."</span>
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '64ch', color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                <p style={{ margin: 0 }}>
                  Você lembra quando conhecer um lugar bom era simples? Alguém de confiança te puxava pelo braço e dizia:{' '}
                  <em style={{ color: '#fff', fontStyle: 'italic' }}>"vem comigo, você precisa conhecer esse lugar."</em>{' '}
                  Não tinha feed, não tinha anúncio. Tinha gente olhando nos olhos e dividindo o que amava no bairro.
                </p>
                <p style={{ margin: 0 }}>
                  Esse saber não desapareceu. Ele só ficou sem caminho pra circular. Está no Seu Carlos que conhece cada esquina do Bixiga, na Dona Marta que sabe qual feira monta mais cedo, no amigo que sempre descobre o restaurante antes de todo mundo.
                </p>
                <p style={{ margin: 0, color: '#3DDC84', fontWeight: 400, fontSize: '22px', fontFamily: "'Buasley', cursive", letterSpacing: '0.01em' }}>
                  A <img src="/MARCA%20SNIFFER%20-%20ROTA%20PULSANTE%20-%20RGB.png" alt="Sniffer" style={{ height: '1.1em', width: 'auto', display: 'inline', verticalAlign: 'middle', marginBottom: '0.1em' }} /> é o caminho.
                </p>
                <p style={{ margin: 0 }}>
                  A gente pega esse conhecimento que já existe — vivo, real, espalhado por milhares de pessoas — e dá mobilidade pra ele correr de vizinho pra vizinho, de bairro pra bairro.
                </p>
                <p style={{ margin: 0 }}>
                  Tecnologia aqui não substitui ninguém. Ela só garante que quando a Dona Marta indicar a melhor coxinha da rua dela, essa indicação chegue até você antes que o lugar feche.
                </p>
                <p style={{ margin: 0, fontWeight: 700, color: '#fff' }}>
                  Seu bairro sempre teve voz. Agora ele tem presença.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(61,220,132,0.45)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/cadastro?mode=people')}
                className="w-full sm:w-auto"
                style={{ marginTop: '44px', padding: '16px 40px', borderRadius: '999px', background: '#3DDC84', color: '#111026', fontWeight: 800, fontSize: '17px', border: 'none', cursor: 'pointer', fontFamily: "'Ferom', Inter, sans-serif", letterSpacing: '-0.01em', minHeight: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                A revolução é local. Faça parte. →
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: 'linear-gradient(180deg, #1b4d32 0%, #0f1c11 100%)', color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
        {/* Mobile: single column stack; Desktop: 12-col grid */}
        <div className={shell} style={{ padding: '48px 0 36px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">
            {/* Brand — full width on mobile */}
            <div className="sm:col-span-2 md:col-span-5">
              <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '32px', width: 'auto', marginBottom: '12px', display: 'block' }} />
              <p style={{ margin: '0 0 20px', fontSize: '15px', lineHeight: 1.65, maxWidth: '30ch', color: 'rgba(255,255,255,0.5)' }}>
                Comunidade – <span style={{ fontFamily: "'Buasley', cursive", letterSpacing: '0.01em', fontSize: '18px', color: '#fff' }}>Experiência</span> – Comodidade
              </p>
            </div>
            {/* Spacer — desktop only */}
            <div className="hidden md:block md:col-span-1" />
            {/* Produto */}
            <div className="md:col-span-2">
              <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>PRODUTO</strong>
              {['Pessoas', 'Negócios', 'Comunidade', 'Early Adopters'].map(l => (
                <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '10px', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#3DDC84')}
                  onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >{l}</a>
              ))}
            </div>
            {/* Empresa */}
            <div className="md:col-span-2">
              <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>EMPRESA</strong>
              {['Quem Somos', 'Cadastro', 'Contato'].map(l => (
                <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '10px', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#3DDC84')}
                  onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >{l}</a>
              ))}
            </div>
            {/* Legal */}
            <div className="md:col-span-2">
              <strong style={{ display: 'block', color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>LEGAL</strong>
              {['Termos de Uso', 'Privacidade', 'Cookies'].map(l => (
                <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '10px', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#3DDC84')}
                  onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className={shell} style={{ borderTop: '1px solid rgba(61,220,132,0.20)', padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            © 2026 <img src="/logo-sniffer-white.png" alt="Sniffer" style={{ height: '14px', width: 'auto', opacity: 0.6 }} /> · Todos os direitos reservados.
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            Feito com <span style={{ color: '#3DDC84', margin: '0 2px' }}>♥</span> no Brasil
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
