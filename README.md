# use4ever.com

Marketing landing for **4ever** — a cápsula do tempo de memórias.

This repo is the public website only. The product app lives separately (Expo).

## Deploy on Vercel

1. Import this repository on [Vercel](https://vercel.com/new).
2. Leave environment variables empty — `/` requires **zero** env vars.
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
```

## Stack

- Next.js (App Router)
- TypeScript
- No backend, waitlist, or CMS
