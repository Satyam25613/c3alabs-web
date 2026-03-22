# C3ALABS — STRATEGIC DESIGN ANALYSIS & ENHANCED MASTER PROMPT
# Prepared by: Senior Design Strategist + Brand Architect
# For use in: Google Antigravity Agentic IDE
# Version: 3.0

---

# PART 1 — SYSTEM UNDERSTANDING SUMMARY

## What This Site Is — The Real Sentence

C3alabs.com is not a website. It is a **credibility artifact**. It exists to make three types of people feel something specific before they take an action: investors feel they found someone who is right about something important; talent feels this is where serious work happens; press gets a clear category name and a quotable founder. Everything else is noise.

## What the 5-Document System Gets Right

**Brand identity is airtight.** The Alphabet analogy holds. The monochrome constraint is not a stylistic choice — it is a positioning statement. "We are above product color." This needs to be protected at all costs.

**Typography trio is correct.** Fraunces (editorial authority) + Geist (clean precision) + DM Mono (data/labels) is a well-considered system. Each font has a role. None overlap.

**Copy is genuinely good.** Sparse, conviction-led, non-corporate. "He is the first person here. He will not be the last." — that line earns its place. Protect the copy exactly as written.

**Routing architecture is clean.** 6 pages. 4 personas. Clear journeys. The `/thesis` naming instead of `/investors` is a smart piece of positioning — it frames the page as intellectual conviction rather than a pitch.

**The constraint system is premium.** 2px border-radius throughout. No box-shadow on surfaces. No accent color outside the Companies page. Near-zero decoration. These constraints are the design — they are not limitations.

## What the System Gets Wrong (Honest Assessment)

The system is **structurally strong but experientially flat.** The gap between what is specified and what a premium site at this ambition level should feel like is significant. The documents tell Antigravity what to build but do not tell it how the site should *feel* to someone scrolling through it. That gap is the problem.

Specific failures:

1. **The 3D object will look cheap without post-processing.** An icosahedron with `MeshPhysicalMaterial` and 2 lights is a starting point, not a finish. Without an HDR environment map and bloom, it looks like a WebGL tutorial output, not a premium holding company.

2. **The motion system is boilerplate.** `opacity: 0 → 1, y: 28 → 0` is what every Framer Motion tutorial teaches. It is functional. It is not premium. Premium sites use clip-path reveals, scroll-velocity-aware timing, and layered parallax that creates depth perception.

3. **There is no smooth scroll.** Without Lenis or equivalent, the page snaps between reveal states. The difference between a good scroll experience and an elite one is smooth scroll with momentum inertia. It is not optional at this quality tier.

4. **Micro-interactions are almost entirely absent.** Only button hover states are defined. There is no cursor behavior, no magnetic link attraction, no hover-reveal states on cards, no scroll-driven typography behavior.

5. **The founder section is a design hole.** A CSS 3×3 grid as a "geometric visual" placeholder is weak. This section deserves a proper signature moment — not a photo, but something more considered than a border box with grid lines.

6. **No scroll choreography.** Elements enter at a uniform rate regardless of scroll velocity. Premium sites feel like they respond to how you interact with them — slow scrollers get a measured experience; fast scrollers see momentum and inertia.

---

# PART 2 — KEY GAPS IDENTIFIED

## Gap 1: No Smooth Scroll Foundation

**Current state:** Standard browser scroll. Framer Motion `whileInView` triggers at 15% visibility.

**What this means:** The scroll experience feels mechanical. Animations fire at fixed thresholds. There is no inertia. No momentum. No personality to the scrolling itself.

**What premium looks like:** Lenis smooth scroll wraps the entire app. Scroll events fire against a virtual position, not the raw browser position. This gives 60fps smooth momentum on all devices. Every animation that follows is built on this foundation.

**Risk if unaddressed:** The site will feel "good" but not premium. Investors and sophisticated visitors will sense something is off without being able to name it. The sensation is: "this feels like a template."

