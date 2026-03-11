# POL-Aktiviteter

Fullständig lista över alla 20 aktiviteter i Löneportalen, baserade på **POL LA Användarhandbok 2025.2**.

## 📊 Översikt

| Fas | Antal aktiviteter | Syfte |
|-----|-------------------|-------|
| **Fas 1: Före Löneberäkning** | 8 | Rapportering & förberedelse |
| **Fas 2: Kontrollperiod** | 5 | Provlön & kontroller |
| **Fas 3: Efter Löneberäkning** | 7 | Definitiv körning & avstämning |
| **TOTALT** | **20** | |

---

## Fas 1: Före Löneberäkning (Lön 1)

Rapportering & förberedelse innan lönekörning

### 1.1 Kontrollera driftsbilden
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Arkiv > Driftsbild
- **POL-referens:** Driftsbilden (Arkiv > Driftsbild) – POL LA s. 272
- **API-kopplad:** Nej

**Delsteg:**
1. Kontrollera körningsstatus "För registrering"
2. Kontrollera att rätt period är markerad som körningsperiod
3. Bekräfta att AGI-redovisningskörning för föregående månad är slutförd

---

### 1.2 Hantera nyanställningar och anställningsändringar
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Lönerapportering > Anställningsregister
- **POL-referens:** Hantera anställd – POL LA s. 128; Bekräfta anställning s. 129
- **API-kopplad:** ✅ Ja

**Delsteg:**
1. Registrera nyanställningar i personregistret
   - 📊 Rapport: Personlogg
2. Bekräfta väntande anställningar (händelse på startsidan)
3. Kontrollera obligatoriska fält (personnr, skattekod, bankkonto)
   - ⚠️ Fellista: Sambandskontroll person-/anst.register
4. Kontrollera obeviljad föräldraledighet

---

### 1.3 Registrera slutlöner och avgångar
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Anställningsuppgifter > Slutlön i period
- **POL-referens:** Slutlön i period – POL LA s. 49; Anställningsuppgifter s. 48
- **API-kopplad:** ✅ Ja

**Delsteg:**
1. Ange avgångsdatum i anställningsregistret
2. Kontrollera semesterersättning vid avgång
   - 📊 Rapport: Slutlön rapport
3. Hantera tömning av tidbanker vid avgång
4. Kontrollera avslutade RAPP Auto-adressater

---

### 1.4 Hämta skatteuppgifter (FOS)
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Redigera > Underlag FOS-fråga
- **POL-referens:** Hämta skatteuppgifter – POL LA s. 84-85; FOS-fråga s. 152-153
- **API-kopplad:** Nej

**Delsteg:**
1. Kontrollera om FOS-frågor behöver skickas till Skatteverket
2. Hämta aktuella skatteuppgifter för nyanställda
3. Hantera inkomna FOS-svar

---

### 1.5 Uppdatera fasta tillägg/avdrag och löneuppgifter
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Lönerapportering > Fasta tillägg/avdrag
- **POL-referens:** Retroaktivitetsberäkning – POL LA s. 269; Fasta tillägg/avdrag s. 184
- **API-kopplad:** ✅ Ja

**Delsteg:**
1. Kontrollera och uppdatera lönerevision / nya löner
   - 📊 Rapport: Ändringslogg grundlön
2. Registrera nya fasta tillägg och avdrag
3. Beräkna retroaktiv lön (vid behov)
4. Granska resultat retroaktivitetsberäkning
   - 📊 Rapport: Retroresultat
5. Föra över godkänd retroaktivitet till Tillfälliga lönehändelser

---

### 1.6 Rapportera tillfälliga lönehändelser (frånvaro, OB, övertid m.m.)
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Lönerapportering > Tillfälliga lönehändelser
- **POL-referens:** Tillfälliga lönehändelser – POL LA s. 195; Överföring TID-rapporter s. 241-243
- **API-kopplad:** ✅ Ja

**Delsteg:**
1. Överför attesterade TID-rapporter från Självservice
   - ⚠️ Fellista: Fellista TID-inläsning
2. Hantera ev. oattesterade TID-rapporter
3. Registrera manuell frånvaro (sjuk, semester, föräldraledighet)
4. Kontrollera obeviljad föräldraledighet
5. Granska tidsavstämning (differens schema vs registrerad tid)
   - 📊 Rapport: Tidsavstämningsrapport
6. Läs in 7K-händelser (sjukfrånvaro från 7K)

---

