# C3ALABS — ANTIGRAVITY MASTER BRIEF
> Version 2.0 | Complete messaging, copy, and design direction
> Read this fully before touching a single file.

---

## THE MOST IMPORTANT THING TO UNDERSTAND FIRST

**C3alabs is a holding company. KARAX and SARVAX are not products — they are companies.**

Think: Alphabet → Google, Waymo, DeepMind.
Think: C3alabs → KARAX (company), SARVAX (company).

This is not a semantic distinction. It changes how the entire site reads and feels. An investor landing on this site should immediately understand: this is a company that builds and owns AI companies — and there will be more.

**Current problem:** The site (as you last updated it) describes KARAX and SARVAX as "deployed systems", "workforces", and "nodes." It uses language like "engineering compound", "deterministic core", "precision strike-team", "violently accelerate", "deploy your signal", "Expansion Nodes." This must all be replaced. It reads like a startup cosplaying as a defence contractor. That is the opposite of what this site should feel like.

---

## SECTION 1 — COMPANY STRUCTURE

```
C3alabs (Parent — AI Holding Company)
├── KARAX   (Subsidiary Company — B2C)
└── SARVAX  (Subsidiary Company — B2B)
```

**C3alabs** — builds, funds, and scales AI companies. Currently owns two. More will follow.

**KARAX** — A B2C AI company. Their product is a personal AI workspace called OneChat. Built for individuals — freelancers, founders, creators, students. User operates AI. Competes with: ChatGPT + Otter.ai + Zapier combined.

**SARVAX** — A B2B AI company. Their product is an AI agents platform. Built for businesses of 50–500 people. AI operates work. HR Agent live. Competes with: manual processes, hiring, BPO.

**CORE** — The shared execution infrastructure powering both companies. Not customer-facing. This is C3alabs' structural advantage — it compounds across every company they build.

---

## SECTION 2 — VOICE AND TONE

### The Three-Word Standard
Every page should feel: **Certain. Grounded. Sharp.**

- **Certain** — no hedging, no startup-speak, no "we're building towards"
- **Grounded** — real companies, real users, real problem being solved
- **Sharp** — every word earns its place

### Tone Reference
Linear (product-led, fast, precise) + Stripe (trusted, detail-obsessed). NOT military. NOT sci-fi. NOT corporate.

### Forbidden Words — Delete These Everywhere
- compound / node / operator / protocol / directive
- deterministic core / execution layer (as internal jargon)
- precision strike-team / violently accelerate
- deploy your signal / expansion nodes
- apex operator / high-density engineers
- initialized / engineered (when referring to founding)
- augmentation / stochastic / labyrinthian
- AI-powered / seamlessly / revolutionary / cutting-edge / leverage

### Approved Language
- builds / builds and owns / conceives and scales
- executes / finishes / completes
- companies / subsidiary companies / portfolio
- live / users / growing
- shared infrastructure / execution infrastructure
- conviction / focused / precise
- work done / not assisted

---

## SECTION 3 — NAVIGATION CHANGE

In `lib/constants.ts`, change the NAV_LINKS:

```
"Products" → "Companies"
```

The page `app/products/page.tsx` stays the same file path — just the nav label changes.

---

## SECTION 4 — HERO SECTION (Complete Redesign Direction)

### Current State
Centered text, aurora orb background, headline: "Autonomous AI that executes work."

### What Needs to Change

**The headline must reflect the holding company:**
```
We build
AI companies.
```

**Sub-paragraph:**
```
C3alabs is an AI holding company. We conceive, build, and scale
AI companies that do the work — not assist with it.
```

**Below the sub-paragraph — add two company badges:**
This is the most important design addition. After the sub-text and before the CTA buttons, add a small row of two company identity cards. Think of it like a portfolio strip. Each card shows:

Card 1 — KARAX
- Name: KARAX
- One line: "Personal Execution AI · karax.ai"
- Type badge: "B2C Company"