## Gap 2: The 3D Object Needs Post-Processing

**Current state:** `MeshPhysicalMaterial` with transmission 0.9, 2 lights, no environment.

**What this means:** The glass material reads as "plastic with transparency" without an environment to reflect. The lighting is flat. The object exists but does not command.

**What premium looks like:** An HDRI environment loaded via Drei's `<Environment>` gives the glass physically correct reflections and internal light scattering. `EffectComposer` with `Bloom` at luminance threshold 0.9 makes the brighter facets glow subtly — creating the "intelligence as light" feeling. `ChromaticAberration` at 0.0002 intensity adds the subtle optical distortion that makes glass feel real.

**Risk if unaddressed:** The 3D element is the only decorative element on the entire site. If it looks cheap, the entire site feels cheap.

## Gap 3: Clip-Path Reveals vs. Fade+Translate

**Current state:** `opacity: 0, y: 28 → opacity: 1, y: 0`. This is the default Framer Motion reveal.

**What this means:** Every section entrance looks the same. There is no hierarchy in how important vs. less important content enters. A stat number enters the same way a section label does.

**What premium looks like:** Primary headlines use clip-path reveals (`clipPath: 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'`) — text appears to slide out from behind an invisible wall. Secondary content uses the existing opacity+y. Stats use count-up animations. This creates a visual hierarchy within the animation system itself.

## Gap 4: No Cursor System

**Current state:** System cursor throughout.

**What this means:** Every interaction feels like a standard web page. The moment a visitor moves their cursor over a button, nothing extraordinary happens.

**What premium looks like:** A minimal custom cursor — 10px circle, white (dark mode), tracks with lerp 0.12 for slight lag. On CTA hover: expands to 36px circle with border only (hollow). On 3D canvas: collapses to crosshair. On external links (↗): rotates 45°. This system signals intentionality to sophisticated visitors. It is the difference between a site that was designed and a site that was built.

## Gap 5: No Scroll-Velocity Awareness

**Current state:** Animations trigger at position threshold. Scroll speed has no effect.

**What this means:** The site does not respond to *how* you interact with it — only *where* you are.

**What premium looks like:** Track scroll delta per frame. When scroll velocity is high, apply a subtle skewY transform to content sections (max 2deg), releasing it with spring ease as scroll decelerates. This creates the "kinetic" feel — the sensation that the page has mass and momentum, not just position.

## Gap 6: Founder Section Is Weak

**Current state:** A CSS 3×3 grid in `--border-0` color, 240px × 240px.

**What this means:** The only visual "image" in the founder section is a box with grid lines. This will look like an error state to sophisticated visitors.

**What premium looks like:** Replace with a React Three Fiber mini-canvas — a small, separate 3D element. Either: (a) the C3alabs wordmark extruded in 3D with minimal material, slowly rotating; or (b) a simple geometric form that is different from the hero icosahedron but lives in the same visual language. This gives the founder section a "signature moment" without using a photo.

---

# PART 3 — DESIGN PRINCIPLES EXTRACTED

## The 10 Non-Negotiable Principles of Premium Web Experience (2024 tier)

### Principle 01: Smooth Scroll Is Not Optional — It Is the Foundation
Every interaction on an elite site is built on top of smooth scroll inertia. Implement `Lenis` with `duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`. Wrap the entire Next.js app in a Lenis provider initialized on mount. Without this, every animation that follows will feel slightly mechanical no matter how well it is implemented. The smooth scroll is not a feature — it is the substrate.

### Principle 02: Text Reveals Must Use Clip-Path, Not Just Opacity
The single largest visual upgrade available for typography-dominant sites. `clipPath: 'inset(0 100% 0 0)'` → `'inset(0 0% 0 0)'` creates the sensation of text "printing" into existence — controlled, intentional, elite. Reserve this for primary headlines only (H1 and H2 level). All other content uses opacity+y. The contrast between reveal types creates hierarchy.

