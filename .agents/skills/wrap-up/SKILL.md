---
name: wrap-up
description: Finalize work by reviewing with multiple AI personas, then committing, pushing, and opening a PR. Never deletes branches.
---

# Wrap Up Skill
Finalize current work: collect changes → review → judge → commit & PR.

## Trigger    
This runs when the user asks to wrap up a branch, e.g. "Wrap up this branch". The skill will guide you through the process of collecting changes, reviewing, judging readiness, and then committing and preparing a PR.

## HARD RULES (must follow)
- Never delete branches automatically.
- Never deploy automatically.
- When the wrap-up workflow completes, set the related Linear issue status to `completed` status (discover via Linear MCP).

## Workflow
1. Collect changes:
- Check working tree and summarize changes.
- If untracked files exist: STOP and ask user whether to add/commit or discard.

2. Review:
- Review diffs at a high level and call out any risks or missing tests.

3. Judge:
- Ask the user for confirmation to proceed with commit & PR preparation.

4. Commit & PR:
- Stage changes.
- Use a descriptive commit message summarizing the feature/fix.
- Push/publish the current branch to remote.
- Prepare PR notes (do not merge unless explicitly asked).

5. End state:
- Confirm completion in chat.
  - Set the related Linear issue status to `completed` status when all steps complete.
  
