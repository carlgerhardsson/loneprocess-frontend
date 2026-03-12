# 🏗️ Löneportalen - System Architecture

## Översikt

Löneportalen är en single-page application (SPA) för att hantera löneprocessen enligt POL LA Användarhandbok 2025.2. Applikationen är byggd som en standalone HTML-fil med inbäddad JavaScript och CSS, designad för maximal portabilitet och minimal komplexitet.

---

## 📋 Innehållsförteckning

- [Teknisk Stack](#teknisk-stack)
- [Arkitekturprinciper](#arkitekturprinciper)
- [Datamodell](#datamodell)
- [Komponentstruktur](#komponentstruktur)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Filstruktur](#filstruktur)

---

## 🛠️ Teknisk Stack

### Frontend
- **HTML5** - Semantisk markup
- **Vanilla JavaScript (ES6+)** - Ingen framework-overhead
- **Tailwind CSS** (CDN) - Utility-first styling
- **Google Fonts** (Inter) - Modern typografi

### Build & Deploy
- **Ingen build-process** - Direct-to-browser
- **GitHub Pages** - Statisk hosting
- **GitHub Actions** - CI/CD automation

### Testing & Quality
- **Playwright** - E2E testing (18 tests)
- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Lighthouse** - Performance audits

### Security
- **CodeQL** - Static code analysis
- **Dependabot** - Dependency scanning
- **Secret Scanning** - Credential detection
- **npm audit** - Vulnerability checks

---

## 🎯 Arkitekturprinciper

### 1. **Zero Dependencies Runtime**
```html
<!-- Inga npm packages i production -->
<script src="https://cdn.tailwindcss.com"></script>
<script>/* All app logic inline */</script>
```

**Fördelar:**
- ✅ Inga version conflicts
- ✅ Fungerar offline (efter första laddning)
- ✅ Enkel deployment
- ✅ Minimal attack surface

### 2. **Single File Architecture**
```
loneportalen.html (55KB)
├── HTML Structure
├── CSS (Tailwind + Custom)
├── JavaScript Application Logic
└── Data (POL Activities embedded)
```

**Fördelar:**
- ✅ Enkel att dela
- ✅ Enkel att deploya
- ✅ Enkel att underhålla
- ✅ Inga broken dependencies

### 3. **Progressive Enhancement**
```javascript
// Fungerar utan API
const apiStatus = 'checking';
activities.forEach(a => {
  a.inAPI = false; // Fallback to local data
});

// Förbättras med API
if (await checkApiHealth()) {
  await loadActivitiesFromAPI();
}
```

### 4. **Client-Side State Management**
```javascript
// localStorage för persistence
const STORAGE_KEY = 'loneportalen_periodData';
periodData = {
  '2025-03': { activityId: { done, status, comment, checklist } }
};
```

---

## 📊 Datamodell

### Aktivitetsstruktur

```javascript
{
  id: 1,                    // Unik identifierare
  processNr: '1.1',         // POL process-nummer
  phase: 'fore',            // före | kontroll | efter
  name: 'Aktivitetsnamn',
  person: 'Elif Bylund',    // Ansvarig person
  done: false,              // Slutförd?
  status: 0,                // 0-100% (beräknas från delsteg)
  comment: '',              // Fritext kommentar
  link: 'LA > Path',        // Sökväg i POL
  inAPI: true,              // Synkas mot backend?
  checklist: [              // Delsteg
    {
      id: 101,
      name: 'Delsteg beskrivning',
      done: false,
      errorLists: ['Fellista namn'],
      reports: ['Rapport namn']
    }
  ],
  polRef: 'POL LA s. 272'  // Manual-referens
}
```

### Användarroller

```javascript
const USERS = {
  'lonespecialist@loneportalen.se': {
    name: 'Elif Bylund',
    role: 'Lönespecialist',
    canComplete: true,   // Kan markera som klar
    canEdit: false,      // Kan redigera aktiviteter
    canDelete: false     // Kan ta bort aktiviteter
  },
  'lonechef@loneportalen.se': {
    name: 'Hassan Sundberg',
    role: 'Lönechef',
    canComplete: true,
    canEdit: true,
    canDelete: true      // Full access
  },
  'systemspecialist@loneportalen.se': {
    name: 'Tua Jonasson',
    role: 'Systemspecialist',
    canComplete: false,  // Endast läsrättigheter för aktiviteter
    canEdit: true,       // Kan redigera metadata
    canDelete: false
  }
};
```

### Period-State

```javascript
periodData = {
  '2025-03': {           // Period (YYYY-MM)
    1: {                 // Activity ID
      done: true,
      status: 100,
      comment: 'Klart!',
      checklist: {
        101: true,       // Checklist item ID: done status
        102: false
      }
    }
  }
};
```

---

## 🧩 Komponentstruktur

### Huvudkomponenter

```
App
├── Login
│   ├── EmailInput
│   ├── QuickLoginButtons
│   └── TestUserInfo
│
├── Header
│   ├── Logo
│   ├── UserInfo
│   └── LogoutButton
│
├── Navigation
│   ├── Tab: Överblick
│   ├── Tab: Löneperioder
│   └── Tab: Verktygslåda
│
├── Överblick (Main View)
│   ├── PeriodSelector
│   ├── ProgressBar (Total)
│   ├── PhaseCards (3x)
│   │   ├── CircularProgress
│   │   └── ActivityList
│   └── ActivityTable
│       └── ActivityRow[]
│           ├── ExpandButton
│           ├── PhaseTag
│           ├── ActivityInfo
│           ├── ProgressBar (Mini)
│           ├── StatusPercent
│           └── Checkbox
│           └── (Expanded)
│               ├── POL-Reference
│               ├── Checklist
│               │   └── ChecklistItem[]
│               └── CommentSection
│
├── Löneperioder
│   └── PeriodList
│       └── PeriodCard[]
│
├── Verktygslåda
│   ├── ActivityTree
│   │   └── ActivityNode[]
│   └── EditForm
│       ├── NameInput
│       ├── PersonSelect
│       ├── LinkInput
│       ├── POL-RefInput
│       └── ActionButtons
│
├── CommentModal
│   ├── Textarea
│   └── SaveButton
│
└── Footer
    ├── APIStatus
    └── VersionInfo
```

### Render-funktioner

```javascript
// Top-level rendering
render()
├── renderLogin()          // Login screen
└── renderApp()            // Main application
    ├── renderOversikt()   // Overview tab
    ├── renderPerioder()   // Periods tab
    └── renderVerktyg()    // Toolbox tab

// Sub-components
renderRow(activity, user)           // Table row
renderExpanded(activity, user)      // Expanded details
phaseCard(title, pct, list)         // Phase progress card
circle(pct, theme)                  // Circular progress
renderCommentModal()                // Comment dialog
renderFooter()                      // Footer with API status
```

---

## 🔄 State Management

### State Variables

```javascript
// Session state (lost on refresh)
let loggedInUser = sessionStorage.getItem('user');
let currentTab = 'overblick';
let expandedActivities = new Set();
let showCommentModal = false;
let commentActivityId = null;

// Persistent state (localStorage)
let currentPeriod = '2025-03';
let periodData = {};  // Loaded from localStorage

// API state
let apiStatus = 'checking';      // checking | connected | disconnected
let lastApiCheck = null;
let apiActivities = [];
```

### State Flow

```
User Action → Event Handler → State Update → render() → DOM Update
```

Exempel:
```javascript
// 1. User clicks checkbox
toggleChecklist(activityId, itemId)

// 2. Update state
item.done = !item.done;
recalcActivity(activity);

// 3. Save to localStorage
setPeriodActivity(currentPeriod, activityId, {...});

// 4. Sync to API
saveActivityToAPI(activity);

// 5. Re-render
render();
```

### Persistence Strategy

```javascript
// Load on init
function loadPeriodData() {
  const raw = localStorage.getItem('loneportalen_periodData');
  periodData = raw ? JSON.parse(raw) : {};
}

// Save on every change
function savePeriodData() {
  localStorage.setItem('loneportalen_periodData', 
    JSON.stringify(periodData));
}

// Hydrate activities with saved state
function hydrateActivities(period) {
  return activities.map(a => {
    const saved = periodData[period]?.[a.id];
    return { ...a, ...saved };
  });
}
```

---

## 🔌 API Integration

### API Endpoints

```javascript
const API_BASE_URL = 'http://localhost:8000';
const API_ENDPOINTS = {
  health: '/health',
  activities: '/api/v1/activities',
  periods: '/api/v1/loneperiods'
};
```

### API Functions

```javascript
// Health check
async function checkApiHealth() {
  try {
    const r = await fetch(API_BASE_URL + '/health');
    return r.ok;
  } catch {
    return false;
  }
}

// Load activities
async function loadActivitiesFromAPI() {
  const r = await fetch(API_BASE_URL + '/api/v1/activities');
  apiActivities = await r.json();
  // Merge with local activities
}

// Save activity
async function saveActivityToAPI(activity) {
  if (!activity.inAPI) return;
  
  await fetch(`${API_BASE_URL}/api/v1/activities/${activity.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: activity.id,
      name: activity.name,
      completed: activity.done,
      completion_percentage: activity.status,
      comment: activity.comment
    })
  });
}
```

### API-Marked Activities

```javascript
// Only 5 activities sync with API
activities.filter(a => a.inAPI) = [
  { id: 2, name: 'Hantera nyanställningar...', inAPI: true },
  { id: 3, name: 'Registrera slutlöner...', inAPI: true },
  { id: 5, name: 'Uppdatera fasta tillägg...', inAPI: true },
  { id: 6, name: 'Rapportera tillfälliga lönehändelser...', inAPI: true },
  { id: 12, name: 'Kontrollera frånvaro...', inAPI: true }
];
```

---

## 📁 Filstruktur

```
loneprocess-frontend/
├── .github/
│   ├── workflows/
│   │   ├── deploy-enhanced.yml    # Deploy med quality gates
│   │   ├── deploy.yml             # Basic deploy
│   │   ├── quality.yml            # Lint + Lighthouse
│   │   ├── security.yml           # CodeQL + npm audit
│   │   └── test.yml               # Playwright E2E tests
│   └── CODEOWNERS                 # Code review automation
│
├── docs/
│   ├── ARCHITECTURE.md            # Denna fil
│   ├── CHANGELOG.md               # Version history
│   └── POL_ACTIVITIES.md          # POL aktivitetslista
│
├── src/
│   ├── index.html                 # Landing page
│   └── loneportalen.html          # Main application (55KB)
│
├── tests/
│   └── e2e/
│       ├── login.spec.js          # Login tests (7 tests)
│       └── activities.spec.js     # Activity tests (9 tests)
│
├── .eslintrc.json                 # ESLint config
├── .gitignore                     # Git ignore rules
├── .lighthouserc.json             # Lighthouse thresholds
├── .prettierrc                    # Prettier config
├── CONTRIBUTING.md                # Contribution guide
├── LICENSE                        # MIT License
├── package.json                   # Dependencies
├── package-lock.json              # Locked versions
├── playwright.config.js           # Playwright config
└── README.md                      # Project overview
```

---

## 🎨 Design Patterns

### 1. **Module Pattern**
```javascript
// Encapsulated functionality
const activities = [ /* data */ ];
const USERS = { /* config */ };

