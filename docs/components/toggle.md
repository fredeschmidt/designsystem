# Toggle Buttons

What is it?
- A boolean on/off control used for enabling or disabling a single option.

When to use
- Use for single binary choices where immediate application is expected.

Props / API
- Markup: use a container `.ds-toggle` with `role="switch"` and `aria-checked="true|false"`.
- Keyboard: Space and Enter toggle state.

Examples
- Default/off, Checked/on, Disabled, Small size.

Accessibility
- Use `role="switch"` + `aria-checked` for boolean toggles.
- Ensure visible focus indicator and accessible name (label or `aria-label`).
- Verify WCAG AA contrast for thumb and track in all states.

Tokens
- `--toggle-track-bg` (track off background)
- `--toggle-track-on-bg` (track on background)
- `--toggle-thumb-bg` (thumb background)
- `--toggle-width`, `--toggle-height`, `--toggle-thumb-size`
- `--toggle-transition` (motion duration)

Examples and Figma
- Figma: https://www.figma.com/design/YFzrye4YsVtLQ3yx8yltTo/Material-Design-3-Components--Community-?node-id=101-238&m=dev

Related ADR
- docs/decisions/ADR-2026-toggle-buttons.md
