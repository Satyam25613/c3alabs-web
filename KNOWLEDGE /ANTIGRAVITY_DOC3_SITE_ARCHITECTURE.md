# C3ALABS — ANTIGRAVITY BUILD SPEC
# DOCUMENT 3: SITE ARCHITECTURE & TECH STACK

**Version:** 2.0 | **For:** Google Antigravity Agentic IDE | **Domain:** c3alabs.com

> **Instruction to AI Agent:** This document defines the complete technical architecture of c3alabs.com. Every routing decision, file structure, dependency, and environment variable is specified here. Do not invent a different structure. Follow this exactly.

---

## 1. TECH STACK — FULL DEPENDENCY LIST

### Core Framework
```
Next.js 14+ (App Router)
React 18+
TypeScript (strict mode)
```

### 3D Rendering
```
@react-three/fiber       (React Three Fiber — 3D canvas)
@react-three/drei        (helpers: Environment, PresentationControls, etc.)
three                    (Three.js core — peer dependency)
```

### Animation
```
framer-motion            (scroll reveals, page transitions, button states)
```

### Fonts
```
geist                    (npm install geist — Vercel's font package)
next/font/google         (Fraunces, DM_Mono — loaded via Next.js font optimization)
```

### Styling
```
CSS Modules              (component-scoped styles — no Tailwind, no Styled Components)
PostCSS                  (autoprefixer only)
```

> **Why CSS Modules over Tailwind:** This site's design requires precise custom tokens and clamp() values throughout. Tailwind's utility classes do not support the level of typographic control required. Every component uses CSS variables defined in the global token sheet.

### Deployment
```
Vercel                   (zero-config Next.js deployment)
```

### No additional dependencies. No UI component libraries. No CSS frameworks.

---

## 2. PROJECT FILE STRUCTURE

```
c3alabs.com/
├── app/
│   ├── layout.tsx                  ← Root layout: fonts, metadata, nav, footer
│   ├── globals.css                 ← ALL CSS custom properties (tokens)
│   ├── page.tsx                    ← Home page (/)
│   ├── about/
│   │   └── page.tsx                ← About page (/about)
│   ├── companies/
│   │   └── page.tsx                ← Companies page (/companies)
│   ├── team/
│   │   └── page.tsx                ← Team page (/team)
│   ├── thesis/
│   │   └── page.tsx                ← Investors page (/thesis) — title: "The Thesis"
│   └── contact/
│       └── page.tsx                ← Contact page (/contact)
│
├── components/
│   ├── nav/
│   │   ├── Nav.tsx                 ← Fixed navigation bar
│   │   ├── Nav.module.css
│   │   └── MobileMenu.tsx          ← Full-screen mobile overlay
│   ├── hero/
│   │   ├── Hero.tsx                ← Home hero section
│   │   ├── Hero.module.css
│   │   └── HeroCanvas.tsx          ← React Three Fiber canvas (3D icosahedron)
│   ├── sections/
│   │   ├── SectionLabel.tsx        ← Reusable: uppercase DM Mono label
│   │   ├── SectionDivider.tsx      ← 1px horizontal rule
│   │   ├── RevealWrapper.tsx       ← Framer Motion scroll reveal HOC
│   │   └── RevealWrapper.module.css
│   ├── cards/
│   │   ├── CompanyCard.tsx         ← KARAX / SARVAX product card
│   │   ├── CompanyCard.module.css
│   │   ├── RoleCard.tsx            ← Open role card (Team page)
│   │   └── RoleCard.module.css
│   ├── buttons/
│   │   ├── ButtonPrimary.tsx
│   │   ├── ButtonSecondary.tsx
│   │   ├── GhostLink.tsx
│   │   └── Buttons.module.css
│   ├── footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── contact/
│       ├── ContactForm.tsx         ← Contact form with validation
│       └── ContactForm.module.css
│
├── lib/
│   ├── constants.ts                ← Site-wide strings: company name, nav labels, URLs
│   ├── motion.ts                   ← Framer Motion variant definitions (exported)
│   └── useScrollProgress.ts        ← Custom hook: scroll position for 3D fade
│
├── public/
│   ├── og-image.jpg                ← 1200×630 Open Graph image
│   └── favicon.ico
│
├── next.config.ts                  ← Standard Next.js config
├── tsconfig.json                   ← Strict TypeScript
└── package.json
```

---

## 3. GLOBALS.CSS — TOKEN SHEET

This file contains ALL CSS custom properties. It is imported once in `app/layout.tsx`. No component imports this directly — they inherit via cascade.

