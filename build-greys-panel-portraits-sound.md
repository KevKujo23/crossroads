## IMPLEMENTATION — Framework Panel Fix + Character Portraits + Sound Mapping + Background Depth

### CONTEXT
- Stack: React, Vite, deployed on Vercel
- Agent target: Claude Code
- Project type: Existing codebase
- Visual identity: "Enchanted Explorer" — dark forest green background, aged parchment UI panels, warm amber/gold palette, fonts: Cinzel Decorative, Cinzel, Crimson Text, Courier Prime
- `src/animations.css` exists with all keyframes including `floatPortrait`, `fadeInScreen`, `borderGlow`, `slideInRight`
- `public/ambient.mp3` exists (rain + thunder loop, already wired to `AmbientSound.jsx`)
- Previous build partially succeeded: side panel renders but shows wrong content (generic glossary instead of choice-specific framework text + scores)

### OBJECTIVE
Fix the framework side panel to show contextual per-choice data, add floating character portraits to chapter pages, wire contextual sound effects to story events, and add cinematic depth to the background.

---

### PHASE 0 — ORIENT

Read and report before touching anything:

1. `src/data/storyline1.js`, `src/data/storyline2.js`, `src/data/storyline3.js`
   - For each choice object, find every `outcome` string that contains `"Ethical Frameworks:"`
   - Record the exact text that appears after `"Ethical Frameworks:"` for each choice in each storyline
   - Record the `scores` object for each choice
   - Record which character/profile each storyline belongs to (storyline1 = Iranian journalist Nasrin, storyline2 = US journalist Daniel, storyline3 = Iranian citizen Parisa)
   - Based on the full narrative content of each storyline, decide which sound effect fits each of these events:
     - Game start / character select
     - Chapter transition (moving to next chapter)
     - Choice A selected
     - Choice B selected
     - Ending screen reached
   - Document your sound decisions with a one-line reason for each

2. `src/data/profiles.js`
   - What image field does each profile have?
   - Confirm image filenames: iranjournalist.png, usjournalist.png, irancitizen.png

