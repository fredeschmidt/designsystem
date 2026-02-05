---
name: wrap-up
summary: Skill for wrapping up a feature branch and merging to main when the user writes "wrap up".
---

# Wrap-up Skill Instructions

This skill is activated when the user writes:
"wrap up"

## What happens when you write "wrap up":
1. All changes in the current branch are committed. The commit message should be descriptive and summarize the feature or fix (e.g., "Add checkbox component to design system").
2. The current branch is merged into main.
3. The working directory is switched to the main branch and left there.
4. Confirm to the user that the process is complete and you are now on main.

## Example workflow
- User writes: "wrap up"
- The assistant:
  - Stages all changes
  - Commits with a meaningful message
  - Switches to main
  - Merges the feature branch
  - Stays on main
  - Confirms completion

**Note:** Never delete branches automatically. Only merge and switch.
