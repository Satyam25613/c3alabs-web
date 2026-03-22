# C3ALABS — ANTIGRAVITY BUILD SPEC
# DOCUMENT 4: PAGE & SECTION SPECIFICATIONS

**Version:** 2.0 | **For:** Google Antigravity Agentic IDE | **Domain:** c3alabs.com

> **Instruction to AI Agent:** This document is a complete build specification for every page and section of c3alabs.com. Each section is described with: layout, copy, component hierarchy, visual rules, and behavior. Build sections exactly as specified. Do not invent sections not listed here. Do not reorder sections.

---

## PAGE 1: HOME — `/`

### Section 1.1 — HERO

**Purpose:** Establish C3alabs as a serious parent company. Introduce the company thesis in one powerful statement. Show the 3D element as the visual signature. No products.

**Layout:**
```
Full viewport height (100vh minimum).
Two zones on desktop:
  Left zone (55% width): Text content, z-index: 1
  Right zone (55% width, overlapping): 3D canvas, z-index: 0, position: absolute right 0

On mobile: single column, text above 3D (3D opacity: 40%, scale: 60%)
```

**Component hierarchy:**
```
<section id="hero">
  <div class="hero-content">
    <SectionLabel>          ← "Founded 2024"
    <h1 class="hero-headline">
    <p class="hero-sub">
    <div class="hero-cta-row">
      <ButtonPrimary />     ← "Explore our companies"
      <GhostLink />         ← "Read the thesis →"
    </div>
  </div>
  <HeroCanvas />            ← React Three Fiber 3D icosahedron
</section>
```

**Section label:** `"Founded 2024"` — DM Mono, 11px, uppercase, `--text-3`, letter-spacing 0.16em. Appears 80px above headline.

**Hero headline (h1):**
```
We build
AI companies.
```
Font: Fraunces 200. Size: `--type-hero` (`clamp(72px, 9vw, 120px)`). Color: `--text-0`. Line-height: 0.96. Letter-spacing: -0.04em. The word *AI* is wrapped in `<em>` → renders in Fraunces italic.

Two lines, manually broken with `<br />`. Never on one line.

**Hero sub-paragraph:**
```
C3alabs is a holding company. We conceive, build, and scale
AI products that execute real work — not generate suggestions.
```
Font: Geist 300. Size: `--type-body-lg`. Color: `--text-2`. Max-width: 480px. Margin-top: `--space-8` (32px).

**CTA row:** Two elements, horizontal flex, gap: `--space-6` (24px), margin-top: `--space-10` (40px).
- Primary button: `"Explore our companies"` → links to `/companies`
- Ghost link: `"Read the thesis →"` → links to `/thesis`. Arrow moves +4px right on hover.

**3D Canvas (HeroCanvas.tsx):**
- Dynamically imported: `dynamic(() => import('./HeroCanvas'), { ssr: false })`
- Position: `absolute`, right: 0, top: 0, width: 55%, height: 100%
- Pointer events: none
- See DOC2 §6 for full 3D specification
- On scroll: opacity and scale fade out over first 40% of page scroll (via `useScrollProgress` hook)

**Hero entrance animation sequence:**
1. Section label: fades in, delay 0ms, duration 600ms
2. H1 line 1: fades in + translateY(28px → 0), delay 100ms
3. H1 line 2: fades in + translateY(28px → 0), delay 200ms
4. Sub paragraph: delay 350ms
5. CTA row: delay 500ms
6. 3D canvas: scale(0 → 1) + opacity(0 → 1), delay 200ms, duration 1200ms

---

### Section 1.2 — SCROLL ANCHOR / INTRO STATEMENT

**Purpose:** Transition from hero energy to the company's core conviction. A single powerful statement in large type. No headline — just a statement.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)    [160px top/bottom]
Background: var(--bg-1)
Max-width: var(--grid-max)
```

**Content:**
```
[Section label above]: "Our conviction"

[Large statement in Fraunces]:
"The next decade of software is not about
writing code. It's about deploying intelligence
that executes work."

[Below, small supporting line in Geist]:
"We're building the companies on that side of the line."
```

Statement font: Fraunces 300 italic. Size: `--type-title` (`clamp(32px, 4vw, 52px)`). Color: `--text-0`. Line-height: 1.15.

Supporting line: Geist 300. Size: `--type-body`. Color: `--text-3`. Margin-top: `--space-8`.

**Animation:** `containerVariant` + `revealVariant` from lib/motion.ts. Triggered once at 15% visibility.

---

### Section 1.3 — WHAT WE DO

**Purpose:** Three sharp statements about how C3alabs operates. No icons. Pure typography.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-0)
```

