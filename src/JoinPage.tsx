import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { motion } from 'motion/react';

const PERSONAS = [
  { label: 'People', route: '/' },
  { label: 'Business', route: '/business' },
  { label: 'Comunidade', route: '/cadastro' },
] as const;

export default function JoinPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  }

  const inputClass = `
    w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3
    text-white placeholder-white/30 text-[15px]
    focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]
    transition-all
  `;

  const labelClass = 'text-[13px] font-medium text-white';

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
          style={{ color: '#3DDC84', fontFamily: 'var(--font-ferom)', letterSpacing: '-0.02em' }}
        >
          Sniffer
        </h1>

        {/* Toggle Pill */}
        <div className="flex items-center bg-white/10 rounded-full p-1 mb-8 border border-white/5">
          {PERSONAS.map((p) => {
            const isActive = p.label === 'Comunidade';
            return (
              <button
                key={p.label}
                onClick={() => navigate(p.route)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#00A896] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-ferom)' }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Main Card */}
        <div
          className="w-full rounded-[16px] p-10 shadow-2xl relative overflow-hidden"
          style={{ background: '#2E2B55' }}
        >
          {/* Glass sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[16px]" />

          <div className="relative z-10 flex flex-col gap-8">

            {submitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-6">
                <span className="text-5xl">🐾</span>
                <h2 className="text-white font-extrabold text-2xl" style={{ fontFamily: 'var(--font-ferom)' }}>
                  você está dentro!
                </h2>
                <p className="text-white/50 text-sm">
                  em breve o Sniffer chega no seu bairro. fique de olho no seu e-mail.
                </p>
                <button
                  onClick={() => navigate('/business')}
                  className="mt-4 text-[#00A896] text-sm font-bold hover:underline"
                >
                  ← voltar para Business
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Header */}
                <div>
                  <h2
                    className="text-white font-semibold text-2xl mb-2"
                    style={{ fontFamily: 'var(--font-ferom)' }}
                  >
                    faça o seu bairro acontecer
                  </h2>
                  <p className="text-white/50 text-sm">
                    conecte pessoas, crie movimento local.
                  </p>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>nome completo</label>
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="seu nome"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>celular</label>
                    <input
                      className={inputClass}
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={celular}
                      onChange={e => setCelular(formatPhone(e.target.value))}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>e-mail</label>
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full h-[52px] rounded-[16px] font-bold text-[16px] text-white transition-all active:scale-[0.98] hover:opacity-90"
                    style={{ background: '#00A896' }}
                  >
                    quero fazer parte
                  </button>
                  <div className="flex items-center justify-center gap-2 text-white/40">
                    <Lock size={14} />
                    <span className="text-[12px]">seus dados estão seguros. sem spam.</span>
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
