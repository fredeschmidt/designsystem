# Radio component

Figma: https://www.figma.com/design/YFzrye4YsVtLQ3yx8yltTo/Material-Design-3-Components--Community-?node-id=74-402&m=dev

This component implements Material Design 3 (community) radio styles.

Usage

HTML example:

```html
<label>
  <input type="radio" name="example">
  <span class="radio"></span>
  Option label
</label>
```

States
- default
- hover
- focus
- checked
- checked + hover
- disabled

Tokens
- `--ds-primary` — primary color used for checked state
- `--ds-border` — default border color

Accessibility
- Use native `input[type="radio"]` with matching `name` to group.
- Ensure keyboard navigation (arrow keys) works — enhanced by `js/radio.js`.

Docs and examples are available in the demo in `index.html`.
