## IMPLEMENTATION — Full Visual & Animation Overhaul (Grey's Anthropology)

### CONTEXT
- Stack: React, Vite, deployed on Vercel
- Agent target: Antigrav
- Project type: Existing codebase
- Visual identity: "Enchanted Explorer" — dark forest green background, aged parchment UI panels, warm amber/gold palette, fonts: Cinzel Decorative, Cinzel, Crimson Text, Courier Prime
- Previous attempt notes: The last build applied changes to `.intro-athena-overlay` which does not correspond to the actual character select screen. The float animation was added but never visually applied. This prompt corrects and replaces that work.

### OBJECTIVE
Make every screen of the game feel cinematic, emotionally engaging, and visually alive through animations, transitions, layered design, ambient sound, and interactive feedback — without touching any story logic or content.

---

### PHASE 0 — ORIENT

Before making any changes, read and report on:

1. `src/components/CharacterSelect.jsx` — identify:
   - The exact JSX element that wraps the full character select screen (the outermost div or section)
   - The exact `className` or element that holds the background (not `.intro-athena-overlay` — find the real one)
   - The exact `<img>` element for each character portrait and its current `className`
   - How character data flows in (from `profiles.js` or hardcoded)

2. `src/index.css` or any global CSS file — identify:
   - What class currently controls the background of the character select screen
   - Whether `floatPortrait` keyframe already exists (remove it if it does — we rewrite it here)
   - What transition or animation classes already exist globally

3. The chapter page component (likely `StoryPage.jsx`, `ChapterPage.jsx`, or similar — find it):
   - The exact outermost wrapper className
   - Where the narrative text renders
   - Where the choice buttons render
   - Where "View Alignment" button renders
   - Where the ethical frameworks text currently renders (the plain list)

4. The alignment/result component (what renders after a choice is made):
   - File name and className of its wrapper

5. The ending screen component:
   - File name and className of its wrapper

6. `src/components/FrameworkGlossary.jsx`:
   - Confirm current state after last build (card layout applied or not)

7. Any existing audio setup — confirm whether there is any `<audio>` element or Howler/Tone.js already present

Report all findings before touching any code.

---

### PHASE 1 — INFRASTRUCTURE

Confirm before writing feature code:
- [ ] `src/assets/Athena.png` is importable as a module in JSX (use `import athenaBg from '../assets/Athena.png'` pattern)
- [ ] No audio library is needed — use the HTML5 `<audio>` API with a looping ambient track. Source file: if no audio exists in assets, use a royalty-free ambient URL or create a placeholder and document it clearly
- [ ] All animations are CSS keyframes only — no new npm packages
- [ ] A single shared CSS file (or a new `animations.css`) will house all keyframes — import it in `main.jsx` or `App.jsx`
- [ ] The slide-out framework panel on the chapter page requires local React state — confirm the chapter component can hold state

---

### PHASE 2 — IMPLEMENTATION

Work file by file in this order:

#### 2A — `src/animations.css` (create new file)

Create this file and import it in `main.jsx` or `App.jsx`. Define all keyframes here:

```css
/* Portrait float */
@keyframes floatPortrait {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Screen fade-in on mount */
@keyframes fadeInScreen {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Choice button pulse on hover */
@keyframes choicePulse {
  0%   { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.5); }
  70%  { box-shadow: 0 0 0 10px rgba(201, 168, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
}

/* Shake on hover for choice buttons */
@keyframes choiceShake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-3px); }
  40%       { transform: translateX(3px); }
  60%       { transform: translateX(-2px); }
  80%       { transform: translateX(2px); }
}

/* Panel slide in from right */
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

/* Panel slide out to right */
@keyframes slideOutRight {
  from { transform: translateX(0);    opacity: 1; }
  to   { transform: translateX(100%); opacity: 0; }
}

/* Ambient star twinkle (for background dots) */
@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.4); }
}

/* Glow pulse for decorative borders */
@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 6px rgba(201, 168, 76, 0.3); }
  50%       { box-shadow: 0 0 18px rgba(201, 168, 76, 0.7); }
}
```

#### 2B — `src/components/CharacterSelect.jsx`

