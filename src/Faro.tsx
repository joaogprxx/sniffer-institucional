import { useEffect, type CSSProperties } from 'react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { ChevronRight } from 'lucide-react';

const chipBase: CSSProperties = {
  position: 'absolute', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
  borderRadius: 10, padding: '8px 14px', alignItems: 'center', gap: 8, zIndex: 10, whiteSpace: 'nowrap',
};
const chipInner: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 1 };
const chipValueStyle: CSSProperties = { fontFamily: "'Ferom', Inter, sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' };
const chipLabelStyle: CSSProperties = { fontFamily: "'Ferom', Inter, sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', textTransform: 'uppercase' };
const chipBadgeStyle = (color: string, bg: string): CSSProperties => ({ fontFamily: "'Ferom', Inter, sans-serif", fontSize: 11, fontWeight: 700, color, background: bg, borderRadius: 5, padding: '2px 6px' });

const chips = [
  { emoji: '🎯', value: 'TVS 74/100', label: 'trust value score', badge: 'Excelente', badgeColor: '#50F296', badgeBg: 'rgba(80,242,150,0.12)', pos: { top: -18, left: 32 }, extra: { background: 'rgba(10,166,137,0.12)', border: '1px solid rgba(10,166,137,0.35)', boxShadow: '0 4px 24px rgba(10,166,137,0.15)' }, initial: { opacity: 0, x: -16, y: 8 }, delay: 0.45, hideMobile: false },
  { emoji: '📡', value: '14.2k', label: 'alcance mensal', badge: '+12%', badgeColor: '#50F296', badgeBg: 'rgba(80,242,150,0.12)', pos: { bottom: -20, right: 48 }, extra: { background: 'rgba(51,45,89,0.85)', border: '1px solid rgba(80,242,150,0.25)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }, initial: { opacity: 0, x: 16, y: -8 }, delay: 0.6, hideMobile: false },
  { emoji: '⚡', value: '3.8%', label: 'conversão', badge: '+0.5%', badgeColor: '#50F296', badgeBg: 'rgba(80,242,150,0.12)', pos: { top: '38%' as const, right: -20 }, extra: { background: 'rgba(51,45,89,0.9)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }, initial: { opacity: 0, x: 20 }, delay: 0.75, hideMobile: true },
] as const;

export default function Faro() {
  useEffect(() => {
    
  }, []);

  return (
    <motion.div
      key="business-faro"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ backgroundColor: '#332D59', minHeight: '100vh', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}
    >
      <img src="/sniffer_brandbook_bg.svg" alt="" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} />

      <BusinessNavbar />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12 lg:mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0AA689] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0AA689]"></span>
            <span className="text-[#0AA689] font-['Ferom'] text-[13px]">Produto</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: 'var(--font-jakarta)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Faro{' '}
            <br className="hidden md:block" />
            <span className="text-[#0AA689]" style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400 }}>Fareja antes.</span>
            <br />
            Decide melhor.
          </h1>

          <div className="prose prose-invert max-w-none">

            <div style={{ maxWidth: 680 }}>
              <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                O Faro é a inteligência por trás de tudo o que acontece com o seu negócio na Sniffer. Cada pessoa que visita seu perfil, toca num botão de ação, salva sua promoção, entra na sua comunidade, te escolhe como Xodó ou deixa uma avaliação, tudo vira dado. E o Faro transforma esse dado em resposta. Não em gráfico bonito pra você interpretar sozinho: em resposta direta. "Seu perfil recebe 3x mais visitas no sábado de manhã." "Seu botão de ligar não recebe cliques, considere testar outra ação." "Você responde avaliações 3x mais rápido que negócios similares no seu bairro, isso está fortalecendo sua reputação." O Faro não te mostra números, te diz o que os números significam e o que fazer com eles.
              </p>
            </div>

            {/* Browser-frame mockup — mesmo padrão do Território */}
            <motion.div
              className="group flex justify-center mt-14 mb-8"
              style={{ position: 'relative' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '75%', height: '60%', background: 'radial-gradient(ellipse at center, rgba(10,166,137,0.22) 0%, rgba(80,242,150,0.06) 50%, transparent 70%)', filter: 'blur(48px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}
              />
              <motion.div
                whileHover={{ y: -6, scale: 1.008 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%', maxWidth: 900, background: '#1a1a1a', borderRadius: 12, overflow: 'hidden', boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px #111', position: 'relative', zIndex: 1, willChange: 'transform' }}
              >
                <div style={{ background: '#2a2a2a', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'block' }} />
                  </div>
                  <div style={{ background: '#3a3a3a', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#888', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 10, height: 10, flexShrink: 0 }}>
                      <motion.span
                        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.4 }}
                        style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', background: '#0AA689', display: 'block' }}
                      />
                      <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: '#0AA689', display: 'block', flexShrink: 0, boxShadow: '0 0 6px rgba(10,166,137,0.8)' }} />
                    </span>
                    <span style={{ fontFamily: 'monospace', letterSpacing: '0.01em' }}>sniffer.app/faro</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#0AA689', letterSpacing: '0.06em', textTransform: 'uppercase' as const, fontFamily: "'Ferom', Inter, sans-serif" }}>Ao vivo</span>
                  </div>
                </div>
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <img src="/mockups/mockup-faro.png" alt="Faro — dashboard de inteligência local" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </motion.div>
              {chips.map((chip, i) => (
                <motion.div
                  key={i}
                  className={chip.hideMobile ? 'hidden md:flex' : 'flex'}
                  initial={chip.initial}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: chip.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ ...chipBase, ...chip.pos, ...chip.extra }}
                >
                  <span style={{ fontSize: 15 }}>{chip.emoji}</span>
                  <div style={chipInner}>
                    <span style={chipValueStyle}>{chip.value}</span>
                    <span style={chipLabelStyle}>{chip.label}</span>
                  </div>
                  <span style={chipBadgeStyle(chip.badgeColor, chip.badgeBg)}>{chip.badge}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="my-12 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0AA689]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Além dos seus próprios dados
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                E o Faro vai além do seu próprio negócio. Nos planos pagos, ele compara seu desempenho com negócios similares na sua categoria e região, de forma anônima, e te mostra onde você está: acima da média, abaixo, ou empatado. Mais poderoso ainda: o Faro detecta demanda que ninguém está atendendo. Se pessoas no seu bairro estão buscando um serviço que nenhum negócio oferece, o Faro te avisa, e te dá o caminho pra capturar essa oportunidade antes de qualquer concorrente.
              </p>
              <p className="text-[17px] text-[#0AA689] font-semibold leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                É como ter o faro de um cachorro pra negócios: sentir o que está acontecendo antes de virar óbvio, e agir enquanto os outros ainda estão adivinhando.
              </p>
            </div>

            <div className="mt-12">
              <button className="bg-[#0AA689] hover:bg-[#098F75] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200" style={{ fontFamily: "'Ferom', Inter, sans-serif", fontSize: '16px' }}>
                Ative o Faro no seu negócio
              </button>
            <p className="mt-5 text-sm text-white/30" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
              <a href="/business#planos" className="hover:text-white/60 transition-colors duration-200" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>comparar preços</a>
            </p>
            </div>
          </div>
        </div>

        <div className="lg:w-80 shrink-0">
          <div className="sticky top-32 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: 'rgba(51, 45, 89, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <h3 className="text-[14px] uppercase tracking-wider text-white/50 font-bold mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
              Ecossistema Business
            </h3>
            <ul className="flex flex-col gap-2">
              {solutionsItems.map((item, index) => {
                const isActive = item.label === 'Faro';
                return (
                  <li key={index}>
                    <a href={item.href} className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#0AA689]/10 border border-[#0AA689]/30' : 'bg-transparent border border-transparent hover:bg-white/5'}`} style={{ textDecoration: 'none' }}>
                      <span className="text-2xl shrink-0 leading-none">{item.icon}</span>
                      <div className="flex-1 flex flex-col gap-1">
                        <span className={`font-semibold text-[15px] ${isActive ? 'text-[#0AA689]' : 'text-white'}`} style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>{item.label}</span>
                        <span className="text-[13px] text-white/60 leading-snug" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>{item.desc}</span>
                      </div>
                      {isActive && <ChevronRight className="text-[#0AA689] w-5 h-5 shrink-0 self-center" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
