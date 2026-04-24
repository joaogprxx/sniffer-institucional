import { useEffect } from 'react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { IPhoneFrame } from './components/IPhoneFrame';
import { ChevronRight } from 'lucide-react';

export default function Uivo() {
  useEffect(() => {
    
  }, []);

  return (
    <motion.div
      key="business-uivo"
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
            Uivo{' '}
            <br className="hidden md:block" />
            <span className="text-[#0AA689]" style={{ fontFamily: 'var(--font-buasley)', fontWeight: 400 }}>Sua voz</span>
            <br />
            dentro da Sniffer.
          </h1>

          {/* Two-column: paragraph + mockup */}
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
            <div className="flex-1">
              <p className="text-lg lg:text-[19px] text-white/80 leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                O Uivo é o canal direto entre o seu negócio e as pessoas que te encontram na Sniffer. Quando alguém visita seu perfil, vê sua promoção ou descobre seu negócio no mapa, ela pode te mandar uma mensagem ali mesmo, sem sair do app, sem precisar de número de telefone, sem fricção. Você recebe tudo numa caixa de entrada dedicada ao seu negócio, com notificação em tempo real, histórico completo de conversa e indicador de mensagem lida. Dúvida sobre horário, pedido de orçamento, agendamento, reserva, tudo acontece dentro do Uivo. E diferente de outras plataformas, a conversa começa porque a pessoa já te encontrou num ambiente de confiança. Ela não está comparando dez opções num buscador. Ela te achou, gostou do que viu e decidiu falar com você.
              </p>
            </div>

            <IPhoneFrame src="/mockups/mockup-uivo.png" alt="Mockup do Uivo — caixa de entrada de atendimento no app Sniffer" />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="my-12 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0AA689]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                O balcão de atendimento digital
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-6" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Para você, dono de negócio, o Uivo transforma interesse em conversa e conversa em receita. Você acompanha o tempo médio de resposta do seu negócio, e esse tempo aparece no seu perfil público, mostrando pra todo mundo o quanto você é ágil. Crie respostas rápidas pra perguntas frequentes, compartilhe fotos e documentos direto no chat, e nos planos pagos, coloque mais de um atendente na mesma caixa de entrada pra nunca deixar ninguém esperando.
              </p>
              <p className="text-[17px] text-[#0AA689] font-semibold leading-relaxed" style={{ fontFamily: "'Ferom', Inter, sans-serif" }}>
                Cada conversa iniciada, cada tempo de resposta, cada mensagem trocada alimenta o Faro, e vira inteligência sobre como as pessoas se comunicam com o seu negócio. O Uivo não é um chat. É o balcão de atendimento do seu negócio dentro da Sniffer, aberto, rápido e rastreável.
              </p>
            </div>

            <div className="mt-12">
              <button className="bg-[#0AA689] hover:bg-[#098F75] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200" style={{ fontFamily: "'Ferom', Inter, sans-serif", fontSize: '16px' }}>
                Ative o Uivo no seu negócio
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
                const isActive = item.label === 'Uivo';
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