### 1.7 Läs in externa filer (bilförmåner, fackavgifter, försäkringsavdrag)
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Arkiv > Speciella rutiner
- **POL-referens:** Speciella rutiner – POL LA s. 244-247
- **API-kopplad:** Nej

**Delsteg:**
1. Läs in bilförmåner
   - ⚠️ Fellista: Fellista bilförmåner
2. Läs in fackföreningsavgifter Unionen
   - ⚠️ Fellista: Fellista fackavgifter
3. Läs in försäkringsavdrag
   - ⚠️ Fellista: Fellista försäkringsavdrag
4. Kontrollera fellistor efter inläsning

---

### 1.8 Konteringsvalidering inför körning
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Rapporter > Konteringsvalidering
- **POL-referens:** Konteringsvalidering – POL LA s. 328
- **API-kopplad:** Nej

**Delsteg:**
1. Kör Konteringsvalidering och granska eventuella fel
   - 📊 Rapport: Konteringsvalideringsrapport
2. Åtgärda felaktiga kontobegrepp i personregistret

---

## Fas 2: Kontrollperiod (Mellanperiod)

Provlön & kontroller innan definitiv körning

### 2.1 Starta och granska provlönekörning
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Arkiv > Till löneberäkning (Preliminär)
- **POL-referens:** Till löneberäkning – POL LA s. 272; Driftsbilden körningsstatus s. 274
- **API-kopplad:** Nej

**Delsteg:**
1. Starta preliminär lönekörning (provlön)
   - ⚠️ Fellista: Fellista provlön
2. Invänta att körningen får status "Transaktioner skapade, preliminär"
3. Granska lönespecifikationer för stickprov
   - 📊 Rapport: Lönespecifikationer (provlön)
4. Verifiera att retroaktivitet beräknats korrekt
   - 📊 Rapport: Retroresultat

---

### 2.2 Granska felsignaler arbetsgivardeklaration (AGI)
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Arbetsgivardeklaration > Felsignaler
- **POL-referens:** Åtgärda signaler från fellista – POL LA s. 303-304
- **API-kopplad:** Nej

**Delsteg:**
1. Öppna Felsignaler och granska S-, B- och R-signaler
   - ⚠️ Fellista: Fellista AGI (S-fel, B-fel, R-kontroller)
2. Åtgärda obligatoriska S- och B-fel
3. Granska POL-interna P-signaler (skattekod, negativa belopp)
4. Markera behandlade signaler med åtgärdsnoteringar
   - 📊 Rapport: Individuppgift SKV

---

### 2.3 Granska lönesummor och nyckeltal
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Lönerapportering > Lönespec
- **POL-referens:** Granska underlaget AGI – POL LA s. 301-302
- **API-kopplad:** Nej

**Delsteg:**
1. Jämför lönesumma mot föregående period (avvikelsekontroll)
   - 📊 Rapport: Lönesummarapport
2. Kontrollera ovanligt höga/låga utbetalningar
3. Granska arbetsgivaravgifter och skatteavdrag i huvuduppgiften
   - 📊 Rapport: Huvuduppgift AGI

---

### 2.4 Kontrollera frånvaro och föräldraledighet
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Redigera > Obeviljad föräldraledighet
- **POL-referens:** Föräldraledighet – POL LA s. 105; Frånvarostatistik s. 349
- **API-kopplad:** ✅ Ja

**Delsteg:**
1. Granska obeviljad föräldraledighet
   - ⚠️ Fellista: Fellista frånvaro
2. Kontrollera frånvarostatistik och avvikelser
   - 📊 Rapport: Frånvarostatistik
3. Verifiera semesterdagar och semesterersättning
   - 📊 Rapport: Semesterrapport

---

### 2.5 Korrigera fel från provlönekörning
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Lönerapportering > Tillfälliga lönehändelser
- **POL-referens:** Tillfälliga lönehändelser – POL LA s. 195; Långtidsfrånvaro s. 200-201
- **API-kopplad:** Nej

**Delsteg:**
1. Rätta felaktiga transaktioner i Tillfälliga lönehändelser
2. Backa felaktiga frånvarotransaktioner vid behov
3. Uppdatera felaktiga löne- eller personuppgifter

---

## Fas 3: Efter Löneberäkning (Lön klar)

Definitiv körning, AGI-redovisning & avstämning

### 3.1 Starta och bekräfta definitiv lönekörning
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Arkiv > Till löneberäkning (Definitiv)
- **POL-referens:** Driftsbilden körningsstatus – POL LA s. 272-274
- **API-kopplad:** Nej

**Delsteg:**
1. Bekräfta att AGI-körning för föregående period är slutförd
2. Starta definitiv lönekörning
   - ⚠️ Fellista: Fellista definitiv körning
