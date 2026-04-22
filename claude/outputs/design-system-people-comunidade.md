# Sniffer — Design System: People + Comunidade

> Guia de identidade visual das personas **People** (`/`) e **Comunidade** (`/comunidade`).
> Arquivo de referência — não implementar sem aprovação de João Gabriel.

---

## Visão Geral das Três Personas

| Persona | Fundo | Acento | Texto |
|---------|-------|--------|-------|
| **People** | Branco `#FFFFFF` | Verde `#78C87A` | Navy `#2D2F5E` |
| **Comunidade** | Teal `#00A896` | Navy `#2D2F5E` | Navy `#2D2F5E` |
| **Business** | Navy `#2D2F5E` | Teal `#00A896` | Branco `#FFFFFF` |

Cada persona é a **inversão cromática** de outra — criando coerência sistêmica ao trocar de modo.

---

---

# PERSONA: PEOPLE

---

## 1. Princípio Visual

**Fundo branco limpo + acentos em verde vibrante.**
People é a persona de usuário final — deve transmitir **energia, descoberta e leveza urbana**.
Tudo que é ação usa verde. Tudo que é contexto usa navy.

---

## 2. Paleta de Cores — People

### Cores primárias

| Nome | Hex | Token CSS | Uso |
|------|-----|-----------|-----|
| Verde Sniffer | `#78C87A` | `var(--color-verdeSniffer)` | CTAs, badges, acentos ativos |
| Navy | `#2D2F5E` | `var(--color-navy)` | Texto principal, títulos |
| Branco | `#FFFFFF` | — | Fundo de página e seções |
| Off-white | `#F5F5F0` | `var(--color-offWhiteBg)` | Fundo alternativo suave |

### Cores de superfície

| Nome | Hex | Uso |
|------|-----|-----|
| Navbar | `rgba(255,255,255,0.97)` | Glassmorphism barra de navegação |
| Cards | `#FFFFFF` + sombra navy sutil | Componentes elevados |
| Mapa / visualizações | `#111128` | Contraste escuro para mapas e grids |

### Texto

| Papel | Valor |
|-------|-------|
| Primário | `#2D2F5E` (navy) |
| Secundário | `rgba(45,47,94,0.70)` |
| Muted | `rgba(45,47,94,0.60)` |
| Desabilitado | `rgba(45,47,94,0.40)` |
| Sobre verde | `#2D2F5E` (navy) |

### Bordas e divisores

| Contexto | Valor |
|----------|-------|
| Padrão | `rgba(45,47,94,0.06–0.08)` |
| Destaque verde | `rgba(120,200,122,0.18)` |
| Sombra cards | `0 0 60px rgba(61,220,132,0.12)` |

---

## 3. Tipografia — People

**Fonte:** `Ferom` / fallback: `Inter, -apple-system, sans-serif`

| Elemento | Peso | Tamanho | Cor |
|----------|------|---------|-----|
| H1 Hero | 800 (extrabold) | `text-3xl → text-7xl` | Navy, destaque em verde |
| H2 Seção | 800 | `text-4xl → text-6xl` | Navy |
| H3 Steps (Farejar/etc) | 900 (black) | `text-4xl → text-7xl` | Navy |
| Subtítulo step | 700 | `text-lg → text-xl` | Verde Sniffer |
| Body | 400 | `text-base → text-xl` | `navy/60` |
| Badge/label | 900 | `10–12px` uppercase + tracking | Verde Sniffer |
| Nav links | 500 | `text-sm` | `navy/65`, hover verde |
| CTAs | 700–900 | `text-sm → text-lg` | Navy sobre verde |

---

## 4. Botões — People

### CTA primário (verde)
```css
background: #78C87A; /* var(--color-verdeSniffer) */
color: #2D2F5E;      /* navy */
border-radius: 9999px; /* pill */
padding: 16px 40px;
font-weight: 900;
box-shadow: 0 8px 24px rgba(120,200,122,0.20);

/* hover */
opacity: 0.90;
transform: scale(1.05);
```

