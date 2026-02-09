---
name: create-task
description: Creates a fully specified Asana task in AI PROJEKT (1213097315704457) using plain-text notes + subtasks.
---

# Create Task Skill
Use the Create Task skill to create a new Asana task in the AI PROJEKT (1213097315704457) project based on the user's request and any provided Figma link/screenshots. The skill will extract key details, classify the task type, choose the appropriate section, and fill out the task notes with a structured template. It will also create subtasks for each acceptance criterion if applicable. Finally, it will return the Asana task ID and direct link in the chat.

## Trigger   
This runs when the user asks to create a task, e.g. "create a task for this Figma design" or "I need a new task for a bug fix". The user may optionally provide a Figma link and/or screenshots to help specify the task details.

## HARD RULES (must follow)
- Always create tasks in Asana project: AI PROJEKT (ID: 1213097315704457).
- Use `notes` (plain text) only. 
- If Figma fetch fails: create the task only if user provided enough info; otherwise ask for screenshots.

## Workflow

1. Gather context:
- If user provided a Figma link: fetch context once.
- Otherwise rely on user text (and screenshots if present).

2. Extract key details (best effort):
- When a Figma link is provided, use Figma Dev Mode to extract styling (sizes, typography, spacing, tokens, colors) and ensure the component design matches the linked Figma exactly.
- Component name
- States/variants
- Copy/text
- Spacing/layout
- Typography
- Colors/tokens
- Sizes
- Interaction + accessibility notes
- Constraints (“must/must not”)

3. Classify task type (pick one):
- component | bug | change | tech debt

4. Choose section:
- component → Components
- bug → Bugs
- otherwise → create a short section (1–3 words)  

5. Respond with [template](TEMPLATE.md) filled out with the extracted details and ask for confirmation before creating the task in Asana. 

6. Create task:
- Project: AI PROJEKT (1213097315704457)
- Status: Mangler
- Title format: <human readable name> ID-<AsanaTaskID>(use the exact Asana task ID assigned when the task is created)   

7. Fill `notes` with this template (plain text only):

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

8. Add subtasks for each acceptance criterion (if any) with the same format in `notes` but focused on the specific criterion.
- Implementation subtask must mention states/variants + a11y requirements + token usage.
- Review/QA must include visual check vs Figma + test plan.

9. Return in chat ONLY:
- Asana task ID
- Direct Asana link
Then STOP.