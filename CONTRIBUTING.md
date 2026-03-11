# Contributing to Löneportalen

Tack för ditt intresse! Vi välkomnar bidrag från alla.

## 🚀 Hur du bidrar

### 1. Forka & Klona

```bash
# Forka repot på GitHub först, sedan:
git clone https://github.com/DIT-ANVÄNDARNAMN/loneprocess-frontend.git
cd loneprocess-frontend
```

### 2. Skapa en branch

```bash
git checkout -b feature/min-nya-feature
# eller
git checkout -b bugfix/fix-for-issue-123
```

**Branch-namngivning:**
- `feature/` - Nya funktioner
- `bugfix/` - Buggfixar
- `docs/` - Dokumentationsändringar
- `refactor/` - Kodomstrukturering

### 3. Gör dina ändringar

```bash
# Installera dev dependencies
npm install

# Starta lokal server
npm run dev
# Öppna http://localhost:3000

# Testa dina ändringar i webbläsaren
```

### 4. Kodkvalitet

Innan du commitar, kör:

```bash
# Formatera kod
npm run format

# Kör linting
npm run lint
```

### 5. Commit

Följ [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: lägg till export till Excel"
git commit -m "fix: rätta delsteg-räknare i Fas 2"
git commit -m "docs: uppdatera README med nya screenshots"
```

**Commit-typer:**
- `feat:` - Ny funktion
- `fix:` - Buggfix
- `docs:` - Dokumentation
- `style:` - Formatering (ingen kodlogik)
- `refactor:` - Kodomstrukturering
- `test:` - Tester
- `chore:` - Byggprocess, dependencies

### 6. Push & Pull Request

```bash
git push origin feature/min-nya-feature
```

Gå till GitHub och skapa en Pull Request mot `main`.

**PR-template:**
```markdown
## Beskrivning
Kort sammanfattning av vad som ändrats och varför.

## Typ av ändring
- [ ] Buggfix
- [ ] Ny funktion
- [ ] Breaking change
- [ ] Dokumentation

## Checklista
- [ ] Min kod följer projektets stilguide
- [ ] Jag har kört `npm run lint` utan fel
- [ ] Jag har testat ändringarna lokalt
- [ ] Jag har uppdaterat dokumentationen
```

## 📋 Kodstil

### JavaScript

```javascript
// ✅ BRA
const activities = hydrated.filter(a => a.phase === 'fore');

// ❌ UNDVIK
var activities = hydrated.filter(function(a) {
  return a.phase === 'fore';
});
```

### Naming conventions

```javascript
// Variables & functions: camelCase
let currentPeriod = '2025-03';
function renderOversikt() { ... }

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'http://localhost:8000';

// HTML IDs: kebab-case eller snake_case
<div id="activity-list"></div>
<input id="edit_name">
```

### Kommentarer

```javascript
// ✅ Förklara VARFÖR, inte VAD
// Delsteg måste räknas om efter toggle för att synka status med UI
recalcActivity(a);

// ❌ Uppenbar kommentar
// Räknar om aktiviteten
recalcActivity(a);
```

## 🐛 Rapportera buggar

Skapa en [GitHub Issue](https://github.com/carlgerhardsson/loneprocess-frontend/issues/new) med:

**Template:**
```markdown
**Beskrivning av buggen**
Kort beskrivning av vad som är fel.

**Steg för att återskapa**
1. Gå till '...'
2. Klicka på '...'
3. Scrolla ner till '...'
4. Se fel

**Förväntat beteende**
Vad som borde hända.

**Screenshots**
Om tillämpligt.

**Miljö:**
 - Browser: [Chrome 120, Firefox 121, etc]
 - OS: [Windows 11, macOS 14, etc]
 - Version: [1.5.0]
```

## 💡 Föreslå nya funktioner

Skapa en [Feature Request](https://github.com/carlgerhardsson/loneprocess-frontend/issues/new) med:

**Template:**
```markdown
**Problemet**
Beskriv problemet eller behovet.

**Föreslagen lösning**
Din idé på hur det skulle kunna lösas.

**Alternativ**
Andra sätt att lösa samma problem.

**Kontext**
Varför är detta viktigt? Vem skulle gynnas?
```

## 📚 Dokumentation

Om du ändrar funktionalitet, uppdatera också:

- [ ] `README.md` - Om det påverkar installation/användning
- [ ] `ARCHITECTURE.md` - Om det påverkar teknisk design
- [ ] `POL_ACTIVITIES.md` - Om aktiviteter ändras
- [ ] `CHANGELOG.md` - Lägg alltid till din ändring här

## 🧪 Testning

Vi har ingen automatiserad testning än, men testa alltid manuellt:

**Grundläggande test-suite:**
1. Logga in som alla tre roller
2. Byt mellan perioder
3. Bocka av delsteg
4. Lägg till kommentarer
5. Öppna Verktygslådan och redigera en aktivitet
6. Verifiera att data sparas (refresh-sidan)
7. Testa i minst Chrome + Firefox

## ❓ Frågor?

- Skapa en [GitHub Discussion](https://github.com/carlgerhardsson/loneprocess-frontend/discussions)
- Eller öppna en Issue med label `question`

## 📜 Code of Conduct

Var respektfull, konstruktiv och professionell. Vi följer GitHubs [Code of Conduct](https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct).

---

**Tack för ditt bidrag! 🙏**
