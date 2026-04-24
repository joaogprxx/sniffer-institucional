# Formulário de Cadastro — Especificação para Implementação

## 1. Visão Geral

O formulário vive em `/cadastro` com query param `?mode=people|business|comunidade`.  
Componente: `src/JoinPage.tsx`

Trata-se de um formulário de **waitlist de pré-lançamento** (early access). O usuário preenche os dados, submete e vê uma tela de confirmação com a promessa de receber um convite por WhatsApp ou e-mail quando a plataforma abrir.

**Fluxo atual:**
```
/cadastro?mode=X → formulário → submit → setSubmitted(true) → tela de confirmação → "← voltar"
```

> **⚠️ O `handleSubmit` atual é um stub** — apenas seta `submitted = true` sem nenhuma chamada de API. A integração com backend é o que precisa ser implementado.

---

## 2. Campos por Modo

### Modo: `people`

| Campo | State var | Tipo HTML | Label exibida | Placeholder | Required | Formatação |
|---|---|---|---|---|---|---|
| Nome | `nome` | `text` | Quem é você na rua? | Como te chamam? | sim | nenhuma |
| WhatsApp | `celular` | `tel` | WhatsApp | (00) 00000-0000 | sim | máscara `formatPhone()` |
| E-mail | `email` | `email` | E-mail | seu@email.com | sim | validação nativa do browser |

### Modo: `business`

| Campo | State var | Tipo HTML | Label exibida | Placeholder | Required | Formatação |
|---|---|---|---|---|---|---|
| Nome | `nome` | `text` | nome completo | seu nome | sim | nenhuma |
| Nome do negócio | `negocio` | `text` | nome do negócio | sua empresa ou estabelecimento | sim | nenhuma |
| WhatsApp | `celular` | `tel` | WhatsApp | (00) 00000-0000 | sim | máscara `formatPhone()` |
| E-mail | `email` | `email` | e-mail | seu@email.com | sim | validação nativa do browser |

### Modo: `comunidade`

| Campo | State var | Tipo HTML | Label exibida | Placeholder | Required | Formatação |
|---|---|---|---|---|---|---|
| Nome | `nome` | `text` | nome completo | seu nome | sim | nenhuma |
| WhatsApp | `celular` | `tel` | WhatsApp | (00) 00000-0000 | sim | máscara `formatPhone()` |
| E-mail | `email` | `email` | e-mail | seu@email.com | sim | validação nativa do browser |

### Função `formatPhone(value: string)`

Formata o input do celular em tempo real:

```ts
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
```

- Remove não-dígitos, limita a 11 dígitos
- Resultado: `(11) 99999-0000`
- O campo `celular` chega **formatado** para o backend — normalize para dígitos puros na camada de persistência se necessário

---

## 3. O Que Precisa Ser Implementado

O `handleSubmit` atual em `JoinPage.tsx`:

```ts
// ESTADO ATUAL — stub sem API
function handleSubmit(e: FormEvent) {
  e.preventDefault();
  setSubmitted(true);
}
```

### Checklist de implementação no frontend

- [ ] Adicionar estado `loading: boolean` — desabilitar botão e exibir feedback enquanto aguarda resposta
- [ ] Adicionar estado `apiError: string | null` — exibir mensagem de erro abaixo do botão em caso de falha
- [ ] Chamar `setSubmitted(true)` **somente após resposta 2xx** da API
- [ ] Enviar o campo `mode` no payload para o backend distinguir o tipo de lead
- [ ] Envolver o fetch em `try/catch` para tratar erros de rede (sem conexão, timeout)

### Exemplo de implementação

```ts
const [loading, setLoading] = useState(false);
const [apiError, setApiError] = useState<string | null>(null);

async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  setLoading(true);
  setApiError(null);

  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode, nome, celular, email, negocio: negocio || undefined }),
    });

    const data = await res.json();

    if (!res.ok) {
      setApiError(data.error ?? 'Algo deu errado. Tente novamente.');
      return;
    }

    setSubmitted(true);
  } catch {
    setApiError('Erro de conexão. Verifique sua internet e tente novamente.');
  } finally {
    setLoading(false);
  }
}
```

---

## 4. Contrato de API Sugerido

### `POST /api/waitlist`

**Payload:**

```json
{
  "mode": "people" | "business" | "comunidade",
  "nome": "string",
  "celular": "(11) 99999-0000",
  "email": "usuario@dominio.com",
  "negocio": "string"
}
```

> O campo `negocio` é enviado apenas quando `mode === "business"`. Nos demais modos não é incluído no payload.

**Resposta de sucesso — HTTP 201:**

```json
{ "ok": true, "message": "Inscrição recebida" }
```

**Resposta de erro de validação — HTTP 400:**

```json
{ "ok": false, "error": "Campos obrigatórios ausentes" }
```

**Resposta de conflito (e-mail duplicado) — HTTP 409:**

```json
{ "ok": false, "error": "E-mail já cadastrado na lista" }
```

**Resposta de erro interno — HTTP 500:**
Tratar com mensagem genérica ao usuário — não expor detalhes do servidor.

---

## 5. Observações de UX

| Item | Estado atual | O que fazer |
|---|---|---|
| Botão de submit | Texto estático, sem loading | Trocar label e desabilitar durante `loading === true` |
| Erros de API | Sem feedback visual | Exibir `apiError` abaixo do botão com cor de alerta |
| Tela de confirmação | Exibida antes da resposta da API | Condicionar ao `res.ok === true` |
| Duplo submit | Possível (sem bloqueio) | `disabled={loading}` no botão resolve |
| Validação de celular | Só máscara visual, sem validação de completude | Verificar se tem 11 dígitos antes de submeter |

### Textos do botão de submit por modo

| Modo | Texto atual |
|---|---|
| `people` | "A revolução é local. Faça parte!" |
| `business` / `comunidade` | "quero fazer parte" |

Manter esses textos no estado normal e substituir por "Aguarde..." (ou spinner) durante `loading`.
