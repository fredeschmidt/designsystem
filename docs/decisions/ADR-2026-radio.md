# ADR-2026: Radio component implementation decisions

Status: Proposed

Context

We implement a `radio` component following the Material Design 3 community spec. The design references a set of visual states and tokens.

Decision

- Use native `input[type="radio"]` elements for semantics and built-in keyboard behavior.
- Style radios visually with `components/radio/radio.css` using tokens from `css/styles.css`.
- Add a small enhancement `js/radio.js` to improve arrow-key selection consistency across browsers.

Consequences

- Keeps accessibility strong via native semantics.
- Keeps CSS predictable with a single file per component and token overrides per `data-type`.