Card 2 — SARVAX
- Name: SARVAX
- One line: "AI Agents Platform · sarvax.ai"
- Type badge: "B2B Company"

These cards should be minimal — just a small pill or badge-style element. Dark background, white text, subtle border. Side by side. The visual message is: "we already have two companies running."

**CTA Buttons:**
- Primary: "Read the thesis"  →  /thesis
- Secondary: "See our companies →"  →  /products

**Keep:**
- Aurora orb background (HeroCanvas.tsx) — keep exactly as is
- Parallax scroll effect
- Centered layout

**Hero feel:** Alphabet-level confidence. When an investor sees this hero, they should think: "This is a holding company with a portfolio. Not a startup with one product idea."

---

## SECTION 5 — HOME PAGE COPY (app/page.tsx)

### Section Labels — Change All Of These
- "The directive" → "The Opportunity"
- "The Protocol" → "How we build"
- "The Execution Core" → "What powers everything"
- "Deployed Systems" → "Our Companies"
- "Architect" → "Founder"

### Intro Statement Section
**Label:** The Opportunity
**Quote:**
> "The next decade of work is not about better tools. It is about AI that does the work."

**Supporting line:**
> "Most AI today makes people more informed. C3alabs makes people less busy. There is a line between those two things. We are building on the right side of it."

### What We Do — Three Columns
**Headline:** "We find the gap. We build the company. We scale the infrastructure."

**Column 01:**
Title: Find the gap
Body: We identify markets where AI can own entire workflows — not assist with them. The test is not whether AI can help. It is whether AI can finish. We only build in markets where finishing is possible.

**Column 02:**
Title: Build the company
Body: Each company we build operates independently — separate brand, separate team, separate market. We don't build features inside C3alabs. We build companies that stand on their own.

**Column 03:**
Title: Scale the core
Body: Every company we own runs on the same execution infrastructure. What compounds beneath the surface is what gives C3alabs an advantage that grows over time — and that no competitor can replicate by watching from the outside.

### Infrastructure Section
**Label:** What powers everything
**Headline:** "We aren't training models. We're building the layer that makes models actually work."

**Four capability items — rewrite descriptions:**

- **Persistent Context** — Knows what was executed, what was learned, and what comes next. No restarting. No re-briefing. The system carries the full history of your work.
- **Universal Navigation** — If a human can use an interface, the system can operate it. No API required. The execution engine works across tools the same way a person would.
- **Multi-step Orchestration** — Complex workflows broken into sequenced operations, each one completed before the next begins. Not suggested. Executed.
- **Self-Correcting Reliability** — When something fails, the system detects it, corrects it, and verifies the outcome before surfacing results. You only see finished work.

### Companies Preview Section
**Label:** Our Companies
**Headline:** "Two companies. One standard of execution."

**Update ProductCard descriptions:**

KARAX card:
- Category: "B2C — Personal Execution AI"
- Description: "A personal AI workspace that connects to all your tools and executes work on command. One interface replacing ChatGPT, Otter.ai, and Zapier — at 80% less cost."

SARVAX card:
- Category: "B2B — AI Agents Platform"
- Description: "Autonomous AI agents that own business roles end-to-end. HR, Sales, Ops, Support — each agent runs its function continuously, without supervision."

**CTA:** "See both companies →"  →  /products

### Founder Section
**Label:** Founder
**Name:** Sai Casula
**Role:** Founder & CEO, C3alabs
**Quote:**
> "I built C3alabs to answer one question: what if the software just finished the work?"

**Link:** "Read about C3alabs →"  →  /about

### Closing CTA Section
**Headline:**
> "If this is the kind of company you want to be part of."

**Sub:**
> "For investors who think in decades, builders who think in systems, and press who cover what's actually next."

**Buttons:**
- Primary: "Read the thesis"
- Secondary: "Get in touch"

---

## SECTION 6 — ABOUT PAGE (app/about/page.tsx)

