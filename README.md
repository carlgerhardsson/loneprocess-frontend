# 🎯 Löneportalen

**Digital checklista för löneprocessen baserad på POL LA 2025.2**

[![Version](https://img.shields.io/badge/version-1.5.0-purple)](https://github.com/carlgerhardsson/loneprocess-frontend/releases)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Tests](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/test.yml/badge.svg)](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/test.yml)
[![Security](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/security.yml/badge.svg)](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/security.yml)
[![Deploy](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/deploy-enhanced.yml/badge.svg)](https://github.com/carlgerhardsson/loneprocess-frontend/actions/workflows/deploy-enhanced.yml)

---

## 📋 Översikt

Löneportalen är en **production-ready** webbaserad digital checklista som hjälper löneadministratörer att systematiskt genomföra månatliga löneprocesser enligt POL LA (Löneadministration) Användarhandbok 2025.2.

### ✨ Nyckelfördelar

🎯 **20 POL-baserade aktiviteter** strukturerade i tre faser  
📊 **Automatisk statusberäkning** via 67 detaljerade delsteg  
📅 **Per-period state** - Varje månad har sin egen oberoende framdrift  
⚠️ **Fellistor och rapporter** kopplade till specifika delsteg  
🔧 **Verktygslåda** för redigering av aktiviteter  
🔌 **API-ready** med markeringar för backend-integration  
💾 **localStorage-persistens** - Data sparas lokalt i webbläsaren  
🔐 **Enterprise security** - CodeQL, Dependabot, Secret scanning  
🧪 **Full test coverage** - 16 E2E tests med Playwright  

---

## 🚀 Quick Start

### 🌐 Live Demo

**Besök:** [https://carlgerhardsson.github.io/loneprocess-frontend/](https://carlgerhardsson.github.io/loneprocess-frontend/)

**Demo-användare:**
- **Lönespecialist:** `lonespecialist@loneportalen.se`
- **Lönechef:** `lonechef@loneportalen.se`
- **Systemspecialist:** `systemspecialist@loneportalen.se`

**Lösenord:** `demo123`

### 💻 Lokal utveckling

```bash
# 1. Klona repot
git clone https://github.com/carlgerhardsson/loneprocess-frontend.git
cd loneprocess-frontend

# 2. Installera dependencies (för test & lint)
npm install

# 3A. Öppna direkt i webbläsare (inget build behövs!)
open src/loneportalen.html

# 3B. Eller använd lokal server
npx serve src

# 4. Kör tester
npm test                # Playwright E2E tests
npm run lint            # ESLint
npm run format:check    # Prettier
```

---

## 🏗️ Arkitektur

### Single-File Design

Applikationen är byggd som en **standalone HTML-fil** (55KB) med inbäddad JavaScript och CSS:

```
loneportalen.html (55KB)
├── HTML Structure
├── CSS (Tailwind + Custom)
├── JavaScript (Vanilla ES6+)
└── Data (20 POL aktiviteter)
```

**Fördelar:**
- ✅ Inga build tools i production
- ✅ Fungerar offline efter första laddning
- ✅ Enkel deployment (en fil)
- ✅ Minimal attack surface

📖 **Läs mer:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## 📁 Projektstruktur

```
loneprocess-frontend/
├── .github/
│   ├── workflows/
│   │   ├── deploy-enhanced.yml    # Deploy med quality gates
│   │   ├── test.yml               # Playwright E2E tests
│   │   ├── security.yml           # CodeQL + npm audit
│   │   └── quality.yml            # Lint + Lighthouse
│   └── CODEOWNERS                 # Auto-review
│
├── docs/
│   ├── ARCHITECTURE.md            # System design & decisions
│   ├── CI_CD.md                   # Pipeline documentation
│   ├── CHANGELOG.md               # Version history
│   └── POL_ACTIVITIES.md          # Activity reference
│
├── src/
│   ├── index.html                 # Landing page
│   └── loneportalen.html          # Main app (55KB)
│
├── tests/
│   └── e2e/
│       ├── login.spec.js          # 7 login tests
│       └── activities.spec.js     # 9 activity tests
│
├── CONTRIBUTING.md                # How to contribute
├── LICENSE                        # MIT License
├── SECURITY.md                    # Security policy
├── package.json                   # Dependencies & scripts
├── playwright.config.js           # Test configuration
└── README.md                      # This file
```

---

## 👥 Användare & Roller

| Roll | E-post (demo) | Rättigheter |
|------|---------------|-------------|
| **Lönespecialist** | lonespecialist@loneportalen.se | ✅ Bocka av aktiviteter<br>❌ Redigera aktiviteter<br>❌ Ta bort aktiviteter |
| **Lönechef** | lonechef@loneportalen.se | ✅ Bocka av aktiviteter<br>✅ Redigera aktiviteter<br>✅ Ta bort aktiviteter |
| **Systemspecialist** | systemspecialist@loneportalen.se | ❌ Bocka av aktiviteter<br>✅ Redigera metadata<br>❌ Ta bort aktiviteter |

---

## 🔧 Teknisk Stack

### Frontend
- **Core:** Vanilla JavaScript (ES6+), HTML5
- **Styling:** Tailwind CSS (CDN)
- **Fonts:** Google Fonts (Inter)
- **State:** localStorage för persistens

### CI/CD Pipeline
- **Testing:** Playwright (E2E), ESLint, Prettier
- **Security:** CodeQL, Dependabot, npm audit, Secret scanning
- **Quality:** Lighthouse CI (Performance, Accessibility, SEO)
- **Deploy:** GitHub Actions → GitHub Pages
- **Monitoring:** GitHub Security tab

### Development
- **Node:** ≥18.0.0
- **Package Manager:** npm ≥9.0.0
- **Browsers:** Chrome, Firefox, Safari (Desktop + Mobile)

📖 **Läs mer:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## 📖 Löneprocess Faser

### 📘 Fas 1: Före Löneberäkning (Lön 1)
**8 aktiviteter** - Rapportering & förberedelse innan lönekörning

Exempel:
- Kontrollera driftsbilden
- Hantera nyanställningar och anställningsändringar
- Registrera slutlöner och avgångar
- Rapportera tillfälliga lönehändelser

### 📙 Fas 2: Kontrollperiod (Mellanperiod)
**5 aktiviteter** - Provlön & kontroller innan definitiv körning

Exempel:
- Starta och granska provlönekörning
- Granska felsignaler arbetsgivardeklaration (AGI)
- Granska lönesummor och nyckeltal
- Korrigera fel från provlönekörning

### 📗 Fas 3: Efter Löneberäkning (Lön klar)
**7 aktiviteter** - Definitiv körning, AGI-redovisning & avstämning

Exempel:
- Starta och bekräfta definitiv lönekörning
- Skicka bankfil och bekräfta utbetalning
- AGI-redovisning till Skatteverket
- Stäm av ackumulatorer och tidbanker

📖 **Fullständig lista:** [docs/POL_ACTIVITIES.md](docs/POL_ACTIVITIES.md)

---

## 🔐 Security & Quality

### Security Features

| Feature | Status | Beskrivning |
|---------|--------|-------------|
| **CodeQL** | ![Enabled](https://img.shields.io/badge/status-enabled-success) | Automatisk sårbarhetsscanning |
| **Dependabot** | ![Enabled](https://img.shields.io/badge/status-enabled-success) | Dependency alerts + auto-PRs |
| **Secret Scanning** | ![Enabled](https://img.shields.io/badge/status-enabled-success) | Detekterar läckta credentials |
| **Push Protection** | ![Enabled](https://img.shields.io/badge/status-enabled-success) | Blockerar secrets före commit |
| **npm Audit** | ![Enabled](https://img.shields.io/badge/status-enabled-success) | Vulnerability scanning |

📖 **Läs mer:** [SECURITY.md](SECURITY.md)

### Quality Metrics

```
✅ Test Coverage:      16 E2E tests (100% critical paths)
✅ Performance:        >80% Lighthouse score
✅ Accessibility:      >90% Lighthouse score
✅ Best Practices:     >90% Lighthouse score
✅ SEO:               >80% Lighthouse score
```

📖 **Läs mer:** [docs/CI_CD.md](docs/CI_CD.md)

---

## 🧪 Testing

### Test Suite

**E2E Tests (Playwright):**
- ✅ 7 login flow tests
- ✅ 9 activity workflow tests
- ✅ Multi-browser testing (Chrome, Firefox, Safari)
- ✅ Mobile testing (iPhone, Android)

**Running Tests:**
```bash
npm test              # Run all tests
npm run test:ui       # Interactive test UI
npm run test:headed   # See tests run in browser
```

**Test Results:** [GitHub Actions](https://github.com/carlgerhardsson/loneprocess-frontend/actions)

---

## 🔄 CI/CD Pipeline

### Automated Workflows

**On every push to `main`:**
1. ✅ **Test Suite** - E2E tests (16 tests)
2. ✅ **Code Quality** - ESLint + Prettier + Lighthouse
3. ✅ **Security Scan** - CodeQL + Dependabot + Secrets
4. ✅ **Quality Gate** - Must pass to deploy
5. ✅ **Deploy** - GitHub Pages (if quality gate passes)
6. ✅ **Smoke Tests** - Post-deployment verification

**Pipeline Flow:**
```
Push → Tests → Quality → Security → Gate → Deploy → Verify
```

📖 **Läs mer:** [docs/CI_CD.md](docs/CI_CD.md)

---

## 🔄 Versionshistorik

| Version | Datum | Highlights |
|---------|-------|------------|
| **v1.5.0** | 2026-02-17 | Verktygslåda fullt funktionell, rollbaserad redigering |
| **v1.4.0** | 2026-02-23 | Fellistor/rapporter per delsteg (ej aktivitetsnivå) |
| **v1.3.0** | 2026-02-17 | Per-period state i localStorage |
| **v1.2.0** | 2026-02-17 | Delsteg styr aktivitetsstatus automatiskt |
| **v1.1.0** | 2026-02-17 | 20 POL-aktiviteter med 67 delsteg |
| **v1.0.0** | 2026-02-17 | Initial release |

📖 **Fullständig changelog:** [docs/CHANGELOG.md](docs/CHANGELOG.md)

---

## 🤝 Bidra till projektet

Vi välkomnar bidrag! Projektet följer industry best practices:

### Quick Start

1. **Fork** projektet
2. **Clone** din fork: `git clone https://github.com/YOUR-USERNAME/loneprocess-frontend.git`
3. **Skapa branch:** `git checkout -b feature/amazing-feature`
4. **Committa:** `git commit -m 'Add amazing feature'`
5. **Pusha:** `git push origin feature/amazing-feature`
6. **Öppna PR** mot `main`

### Development Guidelines

```bash
# Innan du committar
npm run lint              # Check code quality
npm run format:check      # Check formatting
npm test                  # Run E2E tests
```

📖 **Läs mer:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📚 Dokumentation

| Dokument | Beskrivning |
|----------|-------------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Systemarkitektur & tekniska beslut |
| [CI_CD.md](docs/CI_CD.md) | Pipeline dokumentation & workflows |
| [SECURITY.md](SECURITY.md) | Säkerhetspolicy & sårbarhetsrapportering |
| [CHANGELOG.md](docs/CHANGELOG.md) | Detaljerad versionshistorik |
| [POL_ACTIVITIES.md](docs/POL_ACTIVITIES.md) | Fullständig aktivitetslista |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Guide för bidragsgivare |

---

## 📝 Licens

MIT License - se [LICENSE](LICENSE) för detaljer.

**TL;DR:**
- ✅ Kommersiell användning
- ✅ Modifiering
- ✅ Distribution
- ✅ Privat användning
- ⚠️ Ingen garanti/warranty

---

## 🔗 Relaterade Projekt

- **Backend API:** https://github.com/carlgerhardsson/loneprocess-api
- **POL LA Dokumentation:** Intern CGI-dokumentation (proprietär)

---

## 📧 Kontakt

**Carl Gerhardsson**
- GitHub: [@carlgerhardsson](https://github.com/carlgerhardsson)
- Email: carl.gerhardsson@cgi.com

**Project Links:**
- Repository: [github.com/carlgerhardsson/loneprocess-frontend](https://github.com/carlgerhardsson/loneprocess-frontend)
- Live Demo: [carlgerhardsson.github.io/loneprocess-frontend](https://carlgerhardsson.github.io/loneprocess-frontend/)
- Issues: [github.com/carlgerhardsson/loneprocess-frontend/issues](https://github.com/carlgerhardsson/loneprocess-frontend/issues)
- Security: [github.com/carlgerhardsson/loneprocess-frontend/security](https://github.com/carlgerhardsson/loneprocess-frontend/security)

---

## 🙏 Acknowledgments

- **POL LA Team** - För POL LA Användarhandbok 2025.2
- **CGI** - För utvecklingsmöjligheten
- **Open Source Community** - För fantastiska verktyg

---

<div align="center">

**⭐ Star projektet om det var användbart!**

Made with ❤️ by [Carl Gerhardsson](https://github.com/carlgerhardsson)

</div>
