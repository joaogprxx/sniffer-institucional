# Sniffer — Processo de Criação

> Como o projeto foi concebido, construído e refinado usando um stack de ferramentas de IA generativa.

---

## Contexto

O Sniffer nasceu como um projeto de produto digital — uma plataforma de descoberta local com três camadas de experiência (People, Business e Corporate). O desafio era ir de uma ideia conceitual até uma landing page funcional, visualmente refinada e com código limpo, sem um time de desenvolvimento tradicional. A solução foi usar um conjunto de ferramentas de IA generativa de forma complementar, cada uma assumindo uma responsabilidade específica dentro do processo.

---

## As Ferramentas e seus Papéis

### Google AI Studio
O ponto de partida foi o **Google AI Studio**, usado para exploração conceitual e geração de ideias. Antes de qualquer linha de código, a ferramenta ajudou a estruturar a proposta de valor do produto, mapear os três públicos-alvo (usuário final, negócio local e corporação) e definir a linguagem da marca. O AI Studio também apoiou na construção da lógica de diferenciação entre os módulos — o que cada camada deveria oferecer e como comunicar isso de forma distinta mas coerente dentro de uma mesma identidade visual.

### Google Stitch
O **Google Stitch** entrou na fase de design e prototipação visual. A ferramenta foi usada para gerar e iterar sobre componentes visuais, layouts de seção e a identidade visual da interface antes da implementação. Stitch permitiu validar escolhas de design — como a paleta de cores (verde `#3DDC84`, navy `#1A1A2E`, roxo `#3D3C6E`), a hierarquia tipográfica e a estrutura de cada página — de forma rápida, sem precisar escrever código.

### Claude & Claude Code
**Claude** (via chat e Claude Code) foi a principal ferramenta de implementação. A partir dos conceitos e visuais já validados, o Claude Code traduziu tudo em código React + TypeScript funcional, tomando decisões de arquitetura e escrevendo os componentes de cada módulo da aplicação:

- Estruturação do projeto com Vite + React 19 + Tailwind CSS v4
- Implementação das três rotas e experiências distintas (`/`, `/business`, `/corporate`)
- Animações de página com Motion (entrada/saída suave entre rotas, mascote responsivo ao scroll)
- Toggle switcher fixo no topo com transição animada entre modos
- Cards interativos com efeito de spotlight ao hover
- Layout responsivo (mobile + desktop) para os três módulos
- Integração da API do Google Gemini para funcionalidades de IA

O processo com Claude Code foi iterativo — cada seção era construída, revisada e refinada em ciclos curtos, com ajustes de detalhe visual e comportamento de interação ao longo do caminho.

### Antigravity
O **Antigravity** complementou o processo no lado da gestão e organização do projeto. A ferramenta apoiou na estruturação das tarefas, priorização do que construir em cada etapa e manutenção do contexto ao longo do desenvolvimento — funcionando como uma camada de coordenação que manteve o projeto avançando de forma organizada mesmo sem um time humano dedicado.

---

## O Processo em Etapas

**1. Conceituação**
Definição da ideia central, dos três públicos e da proposta de valor de cada módulo — feita com apoio do Google AI Studio para exploração e refinamento das ideias.

**2. Design e Visual**
Geração dos componentes visuais, paleta e layouts com o Google Stitch. Essa etapa garantiu que o visual estivesse definido antes da implementação, economizando ciclos de retrabalho no código.

**3. Implementação**
Construção do código com Claude Code, traduzindo os conceitos e designs em componentes React funcionais, com animações, responsividade e integração de IA.

**4. Iteração e Refinamento**
Ciclos de revisão entre as ferramentas — ajustes visuais, correções de comportamento, adição de detalhes de UX (como o mascote que segue o scroll ou o efeito de luz nos cards).

**5. Organização e Gestão**
Acompanhamento de progresso e estruturação das próximas etapas com o Antigravity ao longo de todo o processo.

---

## O Resultado

O projeto saiu do zero para uma landing page multi-módulo completa, com código de qualidade de produção. Os principais resultados foram:

**Velocidade de execução** — O que normalmente levaria semanas de trabalho com um time de design e desenvolvimento foi comprimido em poucos dias, graças à complementaridade das ferramentas de IA usadas.

**Qualidade do código** — O stack final (React 19, TypeScript, Vite, Tailwind CSS v4) é moderno e sustentável. O código está tipado, organizado por módulos e pronto para crescer.

**Fidelidade visual** — A interface entregue é refinada, com animações fluidas, responsividade consistente e um design system coerente entre os três módulos.

**Três experiências distintas e coesas** — Cada módulo tem sua identidade visual própria (verde para People, azul-verde para Business, roxo para Corporate) sem perder a unidade da marca Sniffer.

**Integração de IA nativa** — A aplicação já nasce com a integração do Google Gemini estruturada, pronta para alimentar funcionalidades inteligentes como recomendações, análises preditivas e personalização de conteúdo.

---

## Aprendizados

Usar múltiplas ferramentas de IA com responsabilidades bem definidas foi mais eficaz do que tentar usar uma única ferramenta para tudo. Cada ferramenta tem um ponto forte — e o resultado foi melhor justamente porque cada etapa do processo usou a ferramenta mais adequada para aquele tipo de tarefa.

O fluxo **conceito → design → código → iteração**, mesmo quando executado por IA, precisa de direção humana. As melhores decisões do projeto — o que incluir, o que cortar, como comunicar cada módulo — foram escolhas humanas que as ferramentas ajudaram a executar com qualidade.

---

*Documentação gerada em 18 de março de 2026.*
