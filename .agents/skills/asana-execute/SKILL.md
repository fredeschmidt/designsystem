
---
name: asana-execute
summary: Skill for executing Asana tasks in the project "AI PROJEKT". Follows a structured workflow for implementation, review, and status updates.
---

# Asana-execute Skill Instructions

This skill is activated when the user writes:
"Reolve this task with ID <asana-id>"

## Standard
- Asana project: "AI PROJEKT"
- Status flow:
  - Mangler (default on creation)
  - Igang (when implementation starts)
  - Klar til godkendelse (when patch/PR draft is ready)
  - Done (ONLY when the user says merged/completed)

## Workflow (follow these steps in order)

1. Read the Asana task (via Asana MCP) and briefly summarize:
   - What needs to be done
   - Acceptance criteria
   - Key constraints
2. Check repo documentation (if available):
   - docs/components/...
   - docs/decisions/...
3. Suggest:
   - Branch name (including Asana ID)
   - Expected file list (what will be changed)
   - Commit plan (1-3 commits)
   - PR text (based on PR template)
   - Test plan
3b. When implementing the solution (patch/diff), you MUST:
   - Create or update the component's HTML in index.html in its own <section class="ds-card"> inside <main class="ds-container ds-stack"> (with title, demo, and states/variants)
   - Ensure the demo matches Figma states/variants as closely as possible
   - All type-specific styling must be controlled by tokens (CSS custom properties) in css/styles.css. There should only be one stylesheet per component (e.g., button.css, input.css, etc.), and these must use the tokens for all colors, radii, etc.
   - To support multiple types, define token overrides for each type in css/styles.css using :root[data-type="type-1"], :root[data-type="type-2"], etc. The main element in index.html should have a data-type attribute to control which type is active.
   - Implement logic in index.html (JS) to allow switching the data-type attribute on the main container, so all components update their look instantly via tokens.
   - Do not create separate CSS files for each type. Only one CSS file per component, and all type differences must be handled by tokens.
   - Create or update the relevant JS
   - Update docs/components/README.md
   - Update docs/decisions/README.md if relevant
4. After the task is created, ask the user if they are happy with the result.
   - If the user says yes, set the Asana Status to "Klar til godkendelse".
   - If the user wants changes, continue iterating until satisfied.
5. When the user writes "APPROVE":
   - Set Asana Status = "Igang"
   - Create branch locally
   - Generate patch/diff (small, safe steps)
6. STOP and wait for "APPROVE" again.
7. When the user writes "APPROVE" again:
   - Set Asana Status = "Klar til godkendelse"
8. IMPORTANT:
   - Merge/deploy must NEVER happen automatically.
   - Never set Status=Done unless the user explicitly says "merged" or "completed".
9. If the branch for the current task is published and merged into main, update the Asana task status to "Done".
