---
name: Update workflows
description: Updates workflow rules in .github/prompts and (if needed) the router in .github/copilot-instructions.md.
---

You are maintaining Copilot prompt files.

## Canonical source of truth
- Only these are canonical: `.github/prompts/*.prompt.md`

## Files that may be updated
- `.github/prompts/<workflow>.prompt.md` (canonical)
- `.github/copilot-instructions.md` (router, only if triggers/paths change)

## Input you will receive
- Workflow name to update (e.g., create-task, execute-task, wrap-up)
- A change request

## Process (follow in order)
1) Update the canonical prompt file first.
2) Update `.github/copilot-instructions.md` ONLY if routing/triggers/paths changed.
3) Verify:
- No conflicts with HARD RULES
- Trigger phrases still match
- No stale references to skills/agents

## Output requirements
- Show a patch/diff for each changed file.
- Summarize changes in 3–6 bullets.
