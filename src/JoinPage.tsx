import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { motion } from 'motion/react';

type Mode = 'people' | 'business' | 'comunidade';

const ACCENT: Record<Mode, string> = {
  people: '#3DDC84',
  business: '#00A896',
  comunidade: '#3DDC84',
};

const ACCENT_HOVER: Record<Mode, string> = {
  people: '#2FC476',
  business: '#009A89',
  comunidade: '#2FC476',
};

const PERSONAS: { label: string; mode: Mode; route: string }[] = [
  { label: 'People', mode: 'people', route: '/cadastro?mode=people' },
  { label: 'Business', mode: 'business', route: '/cadastro?mode=business' },
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
  const accentHover = ACCENT_HOVER[mode];

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
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#FFFFFF',
    fontSize: '15px',
    fontFamily: 'var(--font-ferom)',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: '#FFFFFF',
    marginBottom: '8px',
    fontFamily: 'var(--font-ferom)',
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8 pt-28"
      style={{ background: '#3D3C6E' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-[480px] flex flex-col items-center">

        {/* Wordmark */}
        <h1
          className="font-extrabold text-[40px] tracking-tight mb-8"
          style={{ color: accent, fontFamily: 'var(--font-ferom)', letterSpacing: '-0.02em' }}
        >
          Sniffer
        </h1>

        {/* Toggle Pill */}
        <div className="flex items-center bg-white/10 rounded-full p-1 mb-8 border border-white/5">
          {PERSONAS.map((p) => {
            const isActive = p.mode === mode;
            return (
              <button
                key={p.mode}
                onClick={() => navigate(p.route)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: 'var(--font-ferom)',
                  background: isActive ? accent : 'transparent',
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
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
          style={{ background: '#2E2B55', padding: '40px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[16px]" />

          <div className="relative z-10 flex flex-col gap-8">

            {submitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-6">
                <span className="text-5xl">🐾</span>
                <h2
                  className="text-white font-extrabold text-2xl"
                  style={{ fontFamily: 'var(--font-ferom)' }}
                >
                  você está dentro!
                </h2>
                <p className="text-white/50 text-sm">
                  em breve o Sniffer chega no seu bairro. fique de olho no seu e-mail.
                </p>
                <button
                  onClick={() => navigate('/business')}
                  className="mt-4 text-sm font-bold hover:underline"
                  style={{ color: accent }}
                >
                  ← voltar para Business
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Header */}
                <div>
                  <h2
                    className="font-semibold text-2xl mb-2"
                    style={{ color: '#FFFFFF', fontFamily: 'var(--font-ferom)' }}
                  >
                    faça o seu bairro acontecer
                  </h2>
                  <p className="text-white/50 text-sm">
                    conecte pessoas, crie movimento local.
                  </p>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-5">

                  <div>
                    <label style={labelStyle}>nome completo</label>
                    <input
                      type="text"
                      placeholder="seu nome"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                      style={inputStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = accent;
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`;
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
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
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={labelStyle}>celular</label>
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
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>e-mail</label>
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
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full font-bold text-[16px] text-white transition-colors active:scale-[0.98]"
                    style={{
                      height: '52px',
                      borderRadius: '16px',
                      background: hovering ? accentHover : accent,
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-ferom)',
                      transition: 'background 200ms ease',
                    }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    quero fazer parte
                  </button>
                  <div className="flex items-center justify-center gap-2" style={{ color: 'rgba(255,255,255,0.40)' }}>
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