3. Invänta status "Resultat mottaget" i driftsbilden
   - 📊 Rapport: Körningslogg

---

### 3.2 Granska och godkänn lönespecifikationer
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Lönerapportering > Lönespecifikation
- **POL-referens:** Den anställdes lönespecifikation – POL LA s. 270-271
- **API-kopplad:** Nej

**Delsteg:**
1. Granska stickprov av definitiva lönespecifikationer
   - 📊 Rapport: Lönespecifikationer (definitiv)
2. Kontrollera retroaktiva utbetalningar är korrekta
3. Verifiera avgångna anställdas slutlöner

---

### 3.3 Hantera extrautbetalningar och justeringar
- **Ansvarig:** Elif Bylund
- **Sökväg:** LA > Lönerapportering > Extrautbetalning
- **POL-referens:** Extrautbetalningar och korrigeringar – POL LA s. 305; Extrautbetalning s. 224-226
- **API-kopplad:** Nej

**Delsteg:**
1. Hantera eventuella extrautbetalningar
   - 📊 Rapport: Extrautbetalningslista
2. Justera lönespecifikationer (Justera lönespecifikation)
3. Kör AGI redovisningskörning efter extrautbetalningar

---

### 3.4 Skicka bankfil och bekräfta utbetalning
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Rapporter > Skapa bankfil
- **POL-referens:** Skapa bankfil för förskott – POL LA s. 344
- **API-kopplad:** Nej

**Delsteg:**
1. Skapa och skicka bankfil till bank
   - 📊 Rapport: Bankfil
2. Bekräfta att utbetalning registrerats hos banken
3. Skapa bankfil för eventuella förskott
   - 📊 Rapport: Utbetalningslista

---

### 3.5 AGI-redovisning till Skatteverket
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Arbetsgivardeklaration
- **POL-referens:** Granska underlaget AGI – POL LA s. 301-305; AGI redovisningskörning s. 278
- **API-kopplad:** Nej

**Delsteg:**
1. Verifiera individuppgifter och huvuduppgift
   - 📊 Rapporter: Individuppgift SKV, Huvuduppgift AGI
2. Utför AGI redovisningskörning
   - ⚠️ Fellista: AGI-felsignaler (S, B, R, P)
3. Ladda upp fil hos Skatteverket
4. Kontrollera att redovisningsperiod är korrekt angiven

---

### 3.6 Stäm av ackumulatorer och tidbanker
- **Ansvarig:** Tua Jonasson
- **Sökväg:** LA > Lönerapportering > Ackumulatorer
- **POL-referens:** Ackumulatorer – POL LA s. 122; Tidbanker s. 389
- **API-kopplad:** Nej

**Delsteg:**
1. Granska beloppsackumulatorer (semester, övertid, komp)
   - 📊 Rapport: Ackumulatorrapport
2. Kontrollera tidbanker – kvarvarande saldo
   - 📊 Rapport: Tidbanksrapport
3. Verifiera att flextidssaldon är rimliga

---

### 3.7 Rensa och arkivera – stäng löneperioden
- **Ansvarig:** Hassan Sundberg
- **Sökväg:** LA > Arkiv > Driftsbild
- **POL-referens:** Rensning av historik – POL LA s. 533; Driftsbilden s. 272
- **API-kopplad:** Nej

**Delsteg:**
1. Kontrollera att alla körningar har status "Resultat mottaget"
2. Rensa gamla historikposter vid behov (Rensning av historik)
3. Arkivera körningsloggar och rapporter
   - 📊 Rapporter: Styrregisterlogg, Ändringslogg
4. Kontrollera att nästa periods driftsbild är korrekt

---

## Sammanfattning

### API-kopplade aktiviteter (5 st)
Dessa aktiviteter synkas automatiskt mot backend när API är tillgängligt:

1. **1.2** Hantera nyanställningar och anställningsändringar
2. **1.3** Registrera slutlöner och avgångar
3. **1.5** Uppdatera fasta tillägg/avdrag och löneuppgifter
4. **1.6** Rapportera tillfälliga lönehändelser
5. **2.4** Kontrollera frånvaro och föräldraledighet

### Totalt antal delsteg per fas

- **Fas 1:** 26 delsteg
- **Fas 2:** 17 delsteg
- **Fas 3:** 24 delsteg
- **TOTALT:** 67 delsteg

---

**Källa:** POL LA Användarhandbok 2025.2  
**Senast uppdaterad:** 2026-02-17  
**Version:** 1.5.0