### Page Hero
**Label:** About C3alabs
**Headline:** "We exist to build AI that executes."
**Sub:** "Not AI that assists. Not AI that suggests. AI that takes the task from start to finish — and owns the outcome."

### Company Narrative
**Label:** The story

**Paragraph 1:**
C3alabs is an AI holding company. It is not a consultancy, not an agency, and not a product studio. It is a company that builds AI companies — each one independently funded, independently operated, and independently branded, but powered by the same underlying execution infrastructure.

**Paragraph 2:**
We started with a question: if AI can reason, plan, and act — why is software still just a tool that waits for instructions? The answer is that most AI products are built around the chat interface, not around the work itself. We are building around the work.

**Paragraph 3:**
KARAX is our B2C company. One interface, all tools connected, work executed on command — for individuals. SARVAX is our B2B company. Autonomous agents that own entire business roles — for businesses that need to scale without growing headcount.

**Paragraph 4:**
Both companies are live. Both have users. Both are growing. And this is the beginning.

**Paragraph 5:**
The infrastructure that connects KARAX and SARVAX is not visible from the outside. That is the point. What scales beneath the surface is what gives C3alabs an advantage that compounds over time — and that no competitor can replicate by observing the surface.

### Mission Statement (large, centered)
> "We build AI companies."

### Principles Section
**Label:** Principles
**Headline:** "Three things we believe that most people don't."

**01 — Execution is the product.**
The value of AI is not in what it says. It's in what it does. Every company we build is measured by tasks completed, not responses generated. Metrics that don't map to finished work are noise. We don't optimize for noise.

**02 — Focus beats breadth.**
KARAX does one thing: execute work for individuals. SARVAX does one thing: deploy agents for businesses. Narrow companies win deep markets. Being everything to everyone is a strategy that produces nothing worth defending.

**03 — The infrastructure is the advantage.**
What connects our companies cannot be seen from the outside. That invisibility is intentional. The moat is in the foundation. Every company that tries to copy what we build will miss the part that actually matters.

---

## SECTION 7 — COMPANIES PAGE (app/products/page.tsx)

### Page Hero
**Label:** Portfolio
**Headline:** "Two companies.\nOne execution standard."
**Sub:** "KARAX and SARVAX are independently operated AI companies owned by C3alabs. Each serves a distinct market. Both run on the same execution infrastructure."

### KARAX Section
**Label above name:** B2C Company
**Product Name:** KARAX
**Tagline:** Personal Execution AI

**Body Paragraph 1:**
KARAX is a personal AI workspace that connects to all your tools and runs multi-step work on command. Not a chatbot. Not a copilot. A workspace that takes the task from start to finish.

**Body Paragraph 2:**
Built for founders, creators, and operators who need work done — not a more sophisticated way to be told how to do it themselves.

**Body Paragraph 3:**
The difference between KARAX and every other AI tool you've tried is simple: KARAX finishes.

**Capabilities panel label:** What KARAX does
**Panel items:**
- Connects to your email, calendar, meetings, and documents — one interface for everything
- Executes multi-step tasks without you managing each step manually
- Remembers your context across every session — you never repeat yourself
- Runs across 100+ tools without manual handoffs between them

**CTA:** "Visit karax.ai →"

### SARVAX Section
**Label above name:** B2B Company
**Product Name:** SARVAX
**Tagline:** AI Agents Platform

**Body Paragraph 1:**
SARVAX deploys autonomous AI agents directly into your business operations. Each agent owns a specific function — HR, Revenue, Ops, Support — and executes it with accountability, without supervision.

**Body Paragraph 2:**
Built for businesses of 50 to 500 people who need to scale operations without scaling headcount.

**Body Paragraph 3:**
Most companies grow by hiring more people. SARVAX is the alternative: agents that own entire roles, run them continuously, and never stop working.

