# DropShock Digital — Official Website

> **Cut from black ice.** Full-spectrum creative and technical studio — Photography, Videography, AI Agents & Development. Based in Hesperia, California. Worldwide available.

[![Deploy](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://dropshockdigital.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)

---

## What is this?

The official DropShock Digital website — a full-spectrum creative studio delivering Instant Digital Photography, Cinematic Video Production, Custom AI Agents, and Software Development. Built as a modern, high-performance site with 3D WebGL elements, smooth scroll animations, and a CMS-backed content pipeline.

**Live at:** [https://dropshockdigital.com](https://dropshockdigital.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 15** (App Router, React 19) |
| 3D / WebGL | **Three.js**, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` |
| Animations | **GSAP**, **Framer Motion** |
| Smooth Scroll | **Lenis** |
| Styling | **Tailwind CSS v4** |
| State | **Zustand** |
| CMS | **Sanity.io** |
| Payments | **Stripe** |
| Forms | **React Hook Form** + **Zod** validation |
| Audio | **Howler.js** |
| Icons | **Lucide React** |
| Hosting | **Vercel** (auto-deploy on push) |

---

## Repository Map

```
src/
├── app/                    # Next.js App Router pages (16 routes)
│   ├── page.tsx            # / (Home)
│   ├── about/page.tsx      # /about
│   ├── it-ai/page.tsx      # /it-ai
│   ├── journal/page.tsx    # /journal
│   ├── photography/        # /photography
│   ├── shop/              # /shop (Stripe checkout)
│   ├── signal/            # /signal
│   ├── team/              # /team, /team/steven, /team/hunter
│   ├── videography/       # /videography
│   ├── work/              # /work, /work/[slug]
│   └── legal/             # /legal/privacy, /legal/terms, /legal/accessibility
├── components/            # Reusable UI components
├── lib/                   # Utilities, Sanity client, Stripe, Zustand stores
└── styles/                # Global CSS + Tailwind config
```

**Total routes:** 16 pages + error boundaries + not-found handler

---

## Quick Start

```bash
git clone https://github.com/DropShock-Digital/dsd-website-v2.git
cd dsd-website-v2
npm install
npm run dev
```

> Requires Node 20+. Run `npm run build` for production build.

---

## Environment Variables

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Vercel (auto-set via CI/CD)
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

---

## Services

| Service | Details |
|---------|---------|
| **Instant Digital Photography** | $125/hr base · real-time cloud gallery delivery · Ultra Digital retouching upgrade at $5/photo |
| **Cinematic Video** | 4K/60fps, 10-bit HLG, dual-card, dual wireless audio · request a quote |
| **Custom AI Agents** | Autonomous agents, memory architectures, workflow automation · request a quote |
| **Development** | Websites, platforms, custom software, server infrastructure · request a quote |

---

## Contact

- **Phone:** (760) 209-5480
- **Email:** steven.seagondollar@dropshockdigital.com
- **Location:** Hesperia, California — worldwide available

---

## Related Repos

| Repo | Purpose |
|------|---------|
| [`DropShock-Digital/instant-video-delivery`](https://github.com/DropShock-Digital/instant-video-delivery) | Monorepo: Android + Go backend + Next.js web gallery |
| [`seagpt/openclaw-production`](https://github.com/seagpt/openclaw-production) | OpenClaw agent orchestration production configs |
| [`seagpt/salt-international`](https://github.com/seagpt/salt-international) | Salt International client website (Vite+React) |

---

*Built by Steven Seagondollar / DropShock Digital LLC*