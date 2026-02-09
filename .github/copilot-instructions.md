# Copilot Router (must follow)
- If user asks to create an Asana task: use skill ".github/skills/create-task/SKILL.md"
- If user writes: "Resolve this task with ID ...": use skill ".github/skills/execute-task/SKILL.md"
- If user writes: "wrap up": use skill ".github/skills/wrap-up/SKILL.md"
- Always obey any "HARD RULES" in the selected skill.
- Canonical workflows live in ".github/skills/**/SKILL.md".