### Principle 03: The 3D Object Must Be Lit Physically
A 3D object without an environment map is a flat lie about what the material claims to be. Glass material must have something to reflect. Load a dark city HDRI via `<Environment preset="city" background={false} />`. This alone transforms the icosahedron from a WebGL demo into a premium visual. Do not ship the 3D object without this.

### Principle 04: Bloom Makes Glass Glow — Use It at Low Intensity
Post-processing is the difference between a 3D object that sits on the page and one that *inhabits* it. `Bloom` at `luminanceThreshold: 0.85, intensity: 0.25` causes the brightest facets of the glass icosahedron to emit a subtle glow — exactly what real glass does under directional light. Keep it subtle. If you can clearly see the bloom, it is too strong.

### Principle 05: Custom Cursor Is the First Signal of Intent
Sophisticated visitors notice the cursor within seconds. A custom cursor at 10–12px with a lerp-smoothed follow (not instant) signals that every pixel on this site was a decision. The cursor system must have states: default (small circle), link hover (expanded hollow circle), 3D canvas (crosshair), external link (rotated). Never use a spinning cursor or complex animations — restraint here is the premium signal.

### Principle 06: Magnetic Hover Creates Spatial Dimension
Buttons and ghost links that attract the cursor within a 40px radius create the sensation of physical space — that elements in the page have gravity. Implementation: on mousemove, calculate distance from button center. If `distance < 40px`, apply `transform: translate(x * 0.35, y * 0.35)` with `transition: transform 0.15s ease`. Release on mouseout with spring ease. This is a micro-interaction that sophisticated visitors feel before they consciously notice it.

### Principle 07: Scroll Velocity Transforms Content as It Passes
Track `scrollY` delta per requestAnimationFrame. Apply `skewY(clamp(-2deg, velocity * 0.002, 2deg))` to main content sections during fast scroll, releasing with `transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`. This creates the "mass and momentum" sensation — the page feels like a physical object responding to force, not a sequence of elements snapping into view.

### Principle 08: Stats Must Count Up — Numbers That Appear Are Numbers That Lie
When a number like "200+" or "₹1,499" appears instantly, it has no weight. When it counts up from zero over 1.2 seconds with ease-out, it has earned its place on the page. Implement a `useCountUp` hook that triggers on viewport entry. Apply to: the two KARAX stats, the two SARVAX stats. Use `requestAnimationFrame` with `easeOutQuart` timing. This is a detail that investors notice — it signals that the product is real and the numbers are confident.

### Principle 09: Depth Is Created by Layered Scroll Rates, Not Gradients
The monochrome constraint forbids gradients on backgrounds. But depth can still be achieved through parallax — elements at different Z-depths scroll at different rates. The hero icosahedron scrolls at 0.3× the page scroll rate (already partially specified). The hero text scrolls at 0.85×. Section labels scroll at 0.95×. The nav stays fixed. These four rates create the perception of a 3D space without any visual treatment — pure motion creating depth.

### Principle 10: Silence Is a Design Choice — Know When to Stop
Premium sites are defined as much by what they do *not* do as by what they do. No particle systems. No animated backgrounds. No gradient meshes. No video loops. No lottie animations. The restraint of the system — one 3D object, purposeful reveals, magnetic cursors, smooth scroll — creates focus. Every effect that is added takes attention away from the content. The icosahedron and the typography are the experience. Everything else is in service of them.

---

# PART 4 — SYSTEM REFINEMENTS

## Refinements to DOC2 (Visual + Motion Layer) — Without Breaking Minimalism

### Refinement 2A: Add Lenis to Tech Stack (DOC3 upgrade)

Add to dependency list:
```
lenis                    (smooth scroll with momentum inertia)
```

Add to `app/layout.tsx`: Initialize Lenis in a `<LenisProvider>` client component. Configuration:
```js
new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})
```

### Refinement 2B: Add Post-Processing to 3D Spec (DOC2 §6 upgrade)

