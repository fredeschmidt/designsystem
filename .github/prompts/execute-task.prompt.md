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
  - Type-specific styling is controlled by tokens (CSS custom properties)
  - Type overrides in:
    :root[data-type="type-1"], :root[data-type="type-2"], etc.
- index.html must support switching types:
  - main container has data-type attribute
  - JS toggles active data-type so tokens update all components
- Only one CSS file per component (button.css, input.css, etc.)
- Do NOT create separate CSS per type (type differences must be tokens only)
- Update docs/components/README.md
- Update docs/decisions/README.md if relevant

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