**Section label:** `"How we operate"`

**Headline:** `"One thesis. Two companies. One infrastructure."`
Font: Fraunces 300. Size: `--type-display`.

**Three column grid (desktop: 3 cols | mobile: 1 col, stacked):**

Each column:
```
[Number] — DM Mono 11px, --text-3, margin-bottom 16px
[Title]  — Geist 400, --type-subheading, --text-0
[Body]   — Geist 300, --type-body, --text-2, max-width 280px
```

Column 1:
```
01
We identify a gap
We find markets where AI can replace entire workflows, not just assist them.
```

Column 2:
```
02
We build the company
Each product is a standalone company with its own brand, market, and team.
```

Column 3:
```
03
We share the infrastructure
Common intelligence layer. Independent surfaces. One coherent system.
```

**Divider:** 1px `--border-0` line below this section.

---

### Section 1.4 — COMPANIES PREVIEW

**Purpose:** Route visitors to the Companies page. Show both products exist without dwelling on them here.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
```

**Section label:** `"Our portfolio"`

**Headline:** `"Two companies. Built to own their categories."`
Font: Fraunces 300. Size: `--type-display`.

**Two-card grid (desktop: 2 cols | mobile: 1 col):**

Card structure: see DOC2 §8 (Cards). Background `--bg-2`, border `--border-0`, border-radius 2px, padding `--space-10`.

**KARAX card:**
```
[Top row]: "KARAX" in DM Mono 11px uppercase --text-3 | "karax.ai ↗" ghost link right-aligned
[Separator]: 1px --border-0 line
[Category label]: "Personal Execution AI"  — Geist 400 --type-subheading --text-0, margin-top --space-6
[One-liner]: "One chat that connects to all your tools and executes tasks."  — Geist 300 --type-body --text-2
[Bottom]: GhostLink "Learn more →" → /companies (scrolls to KARAX section)
```
No teal color on this card. Monochrome only.

**SARVAX card:**
```
[Top row]: "SARVAX" in DM Mono 11px uppercase --text-3 | "sarvax.ai ↗" ghost link right-aligned
[Separator]: 1px --border-0 line
[Category label]: "AI Agents Platform"  — Geist 400 --type-subheading --text-0, margin-top --space-6
[One-liner]: "AI agents that own business roles and execute them autonomously."  — Geist 300 --type-body --text-2
[Bottom]: GhostLink "Learn more →" → /companies (scrolls to SARVAX section)
```
No green color on this card. Monochrome only.

**Below cards:** Centered, single ButtonSecondary: `"View all companies →"` → `/companies`

---

### Section 1.5 — FOUNDER PRESENCE

**Purpose:** Briefly introduce Sai. Make the company feel founder-led without being a biography.

**Layout:**
```
Padding: var(--space-32) var(--grid-margin)    [128px top/bottom]
Background: var(--bg-0)
```

**Two columns (desktop: 40/60 | mobile: stacked):**

Left column:
```
[Section label]: "Founder"
[Name]: "Sai Casula"  — Fraunces 300, --type-title, --text-0
[Role]: "Founder & CEO"  — DM Mono 11px uppercase, --text-3, margin-top --space-2
[Quote]: "I started C3alabs to answer one question: what if the software
          just did the work?"
  — Fraunces 300 italic, --type-body-lg, --text-1, max-width 420px, margin-top --space-8
[GhostLink]: "Read more about us →" → /about
```

Right column (desktop only — hidden on mobile):
```
A minimal geometric visual: a thin 1px grid pattern (3×3) in --border-0 color.
Size: 240px × 240px. This is a CSS-only element — no image, no SVG import.
It represents structure and precision. Do not use a photo here.
```

---

### Section 1.6 — CLOSING CTA

**Purpose:** End the homepage with a clear fork: investors go to The Thesis, builders go to Contact.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
Text-align: center
```

**Headline:** `"If you're building the future,\nwe should talk."`
Font: Fraunces 300. Size: `--type-display`. Color: `--text-0`. Line break after comma (via `<br />`).

**Sub:** `"For investors, potential hires, and press."`
Geist 300. `--type-body`. `--text-3`. Margin-top: `--space-4`.