### CTA secundário (outline navy)
```css
background: transparent;
border: 2px solid rgba(45,47,94,0.20);
color: #2D2F5E;
border-radius: 9999px;
padding: 16px 40px;
font-weight: 700;

/* hover */
border-color: rgba(45,47,94,0.40);
```

### Botão pequeno (navbar)
```css
background: #78C87A;
color: #2D2F5E;
border-radius: 9999px;
padding: 8px 20–24px;
font-weight: 700;
font-size: 14px;
```

---

## 5. Navegação — People

- **Posição:** `fixed bottom-0` (barra inferior mobile-first)
- **Background:** `rgba(255,255,255,0.97)` + `blur(20px)`
- **Borda:** `borderTop: 1px solid rgba(45,47,94,0.07)`
- **Sombra:** `0 -4px 24px rgba(45,47,94,0.06)`
- **Links:** `navy/65`, hover `verdeSniffer`

---

## 6. Seções — People

| # | Seção | Fundo | Destaque |
|---|-------|-------|---------|
| Hero | `bg-white` | Verde no texto final do H1 |
| Como Funciona (steps) | `bg-white` | Verde nos labels e subtítulos |
| Features Split | `bg-white` | Verde |
| Tribos Grid | `bg-offWhiteBg` ou navy escuro | — |
| Footer | Navy | Verde/60 no wordmark |

---

## 7. Efeitos Visuais — People

| Efeito | Implementação |
|--------|---------------|
| Mapa de calor | `#111128` + grid `rgba(61,220,132,0.06)` |
| Scan sweep | Linha horizontal verde, `animation: scan-sweep 4s linear` |
| Glow radial | `radial-gradient(rgba(61,220,132,0.18), transparent)` + `blur(28px)` |
| Step cards | `border-bottom: 3px solid transparent`, hover → verde |
| Partículas | Cor navy, drift horizontal animado |
| Pulse ring | Verde Sniffer, `scale(0.33→1.5)` fade |

---

---

# PERSONA: COMUNIDADE

---

## 1. Princípio Visual

**Fundo teal principal + texto/acentos em navy profundo.**
Comunidade é a persona de grupos, tribos e conexões locais — deve transmitir **pertencimento, calor humano e autenticidade**.
É a inversão direta da Business: onde Business usa navy como tela e teal como tinta, Comunidade usa teal como tela e navy como tinta.

---

## 2. Paleta de Cores — Comunidade

### Cores primárias

| Nome | Hex | Token CSS | Uso |
|------|-----|-----------|-----|
| Teal principal | `#00A896` | `var(--color-tealBusiness)` | Fundo de página |
| Navy profundo | `#2D2F5E` | `var(--color-navy)` | Texto, CTAs, acentos |
| Teal escuro | `#008F80` | — | Superfícies elevadas, hover |
| Teal claro | `#00C4B0` | — | Highlights, gradientes |

### Cores de superfície

| Nome | Hex | Uso |
|------|-----|-----|
| Cards elevados | `rgba(0,168,150,0.85)` + blur | Glassmorphism sobre teal |
| Cards brancos | `#FFFFFF` | Cards de conteúdo com texto navy |
| Cards navy | `rgba(45,47,94,0.15)` | Cards de destaque sobre teal |
| Navbar | `rgba(0,168,150,0.92)` + blur | Glassmorphism teal |

### Texto

| Papel | Valor |
|-------|-------|
| Primário | `#2D2F5E` (navy) |
| Secundário | `rgba(45,47,94,0.75)` |
| Muted | `rgba(45,47,94,0.55)` |
| Invertido (sobre navy) | `#FFFFFF` |
| Sobre branco | `#2D2F5E` navy |

### Bordas e divisores

| Contexto | Valor |
|----------|-------|
| Padrão | `rgba(45,47,94,0.12–0.20)` |
| Destaque navy | `rgba(45,47,94,0.30)` |
| Glow teal claro | `rgba(0,196,176,0.40)` |

---

## 3. Tipografia — Comunidade

