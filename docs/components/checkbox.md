# Checkbox

En token-drevet `Checkbox` komponent der understøtter tilstande: unchecked, checked, indeterminate, disabled, hover, focus, pressed.

Hvornår bruger vi den?
- Når brugeren skal vælge en eller flere uafhængige valgmuligheder.

Props / API
- Implementeret som visuel komponent med et skjult native `input[type=checkbox]` for tilgængelighed.

Stater / varianter
- unchecked
- checked
- indeterminate
- disabled

Eksempler
- Se demo på forsiden (`index.html`) under "Checkbox (component demo)". Brug theme-switcher nederst til højre for at teste `theme-1`, `theme-2`, `theme-3`.

Kendte begrænsninger
- Dette demonstrerer en visuel implementering; Storybook-integration og unit-tests skal tilføjes i følge opgaver i Asana.

Link til beslutninger (ADR)
- Hvis nye tokens introduseres, opret en ADR i `docs/decisions/`.