**Two buttons, centered, gap --space-6:**
- ButtonPrimary: `"Read the Thesis"` → `/thesis`
- ButtonSecondary: `"Get in touch"` → `/contact`

---

---

## PAGE 2: ABOUT — `/about`

### Section 2.1 — PAGE HERO

**Layout:**
```
Padding-top: 160px (accounts for fixed nav)
Padding-bottom: var(--space-32)
Background: var(--bg-0)
Max-width: var(--grid-max), margin: 0 auto, padding-horizontal: var(--grid-margin)
```

**Section label:** `"About C3alabs"`

**Headline:** `"We exist to build AI that executes."`
Font: Fraunces 200. Size: `--type-display`. Color: `--text-0`.

**Sub:** `"Not AI that assists. Not AI that suggests. AI that completes."`
Font: Fraunces 300 italic. Size: `--type-title`. Color: `--text-2`.

---

### Section 2.2 — COMPANY NARRATIVE

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
Max-width: 820px (editorial width — narrower than grid max)
```

**Section label:** `"The story"`

**Four paragraphs of body copy:**

Paragraph 1:
```
C3alabs is an AI holding company. It is not a consultancy, not an agency,
and not a product studio. It is a company that builds AI companies —
vertically, with conviction, and for the long term.
```

Paragraph 2:
```
We started with a question: if AI can reason, plan, and act — why is software
still just a tool that waits for instructions? The answer is that most AI
products are built around the chat interface, not around the work itself.
We're building around the work.
```

Paragraph 3:
```
KARAX is our answer for individuals. One interface. All tools connected.
Work executed on command. SARVAX is our answer for businesses. Autonomous
agents that own entire roles — not just help with tasks.
```

Paragraph 4:
```
Both products are live. Both are growing. And this is the beginning.
```

Each paragraph: Geist 300, `--type-body-lg`, `--text-1`, max-width 620px, margin-bottom `--space-8`.

**Animation:** stagger each paragraph with `revealVariant`, 100ms between.

---

### Section 2.3 — THE MISSION STATEMENT

**Purpose:** One statement, given full visual weight. No explanation.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-0)
Border-top: 1px solid --border-0
Border-bottom: 1px solid --border-0
```

**Single centered statement:**
```
"We build AI companies."
```
Font: Fraunces 200. Size: `--type-hero`. Color: `--text-0`. Text-align: center. Letter-spacing: -0.04em.

Nothing else in this section.

---

### Section 2.4 — HOW WE THINK

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
```

**Section label:** `"Principles"`

**Headline:** `"Three things we believe that most people don't."`
Fraunces 300. `--type-title`. `--text-0`.

**Three stacked items (NOT cards — just bordered rows):**

Each item:
```
Border-top: 1px solid --border-0
Padding: --space-10 0   [40px top/bottom, no horizontal padding]
Layout: two columns — [Number + Title] left | [Body] right
```

On mobile: stacked, number + title above, body below.

Item 1:
```
Number: "01"  — DM Mono 11px --text-3
Title:  "Execution is the product."  — Fraunces 300, --type-heading, --text-0
Body:   "The value of AI is not in what it says. It's in what it does.
         Every product we build is measured by tasks completed, not responses generated."
         Geist 300 --type-body --text-2 max-width 480px
```

Item 2:
```
Number: "02"
Title:  "Focus beats breadth."
Body:   "KARAX does one thing: execute work for individuals. SARVAX does one
         thing: deploy agents for businesses. Narrow products win deep markets."
```

Item 3:
```
Number: "03"
Title:  "The infrastructure is the advantage."
Body:   "What connects our products cannot be seen from the outside.
         That invisibility is intentional. The moat is in the foundation."
```

Last item: `border-bottom: 1px solid --border-0`

---

### Section 2.5 — ABOUT CTA

**Layout:**
```
Padding: var(--space-32) var(--grid-margin)
Background: var(--bg-0)
Text-align: center
```

**Two buttons, centered:**
- ButtonPrimary: `"Meet the team"` → `/team`
- ButtonSecondary: `"See our companies"` → `/companies`

---

---

## PAGE 3: COMPANIES — `/companies`

**Note:** This is the ONLY page where KARAX teal (`#06B6D4`) and SARVAX green (`#00E87B`) appear. Nowhere else on the site.

### Section 3.1 — PAGE HERO

