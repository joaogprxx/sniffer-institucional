import { useEffect } from 'react';
import { IPhoneFrame } from './components/IPhoneFrame';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { ChevronRight } from 'lucide-react';


export default function Xodos() {
  useEffect(() => {
    
  }, []);

  return (
    <motion.div
      key="business-xodos"
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
      {/* Background SVG texture */}
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
            Xodó <br className="hidden md:block" />
            <span
              className="text-[#0AA689]"
              style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400 }}
            >
              Os Meus Xodós.
            </span>
            <br />
            Confiança tem nome.
          </h1>

          {/* Two-column: paragraphs + mockup */}
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
            {/* Paragraphs */}
            <div className="flex-1">
              <p
                className="text-lg lg:text-[19px] text-white/80 leading-relaxed mb-8"
                style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
              >
                O Xodó é a camada de confiança da Sniffer. Cada negócio na plataforma tem 7 Xodós,
                espaços no perfil onde você escolhe, de forma pública e deliberada, as pessoas,
                negócios e comunidades em quem confia e recomenda.
              </p>

              <p
                className="text-lg lg:text-[19px] text-white/80 leading-relaxed"
                style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
              >
                E as pessoas fazem o mesmo com você: quando alguém coloca o seu negócio num dos 7
                Xodós dela, essa escolha fica visível no perfil, alimenta o sistema de descoberta da
                Sniffer e faz seu negócio aparecer para toda a rede de confiança ao redor. Não é um
                seguir. Não é um curtir. É uma via de mão dupla: você recomenda quem confia, e é
                recomendado por quem confia em você. É o boca a boca que sempre existiu, só que
                agora ele tem endereço, tem visibilidade e tem alcance.
              </p>
            </div>

            <IPhoneFrame src="/mockups/mockup-xodos.png" alt="Mockup do Xodós — perfil com mapa de recomendações" />
          </div>

          {/* Highlight box — full width below the two columns */}
          <div className="my-12 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0AA689]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2
              className="text-2xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
            >
              Para o dono de negócio
            </h2>
            <p
              className="text-[17px] text-white/80 leading-relaxed mb-6"
              style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
            >
              O Xodó é a forma mais poderosa de crescer dentro da Sniffer. Escolha o fornecedor que
              você indica, o parceiro do bairro, a comunidade que representa seu mercado, e mostre
              pro mundo em quem você acredita.
            </p>
            <p
              className="text-[17px] text-white/80 leading-relaxed mb-6"
              style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
            >
              Do outro lado, pessoas que confiam no seu trabalho te colocam nos Xodós delas, e isso
              gera visibilidade orgânica real: seu negócio aparece mais nas buscas, no mapa e no
              feed de quem importa.
            </p>
            <p
              className="text-[17px] text-[#0AA689] font-semibold leading-relaxed"
              style={{ fontFamily: "'Ferom', Inter, sans-serif" }}
            >
              Cada visualização, cada toque, cada pessoa que chegou até você por um Xodó aparece no
              seu painel. Não é métrica inventada. É gente real dizendo publicamente que confia em
              você, e outras pessoas agindo com base nessa confiança. Nenhuma plataforma oferece
              isso hoje.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              className="bg-[#0AA689] hover:bg-[#098F75] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200"
              style={{ fontFamily: "'Ferom', Inter, sans-serif", fontSize: '16px' }}
            >
              Ative o Xodó no seu negócio
            </button>
            <p className="mt-5 text-sm text-white/30" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
              <a
                href="/business#planos"
                className="hover:text-white/60 transition-colors duration-200"
                style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                comparar preços
              </a>
            </p>
          </div>
        </div>

        {/* Right Column - Translucent Vertical Menu */}
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
                const isActive = item.label === 'Xodós';
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
                      {isActive && (
                        <ChevronRight className="text-[#0AA689] w-5 h-5 shrink-0 self-center" />
                      )}
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
