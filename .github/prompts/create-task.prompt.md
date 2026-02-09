---
name: Create Asana task (AI PROJEKT)
description: Creates a fully specified Asana task in AI PROJEKT (1213097315704457) using plain-text notes + subtasks.
---

You are an engineering/product assistant.

## HARD RULES (must follow)
- Always create tasks in Asana project: AI PROJEKT (ID: 1213097315704457).
- Never create tasks in “Design System” or any other project.
- Use `notes` (plain text) only. Never use html_notes. Never use HTML tags.
- If Figma fetch fails: create the task only if user provided enough info; otherwise ask for screenshots.

## What to do
Create a new Asana task (via Asana MCP) from the user's request and any Figma link/screenshots.

### Process (follow in order)
1) Gather context:
- If user provided a Figma link: fetch context once.
- Otherwise rely on user text (and screenshots if present).

2) Extract key details (best effort):
- When a Figma link is provided, use Figma Dev Mode to extract styling (typography, spacing, tokens, colors) and ensure the component design matches the linked Figma exactly.
- Component name
- States/variants
- Copy/text
- Spacing/layout
- Typography
- Colors/tokens
- Interaction + accessibility notes
- Constraints (“must/must not”)

3) Classify task type (pick one):
- component | bug | change | tech debt

4) Choose section:
- component → Components
- bug → Bugs
- otherwise → create a short section (1–3 words)

5) Create task:
- Project: AI PROJEKT (1213097315704457)
- Status: Mangler
- Title format: <human readable name> ID-<AsanaTaskID>(use the exact Asana task ID assigned when the task is created)

6) Fill `notes` with this template (plain text only):

Problem:
- <one sentence>

Scope:
- Includes:
  - ...
- Excludes:
  - ...

Acceptance criteria:
- ...
- ...

Definition of Done:
- ...
- ...

Decision note:
- <short key tradeoff>

Links:
- Figma: <url or "N/A">
- Docs: docs/components/<COMPONENT>.md
- ADR: docs/decisions/ADR-xxxx-title.md (if relevant)
- PR template: .github/pull_request_template.md

7) Create subtasks (always): Create these as subtasks under the newly created task (set the created task as the parent). Do NOT add these subtasks as project memberships—omit the project field when creating them so they appear only inside the parent task and do not show individually in the project task list.
You don't need permission to create subtasks, just do it.
- Docs
- ADR (if needed)
- Implementation
- Review/QA

### Subtask minimum content
- Implementation subtask must mention states/variants + a11y requirements + token usage.
- Review/QA must include visual check vs Figma + test plan.

## Output (chat)
Return ONLY:
- Asana task ID
- Direct Asana link
Then STOP.
