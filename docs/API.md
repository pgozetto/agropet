# Contrato do backend (Node.js + Express)

O front já chama esta API por `src/lib/api.ts`. Para ativar, suba o backend e defina
`NEXT_PUBLIC_API_URL` (ex.: `https://api.agropetipe.com.br`). Sem essa variável, o
formulário de agendamento abre o WhatsApp com a mensagem pronta.

## POST /api/agendamentos

Request (`application/json`):

```json
{
  "nome": "Maria",
  "telefone": "(19) 99999-0000",
  "pet": "Thor",
  "especie": "cao",
  "porte": "M",
  "servico": "Banho e tosa",
  "observacao": "Fica ansioso com secador"
}
```

- `especie`: `"cao" | "gato" | "outro"`
- `porte`: `"P" | "M" | "G"`
- `observacao`: opcional

Respostas:

- `201` `{ "id": "abc123", "status": "recebido" }`
- `400` `{ "message": "Telefone inválido." }` (a mensagem aparece para o usuário)

## Requisitos do servidor

- CORS liberado para a origem do site (`NEXT_PUBLIC_SITE_URL`).
- Validar todos os campos no servidor (ex.: zod) e limitar requisições por IP.

Esqueleto sugerido:

```js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: process.env.SITE_URL }));
app.use(express.json());

app.post("/api/agendamentos", (req, res) => {
  // validar, salvar e notificar a loja
  res.status(201).json({ id: crypto.randomUUID(), status: "recebido" });
});

app.listen(process.env.PORT ?? 4000);
```
