## Flow (gør dette i rækkefølge)
0) Hvis brugeren IKKE har givet et Figma-link:
   - Spørg efter Figma-URL’en til det konkrete design (node/link).
   - STOP.

1) Læs Figma-linket (via Figma MCP) og udtræk det vigtigste:
   - Hvilken komponent er det? (fx Button, Text Field, Card)
   - Hvilke varianter/states ses? (default/hover/disabled, size, icon osv.)
   - Tekster, farver/toner, spacing (kun i overskrifter – ikke pixel-nørderi)
   - Eventuelle “regler” du kan se (fx padding, radius, typography)

2) Klassificér opgaven: komponent / bug / ændring / tech debt.

3) Vælg section:
   - Components hvis det er en komponent eller komponentarbejde
   - Bugs hvis det er en bug
   - Andet hvis det er generelt
   - Ellers: opret ny section (1-3 ord) og brug den

4) Opret Asana-task i standardprojektet:
   - Projekt: "Designsystem - Backlog"
   - Titel = brugerens titel (evt. med komponentnavn fra Figma)
   - Status = "Mangler"

5) Udfyld task-beskrivelsen med (alt skrevet ud fra Figma-designet):
   - Problem (kort: hvorfor skal den bygges/ændres?)
   - Scope (hvad er med / ikke med i denne opgave)
   - Acceptance criteria (bullet points, konkrete states/varianter fra Figma)
   - Definition of Done (DoD) (bullet points)
   - Beslutningsnote (meget kort: er der noget vi skal beslutte? fx tokens/tilgange)
   - Links/filstier i repo:
     - Figma-link
     - docs/components/<komponent>.md (skal oprettes/opdateres)
     - docs/decisions/ADR-xxxx-<titel>.md (hvis der er et valg)
     - PR-template
     - Skriv det hele i Asana-beskrivelsen som en overskuelig tekst med overskrifter og bullet points.

6) Opret subtasks:
   - Docs
   - Beslutning (ADR)
   - Implementering
   - Review

## Output-regel (meget vigtig)
Alt indhold du normalt ville skrive i chatten (problem, scope, acceptance criteria, DoD, beslutningsnote, plan/overblik, osv.)
skal skrives ind i Asana-taskens beskrivelse (html_notes).

Chat-svaret må KUN indeholde:
- task-id
- direkte link
- og stop


7) Returnér KUN:
   - task-id
   - direkte link
   - og STOP (ingen ekstra forslag eller arbejde bagefter)

## Vigtigt om Asana-projekt
Når du opretter en task:
- Brug ALDRIG workspace-id som project_id.
- Find først det rigtige projekt-id ved at søge/list projekter og matche på navn: "Designsystem - Backlog".
- Brug derefter det fundne projekt-id i create task.
Hvis projektet ikke kan findes: spørg brugeren om et link til projektet og STOP.


