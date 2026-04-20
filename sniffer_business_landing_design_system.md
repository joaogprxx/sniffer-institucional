# Sniffer Business — Design System
### Landing Page · Desktop · v1.0 · Abril 2025

> Documento de referência visual para a landing page do modo Business.
> Baseado no BrandBook Sniffer v1.0, Design System v1.0 (People Tier) e Guia de Personas PT-BR.

---

## 1. Princípios de Design

| Princípio | Regra |
|---|---|
| **Utilidade primeiro** | Cada elemento existe porque cumpre uma função clara. Sem decoração vazia. |
| **Próximo, não corporativo** | A interface fala como parceiro do negócio — não como SaaS frio. |
| **Baixo esforço cognitivo** | Hierarquia visual clara. O lojista entende em 3 segundos o que fazer. |
| **Confiança pela consistência** | Cores, espaçamentos e comportamentos iguais em todas as seções. |

**Regra de Ouro Business:**
> Toda seção, CTA, copy ou componente desta landing page é criado com **O Comerciante (30–50)** em mente — o dono do pet shop, da barbearia, da loja. Sem jargão de startup, sem termos como "ROI", "dashboard", "analytics". Fale em clientes, movimento, aparecer.

---

## 2. Paleta de Cores — Tier Business

### Cores Primárias

| Token | Hex | Uso |
|---|---|---|
| `business-teal` | `#00A896` | **COR DOMINANTE.** Todos os CTAs, estados ativos, highlights, botões, badges, accents de cards, pill ativa. |
| `noite-digital` | `#332D59` | Navbar, seções escuras, backgrounds de contraste. |
| `traco-urbano` | `#111026` | Footer, superfícies mais escuras. |
| `concreto-brando` | `#F2F2F2` | Background do hero e seções claras. |

### Cores Secundárias

| Token | Hex | Uso |
|---|---|---|
| `concreto-leve` | `#D3D3D3` | Bordas, divisórias, separadores. |
| `rota-pulsante` | `#50F296` | **EXCLUSIVO para o wordmark "sniffer".** Nunca usar em outro lugar. |
| `concreto-denso` | `#343837` | Textos secundários em fundos escuros (quando necessário). |

### Regra 70/20/10

```
70% → #00A896 (Teal)      dominância visual em cada seção
20% → #332D59 / #111026   contraste e estrutura
10% → #F2F2F2 / #D3D3D3   espaço e respiro
```

> `#50F296` aparece APENAS no logo. Qualquer outro elemento interativo usa `#00A896`.

---

## 3. Tipografia

### Fontes

| Fonte | Papel | Pesos disponíveis |
|---|---|---|
| **Ferom** | Primária — headings, body, UI | Thin · Light · Regular · Medium · SemiBold · Bold · Black |
| **Buasley** | Acento emocional | Script cursivo — 1 palavra por seção, no máximo |

> Fallback para Ferom: `Inter, sans-serif`
> Fallback para Buasley: qualquer cursive/script elegante

### Hierarquia Tipográfica — Desktop (1440px)

| Nível | Fonte | Peso | Tamanho | Cor | Uso |
|---|---|---|---|---|---|
| **Display / Hero** | Ferom | Black | 64–76px | `#332D59` | Headline principal do hero |
| **H1 Seção** | Ferom | Bold | 48–56px | `#FFFFFF` ou `#332D59` | Títulos de seção |
| **H2 Subseção** | Ferom | Bold | 32–40px | `#FFFFFF` ou `#332D59` | Subtítulos |
| **Acento Script** | Buasley | Regular | mesmo do H1 | `#00A896` | 1 palavra de destaque emocional |
| **Body** | Ferom | Regular | 16–18px | `#332D59` ou `#D3D3D3` | Textos corridos |
| **Caption / Label** | Ferom | Light | 12–14px | variado | Badges, micro-texto |
| **CTA Button** | Ferom | Bold | 16px | `#FFFFFF` | Texto de botão |
| **Nav Link** | Ferom | Medium | 15px | `#332D59` | Links de navegação |

### Regras de Capitalização

