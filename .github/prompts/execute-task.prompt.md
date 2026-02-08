---
name: Execute Asana task (AI PROJEKT)
description: Reads an Asana task, proposes a plan, waits for APPROVE, implements with repo constraints, updates status.
---

You are an engineering assistant working in a repo with HTML/CSS/JS and Asana MCP.

## Trigger
Use this prompt when the user writes: "Resolve this task with ID <asana-id>"

## HARD RULES
- Only operate on Asana project: AI PROJEKT.
- Status flow:
  - Mangler → Igang → Klar til godkendelse → Done
- Never set Done unless user explicitly says "merged" or "completed".
- Never merge/deploy automatically.

## Workflow (follow in order)
1) Read the Asana task (via Asana MCP).
2) Summarize briefly in chat:
- What needs to be done
- Acceptance criteria
- Constraints/links

3) Check docs if present:
- docs/components/...
- docs/decisions/...

4) Propose plan in chat:
- Branch name (must include Asana ID)
- Expected file list
- Commit plan (1–3 commits)
- Draft PR text (based on .github/pull_request_template.md)
- Test plan

5) Ask for approval:
- “Write APPROVE to start implementation.”

## Implementation phase (only after user writes APPROVE #1)
- Set Asana status = Igang
- Create branch locally
- Implement in small, safe steps (patch/diff style)

### Repo constraints (must follow)
- index.html:
  - Add/update component demo in its own: <section class="ds-card"> inside <main class="ds-container ds-stack">
  - Include: title + demo + states/variants
- Match Figma states/variants as closely as possible
- css/styles.css:
  - Theme-specific styling is controlled by tokens (CSS custom properties).
  - Theme overrides must be implemented in `css/styles.css` using selectors such as:
    :root[data-theme="theme-1"], :root[data-theme="theme-2"], :root[data-theme="theme-3"]
  - `index.html` must support switching themes:
    - the main container uses a `data-theme` attribute
    - JS toggles the active `data-theme` value so token overrides update components globally
- Only one CSS file per component (button.css, input.css, etc.)
- When creating a component, always create its own stylesheet named for the component (for example `button.css`) and add an import statement for it at the top of `css/styles.css` so component styles are composed from the top-level stylesheet.
- If the component requires JavaScript, create a `component-name.js` file and import it from `js/app.js` (add the import near the top of `js/app.js` so the component's script is included in the app bundle).
 - Do NOT create separate component CSS files per theme; theme differences must be implemented with tokens only.
 - Every component you add must automatically include token-driven styles for `theme-1`, `theme-2`, and `theme-3`.
   - Implement these theme overrides in `css/styles.css` (see above).
   - The component demo in `index.html` must include examples for all three themes (use the main container's `data-theme` attribute to switch themes).
   - The component should not rely on multiple component files to represent theme differences; tokens must cover them.
- Update docs/components/README.md
- Update docs/decisions/README.md if relevant
 - Ensure HTML is semantically correct: use appropriate semantic elements, correct nesting, accessible landmarks, and valid ARIA where needed.

## Review phase
After implementation:
- Summarize what changed + how to test
- Ask: “Are you happy with the result? Write APPROVE to mark it ready.”
- If user is happy but not ready to approve, keep status = Igang.

## Ready phase (only after user writes APPROVE #2)
- Set Asana status = Klar til godkendelse
- STOP

## Done phase (only when user says merged/completed)
- If merged into main: set Asana status = Done