Add to dependency list:
```
@react-three/postprocessing    (bloom, chromatic aberration)
```

Inside `HeroCanvas.tsx`, wrap scene with:
```jsx
<EffectComposer>
  <Bloom luminanceThreshold={0.85} luminanceSmoothing={0.9} intensity={0.25} />
  <ChromaticAberration offset={[0.0002, 0.0002]} />
</EffectComposer>
```

Add `<Environment preset="city" background={false} />` to the scene. This gives the glass material real reflections.

Upgrade lighting:
- Remove: single point light + ambient
- Add: `<directionalLight position={[5, 5, 5]} intensity={1.2} />` + `<ambientLight intensity={0.2} />` + `<pointLight position={[-3, -3, -3]} intensity={0.4} color="#ffffff" />`

### Refinement 2C: Add Clip-Path Reveal to Motion System (DOC2 §7 + lib/motion.ts)

Add new variant to `lib/motion.ts`:
```ts
export const clipRevealVariant: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

Apply `clipRevealVariant` to: H1 on home page, H1 on each inner page hero, the Mission Statement on About page, the Thesis headline. Apply existing `revealVariant` to everything else.

### Refinement 2D: Add Scroll Velocity Hook (new: lib/useScrollVelocity.ts)

```ts
// lib/useScrollVelocity.ts
// Returns scroll velocity (px/frame) updated via rAF
// Used by: main content wrapper to apply skewY transform
// Max skew: 2deg. Spring release: cubic-bezier(0.16, 1, 0.3, 1)
```

Apply the skew to: the `<main>` content wrapper only. Not to the nav. Not to individual sections. The entire content body skews as a unit during fast scroll and springs back on deceleration.

### Refinement 2E: Custom Cursor System (new: components/cursor/Cursor.tsx)

Specification:
```
Default state:
  Size: 10px circle
  Color: --text-0 (inverts in light mode)
  Border: none (filled)
  Lerp: 0.12 (follows with slight delay)
  Mix-blend-mode: difference (creates automatic inversion on hover over text)

Link/button hover state:
  Size: 36px
  Border: 1px solid --text-0
  Background: transparent (hollow)
  Transition: 200ms ease

3D canvas hover state:
  Size: 20px
  Shape: crosshair (+)
  Transition: 150ms

External link (↗) hover state:
  Size: 20px circle
  Rotation: 45deg arrow shape
  Transition: 150ms
```

Hide default CSS cursor on desktop only: `cursor: none` on `html` when cursor component mounts. Re-enable on touch devices via `@media (hover: none)`.

### Refinement 2F: Count-Up Animation (new: lib/useCountUp.ts)

Hook that accepts `{ end, duration: 1200, startOnView: true }`. Applies to all stat numbers on the Companies page. The number animates from 0 to its value using `easeOutQuart` over 1.2 seconds when the stat enters the viewport.

### Refinement 2G: Magnetic Hover on CTAs (upgrade to ButtonPrimary + GhostLink)

Add `useMagneticHover` hook to `ButtonPrimary` and `GhostLink` components. The hook:
- Listens to `mousemove` within a 40px radius of the element
- Applies `transform: translate(x * 0.35, y * 0.35)` while within radius
- Releases with `transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)` (spring)
- Disabled on touch devices

### Refinement 2H: Replace Founder Section Grid Visual

**Remove:** CSS 3×3 grid at 240×240px.

**Replace with:** A second, smaller React Three Fiber canvas. Spec:
```
Size: 240px × 240px
Position: desktop right column, centered
3D Object: OctahedronGeometry (8-faced) — different from hero icosahedron
Material: MeshPhysicalMaterial, same glass spec as hero, but:
  - Roughness: 0.15 (slightly less perfect)
  - Scale: 1.2 units
  - No mouse parallax (static rotation only)
  - Rotation: Y-axis only, 0.003 rad/frame
