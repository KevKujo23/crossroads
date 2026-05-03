## IMPLEMENTATION — Glossary Modal Redesign + Character Select Visual Upgrade

### CONTEXT
- Stack: React, Vite, deployed on Vercel
- Agent target: Antigrav
- Project type: Existing codebase
- Visual identity: "Enchanted Explorer" — dark forest green background, aged parchment UI panels, warm amber/gold palette, fonts: Cinzel Decorative, Cinzel, Crimson Text, Courier Prime
- Recon findings: I have completed the reconnaissance for the Glossary Modal and Character Select screen as requested in recon-greys-anthropology.md.

RECONNAISSANCE REPORT: Glossary & Character Select
1. Exact File Paths
Character Select Screen: src/components/CharacterSelect.jsx
Glossary Modal Component: src/components/FrameworkGlossary.jsx
Main Page Orchestration: src/App.jsx (handles phase routing)
Associated Data: src/data/profiles.js (final results mapping)
2. Current Framework Text (Verbatim)
Utilitarianism (U): "Originates with Bentham. Focuses on the consequences of actions, aiming for the greatest aggregate good for the greatest number. (Calculus of impact)."
Kantian Duty Ethics (K): "Immanuel Kant. Ethics based on categorical imperatives—universal duties. Humans must be treated as ends in themselves, never merely as means. Truth is a non-negotiable duty."
Personalism (P): "Emphasizes the inherent, inviolable dignity of the human person. Decisions circle back to protecting individuals and communities, motivated by justice rather than mere convenience."
Virtue Ethics (V): "Traced back to Aristotle. Focuses on the moral character of the actor rather than rules or consequences. Emphasizes moral habituation, integrity, and acting with courage even at personal cost. Note: Frequently overlaps with Personalism in practice."
3. Image Referencing Pattern
Images are imported as variables at the top of the component and then referenced as objects within the data array.

javascript
import iranJournalistImg from '../assets/iranjournalist.png';
// Used in STORYLINES array:
{ image: iranJournalistImg, ... }
Confirmed assets: iranjournalist.png, usjournalist.png, irancitizen.png, and Athena.png (used in intro overlay).

4. Modal State Management
The modal open/close state is managed locally within FrameworkGlossary.jsx using React's useState.

Trigger: A "View Framework Glossary" button sets isOpen to true.
Dismissal: An absolute-positioned &times; (X) button sets isOpen to false.
Visibility: Conditional rendering ({isOpen && ...}).
5. CSS Styling Approach
The project uses a hybrid approach:

Global Utility Classes: Classes like .dossier-card, .character-card, .fade-in, and .slide-up are used from global CSS files (index.css).
Inline Styles: Heavy use of the style prop for layout specifics (flex, positioning, margins) and z-index.
Theming: Strict adherence to CSS variables (e.g., var(--color-parchment), var(--color-gold), var(--font-choice)).
6. Patterns & Inconsistencies
Data Fragmentation: Character data is hardcoded in a STORYLINES constant inside CharacterSelect.jsx, whereas result data is centralized in src/data/profiles.js.
Animation Dissonance: The character cards use GSAP for staggered entry and hover effects, but the Glossary modal uses CSS keyframe classes (fade-in, slide-up) for its entry.
Redundancy: FrameworkGlossary is rendered in both CharacterSelect.jsx and EndScreen.jsx. Since it manages its own state, opening it in one doesn't affect the other.
7. Recommended Starting Point
I recommend centralizing the character and glossary data into the src/data directory before the build phase. This would involve:

Moving the STORYLINES array from CharacterSelect.jsx to src/data/characters.js.
Moving the framework descriptions to a JSON or JS file so they can be edited without touching the JSX.
Standardizing the animation approach if a more "premium" feel is desired for the modal (e.g., swapping CSS fades for GSAP timelines).
I am ready to move to the implementation phase whenever you are.

### OBJECTIVE
Redesign the glossary modal with improved copy and visual polish, add a background image to the character select screen, and add subtle floating animations to the character portrait cards.

---

### PHASE 0 — ORIENT
Use the recon report. Do not re-read files already covered. Confirm:
- Exact file path of the glossary modal component
- Exact file path of the character select screen
- How images are referenced (import or path string)
- CSS approach used (module, global, inline — match it exactly)

---

### PHASE 1 — INFRASTRUCTURE

Before writing any code, confirm:
- [ ] `assets/Athena.png` exists and is accessible
- [ ] Character image files confirmed: `iranjournalist.png`, `irancitizen.png`, `usjournalist.png`
- [ ] No new dependencies needed — use CSS keyframes for animation
- [ ] Existing modal open/close logic is untouched

---

### PHASE 2 — IMPLEMENTATION

#### 2A — Background Image (Character Select Screen)

In the character select screen component:
- Add `assets/Athena.png` as a full-page background image behind the existing content
- Apply it via CSS: `background-image`, `background-size: cover`, `background-position: center`, `background-attachment: fixed` (or `scroll` if fixed causes issues on mobile)
- The existing dark green background color becomes a fallback
- Add a subtle dark overlay (rgba black at ~40% opacity) so text and cards remain readable
- Do not move or restructure any existing layout elements

