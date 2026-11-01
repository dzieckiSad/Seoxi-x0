# Seoxi x0

## Koncepcja

Mroczna przygodowa gra survivalowa 2D na komputery PC, sterowana klawiaturą i myszą. Ostatni człowiek na planecie Seoxi budzi się w bazie x0 po katastrofie ekspedycji. Zniszczony szyb odciął go od powierzchni. Musi przejść przez podziemne miasta, odnaleźć lądownik, naprawić go i rozpocząć podróż na Ziemię.

Świat łączy ciemny kamień, zużyty metal, obcą architekturę i organiczne narośle. Występują dwa wrogie gatunki: stworzenia kolonijne budujące gniazda oraz samotne drapieżniki tropiące po dźwięku i śladach ruchu. Między gatunkami dochodzi do starć. Ludzie nie przeżyli; historię ekspedycji przekazują nagrania, sprzęt i ślady wydarzeń. Inspiracją nastroju jest Obcy kontra Predator, ale historia, stworzenia, architektura i technologia Seoxi mają być własne.

## Zasady projektu

- Jeden ocalały, spójny proceduralny świat i jeden ostateczny ratunek: powrót do domu.
- Baza x0, wyposażenie początkowe i przyczyna odcięcia są stałe. Baza służy przygotowaniu wypraw i przechowywaniu przedmiotów.
- Podziemia, połączenia, zasoby, zagrożenia i zadania generowane są raz na początku rozgrywki. Układ i zmiany pozostają trwałe podczas zapisu i wczytania.
- Zadania i zasoby wynikają ze świata. Każde zadanie ma dostępne rozwiązanie, kluczowe przedmioty są osiągalne i istnieje co najmniej jedna możliwa trasa na powierzchnię.
- Gracz zarządza zdrowiem, energią urządzeń, amunicją i środkami medycznymi. Światło i hałas mogą zdradzać jego obecność.
- Finał obejmuje naprawę i zasilenie lądownika; zwycięstwo następuje dopiero po opuszczeniu planety i rozpoczęciu podróży na Ziemię.

## Podstawa techniczna

Oficjalny szablon RUN `run-template-2d-phaser`, zaktualizowany do Phaser 4.2.1, TypeScript 7.0.2, Vite 8.3.5 i RUN SDK 5.33.0 według lockfile. Projekt jest lokalny, z historią szablonu pod zdalną nazwą `template-upstream`. Adventure Studio jest osobnym narzędziem przeglądarkowym; zgodność z importem tego projektu nie została potwierdzona. Ten dokument może służyć jako brief do ręcznego wykorzystania w Adventure Studio.

## Pierwszy proponowany prototyp — do uzgodnienia

Stała baza, niewielka sieć proceduralnych pomieszczeń z gwarantowaną drogą do celu, poruszanie klawiaturą i myszą oraz zapis seed i zmian świata. Zakres jest propozycją, nie zaimplementowaną mechaniką. Widok, styl graficzny, szczegóły walki i zapisów pozostają do ustalenia.
