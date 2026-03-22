# C3ALABS — ANTIGRAVITY BUILD SPEC
# DOCUMENT 2: VISUAL DESIGN SYSTEM
**Version:** 2.0 | **For:** Google Antigravity Agentic IDE

> **Instruction to AI Agent:** This document defines EVERY visual decision. Do not deviate from these tokens. Do not add colors not listed here. Do not use gradients except where specified. The restraint IS the design.

---

## 1. DESIGN PHILOSOPHY

### The Reference Point: Apple
Apple's website works because of three things:
1. **Extreme whitespace.** Sections breathe. Content never fights for space.
2. **Typography as the visual.** Headlines at 80–120px. The type IS the design.
3. **Motion with purpose.** Everything that moves communicates something. Nothing decorates.

C3alabs.com executes this philosophy for an AI company. The 3D element in the hero is the ONLY decorative element on the entire site. Everything else is typography, space, and line.

### The Constraint That Creates Premium
**Pure black and white with grey.** No brand accent color. No teal. No green. No gold. Those are product colors — they live on karax.ai and sarvax.ai. c3alabs.com is the parent. It is monochrome. Authoritative. Above brand color.

The only "color" the user experiences on this site comes from:
- The 3D object in the hero (subtle luminance)
- The product logos/accents shown ONLY on the Companies page
- System UI elements (native browser focus rings, etc.)

---

## 2. COLOR SYSTEM

### Dark Mode (Default — activates via `prefers-color-scheme: dark`)

```css
--bg-0:        #000000;  /* Pure black. Page background. */
--bg-1:        #0A0A0A;  /* Primary surface. Most sections. */
--bg-2:        #111111;  /* Elevated cards, panels. */
--bg-3:        #1A1A1A;  /* Hover states, subtle separation. */
--text-0:      #FFFFFF;  /* Pure white. Primary headlines only. */
--text-1:      #E8E8E8;  /* Body text, sub-headlines. */
--text-2:      #999999;  /* Supporting text, captions, labels. */
--text-3:      #555555;  /* Tertiary. Metadata, footnotes. */
--text-4:      #333333;  /* Disabled, decorative text. */
--border-0:    rgba(255,255,255,0.08);  /* Default border. */
--border-1:    rgba(255,255,255,0.14);  /* Hover border. */
--border-2:    rgba(255,255,255,0.22);  /* Active/focus border. */
```

### Light Mode (activates via `prefers-color-scheme: light`)

```css
--bg-0:        #FFFFFF;  /* Pure white. Page background. */
--bg-1:        #F7F7F7;  /* Primary surface. */
--bg-2:        #EFEFEF;  /* Elevated cards. */
--bg-3:        #E5E5E5;  /* Hover states. */
--text-0:      #000000;  /* Pure black. Primary headlines. */
--text-1:      #1A1A1A;  /* Body text. */
--text-2:      #666666;  /* Supporting text. */
--text-3:      #AAAAAA;  /* Tertiary. */
--text-4:      #CCCCCC;  /* Disabled. */
--border-0:    rgba(0,0,0,0.07);  /* Default border. */
--border-1:    rgba(0,0,0,0.12);  /* Hover border. */
--border-2:    rgba(0,0,0,0.20);  /* Active/focus border. */
```

