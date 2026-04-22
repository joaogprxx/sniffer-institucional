import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';

const shell = 'w-[min(calc(100%-32px),1180px)] mx-auto';

const green = '#50f296';
const deepGreen = '#1f8f59';
const navy = '#332d59';
const muted = '#5f6470';
const surface = 'rgba(255,255,255,0.82)';
const line = 'rgba(19,21,26,0.08)';
const shadowSoft = '0 12px 36px rgba(17,24,39,0.05)';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${line}`, borderRadius: '22px', background: 'rgba(255,255,255,0.8)', padding: '0 22px', boxShadow: shadowSoft }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, padding: '22px 34px 22px 0', position: 'relative', fontSize: '16px', color: '#13151a', fontFamily: "'Ferom', Inter, sans-serif" }}
      >
        {question}
        <span style={{ position: 'absolute', right: 0, top: '16px', fontSize: '26px', fontWeight: 400, color: muted, lineHeight: 1 }}>
          {open ? '–' : '+'}
        </span>
      </button>
      {open && (
        <p style={{ margin: '0 0 20px', color: muted, maxWidth: '70ch', fontSize: '15px', fontFamily: "'Ferom', Inter, sans-serif" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const btnPrimary: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 24px', borderRadius: '999px', fontWeight: 700,
    background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)',
    color: '#0f1320', border: '1px solid transparent', cursor: 'pointer',
    boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '15px',
    fontFamily: "'Ferom', Inter, sans-serif",
  };

  const card: React.CSSProperties = {
    padding: '28px', borderRadius: '28px', background: surface,
    border: `1px solid ${line}`, boxShadow: shadowSoft,
  };

  const sectionHead = { maxWidth: '760px', marginBottom: '24px' };

  const h2Style: React.CSSProperties = {
    margin: 0, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.02,
    letterSpacing: '-0.045em', fontWeight: 800, fontFamily: "'Ferom', Inter, sans-serif",
  };

  const subStyle: React.CSSProperties = {
    margin: '14px 0 0', color: muted, fontSize: '18px', maxWidth: '42ch',
    fontFamily: "'Ferom', Inter, sans-serif",
  };

  const faqs = [
    { q: 'O que é a Sniffer?', a: 'A Sniffer é uma plataforma de descoberta social focada em lugares, pessoas, comunidades e eventos, com uma arquitetura pensada para confiança e contexto real.' },
    { q: 'O que já existe na experiência?', a: 'A base já considera descoberta de lugares, comunidades, eventos e interação entre usuários e negócios, além de camadas estruturadas de moderação e verificação para sustentar o ecossistema.' },
    { q: 'O que torna a Sniffer diferente?', a: 'Ela não tenta ser só mapa, só rede social ou só agenda. A proposta é conectar descoberta local e participação real em um mesmo ambiente, com foco maior em autenticidade.' },
    { q: 'Preciso verificar minha conta?', a: 'Nem sempre. Em alguns casos, a Sniffer pode solicitar validações para ajudar a manter interações mais seguras e confiáveis na plataforma.' },
    { q: 'Quando a Sniffer chega?', a: 'A Sniffer está sendo construída em etapas, com abertura gradual. "Quero ser convidado" é a melhor forma de acompanhar as primeiras liberações e novidades.' },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(80,242,150,0.16), transparent 28%),
          radial-gradient(circle at top right, rgba(51,45,89,0.10), transparent 24%),
          linear-gradient(180deg, #f9fbfe 0%, #f3f6fb 38%, #eef2f8 100%)
        `,
        minHeight: '100vh',
        fontFamily: "'Ferom', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#13151a',
        lineHeight: '1.5',
      }}
    >
      {/* ── Navbar ── */}
      <div style={{ position: 'sticky', top: '52px', zIndex: 40, backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', background: 'rgba(245,247,251,0.74)', borderBottom: '1px solid rgba(19,21,26,0.05)' }}>
        <div className={shell} style={{ minHeight: '74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
            <img
              src="/logo-sniffer.png"
              alt="Sniffer"
              style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0 10px 18px rgba(80,242,150,0.22))' }}
            />
            <img
              src="/logo-sniffer-wordmark.png"
              alt="Sniffer"
              style={{ height: '28px', width: 'auto', maxWidth: 'min(32vw, 180px)', objectFit: 'contain' }}
            />
          </a>

          <div>
            <button onClick={() => navigate('/cadastro')} style={btnPrimary}>
              Junte-se à revolução
            </button>
          </div>
        </div>
      </div>

      <main id="top">
        {/* ── Hero ── */}
        <section style={{ padding: '54px 0 34px' }}>
          <div className={`${shell} grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
            {/* Copy */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.72)', border: `1px solid ${line}`, color: navy, fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: green, boxShadow: '0 0 0 8px rgba(80,242,150,0.16)', flexShrink: 0 }} />
                Chegando primeiro ao Brasil
              </div>

              <h1 style={{ margin: 0, fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.055em', maxWidth: '11ch', fontWeight: 800 }}>
                Descubra o que realmente vale a pena na sua cidade.
              </h1>

              <p style={{ margin: '22px 0 0', fontSize: 'clamp(17px, 1.8vw, 20px)', color: muted, maxWidth: '33ch' }}>
                Lugares, pessoas, comunidades e eventos conectados por contexto real — com uma experiência pensada para ser bonita, útil e muito mais confiável.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <button onClick={() => navigate('/cadastro')} style={{ ...btnPrimary, fontSize: '16px' }}>
                  Quero ser convidado
                </button>
                <a
                  href="#ao-vivo"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 24px', borderRadius: '999px', fontWeight: 700, background: 'rgba(255,255,255,0.72)', border: `1px solid ${line}`, color: '#13151a', textDecoration: 'none', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif" }}
                >
                  Ver o que já está no ar
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6" style={{ color: muted, fontSize: '14px' }}>
                {['Comunidades locais', 'Eventos e interações reais', 'Baseado em confiança, não em poluição digital'].map(item => (
                  <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: navy, opacity: 0.5, flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual — hidden on mobile */}
            <div className="hidden md:block" style={{ position: 'relative', minHeight: '560px' }}>
              {/* Glow */}
              <div style={{ position: 'absolute', inset: '4% 10% 10% 8%', borderRadius: '40px', background: 'radial-gradient(circle, rgba(80,242,150,0.24) 0%, rgba(80,242,150,0.07) 36%, transparent 68%)', filter: 'blur(18px)', zIndex: 0 }} />

              {/* Badge */}
              <div style={{ position: 'absolute', left: '20px', top: '24px', padding: '12px 14px', borderRadius: '18px', zIndex: 3, fontSize: '13px', color: navy, fontWeight: 700, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                Primeiras comunidades já estão surgindo
              </div>

              {/* Phone */}
              <div style={{ position: 'absolute', right: '10px', top: '12px', width: 'min(300px, 100%)', background: 'rgba(17,19,25,0.96)', borderRadius: '40px', padding: '14px', boxShadow: '0 30px 80px rgba(17,24,39,0.2)', zIndex: 2 }}>
                <div style={{ width: '34%', height: '28px', background: '#090b10', borderRadius: '0 0 18px 18px', margin: '-2px auto 10px' }} />
                <div style={{ background: 'linear-gradient(180deg, rgba(80,242,150,0.12) 0%, rgba(61,220,132,0.06) 100%)', borderRadius: '28px', minHeight: '440px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="/AppScreenshot.png"
                    alt="Screenshot do app Sniffer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  />
                </div>
              </div>

              {/* Event card */}
              <div style={{ position: 'absolute', left: 0, bottom: '100px', width: '220px', padding: '18px', borderRadius: '24px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '15px', marginBottom: '6px' }}>Hoje à noite</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Encontro aberto com pessoas e negócios locais</p>
                <span style={{ display: 'inline-flex', marginTop: '10px', padding: '8px 12px', borderRadius: '999px', background: 'rgba(80,242,150,0.14)', color: deepGreen, fontSize: '12px', fontWeight: 700 }}>
                  Evento em destaque
                </span>
              </div>

              {/* Floating card */}
              <div style={{ position: 'absolute', right: '-8px', bottom: '20px', width: '200px', padding: '16px', borderRadius: '20px', zIndex: 3, background: 'rgba(255,255,255,0.9)', border: `1px solid rgba(19,21,26,0.06)`, boxShadow: shadowSoft, backdropFilter: 'blur(14px)' }}>
                <strong style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Confiança em foco</strong>
                <p style={{ color: muted, margin: 0, fontSize: '13px' }}>Perfis, negócios e interações com camadas reais de validação e moderação.</p>
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
              style={{ padding: '48px', borderRadius: '32px', background: surface, border: `1px solid ${line}`, boxShadow: shadowSoft, position: 'relative', overflow: 'hidden' }}
            >
              {/* Glow decorativo */}
              <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.14), transparent 70%)', right: '-60px', bottom: '-60px', pointerEvents: 'none' }} />

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.12)', border: `1px solid rgba(80,242,150,0.28)`, color: deepGreen, fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: green, flexShrink: 0 }} />
                Nossa história
              </div>

              <h2 style={{ ...h2Style, marginBottom: '32px' }}>Quem Somos</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '72ch' }}>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}
                >
                  Você já passou por uma rua mil vezes e nunca reparou naquele lugar incrível escondido ali? A Sniffer nasceu dessa mesma curiosidade. Mais que uma rede social, somos o faro que faltava no seu bairro: o elo de confiança que ajuda as pessoas a descobrirem o que realmente está vivo e pulsante ao redor delas.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ margin: 0, fontSize: '18px', color: muted, lineHeight: 1.7 }}
                >
                  Nossa missão é simples: transformar a curiosidade em um motivo novo para sair de casa. Queremos que a vizinhança sinta o cheiro do que é autêntico e descubra lugares, sabores e experiências que estão logo ali, esperando para serem encontrados. Na Sniffer, a tecnologia não serve para te prender online, mas para te levar de volta para a calçada.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: '36px' }}
              >
                <button
                  onClick={() => navigate('/cadastro')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '999px', fontWeight: 700, background: 'linear-gradient(180deg, #68f6a5 0%, #50f296 100%)', color: '#0f1320', border: 'none', cursor: 'pointer', boxShadow: '0 16px 36px rgba(80,242,150,0.28)', fontSize: '16px', fontFamily: "'Ferom', Inter, sans-serif" }}
                >
                  Junte-se a essa revolução! →
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── No que a gente acredita ── */}
        <section id="como-funciona" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div style={sectionHead}>
              <h2 style={h2Style}>No que a gente acredita</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: '🤝',
                  title: 'Indicações reais',
                  desc: 'Quem indica seu negócio são seus vizinhos e clientes reais. Sem truques digitais — só a confiança de quem vive o bairro.',
                },
                {
                  icon: '📍',
                  title: 'Perto primeiro',
                  desc: 'Você aparece primeiro para quem já está na sua rua ou a poucos minutos, antes mesmo de pensarem em atravessar a cidade.',
                },
                {
                  icon: '✨',
                  title: 'O pequeno brilha aqui',
                  desc: 'A pizzaria do bairro, o ateliê da esquina e o novo café da rua têm a mesma prioridade que as gigantes. Seu talento local dita sua visibilidade.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ ...card, position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', letterSpacing: '-0.02em', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: muted, fontSize: '15px', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quem faz a Sniffer ── */}
        <section style={{ padding: '0 0 42px' }}>
          <div id="confianca" className={shell} style={{ padding: '48px', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(19,21,26,0.98) 0%, #2d2750 100%)', color: '#f5f7ff', boxShadow: '0 30px 80px rgba(20,25,45,0.18)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.22), transparent 70%)', right: '-80px', top: '-80px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(80,242,150,0.10), transparent 70%)', left: '-40px', bottom: '-40px', pointerEvents: 'none' }} />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', maxWidth: '64ch' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: 'rgba(80,242,150,0.12)', border: '1px solid rgba(80,242,150,0.22)', color: green, fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: green, flexShrink: 0 }} />
                A matilha
              </div>

              <h2 style={{ ...h2Style, color: '#f5f7ff', marginBottom: '24px' }}>Quem faz a Sniffer</h2>

              <p style={{ margin: 0, fontSize: '18px', color: 'rgba(245,247,255,0.80)', lineHeight: 1.75 }}>
                Somos uma matilha de exploradores e especialistas em tecnologia apaixonados pela vida urbana. A Sniffer nasceu de quem valoriza o que acontece na calçada: cada vitrine, cada aroma e cada porta aberta. Unimos essa sensibilidade humana a uma inteligência consciente para criar um ecossistema que protege a essência do bairro e prioriza as relações reais. Construímos a solução que faltava para transformar a curiosidade da vizinhança em movimento e presença para o seu negócio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Features grid 2 cols ── */}
        <section style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'O que você já pode sentir na proposta da Sniffer',
                  items: [
                    'Exploração local com mais contexto e menos poluição visual.',
                    'Comunidades que nascem ao redor de interesses, bairros e experiências reais.',
                    'Eventos como porta de entrada para descobrir o que está vivo na cidade.',
                    'Interação entre pessoas e negócios como parte do ecossistema, não como canal isolado.',
                  ],
                },
                {
                  title: 'Um gostinho do que vem por aí',
                  items: [
                    'Experiências locais mais inteligentes e relevantes.',
                    'Mais camadas de participação dentro de comunidades e eventos.',
                    'Descoberta ainda mais fluida entre mapa, conversa e presença local.',
                    'Novas formas de explorar sua cidade com intenção — não só por acaso.',
                  ],
                },
              ].map((col, i) => (
                <div key={i} style={card}>
                  <h2 style={{ margin: '0 0 4px', fontSize: 'clamp(22px, 2.5vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: 800 }}>{col.title}</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: '12px' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: muted, fontSize: '15px' }}>
                        <span style={{ color: green, marginTop: '1px', flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Audience cards ── */}
        <section style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div style={sectionHead}>
              <h2 style={h2Style}>Feita para pessoas que gostam de descobrir antes de todo mundo.</h2>
              <p style={subStyle}>
                De cafés e rolês a pessoas, bairros, comunidades e encontros locais: a Sniffer quer virar aquele lugar onde você encontra o que está valendo a pena agora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Para quem explora a cidade', desc: 'Descubra novos lugares e experiências por recomendação, contexto e participação real.' },
                { title: 'Para quem busca sua galera', desc: 'Entre em comunidades com mais identidade e menos sensação de vazio social.' },
                { title: 'Para quem quer estar por dentro', desc: 'Acompanhe eventos, movimentos locais e sinais culturais com mais proximidade.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={card}
                >
                  <h3 style={{ margin: '0 0 10px', fontSize: '22px', letterSpacing: '-0.03em', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: muted, fontSize: '15px', margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div style={sectionHead}>
              <h2 style={h2Style}>Perguntas frequentes</h2>
              <p style={subStyle}>O suficiente para dar clareza, sem matar a curiosidade.</p>
            </div>

            <div style={{ display: 'grid', gap: '14px' }}>
              {faqs.map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Waitlist CTA ── */}
        <section id="waitlist" style={{ padding: '42px 0' }}>
          <div className={shell}>
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-6 items-center" style={{ padding: '36px', borderRadius: '34px', background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.76) 100%)', border: `1px solid ${line}`, boxShadow: '0 20px 60px rgba(17,24,39,0.08)' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1, letterSpacing: '-0.05em', fontWeight: 800, maxWidth: '14ch' }}>
                  Peça um convite. Ajude a construir a sua cidade dentro da Sniffer.
                </h2>
                <p style={{ margin: '14px 0 0', color: muted, fontSize: '18px', maxWidth: '42ch' }}>
                  As primeiras pessoas ajudam a dar o tom da comunidade, das conversas e dos lugares que passam a importar por aqui.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '28px', background: '#12141c', color: '#fff' }}>
                <strong style={{ display: 'block', fontSize: '18px', marginBottom: '8px', fontFamily: "'Ferom', Inter, sans-serif" }}>Quero ser convidado</strong>
                <p style={{ color: 'rgba(255,255,255,0.72)', margin: '0 0 20px', fontSize: '15px', fontFamily: "'Ferom', Inter, sans-serif" }}>
                  As primeiras vagas são por convite. Clique abaixo e entre na lista.
                </p>
                <button
                  onClick={() => navigate('/cadastro')}
                  style={{ ...btnPrimary, width: '100%', fontSize: '16px' }}
                >
                  Quero acompanhar →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ padding: '32px 0 44px', color: muted, fontSize: '14px' }}>
        <div className={shell} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '14px', borderTop: '1px solid rgba(19,21,26,0.07)', paddingTop: '22px' }}>
          <span>© 2026 Sniffer</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