function render() { /* private logic */ }
window.login = () => { /* public API */ };
```

### 2. **Observer Pattern**
```javascript
// State changes trigger re-render
function toggleActivity(id) {
  updateState();
  render(); // Observer notified
}
```

### 3. **Strategy Pattern**
```javascript
// Different rendering strategies per tab
const renderers = {
  overblick: renderOversikt,
  perioder: renderPerioder,
  verktyg: renderVerktyg
};
renderers[currentTab]();
```

### 4. **Template Pattern**
```javascript
// Reusable component templates
function phaseCard(title, sub, theme, pct, list) {
  const colors = themes[theme];
  return `<div class="${colors.bg}">...</div>`;
}
```

---

## 🔧 Tekniska Beslut

### Varför Single-File?
- **Deployment**: Enkel att deploya (en fil)
- **Portabilitet**: Fungerar överallt (ingen build)
- **Underhåll**: Allt på ett ställe
- **Performance**: Mindre requests

### Varför Vanilla JS?
- **Storlek**: Ingen framework-overhead
- **Snabbhet**: Direct DOM manipulation
- **Enkelhet**: Lättare att förstå
- **Kontroll**: Full kontroll över rendering

### Varför localStorage?
- **Offline**: Fungerar utan backend
- **Snabbhet**: Instant state restore
- **Enkelhet**: Native browser API
- **Privacy**: Data stannar på device

### Varför Tailwind CDN?
- **DX**: Snabb utveckling
- **Consistency**: Design system built-in
- **Size**: Purged i production (om build)
- **Flexibilitet**: Easy customization

---

## 📈 Performance

### Metrics (Lighthouse)
- **Performance**: ≥80%
- **Accessibility**: ≥90%
- **Best Practices**: ≥90%
- **SEO**: ≥80%

### Optimization Strategies
- ✅ Minimal DOM manipulation
- ✅ Event delegation
- ✅ Lazy rendering (expand on demand)
- ✅ LocalStorage caching
- ✅ CDN för externa resources

---

## 🔐 Security

### Client-Side Security
- ✅ No eval() or innerHTML (XSS protection)
- ✅ CSP-ready architecture
- ✅ No sensitive data in localStorage
- ✅ HTTPS-only deployment

### Backend Integration Security
- ✅ API calls over HTTPS only
- ✅ No credentials in frontend
- ✅ CORS handling
- ✅ Input validation

---

## 🚀 Future Enhancements

### Planned Features
- [ ] PWA support (Service Worker)
- [ ] Offline sync queue
- [ ] Export to Excel/PDF
- [ ] Email notifications
- [ ] Real-time collaboration
- [ ] Advanced analytics dashboard

### Technical Debt
- [ ] Add JSDoc comments
- [ ] Extract CSS to separate file
- [ ] Add unit tests (Vitest)
- [ ] Implement virtual scrolling for large lists
- [ ] Add error boundaries

---

## 📚 References

- [POL LA Användarhandbok 2025.2](../project/LA_POL_2025_2.pdf)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Playwright Documentation](https://playwright.dev)
- [GitHub Actions Documentation](https://docs.github.com/actions)

---

**Version:** 1.5.0  
**Last Updated:** 2026-03-11  
**Maintainer:** Carl Gerhardsson
