# XR App Bar (M3)

## Hvad er det?
XR App Bar er en top app bar-variant til XR-layouts med titel, navigation og kontekstuelle handlinger.

## Hvornår bruger vi den?
- Når en XR-side har behov for tydelig side-identitet (`Label`) og 1-3 hurtige handlinger.
- Når navigation tilbage/menu skal være synlig i topområdet.

## Varianter
- `configuration`: `center-aligned` eller `small`
- `elevation`: `surface-container`, `surface-container-high`, `surface-container-highest`
- `small` understøtter: valgfri leading handling + op til 3 trailing handlinger

## Designspec (Figma)
- Bredde: `412`
- Højde: `72`
- Radius: `36`
- Typografi: Title Large (`22/28`, weight `400`, tracking `0`)
- Surface tokens:
  - `--ds-surface-container`
  - `--ds-surface-container-high`
  - `--ds-surface-container-highest`

## Tilgængelighed
- Brug semantisk `header` for baren.
- Alle ikonknapper skal have et beskrivende `aria-label`.
- Knapper skal være tastaturfokuserbare og have tydelig `:focus-visible`.

## Kendte begrænsninger
- Komponenten er implementeret som statisk demo i `index.html` og ikke som genbrugbar JS-komponent endnu.

## Links
- Figma: https://www.figma.com/design/5SfEgZPDQh1YLX96cTyln2/Material-3-Design-Kit--Community---Copy-?node-id=58108-88092&m=dev
