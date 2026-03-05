# PROMPT: Redesign TravelPL Website

> Skopiuj calosc do nowej rozmowy z Claude Code w katalogu travelpl-website.

---

## KONTEKST

Jestem wlascicielem strony biura podrozy TravelPL z Wieruszowa. Strona jest zbudowana w Astro + Tailwind CSS i jest wdrozona na Vercel (travelpl-website.vercel.app).

Potrzebuje kompleksowej poprawy strony pod katem:
- **Design** (PC + mobile) dostosowany do grupy docelowej
- **Copy** (teksty marketingowe) — konkretne, budujace zaufanie
- **Konwersja** — social proof, trust signals, urgency, CTA

## GRUPA DOCELOWA

### Persona A — "Pani Krystyna" (GLOWNA, 80% ruchu)
- **Wiek:** 55-70 lat
- **Lokalizacja:** Wieruszow i okolice (30km)
- **Technologia:** Smartfon (Android), Facebook — czesto ogladaja strone na telefonie po zobaczeniu posta na FB
- **Motywacja:** Wygodne wakacje "all inclusive" — wsiadam w autokar, nie musze nic organizowac
- **Obawy:** Czy to pewna firma? Ile dokladnie kosztuje? Co dokladnie jest w cenie? Jak zarezerwowac?
- **Zachowanie:** Skanuje strone, szuka ceny i numeru telefonu. NIE wypelnia formularzy — woli zadzwonic
- **Jezyk:** Prosty, polski, bez angielskich slow. "Wczasy" nie "vacation". "Stol szwedzki" nie "buffet"

### Persona B — "Pani Dyrektor" (wycieczki szkolne, 20%)
- **Wiek:** 35-55 lat
- **Rola:** Nauczycielka/dyrektor organizujaca wycieczke szkolna
- **Motywacja:** Szybko znalezc oferte, dostac wycene, miec pewnosc ze firma jest legalna
- **Zachowanie:** Szuka konkretnych informacji — co w cenie, jakie atrakcje, jak zarezerwowac

## ARCHITEKTURA STRONY (stan obecny)

```
src/
├── layouts/Layout.astro          — glowny layout (meta, navbar, footer, floating phone)
├── pages/
│   ├── index.astro               — glowna: Hero → FeaturedTrips → TripGrid → Contact
│   ├── o-nas.astro               — o firmie + WhyUs + HowToBook + FAQ
│   ├── wycieczki-szkolne.astro   — oferta szkolna + Contact
│   ├── aplikacja.astro           — nieistniejaca aplikacja (PROBLEM)
│   └── wycieczka/[slug].astro    — szczegoly wycieczki
├── components/
│   ├── Hero.astro                — video background + h1 + CTA
│   ├── Navbar.astro              — sticky nav + mobile menu
│   ├── FeaturedTrips.astro       — 3 najblizsze wycieczki (featured)
│   ├── TripGrid.astro            — wszystkie 12 wycieczek
│   ├── TripCard.astro            — karta wycieczki (obraz + info + cena + CTA)
│   ├── WhyUs.astro               — 6 powodow "dlaczego z nami"
│   ├── HowToBook.astro           — 3 kroki rezerwacji
│   ├── FAQ.astro                 — 7 pytan i odpowiedzi
│   ├── Contact.astro             — formularz + dane kontaktowe + FB + CTA telefon
│   ├── FloatingPhone.astro       — sticky phone button na mobile
│   ├── Footer.astro              — stopka z kontaktem i nawigacja
│   └── JsonLd.astro              — structured data
├── data/trips.ts                 — 12 wycieczek z pelnym opisem
├── styles/global.css             — base styles
└── tailwind.config.mjs           — kolory, spacing
```

## OBECNA KOLORYSTYKA
```
primary: '#1A5DC8'   (niebieski)
accent:  '#E91E90'   (rozowy)
dark:    '#1A1A1A'   (czarny)
light:   '#D6E8F7'   (jasny niebieski bg)
success: '#16A34A'   (zielony)
```

## ZIDENTYFIKOWANE PROBLEMY I ZMIANY DO WDROZENIA

### P0 — KRYTYCZNE (zrob jako pierwsze)

