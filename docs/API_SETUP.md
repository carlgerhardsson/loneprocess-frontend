# 🔐 API Integration Setup Guide

## Snabbstart (5 minuter)

### Steg 1: Skapa .env fil

```bash
# Kopiera template-filen
cp .env.example .env
```

### Steg 2: Lägg in din API-nyckel

Öppna `.env` filen och ersätt placehodern med din **riktiga API-nyckel**:

```bash
# .env (DENNA FIL ÄR I .gitignore!)
VITE_API_BASE_URL=https://loneprocess-api-922770673146.us-central1.run.app
VITE_LONEPROCESS_API_KEY=din-riktiga-api-nyckel-här
```

### Steg 3: Verifiera att .env INTE commit:as

```bash
# Kontrollera att .env är ignored
git status

# .env ska INTE visas i output!
# Om den visas - COMMIT INTE!
```

---

## ⚠️ Säkerhet - KRITISKT!

### ✅ DO:
- Använd `.env` fil för API-nyckel
- Håll `.env` i `.gitignore` (redan gjort)
- Dela ALDRIG din API-nyckel via email/Slack/chat
- Rotera nyckeln regelbundet

### ❌ DON'T:
- Commit:a ALDRIG `.env` till git
- Hardcoda ALDRIG API-nyckel i source code
- Dela ALDRIG API-nyckel i public repositories
- Använd ALDRIG samma nyckel för development och production

---

## 🌐 API-dokumentation

### Base URL
```
https://loneprocess-api-922770673146.us-central1.run.app
```

### Swagger UI (Interactive API Docs)
```
https://loneprocess-api-922770673146.us-central1.run.app/docs
```

### Endpoints

**Activities:**
- `GET /api/v1/activities` - Lista alla aktiviteter
- `GET /api/v1/activities/{id}` - Hämta specifik aktivitet
- `PUT /api/v1/activities/{id}` - Uppdatera aktivitet

**Löneperioder:**
- `GET /api/v1/loneperiods` - Lista alla perioder
- `GET /api/v1/loneperiods/{id}` - Hämta specifik period

### Autentisering

Alla requests kräver `X-API-Key` header:

```javascript
fetch('https://loneprocess-api-922770673146.us-central1.run.app/api/v1/activities', {
  headers: {
    'X-API-Key': import.meta.env.VITE_LONEPROCESS_API_KEY
  }
})
```

---

## 🚦 Rate Limits

**VIKTIGT:** API:et har följande begränsningar:

- **60 requests per minut** per IP
- **Max 1 request per minut** (rekommenderat för kostnadskontroll)

### Caching

Löneportalen cachar API-svar i **1 minut** för att hålla nere kostnader:

```javascript
// Automatisk cache (1 minut)
const activities = await loadActivitiesFromAPI();

// Manuell refresh via UI-knapp
forceAPIRefresh();
```

---

## 🧪 Testa API-anslutningen

### Med curl:

```bash
# Läs din API-nyckel från .env (om du har den)
source .env

# Testa health endpoint (ingen auth krävs)
curl https://loneprocess-api-922770673146.us-central1.run.app/health

# Testa activities endpoint (kräver API-nyckel)
curl -H "X-API-Key: $VITE_LONEPROCESS_API_KEY" \
  https://loneprocess-api-922770673146.us-central1.run.app/api/v1/activities
```

### I browsern:

Öppna Swagger UI och testa endpoints interaktivt:
```
https://loneprocess-api-922770673146.us-central1.run.app/docs
```

---

## 📚 Ytterligare dokumentation

- [Frontend Start Here](https://github.com/carlgerhardsson/loneprocess-api/blob/main/FRONTEND_START_HERE.md)
- [Welcome Frontend](https://github.com/carlgerhardsson/loneprocess-api/blob/main/docs/WELCOME_FRONTEND.md)
- [Integration Guide](https://github.com/carlgerhardsson/loneprocess-api/blob/main/docs/FRONTEND_INTEGRATION_GUIDE.md)

---

## 🆘 Support

**Teknisk support:**
- Email: carl.gerhardsson@cgi.com
- GitHub Issues: https://github.com/carlgerhardsson/loneprocess-api/issues

**Response times:**
- 🔴 Kritiska issues: 4 timmar
- 🟡 Allmänna frågor: 24 timmar
- 🟢 Feature requests: 3 dagar

---

## ✅ Checklist

Innan du börjar utveckla:

- [ ] `.env` fil skapad från `.env.example`
- [ ] API-nyckel inlagd i `.env`
- [ ] Verifierat att `.env` INTE visas i `git status`
- [ ] Testat API-anslutning med curl eller Swagger UI
- [ ] Läst API-dokumentationen

---

**Skapad:** 2026-03-14  
**Del av:** Issue #2 - API Integration
