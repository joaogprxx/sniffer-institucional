# Sniffer Business — Design System

> Guia de identidade visual e padrões de UI da persona **Business** (`/business`).
> Decisões tomadas em reunião de **20/04/2026**.

---

## 1. Princípio Visual

**Fundo navy escuro + texto/acentos em teal.**
A persona Business diferencia-se das demais (People = branco+verde, Corporate = roxo) por transmitir **credibilidade, tecnologia e profissionalismo** sem ser fria.

---

## 2. Paleta de Cores

### Cores primárias

| Nome | Hex | Token CSS | Uso |
|------|-----|-----------|-----|
| Navy principal | `#2D2F5E` | `var(--color-navy)` | Fundo de página, cards, navbar |
| Teal Business | `#00A896` | `var(--color-tealBusiness)` | CTAs, acentos, pills ativos, ícones |
| Teal hover | `#009A89` | — | Estado hover de botões teal |

### Cores de superfície

| Nome | Hex | Uso |
|------|-----|-----|
| Navbar / dropdown / sheet | `#1E2046` | Glassmorphism da navegação |
| Card Enterprise | `#1A1C42` | Nível mais escuro, VIP |
| Card Business | `#FFFFFF` | Fundo branco premium (texto navy) |
| Glass sutil | `rgba(255,255,255,0.06)` | Cards entry-level sobre navy |

### Texto

| Papel | Valor |
|-------|-------|
| Primário (sobre navy) | `#FFFFFF` |
| Secundário / muted | `rgba(255,255,255,0.50)` |
| Desabilitado | `rgba(255,255,255,0.40)` |
| Primário (sobre branco) | `#2D2F5E` (navy) |
| Muted (sobre branco) | `rgba(45,47,94,0.60)` |

### Bordas e divisores

| Contexto | Valor |
|----------|-------|
| Sobre navy | `rgba(255,255,255,0.08–0.15)` |
| Sobre branco | `rgba(45,47,94,0.08–0.10)` |
| Destaque teal | `rgba(0,168,150,0.30)` |

---

## 3. Tipografia

**Fonte principal:** `Ferom` (carregada localmente em `/public/fontes/`)
**Fallback:** `Inter, -apple-system, sans-serif`

| Elemento | Peso | Tamanho | Observação |
|----------|------|---------|------------|
| H1 Hero | 600 (semibold) | `text-4xl / text-5xl / text-6xl` | Parte em teal |
| H2 Seção | 800 (extrabold) | `text-3xl / text-4xl` | Branco |
| H3 Cards | 700–900 | Varia por card | — |
| Body | 400–500 | `text-base / text-lg` | `white/50` para secundário |
| Nav links | 500 | `15px` | Branco, hover teal + underline |
| CTAs | 700 (bold) | `15px / text-sm` | — |
| Labels / badges | 800 | `10–12px` | Uppercase + tracking |

---

## 4. Componentes de Navegação

### Navbar (desktop)
- **Posição:** `sticky top: 80px` (abaixo do Toggle bar fixo)
- **Altura:** `96px`
- **Background:** `rgba(30,32,70,0.95)` + `backdropFilter: blur(28px) saturate(180%)`
- **Borda:** `borderRadius: 16px`, `margin: 0 24px`
- **Sombra:** `0 4px 32px rgba(0,0,0,0.13)`
- **Grid:** `1fr auto 1fr` (logo esquerda | nav centro | CTAs direita)

### Navbar (mobile)
- **Altura:** `96px`
- **Layout:** Criar Conta (esquerda) | Logo (centro, absolute) | Hamburger (direita)
- **Sheet lateral:** desliza da direita, `width: min(360px, 90vw)`, `background: #1E2046`
- **Backdrop:** `rgba(0,0,0,0.40)` + `blur(4px)`

### Toggle bar
- **Posição:** `fixed top-0 z-60`
- **Business:** fundo `#2D2F5E`, track `rgba(0,0,0,0.25)`, pill `#2D2F5E`, texto ativo `#00A896`
- **Transição:** `duration: 0.5s ease`

