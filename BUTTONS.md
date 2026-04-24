# Botões e CTAs — Mapeamento Completo

Documento de referência para todos os botões, links e CTAs do projeto. Organizado por página/componente.

---

## Rotas do projeto

| Rota | Componente | Descrição |
|---|---|---|
| `/people` | `App.tsx` | Página principal — modo Pessoas |
| `/business` | `Business.tsx` | Página principal — modo Negócios |
| `/corporate` | `Corporate.tsx` | Página principal — modo Comunidade |
| `/cadastro?mode=X` | `JoinPage.tsx` | Formulário de cadastro (people / business / comunidade) |
| `/business/territorio` | `Territorio.tsx` | Produto: Meu Território |
| `/business/xodos` | `Xodos.tsx` | Produto: Xodós |
| `/business/matilha` | `Matilha.tsx` | Produto: Matilha |
| `/business/spotlight` | `Spotlight.tsx` | Produto: Spotlight |
| `/business/uivo` | `Uivo.tsx` | Produto: Uivo |
| `/business/rastro` | `Rastro.tsx` | Produto: Rastro |
| `/business/faro` | `Faro.tsx` | Produto: Faro |

---

## Toggle global — `Toggle.tsx`

Barra fixa no topo, presente em todas as páginas exceto `/cadastro`.

| Botão | Ação | Destino |
|---|---|---|
| Pessoas | `navigate('/people')` | `/people` |
| Negócios | `navigate('/business')` | `/business` |
| Comunidade | `navigate('/corporate')` | `/corporate` |

> O botão do modo ativo não dispara navegação (`if (option !== active)`). A pill animada desliza via motion para o botão ativo.

---

## App.tsx — Página Pessoas (`/people`)

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| Comece a farejar bons lugares → | `button` | `navigate('/cadastro?mode=people')` | `/cadastro?mode=people` |
| Faça Parte (hero) | `button` | `navigate('/cadastro?mode=people')` | `/cadastro?mode=people` |
| A revolução é local. Faça parte (seção features) | `button` | `navigate('/cadastro?mode=people')` | `/cadastro?mode=people` |
| Quero meu selo Rastro → (seção Rastro) | `button` | `navigate('/cadastro?mode=people')` | `/cadastro?mode=people` |
| Faça parte → (seção De Vizinho para Vizinho) | `button` (motion) | `navigate('/cadastro?mode=people')` | `/cadastro?mode=people` |
| Pessoas / Negócios / Comunidade (footer) | `<a>` | `href="#"` | — (não implementado) |

---

## Business.tsx — Página Negócios (`/business`)

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| Faça parte (hero) | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |
| CTAs de planos (Fazer parte / Quero o Plus / Quero o Business / Falar com especialista) | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |
| Quero fazer parte (seção final) | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |
| ▼ Comparar todos os planos | `button` | `setCompareOpen(v => !v)` | Toggle accordion de comparação de planos |
| Fazer parte (footer) | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |
| ← Voltar para sniffer.app | `<a>` | `href="/people"` | `/people` |
| Termos / Privacidade / Contato (footer) | `<a>` | `href="#"` | — (não implementado) |

> **Atenção:** O botão "Faça Parte" na navbar de Business.tsx aponta para `/cadastro?mode=comunidade` — verificar se é intencional ou erro de rota.

---

## Corporate.tsx — Página Comunidade (`/corporate`)

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| Faça Parte (navbar) | `button` | `navigate('/cadastro?mode=comunidade')` | `/cadastro?mode=comunidade` |
| Faça parte (hero) | `<a>` | `href="/cadastro?mode=comunidade"` | `/cadastro?mode=comunidade` |
| Conheça a Sniffer (hero) | `<a>` | `href="#quem-somos"` | Scroll para seção `#quem-somos` |
| Faça parte (seção final) | `<a>` | `href="/cadastro?mode=comunidade"` | `/cadastro?mode=comunidade` |
| Conhecer mais (seção final) | `<a>` | `href="#quem-somos"` | Scroll para seção `#quem-somos` |
| Logo Sniffer | `<a>` | `href="/corporate"` | `/corporate` (reload) |
| Privacidade / Termos / Contato (footer) | `<a>` | `href="#"` | — (não implementado) |

---

## JoinPage.tsx — Formulário de Cadastro (`/cadastro`)

