export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  placeId: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'W którym wieku powstał zamek w Wieruszowie?',
    options: ['XII wiek', 'XIV wiek', 'XVI wiek', 'XVIII wiek'],
    correctIndex: 1,
    placeId: 'zamek-wieruszow',
    explanation: 'Zamek powstał w połowie XIV wieku, za panowania Kazimierza Wielkiego.',
  },
  {
    id: 2,
    question: 'Z jakiego drewna zbudowano kościół św. Rocha?',
    options: ['Dębowego', 'Sosnowego', 'Modrzewiowego', 'Bukowego'],
    correctIndex: 2,
    placeId: 'kosciol-sw-rocha',
    explanation: 'Kościół zbudowano w 1746 roku z drzewa modrzewiowego.',
  },
  {
    id: 3,
    question: 'Co stoi w centrum Rynku Wieruszowskiego?',
    options: ['Fontanna', 'Pomnik św. Floriana', 'Ratusz', 'Studnia miejska'],
    correctIndex: 1,
    placeId: 'rynek-wieruszow',
    explanation: 'W centrum rynku stoi pomnik św. Floriana z 1990 roku.',
  },
  {
    id: 4,
    question: 'Kto zniszczył zamek w Wieruszowie w 1655 roku?',
    options: ['Krzyżacy', 'Turcy', 'Szwedzi', 'Austriacy'],
    correctIndex: 2,
    placeId: 'zamek-wieruszow',
    explanation: 'Zamek został zniszczony podczas potopu szwedzkiego w 1655 roku.',
  },
  {
    id: 5,
    question: 'Jak wysoka jest baszta zamku w Bolesławcu?',
    options: ['Około 10 metrów', 'Około 15 metrów', 'Około 22 metrów', 'Około 30 metrów'],
    correctIndex: 2,
    placeId: 'zamek-boleslawiec',
    explanation: 'Ośmioboczna baszta zamku w Bolesławcu ma wysokość około 22 metrów.',
  },
  {
    id: 6,
    question: 'Czym jest „Długosz Królewski" chroniony w rezerwacie?',
    options: ['Drzewem', 'Paprocią', 'Grzybem', 'Ptakiem'],
    correctIndex: 1,
    placeId: 'rezerwat-dlugosz',
    explanation:
      'Długosz królewski (Osmunda regalis) to największa polska paproć, osiągająca do 2 metrów.',
  },
  {
    id: 7,
    question: 'W jakim stylu zbudowano Pałac Łopuchinów w Chróścinie?',
    options: ['Barokowym', 'Neogotyckim', 'Klasycystycznym', 'Secesyjnym'],
    correctIndex: 1,
    placeId: 'palac-chroscin',
    explanation:
      'Pałac wybudowano w stylu neogotyckim w 1888 r., z krenelaŻem i ząbkowanymi szczytami.',
  },
  {
    id: 8,
    question: 'Kiedy Wieruszów stracił prawa miejskie?',
    options: ['W 1795 roku', 'W 1870 roku', 'W 1918 roku', 'W 1939 roku'],
    correctIndex: 1,
    placeId: 'rynek-wieruszow',
    explanation:
      'Wieruszów stracił prawa miejskie w 1870 roku jako karę za pomoc uczestnikom powstania styczniowego.',
  },
  {
    id: 9,
    question: 'Jaki samolot stoi na Wzgórzu Zamkowym w Wieruszowie?',
    options: ['Douglas DC-3', 'Lisunow Li-2P', 'Antonow An-2', 'Iljuszyn Ił-14'],
    correctIndex: 1,
    placeId: 'samolot-lisunow',
    explanation:
      'Na Wzgórzu Zamkowym stoi Lisunow Li-2P (SP-LKI) — radziecki odpowiednik DC-3, sprowadzony w 1968 r. na 600-lecie miasta.',
  },
  {
    id: 10,
    question: 'Z jakiej okazji sprowadzono samolot do Wieruszowa?',
    options: ['Zakończenia II wojny światowej', '600-lecia miasta', 'Odzyskania praw miejskich', 'Otwarcia lotniska'],
    correctIndex: 1,
    placeId: 'samolot-lisunow',
    explanation:
      'Samolot trafił do Wieruszowa w 1968 roku z okazji 600-lecia nadania praw miejskich.',
  },
  {
    id: 11,
    question: 'Czym jest Aleja Olimpijczyków na Rynku w Wieruszowie?',
    options: ['Szpalerem drzew', 'Tablicami w chodniku', 'Rzeźbami sportowców', 'Murem z nazwiskami'],
    correctIndex: 1,
    placeId: 'rynek-wieruszow',
    explanation:
      'Aleja Olimpijczyków i Paraolimpijczyków to tablice osadzone w chodniku Rynku — pierwsza taka aleja w Polsce, otwarta w 2015 r.',
  },
  {
    id: 12,
    question: 'Ile dębów czerwonych liczy Aleja Dębów?',
    options: ['45', '65', '95', '120'],
    correctIndex: 2,
    placeId: 'aleja-debow',
    explanation:
      'Aleja liczy 95 dębów czerwonych wzdłuż drogi nr 450, uznanych za pomnik przyrody w 2001 roku.',
  },
  {
    id: 13,
    question: 'Kto zaprojektował pałac w Sokolnikach?',
    options: ['Jan Tomicki', 'Fryderyk Nax', 'Generał Łopuchin', 'Łukasz Bniński'],
    correctIndex: 1,
    placeId: 'palac-sokolniki',
    explanation:
      'Pałac zaprojektował drezdeński architekt Fryderyk Nax w latach 1774–1775 na zlecenie starosty Łukasza Bnińskiego.',
  },
  {
    id: 14,
    question: 'Jak mieszkańcy Wieruszowa nazywają samolot na Wzgórzu Zamkowym?',
    options: ['Skrzydlak', 'Litka', 'Lotnik', 'Ptaszek'],
    correctIndex: 1,
    placeId: 'samolot-lisunow',
    explanation:
      'Mieszkańcy czule nazywają samolot „Litką" — od nazwy Lisunow Li-2.',
  },
  {
    id: 15,
    question: 'Kto wzniósł ośmioboczną basztę zamku w Bolesławcu?',
    options: ['Bolesław Pobożny', 'Kazimierz Wielki', 'Władysław Opolczyk', 'Władysław Jagiełło'],
    correctIndex: 2,
    placeId: 'zamek-boleslawiec',
    explanation:
      'Basztę (stolp) wzniósł Władysław Opolczyk po 1370 roku, rozbudowując zamek Kazimierza Wielkiego.',
  },
];