**Capabilities panel label:** Agent roles
**Panel items:**
- HR Agent — conducts interviews, manages onboarding, handles compliance end-to-end
- Revenue Agent — manages pipeline, CRM updates, and outbound without a RevOps hire
- Ops Agent — handles vendor management, reporting, and scheduling autonomously
- Support Agent — resolves Tier 1 to Tier 3 tickets without human escalation

**CTA:** "Visit sarvax.ai →"

### Closing CTA
**Headline:** "Interested in what we're building?"
**Sub:** "For investors, press, and potential partners."
**Buttons:** Primary: "Read the Thesis" | Secondary: "Get in touch"

---

## SECTION 8 — TEAM PAGE (app/team/page.tsx)

> ⚠️ CRITICAL: The current team page is completely wrong. Every label needs to be replaced.
> "The Node" → "The team"
> "High-density engineers" → "Small. Intentional. Yours to join."
> "Chief Architect" → "Founder & CEO"
> "initialized C3alabs" → "founded C3alabs"
> "On Talent Density" → "On hiring"
> "ruthless talent density" → human hiring philosophy
> "Expansion Nodes" → "Where we're growing"
> "deploy your signal" → "reach out directly"
> "apex operator" → remove entirely

### Page Hero
**Label:** The team
**Headline:** "Small. Intentional. Yours to join."
**Sub:** "C3alabs is founder-led and deliberately small. Every person here was chosen for what they build, not what they claim. We grow when the right person appears — not when a headcount target says so."

### Founder Card
**Name:** Sai Casula
**Role:** Founder & CEO, C3alabs

**Bio Paragraph 1:**
Sai founded C3alabs in 2024 with a single conviction: the most valuable layer in AI is not the model — it's the execution. He leads product, strategy, and direction across KARAX and SARVAX, with full ownership of both.

**Bio Paragraph 2:**
His thesis: the companies that define the next decade are not building better language models. They are building the layer that converts model capability into finished work. That layer is largely unbuilt. C3alabs is his answer.

**Bio Paragraph 3:**
C3alabs is not a project or an experiment. It is a company built to last — designed from the first day to compound, not just grow.

**Bio Paragraph 4:** "He is the first person here. He will not be the last."

### Team Philosophy
**Label:** On hiring
**Headline:** "The team is small. We want to keep it that way for as long as possible."

**Paragraph 1:**
Every person we hire should make C3alabs meaningfully better — not just larger. We are not hiring to fill roles. We are hiring to extend the founding vision.

**Paragraph 2:**
The bar is not "good enough to hire." The bar is: does this person make the company better in a way that is irreplaceable? We are comfortable staying small until we find that. We will not lower the bar to move faster.

### Open Roles
**Label:** Where we're growing
**Headline:** "We're looking for people who build things that matter."
**Sub:** "No specific openings listed. If you're exceptional and aligned, reach out directly."

**Role categories — keep descriptions as they are, only fix the section labels.**

---

## SECTION 9 — THESIS PAGE (app/thesis/page.tsx)

> ⚠️ CRITICAL: The current thesis page uses "The Directive Thesis", "deterministic engines", "precision strike-team", "violently accelerate." Replace everything below with the clean version.

### Page Hero
**Label:** The Thesis
**Headline:** "The execution layer\nis the most important\ninfrastructure in AI."
**Sub:** "A reasoned argument for why execution — not generation — is where the next decade of AI value gets captured."

### The Five Arguments

**01 — The problem with AI today**
Every major AI product launched in the last three years is built around the same model: you type, it replies. The value is in the response. The work still falls on you.

This is not a coincidence. It is the path of least resistance. Building AI that generates is far easier than building AI that executes.

The result is a category of tools that have made people more informed but not less busy. The bottleneck has not moved. It has simply been reframed as a productivity problem — when it is, in fact, an execution problem.

**02 — The shift that's coming**
The next phase of AI adoption is not about better models. It's about AI that owns workflows.

The companies that will define the next decade are not building better chatbots. They're building systems where the AI does the job — completely, accountably, and autonomously.