| Tipo | Regra | Exemplo |
|---|---|---|
| Sentence case | Primeira letra maiúscula apenas | "Apareça no radar do seu bairro" |
| Title Case | Apenas nomes próprios | Sniffer Business |
| ALL CAPS | **Nunca usar** | ❌ CADASTRE-SE |

---

## 4. Grid e Espaçamentos

```
Canvas width:        1440px
Content max-width:   1200px (centralizado)
Horizontal padding:  24px (mínimo nas bordas)
Coluna gutter:       24px
Escala de espaço:    base 8px (8 · 16 · 24 · 32 · 48 · 64 · 80 · 120)
```

| Contexto | Valor |
|---|---|
| Padding vertical de seção (padrão) | `80px` top/bottom |
| Padding vertical do Hero | `120px` top/bottom |
| Espaço entre componentes internos | `16–24px` |
| Margin entre botão e elemento acima | `32px` |
| Gap entre colunas no Hero (60/40) | `80px` |
| Gap entre cards em 3 colunas | `32px` |

---

## 5. Componentes — Estrutura e Tokens

### 5.1 Toggle Bar (Mode Switcher)

```
Altura:           44px
Background:       #332D59
Layout:           centralizado, pill group horizontal

Pill Ativa (Business):
  Background:     #00A896
  Texto:          #FFFFFF · Ferom Bold 14px
  Border-radius:  22px
  Padding:        8px 20px

Pill Inativa:
  Background:     transparent
  Borda:          1px solid rgba(255,255,255,0.4)
  Texto:          #FFFFFF · Ferom Regular 14px
  Border-radius:  22px
  Padding:        8px 20px

Itens: People · Business · Comunidade
```

---

### 5.2 Navbar

```
Background:       #F2F2F2
Height:           72px
Position:         sticky · z-index alto
Divider inferior: 1px solid #D3D3D3

Layout:
  Esquerda:       Logo "sniffer" em #50F296 (wordmark Ferom)
  Centro:         Nav links (Quem Somos · Solutions ▾ · Como Funciona · Planos)
  Direita:        Botão Ghost "Login" + Botão CTA "Criar Conta"

Nav Link:
  Ferom Medium 15px · #332D59
  Hover: #00A896 · underline

Botão Ghost "Login":
  Background: transparent
  Borda: 1px solid #D3D3D3
  Texto: #332D59 · Ferom Medium 15px
  Border-radius: 10px
  Padding: 10px 20px

Botão CTA "Criar Conta":
  Background: #00A896
  Texto: #FFFFFF · Ferom Bold 15px
  Border-radius: 10px
  Padding: 10px 24px
  Hover: escurecer 8% (#009A89)
```

---

### 5.3 Hero Section

```
Background:       #F2F2F2
Layout:           2 colunas — 60% left / 40% right
Padding:          120px top/bottom
Gap entre colunas: 80px

COLUNA ESQUERDA:

  Badge:
    Display: inline-flex · align-items center · gap 8px
    Dot: 8px circle · background #00A896
    Texto: Ferom Regular 13px · #00A896
    Border-radius: 20px
    Borda: 1px solid #00A896
    Padding: 4px 12px
    Margin-bottom: 24px

  Headline (Display):
    Ferom Black · 64–72px · #332D59
    Line-height: 1.1
    3 linhas
    Última palavra/frase: #00A896
    1 palavra opcional em Buasley script

  Subheadline:
    Ferom Regular · 18px · #332D59 a 65% opacity
    2–3 linhas · line-height 1.6
    Margin-top: 24px

  Botões (lado a lado, gap 16px):
    Margin-top: 40px
    Botão Primário:  background #00A896 · texto branco · radius 10px · padding 14px 32px
    Botão Secundário: background transparent · borda 2px solid #00A896 · texto #00A896 · mesmo tamanho

  Micro-row:
    Ferom Light · 13px · #332D59 a 50% opacity
    "Presença · Interação · Inteligência"
    Margin-top: 16px

COLUNA DIREITA:

  Business Card Mockup:
    Background: #FFFFFF
    Border-radius: 20px
    Box-shadow: 0 20px 60px rgba(0,168,150,0.20)
    Padding: 24px
    Largura: ~340px · altura: ~420px
    Glow: pseudo-element elipse teal opacity 15% atrás do card

    Conteúdo interno:
      - Ícone de negócio (circle 48px · background #00A896 opacity 15% · ícone outline teal)
      - Nome do negócio: Ferom Bold 18px · #332D59
      - Rating: estrelas + texto "4.8 · (243 avaliações)"
      - Distância: ícone pin + "320m"
      - Badge "Aberto": background #00A896 · texto branco · Ferom SemiBold 12px · radius 20px
      - Divider: 1px #D3D3D3
      - 4 action buttons em linha: Ligar · Pedir · Chat · Horários
        Background: #F2F2F2 · ícone outline teal · texto Ferom Regular 12px · radius 12px
```

