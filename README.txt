Specyfikacja projektu - WaterPond

1. Opis projektu

WaterPond to aplikacja internetowa służąca do monitorowania dziennego spożycia wody przez użytkownika. Problem który rozwiązuje to brak nawyku regularnego nawadniania organizmu - wiele osób zapomina o piciu wody w ciągu dnia, co negatywnie wpływa na zdrowie i samopoczucie. Aplikacja umożliwia rejestrację i śledzenie ilości wypitej wody, przypomina o nawadnianiu poprzez powiadomienia systemowe oraz wizualizuje postęp w intuicyjny sposób z wykorzystaniem animacji Lottie.

2. Dlaczego technologia aplikacji internetowej

Dostępność z wielu urządzeń - aplikacja internetowa działa na laptopie, telefonie i tablecie bez konieczności instalowania osobnego oprogramowania na każdym urządzeniu. Wystarczy przeglądarka internetowa.
Centralne przechowywanie danych - dane użytkownika (ilość wypitej wody, ustawienia, historia) są przechowywane na serwerze w bazie danych, dzięki czemu są dostępne z każdego urządzenia po zalogowaniu.
Łatwa aktualizacja - zmiany w aplikacji są wprowadzane raz na serwerze i natychmiast dostępne dla wszystkich użytkowników bez konieczności aktualizowania aplikacji po stronie użytkownika.
Niski próg wejścia dla użytkownika - użytkownik nie musi instalować żadnej aplikacji, wystarczy wejść na stronę i założyć konto. Obniża to barierę korzystania z systemu.


3. Wymagania funkcjonalne

System umożliwia rejestrację i logowanie użytkownika z wykorzystaniem bezpiecznego hashowania haseł.
Użytkownik może dodawać i odejmować ilość wypitej wody w porcjach 250ml lub 500ml.
Dzienny licznik wody resetuje się automatycznie o północy (przy pierwszym wejściu po nowej dobie).
Aplikacja wysyła systemowe powiadomienia przypominające o piciu wody co 30 minut.
Użytkownik może włączyć lub wyłączyć powiadomienia.
Aplikacja obsługuje tryb jasny i ciemny, a wybór jest zapamiętywany.
Użytkownik może się wylogować z aplikacji.


4. Wymagania pozafunkcjonalne

Bezpieczeństwo — hasła użytkowników są przechowywane w bazie danych wyłącznie w postaci zahashowanej (bcrypt). 

Responsywność - interfejs aplikacji jest dostosowany do różnych rozdzielczości ekranu (laptop, tablet, telefon) z wykorzystaniem CSS media queries, zapewniając wygodne korzystanie niezależnie od urządzenia.


5. Potencjalni odbiorcy systemu

Osoby dbające o zdrowie i nawodnienie - użytkownicy którzy chcą wyrobić nawyk regularnego picia wody i śledzić swoje dzienne spożycie.
Osoby pracujące przy komputerze - pracownicy biurowi i studenci spędzający wiele godzin przed ekranem, którzy często zapominają o nawadnianiu podczas intensywnej pracy.


6. Potencjalne korzyści biznesowe

Możliwość monetyzacji przez wersję premium - podstawowa wersja aplikacji może być bezpłatna, natomiast wersja premium mogłaby oferować rozszerzoną historię spożycia wody, statystyki tygodniowe/miesięczne oraz personalizowane cele nawodnienia, co stanowi model biznesowy freemium.
Współpraca z markami zdrowotymi i fitness - aplikacja skierowana do świadomych zdrowotnie użytkowników stanowi atrakcyjną platformę dla potencjalnych partnerów z branży zdrowia, fitness i suplementacji, otwierając możliwości sponsoringu lub reklamy kontekstowej.