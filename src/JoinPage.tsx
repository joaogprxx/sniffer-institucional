import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

type Mode = 'people' | 'business' | 'comunidade';

const ACCENT: Record<Mode, string> = {
  people: '#3DDC84',
  business: '#00A896',
  comunidade: '#00A896',
};

const PAGE_BG: Record<Mode, string> = {
  people: 'radial-gradient(ellipse 80% 50% at top left, rgba(61,220,132,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at top right, rgba(51,45,89,0.14), transparent 55%), linear-gradient(180deg, #f4fbf7 0%, #eff4fb 40%, #e9eff8 100%)',
  business: '#3D3C6E',
  comunidade: '#00A896',
};

const CARD_BG: Record<Mode, string> = {
  people: '#FFFFFF',
  business: '#2E2B55',
  comunidade: '#FFFFFF',
};

const TEXT_PRIMARY: Record<Mode, string> = {
  people: '#2D2F5E',
  business: '#FFFFFF',
  comunidade: '#2D2F5E',
};

const TEXT_MUTED: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.55)',
  business: 'rgba(255,255,255,0.50)',
  comunidade: 'rgba(45,47,94,0.55)',
};

const INPUT_BG: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.05)',
  business: 'rgba(255,255,255,0.05)',
  comunidade: 'rgba(45,47,94,0.06)',
};

const INPUT_BORDER: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.15)',
  business: 'rgba(255,255,255,0.15)',
  comunidade: 'rgba(45,47,94,0.15)',
};

const INPUT_COLOR: Record<Mode, string> = {
  people: '#2D2F5E',
  business: '#FFFFFF',
  comunidade: '#2D2F5E',
};

const BTN_BG: Record<Mode, string> = {
  people: '#3DDC84',
  business: '#00A896',
  comunidade: '#2D2F5E',
};

const BTN_BG_HOVER: Record<Mode, string> = {
  people: '#2FC476',
  business: '#009A89',
  comunidade: '#1E2046',
};

const BTN_TEXT: Record<Mode, string> = {
  people: '#2D2F5E',
  business: '#FFFFFF',
  comunidade: '#FFFFFF',
};

const TOGGLE_TRACK: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.08)',
  business: 'rgba(255,255,255,0.10)',
  comunidade: 'rgba(45,47,94,0.12)',
};

const TOGGLE_BORDER: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.08)',
  business: 'rgba(255,255,255,0.05)',
  comunidade: 'rgba(45,47,94,0.10)',
};

const TOGGLE_ACTIVE_TEXT: Record<Mode, string> = {
  people: '#2D2F5E',
  business: '#FFFFFF',
  comunidade: '#2D2F5E',
};

const TOGGLE_INACTIVE_TEXT: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.50)',
  business: 'rgba(255,255,255,0.55)',
  comunidade: 'rgba(45,47,94,0.55)',
};

const BACK_COLOR: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.60)',
  business: 'rgba(255,255,255,0.60)',
  comunidade: 'rgba(45,47,94,0.60)',
};

const LOCK_COLOR: Record<Mode, string> = {
  people: 'rgba(45,47,94,0.40)',
  business: 'rgba(255,255,255,0.40)',
  comunidade: 'rgba(45,47,94,0.40)',
};

const PERSONAS: { label: string; mode: Mode; route: string }[] = [
  { label: 'Pessoas', mode: 'people', route: '/cadastro?mode=people' },
  { label: 'Negócios', mode: 'business', route: '/cadastro?mode=business' },
  { label: 'Comunidade', mode: 'comunidade', route: '/cadastro?mode=comunidade' },
];

function toMode(raw: string | null): Mode {
  if (raw === 'business') return 'business';
  if (raw === 'comunidade') return 'comunidade';
  return 'people';
}