| Botão / CTA | Tipo | Ação | Destino / Comportamento |
|---|---|---|---|
| ← voltar (topo) | `button` | `navigate(-1)` | Volta para a página anterior no histórico |
| Pessoas / Negócios / Comunidade (toggle) | `button` | `navigate(p.route)` | `/cadastro?mode=people`, `/cadastro?mode=business`, `/cadastro?mode=comunidade` |
| A revolução é local. Faça parte! (people) | `button type="submit"` | `handleSubmit()` → `setSubmitted(true)` | Submete o formulário (ver `FORMS.md`) |
| quero fazer parte (business / comunidade) | `button type="submit"` | `handleSubmit()` → `setSubmitted(true)` | Submete o formulário (ver `FORMS.md`) |
| ← voltar (tela de confirmação) | `button` | `navigate(-1)` | Volta para a página anterior no histórico |

> O `handleSubmit` atual é um stub — não faz chamada de API. Ver `FORMS.md` para especificação de implementação.

---

## BusinessNavbar.tsx — Navbar de Negócios

Navbar fixa usada em `Business.tsx` e nas páginas de produto (`/business/*`).

### Desktop

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| Logo Sniffer | `<a>` | `href="/business"` | `/business` |
| Quem Somos | `<a>` | `href="/business#quem-somos"` | Scroll para `#quem-somos` |
| Soluções (dropdown) | `button` | `setSolutionsOpen(v => !v)` | Abre/fecha dropdown de produtos |
| Planos | `<a>` | `href="/business#planos"` | Scroll para `#planos` |
| Faça parte | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |

### Dropdown de Soluções

| Item | Destino |
|---|---|
| Meu Território | `/business/territorio` |
| Xodós | `/business/xodos` |
| Matilha | `/business/matilha` |
| Spotlight | `/business/spotlight` |
| Uivo | `/business/uivo` |
| Rastro | `/business/rastro` |
| Faro | `/business/faro` |
| SVA (Parceiros) | `/business#parceiros` |

### Mobile

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| Menu hamburger | `button` | `setMobileOpen(v => !v)` | Abre menu mobile |
| Logo Sniffer | `<a>` | `href="/business"` | `/business` |
| X (fechar menu) | `button` | `setMobileOpen(false)` | Fecha menu mobile |
| Quem Somos | `<a>` | `href="/business#quem-somos"` | Scroll para `#quem-somos` |
| Planos | `<a>` | `href="/business#planos"` | Scroll para `#planos` |
| Soluções (accordion) | `button` | `setMobileSolutionsOpen(v => !v)` | Abre/fecha lista de produtos |
| 8 itens de Soluções | `<a>` | `href={item.href}` | Mesmas rotas do dropdown desktop |
| Faça parte (rodapé mobile) | `button` | `navigate('/cadastro?mode=business')` | `/cadastro?mode=business` |

---

## Páginas de Produto — `/business/*`

Todas as páginas de produto (Faro, Matilha, Rastro, Spotlight, Territorio, Uivo, Xodos) seguem o mesmo padrão de botões:

| Botão / CTA | Tipo | Ação | Destino |
|---|---|---|---|
| CTA principal (ex: "Ative o Faro no seu negócio") | `button` | **sem `onClick` definido** | — (não implementado) |
| comparar preços | `<a>` | `href="/business#planos"` | `/business` → seção `#planos` |
| Sidebar: 8 links de produtos | `<a>` | `href={item.href}` | Rotas `/business/*` conforme tabela acima |

### CTAs principais por página (sem ação implementada)

| Página | Texto do CTA |
|---|---|
| `Faro.tsx` | Ative o Faro no seu negócio |
| `Matilha.tsx` | Crie sua Matilha |
| `Rastro.tsx` | Garantir minha vaga no Rastro |
| `Spotlight.tsx` | Publique seu primeiro Spotlight |
| `Territorio.tsx` | Acesse o seu Território |
| `Uivo.tsx` | Ative o Uivo no seu negócio |
| `Xodos.tsx` | Ative o Xodó no seu negócio |

> Esses botões estão visualmente completos mas **não possuem `onClick`**. A ação esperada é navegar para `/cadastro?mode=business` ou para uma URL de onboarding do app — a definir.

---

## Pendências / Itens a Implementar

| Item | Arquivo | Situação |
|---|---|---|
| CTAs de produto sem ação | `Faro`, `Matilha`, `Rastro`, `Spotlight`, `Territorio`, `Uivo`, `Xodos` | Sem `onClick` — definir destino |
| Links de footer (Termos, Privacidade, Contato, Pessoas, Negócios, Comunidade) | `App.tsx`, `Business.tsx`, `Corporate.tsx` | `href="#"` — páginas não criadas |
| Botão "Faça parte" em `Business.tsx` navbar | `Business.tsx` linha 63 | Aponta para `mode=comunidade` — verificar se correto |
| Submit do formulário sem API | `JoinPage.tsx` | Ver `FORMS.md` para especificação completa |