3. `src/components/Chapter.jsx`
   - How is the current chapter data passed in? (props, context, state?)
   - How is the selected choice tracked? (which state variable holds the player's last choice?)
   - How is the outcome text currently rendered?
   - Where exactly is the framework side panel currently rendered?
   - What is the exact className of the outermost wrapper and the parchment card element?
   - Is the character/profile data (including image path) accessible in this component?

4. `src/components/CharacterSelect.jsx`
   - Confirm the float animation is applied to portrait `<img>` elements via inline styles
   - Confirm `Athena.png` background is applied to the correct wrapper

5. `src/App.jsx` or routing file
   - How is the active character/profile passed down to the Chapter component?
   - Where is game state managed (which profile is selected, which chapter is active, which choice was made)?

Report all findings before writing any code.

---

### PHASE 1 — INFRASTRUCTURE

Confirm before writing feature code:
- [ ] Sound files to be placed in `public/`: `explosion.mp3`, `paper.mp3`, `click.mp3`, `static.mp3` — document clearly in report back that Kevin must supply these files
- [ ] A `useSound` hook or simple utility function will handle sound playback — no new npm packages, use HTML5 Audio API only
- [ ] Character image is accessible in `Chapter.jsx` — if not, trace how to pass it down from app state
- [ ] The framework text split (`"Ethical Frameworks:"`) works on all outcome strings across all 3 storylines — verify in Phase 0 that every outcome containing framework text uses this exact delimiter

---

### PHASE 2 — IMPLEMENTATION

Work file by file in this order:

#### 2A — `src/utils/sound.js` (create new file)

Create a simple sound utility:

```js
const sounds = {}

export function playSound(name) {
  if (!sounds[name]) {
    sounds[name] = new Audio(`/${name}.mp3`)
    sounds[name].volume = 0.5
  }
  sounds[name].currentTime = 0
  sounds[name].play().catch(() => {})
}
```

Do not add any other logic here.

#### 2B — `src/data/storyline1.js`, `src/data/storyline2.js`, `src/data/storyline3.js`

**Do not rewrite or alter any narrative text.**

For every choice object that has an `outcome` string containing `"Ethical Frameworks:"`:
- Split the string on `"Ethical Frameworks:"` 
- Store the narrative part (before the split) back in `outcome`
- Store the framework commentary (after the split, trimmed) in a new field: `frameworkContext`

Example transformation:
```js
// BEFORE
{
  outcome: "You published the story...\n\nEthical Frameworks:\n- Utilitarianism: Prioritizes stability.",
  scores: { U: 1, K: 0, P: 0, V: 0 }
}

// AFTER
{
  outcome: "You published the story...",
  frameworkContext: "- Utilitarianism: Prioritizes stability.",
  scores: { U: 1, K: 0, P: 0, V: 0 }
}
```

Apply this to every qualifying choice across all 3 storyline files. Do not touch any other fields.

#### 2C — `src/components/Chapter.jsx`

**Fix the framework side panel content:**

The panel must show — for the player's current chosen option:
1. The `frameworkContext` string from the chosen choice object, rendered as a styled list (split on `\n`, render each line as a paragraph or list item, strip leading `- `)
2. The `scores` object rendered visually — each framework letter (U, K, P, V) shown with its score value, styled as small amber badge/pill elements
3. A header: `"Ethical Analysis"` in Cinzel font, amber color
4. Do NOT show the generic glossary definitions here

The panel must NOT show when no choice has been made yet (i.e. before the player picks A or B on the current chapter).

The "View Frameworks" button must only appear after a choice is made on that chapter. Before a choice is made, hide the button entirely.

Panel layout (existing slide-in structure stays — only content changes):
```jsx
<div className="framework-side-panel">
  <button onClick={() => setFrameworkOpen(false)}>✕ Close</button>
  <h3 style={{ fontFamily: 'Cinzel', color: '#c9a84c' }}>Ethical Analysis</h3>
  
  {/* Score badges */}
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
    {Object.entries(selectedChoice.scores).map(([key, val]) => (
      <span key={key} style={{
        background: val > 0 ? '#c9a84c' : 'rgba(255,255,255,0.1)',
        color: val > 0 ? '#1a0e00' : '#888',
        padding: '4px 10px',
        borderRadius: '20px',
        fontFamily: 'Cinzel',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {key}: {val}
      </span>
    ))}
  </div>

  {/* Framework context lines */}
  {selectedChoice.frameworkContext
    .split('\n')
    .filter(line => line.trim())
    .map((line, i) => (
      <p key={i} style={{
        fontFamily: 'Crimson Text',
        fontSize: '15px',
        color: '#2c1a0e',
        lineHeight: '1.6',
        marginBottom: '10px',
        paddingLeft: '8px',
        borderLeft: '2px solid #c9a84c'
      }}>
        {line.replace(/^-\s*/, '')}
      </p>
    ))
  }
</div>
```

**Add character portrait to chapter page:**

The character's portrait image must float to the left of the parchment card, outside it, vertically centered alongside the card.

- The character's image path must come from the active profile (passed via props or context — use whatever is available from Phase 0 findings)
- Add this portrait element as a sibling to the parchment card, inside the outermost flex wrapper:

```jsx
<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0px',
  position: 'relative',
}}>
  {/* Character portrait — left side */}
  <div style={{
    width: '180px',
    minWidth: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '-20px', // slight overlap with card for depth
    zIndex: 2,
  }}>
    <img
      src={characterImage}
      alt={characterName}
      style={{
        width: '160px',
        height: 'auto',
        animation: 'floatPortrait 3s ease-in-out infinite',
        animationDelay: '0s',
        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
      }}
    />
  </div>

  {/* Parchment card — existing content unchanged */}
  <div className="[existing card className]">
    {/* all existing chapter content */}
  </div>

  {/* Framework side panel — existing, unchanged */}
  {frameworkOpen && <div className="framework-side-panel">...</div>}
</div>
```

- On screens narrower than 768px, hide the portrait (`display: none`) so mobile layout is not broken
- Do not alter any existing content inside the parchment card

**Wire sound effects to chapter events:**

Import `playSound` from `src/utils/sound.js`.

Trigger sounds at these moments (use the sound decisions documented in Phase 0):
- When a choice button is clicked (before processing the choice): `playSound('click')`
- When the chapter transitions to the next chapter: play the sound decided in Phase 0 for chapter transition
- Any other per-choice sounds decided in Phase 0 — trigger them in the choice handler, after `playSound('click')`

Do not block the choice handler — sound plays fire-and-forget via `.catch(() => {})`.

#### 2D — `src/components/CharacterSelect.jsx`

Wire sound to character card click:
- Import `playSound`
- On character card click: `playSound('click')`

#### 2E — `src/App.jsx` or root routing component

Wire sound to game start:
- Import `playSound`  
- On game mount or first interaction (whichever is cleaner): play the game-start sound decided in Phase 0

Wire sound to ending screen:
- When the ending screen is reached, play the ending sound decided in Phase 0

#### 2F — Background depth on character select screen

The current background is `Athena.png` with a dark overlay. Add cinematic layered depth on top:

In `CharacterSelect.jsx`, add these layered elements as absolutely positioned children inside the background wrapper (behind all content, `zIndex: 0`):

```jsx
{/* Vignette overlay */}
<div style={{
  position: 'absolute', inset: 0,
  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
  zIndex: 1, pointerEvents: 'none'
}} />

{/* Top atmospheric fade */}
<div style={{
  position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
  zIndex: 1, pointerEvents: 'none'
}} />

{/* Bottom atmospheric fade */}
<div style={{
  position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
  zIndex: 1, pointerEvents: 'none'
}} />
```

Ensure all actual content (title, cards, background text) has `position: relative` and `zIndex` above 1.

---

### PHASE 3 — UI/UX VALIDATION

- [ ] Framework side panel only appears after a choice is made
- [ ] "View Frameworks" button is hidden before any choice is made on that chapter
- [ ] Panel shows `frameworkContext` lines with gold left border, not generic glossary text
- [ ] Panel shows score badges (U, K, P, V) with amber highlight for scores > 0
- [ ] All 3 storyline files have `frameworkContext` split correctly — no framework text remains inside `outcome`
- [ ] Character portrait floats to the left of the parchment card on chapter pages
- [ ] Portrait is hidden on screens narrower than 768px
- [ ] `playSound('click')` fires on choice selection and character card click
- [ ] Chapter transition sound fires correctly
- [ ] Sound files are documented for Kevin to place in `/public/`
- [ ] Vignette and atmospheric overlays visible on character select screen
- [ ] No regressions: scoring, alignment tracking, ending screen, glossary modal all still work

---

### CONSTRAINTS
- Do not rewrite any narrative text inside `outcome` — only split and relocate the framework section
- Do not alter choice `scores` objects
- Do not install any npm packages
- Do not change the modal open/close logic
- Do not touch `FrameworkGlossary.jsx` — the glossary modal stays as-is, the side panel is separate
- Match existing CSS approach per file

---

### ACCEPTANCE CRITERIA
- [ ] Framework side panel shows choice-specific analysis, not generic definitions
- [ ] Score badges render correctly for every choice across all 3 storylines
- [ ] No `"Ethical Frameworks:"` text appears inside any rendered outcome narrative
- [ ] Character portrait visible and floating left of parchment card on chapter pages
- [ ] Portrait hidden on mobile (< 768px)
- [ ] At least `click.mp3` triggers on choice selection (others depend on Kevin supplying files)
- [ ] Background depth layers visible on character select screen
- [ ] `npm run build` passes with zero errors
- [ ] `vercel --prod` deploys successfully

---

### REPORT BACK
When done, tell Kevin:
1. Every file created or changed with a one-line summary
2. The exact sound decisions made per event (game start, chapter transition, choice A, choice B, ending) with reasoning
3. The full list of `.mp3` filenames Kevin needs to place in `/public/` — one line per file with what it should sound like
4. Which choices across all 3 storylines had `frameworkContext` extracted (list them)
5. How the character image was passed into `Chapter.jsx`
6. Any deferred items or edge cases found
7. Whether `npm run build` passed cleanly
