# Switches Without Icons

## Hvad er det?
En switch-komponent uden ikoner, med fire visuelle varianter, der matcher Figma.

## Hvornår bruger vi den?
Når brugeren skal slå en indstilling til/fra uden ekstra label-ikon i selve switchen.

## Props/API (hvis relevant)
- `data-checked="true|false"`: Styrer visuel on/off position.
- `role="switch"` + `aria-checked`: A11y state.
- Varianter via klasse:
  - `ds-switch--default`
  - `ds-switch--primary`
  - `ds-switch--soft`
  - `ds-switch--inverse`

## Eksempler
Se `index.html` i komponentsektionen "Switches Without Icons".

## Kendte begrænsninger
- Ingen indbyggede labels eller ikoner.
- Farver og størrelser styres af tokens og følger theme-1 som kanonisk.

## Relaterede beslutninger (ADR)
- N/A
