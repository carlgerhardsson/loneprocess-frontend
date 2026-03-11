# Löneportalen

**Digital checklista för löneprocessen baserad på POL LA 2025.2**

![Version](https://img.shields.io/badge/version-1.5.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Översikt

Löneportalen är en webbaserad digital checklista som hjälper löneadministratörer att systematiskt genomföra månatliga löneprocesser enligt POL LA (Löneadministration) Användarhandbok 2025.2.

### Funktioner

✅ **20 POL-baserade aktiviteter** strukturerade i tre faser  
✅ **Automatisk statusberäkning** via delsteg  
✅ **Per-period state** - Varje månad har sin egen oberoende framdrift  
✅ **Fellistor och rapporter** kopplade till specifika delsteg  
✅ **Verktygslåda** för redigering av aktiviteter  
✅ **API-ready** med markeringar för backend-integration  
✅ **localStorage-persistens** - Data sparas lokalt i webbläsaren

## 🚀 Snabbstart

### Live Demo
Besök: [https://carlgerhardsson.github.io/loneprocess-frontend/](https://carlgerhardsson.github.io/loneprocess-frontend/)

### Lokal utveckling

```bash
# Klona repot
git clone https://github.com/carlgerhardsson/loneprocess-frontend.git
cd loneprocess-frontend

# Öppna i webbläsare
open src/loneportalen.html
# eller använd en lokal server
npx serve src
```

## 📁 Projektstruktur

```
loneprocess-frontend/
├── src/
│   └── loneportalen.html          # Huvudapplikation (single-file)
├── docs/
│   ├── ARCHITECTURE.md             # Teknisk arkitektur
│   ├── CHANGELOG.md                # Versionshistorik
│   └── POL_ACTIVITIES.md           # Aktivitetsdokumentation
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Auto-deploy till GitHub Pages
│       └── lint.yml                # Kodkvalitetskontroll
└── README.md
```

## 👥 Användare & Roller

Applikationen har tre rolltyper:

| Roll | E-post (demo) | Rättigheter |
|------|---------------|-------------|
| **Lönespecialist** | lonespecialist@loneportalen.se | Bocka av aktiviteter |
| **Lönechef** | lonechef@loneportalen.se | Alla rättigheter inkl. redigera/ta bort |
| **Systemspecialist** | systemspecialist@loneportalen.se | Endast läsrättigheter |

**Lösenord för alla:** `demo123`

## 🔧 Teknisk stack

- **Frontend:** Vanilla JavaScript + HTML5
- **Styling:** Tailwind CSS (CDN)
- **State:** localStorage för persistens
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📖 Faser & Aktiviteter

### Fas 1: Före Löneberäkning (8 aktiviteter)
Rapportering & förberedelse innan lönekörning

### Fas 2: Kontrollperiod (5 aktiviteter)
Provlön & kontroller innan definitiv körning

### Fas 3: Efter Löneberäkning (7 aktiviteter)
Definitiv körning, AGI-redovisning & avstämning

Se [POL_ACTIVITIES.md](docs/POL_ACTIVITIES.md) för fullständig lista.

## 🔄 Versionshistorik

- **v1.5.0** - Verktygslåda fullt funktionell
- **v1.4.0** - Fellistor/rapporter per delsteg
- **v1.3.0** - Per-period state
- **v1.2.0** - Delsteg styr aktivitetsstatus
- **v1.1.0** - POL-baserade aktiviteter
- **v1.0.0** - Initial release

Se [CHANGELOG.md](docs/CHANGELOG.md) för detaljer.

## 🤝 Bidra

Projektet följer branschstandard även för små projekt:

1. Forka repot
2. Skapa en feature branch (`git checkout -b feature/amazing-feature`)
3. Committa dina ändringar (`git commit -m 'Add amazing feature'`)
4. Pusha till branchen (`git push origin feature/amazing-feature`)
5. Öppna en Pull Request

## 📝 Licens

MIT License - se [LICENSE](LICENSE) för detaljer.

## 🔗 Relaterade projekt

- **Backend API:** _Kommer snart_
- **POL LA Dokumentation:** Intern CGI-dokumentation

## 📧 Kontakt

Carl Gerhardsson - [@carlgerhardsson](https://github.com/carlgerhardsson)

Project Link: [https://github.com/carlgerhardsson/loneprocess-frontend](https://github.com/carlgerhardsson/loneprocess-frontend)

---

**Notering:** Detta är ett internt verktyg baserat på POL LA Användarhandbok 2025.2 från CGI. POL-dokumentationen är proprietär och ingår inte i detta repo.
