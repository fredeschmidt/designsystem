---
name: execute-issue
description: Execute a Linear issue created by the create-issue skill, following the specified workflow and repo constraints, and update the issue status accordingly.
---

# Execute Issue Skill
Use the Execute Issue skill to read a Linear issue created by the Create Issue skill, propose a plan for implementation, and execute the work while adhering to the specified workflow and repo constraints. The skill will discover statuses dynamically and update the Linear issue status as it progresses through the implementation phases, and will only set the issue to done when the user explicitly confirms completion.

## Trigger   
This runs when the user asks to resolve an issue, e.g. "Resolve this issue with ID <linear-id>". The skill will read the issue details, propose a plan, and wait for the user's approval before starting implementation.

## HARD RULES (must follow)
- Only operate on Linear team: LETS GO (Project: Design System).
- Status flow (by status type):
  - Backlog → Todo → In Progress → Done
- Never set done unless user explicitly says "merged" or "completed".
- When a Figma link is provided, the implementation MUST follow Figma Dev Mode styling exactly: extract typography, sizing, spacing, color tokens, elevation, and component anatomy from Dev Mode and use those values (or mapped design tokens) so the component visually matches the Figma design.
- Always verify and use exact Figma Dev Mode values for sizes, colors, borders, radii, stroke widths, spacing, and typography. Do not approximate — map values to existing design tokens or add new tokens via an ADR when necessary. If Dev Mode values cannot be retrieved, request access or screenshots before implementing.
- Never merge/deploy automatically.

## Workflow

1. Read the Linear issue (via Linear MCP).

2. Respond with [template](TEMPLATE-summary-task.md) filled out with the task details and ask for confirmation before starting implementation. 

3. Check docs if present:
- docs/components/...
- docs/decisions/...

4. Respond with [template](TEMPLATE-implementation-plan.md) filled out with the proposed implementation plan based on the issue details, constraints, and repo structure.

5. Ask for approval:
- “Write APPROVE to start implementation.”

## Implementation phase (only after user writes APPROVE #1)
- Set Linear status to `In Progress` (discover via Linear MCP).
- Create branch locally
- Implement in small, safe steps (patch/diff style)

### Repo constraints (must follow)

#### Core Principles
1. **Build semantically correct HTML**: 
Use appropriate semantic elements, correct nesting, accessible landmarks, and valid ARIA attributes.
2. **Match Figma Dev Mode exactly for theme-1**: 
Extract and implement all styling from Figma Dev Mode (sizes, colors, typography, spacing, borders, etc.) as the canonical theme-1.
3. **Use design tokens for all styling**: 
Never hardcode values. Use the standard `--ds-` prefixed tokens (e.g., `--ds-primary`, `--ds-border`, `--ds-surface-2`).
4. **Generate theme-2 and theme-3 automatically**: 
AI will derive accessible, usable variants for themes 2 and 3, mapping Figma palettes or creating derived colors.
5. **Create general tokens if needed**: 
If a component needs a new token (e.g., `--ds-error`, `--ds-focus`), add it to the standard token set, not as component-specific tokens.

#### HTML & Demo Structure
- Add component demo in `<section class="ds-card">` inside `<main class="ds-container ds-stack">`
- Include: title + demo + all states/variants (matching Figma)
- Demo must display all three themes in one using the main container's `data-theme` attribute

#### File Organization
- Create one CSS file per component (button.css, checkbox.css, etc.)
- Import all component stylesheets at the top of `css/styles.css`
- If the component requires JavaScript, create `component-name.js` and import it from `js/app.js` (near the top)
- Do NOT create separate CSS files per theme; theme differences are token-driven only

#### Token & Theming Implementation
- All styling uses CSS custom properties (tokens prefixed with `--ds-`)
- Do NOT use `--cb-` or component-specific token prefixes
- Figma Dev Mode values map to theme-1 tokens
- Theme overrides for theme-2 and theme-3 are implemented in `css/styles.css` using:
  ```css
  :root[data-theme="theme-1"] { --ds-primary: ...; }
  :root[data-theme="theme-2"] { --ds-primary: ...; }
  :root[data-theme="theme-3"] { --ds-primary: ...; }

## Review phase
After implementation:
- Summarize what changed + how to test
- Ask: “Are you happy with the result? Write APPROVE to mark it ready.”
- If user is happy but not ready to approve, keep status at `In Progress`.

## Done phase (only after user writes APPROVE #2)
- Set Linear status to `Done` (discover via Linear MCP).
- STOP