```css
/* ============================================
   C3ALABS GLOBAL TOKEN SHEET
   ============================================ */

:root {
  /* --- Fonts --- */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body:    'Geist', 'Inter', system-ui, sans-serif;
  --font-mono:    'DM Mono', 'Courier New', monospace;

  /* --- Type Scale --- */
  --type-hero:        clamp(72px, 9vw, 120px);
  --type-display:     clamp(48px, 6vw, 80px);
  --type-title:       clamp(32px, 4vw, 52px);
  --type-heading:     clamp(22px, 2.5vw, 32px);
  --type-subheading:  18px;
  --type-body-lg:     clamp(16px, 1.5vw, 18px);
  --type-body:        15px;
  --type-body-sm:     14px;
  --type-label:       11px;
  --type-mono:        12px;

  /* --- Spacing --- */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;
  --space-40:  160px;
  --space-48:  192px;

  /* --- Grid --- */
  --grid-max:    1200px;
  --grid-gutter: 32px;
  --grid-margin: clamp(24px, 5vw, 80px);

  /* --- Motion --- */
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-linear:   linear;
  --duration-fast: 150ms;
  --duration-mid:  300ms;
  --duration-slow: 600ms;
  --duration-hero: 1200ms;
}

/* ============================================
   DARK MODE (DEFAULT)
   ============================================ */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-0:     #000000;
    --bg-1:     #0A0A0A;
    --bg-2:     #111111;
    --bg-3:     #1A1A1A;
    --text-0:   #FFFFFF;
    --text-1:   #E8E8E8;
    --text-2:   #999999;
    --text-3:   #555555;
    --text-4:   #333333;
    --border-0: rgba(255,255,255,0.08);
    --border-1: rgba(255,255,255,0.14);
    --border-2: rgba(255,255,255,0.22);
  }
}

/* ============================================
   LIGHT MODE
   ============================================ */
@media (prefers-color-scheme: light) {
  :root {
    --bg-0:     #FFFFFF;
    --bg-1:     #F7F7F7;
    --bg-2:     #EFEFEF;
    --bg-3:     #E5E5E5;
    --text-0:   #000000;
    --text-1:   #1A1A1A;
    --text-2:   #666666;
    --text-3:   #AAAAAA;
    --text-4:   #CCCCCC;
    --border-0: rgba(0,0,0,0.07);
    --border-1: rgba(0,0,0,0.12);
    --border-2: rgba(0,0,0,0.20);
  }
}

/* ============================================
   REDUCED MOTION OVERRIDE
   ============================================ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ============================================
   BASE RESETS
   ============================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--bg-0);
  color: var(--text-1);
  font-family: var(--font-body);
  font-size: var(--type-body);
  font-weight: 300;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg-0);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img, video {
  max-width: 100%;
  display: block;
}
```

---

## 4. ROOT LAYOUT — app/layout.tsx

```tsx
import type { Metadata } from 'next';
import { Fraunces, DM_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'C3alabs — We build AI companies.',
    template: '%s | C3alabs',
  },
  description: 'C3alabs builds AI companies. KARAX and SARVAX are our first two. This is the beginning.',
  openGraph: {
    siteName: 'C3alabs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmMono.variable} ${GeistSans.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 5. ROUTING — 6-PAGE STRUCTURE

| URL Path | Page Title | Nav Label | File |
|---|---|---|---|
| `/` | C3alabs — We build AI companies. | — (logo) | `app/page.tsx` |
| `/about` | About — C3alabs | About | `app/about/page.tsx` |
| `/companies` | Our Companies — C3alabs | Companies | `app/companies/page.tsx` |
| `/team` | Team — C3alabs | Team | `app/team/page.tsx` |
| `/thesis` | The Thesis — C3alabs | The Thesis | `app/thesis/page.tsx` |
| `/contact` | Contact — C3alabs | Contact | `app/contact/page.tsx` |

### Navigation Order (left to right in desktop nav)
```
[C3alabs.] ←logo/home         About · Companies · Team · The Thesis · Contact
```

The logo on the left navigates to `/`. All nav links are right-aligned on desktop.

### Active State
Current route: nav link receives `data-active="true"` attribute. CSS: underline slides in from left (width: 100%, height: 2px, color: `--text-0`, transform origin: left, transition 200ms).

---

## 6. NAVIGATION COMPONENT SPEC — Nav.tsx

### Desktop (≥768px)
```
Layout:     Fixed top, full width, height 68px, z-index 1000
Background: var(--bg-0) at 90% opacity
Backdrop:   blur(20px) saturate(180%)
Border:     1px solid var(--border-0) on bottom only
Padding:    0 var(--grid-margin)
Content:    Logo left | Nav links right (flex, gap: var(--space-8))
```

Logo markup:
```html
<a href="/">
  <span class="logo-name">C3alabs</span><span class="logo-dot">.</span>
