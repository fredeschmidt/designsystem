# Copilot Router (must follow)
- If user asks to create an Asana task: use prompt ".github/prompts/create-task.prompt.md"
- If user writes: "Resolve this task with ID ...": use prompt ".github/prompts/execute-task.prompt.md"
- If user writes: "wrap up": use prompt ".github/prompts/wrap-up.prompt.md"
- Always obey any "HARD RULES" in the selected prompt.
- Canonical workflows live in ".github/prompts/*.prompt.md" (no skills folder).
