# use4ever.com

Public marketing site for **use4ever** — a time capsule of affective memories (*Suas memórias, para sempre.*).

This repo is the public waitlist / pitch website only. The product app lives separately. There is **no** backend, billing, vault delivery, or CMS here.

## Deploy on Vercel

1. Import this repository on [Vercel](https://vercel.com/new).
2. Leave environment variables empty — the site requires **zero** env vars.
3. Deploy with the default Next.js settings (Framework Preset: Next.js, Root Directory: `.`).
4. Attach custom domains:
   - `use4ever.com`
   - `www.use4ever.com` (redirect www → apex, or the reverse — either is fine)

After DNS propagates, `https://use4ever.com` should serve this page.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm test        # unit tests
npm run test:e2e
```

## Stack

- Next.js (App Router) + Tailwind CSS
- TypeScript
- Static waitlist pages (`/cadastro`, `/login`) via `mailto:contato@use4ever.com`