---

### 5.4 Value Props Section (3 colunas)

```
Background:       #332D59
Padding:          80px top/bottom

Título da seção (opcional, centralizado):
  Ferom Bold 40px · #FFFFFF
  1 palavra em Buasley · outra palavra em #00A896

Grid: 3 colunas iguais · gap 32px

Cada Card:
  Background: rgba(255,255,255,0.05)
  Border-radius: 16px
  Padding: 40px 32px
  Borda: 1px solid rgba(255,255,255,0.08)

  Ícone:
    Circle 56px · background #00A896
    Ícone outline branco 24px (centralizado)

  Título:
    Ferom Bold 20px · #FFFFFF
    Margin-top: 20px
    1 palavra em Buasley se emocional

  Body:
    Ferom Regular 15px · #D3D3D3
    2 linhas · line-height 1.6
    Margin-top: 12px
```

---

### 5.5 CTA Final (Bottom Half de S3 ou seção independente)

```
Background:       #00A896
Padding:          80px top/bottom
Layout:           centralizado

Headline:
  Ferom Black 48px · #FFFFFF
  1 palavra em Buasley script
  Line-height: 1.15

Subtext:
  Ferom Regular 18px · rgba(255,255,255,0.80)
  1 linha
  Margin-top: 16px

Botão CTA (invertido):
  Background: #FFFFFF
  Texto: #00A896 · Ferom Bold 16px
  Border-radius: 10px
  Padding: 14px 40px
  Margin-top: 40px
  Hover: background #F2F2F2
```

---

### 5.6 Footer

```
Background:       #111026
Padding:          64px top / 32px bottom

Layout: 4 colunas · gap 48px
  Col 1: Logo "sniffer" (#50F296) + tagline Ferom Light 14px · #D3D3D3
  Col 2: Links de navegação principal
  Col 3: Links de Solutions / produto
  Col 4: Redes sociais + contato

Links do footer:
  Ferom Regular 14px · #D3D3D3
  Hover: #00A896
  Line-height: 2.2

Divider:
  1px solid rgba(255,255,255,0.08)
  Margin: 32px 0

Bottom bar:
  Ferom Light 12px · #D3D3D3 a 50% opacity
  "© 2025 Sniffer. Todos os direitos reservados."

Mascote silhueta:
  SVG do cachorro/seta mascote
  Color: #00A896 · Opacity: 10%
  Position: absolute · bottom right
  Size: ~280px · sem interação
```

---

## 6. Iconografia

| Regra | Valor |
|---|---|
| Estilo obrigatório | **Outline** — traço fino, sem preenchimento |
| Cor ativa | `#00A896` |
| Cor em fundos escuros | `#FFFFFF` outline |
| Cor secundária | `#D3D3D3` |
| Fundo do ícone | **Nunca** fundo circular preenchido em elementos de lista |
| Tamanho padrão UI | 20–24px |
| Tamanho em pills/badges | 14–16px |
| Formato | SVG vetorial |

---

## 7. Estados Interativos

