# Seoxi x0 — stan początkowy

Projekt jest na etapie koncepcji. Aplikacja to oryginalna scena demonstracyjna szablonu Phaser, a nie działająca wersja Seoxi x0. Zasady gry i propozycja prototypu znajdują się w `docs/PROJECT.md`.

Szablon pochodzi z `https://github.com/series-ai/run-template-2d-phaser` i ma własne warunki w `LICENSE.txt`. Zależności zaktualizowano na życzenie użytkownika; zachowuj lockfile i sprawdzaj dokumentację zgodną z jego wersją SDK. Nie uruchamiaj `rundot init`, publikacji, wysyłki repozytorium ani płatnych operacji bez osobnej decyzji. Nie zakładaj integracji lub importu do Adventure Studio bez potwierdzenia.

Kontrole: `npm run build` przeszło po aktualizacji, z ostrzeżeniem o dużym pliku wynikowym; lokalny Vite odpowiedział HTTP 200, a headless Chrome utworzył canvas bez błędów `pageerror`. To test sceny demonstracyjnej, nie hosta RUN. `npm audit` zgłasza cztery wysokie podatności w łańcuchu Firebase/Firestore/gRPC; automatyczna propozycja npm oznacza downgrade Firebase. Instalacja Firebase 12.19.0 zgłasza także zależność wymagającą Node >=24.12.0, podczas gdy lokalnie działa 24.11.1. Te problemy pozostają otwarte.

Następny krok: ustalić widok 2D i zakres pierwszego prototypu, a następnie wdrażać go i testować etapami. Zapis świata, osiągalność celu oraz trwałość stanu wymagają osobnych testów; obecnie nie są zaimplementowane.