**Layout:**
```
Padding-top: 160px
Padding-bottom: var(--space-32)
Background: var(--bg-0)
```

**Section label:** `"Portfolio"`

**Headline:** `"Two companies.\nBuilt to define categories."`
Fraunces 200. `--type-display`. `--text-0`. Manual line break after "companies."

**Sub:** `"Each one independently funded, independently operated, and independently branded — but powered by the same underlying intelligence."`
Geist 300. `--type-body-lg`. `--text-2`. Max-width: 600px.

---

### Section 3.2 — KARAX COMPANY SECTION

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
```

**Product accent bar:** A 2px height, full-width line at the very top of this section. Color: `#06B6D4` (KARAX teal). This is the ONLY teal element on the page.

**Two columns (desktop: 50/50 | mobile: stacked):**

Left column:
```
[Logo mark]: "KARAX"  — Fraunces 300, --type-display, color: #06B6D4
[Tagline]: "Personal Execution AI"  — DM Mono 11px uppercase --text-3, margin-top --space-2
[Body]: Geist 300, --type-body-lg, --text-1, max-width 480px:

  "KARAX is a personal AI workspace that connects to all your tools
   and executes tasks on command. Not a chatbot. Not a copilot.
   A system that acts."

[Second paragraph]:
  "Built for individuals — freelancers, founders, creators, students —
   who need work done, not answers generated."

[Stats row — 2 stats]:
  Stat 1: "₹1,499/mo"  number label
          "vs ₹7,318 combined for equivalent tools"  sub-label
  Stat 2: "One chat"   number label
          "connects all your tools"  sub-label

[CTA]: ButtonPrimary "Visit karax.ai →" (external link, opens new tab)
       + GhostLink "Learn more →" (same behavior)
```

Right column: A bordered container (border: 1px solid `#06B6D4` at 30% opacity, border-radius 2px, background `--bg-2`, padding `--space-10`) showing:
```
[Label in DM Mono]: "What KARAX executes"
[4 capability rows]:
  — Manages your meetings and calendar
  — Drafts, sends, and organizes emails
  — Creates content and automates publishing
  — Connects and orchestrates 100+ tools
Each row: 1px --border-0 separator, DM Mono 12px --text-2, padding --space-4 0
```

Stats (number): Fraunces 300, `--type-title`, `--text-0`.
Stats (sub-label): DM Mono 11px, `--text-3`.

---

### Section 3.3 — SARVAX COMPANY SECTION

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-0)
```

**Product accent bar:** 2px height, full-width. Color: `#00E87B` (SARVAX green). ONLY green element.

**Two columns (desktop: 50/50 reversed — content RIGHT, panel LEFT | mobile: stacked):**

Left column (panel first on desktop, after content on mobile):
```
[Bordered container]: border: 1px solid #00E87B at 30% opacity, --bg-2, padding --space-10:
[Label]: "SARVAX agent categories"
[4 agent rows]:
  — HR Agent — onboarding, compliance, leave management
  — Sales Agent — pipeline, outreach, CRM updates
  — Ops Agent — vendor management, reporting, scheduling
  — Support Agent — tickets, escalation, customer response
Each row: 1px --border-0 separator, DM Mono 12px --text-2, padding --space-4 0
```

Right column:
```
[Logo mark]: "SARVAX"  — Fraunces 300, --type-display, color: #00E87B
[Tagline]: "AI Agents Platform"  — DM Mono 11px uppercase --text-3
[Body]:
  "SARVAX deploys autonomous AI agents into your business.
   Each agent owns an entire function — HR, Sales, Ops, Support —
   and executes it without supervision."

[Second paragraph]:
  "Built for businesses 50–500 people who need to scale operations
   without scaling headcount."

[Stats row — 2 stats]:
  Stat 1: "200+"   number label
          "hours per week recovered per deployment"  sub
  Stat 2: "4 categories"  number label
          "HR · Sales · Ops · Support"  sub

[CTA]: ButtonPrimary "Visit sarvax.ai →" (external, new tab)
       + GhostLink "Learn more →"
```

---

### Section 3.4 — COMPANIES CTA

**Layout:**
```
Padding: var(--space-32) var(--grid-margin)
Background: var(--bg-1)
Border-top: 1px solid --border-0
Text-align: center
```

**Headline:** `"Interested in what we're building?"`
Fraunces 300. `--type-title`. `--text-0`.