**Background image — correct the previous failed attempt:**
- Import Athena: `import athenaBg from '../assets/Athena.png'`
- Find the actual outermost wrapper of the character select screen (from Phase 0 recon)
- Apply background via inline style on that wrapper:
  ```jsx
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${athenaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
  ```
- Do NOT use `.intro-athena-overlay` or any class that is not the actual wrapper found in Phase 0

**Portrait float animation — correct the previous failed attempt:**
- Find the exact `<img>` element for each character portrait (from Phase 0 recon)
- Apply float animation via inline style directly on each `<img>`:
  ```jsx
  // Nasrin (index 0)
  style={{ animation: 'floatPortrait 3s ease-in-out infinite', animationDelay: '0s' }}

  // Daniel (index 1)
  style={{ animation: 'floatPortrait 3s ease-in-out infinite', animationDelay: '0.6s' }}

  // Parisa (index 2)
  style={{ animation: 'floatPortrait 3s ease-in-out infinite', animationDelay: '1.2s' }}
  ```
- If portraits are rendered via `.map()` over profiles, use the map index for the delay: `animationDelay: `${index * 0.6}s``

**Screen mount animation:**
- Apply `animation: fadeInScreen 0.6s ease-out both` to the outermost wrapper of the character select screen

**Character card hover depth:**
- Add CSS class `.character-card` to each card if not already present
- In `index.css` or `animations.css`, add:
  ```css
  .character-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .character-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 16px rgba(201, 168, 76, 0.2);
  }
  ```

**Ambient border glow on cards:**
- Add `animation: borderGlow 3s ease-in-out infinite` to `.character-card`

#### 2C — Chapter Page Component (file identified in Phase 0)

**Ethical Frameworks panel — move from inline text to slide-out side panel:**

The current plain text list of ethical frameworks must be removed from the narrative body and replaced with a side panel that slides in from the right when opened, and pushes the main content left.

Implementation:
1. Add local state: `const [frameworkOpen, setFrameworkOpen] = useState(false)`
2. Remove the existing ethical frameworks plain text from the narrative body entirely
3. Add a button near "View Alignment" labeled `View Frameworks` styled identically to the "View Alignment" button
4. The layout wrapper becomes a flex row:
   ```jsx
   <div style={{ display: 'flex', transition: 'all 0.4s ease' }}>
     {/* Main content — shrinks when panel open */}
     <div style={{ flex: 1, transition: 'all 0.4s ease' }}>
       {/* existing chapter content */}
     </div>

     {/* Framework side panel */}
     {frameworkOpen && (
       <div className="framework-side-panel">
         <button onClick={() => setFrameworkOpen(false)}>✕ Close</button>
         <h3>Ethical Frameworks</h3>
         {/* render the frameworks relevant to this chapter */}
       </div>
     )}
   </div>
   ```
5. Add to `animations.css` or `index.css`:
   ```css
   .framework-side-panel {
     width: 280px;
     min-width: 280px;
     background: #f5e6c8;
     border-left: 3px solid #c9a84c;
     padding: 24px 20px;
     animation: slideInRight 0.35s ease-out both;
     border-radius: 8px 0 0 8px;
     box-shadow: -4px 0 20px rgba(0,0,0,0.3);
     overflow-y: auto;
   }
   ```
6. The frameworks shown in the panel should be the same ones already being rendered in this chapter — just relocated, not rewritten

**Choice buttons — add shake + pulse on hover:**
- Find the choice button elements (A and B buttons)
- Add class `choice-btn` to each
- In CSS:
  ```css
  .choice-btn {
    transition: background 0.2s ease, transform 0.2s ease;
    cursor: pointer;
  }
  .choice-btn:hover {
    animation: choiceShake 0.4s ease, choicePulse 1s ease infinite;
    background: rgba(201, 168, 76, 0.15);
    border-color: #c9a84c;
  }
  ```

**Screen mount fade-in:**
- Apply `animation: fadeInScreen 0.6s ease-out both` to the chapter page outermost wrapper

**Parchment panel depth:**
- Add to the main parchment content box:
  ```css
  box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
  border: 1px solid rgba(201, 168, 76, 0.3);
  ```

#### 2D — Alignment / Result Screen (file identified in Phase 0)

