# Modern Portfolio (Next.js 14 + Tailwind)

A fast, elegant portfolio for a Full Stack Developer & UI/UX Designer.

## Local Development

```bash
npm install # or pnpm install / yarn
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and set SMTP credentials for the contact form.

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `MAIL_FROM`, `MAIL_TO`

## Deploy on Render

1. Create a new Web Service on Render.
2. Connect your repo.
3. Set Build Command: `npm install && npm run build`
4. Set Start Command: `npm start`
5. Add Environment Variables from `.env.example`.

### render.yaml (optional Infra-as-code)

```yaml
services:
  - type: web
    name: modern-portfolio
    env: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 20
```
