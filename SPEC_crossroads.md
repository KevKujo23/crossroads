# Project Spec: "Crossroads"
> Interactive Ethical Story Game — Development Specification for Antigrav

---

## 1. Project Overview

An interactive branching narrative web game titled **"Crossroads"** — about journalism, censorship, and moral decision-making. The player selects one of three characters, progresses through chapters with choices, and receives a full ethical profile at the end. All state is client-side. No backend required.

The title "Crossroads" must appear on the landing screen as the primary game title in large, ornate display typography. Do not use "The Cost of Truth" anywhere in the UI.

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React + Vite |
| Styling | CSS Modules or plain CSS with CSS variables |
| State | React Context API + `useReducer` |
| Persistence | `localStorage` (optional, for refresh recovery) |
| Deployment | GitHub Pages via `gh-pages` OR Vercel (zero config) |

### GitHub Pages Setup
- Set `"homepage"` in `package.json`
- Set `base` in `vite.config.js` to match repo name
- Deploy with `npm run deploy` using `gh-pages` package

### Vercel Setup
- Connect GitHub repo
- Framework preset: Vite
- No additional configuration needed

---

## 3. Visual & Aesthetic Direction

**Style: Enchanted Explorer** — The world of this game lives at the intersection of a deep, atmospheric forest and a worn explorer's field journal. Think: ancient forest canopy as the backdrop, aged parchment as the UI surface, compass and map motifs as decorative language, glowing particles as ambient atmosphere.

### Visual Reference Summary
Four reference images were provided by the client:
1. **Lush enchanted meadow** — deep greens, layered tree depth, glowing blue butterflies, soft light filtering through canopy, magical but naturalistic
2. **Forest clearing with glowing title** — cinematic depth, firefly-like light orbs, massive ornate script title rendered in glowing green, mushrooms, vines, path leading into distance
3. **Pixel-art enchanted forest** — illustrated style, warm golden butterflies, fairy/sprite light, worn signpost props ("Almost There / Not Too Far"), ornate cursive title treatment
4. **Campus Treasure Hunt poster** — aged torn parchment card as the central UI surface, compass rose, magnifying glass, warm amber/sepia tones, bold adventure title typography with outline and shadow treatment

