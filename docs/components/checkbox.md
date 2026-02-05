# Checkbox Component

## Hvad er det?
Material 3 Checkbox-komponent til single eller multiple-choice selektion. Bruges til at lade brugere vælge en eller flere indstillinger fra et sæt.

## Hvornår bruger vi den?
- Formularer med multiple-choice indstillinger
- Tilladelses-/bekræftelseslister
- Valgsæt hvor brugere kan vælge 0 eller flere elementer

## Props/API

### Class-navne
- `.ds-checkbox` – Basis checkbox-element
- `.ds-checkbox--selected` – Valgt tilstand
- `.ds-checkbox--indeterminate` – Delvist valgt (mixed state)
- `.ds-checkbox--unselected` – Ikke valgt (default)
- `.ds-checkbox--error-selected` – Fejltilstand, valgt
- `.ds-checkbox--error-indeterminate` – Fejltilstand, delvist valgt
- `.ds-checkbox--error-unselected` – Fejltilstand, ikke valgt

### HTML-attributter
- `checked` – Indstilles automatisk ved valgt tilstand
- `disabled` – Deaktiverer checkboxen
- `indeterminate` – JS-property for mixed state

### CSS-variabler
```css
--ds-primary: #1f1f1f        /* Primary brand color */
--ds-primary-hover: #333333  /* Primary on hover */
--ds-error: #b3261e          /* Error color */
--ds-error-hover: #c62828    /* Error on hover */
--ds-disabled: #79747e       /* Disabled color */
```

## Eksempler

### Simpel valgt checkbox
```html
<input type="checkbox" class="ds-checkbox ds-checkbox--selected" checked>
```

### Fejl tilstand
```html
<input type="checkbox" class="ds-checkbox ds-checkbox--error-selected" checked>
```

### Deaktiveret
```html
<input type="checkbox" class="ds-checkbox ds-checkbox--selected" disabled>
```

### Alle varianter
Se Material 3 Design Kit: https://www.figma.com/design/2TyCvNfolFDP0IXPwprzP4/Material-3-Design-Kit--Community-?node-id=55141-14173

## States

### Enabled (Standard)
- Checkbox er interaktiv og kan ændres af brugeren

### Hovered
- Mouse over checkboxen
- Baggrund får subtil overlay

### Focused
- Keyboard-fokus på checkboxen
- Visuel fokus-ring omkring elemento

### Pressed
- Checkbox klikkes ned
- Aktivt tryk-feedback

### Disabled
- Checkboxen er deaktiveret (ikke klikbar)
- Reduceret opacitet for visuelt signal

## Kendte begrænsninger
- Indeterminate-tilstand skal styres via JavaScript: `checkbox.indeterminate = true`
- Fokus-ring kan være svær at se på nogle baggrunde – overvej at tilføje ekstra contrast ved behov

## Tilgængelighed
- Bruger native HTML `<input type="checkbox">`
- Fuld keyboard-support (Tab, Space)
- Skærmlæser-kompatibel med ARIA-labels
- Fokus-tilstand er visuelt tydeligt

## Relaterede beslutninger
- Se `/docs/decisions/` for design-beslutninger om checkbox-implementation
