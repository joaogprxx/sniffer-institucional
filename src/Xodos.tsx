import { useEffect } from 'react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './pageTransition';
import { BusinessNavbar, solutionsItems } from './components/BusinessNavbar';
import { ChevronRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Inline Xodós profile mockup — no external images, no extra imports
// ---------------------------------------------------------------------------

const NODE_RADIUS = 90; // px from center to node center

interface NodeDef {
  label: string;
  angleDeg: number;
  borderColor: string;
  bgColor: string;
  initial: string;
  sponsored: boolean;
}

const nodes: NodeDef[] = [
  { label: 'Dr. Marcos', angleDeg: 0,   borderColor: '#50F296', bgColor: '#0AA689', initial: 'M',  sponsored: false },
  { label: 'Ana Lima',   angleDeg: 51,  borderColor: '#50F296', bgColor: '#7C3AED', initial: 'A',  sponsored: false },
  { label: 'Dr. Rafael', angleDeg: 103, borderColor: '#50F296', bgColor: '#2563EB', initial: 'R',  sponsored: false },
  { label: 'Pet Shop',   angleDeg: 154, borderColor: '#50F296', bgColor: '#16A34A', initial: '🐾', sponsored: false },
  { label: 'Café',       angleDeg: 205, borderColor: '#F97316', bgColor: '#92400E', initial: '☕', sponsored: true  },
  { label: 'Bistrô',     angleDeg: 257, borderColor: '#F97316', bgColor: '#C2410C', initial: '🍽', sponsored: true  },
  { label: 'Studio Zen', angleDeg: 308, borderColor: '#F97316', bgColor: '#6B7280', initial: '🧘', sponsored: true  },
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

// Container is 280px wide, graph area is square 240px
// Center point = (120, 120) inside the graph area
const GRAPH_SIZE = 240;
const CENTER = GRAPH_SIZE / 2; // 120

function nodePosition(angleDeg: number) {
  const rad = toRad(angleDeg);
  const x = CENTER + NODE_RADIUS * Math.sin(rad);
  const y = CENTER - NODE_RADIUS * Math.cos(rad);
  return { x, y };
}

function XodosProfileMockup() {
  const NODE_D = 28; // node circle diameter
  const CENTER_D = 32; // center avatar diameter
  const AVATAR_D = 40; // profile avatar diameter

  return (
    <div
      style={{
        maxWidth: 280,
        width: '100%',
        borderRadius: 36,
        background: '#fff',
        border: '1.5px solid #D1D5DB',
        boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, sans-serif",
        userSelect: 'none',
      }}
    >
      {/* ── Profile header ── */}
      <div style={{ position: 'relative' }}>
        {/* Cover gradient */}
        <div
          style={{
            height: 40,
            background: 'linear-gradient(135deg, #332D59 0%, #0AA689 100%)',
          }}
        />
        {/* Avatar */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 14,
            width: AVATAR_D,
            height: AVATAR_D,
            borderRadius: '50%',
            border: '2px solid #fff',
            background: 'linear-gradient(135deg, #0AA689 0%, #332D59 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
          }}
        >
          AB
        </div>
      </div>

      {/* Name + role + stats */}
      <div style={{ paddingTop: 16, paddingLeft: 14, paddingRight: 14, paddingBottom: 10 }}>
        <div
          style={{
            marginTop: 4,
            fontSize: 13,
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.3,
          }}
        >
          Dra. Ana Beatriz
        </div>
        <div style={{ fontSize: 10, color: '#6B7280', marginTop: 1 }}>
          Dermatologista · Pinheiros
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 5,
            fontSize: 9,
            color: '#6B7280',
            flexWrap: 'wrap',
          }}
        >
          <span>1.2k seguidores</span>
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span>312 seguindo</span>
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span>
            <strong style={{ color: '#0AA689', fontWeight: 700 }}>47 Xodós</strong>
          </span>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <button
            style={{
              flex: 1,
              padding: '4px 0',
              borderRadius: 8,
              border: 'none',
              background: '#332D59',
              color: '#fff',
              fontSize: 10,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Seguir
          </button>
          <button
            style={{
              flex: 1,
              padding: '4px 0',
              borderRadius: 8,
              border: '1.5px solid #332D59',
              background: 'transparent',
              color: '#332D59',
              fontSize: 10,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Mensagem
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#F3F4F6', marginLeft: 14, marginRight: 14 }} />

      {/* ── "Meus Xodós" heading ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px 6px',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Meus Xodós</span>
        <span
          style={{
            fontSize: 10,
            color: '#6B7280',
            border: '1px solid #E5E7EB',
            borderRadius: 20,
            padding: '2px 8px',
          }}
        >
          Editar
        </span>
      </div>

      {/* ── Radial graph card ── */}
      <div style={{ padding: '0 10px 10px' }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
            padding: '12px 8px 8px',
            border: '1px solid #F3F4F6',
          }}
        >
          {/* Graph container */}
          <div
            style={{
              width: GRAPH_SIZE,
              height: GRAPH_SIZE,
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {/* SVG connector lines */}
            <svg
              width={GRAPH_SIZE}
              height={GRAPH_SIZE}
              style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
            >
              {nodes.map((node, i) => {
                const { x, y } = nodePosition(node.angleDeg);
                return (
                  <line
                    key={i}
                    x1={CENTER}
                    y1={CENTER}
                    x2={x}
                    y2={y}
                    stroke={node.borderColor}
                    strokeWidth={1}
                    strokeDasharray="3 3"
                    opacity={0.55}
                  />
                );
              })}
            </svg>

            {/* Center avatar */}
            <div
              style={{
                position: 'absolute',
                top: CENTER - CENTER_D / 2,
                left: CENTER - CENTER_D / 2,
                width: CENTER_D,
                height: CENTER_D,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0AA689 0%, #332D59 100%)',
                border: '2px solid #fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: 11,
                zIndex: 2,
              }}
            >
              AB
            </div>

            {/* Nodes */}
            {nodes.map((node, i) => {
              const { x, y } = nodePosition(node.angleDeg);
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: y - NODE_D / 2,
                    left: x - NODE_D / 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 3,
                  }}
                >
                  {/* Node circle */}
                  <div
                    style={{
                      position: 'relative',
                      width: NODE_D,
                      height: NODE_D,
                      borderRadius: '50%',
                      background: node.bgColor,
                      border: `2px solid ${node.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 10,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                    }}
                  >
                    {node.initial}
                    {node.sponsored && (
                      <span
                        style={{
                          position: 'absolute',
                          top: -4,
                          right: -4,
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: '#F97316',
                          border: '1px solid #fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 7,
                          color: '#fff',
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        $
                      </span>
                    )}
                  </div>
                  {/* Label */}
                  <span
                    style={{
                      marginTop: 3,
                      fontSize: 8,
                      color: '#374151',
                      whiteSpace: 'nowrap',
                      fontWeight: 500,
                      textAlign: 'center',
                      maxWidth: 52,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 14,
              marginTop: 6,
              fontSize: 9,
              color: '#6B7280',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#50F296',
                  display: 'inline-block',
                }}
              />
              Orgânico
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#F97316',
                  display: 'inline-block',
                }}
              />
              Patrocinado
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div
        style={{
          height: 36,
          borderTop: '1px solid #F3F4F6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        {[
          { icon: '🏠', active: false },
          { icon: '🔍', active: false },
          { icon: '📍', active: false },
          { icon: '💬', active: false },
          { icon: '👤', active: true },
        ].map((btn, i) => (
          <div
            key={i}
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: btn.active ? '#332D59' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
            }}
          >
            {btn.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function Xodos() {
  useEffect(() => {
    document.title = 'Xodó | Sniffer Business';
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
                seguir. Não é um curtir. É uma via de mão dupla, você recomenda quem confia, e é
                recomendado por quem confia em você. É o boca a boca que sempre existiu, só que
                agora ele tem endereço, tem visibilidade e tem alcance.
              </p>
            </div>

            {/* Mockup column */}
            <div className="lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
              <XodosProfileMockup />
            </div>
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
              gera visibilidade orgânica real, seu negócio aparece mais nas buscas, no mapa e no
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