Post-processing: same Bloom at 0.15 intensity (slightly less than hero)
No fade on scroll — stays at 100% opacity throughout
Loading: same dynamic import pattern as HeroCanvas
```

This gives the founder section a "related but different" 3D moment — same design language, smaller scale, simpler form.

---

# PART 5 — FINAL ENHANCED MASTER PROMPT FOR ANTIGRAVITY

---

```
═══════════════════════════════════════════════════════════════════
C3ALABS.COM — MASTER BUILD PROMPT
VERSION 3.0 — ENHANCED FOR PREMIUM EXECUTION
FOR: GOOGLE ANTIGRAVITY AGENTIC IDE
═══════════════════════════════════════════════════════════════════

MANDATORY FIRST READ
════════════════════
Before you write a single line of code, read ALL FIVE knowledge
documents in order:
  DOC1 — Brand Intelligence
  DOC2 — Visual Design System
  DOC3 — Site Architecture
  DOC4 — Page Section Specs
  DOC5 — Content & Copy System

If you have not read all five documents, stop and read them now.
Non-compliance with the specs in those documents is a build failure.

WHAT YOU ARE BUILDING
════════════════════
c3alabs.com — the holding company website for C3alabs.

This is NOT a product page. NOT a SaaS landing page. NOT a startup
template. It is a premium credibility artifact for investors, talent,
and press. The analogy is Alphabet to Google. Build accordingly.

DO NOT invent sections. DO NOT reorder sections. DO NOT rewrite copy.
Every word, every section, every layout decision is specified in the
knowledge documents. Your job is flawless execution — not creative
interpretation.

THE EXPERIENCE STANDARD
════════════════════════
This site must feel like it was built by a small team with extreme
taste and unlimited time. The reference experience is premium Framer-
style sites at the level of antigravity.google. The gap between
"functional" and "this" is in the motion, the depth, and the micro-
interactions. Do not ship functional. Ship precise.

TECHNOLOGY STACK — EXACT
═════════════════════════
Framework:      Next.js 14+ (App Router, TypeScript strict)
3D:             @react-three/fiber + @react-three/drei + three
Post-process:   @react-three/postprocessing
Animation:      framer-motion
Smooth scroll:  lenis
Fonts:          geist + next/font/google (Fraunces, DM_Mono)
Styling:        CSS Modules only (NO Tailwind, NO styled-components)
Deployment:     Vercel

No other dependencies. No UI libraries. No CSS frameworks.
Every component is custom. Every style is a CSS variable from tokens.

CRITICAL SYSTEM: SMOOTH SCROLL
════════════════════════════════
Install: lenis
Create: components/providers/LenisProvider.tsx (client component)
Init Lenis with:
  duration: 1.2
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  smooth: true
  smoothTouch: false
Wrap app/layout.tsx body content in <LenisProvider>.
RAF loop: use Lenis.raf(time) inside requestAnimationFrame.
This is the scroll foundation. Build nothing before this is working.

CRITICAL SYSTEM: CUSTOM CURSOR
════════════════════════════════
Create: components/cursor/Cursor.tsx (client component, portal rendered)
Mount in app/layout.tsx above all content.
Apply cursor: none to html on desktop (cursor: auto on touch devices).

Cursor states:
  Default:      10px filled circle, color --text-0, lerp 0.12
  Link hover:   36px hollow circle (border only), 200ms transition
  Button hover: 36px hollow circle + slight scale on button (1.02)
  3D canvas:    20px crosshair, no fill
  External ↗:   Arrow rotated, 150ms transition
  Blend mode:   mix-blend-mode: difference on the cursor element

Never show default system cursor on desktop.
Never show custom cursor on touch devices (@media (hover: none)).

CRITICAL SYSTEM: 3D HERO OBJECT
═════════════════════════════════
File: components/hero/HeroCanvas.tsx
Import: dynamic(() => import('./HeroCanvas'), { ssr: false })
The canvas must be wrapped in <Suspense> with a transparent fallback.

Full 3D specification:

Geometry:     IcosahedronGeometry, detail level 2
Material:     MeshPhysicalMaterial
  transmission:     0.9
  roughness:        0.05
  metalness:        0.1
  ior:              1.5
  thickness:        0.5
  envMapIntensity:  1.0
  color:            dark mode → #1a1a1a | light mode → #e8e8e8

Lighting:
  <directionalLight position={[5, 5, 5]} intensity={1.2} />
  <ambientLight intensity={0.2} />
  <pointLight position={[-3, -3, -3]} intensity={0.4} color="#ffffff" />

Environment:
  <Environment preset="city" background={false} />
  This gives physically correct reflections. Required. Non-negotiable.

Post-processing (REQUIRED — do not skip):
  <EffectComposer>
    <Bloom luminanceThreshold={0.85} luminanceSmoothing={0.9} intensity={0.25} />
    <ChromaticAberration offset={[0.0002, 0.0002]} />
  </EffectComposer>

Animation:
  On load:      scale 0→1, opacity 0→1, duration 1200ms, delay 200ms
  Idle:         Y-axis rotation 0.002 rad/frame, X-axis 0.001 rad/frame
  Mouse:        Tilt toward cursor ±8 degrees, lerp 0.05
                Disabled on touch: @media (hover: none)
  On scroll:    Scale 1→0.6, opacity 1→0 over first 40% page scroll
                via useScrollProgress hook

Canvas setup:
  camera={{ position: [0, 0, 5], fov: 45 }}
  dpr={[1, 2]}
  performance={{ min: 0.5 }}
  style: position absolute, right 0, top 0, width 55%, height 100%
  pointerEvents: none

CRITICAL SYSTEM: MOTION
════════════════════════
lib/motion.ts exports FOUR variants:

1. revealVariant — opacity 0→1, y 28→0, duration 0.65s
   Use for: body text, labels, secondary content

2. clipRevealVariant — clipPath: 'inset(0 100% 0 0)'→'inset(0 0% 0 0)', duration 0.8s
   Use for: ALL primary headlines (H1 and H2 level only)
   This is the premium text entrance. Not optional for headlines.

3. containerVariant — stagger 0.1s between children
   Apply to parent wrappers of all animated sections

4. fadeVariant — opacity 0→1, duration 0.6s
   Use for: page transition wrapper on each page

ALL scroll reveals: whileInView={{ ... }}, viewport={{ once: true, amount: 0.15 }}
DO NOT re-trigger on scroll up. Fire once, stay.
All easing: [0.16, 1, 0.3, 1] (ease-out-expo)

CRITICAL SYSTEM: MAGNETIC HOVER
═════════════════════════════════
Create: lib/useMagneticHover.ts
Apply to: ButtonPrimary, GhostLink components

Logic:
  On mousemove over element:
    Calculate cursor distance from element center
    If distance < 40px:
      Apply transform: translate(x * 0.35, y * 0.35)
  On mouseleave:
    Return transform: translate(0, 0)
    Transition: 300ms cubic-bezier(0.34, 1.56, 0.64, 1)

Disabled on touch devices.

CRITICAL SYSTEM: STAT COUNT-UP
════════════════════════════════
Create: lib/useCountUp.ts
Apply to: All 4 stat numbers on Companies page
  (₹1,499/mo — ₹7,318 — 200+ — 4)

Parameters: { end: number, duration: 1200, startOnView: true }
Easing: easeOutQuart
Trigger: IntersectionObserver on the stat element, threshold 0.3
Fire once only.

For the ₹ and + characters: render them outside the animated number.
e.g., <span>₹</span><AnimatedNumber end={1499} /><span>/mo</span>

CRITICAL SYSTEM: SCROLL VELOCITY SKEW
═══════════════════════════════════════
Create: lib/useScrollVelocity.ts
Apply to: The <main> element wrapper only

Logic:
  Track scrollY delta per requestAnimationFrame
  Calculate velocity = current scrollY - previous scrollY
  Apply to <main>: transform: skewY(clamp(-2, velocity * 0.002, 2)deg)
  On velocity deceleration: spring release
    transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1)