### Color Rules — Non-Negotiable
1. **No accent color on c3alabs.com.** None. The monochrome IS the identity.
2. **KARAX teal (#06B6D4) and SARVAX green (#00E87B) appear ONLY inside product cards on the Companies page.** Nowhere else.
3. **No gradients on backgrounds.** Background is flat color only.
4. **Subtle gradients ONLY on:** 3D object material, hover glow effects (white, max 8% opacity).
5. **Light/dark mode is automatic** via CSS `prefers-color-scheme`. No manual toggle on this site. System controls it.

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack

```css
/* Display — editorial authority */
--font-display: 'Fraunces', Georgia, serif;

/* Body — clean precision */
--font-body: 'Geist', 'Inter', system-ui, sans-serif;

/* Mono — data, labels, metadata */
--font-mono: 'DM Mono', 'Courier New', monospace;
```

### Loading (Next.js font optimization)
```js
// In Next.js layout.tsx
import { Fraunces } from 'next/font/google';
import localFont from 'next/font/local';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display'
});

// Geist via @vercel/font or npm install geist
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'; // optional, use DM Mono instead

// DM Mono via Google Fonts
import { DM_Mono } from 'next/font/google';
```

### Type Scale

| Token | Size | Weight | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `--type-hero` | clamp(72px, 9vw, 120px) | 200 | 0.96 | -0.04em | Hero headline only |
| `--type-display` | clamp(48px, 6vw, 80px) | 200–300 | 1.04 | -0.03em | Page heroes, major section headlines |
| `--type-title` | clamp(32px, 4vw, 52px) | 300 | 1.1 | -0.025em | Section titles |
| `--type-heading` | clamp(22px, 2.5vw, 32px) | 300–400 | 1.2 | -0.015em | Card titles, sub-sections |
| `--type-subheading` | 18px | 400 | 1.35 | -0.01em | Supporting headings |
| `--type-body-lg` | clamp(16px, 1.5vw, 18px) | 300 | 1.75 | 0 | Lead paragraphs |
| `--type-body` | 15px | 300 | 1.7 | 0 | Default body text |
| `--type-body-sm` | 14px | 300 | 1.65 | 0 | Supporting body |
| `--type-label` | 11px | 400–500 | 1.4 | 0.14em | Section labels (UPPERCASE) |
| `--type-mono` | 12px | 400 | 1.5 | 0.06em | Metadata, data, tags |

### Typography Rules
1. **Fraunces is for headlines only.** Never use for body text.
2. **Light weights (200–300) are the signature.** Heavy weight on headlines feels wrong here.
3. **Italic Fraunces** is used selectively for emphasis within headlines (like *AI* or *intelligence*). One italic per headline maximum.
4. **All labels are uppercase, DM Mono, letter-spaced.** No exceptions.
5. **Maximum headline line length: 12 words.** Break headlines for visual rhythm.
6. **Body text maximum width: 620px.** Prevents cognitive strain on wide screens.

---

## 4. SPACING SYSTEM

**Base unit: 8px.**

```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
--space-40:  160px
--space-48:  192px
```

### Section Vertical Padding
- **Hero section:** 0 top (full viewport), 0 bottom
- **Primary sections:** `--space-40` (160px) top and bottom
- **Secondary sections:** `--space-32` (128px) top and bottom
- **Compact sections (e.g., dividers):** `--space-20` (80px) top and bottom

### Apple Rule: Double What Feels Right
When spacing feels "about right," double it. Apple's pages feel premium because everything breathes twice as much as expected. This applies to: padding around cards, margins above headlines, gaps between sections.

---

## 5. GRID SYSTEM

```css
--grid-max:    1200px;     /* Maximum content width */
--grid-gutter: 32px;       /* Column gap */
--grid-margin: clamp(24px, 5vw, 80px); /* Horizontal margin */
```

| Breakpoint | Columns | Description |
|---|---|---|
| `< 640px` (mobile) | 4 cols | Single column layouts, stacked |
| `640–1024px` (tablet) | 8 cols | Two-column layouts |
| `> 1024px` (desktop) | 12 cols | Full grid |
| `> 1440px` (wide) | 12 cols | Max-width centered |

---

## 6. THE 3D ELEMENT — HERO SPECIFICATION

### What It Is
A slowly rotating abstract crystalline form — a low-polygon icosahedron (20-faced geometric solid) made of glass-like material. It represents "intelligence as structure" — many facets, one coherent form.

### Technical Implementation
- **Library:** React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Geometry:** `IcosahedronGeometry` with detail level 1–2
- **Material:** `MeshPhysicalMaterial` with:
  - Transmission: 0.9 (glass-like, transparent)
  - Roughness: 0.05
  - Metalness: 0.1
  - IOR (Index of Refraction): 1.5
  - Thickness: 0.5
  - Color: Dark mode → `#1a1a1a` base. Light mode → `#e8e8e8` base.
- **Size:** 2.8 units radius
- **Position:** Right side of hero on desktop (60% right). Centered on mobile.

### Lighting
- **Dark mode:** One subtle point light at white (#ffffff), intensity 0.8, position top-right. One ambient light intensity 0.15.
- **Light mode:** One directional light at `#000000`, intensity 0.3. One ambient light intensity 0.4.

### Animation Behavior
1. **On load:** Icosahedron starts at scale 0, eases to scale 1 over 1.2s (cubic-bezier easing). Simultaneously fades in from opacity 0 to 1.
2. **Idle rotation:** Continuous slow rotation on Y-axis (0.002 rad/frame) and X-axis (0.001 rad/frame).
3. **Mouse parallax:** When mouse moves, the icosahedron tilts subtly toward the cursor (max ±8 degrees on X and Y). Lerp factor: 0.05 (very smooth, delayed).
4. **On scroll:** As user scrolls down, the icosahedron scales from 1.0 → 0.6 and fades opacity 1 → 0 over the first 40% of scroll. It does not re-appear.
5. **Performance:** Use `<Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>` to cap pixel ratio and maintain 60fps.

### Canvas Setup
```jsx
// Position: absolute, fills right 50% of hero on desktop
// z-index: 0 (behind text)
// Pointer events: none (text remains interactive)
<Canvas
  camera={{ position: [0, 0, 5], fov: 45 }}
  style={{ position: 'absolute', top: 0, right: 0,
           width: '55%', height: '100%',
           pointerEvents: 'none' }}
>
```

---

## 7. MOTION PHILOSOPHY

### The Apple Principle Applied
**Motion communicates hierarchy.** The most important things animate first. Everything else follows. Nothing is instant. Nothing is slow.

### Motion Tokens
```css
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);   /* Most transitions */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Elastic feel, buttons */
--ease-linear:   linear;                             /* Continuous loops only */
--duration-fast: 150ms;   /* Hover color/opacity changes */
--duration-mid:  300ms;   /* State transitions, toggles */
--duration-slow: 600ms;   /* Section entrances, page loads */
--duration-hero: 1200ms;  /* 3D object entrance only */
```

### Scroll-Triggered Reveal
Every section uses this pattern:

```js
// Framer Motion variant
const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

// Stagger children by 100ms
const containerVariant = {
  visible: { transition: { staggerChildren: 0.1 } }
};
```

Trigger: `IntersectionObserver` threshold 0.15. Animate once — do not re-trigger on scroll up.

### What Animates vs. What Doesn't
| Animates | Does NOT animate |
|---|---|
| Section entrances (fade + translate Y) | Background colors |
| The 3D hero object | Grid lines or borders |
| Button hover states | Images loading in |
| Navigation active states | Text as it scrolls |
| Page transitions (fade only) | Random or decorative particles |

### Page Transitions
Route changes: Entire page content fades out (200ms), new page fades in (400ms). Navigation stays fixed and stable.

---

## 8. COMPONENT VISUAL LANGUAGE

### Cards
```
Background:  --bg-2
Border:      1px solid --border-0
Border-radius: 2px (very minimal — not pill, not circle)
Padding:     --space-10 (40px)
Hover:       Border → --border-1, Background → --bg-3
Transition:  border-color --duration-fast, background --duration-fast
```

**Note:** Cards have near-zero border radius intentionally. This references precision engineering aesthetic — not friendly consumer apps.

### Buttons

**Primary button:**
```
Background:  --text-0 (white/black — inverts in each mode)
Color:       --bg-0 (inverts)
Padding:     14px 28px
Border:      none
Border-radius: 2px
Font:        --font-mono, --type-label, uppercase
Letter-spacing: 0.12em
Hover:       opacity 0.85, translateY(-1px)
Transition:  opacity --duration-fast, transform --duration-fast
```

**Secondary button:**
```
Background:  transparent
Color:       --text-1
Border:      1px solid --border-1
Padding:     14px 28px
Border-radius: 2px
Font:        --font-mono, --type-label, uppercase
Hover:       border-color --border-2, color --text-0
```

**Ghost link:**
```
No border, no background
Color: --text-2
Display: inline-flex, gap 8px
Hover: color --text-0, gap → 12px (arrow moves)
```

### Navigation
```
Height:      68px
Background:  --bg-0 at 90% opacity (dark) / --bg-0 at 92% opacity (light)
Backdrop-filter: blur(20px) saturate(180%)
Border-bottom: 1px solid --border-0
Position:    fixed, top 0, full width
z-index:     1000
```

Logo: `C3alabs.` in Fraunces 300, 17px. The dot (`.`) is slightly smaller (14px) and color `--text-3`.

Nav links: DM Mono, 11px, uppercase, letter-spacing 0.12em, color `--text-3`. On hover and active: color `--text-0`, underline slides in from left (2px height, `--text-0` color, 200ms transition).

### Horizontal Rule / Divider
```
Height:    1px
Color:     --border-0
Margin:    0 (full width inside container)
```
Used between major page sections. Not between every element.

### Section Label
```
Font:          --font-mono
Size:          11px
Weight:        400
Color:         --text-3
Letter-spacing: 0.16em
Text-transform: uppercase
Display:       block
Margin-bottom: --space-6 (24px)
```

---

## 9. RESPONSIVE BEHAVIOR

### Mobile Adaptations
1. Hero 3D object: Moves behind text, scales to 60% of desktop size, opacity reduced to 40%. Text comes first.
2. Navigation: Hamburger icon replaces nav links at <768px. Full-screen overlay menu on open.
3. Section padding: Halved from desktop values.
4. All multi-column layouts collapse to single column.
5. Type scale: `clamp()` handles this automatically — no overrides needed except for `--type-hero` (clamp min 48px).
6. Horizontal scroll: Never. All content must fit in 4-column mobile grid.

### Touch Behavior
3D mouse parallax: Disabled on touch devices. Use `@media (hover: none)` to detect.

---

## 10. PREMIUM QUALITY CHECKLIST

Before shipping, every page must pass:
- [ ] Fonts loaded via `next/font` (zero layout shift)
- [ ] 3D canvas uses `Suspense` with fallback (no blank canvas flash)
- [ ] All `prefers-reduced-motion` users get zero animation (static positions, no transitions)
- [ ] LCP < 2.5s on 4G throttled connection
- [ ] No horizontal overflow on any viewport
- [ ] Section labels are uppercase DM Mono on every page
- [ ] Card border radius is ≤ 2px throughout (no rounded-lg or rounded-full)
- [ ] Zero use of `box-shadow` on primary surfaces (only on dropdowns/modals if needed)
- [ ] All body text is Geist Sans weight 300
- [ ] All headlines are Fraunces weight 200–300

---

*End of Document 2. Document 3 defines the site structure and tech stack.*