### Dropdown Solutions
- **Largura:** `1100px`
- **Background:** `#1E2046`
- **Borda:** `1px solid rgba(255,255,255,0.10)`, `borderRadius: 16px`
- **Padding:** `40px`
- **Grid:** `200px 1fr 1fr` (título+desc | col produtos | col produtos)
- **Posição:** `top: calc(100% + 24px)`, centralizado no item pai

---

## 5. Botões

### CTA primário (teal)
```css
background: #00A896;
border: none;
border-radius: 10px; /* navbar */ / 12px; /* sheet */ / 16px; /* hero */
padding: 10–14px 24px;
font-weight: 700;
font-size: 15px;
color: #FFFFFF;
transition: background-color 200ms ease;

/* hover */
background: #009A89;
```
1
### Ghost (outline branco)
```css
background: transparent;
border: 1px solid rgba(255,255,255,0.25);
border-radius: 10px;
color: #FFFFFF;
font-weight: 500;

/* hover */
border-color: #00A896;
color: #00A896;
```

### CTA sobre branco (card Business)
```css
background: #2D2F5E; /* navy */
color: #FFFFFF;
border-radius: 12px–16px;
font-weight: 900;
```

---

## 6. Cards de Planos

| Plano | Fundo | Texto principal | Botão |
|-------|-------|-----------------|-------|
| Basic | `rgba(255,255,255,0.06)` glass | Branco | Outline branco |
| Plus ⭐ | `#00A896` teal | Branco | Branco → texto teal |
| Business | `#FFFFFF` branco | `#2D2F5E` navy | Navy → texto branco |
| Enterprise | `#1A1C42` navy escuro | Branco pleno | Outline branco |

- **Border-radius:** `24px` (rounded-3xl)
- **Padding:** `32–40px`
- **Badge "MAIS POPULAR":** `background: #00877A`, branco, uppercase, pill centrado acima do card
- **Ícone check:** `text-tealBusiness` (não-popular) / `text-white` (Plus)

---

## 7. Seções da Página

| # | Seção | ID |
|---|-------|----|
| 1 | Hero | `#hero` |
| 2 | O que é a Sniffer? | `#quem-somos` |
| 3 | Como funciona (step-by-step) | `#como-funciona` |
| 4 | Feature Split | — |
| 5 | Comparativo | — |
| 6 | Planos | `#planos` |
| 7 | FAQ | — |
| 8 | CTA Final | — |

---

## 8. Hero

- **Headline:** peso 600, `text-4xl → text-6xl`, centrado
- **Destaque:** última parte em `color: #00A896` (teal)
- **Subtítulo:** `text-white/50`, `text-lg`, centrado
- **Tag line:** `Presença · Interação · Inteligência` — `text-white/40`, `text-sm`
- **CTAs:** empilhados em mobile, lado a lado em desktop

---

## 9. Efeitos e Animações

| Efeito | Implementação |
|--------|---------------|
| Glassmorphism navbar | `backdrop-filter: blur(28px) saturate(180%)` |
| Sheet mobile | `motion` spring `{ damping: 30, stiffness: 300 }` |
| Carousel planos | `translateX + scale + rotateY`, `cubic-bezier(0.23,1,0.32,1) 600ms` |
| Toggle pill | Spring `{ stiffness: 420, damping: 36, mass: 0.7 }` |
| Transição de tema | `duration: 0.5s ease [0.4,0,0.2,1]` |
| Grain texture | SVG fractalNoise, `opacity: 0.04` |
| Reduced motion | `@media (prefers-reduced-motion)` desativa tudo |

---

## 10. Regras Gerais

1. **Nunca usar fundo branco como base** na persona Business — base é sempre navy.
2. **Teal apenas para acentos** — nunca como cor de fundo de página inteira.
3. **Textos sobre navy:** sempre `#FFFFFF` ou `rgba(255,255,255,X)`.
4. **Textos sobre branco** (card Business): sempre navy `#2D2F5E` ou variações.
5. **Border-radius:** mínimo `10px` para botões, `16px` para cards/navbar, `24px` para cards grandes.
6. **Fonte:** sempre `Ferom` — nunca usar outra fonte na persona Business.