This transition from AI-that-assists to AI-that-executes is not a feature update. It is a category change. The window to define that category is open right now. It will not stay open.

**03 — Why two companies**
The execution problem looks different at the individual level than at the business level. These are not the same market, the same buyer, or the same motion.

KARAX is built for the individual who wants to multiply what they can do alone. SARVAX is built for the business that wants to operate without adding headcount.

Same infrastructure. Different companies. This is not a coincidence — it is a structural advantage. Two revenue streams. One underlying investment in execution technology.

**04 — Why now**
Model capability crossed a threshold in 2023. The question is no longer whether AI can do the work. It's whether anyone is building the right system around it.

Most companies are racing to build better models. We are building the layer on top — the one that converts model capability into execution. That layer is largely unbuilt.

The first company to build a reliable execution brand — one that users and organizations depend on to actually finish work — captures a position that is structurally difficult to displace. We intend to be that company.

**05 — Why C3alabs**
We started with conviction, not capital. Both companies are live. Both have users. Both are growing without a seed round.

We are not fundraising to prove the idea. We are fundraising to accelerate what is already working.

C3alabs is a small team that moves with uncommon clarity. That is not a limitation — it is the architecture. The companies that define new categories are rarely the ones with the most capital. They are the ones that understand the problem most precisely.

"We are not the largest company working on this. We may be the most focused."

### The Invitation
**Quote:**
> "If you read this and found yourself disagreeing with something — we'd like to talk.
> If you read this and found yourself nodding — we'd especially like to talk."

**Sub:**
C3alabs is not yet backed. We are selectively speaking with investors who share a long-term, category-building perspective. We are not looking for capital to validate the idea. We are looking for partners who understand why the execution layer is the most important infrastructure bet in AI — and who want to be part of building the company that owns it.

**CTA:** "Start a conversation" → /contact?type=investor

---

## SECTION 10 — FOOTER (components/footer/Footer.tsx)

**Current slogan:** "Experience execution" — this is fine, keep it.

**Footer link groups in lib/constants.ts — update "Products" group label:**
Change label from `"Products"` to `"Companies"` in the FOOTER_GROUPS array.
The links inside (KARAX, SARVAX) stay the same.

---

## SECTION 11 — CONSTANTS FILE (lib/constants.ts)

### NAV_LINKS — Change
```
{ label: 'Products', href: '/products' }
→
{ label: 'Companies', href: '/products' }
```

### FOOTER_GROUPS — Change
```
{ label: 'Products', ... }
→
{ label: 'Companies', ... }
```

### PRODUCTS — Keep everything, just update taglines to reflect company framing:
```
karax.tagline: 'Personal Execution AI'  ← keep
sarvax.tagline: 'AI Agents Platform'    ← keep
```

---

## SECTION 12 — WHAT NOT TO TOUCH

- `HeroCanvas.tsx` — the aurora glass orb is good, keep it exactly as is
- All CSS files — no design changes
- All component structure — only text content changes
- Button hrefs / navigation links
- `ContactForm.tsx`
- `Nav.tsx` structure (only the label in constants.ts)

---

## SECTION 13 — THE TONE TEST

After making all changes, read each page out loud. Ask one question:

> "Would a serious Series A investor read this and think: these people know exactly what they're building, and this company is inevitable?"

If yes — ship it.
If a sentence feels like it's trying to impress — cut it or simplify it.
If a word sounds like startup jargon — replace it with a plain word.

The goal is not to sound impressive. The goal is to be clear. Clarity is the most impressive thing a founder can show an investor at this stage.

---

## QUICK REFERENCE — WHAT IS C3ALABS IN ONE LINE

> "C3alabs is an AI holding company. We build AI companies that execute work — for individuals (KARAX) and for businesses (SARVAX)."

---

*C3alabs Master Brief v2.0 — March 2026*
*Feed this entire document to Antigravity. It contains everything needed to update every page correctly.*