- Apply `animation: fadeInScreen 0.7s ease-out both` to the outermost wrapper
- Add `animation: borderGlow 3s ease-in-out infinite` to the result panel box
- Style any buttons with the same `.choice-btn` hover pattern

#### 2E — Ending Screen (file identified in Phase 0)

- Apply `animation: fadeInScreen 0.8s ease-out both` to the outermost wrapper
- Add a slow ambient glow to the main content box: `animation: borderGlow 4s ease-in-out infinite`

#### 2F — Ambient Sound

- Create `src/components/AmbientSound.jsx`:
  ```jsx
  import { useEffect, useRef } from 'react'

  export default function AmbientSound() {
    const audioRef = useRef(null)

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.15
        audioRef.current.play().catch(() => {}) // autoplay may be blocked
      }
    }, [])

    return (
      <audio ref={audioRef} loop>
        <source src="/ambient.mp3" type="audio/mpeg" />
      </audio>
    )
  }
  ```
- Place `ambient.mp3` in `public/` folder (document this clearly in report back — Kevin needs to supply the file)
- Import and render `<AmbientSound />` once in `App.jsx` at the root level
- Do not block rendering if audio fails — the `.catch(() => {})` handles autoplay policy silently

#### 2G — `src/components/FrameworkGlossary.jsx`

If the card layout from the previous build did not apply correctly, reapply it now:
- Verify the modal has the card-based layout with parchment backgrounds, gold left borders, and shadow
- Add `animation: borderGlow 4s ease-in-out infinite` to the modal wrapper box
- Add `animation: fadeInScreen 0.4s ease-out both` to the modal inner container

---

### PHASE 3 — UI/UX VALIDATION

- [ ] Character select screen: `Athena.png` is visible as background behind all content with dark overlay
- [ ] Character select screen: all 3 portraits bob vertically with staggered delays (0s, 0.6s, 1.2s)
- [ ] Character select screen: card hover lifts and glows amber
- [ ] Character select screen: screen fades in on mount
- [ ] Chapter page: ethical frameworks no longer appear as plain text in the narrative body
- [ ] Chapter page: "View Frameworks" button opens a panel that slides in from the right and pushes content left
- [ ] Chapter page: closing the panel returns content to full width
- [ ] Chapter page: choice buttons shake and pulse amber on hover
- [ ] Chapter page: screen fades in on mount
- [ ] Alignment screen: fades in, panel glows
- [ ] Ending screen: fades in, panel glows
- [ ] Ambient sound component is mounted at root level and plays on loop at low volume
- [ ] Glossary modal has card layout with gold borders and fade-in animation
- [ ] No regressions: character selection, chapter navigation, choices, and ending all still function

---

### CONSTRAINTS
- Do not touch: `storyline1.js`, `storyline2.js`, `storyline3.js`
- Do not rewrite any story narrative text or choice labels
- Do not change how choices are scored or how alignment is calculated
- Do not install any new npm packages — CSS keyframes and HTML5 audio only
- Do not use `.intro-athena-overlay` — find the real wrapper from Phase 0
- Match existing CSS approach per file — do not introduce Tailwind or CSS modules if the file uses global CSS

---

### ACCEPTANCE CRITERIA
- [ ] Background image visible on character select with overlay — portraits readable
- [ ] Float animation plays on all 3 portraits with correct stagger
- [ ] Card hover lift works on character select
- [ ] Framework side panel slides in and out, main content shifts accordingly
- [ ] Choice buttons have shake + pulse on hover
- [ ] All major screens fade in on mount
- [ ] Ambient sound component exists and is wired to `App.jsx`
- [ ] Glossary modal renders with card layout and glow
- [ ] No story logic or content has changed
- [ ] `vercel --prod` builds without errors

---

### REPORT BACK
When done, tell Kevin:
1. Every file created or changed, with a one-line summary of what changed
2. The exact className/element where the background image was applied (so Kevin can verify it's correct this time)
3. The exact element where float animation was applied per portrait
4. Where `ambient.mp3` needs to be placed and what format it expects
5. Any animations that were skipped or deferred, and why
6. Whether `npm run build` passed cleanly before deploying