**Sub:** `"For investors, press, and potential partners."`
Geist 300. `--type-body`. `--text-3`.

**Two buttons:**
- ButtonPrimary: `"Read the Thesis"` → `/thesis`
- ButtonSecondary: `"Get in touch"` → `/contact`

---

---

## PAGE 4: TEAM — `/team`

### Section 4.1 — PAGE HERO

**Layout:**
```
Padding-top: 160px
Padding-bottom: var(--space-32)
Background: var(--bg-0)
```

**Section label:** `"The team"`

**Headline:** `"Small. Intentional. Growing."`
Fraunces 200. `--type-display`. `--text-0`.

**Sub:** `"C3alabs is founder-led. We hire for conviction over credentials."`
Geist 300. `--type-body-lg`. `--text-2`. Max-width: 560px.

---

### Section 4.2 — FOUNDER CARD

**Purpose:** Sai Casula. The only named person. Full presence.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
```

**Card:** Full-width (not a grid card — a full-bleed content block). Border: 1px solid `--border-0`. Border-radius: 2px. Padding: `--space-12` (48px). Background: `--bg-2`.

**Two columns (desktop: 35/65 | mobile: stacked):**

Left column:
```
[Photo placeholder]: A 200×200px square with border: 1px solid --border-1,
                     border-radius: 2px, background: --bg-3.
                     Center the initials "SC" in Fraunces 300,
                     --type-heading, --text-3.

NOTE to Antigravity: If Sai provides an actual photo, render it here as
<Image> with Next.js Image optimization. Aspect ratio: 1:1.
Object-fit: cover. Until then, use the monogram.
```

Right column:
```
[Name]: "Sai Casula"  — Fraunces 300, --type-title, --text-0
[Role]: "Founder & CEO, C3alabs"  — DM Mono 11px uppercase --text-3, mt --space-2

[Bio — 3 short paragraphs]:

  "Sai founded C3alabs to build AI that executes work — not generates
   text. He leads product, strategy, and company direction across
   KARAX and SARVAX."

  "His conviction: the execution layer of AI is the most important
   infrastructure being built in this decade. C3alabs is his answer."

  "He is the first person here. He will not be the last."

[Contact row]:
  [GhostLink]: "Email Sai →" → mailto:satyam25613@gmail.com
  [GhostLink]: "LinkedIn ↗" → (placeholder, external)
```

Bio: Geist 300. `--type-body`. `--text-1`. Line-height 1.75. Max-width 520px. Each paragraph has margin-bottom `--space-6`.

---

### Section 4.3 — TEAM PHILOSOPHY

**Layout:**
```
Padding: var(--space-32) var(--grid-margin)
Background: var(--bg-0)
Max-width: 740px
```

**Section label:** `"On hiring"`

**Statement:**
```
"The team is small. We want to keep it that way for as long as possible.

Every person we hire should make C3alabs meaningfully better —
not just larger. We are not hiring to fill roles. We are hiring
to extend the founding vision."
```
Fraunces 300 (first sentence, large) + Geist 300 (rest). Size: `--type-body-lg`. Color: `--text-1`.

First sentence: Fraunces 300, `--type-title`, `--text-0`, margin-bottom `--space-6`.
Rest: Geist 300, `--type-body-lg`, `--text-2`.

---

### Section 4.4 — OPEN ROLES (Categories)

**Purpose:** Signal what kind of talent C3alabs needs. NOT specific job posts. NOT fake filled roles.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
```

**Section label:** `"Where we're growing"`

**Headline:** `"We're looking for people who build things that matter."`
Fraunces 300. `--type-title`. `--text-0`.

**Sub:** `"No specific openings listed. If you're exceptional and aligned, reach out directly."`
Geist 300. `--type-body`. `--text-3`. Margin-bottom: `--space-10`.

**Four role category rows (NOT cards — bordered rows, full width):**

Each row layout:
```
Border-top: 1px solid --border-0
Padding: --space-8 0   [32px top/bottom]
Two columns: [Category name] left | [Description] right
On mobile: stacked
```

Row 1:
```
Category: "Product & Design"  — Geist 400, --type-subheading, --text-0
Desc:     "You think in systems. You design for clarity, not aesthetics.
           You've shipped products that people depend on."
           Geist 300, --type-body, --text-2, max-width 440px
```

Row 2:
```
Category: "Engineering"
Desc:     "You build at the intersection of AI and product.
           You care about architecture as much as velocity.
           You've built something real."
```

