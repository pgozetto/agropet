# AgroPet Ipê

Site institucional da AgroPet Ipê (pet shop, banho e tosa e agropecuária em Santa Rosa, Piracicaba).

Next.js 16 (App Router) + Tailwind CSS v4 + Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Em https://vercel.com/new, importe o repositório `pgozetto/agropet`.
2. A Vercel detecta o Next.js sozinha (configuração em `vercel.json`, região São Paulo `gru1`).
3. Em **Settings > Environment Variables**, defina:
   - `NEXT_PUBLIC_SITE_URL`: domínio final (ex.: `https://agropetipe.com.br`). Usado no SEO, sitemap e Open Graph.
   - `NEXT_PUBLIC_API_URL`: URL do backend Express quando existir. Vazio = formulário envia pelo WhatsApp.
4. Deploy. Cada push na branch `main` gera um novo deploy.

## Onde editar

- Dados da loja (telefone, endereço, Instagram, Street View): `src/lib/site.ts`
- Seções da página: `src/components/`
- Contrato do backend: `docs/API.md`

## Testes

```bash
npx playwright install chromium
npm run test:e2e
```
