## RECON — Glossary Modal + Character Select Screen

### CONTEXT
- Stack: React, Vite, deployed on Vercel
- Agent target: Antigrav
- Feature area: `FrameworkGlossary.jsx` (modal component) and the character select screen (main page)
- Do not touch storyline files or any game logic

### OBJECTIVE
Understand the current structure of the glossary modal and the character select screen without making any changes. Produce a clear report before implementation begins.

### PHASE 0 — ORIENT
Read the top-level project structure:
- `src/` folder — list all folders and files
- `src/data/profiles.js` — what data shape does it export?
- `src/assets/` — confirm which image files exist (iranjournalist.png, iranjournalist2.png, irancitizen.png, irancitizen2.png, usjournalist.png, usjournalist2.png, Athena.png)

Report: how the project is organized and which files are relevant to the glossary modal and character select screen.

### PHASE 1 — DEEP READ
Read the following files:

1. `src/components/FrameworkGlossary.jsx`
   - How is it structured? (sections, layout, cards, list?)
   - What are the exact current text strings for each of the 4 frameworks (U, K, P, V)?
   - How is it triggered/opened? (prop, state, context?)
   - What styling approach is used? (CSS module, inline, Tailwind, global CSS?)
   - Is it rendered in more than one place?

2. The main page component (likely `App.jsx` or a `MainPage.jsx` or similar — identify it)
   - How is the character select screen rendered?
   - How are the 3 character cards built? (map over profiles.js, or hardcoded?)
   - How are the character images currently referenced? (import or dynamic path?)
   - What CSS/animation classes or styles are currently applied to the cards?
   - Where and how is `FrameworkGlossary` imported and rendered?

3. `src/data/profiles.js`
   - What fields does each profile object have? (name, role, image, storyline, description?)
   - Are image paths stored here or resolved elsewhere?

Report for each file:
- What it does currently
- What it renders
- What patterns it follows
- Anything inconsistent or worth flagging

### PHASE 2 — BEHAVIOR AUDIT
Trace the full flow of the character select screen:
- Where does the page start rendering?
- How does profile data flow from `profiles.js` into the character cards?
- How does clicking "View Framework Glossary" open the modal?
- How does the modal close?
- Flag: any hardcoded strings that should come from data, any missing alt texts, any animation-ready CSS hooks already present

### CONSTRAINTS
- Read only. No code changes in this prompt.
- Do not refactor, rename, or fix anything — flag it instead.
- Do not touch: `storyline1.js`, `storyline2.js`, `storyline3.js`, or any chapter/game logic components.

### REPORT BACK
When done, tell Kevin:
1. Exact file paths for the character select screen and glossary modal
2. Current text for all 4 framework entries word for word
3. How images are currently referenced (import vs. path string)
4. How the modal open/close state is managed
5. What CSS approach is used across both components
6. Any patterns or inconsistencies found
7. A recommended starting point for the build phase
