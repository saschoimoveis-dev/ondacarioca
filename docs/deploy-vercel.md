# Deploy na Vercel

Este projeto foi preparado para deploy via GitHub + Vercel.

## 1. Importar o repositorio

Na Vercel, importe:

`https://github.com/saschoimoveis-dev/ondacarioca`

Framework esperado:

`Next.js`

Comandos padrao:

- Install Command: `npm ci`
- Build Command: `npm run build`
- Output: automatico do Next.js

## 2. Variaveis de ambiente

Configure em Project Settings > Environment Variables.

Publicas:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER`

Privadas:

- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_PRIVATE_KEY_BASE64`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

Use as variaveis privadas em Production, Preview e Development se quiser testar captacao nos tres ambientes.

Se o painel da Vercel quebrar a chave privada em varias linhas, prefira `GOOGLE_SHEETS_PRIVATE_KEY_BASE64`. Ela tem prioridade sobre `GOOGLE_SHEETS_PRIVATE_KEY`.

## 3. Google Sheets

Crie uma planilha com aba `Leads`.

Cabecalhos:

Data, Nome, WhatsApp, E-mail, Imovel, Slug, Objetivo, Tipologia, Entrada disponivel, Prazo de compra, Mensagem, UTM Source, UTM Medium, UTM Campaign, UTM Term, UTM Content, GCLID, FBCLID, Pagina, User Agent, Status do atendimento, Qualidade do lead, Visita marcada?, Venda gerada?, Observacoes

Compartilhe a planilha com o e-mail da service account usado em `GOOGLE_SHEETS_CLIENT_EMAIL`.

## 4. Tags e conversoes

O projeto envia eventos para `window.dataLayer`.

Eventos minimos:

- `page_view_imovel`
- `form_start`
- `form_submit`
- `whatsapp_click`
- `cta_click`
- `gallery_view`
- `faq_open`

Eventos especificos do WE Barra:

- `page_view_we_barra`
- `form_submit_we_barra`
- `whatsapp_click_we_barra`

No Google Tag Manager, crie triggers por esses nomes de evento e conecte GA4, Google Ads Conversion Tracking e Meta Pixel pelo GTM.

Alternativamente, preencha `NEXT_PUBLIC_GA4_ID` e/ou `NEXT_PUBLIC_META_PIXEL_ID` para carregar GA4 e Meta Pixel direto no site. Nesse modo, `form_submit` tambem envia `generate_lead` para GA4 e `Lead` para Meta. Evite configurar o mesmo destino nos dois lugares ao mesmo tempo para nao duplicar conversoes.

## 5. Validacao pos-deploy

Antes de enviar trafego pago:

- Abrir `/lancamentos`
- Abrir `/lancamentos/we-barra-by-living-barra-da-tijuca`
- Enviar um lead de teste e confirmar linha na planilha
- Clicar no WhatsApp e validar mensagem pre-preenchida
- Confirmar eventos no modo Preview do GTM
- Confirmar canonical, title e description no HTML