Row 3:
```
Category: "AI Research & Infrastructure"
Desc:     "You work at the model or infrastructure layer.
           You think in deployments, latency, and reliability —
           not just benchmarks."
```

Row 4:
```
Category: "Go-to-Market"
Desc:     "You've taken something technical and made it land with the right people.
           You think in distribution, not campaigns."
```

Last row: `border-bottom: 1px solid --border-0`

**Below rows:** ButtonPrimary: `"Get in touch"` → `/contact?type=career`

---

---

## PAGE 5: THE THESIS — `/thesis`

> This page is C3alabs' investment thesis, framed as intellectual conviction — not a pitch. It does NOT say "Invest in us." It argues a position. It ends with an invitation.

### Section 5.1 — PAGE HERO

**Layout:**
```
Padding-top: 160px
Padding-bottom: var(--space-24)
Background: var(--bg-0)
```

**Section label:** `"The Thesis"`

**Headline:**
```
"The execution layer
is the most important
infrastructure in AI."
```
Fraunces 200. `--type-display`. `--text-0`. Line-height: 1.04. Manually broken across three lines via `<br />`.

**Sub:** `"A reasoned argument. Not a pitch."`
DM Mono 11px. Uppercase. `--text-3`. Letter-spacing: 0.14em. Margin-top: `--space-6`.

---

### Section 5.2 — THE ARGUMENT

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
Max-width: 820px
```

**Five numbered argument sections:**

Each:
```
[Number + Title row]:
  Number: DM Mono 11px --text-3 — e.g. "01 /"
  Title: Geist 400, --type-subheading, --text-0
[Body]: Geist 300, --type-body-lg, --text-1, max-width 620px
[Separator]: 1px --border-0, margin: --space-10 0
```

**01 / The problem with AI today:**
```
"Every major AI product launched in the last three years is built around
the same interaction model: you type, it replies. The value is in the response.
The work still falls on you.

This is not a coincidence. It is the path of least resistance.
Building AI that generates is far easier than building AI that executes."
```

**02 / The shift that's coming:**
```
"The next phase of AI adoption is not about better models.
It's about AI that owns workflows.

The companies that will define the next decade are not building
better chatbots. They're building systems where the AI does the job —
completely, accountably, and autonomously."
```

**03 / Why two products:**
```
"The execution problem looks different at the individual level than at the
business level. These are not the same market, the same buyer, or the same motion.

KARAX is built for the individual who wants to multiply what they can do alone.
SARVAX is built for the business that wants to operate without adding headcount.

Same infrastructure. Different surfaces. Dual-market coverage."
```

**04 / Why now:**
```
"Model capability crossed a threshold in 2023. The question is no longer
whether AI can do the work. It's whether anyone is building the right
interface around it.

Most companies are racing to build better models. We're building the layer
on top — the one that converts capability into execution. That layer is
largely unbuilt."
```

**05 / Why C3alabs:**
```
"We started with conviction, not capital. Both products are live.
Both have users. Both are growing.

We are not fundraising to prove the idea. We are fundraising to accelerate
what is already working."
```

---

### Section 5.3 — THE INVITATION

**Purpose:** End the thesis with an invitation, not a call-to-action. Sophisticated, not salesy.

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-0)
Border-top: 1px solid --border-0
Max-width: 740px
```

**Statement:**
```
"If you read this and found yourself disagreeing with something —
we'd like to talk.

If you read this and found yourself nodding —
we'd especially like to talk."
```
Font: Fraunces 300 italic. Size: `--type-title`. Color: `--text-0`. Line-height: 1.2.

**Below statement:**
```
[Geist 300 --type-body --text-3]:
"C3alabs is not yet backed. We are selectively speaking with investors
 who share a long-term, category-building perspective."
```

**CTA:**
ButtonPrimary: `"Start a conversation"` → `/contact?type=investor`

**Margin-top:** `--space-10` above button.

---

---

## PAGE 6: CONTACT — `/contact`

### Section 6.1 — PAGE HERO

**Layout:**
```
Padding-top: 160px
Padding-bottom: var(--space-16)
Background: var(--bg-0)
```

**Section label:** `"Contact"`

**Headline:** `"Say something real."`
Fraunces 200. `--type-display`. `--text-0`.