| Elemento | Estado | Estilo |
|---|---|---|
| Botão Primário Teal | Default | `#00A896` fill · branco |
| Botão Primário Teal | Hover | `#009A89` (escurece 5%) |
| Botão Primário Teal | Pressed | `#008A7B` |
| Botão Primário Teal | Disabled | `#00A896` opacity 40% |
| Botão Ghost | Hover | borda `#00A896` · texto `#00A896` |
| Toggle Pill Inativa | Hover | background rgba(255,255,255,0.10) |
| Nav Link | Hover | cor `#00A896` · underline |
| Action Card (footer hero) | Hover | background `#E8F8F6` · borda `#00A896` |

---

## 8. Microcopy & Tom de Voz — Business

> Baseado no Guia de Personas: **O Comerciante (30–50)**

**Perfil:** Dono da barbearia, do pet shop, da loja de bairro. Resultado-orientado, sem paciência para tech. Confia no boca a boca. Quer aparecer para quem está a 200 metros.

### Voz

| Use | Evite |
|---|---|
| cliente · movimento · loja · aparecer | dashboard · analytics · ROI · targeting |
| resultado real · sem complicação | plataforma inovadora · ecossistema |
| seu bairro · vizinhos | usuários · leads · conversão |
| simples · rápido · funciona | configurável · escalável · integrado |

### Exemplos de Microcopy por Componente

| Componente | Certo | Errado |
|---|---|---|
| Hero headline | "Apareça para quem está perto" | "Maximize sua visibilidade local" |
| Badge hero | "Para negócios locais" | "Solução B2B hiperlocal" |
| CTA primário | "Quero aparecer" ou "Cadastrar meu negócio" | "Começar agora" genérico |
| CTA secundário | "Ver como funciona" | "Saiba mais" |
| Value prop título | "Clientes reais, perto de você" | "Alcance orgânico otimizado" |
| Micro-row | "Presença · Clientes · Resultado" | "Visibilidade · Engajamento · ROI" |
| CTA footer | "Colocar meu negócio no mapa" | "Criar conta gratuita" |

---

## 9. Comportamento e Acessibilidade

```
Contraste mínimo (WCAG AA):
  Texto branco sobre #00A896:     ratio ~4.5:1  ✓
  Texto #332D59 sobre #F2F2F2:    ratio ~11:1   ✓
  Texto #FFFFFF sobre #332D59:    ratio ~10:1   ✓
  Texto #FFFFFF sobre #111026:    ratio ~17:1   ✓

Foco / keyboard:
  Outline: 2px solid #00A896 · offset 2px

Scroll behavior:
  Navbar: sticky após 44px (toggle bar passa para cima)
  Seções: snap opcional no scroll

Animações:
  Sem gradientes
  Transições hover: 200ms ease
  Card floating: box-shadow transition 200ms
```

---

## 10. Estrutura de Seções (Referência Rápida)

| Seção | Background | Altura aprox. | Elemento dominante |
|---|---|---|---|
| **S1 – Toggle Bar** | `#332D59` | 44px | Pill ativa teal |
| **S2 – Navbar** | `#F2F2F2` | 72px | CTA "Criar Conta" teal |
| **S3 – Hero** | `#F2F2F2` | ~640px | Headline + card mockup |
| **S4 – Value Props** | `#332D59` | ~480px | 3 cards com ícones teal |
| **S4b – CTA Final** | `#00A896` | ~320px | Botão invertido branco |
| **S5 – Footer** | `#111026` | ~280px | Mascote silhueta teal |

> **Total da página:** ~1840px de altura — aproximadamente 1.3 viewports de scroll em 1440×900.

---

## 11. O que Nunca Fazer

- Usar `#50F296` em qualquer elemento fora do logo
- Gradientes em qualquer superfície
- Ícones preenchidos (sólidos) — sempre outline
- Texto em ALL CAPS
- Mais de 1 palavra em Buasley por seção
- Botão primário e secundário com a mesma cor de fundo
- Jargão de tech no microcopy (ROI, analytics, dashboard, leads)
- Foto real — apenas mockups flat de UI e ícones
- Mobile layout neste documento — este é exclusivamente desktop 1440px

---

*Sniffer Design System · Business Landing Page · Versão 1.0 · Abril 2025*
*Documento confidencial — uso interno e fornecedores autorizados.*
