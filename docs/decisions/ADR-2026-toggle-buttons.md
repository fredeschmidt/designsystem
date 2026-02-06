# ADR-2026 Toggle Buttons

Date: 2026-02-06

Decision: Use `role="switch"` + `aria-checked` for boolean toggle controls. Document in component docs.

Context:
- Toggle controls represent boolean on/off state. Platform patterns (iOS/Android/Web) commonly map to switch semantics.

Consequences:
- Consistent API for screen readers. Implementation will use `role="switch"` and keyboard handlers for Space/Enter.