**Fonte:** `Ferom` / fallback: `Inter, -apple-system, sans-serif`

| Elemento | Peso | Tamanho | Cor |
|----------|------|---------|-----|
| H1 Hero | 800 | `text-4xl → text-6xl` | Navy, destaque navy mais escuro ou branco |
| H2 Seção | 800 | `text-3xl → text-4xl` | Navy |
| Body | 400–500 | `text-base → text-lg` | `navy/75` |
| Badge/label | 900 | `10–12px` uppercase | Navy |
| CTAs | 700–900 | `text-sm → text-base` | Branco sobre navy |
| Nav links | 500 | `15px` | Navy, hover navy/50 |

---

## 4. Botões — Comunidade

### CTA primário (navy sobre teal)
```css
background: #2D2F5E; /* navy */
color: #FFFFFF;
border-radius: 12–16px;
padding: 14px 32px;
font-weight: 900;
box-shadow: 0 8px 24px rgba(45,47,94,0.25);

/* hover */
background: #1E2046; /* navy mais escuro */
```

### CTA secundário (outline navy)
```css
background: transparent;
border: 2px solid rgba(45,47,94,0.35);
color: #2D2F5E;
border-radius: 12–16px;
font-weight: 700;

/* hover */
border-color: #2D2F5E;
background: rgba(45,47,94,0.06);
```

### Botão pill (ação rápida)
```css
background: #2D2F5E;
color: #FFFFFF;
border-radius: 9999px;
padding: 10px 24px;
font-weight: 700;
font-size: 14px;
```

---

## 5. Navegação — Comunidade

- **Fundo:** `rgba(0,168,150,0.92)` + `blur(28px)`
- **Borda inferior:** `rgba(45,47,94,0.12)`
- **Logo:** wordmark teal-principal **invertido** ou navy
- **Links:** navy, hover `navy/50` ou underline
- **CTA:** navy sólido, texto branco

---

## 6. Cards — Comunidade

| Tipo | Fundo | Texto | Uso |
|------|-------|-------|-----|
| Card padrão | `rgba(0,168,150,0.85)` glass | Navy | Tribos, grupos |
| Card destaque | `#FFFFFF` branco | Navy | Conteúdo em evidência |
| Card navy | `rgba(45,47,94,0.15)` | Navy/branco | Ação principal |
| Card métrica | Teal escuro `#008F80` | Branco | Números e stats |

---

## 7. Toggle Bar — Comunidade

- **Fundo barra:** teal `#00A896`
- **Track:** `rgba(0,0,0,0.20)`
- **Pill ativo:** navy `#2D2F5E`
- **Texto ativo:** branco `#FFFFFF`
- **Texto inativo:** `rgba(255,255,255,0.45)`

---

## 8. Efeitos Visuais — Comunidade

| Efeito | Implementação |
|--------|---------------|
| Glassmorphism | `backdrop-filter: blur(28px)` sobre teal |
| Glow de pertencimento | `radial-gradient(rgba(45,47,94,0.15), transparent)` |
| Grain texture | SVG fractalNoise `opacity: 0.03` (mais sutil que Business) |
| Animações de entrada | `fadeUp 0.6s ease-out` — mesmo padrão das outras personas |
| Partículas | Cor navy, opacidade reduzida sobre teal |

---

---

## Comparativo Visual das Três Personas

| Elemento | People | Comunidade | Business |
|----------|--------|------------|---------|
| Fundo página | Branco | **Teal** | Navy |
| CTA primário | Verde sólido | **Navy sólido** | Teal sólido |
| Texto CTA | Navy | **Branco** | Branco |
| Texto principal | Navy | **Navy** | Branco |
| Acento/destaque | Verde | **Navy escuro** | Teal |
| Tom emocional | Descoberta / leveza | **Pertencimento / calor** | Profissionalismo / tech |
| Público | Usuário final | **Comunidades / tribos** | PMEs e empresas |

---

> Próximo passo: aprovar este guia com João Gabriel antes de qualquer implementação.
