# Sniffer — Documentação de Funcionalidades

> Aplicação web construída com React + TypeScript, voltada para conexões locais em tempo real. Integra inteligência artificial para enriquecer a experiência de descoberta de eventos, tribos e estabelecimentos.

---

## Visão Geral

O Sniffer é uma plataforma de descoberta local que conecta pessoas, negócios e grandes empresas ao pulso real de suas cidades. A aplicação é dividida em três experiências distintas, acessíveis por uma barra de alternância fixada no topo:

| Modo | Público-alvo | Rota |
|---|---|---|
| **People** | Usuários finais (pessoas físicas) | `/` |
| **Business** | Pequenos e médios negócios | `/business` |
| **Corporate** | Grandes empresas e redes | `/corporate` |

---

## Módulo People (Usuário Final)

### Hero & Proposta de Valor
A tela inicial apresenta a proposta central: "Tudo que acontece perto de você, no seu bolso." O mascote animado da marca (cachorro) responde ao scroll da página, movendo-se lateralmente conforme o usuário navega.

### Como Funciona — Três Pilares
O fluxo principal da aplicação é guiado por três etapas:

**1. Farejar**
Rastreamento de atividades relevantes ao redor do usuário via geolocalização inteligente. O sistema identifica o que está acontecendo nas proximidades em tempo real.

**2. Conectar**
Entrada em tribos temáticas que agrupam pessoas com interesses em comum dentro do mesmo bairro ou região. A conexão é baseada em localização + afinidade.

**3. Descobrir**
Acesso a benefícios exclusivos, eventos curados e conteúdo que só está disponível para quem está "por dentro" da cena local.

### Mapa de Pulso (Feature Principal)
Seção dedicada à visualização do que está acontecendo na cidade:
- Mapa de calor em tempo real
- Alertas de proximidade quando atividades relevantes estão perto
- Filtros por interesses específicos do usuário

### Tribos Locais
Grid de comunidades baseadas em interesse + localização. Exemplos presentes na interface:
- **Café & Tech** — Networking em cafeterias
- **Corrida Noturna** — Grupos de corrida semanais
- **Circuito das Artes** — Visitas guiadas a exposições
- **Rota Gastronômica** — Exploração de restaurantes e botecos

Cada tribo exibe contagem de membros e frequência de atividade (ex: "Ativa Agora", "Semanal", "Sábado").

---

## Módulo Business (Negócios Locais)

Direcionado a estabelecimentos e empreendedores que desejam aumentar sua visibilidade e relacionamento com clientes próximos.

### Funcionalidades de Presença Digital
- Perfil completo do negócio com fotos, horários e localização
- Feed de conteúdo (posts, promoções, eventos)
- Push notifications por raio geográfico

### Gestão de Reputação
- Coleta e exibição de avaliações de clientes
- Ferramentas de resposta e engajamento com reviews
- Monitoramento de reputação online

### Analytics e Métricas
- Painel com dados de visualizações, interações e alcance
- Relatórios de desempenho por período
- Insights sobre o comportamento do público local

### Comunicação com Clientes
- Ferramenta de mensagens integrada
- Criação de promoções e ofertas exclusivas para usuários próximos

### Planos e Preços
A página Business conta com tabela comparativa de planos (Basic, Plus, Business, Enterprise), organizados por categorias de funcionalidades: Atendimento, Presença Digital, Analytics, entre outras.

---

## Módulo Corporate (Grandes Empresas)

Voltado a redes, franquias e corporações com múltiplas unidades que precisam de inteligência em escala.

### Gestão Multi-Location
Controle centralizado de 7 ou mais unidades em um painel único. Cada ponto mantém seu perfil, dados e performance individuais, enquanto o gestor visualiza tudo de forma consolidada.

### BI Customizado
Dashboards sob medida com métricas relevantes para o setor da empresa. Inclui análises comparativas entre unidades, benchmarks regionais e dados de concorrentes.

### Integração ERP
Conexão direta com sistemas de gestão já existentes (ERP, CRM). Os dados fluem entre o Sniffer e o stack da empresa sem necessidade de retrabalho ou silos de informação.