export default function JoinPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = toMode(searchParams.get('mode'));
  const accent = ACCENT[mode];

  const [nome, setNome] = useState('');
  const [negocio, setNegocio] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  const inputStyle = {
    width: '100%',
    background: INPUT_BG[mode],
    border: `1px solid ${INPUT_BORDER[mode]}`,
    borderRadius: '12px',
    padding: '12px 16px',
    color: INPUT_COLOR[mode],
    fontSize: '15px',
    fontFamily: 'var(--font-ferom)',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: TEXT_PRIMARY[mode],
    marginBottom: '8px',
    fontFamily: 'var(--font-ferom)',
  };

  const isLight = mode === 'people' || mode === 'comunidade';

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8 pt-10"
      style={{ background: PAGE_BG[mode] }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-[480px] flex flex-col items-center">

        {/* Back arrow */}
        <button
          onClick={() => navigate(-1)}
          className="self-start flex items-center gap-2 mb-6 transition-opacity hover:opacity-70"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: BACK_COLOR[mode], fontFamily: 'var(--font-ferom)', fontSize: '14px', fontWeight: 500, padding: 0 }}
        >
          <ArrowLeft size={18} />
          voltar
        </button>

        {/* Logo */}
        <img
          src={isLight ? '/logo-sniffer-wordmark.png' : '/logo-sniffer-white.png'}
          alt="Sniffer"
          style={{ height: '48px', width: 'auto', marginBottom: '32px' }}
        />

        {/* Toggle Pill */}
        <div
          className="flex items-center rounded-full p-1 mb-8"
          style={{ background: TOGGLE_TRACK[mode], border: `1px solid ${TOGGLE_BORDER[mode]}` }}
        >
          {PERSONAS.map((p) => {
            const isActive = p.mode === mode;
            return (
              <button
                key={p.mode}
                onClick={() => navigate(p.route)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: 'var(--font-ferom)',
                  background: isActive ? (mode === 'comunidade' ? '#ffffff' : accent) : 'transparent',
                  color: isActive ? (mode === 'comunidade' ? '#00A896' : TOGGLE_ACTIVE_TEXT[mode]) : TOGGLE_INACTIVE_TEXT[mode],
                  boxShadow: isActive ? `0 2px 8px ${accent}44` : 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Main Card */}
        <div
          className="w-full rounded-[16px] shadow-2xl relative overflow-hidden"
          style={{
            background: CARD_BG[mode],
            padding: '40px',
            boxShadow: isLight ? '0 8px 40px rgba(45,47,94,0.10)' : undefined,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[16px]" />

          <div className="relative z-10 flex flex-col gap-8">

            {submitted ? (
              <div className="flex flex-col items-center text-center gap-6 py-8">
                {/* Static mascot icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src="/logo-sniffer.png" alt="Sniffer" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <h2
                  className="font-extrabold text-2xl"
                  style={{ color: TEXT_PRIMARY[mode], fontFamily: 'var(--font-ferom)', lineHeight: 1.3 }}
                >
                  Pronto. Você já faz parte.
                </h2>

                <p style={{
                  color: TEXT_PRIMARY[mode],
                  fontSize: '15px',
                  lineHeight: 1.7,
                  maxWidth: '34ch',
                  fontFamily: 'var(--font-ferom)',
                }}>
                  Quando a Sniffer abrir as portas, seu convite chegará direto no seu WhatsApp ou e-mail. E com ele,{' '}
                  <strong style={{ color: TEXT_PRIMARY[mode], fontWeight: 800 }}>5 convites</strong> pra você trazer quem realmente importa.
                </p>

                <p style={{
                  color: TEXT_PRIMARY[mode],
                  fontSize: '18px',
                  fontWeight: 700,
                  fontFamily: "'Buasley', cursive",
                  letterSpacing: '0.01em',
                  marginTop: '4px',
                }}>
                  A revolução é local. E começa com você.
                </p>

                <button
                  onClick={() => navigate(-1)}
                  className="mt-4 text-sm font-bold hover:underline"
                  style={{
                    color: '#00A896',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-ferom)',
                  }}
                >
                  ← voltar
                </button>

                <style>{`
                  @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 8px 32px rgba(61,220,132,0.35); }
                    50% { box-shadow: 0 8px 48px rgba(61,220,132,0.55); }
                  }
                `}</style>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Header */}
                <div className="flex flex-col gap-3">
                  <h2
                    className="font-semibold text-2xl"
                    style={{ color: TEXT_PRIMARY[mode], fontFamily: 'var(--font-ferom)', lineHeight: 1.3 }}
                  >
                    {mode === 'people'
                      ? 'A Sniffer está chegando — e o lançamento não é pra todo mundo.'
                      : mode === 'business'
                      ? 'A Sniffer está chegando — e os primeiros negócios do bairro já estão garantindo lugar.'
                      : 'A Sniffer está chegando — e as comunidades que moldam o bairro entram primeiro.'}
                  </h2>

                  {mode === 'people' && (
                    <>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        Deixa seu nome, WhatsApp e e-mail. Quando abrirmos as portas, você recebe um convite exclusivo pra criar seu perfil antes de todo mundo.
                      </p>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        E tem mais: depois de entrar, você vai poder convidar <strong style={{ color: TEXT_PRIMARY[mode], fontWeight: 700 }}>5 pessoas da sua confiança</strong>. Só cinco. Escolhe bem — na Sniffer, quem você traz diz muito sobre você.
                      </p>
                    </>
                  )}

                  {mode === 'business' && (
                    <>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        Deixa o nome do seu negócio, WhatsApp e e-mail. Quando abrirmos as portas, você recebe um convite exclusivo pra criar o perfil do seu estabelecimento e ser encontrado por quem mora pertinho de você.
                      </p>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        E tem mais: depois de entrar, você vai poder convidar <strong style={{ color: TEXT_PRIMARY[mode], fontWeight: 700 }}>5 negócios parceiros do bairro</strong>. Só cinco. Pensa bem em quem você quer trazer — na Sniffer, a sua vizinhança começa por você.
                      </p>
                    </>
                  )}

                  {mode === 'comunidade' && (
                    <>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        Deixa o nome do seu grupo, WhatsApp e e-mail. Quando abrirmos as portas, você recebe um convite exclusivo pra criar o perfil da sua comunidade e aparecer pra quem já vive e respira o mesmo bairro que você.
                      </p>
                      <p style={{ color: TEXT_MUTED[mode], fontSize: '14px', lineHeight: 1.65, fontFamily: 'var(--font-ferom)' }}>
                        E tem mais: depois de entrar, você vai poder convidar <strong style={{ color: TEXT_PRIMARY[mode], fontWeight: 700 }}>5 outras comunidades</strong>. Só cinco. Escolhe quem faz o bairro ser o que ele é — na Sniffer, pertencimento se constrói junto.
                      </p>
                    </>
                  )}
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-5">

                  <div>
                    <label style={labelStyle}>{mode === 'people' ? 'Quem é você na rua?' : 'nome completo'}</label>
                    <input
                      type="text"
                      placeholder={mode === 'people' ? 'Como te chamam?' : 'seu nome'}
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                      style={inputStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = accent;
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`;
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = INPUT_BORDER[mode];
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {mode === 'business' && (
                    <div>
                      <label style={labelStyle}>nome do negócio</label>
                      <input
                        type="text"
                        placeholder="sua empresa ou estabelecimento"
                        value={negocio}
                        onChange={e => setNegocio(e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={e => {
                          e.currentTarget.style.borderColor = accent;
                          e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`;
                        }}
                        onBlur={e => {
                          e.currentTarget.style.borderColor = INPUT_BORDER[mode];
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={labelStyle}>WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={celular}
                      onChange={e => setCelular(formatPhone(e.target.value))}
                      required
                      style={inputStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = accent;
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`;
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = INPUT_BORDER[mode];
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>{mode === 'people' ? 'E-mail' : 'e-mail'}</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={inputStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = accent;
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`;
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = INPUT_BORDER[mode];
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full font-bold text-[16px] transition-colors active:scale-[0.98]"
                    style={{
                      height: '52px',
                      borderRadius: '16px',
                      background: hovering ? BTN_BG_HOVER[mode] : BTN_BG[mode],
                      color: BTN_TEXT[mode],
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-ferom)',
                      transition: 'background 200ms ease',
                    }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    {mode === 'people' ? 'A revolução é local. Faça parte!' : 'quero fazer parte'}
                  </button>
                  <div className="flex items-center justify-center gap-2" style={{ color: LOCK_COLOR[mode] }}>
                    <Lock size={14} />
                    <span className="text-[12px]" style={{ fontFamily: 'var(--font-ferom)' }}>
                      seus dados estão seguros. sem spam.
                    </span>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}