This gives the "page has mass" sensation. Keep the max skew to 2deg.
Anything over 2deg becomes distracting.
Disabled on reduced-motion prefers.

CRITICAL SYSTEM: FOUNDER SECTION 3D (Section 1.5)
════════════════════════════════════════════════════
Replace the CSS grid placeholder with a mini 3D canvas.

File: components/sections/FounderCanvas.tsx
Same dynamic import + Suspense pattern as HeroCanvas.

Geometry:     OctahedronGeometry, detail 0
Material:     Same MeshPhysicalMaterial as hero, roughness 0.15
Size:         240px × 240px canvas
Animation:    Y-axis rotation only, 0.003 rad/frame. No mouse parallax.
Lighting:     directionalLight intensity 0.8 + ambientLight 0.2
Environment:  Same city preset
Post-process: Bloom at intensity 0.15 (lighter than hero)
No scroll fade on this canvas.

Desktop only — hidden on mobile (@media max-width: 768px).

COLOR SYSTEM — ENFORCED
═══════════════════════
Dark mode default. Light mode via prefers-color-scheme: light.
No manual toggle.

KARAX teal (#06B6D4): Companies page ONLY. Nowhere else.
SARVAX green (#00E87B): Companies page ONLY. Nowhere else.
No other accent colors anywhere on the site. Zero exceptions.
No gradients on backgrounds. Flat color only.
The monochrome IS the identity.

TYPOGRAPHY — ENFORCED
══════════════════════
Fraunces 200–300: Headlines only. Never body text.
Geist 300: Body text, sub-headings, supporting content.
DM Mono 400: Section labels (uppercase), metadata, button text, stats sub-labels.

Primary headlines (H1, H2): ALWAYS use clipRevealVariant.
All labels: ALWAYS uppercase, DM Mono, letter-spacing 0.14–0.16em.
Card border-radius: ALWAYS 2px. Never more. Never pill. Never circle.
Button border-radius: 2px. Same rule.
Body text max-width: 620px. Prevents cognitive strain on wide screens.

COPY RULES — ZERO TOLERANCE
═════════════════════════════
Use every word exactly as written in DOC5. No paraphrasing. No "improving."
Forbidden words: AI-powered, cutting-edge, leverage, ecosystem, seamless,
game-changer, revolutionary, excited, thrilled, solutions, unlock, empower.
These are not style suggestions. They are disqualifying errors.

COMPONENT CHECKLIST — BUILD ORDER
════════════════════════════════════
Build in this order. Do not skip ahead.

Phase 1 — Foundation (nothing else works without this):
  [ ] globals.css with all CSS tokens
  [ ] LenisProvider (smooth scroll)
  [ ] Cursor component
  [ ] app/layout.tsx with fonts + providers
  [ ] lib/motion.ts with all 4 variants

Phase 2 — Global Components:
  [ ] Nav (desktop + mobile overlay)
  [ ] Footer
  [ ] SectionLabel
  [ ] SectionDivider
  [ ] RevealWrapper
  [ ] ButtonPrimary (with magnetic hover)
  [ ] ButtonSecondary
  [ ] GhostLink (with magnetic hover + arrow gap animation)

Phase 3 — 3D Systems:
  [ ] HeroCanvas (icosahedron + environment + postprocessing)
  [ ] FounderCanvas (octahedron, smaller)

Phase 4 — Pages (in order):
  [ ] Home (/)
  [ ] About (/about)
  [ ] Companies (/companies) — stat count-up here
  [ ] Team (/team)
  [ ] The Thesis (/thesis)
  [ ] Contact (/contact) — query param pre-fill here

Phase 5 — Refinement:
  [ ] useScrollVelocity → apply to <main>
  [ ] Verify all clip-path reveals on headlines
  [ ] Verify stat count-up on Companies
  [ ] Test cursor states across all interaction types
  [ ] prefers-reduced-motion: disable ALL animation, ALL motion
  [ ] prefers-color-scheme: verify dark and light
  [ ] Mobile: disable cursor, disable 3D parallax, verify all breakpoints
  [ ] LCP test on 4G throttled (target: <2.5s)
  [ ] Verify no horizontal overflow on any viewport

WHAT ANTIGRAVITY MUST NOT DO
══════════════════════════════
DO NOT use Tailwind. DO NOT use any CSS framework.
DO NOT use any UI component library.
DO NOT round card corners beyond 2px.
DO NOT add sections not specified in DOC4.
DO NOT rewrite or paraphrase any copy from DOC5.
DO NOT add any color not in the token system (except KARAX/SARVAX on Companies).
DO NOT use box-shadow on any primary surface.
DO NOT add particle systems, animated backgrounds, gradient meshes, or video.
DO NOT render the 3D canvas server-side (ssr: false, always).
DO NOT show custom cursor on touch devices.
DO NOT re-trigger scroll animations (once: true, always).
DO NOT let the page scroll horizontally on any viewport.
DO NOT skip the Bloom post-processing on the 3D hero.
DO NOT skip the smooth scroll (Lenis) initialization.

QUALITY STANDARDS — SHIP CHECKLIST
════════════════════════════════════
Before marking any page complete, verify:

Visual:
  [ ] Fonts loaded via next/font (zero layout shift on load)
  [ ] All headlines use clip-path reveal (not opacity+y)
  [ ] All labels: DM Mono, uppercase, letter-spaced
  [ ] Card border-radius is 2px throughout
  [ ] No box-shadow on any card or surface
  [ ] No accent color outside Companies page
  [ ] No horizontal overflow
  [ ] No gradient backgrounds
  [ ] Sections breathe — padding is double what feels "about right"

Motion:
  [ ] Lenis smooth scroll active and smooth on desktop
  [ ] Scroll velocity skew applied to <main>, spring release working
  [ ] 3D hero enters at 1.2s with scale + opacity
  [ ] 3D hero fades out over first 40% of scroll
  [ ] Custom cursor active, all states correct, hidden on touch
  [ ] Magnetic hover on all CTAs and ghost links
  [ ] Stat count-up fires on Companies page scroll
  [ ] prefers-reduced-motion disables everything

3D:
  [ ] Icosahedron uses MeshPhysicalMaterial with correct parameters
  [ ] Environment preset "city" loaded (gives real reflections)
  [ ] Bloom post-processing active (luminance threshold 0.85)
  [ ] ChromaticAberration active (offset 0.0002)
  [ ] Mouse parallax active on desktop, disabled on touch
  [ ] Suspense fallback present (transparent div, no flash)
  [ ] Canvas dynamically imported (ssr: false)
  [ ] 60fps on desktop, 30fps acceptable on mobile

Copy:
  [ ] Every word matches DOC5 exactly
  [ ] C3alabs / KARAX / SARVAX casing correct throughout
  [ ] No forbidden words anywhere
  [ ] Contact page pre-fills on ?type=investor and ?type=career
  [ ] Footer copyright reads "© 2025 C3alabs"

THE GOAL
═════════════════════════════════════════════════════════════════
We are not building a "cool website."

We are building a controlled, premium, category-defining experience
that feels like it was made by a small team with extreme taste —
because it was.

Every investor who lands here should feel: "This founder is right
about something important."

Every potential hire should feel: "This is where serious work happens."

Every journalist should feel: "I have everything I need."

Build accordingly.

═══════════════════════════════════════════════════════════════════
END OF MASTER PROMPT
═══════════════════════════════════════════════════════════════════
```

---

*Strategic Analysis prepared for C3alabs / Satyam Casula*
*Documents analyzed: DOC1–DOC5 (complete)*
*Gap analysis referenced: antigravity.google experience standard*
*Version: 3.0 — Enhanced for premium execution*