</a>
```
Logo CSS: `font-family: var(--font-display); font-weight: 300; font-size: 17px; color: var(--text-0);`
Logo dot: `font-size: 14px; color: var(--text-3);`

Nav link CSS: `font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-3);`
Nav link hover/active: `color: var(--text-0);` + underline animation.

### Mobile (<768px)
- Nav links hidden. Show hamburger icon (3 horizontal lines, `--text-2`).
- On hamburger click: full-screen overlay renders (`position: fixed; inset: 0; background: var(--bg-0); z-index: 1001`).
- Overlay contains: logo top-left, close (×) top-right, nav links stacked vertically centered, font: Fraunces 300 `--type-heading`.
- Overlay opens/closes with opacity transition (300ms).
- Close on: × click, nav link click, Escape key.

---

## 7. FOOTER COMPONENT SPEC — Footer.tsx

```
Layout:     Full width, border-top: 1px solid var(--border-0)
Padding:    var(--space-16) var(--grid-margin)
Background: var(--bg-0)
```

Two columns on desktop. Single column on mobile.

**Left column:**
```
C3alabs.         ← logo (same styling as nav)
We build AI companies.   ← Geist 300, --type-body, --text-3
© 2025 C3alabs   ← DM Mono 11px, --text-4
```

**Right column (3 link groups, flex row, gap 48px):**
```
Group 1 — Company:  About · Team
Group 2 — Products: KARAX ↗ · SARVAX ↗  (external links, open in new tab)
Group 3 — Connect:  The Thesis · Contact
```
Link style: DM Mono 11px uppercase letter-spacing 0.12em, `--text-3`. Hover: `--text-1`. No underline.

---

## 8. LIB/MOTION.TS — SHARED FRAMER MOTION VARIANTS

```ts
// lib/motion.ts
import { Variants } from 'framer-motion';

export const revealVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
```

### RevealWrapper.tsx usage pattern:
```tsx
// All scroll-triggered sections use this:
<motion.div
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  <motion.h2 variants={revealVariant}>Headline</motion.h2>
  <motion.p variants={revealVariant}>Body</motion.p>
</motion.div>
```

Trigger: `once: true` — animation fires exactly once when scrolled into view. Does NOT re-trigger.

---

## 9. PAGE TRANSITIONS

Wrap each `app/[page]/page.tsx` content with:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  {/* page content */}
</motion.div>
```

Navigation stays fixed and stable during transitions. Only the content area fades.

---

## 10. ENVIRONMENT VARIABLES

```env
# .env.local (never committed)
CONTACT_FORM_ENDPOINT=         # Optional: form submission endpoint (e.g. Resend API key)
NEXT_PUBLIC_SITE_URL=https://c3alabs.com
```

If no form endpoint is configured, the contact form submits to a Next.js route handler at `app/api/contact/route.ts` which handles email via Resend or Nodemailer.

---

## 11. SEO & METADATA PER PAGE

Each page exports a `generateMetadata` function with page-specific `<title>` and `<description>`.

| Page | Title | Description |
|---|---|---|
| `/` | C3alabs — We build AI companies. | C3alabs builds AI companies. KARAX and SARVAX are our first two. This is the beginning. |
| `/about` | About — C3alabs | C3alabs is an AI holding company. We build autonomous AI products that execute real work. |
| `/companies` | Our Companies — C3alabs | KARAX is personal execution AI. SARVAX is the AI agents platform for teams. Both from C3alabs. |
| `/team` | Team — C3alabs | Sai Casula, Founder & CEO. C3alabs is small, intentional, and growing. |
| `/thesis` | The Thesis — C3alabs | A reasoned argument for why the AI execution layer is the most important infrastructure to build right now. |
| `/contact` | Contact — C3alabs | Get in touch with C3alabs. For investors, press, partnerships, and career inquiries. |

---

## 12. PERFORMANCE REQUIREMENTS

| Metric | Target |
|---|---|
| LCP | < 2.5s on 4G throttled |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| 3D canvas FPS | 60fps (desktop), 30fps acceptable (mobile) |
| Font loading | Zero layout shift (next/font, display: swap) |
| 3D canvas | `<Suspense>` with `<div style={{height:'100%',background:'transparent'}}/>` fallback |
| JS bundle | 3D canvas code-split via `dynamic(() => import('./HeroCanvas'), { ssr: false })` |

The 3D canvas MUST be dynamically imported with `ssr: false`. Three.js requires browser APIs unavailable in Node.js. Failing to do this causes SSR errors.

---

## 13. PERSONA ROUTING LOGIC

When building CTAs and internal links, Antigravity SHALL connect pages as follows:

**Investor journey:**
Home → The Thesis → Contact (subject: "Investor inquiry")

**Hire journey:**
Home → About → Team → Contact (subject: "Career inquiry")

**Press journey:**
Home → About → Companies → Contact (subject: "Press inquiry")

**Product curiosity:**
Home → Companies → [external: karax.ai or sarvax.ai]

CTAs on each page SHALL point to the next step in the most likely journey. The Contact page SHALL pre-fill the subject line based on URL query params: `/contact?type=investor` → pre-fills "Investor inquiry".

---

*End of Document 3. Document 4 specifies every section of every page with exact copy and component behavior.*
