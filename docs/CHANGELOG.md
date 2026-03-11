# Changelog

Alla noterbara ändringar i Löneportalen dokumenteras här.

Formatet baseras på [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
och projektet följer [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-02-17

### Added
- Verktygslåda fullt funktionell med klickbara aktiviteter
- Redigeringsformulär för aktivitetsmetadata (namn, ansvarig, POL-referens, sökväg)
- Visuell feedback för vald aktivitet i trädet
- Info-ruta med aktivitetsdetaljer (fas, process-nr, delsteg, API-status)
- Rollbaserad redigering (endast Lönechef kan ändra/ta bort)

### Changed
- POL-referens fält visar nu faktisk manualsidangivelse
- Trädet är nu scrollbart för bättre UX

## [1.4.0] - 2026-02-17

### Added
- Fellistor och rapporter kopplade per delsteg istället för aktivitetsnivå
- Ny kolumn "Fellista / Rapport" i checklistetabellen
- Färgade chips för fellistor (röd) och rapporter (grön)

### Changed
- Flyttade errorLists och reports från aktivitetsobjekt till checklist-items
- Uppdaterade alla 20 aktiviteter med korrekt delstegs-koppling

### Removed
- Gamla aktivitetsnivå-block för fellistor och rapporter

## [1.3.0] - 2026-02-17

### Added
- Per-period state management med localStorage-persistens
- Byt månad via period-väljare — varje månad har sin egen oberoende status
- Period-chips för snabbnavigering mellan månader
- Visar procent per period direkt i chips

### Changed
- Aktiviteter hydrateras dynamiskt baserat på vald period
- Kommentarer är period-specifika
- Total framdrift och fasdiagram baseras på aktiv period

## [1.2.0] - 2026-02-17

### Added
- Delsteg i checklistan styr nu automatiskt aktivitetsstatus
- Progress bar under aktivitetsnamn visar delstegsframdrift
- Räknare "X av Y delsteg" direkt i aktivitetsraden
- Huvud-checkbox är read-only när delsteg styr (med tooltip)

### Changed
- Status beräknas som (klara delsteg / totala delsteg) * 100
- Aktivitet markeras som "Klar" endast när alla delsteg är klara
- Total framdrift baseras på delsteg istället för bara aktiviteter

## [1.1.0] - 2026-02-17

### Added
- 20 POL-baserade aktiviteter från LA Användarhandbok 2025.2
- Strukturerade i tre faser: Före, Kontroll, Efter löneberäkning
- POL-referenser med sidnummer för varje aktivitet
- Sökvägar i LA-systemet (t.ex. "LA > Arkiv > Driftsbild")
- Fellistor och rapporter per aktivitet
- API-markeringar för 5 aktiviteter som ska synkas mot backend

### Changed
- Ersatte mockdata med verkliga arbetsflöden
- Detaljerade checklistor med 3-6 delsteg per aktivitet

## [1.0.0] - 2026-02-17

### Added
- Initial release av Löneportalen
- Tre faser (Före, Kontroll, Efter löneberäkning)
- Aktivitetschecklista med expand/collapse
- Rollbaserad behörighet (Lönespecialist, Lönechef, Systemspecialist)
- Kommentarfunktion per aktivitet
- Progress bars för total framdrift och per fas
- Verktygslåda med trädstruktur
- API-statusindikator i footer
- localStorage för datapersistens

### Technical
- Vanilla JavaScript + HTML5
- Tailwind CSS för styling
- Single-file architecture (loneportalen.html)

---

## Versionsnumrering

- **MAJOR** (x.0.0) - Brytande ändringar eller stora arkitekturomläggningar
- **MINOR** (1.x.0) - Nya funktioner, bakåtkompatibla
- **PATCH** (1.1.x) - Buggfixar, mindre förbättringar