### Unified Direction
- **World layer (background):** Deep enchanted forest — layered tree silhouettes, rich dark greens and near-blacks, atmospheric fog/mist at ground level, animated glowing particles (fireflies/light orbs floating slowly upward), soft warm light bleeding in from a clearing path
- **UI layer (foreground cards):** Aged parchment — warm cream/sepia tone, torn or rough edges on cards, subtle stain/age texture, compass rose as a watermark or corner motif on chapter cards
- **Typography:** Ornate cursive/script for the game title "Crossroads"; bold adventure serif (with outline or shadow) for chapter titles; clean aged serif for body/narrative text; monospace for choice buttons
- **Accent colors:** Warm amber gold (#c9a84c), forest green glow (#4a8c3f or as a light bloom), aged parchment (#e2d5a0), deep forest dark (#0d1a0f or #111a10)
- **Atmosphere:** Not horror, not whimsical — mythic and serious. The forest is real, the stakes are real. The magic is in the light, not in cartoon elements.

### Design Tokens (CSS Variables)
```css
:root {
  /* World / Background */
  --color-bg-deep: #0a1208;
  --color-bg-forest: #0f1f10;
  --color-bg-mid: #162318;
  --color-mist: rgba(180, 210, 170, 0.06);

  /* UI Surface (Parchment) */
  --color-parchment: #e8d9a0;
  --color-parchment-dark: #c9bc80;
  --color-ink: #2a1f0e;
  --color-ink-faded: #5a4a30;

  /* Accents */
  --color-gold: #c9a84c;
  --color-gold-glow: rgba(201, 168, 76, 0.4);
  --color-forest-glow: rgba(100, 200, 80, 0.15);
  --color-particle: rgba(220, 255, 180, 0.7);

  /* Borders */
  --color-border-parchment: rgba(180, 150, 80, 0.5);
  --color-border-forest: rgba(80, 140, 60, 0.3);

  /* Typography */
  --font-display: 'Cinzel Decorative', 'Playfair Display', serif;   /* Game title "Crossroads" */
  --font-chapter: 'Cinzel', 'Trajan Pro', serif;                    /* Chapter titles */
  --font-body: 'Crimson Text', 'EB Garamond', serif;                /* Narrative body text */
  --font-choice: 'Courier Prime', 'Courier New', monospace;         /* Choice buttons */

  /* Motion */
  --transition-slow: 600ms ease;
  --transition-med: 350ms ease;
  --transition-fast: 180ms ease;

  /* Radii */
  --radius-card: 6px;
  --radius-btn: 3px;
}
```

### Google Fonts to Import
```
Cinzel Decorative (weights: 400, 700)
Cinzel (weights: 400, 600)
Crimson Text (weights: 400, 400i, 600)
Courier Prime (weights: 400, 700)
```

### Specific UI Rules

**Landing / Title Screen**
- Full-viewport background: layered forest scene using CSS (deep dark base, mid-tone tree silhouettes as pseudo-elements or SVG overlay, light fog layer at bottom)
- Animated floating particles: 15–25 small glowing dots drifting upward slowly using CSS keyframes, randomized speed and opacity
- "Crossroads" title: rendered large and centered, using `--font-display`, gold color with a soft green glow bloom behind it (text-shadow or filter: drop-shadow)
- Subtitle below: small italic serif — *"Every story begins with a choice."*
- Start button: parchment-colored pill or rectangle, ink-colored text, compass rose icon left of text

**Chapter Cards**
- Card background: `--color-parchment` with a CSS noise texture overlay (use `filter: url(#noise)` SVG filter or a repeating PNG grain at 3–5% opacity)
- Torn/rough top and bottom edge: use SVG clip-path or a jagged border-image to simulate torn paper
- Faint compass rose watermark in bottom-right corner of each card at 6% opacity
- Chapter number: small caps, spaced, gold — e.g. `CHAPTER I`
- Chapter title: `--font-chapter`, dark ink, larger weight
- Narrative text: `--font-body`, ink-faded, 1.75 line-height, comfortable reading width (max 65ch)

**Choice Buttons**
- Background: slightly darker parchment (`--color-parchment-dark`) on hover; transparent at rest
- Border: 1px solid `--color-border-parchment`
- Font: `--font-choice`, ink color
- Left side: choice label (A / B / C) in a small stamped box — dark background, gold or parchment text
- Hover state: warm gold left border accent (3px), subtle background shift, no scale transforms
- Disabled state (before typewriter completes): 40% opacity, cursor not-allowed

**Character Select Screen**
- Three parchment cards side by side (stack on mobile), each representing a storyline
- Each card has: a small decorative icon (compass for US journalist, eye/lens for Iranian journalist, protest silhouette for civilian), the character name, and a 1-sentence description
- Hover: card lifts slightly (translateY -4px), gold border brightens

**End Screen**
- Parchment surface fills the viewport
- Title: "Your Crossroads Profile" in `--font-chapter`
- Score bars: horizontal bars on parchment, filled with forest green for U, gold for K, warm red-brown for P
- Profile label: large, centered, ornate — in `--font-display`
- Profile description: centered italic body text
- Choices recap: small monospace list, left-aligned, like typed field notes

**Particles (Ambient Background)**
- Implement as absolutely-positioned `<div>` elements or `<canvas>` layer behind all UI
- 20 particles, each: 3–6px circle, `--color-particle`, blurred (filter: blur(1px))
- Animate: float upward 80–120vh over 8–14 seconds, fade in at bottom, fade out at top
- Randomize: starting X position, animation duration, delay, size
- Do NOT use a heavy canvas library — pure CSS keyframes or lightweight vanilla JS is sufficient

---

## 4. Animations & Transitions

| Element | Behavior |
|---|---|
| Ambient particles | Continuously float upward, randomized speed/position, always present on all screens |
| Landing title "Crossroads" | Fades in with green glow bloom expanding behind it (0 → full over 1200ms) |
| Chapter narrative text | Typewriter effect, ~35ms per character, on parchment card |
| Choice buttons | Appear staggered (150ms apart) only after typewriter completes, fade-in from below |
| Chapter title | Fades in with slight upward drift (translateY -8px → 0, 400ms) before text begins |
| Chapter transitions | Parchment card fades out (300ms), forest background briefly visible, new card fades in (400ms) |
| Character select cards | Staggered fade-in on mount (0ms, 100ms, 200ms delays) |
| End screen | Full parchment surface fades in, then profile elements reveal sequentially |
| Score bars | Animate width from 0 to final value on reveal (700ms ease-out, staggered per bar) |
| Card hover (character select) | translateY -4px, 200ms ease, gold border brightens |
| Choice button hover | Left border slides in (width 0 → 3px), background warms, 150ms ease |

**Skippable typewriter:** clicking or tapping anywhere on the card during typewriter playback instantly reveals the full text and shows choice buttons.

---

## 5. Application Flow

```
Landing / Title Screen
        ↓
Character Select (3 options)
        ↓
Chapter 1 → Narrative Text → Choices → Player Picks
        ↓
Chapter 2 ... N (varies per storyline)
        ↓
End Screen → Ethical Summary
```

---

## 6. Storylines

### 6.1 Storyline 1 — Iranian Journalist

7 chapters. Each chapter has 2 choices (A or B).

---

**Introduction**

> You are an Iranian journalist. Government authorities respond with force. Basic information becomes unstable — connections fail, content disappears, and narratives shift depending on who controls them. What the people see is no longer always what is true. While ethically, your job is to stay as factual as possible. However, due to the system, truth has a cost and could potentially damage someone.

---

**Chapter 1: The Footage**

Late at night, a message from an unknown number — no name, no context — sends you a video. As you press play: a residential area, damaged. Civilians injured. The camera shakes as the person filming whispers, "They bombed us… they bombed us." Then a second message appears: "Please. Show the world." You check the file and realize the metadata is still intact. If you publish this, authorities could trace the source. Doing your job to report this casualty might come at the cost of someone else's safety.

- **A — Publish the footage:** You upload it through your contacts. Within hours, it spreads. International outlets begin picking it up. The narrative shifts — this is no longer rumor, it's evidence. Then, days later, you hear: someone has been arrested. You don't know if it's the source. But you suspect it is.
- **B — Do not publish:** The footage stays with you. Unseen. Unverified. Unshared. No one challenges it.

---

**Chapter 2: The Blackout**

The internet shuts down without warning. You cannot send messages, videos won't load, no communication. Rumors spread that some journalists are bypassing restrictions using illegal satellite tools and other systems. If you try, you risk being tracked.

- **A — Bypass the blackout:** You find a way through contacts, through risk. You send reports out. Your stories begin appearing internationally again. Then one day, your device glitches. A notification appears briefly — unknown access. You realize: they may have found you.
- **B — Comply with the blackout:** You stop trying. Days and weeks pass. State media becomes the only narrative.

---

**Chapter 3: The Warning**

You receive a message: "We are aware of your activities." You think of other journalists detained for doing exactly what you're doing. You are not told what to do. But you understand.

- **A — Continue independent reporting:** You keep going. But every move is watched. You need to avoid certain streets. It lessens your quality of reporting in real time.
- **B — Align with authorities:** You accept subtle guidance. Your stories are approved. You gain access again. You are safer.

---

**Chapter 4: Erasure**

You notice it gradually: posts vanish, videos disappear, entire events are gone. But you saved copies. You are now holding evidence that no longer officially exists.

- **A — Preserve the evidence:** You store everything — hidden drives, secure transfers. You are no longer just a journalist, but an archive.
- **B — Let it be erased:** You delete the files. You tell yourself it's safer. And it is.

---

**Chapter 5: Privileged Access**

An offer is made — official access and protection — but all you have to do is cooperate.

- **A — Reject the offer:** You decline. Less reach, but you remain independent.
- **B — Accept the offer:** You gain everything: speed, reach, visibility in reporting.

---

**Chapter 6: Global Attention**

The world is watching now. But they want clarity. They want to know who is right and who is wrong.

- **A — Stay authentic:** Your work remains complex, nuanced, real. But it doesn't spread as far.
- **B — Shape the narrative:** You simplify. Your stories go viral. But they are no longer complete.

---

**Final Chapter: What Remains**

You are no longer just reporting. You are choosing what survives.

- **A — Protect the truth:** You are arrested. Or forced into hiding. Your work survives. You become part of the story. *Ending: THE WITNESS*
- **B — Protect your life and career:** You remain. You continue working. But differently. *Ending: THE SURVIVOR*

---

### 6.2 Storyline 2 — US-Based Journalist

3 decision points. Each has 3 choices (A, B, C).

---

**Introduction**

> A U.S.-based journalist covering the US-Iran conflict. Experienced but not yet fully independent — still reliant on institutional access, editorial approval, and public credibility.

---

**Decision 1**

You have documented proof that Pentagon statements contradict on-the-ground reality. Publishing will cost your access. Holding it protects your position to report future stories.

- **A:** Publish now. The public benefit of this specific truth during an active conflict outweighs the long-term value of your access. More people are served by this story than by your hypothetical future stories.
- **B:** Publish from duty, not calculation. Withholding verified truth to protect your career fails universalizability — if every journalist did this, the press would be structurally incapable of accountability. Publish because it's your duty, not because you've run the numbers.
- **C:** Before publishing, return to the people whose testimony forms the basis of the story. Confirm they understand what comes next. Their dignity demands they be participants in the story's telling, not sources already extracted.

---

**Decision 2**

Your editor asks you to soften accurate language in a follow-up investigation. "We need to be careful," they say.

- **A:** Soften slightly. A story that runs with minor framing adjustments reaches more people than one that gets killed. Partial truth published beats perfect truth unpublished.
- **B:** Refuse. Softening accurate language to reduce institutional friction means acting from fear, not duty. The motivation is wrong. You cannot will a world where all journalists adjust truth under editorial pressure.
- **C:** Ask who the softening serves. If it protects vulnerable sources, it may be justified. If it protects institutional relationships, it turns the people the story is about into instruments of your career. Push back on that specific basis.

---

**Decision 3**

A government insider offers to confirm your investigation on background. It breaks the story definitively — but puts them at serious legal risk. They say they want to help.

- **A:** Use it. The public benefit of a fully confirmed story during an active conflict outweighs the risk to one person who has voluntarily offered to take that risk.
- **B:** Use only what they can provide without endangering themselves. A person's willingness to help does not license using them until they suffer for it. The maxim fails universalizability.
- **C:** Have a full, unhurried conversation. Don't accept their offer at face value. Explain exactly what legal risk means in concrete terms. Their dignity demands more than consent — it demands genuine understanding.

---

### 6.3 Storyline 3 — Civilian: "To Speak or To Survive"

5 decision points. Each has 3 choices (A, B, C).

---

**Introduction**

> You are not a journalist. You are a civilian watching your city fracture. You have a phone, a conscience, and a choice.

---

**Scenario 2: The Video**

You receive a video from a friend. It shows a protest turning violent. Faces are visible. Voices are clear. At the end, there's a message: "Share this. People need to see." You know posting it could spread awareness. You also know it could expose the people in it.

- **A — Don't share it at all:** No additional risk is created. But the video stays limited. Fewer people know what's happening. You wonder if silence is protecting — or hiding the truth.
- **B — Share it privately (trusted people only):** The information spreads — but in a controlled way. You reduce risk, but also limit impact. You're helping — but not fully.
- **C — Post it publicly:** The video spreads widely. More people see what's happening. But those in the video may now be at risk. You helped expose the truth — but may have exposed people too.

---

**Scenario 3: A Friend Gets Arrested**

The next day, you hear that someone you know was taken. No one knows where they are. People start whispering, sharing names, asking questions. You're asked: "Do you know anything?"

- **A — Say nothing:** You stay safe. But you don't help find answers. You feel like you're protecting yourself — but leaving others behind.
- **B — Ask around quietly:** You gather small pieces of information. You help a little — but stay careful. You are involved, but not exposed.
- **C — Speak up publicly about it:** More people become aware. But your name is now attached to the situation. You risk being watched, questioned, or targeted.

---

**Scenario 4: Your Family Intervenes**

Your parents find out protests are happening nearby. They sit you down. "Stay out of it. It's not worth it." They're not angry. They're scared.

- **A — Agree and promise to stay away:** Tension at home decreases. You stay safe. But you feel like you gave something up.
- **B — Stay vague and avoid the conversation:** You avoid immediate conflict. But trust becomes unclear. You're not fully honest — but not fully dishonest either.
- **C — Be honest and say you want to be involved:** The conversation becomes emotional. Your family becomes more worried. You stand your ground — but increase tension and concern.

---

**Scenario 5: The Next Protest**

Another protest is planned. Bigger this time. More attention. More risk. You already know what it's like. This isn't your first decision anymore.

- **A — Stop getting involved completely:** You step back. Life becomes quieter again. But you feel more distant from what's happening.
- **B — Stay involved quietly:** You continue helping in small ways. You reduce risk — but also limit your impact. You stay in the middle.
- **C — Fully commit to joining again:** You become more deeply involved. You take on greater risk. But you are clear about where you stand.

---

**Final Decision: The Journalist**

A journalist wants you to speak on record — your name, your face — about what you've witnessed. It could amplify everything. It will also make you a target.

- **A:** Speak. Your testimony attached to your real identity carries more credibility and therefore more aggregate impact than anonymous accounts. The global benefit outweighs your personal risk.
- **B:** Before deciding, ask yourself honestly why you want to. If from duty — because the truth demands a witness and you are one — then speak. If from guilt or the desire to feel you did something, examine that first.
- **C:** Demand answers from the journalist before agreeing. How will they protect you? Who else is speaking? What do they owe you as a person and not just a source? Your dignity is not a resource for their story.

---

## 7. Scoring System

Track scores across three frameworks: **Utilitarianism (U)**, **Kantian Ethics (K)**, **Personalism (P)**.

Each choice awards points to one or more frameworks.

### Scoring Map — Storyline 1 (Iranian Journalist)

| Chapter | Choice | U | K | P |
|---|---|---|---|---|
| Ch1 | A — Publish | 1 | 1 | 0 |
| Ch1 | B — Don't publish | 0 | 0 | 1 |
| Ch2 | A — Bypass | 1 | 1 | 1 |
| Ch2 | B — Comply | 0 | 0 | 0 |
| Ch3 | A — Continue | 1 | 1 | 1 |
| Ch3 | B — Align | 0 | 0 | 0 |
| Ch4 | A — Preserve | 1 | 1 | 1 |
| Ch4 | B — Erase | 0 | 0 | 0 |
| Ch5 | A — Reject | 1 | 1 | 1 |
| Ch5 | B — Accept | 1 | 0 | 0 |
| Ch6 | A — Authentic | 0 | 1 | 1 |
| Ch6 | B — Shape | 1 | 0 | 0 |
| Final | A — Protect truth | 0 | 1 | 1 |
| Final | B — Protect self | 1 | 0 | 0 |

### Scoring Map — Storyline 2 (US Journalist)

| Decision | Choice | U | K | P |
|---|---|---|---|---|
| D1 | A | 1 | 0 | 0 |
| D1 | B | 0 | 1 | 0 |
| D1 | C | 0 | 0 | 1 |
| D2 | A | 1 | 0 | 0 |
| D2 | B | 0 | 1 | 0 |
| D2 | C | 0 | 0 | 1 |
| D3 | A | 1 | 0 | 0 |
| D3 | B | 0 | 1 | 0 |
| D3 | C | 0 | 0 | 1 |

### Scoring Map — Storyline 3 (Civilian)

| Scenario | Choice | U | K | P |
|---|---|---|---|---|
| S2 | A — Don't share | 1 | 0 | 1 |
| S2 | B — Share privately | 0 | 0 | 1 |
| S2 | C — Post publicly | 0 | 1 | 1 |
| S3 | A — Say nothing | 1 | 0 | 0 |
| S3 | B — Ask quietly | 0 | 0 | 1 |
| S3 | C — Speak publicly | 0 | 1 | 1 |
| S4 | A — Agree | 1 | 0 | 1 |
| S4 | B — Stay vague | 0 | 0 | 0 |
| S4 | C — Be honest | 0 | 1 | 1 |
| S5 | A — Stop | 1 | 0 | 1 |
| S5 | B — Quietly | 0 | 0 | 1 |
| S5 | C — Commit | 0 | 1 | 1 |
| Journalist | A | 1 | 0 | 0 |
| Journalist | B | 0 | 1 | 0 |
| Journalist | C | 0 | 0 | 1 |

---

## 8. End Screen — Ethical Profile

Display after the final choice.

### Sections

1. **Choices Recap** — list each chapter label and the choice made (A/B/C label only, one line each)
2. **Score Visualization** — animated horizontal bar chart showing U / K / P scores as proportional bars
3. **Dominant Profile Label** — determined by highest score

### Profile Labels

| Condition | Label | Description |
|---|---|---|
| U highest | **The Consequentialist** | *"You weigh impact above all. Truth is a tool; the outcome is the measure."* |
| K highest | **The Kantian** | *"You hold to duty. Truth is not negotiable, whatever the cost."* |
| P highest | **The Personalist** | *"You see people first. Every decision circles back to the dignity of the individual."* |
| U + K tied | **The Pragmatic Idealist** | *"You believe in duty, but you count the cost. Neither principle alone satisfies you."* |
| U + P tied | **The Protective Utilitarian** | *"You seek the greatest good, but you never forget the faces behind the numbers."* |
| K + P tied | **The Kantian-Personalist** | *"You hold truth and dignity together, refusing to let either be reduced."* |
| All three tied | **The Undecided** | *"You carry all three frameworks without resolution. Perhaps that is its own answer."* |

4. **Ethical Reflection Paragraph** — 2–3 sentences contextualizing the profile given which storyline was played. Write one reflection variant per storyline per profile (3 storylines × 7 profile outcomes = 21 total short paragraphs — implement as a lookup object in the data layer).

---

## 9. Component Structure

```
/src
  /components
    CharacterSelect.jsx      — Storyline picker screen
    Chapter.jsx              — Renders chapter narrative + choice buttons
    ChoiceButton.jsx         — Individual choice option
    TypewriterText.jsx       — Animated text reveal component
    EndScreen.jsx            — Full ethical summary display
    ScoreBar.jsx             — Animated score bar per framework
    TransitionWrapper.jsx    — Fade transition between screens
  /data
    storyline1.js            — Iranian Journalist chapter data
    storyline2.js            — US Journalist decision data
    storyline3.js            — Civilian scenario data
    scoringMap.js            — Score lookup per storyline/choice
    profiles.js              — Profile labels + reflection paragraphs
  /context
    GameContext.jsx          — Global state: currentStoryline, currentChapter, scores, choices
  App.jsx
  main.jsx
  index.css                  — CSS variables + global reset
```

---

## 10. Data Shape

### Chapter Object
```js
{
  id: "ch1",
  title: "Chapter 1: The Footage",
  narrative: "Late at night, a message from an unknown number...",
  choices: [
    {
      label: "A",
      text: "Publish the footage",
      outcome: "You upload it through your contacts. Within hours...",
      scores: { U: 1, K: 1, P: 0 }
    },
    {
      label: "B",
      text: "Do not publish",
      outcome: "The footage stays with you. Unseen. Unverified. Unshared.",
      scores: { U: 0, K: 0, P: 1 }
    }
  ]
}
```

### Game State Shape
```js
{
  storyline: null,           // "iranian" | "us" | "civilian"
  currentChapterIndex: 0,
  choices: [],               // Array of { chapterId, label, scores }
  scores: { U: 0, K: 0, P: 0 },
  phase: "select"            // "select" | "playing" | "end"
}
```

---

## 11. Notes for Developer

- Typewriter effect must be skippable (click/tap to reveal full text instantly)
- Choice buttons must be disabled until typewriter completes (or is skipped)
- Outcome text (result of a choice) should also use typewriter effect before advancing
- All narrative text is already written above — do not paraphrase or alter it
- Visual reference images will be supplied by the client separately — leave aesthetic flexible via CSS variables
- Accessibility: ensure keyboard navigation works for choices; add `aria-live` region for typewriter text
- Mobile-first layout: card-based, full-viewport chapters, large tap targets for choices
