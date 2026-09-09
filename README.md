# AL ARAB — Whitepaper

> **The Digital Future of the Arab World**
> Official Whitepaper · 2026 Edition

A single-page Next.js 16 web whitepaper for the AlArab ecosystem, available in **8 languages** and designed for deployment to `whitepaper.alarab-defi.com`.

🌐 **Live site**: _to be deployed from this repo_

---

## ✨ Features

- **24 institutional sections** — cover, contents, executive summary, vision & mission, metaverse, four digital districts, ecosystem architecture, digital economy, blockchain, AI stack, ALA token, tokenomics with animated donut chart, creator economy, digital assets, eight verticals, roadmap, partnerships, transparency with QR-verified smart contracts, risk & compliance, conclusion.
- **8 languages** — English, العربية (RTL), Español, Français, 中文, Русский, Deutsch, Português.
- **Auto language detection** + `localStorage` persistence + `<html lang>` / `<html dir>` sync.
- **RTL support** — Arabic renders right-to-left, sidebar and mobile top bar mirror correctly.
- **Verifiable smart contracts** — QR codes for Polygon / BNB Smart Chain / Ethereum.
- **Animated tokenomics donut chart** — pure SVG, no chart library.
- **Responsive** — 390px (mobile) → 1440px+ (desktop) verified.
- **Persistent sidebar nav** — scroll-spy + progress bar + grouped sections.

---

## 🧱 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Framer Motion](https://www.framer.com/motion/) animations
- [qrcode.react](https://github.com/zpao/qrcode.react) for contract QR codes

---

## 🚀 Local Development

```bash
# Install dependencies
bun install            # or: npm install / pnpm install

# Run dev server
bun run dev            # or: npm run dev

# Build for production
bun run build

# Run production server
bun run start
```

The site will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + LanguageProvider
│   ├── page.tsx                # Main whitepaper page
│   └── globals.css             # AlArab design tokens
├── components/
│   ├── ui/                     # shadcn/ui components
│   └── whitepaper/
│       ├── WhitepaperSite.tsx  # Main orchestrator
│       ├── SideNav.tsx         # Sticky sidebar nav with scroll-spy
│       ├── Section.tsx         # Reusable section wrapper
│       ├── LanguageSwitcher.tsx
│       ├── TokenomicsChart.tsx # SVG donut chart
│       ├── ContractsBlock.tsx  # QR codes for smart contracts
│       ├── i18n/
│       │   ├── languages.ts    # 8 languages registry
│       │   ├── types.ts        # Dictionary type contract
│       │   ├── LanguageProvider.tsx
│       │   └── dictionaries/
│       │       ├── en.ts  ar.ts  es.ts  fr.ts
│       │       └── zh.ts  ru.ts  de.ts  pt.ts
│       └── sections/
│           ├── sections-1.tsx  # Cover, Contents, Executive, Vision, Arab Future
│           ├── sections-2.tsx  # Metaverse, Districts, Persistent World, Architecture, Economy, Blockchain, AI
│           ├── sections-3.tsx  # ALA, Tokenomics, Creator Economy, Digital Assets, Verticals, Roadmap
│           └── sections-4.tsx  # Partnerships, Transparency, Risk, Conclusion
└── public/
    └── images/                 # Hero city + 4 districts + metaverse + NFT art
```

---

## 🌍 Adding a New Language

1. Add the language to `src/components/whitepaper/i18n/languages.ts`.
2. Add the new code to the `LangCode` type.
3. Create `src/components/whitepaper/i18n/dictionaries/<code>.ts` with the full translation (copy `en.ts` and translate every string).
4. Import the new dictionary in `src/components/whitepaper/i18n/dictionaries/index.ts` and add it to the `DICT` record.

That's it — the rest is automatic.

---

## 🔐 Smart Contracts

The ALA token is deployed and verified on three public blockchains:

| Chain | Address |
|-------|---------|
| **Polygon PoS** | [`0xf5c068f28ebf91b22e52c2ecd230621879e914b8`](https://polygonscan.com/address/0xf5c068f28ebf91b22e52c2ecd230621879e914b8) |
| **BNB Smart Chain** | [`0xbab2556a4db42918a2c833eb2b70fedaf7016de4`](https://bscscan.com/address/0xbab2556a4db42918a2c833eb2b70fedaf7016de4) |
| **Ethereum** | [`0x93617904A0A15063B54bd14cC595AA10f2A8e358`](https://etherscan.io/address/0x93617904A0A15063B54bd14cC595AA10f2A8e358) |

> "Verified" on a blockchain explorer means the deployed bytecode matches the published source code. It does not constitute an independent security audit.

---

## ⚠️ Disclaimer

AlArab is presented as a digital ecosystem and conceptual project. References to digital assets or tokens describe current or developing ecosystem functionality and do not constitute a guarantee of financial performance, market value or external convertibility. ALA is not a government-issued currency, security, or regulated financial instrument in any jurisdiction. This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation to buy any asset. Please read the **Risk & Compliance** section of the site for full disclosures.

---

## 📄 License

© 2026 AlArab. All rights reserved.