#### 2B — Character Card Floating Animation

In the character select screen component, add a floating animation to each character portrait image (the `<img>` tag inside each card, not the whole card):

Add this CSS keyframe (in the relevant CSS file or as a `<style>` block if inline):

```css
@keyframes floatPortrait {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
```

Apply to each portrait image:
```css
animation: floatPortrait 3s ease-in-out infinite;
```

Stagger the animation delay per card so they don't all float in sync:
- Card 1 (Nasrin): `animation-delay: 0s`
- Card 2 (Daniel): `animation-delay: 0.6s`
- Card 3 (Parisa): `animation-delay: 1.2s`

Do not animate the card container, only the portrait `<img>` element.

#### 2C — Glossary Modal Redesign

**Copy rewrite — replace all existing text with exactly the following. Do not paraphrase or alter these strings:**

Modal title: `Ethical Frameworks`

Framework 1:
- Label: `Utilitarianism (U)`
- Body: `Associated with Jeremy Bentham and John Stuart Mill. An action is right if it produces the greatest good for the greatest number of people. What matters is the outcome, not the intention. In practice, this means weighing the costs and benefits of a decision across everyone it affects.`

Framework 2:
- Label: `Kantian Duty Ethics (K)`
- Body: `Associated with Immanuel Kant. An action is right if it follows a universal moral rule, one you could expect everyone to follow. People must always be treated as ends in themselves, never as tools for someone else's goal. Honesty is a duty, not a choice.`

Framework 3:
- Label: `Personalism (P)`
- Body: `Rooted in the idea that every person has inherent dignity that cannot be taken away. Decisions must protect individuals and communities, not just serve what is convenient. Justice, not utility, is the baseline.`

Framework 4:
- Label: `Virtue Ethics (V)`
- Body: `Associated with Aristotle. The focus is on the character of the person acting, not the rules they follow or the results they produce. Good actions come from good habits built over time. Courage, honesty, and integrity matter even when they come at a personal cost. In practice this framework often overlaps with Personalism.`

**Visual redesign of the modal:**

Improve the glossary modal layout. Keep the parchment/amber visual identity but make these specific changes:

1. Each framework entry becomes a distinct card with:
   - A light parchment background (`#f5e6c8` or similar)
   - A thin amber/gold left border (`3px solid #c9a84c`)
   - Padding of `16px 20px`
   - Subtle box shadow: `0 2px 6px rgba(0,0,0,0.12)`
   - Rounded corners: `6px`

2. The framework label (e.g. "Utilitarianism (U)") stays in amber/gold, Cinzel font, slightly larger than body text

3. Body text uses Crimson Text, readable size (16px minimum), dark brown color (`#2c1a0e` or similar), line height `1.7`

4. Cards are separated by `16px` vertical gap, not a horizontal rule

5. The modal itself:
   - Max width: `560px`
   - Max height: `80vh` with `overflow-y: auto`
   - Scrollbar styled subtly if browser supports it
   - Close button (`×`) top right, amber colored

6. Modal title `Ethical Frameworks`:
   - Cinzel Decorative font
   - Amber/gold color
   - Centered, with a thin amber underline below it (border-bottom or pseudo-element)
   - Bottom margin before first card: `20px`

Do not change the modal's open/close logic, trigger button, or how it is imported elsewhere.

---

### PHASE 3 — UI/UX VALIDATION

- [ ] Background image renders on character select screen with overlay — text and cards are still fully readable
- [ ] Floating animation plays on all 3 portrait images, staggered, loops infinitely
- [ ] Animation does not affect card hover states or click behavior
- [ ] Glossary modal opens and closes as before
- [ ] All 4 framework text entries match the exact copy in Phase 2C word for word
- [ ] Modal is scrollable if content overflows viewport height
- [ ] Visual design matches parchment/amber identity
- [ ] No layout shifts on the character select screen from the background change

---

### CONSTRAINTS
- Do not touch: `storyline1.js`, `storyline2.js`, `storyline3.js`, or any chapter/game logic
- Do not rewrite or alter any story chapter text
- Do not change modal open/close logic or where the modal is rendered
- Match the existing CSS approach found in recon (do not introduce a new styling method)
- Do not change character names, roles, or storyline labels on the cards

---

### ACCEPTANCE CRITERIA
- [ ] `assets/Athena.png` is visible as background on character select, with overlay, no content obscured
- [ ] All 3 character portraits float with a vertical bob animation, staggered by 0.6s each
- [ ] Glossary modal text matches Phase 2C copy exactly — no extra dashes, no AI phrasing
- [ ] Each framework renders as a card with left gold border and shadow
- [ ] Modal scrolls correctly when content exceeds viewport
- [ ] No regressions: character selection, storyline navigation, and ending modal still work

---

### REPORT BACK
When done, tell Kevin:
1. Every file changed and what was changed in each
2. What CSS approach was used for the animation and where it lives
3. How the background image was applied and what fallback exists
4. Any decisions made that were not specified here, and why
5. Anything deferred or not possible given the current setup
6. Whether a build step is needed before deploying (`vercel --prod`)
