---
name: switch-type
summary: Skill for switching the design system type via chat command (e.g., "Switch to type-2").
---

# Switch-type Skill Instructions

This skill is activated when the user writes:
"Switch to type-X" (where X is 1, 2, or 3)

## What happens when you write "Switch to type-X":
1. The assistant updates the `data-type` attribute on the main container in index.html to `type-X`.
2. All components update their look instantly, as their styles are controlled by tokens in css/styles.css, which respond to the `data-type` attribute.
3. The assistant confirms the switch in chat.

## Example workflow
- User writes: "Switch to type-2"
- The assistant:
  - Edits index.html so that <main class="ds-container ds-stack" data-type="type-2"> (or updates the attribute if already present)
  - Confirms in chat: "Type switched to type-2. All components now use the type-2 tokens."

**Note:**
- No CSS files are changed. Only the data-type attribute is updated.
- This skill only changes the type in index.html. For programmatic switching (e.g., via UI), see the implementation in js/app.js.
