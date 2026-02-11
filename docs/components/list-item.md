# List Item (M3) - Leading Switch

## Hvad er det?
En Material 3 list item i 3-linjers variant med en leading switch til binare indstillinger (on/off).

## Hvornår bruger vi den?
Når en indstilling skal vises med titel + supporting text, og brugeren skal kunne slå den til/fra direkte i rækken.

## Struktur
- Leading element: switch (`role="switch"`, `aria-checked`)
- Content: headline + supporting text
- Trailing element: none (for denne variant)

## States/varianter
- Enabled: off/on
- Hovered: off/on
- Pressed: off/on

## Tokens (theme-1 matcher Figma node `51964:64450`)
- Surface: `--ds-surface`
- Text: `--ds-on-surface`, `--ds-on-surface-variant`
- Switch off: `--ds-surface-container-highest`, `--ds-outline-strong`
- Switch on: `--ds-primary`, `--ds-on-primary`
- State overlays: `--ds-state-on-surface-variant-*`, `--ds-state-on-secondary-container-*`

## Accessibility
- Switch kan toggles med klik, `Space` og `Enter`
- Synlig focus state via `:focus-visible`
- Semantisk rolle/state via `role="switch"` og `aria-checked`

## Eksempel
Se `index.html` under sektionen `List Item (M3) · Leading Switch`.
