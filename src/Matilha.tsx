import { useEffect } from 'react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { IPhoneFrame } from './components/IPhoneFrame';
import { ChevronRight } from 'lucide-react';

export default function Matilha() {
  useEffect(() => {
    document.title = 'Matilha | Sniffer Business';
  }, []);

  return (
    <motion.div
      key="business-matilha"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{
        backgroundColor: '#332D59',
        minHeight: '100vh',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src="/sniffer_brandbook_bg.svg"
        alt=""
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <BusinessNavbar />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12 lg:mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column - Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0AA689] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0AA689]"></span>
            <span className="text-[#0AA689] font-['Ferom'] text-[13px]">Produto</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: 'var(--font-jakarta)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            Matilha{' '}
            <br className="hidden md:block" />
            <span className="text-[#0AA689]" style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400 }}>
              Sua Matilha.
            </span>
            <br />
            Suas Regras.
          </h1>

          {/* Two-column: paragraphs + mockup */}
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
            <div className="flex-1">
              <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed mb-8" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                A Matilha é a camada de comunidade privada da Sniffer, um espaço onde o seu negócio cria círculos fechados e exclusivos com os clientes que mais importam. Diferente de um grupo de WhatsApp que vira caos em dois dias, a Matilha coloca você no controle absoluto: você decide quem entra, quem sai, e como o grupo se comporta. Cada Matilha funciona por convite, com aprovação do criador, regras visíveis desde o primeiro momento e até data de validade, se fizer sentido pro seu caso. É um ambiente íntimo, protegido e com identidade visual própria dentro da Sniffer, quando o cliente entra na sua Matilha, ele sabe que está num lugar diferente.
              </p>

              <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Pense num grupo VIP para os seus melhores clientes, numa comunidade de lançamento para um produto novo, ou num canal direto com os parceiros do seu bairro. A Matilha não é mais um chat. É o espaço onde pertencimento vira estratégia.
              </p>
            </div>

            <IPhoneFrame src="/mockups/mockup-matilha.png" alt="Mockup da Matilha — comunidade privada no app Sniffer" />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="my-12 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0AA689]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Rituais de Matilha
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                O que torna a Matilha genuinamente diferente de qualquer grupo que existe hoje são os Rituais de Matilha, interações recorrentes e programadas que mantêm o grupo vivo sem você precisar carregar tudo nas costas. Você cria um ritual (uma pergunta semanal, um pedido de foto, um check-in rápido por emoji), define a frequência e o prazo de resposta, e a Sniffer entrega automaticamente para todos os membros.
              </p>
              <p className="text-[17px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                As respostas ficam escondidas até que todos participem, criando um momento coletivo onde o grupo inteiro se enxerga. O resultado é um arquivo vivo de memórias compartilhadas, engajamento real sem esforço diário, e uma comunidade que se sente viva porque tem ritmo, não barulho.
              </p>
              <p className="text-[17px] text-[#0AA689] font-semibold leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Para o dono de negócio, isso significa uma coisa simples: seus clientes mais fiéis voltam toda semana, participam, e constroem uma relação com a sua marca que nenhum algoritmo de rede social consegue replicar.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button
                className="bg-[#0AA689] hover:bg-[#098F75] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200"
                style={{ fontFamily: "'Ferom', Inter, sans-serif", fontSize: '16px' }}
              >
                Crie sua Matilha
              </button>
            <p className="mt-5 text-sm text-white/30" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
              <a href="/business#planos" className="hover:text-white/60 transition-colors duration-200" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>comparar preços</a>
            </p>
            </div>
          </div>
        </div>

        {/* Right Column - Ecosystem Sidebar */}
        <div className="lg:w-80 shrink-0">
          <div
            className="sticky top-32 p-6 rounded-2xl border border-white/10"
            style={{
              backgroundColor: 'rgba(51, 45, 89, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <h3
              className="text-[14px] uppercase tracking-wider text-white/50 font-bold mb-6"
              style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
            >
              Ecossistema Business
            </h3>
            <ul className="flex flex-col gap-2">
              {solutionsItems.map((item, index) => {
                const isActive = item.label === 'Matilha';
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-[#0AA689]/10 border border-[#0AA689]/30'
                          : 'bg-transparent border border-transparent hover:bg-white/5'
                      }`}
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="text-2xl shrink-0 leading-none">{item.icon}</span>
                      <div className="flex-1 flex flex-col gap-1">
                        <span
                          className={`font-semibold text-[15px] ${isActive ? 'text-[#0AA689]' : 'text-white'}`}
                          style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="text-[13px] text-white/60 leading-snug"
                          style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
                        >
                          {item.desc}
                        </span>
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
