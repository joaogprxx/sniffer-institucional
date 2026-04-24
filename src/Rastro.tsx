import { useEffect } from 'react';
import { IPhoneFrame } from './components/IPhoneFrame';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { ChevronRight } from 'lucide-react';

export default function Rastro() {
  useEffect(() => {
    
  }, []);

  return (
    <motion.div
      key="business-rastro"
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
            Rastro{' '}
            <br className="hidden md:block" />
            <span className="text-[#0AA689]" style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400 }}>Antes de todos.</span>
            <br />
            Para sempre.
          </h1>

          <div className="prose prose-invert max-w-none">

            {/* Two-column: paragraphs + mockup */}
            <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
              {/* Paragraphs */}
              <div className="flex-1">
                <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed mb-8" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                  O Rastro é o programa de fundadores da Sniffer, e ele tem limite. São apenas 10.000 vagas para negócios em todo o Brasil. Quem entra agora garante 3 anos de acesso gratuito a todos os produtos da plataforma, incluindo tudo que for lançado nesse período. Sem mensalidade, sem cartão de crédito, sem surpresa.
                </p>
                <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                  Quando as 10.000 vagas acabarem, o programa fecha permanentemente, sem exceção, sem reabertura, sem lista de espera com promessa. Para participar, seu negócio precisa estar 100% ativo na Sniffer: perfil completo no Meu Território, Xodós escolhidos, primeira Matilha criada, Spotlight publicado, Uivo ativo, eventos cadastrados, Faro e Insights configurados. No momento em que tudo estiver completo, o relógio dos 3 anos começa a contar e o selo Rastro aparece no seu perfil pra sempre.
                </p>
              </div>

              <IPhoneFrame src="/mockups/mockup-rastro.png" alt="Mockup do Rastro — badge de fundador no perfil" />
            </div>

            <div className="my-12 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0AA689]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Uma marca de fundador
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                E quando dizemos pra sempre, é pra sempre. O selo Rastro é permanente, ele aparece no seu perfil, nos resultados de busca, no mapa, no feed, em toda superfície da Sniffer onde seu negócio for visto. Mas o mais poderoso acontece fora do app: cada negócio fundador recebe um adesivo físico e um quadro emoldurado com o selo Rastro e um QR code que leva direto pro seu perfil. Quando alguém entra no seu estabelecimento e vê a pata verde na parede, a pergunta é automática: "o que é isso?", e aí começa uma conversa que nenhum anúncio pago consegue comprar.
              </p>
              <p className="text-[17px] text-[#0AA689] font-semibold leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Depois dos 3 anos, você migra para uma tarifa permanentemente reduzida como reconhecimento por ter acreditado primeiro. O Rastro não é um desconto. É uma marca de fundador. E só 10.000 negócios no Brasil vão ter uma.
              </p>
            </div>

            <div className="mt-12">
              <button className="bg-[#0AA689] hover:bg-[#098F75] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200" style={{ fontFamily: "'Ferom', Inter, sans-serif", fontSize: '16px' }}>
                Garantir minha vaga no Rastro
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
                const isActive = item.label === 'Rastro';
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