**Sub:** `"For investors, potential hires, press, partnerships, and product users."`
Geist 300. `--type-body-lg`. `--text-2`. Max-width: 520px.

---

### Section 6.2 — CONTACT FORM + DIRECT INFO

**Layout:**
```
Padding: var(--space-40) var(--grid-margin)
Background: var(--bg-1)
Two columns desktop (55/40 gap 64px) | Single column mobile (form first)
```

**Left column — Contact form:**

Form component: `ContactForm.tsx`

Fields:
```
[Name]     — text input, placeholder: "Your name"
[Email]    — email input, placeholder: "your@email.com"
[Type]     — select dropdown:
             Options: "I'm an investor" | "I'm looking to join" | "I'm from the press" |
                      "I have a partnership idea" | "Something else"
[Subject]  — text input, placeholder: "What's this about?"
[Message]  — textarea, rows: 5, placeholder: "Don't pitch. Just talk."
[Submit]   — ButtonPrimary full-width: "Send →"
```

If URL param `?type=investor` → pre-select "I'm an investor" in the Type dropdown.
If URL param `?type=career` → pre-select "I'm looking to join".

Form field styles:
```
Background:   var(--bg-2)
Border:       1px solid var(--border-0)
Border-radius: 2px
Padding:      12px 16px
Font:         Geist 300, 15px, var(--text-1)
Outline:      none on focus; instead → border-color: var(--border-2)
Transition:   border-color var(--duration-fast)
```

Success state: Form hides, replaced by:
```
[DM Mono label]: "Message received."
[Fraunces italic]: "We'll be in touch."
```

**Right column — Direct info:**

```
[Section label]: "Or reach directly"

[Contact item 1]:
  [DM Mono 11px --text-3]: "FOUNDER"
  [Geist 300 --type-body --text-1]: "Sai Casula"
  [GhostLink]: "satyam25613@gmail.com →" → mailto:satyam25613@gmail.com

[Divider 1px --border-0]

[Contact item 2]:
  [DM Mono 11px --text-3]: "PRESS"
  [Geist 300 --type-body --text-1]: "For media inquiries"
  [GhostLink]: "press@c3alabs.com →" → mailto:press@c3alabs.com

[Divider 1px --border-0]

[Contact item 3]:
  [DM Mono 11px --text-3]: "PRODUCTS"
  [GhostLink]: "karax.ai ↗" (external)
  [GhostLink]: "sarvax.ai ↗" (external)

[Divider 1px --border-0]

[Response time note]:
  [Geist 300 11px --text-4]:
  "We read everything. We respond selectively and honestly."
```

---

---

## GLOBAL COMPONENTS — ALL PAGES

### SectionLabel
```tsx
// components/sections/SectionLabel.tsx
// Renders: "YOUR LABEL TEXT" in DM Mono 11px uppercase, --text-3, letter-spacing 0.16em
// Usage: <SectionLabel>Our portfolio</SectionLabel>
// Always placed immediately above the section headline, margin-bottom: --space-6
```

### SectionDivider
```tsx
// 1px horizontal rule, --border-0 color, full container width
// Usage: between major sections on the same background color
```

### RevealWrapper
```tsx
// Wraps any section content in Framer Motion containerVariant
// Props: children, delay (optional, default 0)
// Usage: <RevealWrapper><h2>...</h2><p>...</p></RevealWrapper>
// All children stagger at 100ms using revealVariant
```

### ButtonPrimary
```
Background:  var(--text-0)
Color:       var(--bg-0)
Font:        var(--font-mono), 11px, uppercase, letter-spacing 0.12em
Padding:     14px 28px
Border-radius: 2px
Hover:       opacity 0.85, translateY(-1px)
Transition:  opacity 150ms, transform 150ms
```

### ButtonSecondary
```
Background:  transparent
Color:       var(--text-1)
Border:      1px solid var(--border-1)
Font:        var(--font-mono), 11px, uppercase, letter-spacing 0.12em
Padding:     14px 28px
Border-radius: 2px
Hover:       border-color var(--border-2), color var(--text-0)
```

### GhostLink
```
Display:  inline-flex, align-items: center, gap: 8px
Color:    var(--text-2)
Font:     var(--font-body), 300, var(--type-body-sm)
Hover:    color var(--text-0), gap → 12px
Arrow moves: gap transition 150ms ease
```

---

*End of Document 4. Document 5 provides the complete copy system, all headline variations, and messaging hierarchy.*
