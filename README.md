# HEKMAT TECH — Bilingual Website

Premium, responsive business website for **HEKMAT TECH**, with Dari (default/RTL) and English (LTR).

## Open in VS Code on Windows

1. Extract `HEKMAT_TECH_WEBSITE.zip`.
2. Open **VS Code** → **File → Open Folder** → select the `HEKMAT_TECH_WEBSITE` folder.
3. Install Node.js 20+ if you don't already have it (Node.js 22 LTS recommended).
4. Open **Terminal → New Terminal** in VS Code.
5. Run:

   ```powershell
   npm install
   npm run dev
   ```

6. Visit **http://localhost:3000** in your browser.
7. Stop the server with **Ctrl+C**.

**Note:** You need internet for the first `npm install`. `node_modules` is intentionally not included in this ZIP. Never open `app/page.tsx` directly in your browser; this is a Next.js project, not a standalone HTML file.

### Useful commands

```bash
npm run dev        # Local development
npm run typecheck  # TypeScript check
npm run build      # Optimized production build
npm run start      # Serve production build (after build)
```

## Customize the website

| Edit | File |
|---|---|
| Business WhatsApp number, email, social URLs, basic price switch | `data/config.ts` |
| Dari translation | `locales/fa.ts` |
| English translation | `locales/en.ts` |
| Existing projects / concept portfolio | `data/projects.ts` |
| Entire page sections, buttons and business logic | `components/Site.tsx` |
| Theme, visual design and responsive layouts | `app/globals.css` |
| SEO title and description defaults | `app/layout.tsx` |

WhatsApp uses `wa.me` and opens a **prefilled** draft; visitors must tap **Send** in WhatsApp themselves. No contact data is submitted to a backend or stored by this website.

### Starter database price

`data/config.ts` has `starterPriceAFN: 7000` and `starterPriceEnabled: false`. The starter price is **hidden by default**, because the exact package scope must be confirmed before publishing an advertised starting price. When you define and agree on the basic package scope, set `starterPriceEnabled: true` and update the surrounding price/package descriptions if needed.

### Projects

Three entries have links provided by the owner. The graphics in the gallery are CSS illustrations **not actual screenshots**. Other cards are marked **DESIGN CONCEPT**. Verify public deployment and permissions before relying on them in advertising. To replace a mockup with a real screenshot, adapt the `ProjectArt` component and keep meaningful alt text.

### Languages

- Dari (Afghanistan) is the default, right-to-left.
- English is left-to-right.
- Language and dark/light preference are saved in localStorage.
- Only the two requested languages are included.

### Deployment on Vercel

1. Push this folder to a new GitHub repository.
2. Import the repo into Vercel, select Next.js, and deploy.
3. Keep the current project selected for subsequent Git pushes to update the same site.
4. Add a verified domain later, and edit metadata in `app/layout.tsx`.

## Functional features

- Responsive floating navigation and mobile menu; all section anchors work.
- Animated hero, software dashboard illustrations, section reveals, hover effects.
- Dark/light mode, Dari/English instant switching (with correct HTML `dir`).
- Five interactive software showcase tabs.
- Portfolio filters and accessible detail modal, with working external project links.
- Six-step process, pricing cards, FAQ accordion.
- Multi-selection project request builder, WhatsApp draft generation.
- Contact form with client-side validation and WhatsApp draft handoff.
- Reduced-motion CSS support, keyboard focus styles, basic metadata.

## Important limitations

- All software dashboards are **illustrative previews** rather than real databases, authenticated applications or live product demos.
- The site itself is a **marketing website**, not a CRM or payment service.
- No contact backend, inbox, email-sending service, payments or custom domain is bundled.
- Do not add private API keys to browser-side files.
- Font fallbacks are used so it renders without dependency on external font CDNs; you can add properly licensed local Inter/Vazirmatn font assets later.

## Project structure

```text
HEKMAT_TECH_WEBSITE/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/Site.tsx
├── data/config.ts
├── data/projects.ts
├── lib/whatsapp.ts
├── locales/en.ts
├── locales/fa.ts
├── public/favicon.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── README.md
```
