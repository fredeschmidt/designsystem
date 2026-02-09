# Radio Button

Figma: https://www.figma.com/design/YFzrye4YsVtLQ3yx8yltTo/Material-Design-3-Components--Community-?node-id=74-402&m=dev

## Overview

Implement the Material Design 3 style Radio Button shown in the linked Figma node. The component is a single-choice control intended to appear in `radiogroup`s; labels are provided by the parent form control.

## Component name

Radio Button

## Variants / States

- Enabled — Selected
- Enabled — Unselected
- Disabled — Selected
- Disabled — Unselected

## Copy / Text

- Radio buttons themselves do not include label text. Labels are external and should be provided by consumer markup.

## Sizing & Spacing

- Touch target: 40x40 px (container) via `--ds-control-size`.
- Outer ring stroke: 3px via `--ds-control-stroke`.
- Inner dot diameter: 20px via `--ds-control-dot-size`.
- Visual radio circle aligns centered inside the 40px container.
- Suggested spacing between radio and label: 10px (matches component demo layout).

## Typography

- Labels should use the system's body typography token. The radio itself has no text.

## Colors / Tokens

- Selected ring + dot: `--ds-primary` (theme-1 = `#0375D2` from Figma).
- Unselected ring: `--ds-on-surface-variant` (theme-1 = `#130F0F` from Figma).
- Disabled ring + dot: `--ds-control-disabled` (theme-1 = `rgba(31,31,31,0.38)` from Figma).

Use design tokens only; do not hardcode colors in component styles.

## Interaction & Accessibility

- Use native `input[type="radio"]` inside a `<label>` for click and keyboard support.
- Group related radios in a `<fieldset>` with a `<legend>` when used in forms.
- Disabled state uses the native `disabled` attribute and is not focusable.
- Focus-visible is styled on the custom control.
- Contrast:
  - Ensure the selected and unselected states meet WCAG AA for contrast against the component background.

## Constraints / Musts

- Must match the provided Figma visuals exactly (colors, sizing, spacing) using design tokens.
- Must be keyboard accessible and work inside `radiogroup` semantics.
- Must not introduce new global styles that conflict with the design system.

## Acceptance criteria

- Visuals match the Figma node for all four states across viewport scales.
- Tokens are used for colors, sizes, and focus styling.
- Component uses native `input[type="radio"]` semantics for a11y.

## Definition of Done

- Code implemented in the component library and referenced styles updated.
- `docs/components/radio.md` added (this file).
- Implementation PR has a design review and a functional QA pass.

## Decision note

Prefer using existing design tokens for color and spacing rather than introducing new tokens. If tokens are missing, add tokens via ADR and include them in the implementation task.

## Token mapping note

- `--ds-primary` is set to Figma primary for theme-1.
- `--ds-on-surface-variant` maps to on-surface-variant for theme-1; theme-2/3 derive from `--ds-fg`.
- `--ds-control-disabled` is derived from the theme foreground at 38% opacity.

## Links

- Figma: https://www.figma.com/design/YFzrye4YsVtLQ3yx8yltTo/Material-Design-3-Components--Community-?node-id=74-402&m=dev
- Docs: docs/components/radio.md
- ADR: docs/decisions/ADR-xxxx-title.md
- PR template: .github/pull_request_template.md