#### 1. Hero — lepsze copy
- **Obecne:** "Twoje wakacje zaczynaja sie tutaj"
- **Zmien na:** "Wycieczki autokarowe z Wieruszowa — wsiadasz i jedziesz!"
- **Subtitle obecne:** "Wygodne wycieczki autokarowe z Wieruszowa — morze, gory, przygoda. Wszystko w cenie."
- **Zmien na:** "Od lat organizujemy wczasy nad morzem, w gorach i za granica. Hotel, wyzywienie i ubezpieczenie — wszystko w cenie. Wystarczy spakować walizkę!"
- **CTA obecne:** "Sprawdz oferte 2026"
- **Zmien na:** "Zobacz wycieczki i ceny"
- **Drugi CTA obecne:** "Zadzwon: 793 705 063"
- **Zmien na:** "Zadzwon — zarezerwuj miejsce" (z numerem widocznym)

#### 2. Dodaj sekcje Social Proof (NOWY KOMPONENT)
Dodaj komponent `Testimonials.astro` miedzy FeaturedTrips a TripGrid na index.astro.

Zawartosc (uzyj tych przykladowych opinii — beda pozniej zastapione prawdziwymi):
```
- "Jezdze z TravelPL od 3 lat — kazda wycieczka to sama przyjemnosc. Organizacja na medal!" — Elzbieta z Wieruszowa
- "Nie musze sie o nic martwic. Wsiadam w autokar i mam wakacje z glowy." — Krzysztof z Kepna
- "Byliśmy z żoną w Bieszczadach — piękne widoki, świetny przewodnik i jedzenie rewelacja." — Marek i Anna
```

Dodaj tez statystyki: "12 wycieczek w sezonie 2026 | X lat doswiadczenia | Wyjazd z Wieruszowa" (zapytaj mnie o liczbe lat)

#### 3. Trust signals
Dodaj pod Hero lub w WhyUs:
- Numer licencji biura podrozy (placeholder: "Nr lic. [DO UZUPELNIENIA]")
- "Ubezpieczenie NNW w cenie kazdego wyjazdu"
- "Wyjazd z Wieruszowa — bez dojazdu do duzego miasta"

#### 4. Formularz kontaktowy — PLACEHOLDER
W `Contact.astro` linia 12 jest: `action="https://formspree.io/f/PLACEHOLDER"`
Zapytaj mnie o prawdziwy endpoint albo zintegruj z Formspree (utworz konto).

### P1 — WAZNE

#### 5. Typografia dla 50-70 lat
- W `global.css` — body font-size jest 18px (OK)
- Ale na mobile sprawdz czy headingi i tekst sa wystarczajaco duze
- Zwieksz `line-height` w TripCard z 1.7 na 1.8
- Upewnij sie ze min touch target to 48px (jest `min-h-touch: 48px` w configu — OK)
- **Kontrast:** Sprawdz accent `#E91E90` na bialym tle. Jesli WCAG AA nie przechodzi, zamien na ciemniejszy np. `#C5166E` lub `#D41876`

#### 6. Urgency/scarcity na kartach wycieczek
- Dodaj mozliwosc badge typu "Ostatnie miejsca!" w `trips.ts` (pole `urgencyBadge?: string`)
- Dla wycieczek ktore sa "featured" — dodaj informacje o limitowanej liczbie miejsc
- W TripCard — pokaz date zamkniecia zapisow jesli jest

#### 7. Lepsze CTA na kazdej karcie
- Obecne: przycisk "Wiecej" → strona szczegolowa
- Dodaj drugi CTA na karcie: "Zadzwon i zarezerwuj" (bezposredni link tel:)
- Dla Pani Krystyny — telefon to glowny kanal konwersji, nie formularz

#### 8. Usun/zastap strone "Aplikacja"
- Obecna strona `/aplikacja` reklamuje nieistniejaca aplikacje — to szkodzi wiarygodnosci
- **Opcja A:** Usun z nawigacji calkowicie
- **Opcja B:** Zastap strona "Galeria" ze zdjeciami z wycieczek
- **Opcja C:** Zostaw ale przenies na koniec nawigacji i zmniejsz widocznosc
- Zapytaj mnie ktora opcje preferuje

### P2 — ULEPSZENIA

#### 9. Uproszczenie TripCard
Na zdjeciu karty sa teraz 4 badges jednoczesnie (region, typ, badge, beachDistance) — zbyt duzo
- Zostaw max 2: region (lewy gora) + badge jesli jest (prawy gora)
- Typ (Wczasy/Wycieczka) i beach distance przenies pod zdjecie

#### 10. Sekcja "Nasz autokar" lub "Jak podrozujemy"
Dodaj mala sekcje z info o autokarze:
- Klimatyzacja
- Wygodne fotele
- Przerwy w trasie
To wazne dla grupy 50-70 — chca wiedziec ze bedzie wygodnie