### Executivo de Conta Dedicado
Suporte com um executivo que conhece a operação do cliente, com onboarding personalizado, acompanhamento contínuo e SLA prioritário.

### Moderação de Reviews
Sistema de controle sobre a reputação da marca com moderação ativa de avaliações e anti-fraude verificado.

### Feed Personalizado com Push Geográfico
Conteúdo rico (fotos, vídeos, campanhas) com notificações push segmentadas por raio geográfico, alcançando consumidores no momento e lugar certos.

### Os Quatro Pilares Corporativos

| Pilar | Descrição |
|---|---|
| **Presença Unificada** | Identidade consistente em todas as localizações |
| **Inteligência Competitiva** | Benchmarks locais e análise de gaps de mercado |
| **Comunidade Proprietária** | Relacionamento direto com clientes sem intermediários |
| **Infraestrutura Integrada** | Conexão com ERP, CRM e sistemas existentes |

### Diferencial vs. Concorrentes
A plataforma posiciona-se além do Google Business e Apple Business Connect, oferecendo:
- Análises comportamentais profundas (padrões de visitação, segmentação de recorrentes)
- Benchmarking hiperlocal por unidade e região
- Inteligência preditiva com alertas automáticos de anomalias de performance
- Identificação de demandas não atendidas na região do negócio

---

## Integração de Inteligência Artificial

A aplicação utiliza a **API do Google Gemini** para funcionalidades de IA. A integração é feita via SDK oficial (`@google/genai`) e a chave de acesso é gerenciada de forma segura através de variáveis de ambiente — nunca exposta no código-fonte ou no cliente.

As capacidades de IA potencializam:
- Recomendações de conteúdo e tribos com base no perfil e localização do usuário
- Inteligência preditiva para o módulo Corporate (alertas de performance, sugestões de otimização)
- Identificação de padrões comportamentais locais

---

## Arquitetura e Stack Tecnológica

### Frontend
- **React 19** com TypeScript para tipagem estática
- **Vite** como bundler e servidor de desenvolvimento
- **Tailwind CSS v4** para estilização
- **Motion (Framer Motion)** para animações de página e interações
- **React Router DOM v7** para navegação entre as três experiências (People, Business, Corporate)
- **Lucide React** para ícones

### Backend
- **Express** para endpoints de API
- **Better SQLite3** para persistência local de dados

### Animações e UX
Transições de página animadas com `AnimatePresence` (entrada/saída suave entre rotas). Elementos interativos como o mascote respondem ao scroll via `useScroll` e `useTransform`. Cards com efeito de spotlight ao hover.

### Roteamento
| Rota | Componente | Experiência |
|---|---|---|
| `/` | `App.tsx` | People (usuário final) |
| `/business` | `Business.tsx` | Negócios locais |
| `/corporate` | `Corporate.tsx` | Grandes empresas |

---

## Configuração de Ambiente

A aplicação requer a configuração de variáveis de ambiente antes de ser executada. As variáveis necessárias estão descritas no arquivo `.env.example` do repositório. Nenhuma chave ou credencial deve ser incluída diretamente no código ou commitada no repositório.

Para rodar localmente:

```bash
npm install
# Configure as variáveis de ambiente conforme o arquivo .env.example
npm run dev
```

O servidor de desenvolvimento sobe na porta `3000` e fica acessível na rede local.

---

## Design System

A aplicação usa uma paleta de cores coerente entre os três módulos:

| Token | Cor | Uso |
|---|---|---|
| `verdeSniffer` / `#3DDC84` | Verde | CTAs, destaques, marca |
| `navy` / `#1A1A2E` | Azul escuro | Textos, fundos dark |
| `#00A896` | Verde-azulado | Acentos Business |
| `#3D3C6E` | Roxo escuro | Fundo e identidade Corporate |

A tipografia utiliza as famílias **Ferom** (fonte customizada da marca), **Nunito** e **DM Sans** com pesos variados para hierarquia visual.

---

*Documentação gerada em 18 de março de 2026.*
