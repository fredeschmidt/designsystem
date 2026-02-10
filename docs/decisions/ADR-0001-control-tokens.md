# ADR-0001: Standard kontrol-tokens til radio

**Dato:** 2026-02-08  
**Status:** Accepteret

## Problem
Vi mangler standard tokens til kontrol-komponenter for at matche Figma (radio) uden hardcodede værdier.

## Kontekst
Radio-knappen fra Figma kræver specifikke størrelser og farver (40px hit area, 3px ring, 20px dot, on-surface-variant og disabled 38% opacity). Komponent-specifikke tokens er ikke tilladt.

## Muligheder
1) Hardcode værdier i komponentens CSS.
2) Oprette component-prefixed tokens (fx --ds-radio-...).
3) Tilfoje generelle kontrol-tokens til standard token-sat.

## Beslutning
Vi tilfojer generelle kontrol-tokens: `--ds-control-size`, `--ds-control-stroke`, `--ds-control-dot-size`, `--ds-on-surface-variant`, og `--ds-control-disabled`.

## Begrundelse
Det giver en genbrugelig, temabar token-struktur og matcher Figma uden at introducere komponent-specifikke tokens.

## Konsekvenser
Nye tokens skal vedligeholdes pa tvadrs af temaer. Tema-2 og tema-3 afleder on-surface-variant fra `--ds-fg` og disabled som 38% opacity.

## Links
- Asana: https://app.asana.com/1/1203671610027776/project/1213097315704457/task/1213183007412061
- PR: <link>
- Relaterede docs: docs/components/radio.md