#### 11. Banner szkoly na glownej
Na index.astro dodaj maly baner przed Contact: "Organizujesz wycieczke szkolna? Zobacz nasza oferte dla szkol →"

#### 12. FloatingPhone — popraw na mobile
Obecny floating button zajmuje cala szerokosc na mobile i zaslaniana content.
- Zmniejsz do ikony telefonu w prawym dolnym rogu (FAB style)
- Lub dodaj mozliwosc zamkniecia

### P3 — DESIGN UPGRADE

#### 13. Typografia
Obecny font: Inter/system-ui. Wg Anthropic Frontend Aesthetics Guide — to "AI slop".
Rozważ:
- **DM Sans** — czytelny, cieplejszy od Inter
- **Nunito** — zaokraglony, przyjazny, idealny dla turystyki
- **Outfit** — nowoczesny ale czytelny

#### 14. Animacje
Dodaj subtlne animacje:
- Staggered reveal kart wycieczek przy scrollowaniu (CSS `animation-delay`)
- Fade-in sekcji przy scrollu
- Hover effect na TripCard — delikatne podniesienie

#### 15. Kolorystyka
Obecna `light: #D6E8F7` jest OK ale monotonna.
Rozwaz dodanie cieplych akcentow:
- Piaskowy (`#F5E6D3`) dla sekcji "o nas" / social proof
- Morski zielony (`#0D9488`) jako alternatywny accent dla sekcji morskich

#### 16. Scroll indicator w Hero
Dodaj animowana strzalke w dol na dole Hero — osoby starsze moga nie wiedziec ze ponizej jest wiecej tresci.

## TECHNICZNE WYTYCZNE

### Anthropic Frontend Aesthetics (oficjalne wytyczne)
```
<frontend_aesthetics>
Unikaj "AI slop" aesthetic. Twórz distinctive, creative design.

Focus on:
- Typography: Unikaj generic fonts (Inter, Arial, Roboto). Wybierz cos z charakterem.
- Color & Theme: Dominant colors z sharp accents. Nie timid, evenly-distributed palettes.
- Motion: Animacje dla efektow i micro-interactions. CSS-only priority. Staggered reveals.
- Backgrounds: Atmosphere and depth, nie solid colors. CSS gradients, geometric patterns.
</frontend_aesthetics>
```

### Zasady kodowania
- Stack: Astro + Tailwind CSS (juz skonfigurowane)
- Nie twórz nowych plikow jesli mozesz edytowac istniejace
- Nie dodawaj zewnetrznych bibliotek JS — CSS animations only
- Mobile-first — 70% ruchu to telefony
- Kazdy przycisk min 48px height (touch target)
- Testuj WCAG AA kontrast dla kazdego tekstu

### Kolejnosc pracy
1. Najpierw napraw P0 (hero copy, social proof, trust, formularz)
2. Potem P1 (typografia, urgency, CTA, aplikacja)
3. Nastepnie P2 (karty, autokar, szkoly banner, floating phone)
4. Na koncu P3 (font, animacje, kolory, scroll indicator)

Po kazdym etapie — commituj i pushuj na GitHub (repo: marketingintelligencee/travelpl-website, auto-deploy na Vercel).

## DANE KONTAKTOWE FIRMY (source of truth)
- Nazwa: Biuro Podrozy TravelPL
- Adres: ul. Wroclawska 7, Wieruszow
- Tel: 793 705 063, 883 005 008
- Godziny biura: Poniedzialek 16:00-19:00, Sroda 11:00-13:00
- Facebook: https://www.facebook.com/transport.autokarow/
- 12 wycieczek w sezonie 2026, ceny 1250-2300 zl

## PYTANIA DO MNIE (zapytaj zanim zaczniesz)
1. Ile lat dziala firma? (potrzebne do social proof)
2. Ktora opcje dla strony Aplikacja? (usunac / galeria / zostawic)
3. Czy masz prawdziwy endpoint Formspree? Jesli nie — czy mam go utworzyc?
4. Czy masz prawdziwe opinie klientow? Jesli tak — podaj je zamiast przykladowych
5. Numer licencji biura podrozy?

---

Zacznij od przeczytania wszystkich komponentów i danych, a potem pracuj wg kolejnosci P0 → P1 → P2 → P3. Po kazdym etapie pytaj mnie o review.
