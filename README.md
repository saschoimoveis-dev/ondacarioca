# Onda Carioca Imobiliaria

Infraestrutura inicial de aquisicao e qualificacao de leads para lancamentos imobiliarios da Onda Carioca Imoveis.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Google Tag Manager friendly `dataLayer`
- API route para Google Sheets como CRM inicial
- Pronto para deploy via GitHub + Vercel

## Rotas

- `/lancamentos`: hub de lancamentos
- `/lancamentos/[slug]`: landing page especifica por imovel
- `/lancamentos/we-barra-by-living-barra-da-tijuca`: primeira LP do WE Barra by Living

## Adicionar um novo imovel

Inclua um novo objeto em `src/data/imoveis.ts`. A pagina, metadados, FAQ schema, sitemap, formulario, WhatsApp e eventos passam a usar os dados desse objeto.

## Variaveis de ambiente

Copie `.env.example` para `.env.local` no desenvolvimento local e configure as mesmas variaveis na Vercel.

Variaveis publicas:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER`

Variaveis privadas para Sheets:

- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_PRIVATE_KEY_BASE64`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

Use `GOOGLE_SHEETS_PRIVATE_KEY_BASE64` quando o painel de ambiente interpretar quebras de linha. Ela tem prioridade sobre `GOOGLE_SHEETS_PRIVATE_KEY`. `GOOGLE_SHEETS_PRIVATE_KEY` tambem pode ser salva com `\n` escapado; o codigo normaliza esse valor antes de autenticar.

## Google Sheets

Crie uma aba chamada `Leads` com as colunas:

Data, Nome, WhatsApp, E-mail, Imovel, Slug, Objetivo, Tipologia, Entrada disponivel, Prazo de compra, Mensagem, UTM Source, UTM Medium, UTM Campaign, UTM Term, UTM Content, GCLID, FBCLID, Pagina, User Agent, Status do atendimento, Qualidade do lead, Visita marcada?, Venda gerada?, Observacoes

Compartilhe a planilha com o `GOOGLE_SHEETS_CLIENT_EMAIL` da service account.

Sem as variaveis privadas do Google Sheets, a API `/api/leads` retorna erro `missing_google_sheets_env` para evitar leads falsamente marcados como enviados.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## CI e deploy

O repositorio inclui GitHub Actions em `.github/workflows/ci.yml` para rodar lint e build em pushes para `main` e pull requests.

O guia de deploy esta em `docs/deploy-vercel.md`.
