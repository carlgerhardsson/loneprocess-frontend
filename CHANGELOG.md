# Changelog

Alla noterbara ändringar i detta projekt dokumenteras i denna fil.

Formatet är baserat på [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- API integration med Löneprocess Backend
- Smart caching (60 sekunder) för att minimera API-kostnader
- Live-data från production API istället för statisk mockdata
- Manuell refresh-knapp för att uppdatera data
- API status-indikator i footer
- Cache age visas för användaren
- Graceful offline-läge vid API-fel
- Komplett API service layer (`src/services/api.js`)
- Error handling utilities (`src/utils/errorHandler.js`)
- API setup dokumentation (`docs/API_SETUP.md`)
- `.env.example` template för API-konfiguration

### Changed
- API Base URL uppdaterad från localhost till production endpoint
- Footer visar nu "Live-data från Löneprocess API" vid anslutning
- Version uppdaterad till v1.6.0-beta
- `loadActivitiesFromAPI()` använder nu smart caching
- `saveActivityToAPI()` synkar ändringar till backend

### Fixed
- API error handling förbättrad med användarvänliga felmeddelanden
- Rate limiting implementerad för att undvika överskridning av kostnadsgränser

### Security
- ⚠️ API-nyckel är för tillfället hårdkodad (ska flyttas till miljövariabler)
- `.gitignore` uppdaterad för att skydda `.env` filer

---

## [1.5.0] - 2026-02-17

### Added
- Per-period state management (localStorage)
- Verktygslåda för att redigera aktiviteter
- 20 POL LA-aktiviteter baserade på Användarhandbok 2025.2
- Checklista med delsteg för varje aktivitet
- Framdrift per fas (Före, Kontroll, Efter)
- Rollbaserad access control (Lönespecialist, Lönechef, Systemspecialist)
- Kommentarsfunktion för aktiviteter
- POL-referenser och länkar till LA-systemet

### Changed
- UI förbättrad med Tailwind CSS
- Responsiv design för mobila enheter

---

## [1.0.0] - 2026-01-15

### Added
- Initial release
- Grundläggande checklista-funktionalitet
- Login-system med testanvändare
- Statiska aktiviteter för löneprocess

---

**Format:** [Semantic Versioning](https://semver.org/)  
**Repository:** https://github.com/carlgerhardsson/loneprocess-frontend
