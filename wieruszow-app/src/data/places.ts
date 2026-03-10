export interface Place {
  id: string;
  name: string;
  category: 'zabytki' | 'sakralne' | 'przyroda' | 'kultura' | 'parki';
  shortDescription: string;
  fullDescription: string;
  lat: number;
  lng: number;
  image: string;
  contact?: {
    label: string;
    phone?: string;
    note?: string;
  };
}

export const categories = [
  { id: 'all', label: 'Wszystkie', icon: 'apps-outline' },
  { id: 'zabytki', label: 'Zabytki', icon: 'business-outline' },
  { id: 'sakralne', label: 'Sakralne', icon: 'heart-outline' },
  { id: 'przyroda', label: 'Przyroda', icon: 'leaf-outline' },
  { id: 'kultura', label: 'Kultura', icon: 'book-outline' },
  { id: 'parki', label: 'Parki', icon: 'flower-outline' },
] as const;

const BASE = import.meta.env.BASE_URL;

export const places: Place[] = [
  {
    id: 'samolot-lisunow',
    name: 'Samolot Lisunow Li-2P',
    category: 'kultura',
    shortDescription: 'Radziecki samolot pasażerski na Wzgórzu Zamkowym — symbol Wieruszowa',
    fullDescription:
      'Samolot Lisunow Li-2P (rejestracja SP-LKI) to radziecki odpowiednik legendarnego Douglasa DC-3, wyprodukowany w 1953 r. w Taszkencie. Służył w polskich liniach LOT do 1968 r. Trafił do Wieruszowa z okazji 600-lecia miasta — delegacja pojechała na Okęcie po autobusy, ale zamiast nich otrzymała wycofany samolot. Umieszczono go na Wzgórzu Zamkowym nad Prosną, a w środku uruchomiono kawiarnię prowadzoną przez GS. Mieszkańcy nazywają go czule „Litką". Kawiarnia już nie działa, ale samolot pozostaje kultowym punktem orientacyjnym miasta.',
    lat: 51.29614,
    lng: 18.14783,
    image: `${BASE}images/places/samolot.jpg`,
    contact: {
      label: 'Informacja turystyczna',
      phone: '+48627832641',
      note: 'Urząd Miejski w Wieruszowie — promocja@wieruszow.pl',
    },
  },
  {
    id: 'zamek-wieruszow',
    name: 'Ruiny zamku w Wieruszowie',
    category: 'zabytki',
    shortDescription: 'XIV-wieczny zamek zniszczony podczas potopu szwedzkiego',
    fullDescription:
      'Zamek powstał prawdopodobnie w połowie XIV wieku, za panowania Kazimierza Wielkiego. Pierwszym udokumentowanym właścicielem był Bernard Wierusz, sędzia ziemi wieluńskiej i opolskiej. W 1562 roku senator Jan Tomicki wybudował nową renesansową rezydencję na planie kwadratu z półokrągłymi basztami narożnymi, otoczoną fosą. W 1574 r. gościł tu król Henryk Walezy. Zamek został zniszczony w 1655 roku podczas potopu szwedzkiego. Dziś widoczne są zarys wzgórza zamkowego, resztki fundamentów i pozostałości fosy.',
    lat: 51.2949,
    lng: 18.1548,
    image: `${BASE}images/places/zamek-wieruszow.jpg`,
  },
  {
    id: 'kosciol-sw-rocha',
    name: 'Kościół św. Rocha',
    category: 'sakralne',
    shortDescription: 'Drewniany kościół z 1746 r. — perła architektury sakralnej',
    fullDescription:
      'Drewniany kościół zbudowany w 1746 roku z drzewa modrzewiowego przez parafian wieruszowskich staraniem ks. Pawła Tujkiewicza. Powstał jako podziękowanie Bogu za odwrócenie morowego powietrza (zarazy), która nawiedziła miasto i okolice. Konstrukcja zrębowa, dach kryty gontem, z wieżą z dwuramiennym krzyżem. Wewnątrz zachowane polichromie i ołtarz główny z XVII w. z obrazem św. Rozalii. Jeden z najcenniejszych zabytków sakralnej architektury drewnianej w regionie łódzkim. Co roku 16 sierpnia odbywa się odpust ku czci św. Rocha.',
    lat: 51.2865,
    lng: 18.1401,
    image: `${BASE}images/places/kosciol-rocha.jpg`,
  },
  {
    id: 'rynek-wieruszow',
    name: 'Rynek z Parkiem Miejskim',
    category: 'parki',
    shortDescription: 'Średniowieczny rynek z Aleją Olimpijczyków i makietą dawnego miasta',
    fullDescription:
      'Rynek jest reliktem średniowiecznego układu urbanistycznego i stanowi ścisłe centrum miasta. Dawne miejsce cotygodniowych targów zajmuje obecnie park miejski, w którego centrum stoi pomnik św. Floriana z 1990 r. Wśród drzew rośnie lipa srebrzysta — pomnik przyrody o obwodzie 253 cm. Na rynku znajduje się metalowa makieta dawnego Wieruszowa oraz pierwsza w Polsce Aleja Olimpijczyków i Paraolimpijczyków, otwarta 23 października 2015 r. W chodniku osadzono tablice upamiętniające polskich olimpijczyków i paraolimpijczyków, m.in. Władysława Kozakiewicza i Artura Partykę. Nowe tablice dodawane są co roku. Wieruszów otrzymał prawa miejskie w 1368 r., utracił je w 1870 r. za pomoc powstańcom styczniowym i odzyskał 7 lutego 1919 r.',
    lat: 51.2942,
    lng: 18.153,
    image: `${BASE}images/places/rynek.jpg`,
  },
  {
    id: 'makieta-wieruszowa',
    name: 'Makieta dawnego Wieruszowa',
    category: 'kultura',
    shortDescription: 'Metalowy model historycznego układu miasta na Rynku',
    fullDescription:
      'Metalowa makieta przedstawiająca dawny układ urbanistyczny Wieruszowa, umieszczona na płycie Rynku. Model ukazuje historyczną zabudowę miasta z czasów świetności — ratusz, kamienice, kościoły i mury obronne. Makieta jest ogólnodostępna i stanowi doskonały punkt wyjścia do zwiedzania miasta, pozwalając zorientować się w dawnym rozkładzie ulic i placów. Warto połączyć zwiedzanie z pobliską Aleją Olimpijczyków.',
    lat: 51.2942,
    lng: 18.153,
    image: `${BASE}images/places/makieta.jpg`,
  },
  {
    id: 'zamek-boleslawiec',
    name: 'Ruiny zamku w Bolesławcu',
    category: 'zabytki',
    shortDescription: 'XIII-wieczny zamek z ośmioboczną basztą o wysokości 22 metrów',
    fullDescription:
      'Główna atrakcja turystyczna Bolesławca nad Prosną. Pierwotna warownia powstała ok. 1268 r. z inicjatywy Bolesława Pobożnego. W latach 1333–1335 Kazimierz Wielki wzniósł nowy zamek ceglany. Po 1370 r. Władysław Opolczyk rozbudował go i wzniósł ośmioboczną basztę (stolp) o wysokości ok. 22 m, średnicy 8 m i grubości murów 3 m. Zamek oparł się oblężeniu wojsk Jagiełły w 1396 r. Dziś zachowała się baszta, fragmenty murów obwodowych i bramy. Ruiny są ogólnodostępne. Izba Muzealna (ul. Młyńska 4) prezentuje eksponaty z wykopalisk — zwiedzanie po umówieniu z Gminnym Centrum Kultury.',
    lat: 51.1977,
    lng: 18.1827,
    image: `${BASE}images/places/zamek-boleslawiec.jpg`,
    contact: {
      label: 'Umów wizytę w Izbie Muzealnej',
      phone: '+48627836723',
      note: 'Gminne Centrum Kultury w Bolesławcu, Rynek 4',
    },
  },
  {
    id: 'palac-chroscin',
    name: 'Pałac Łopuchinów w Chróścinie',
    category: 'zabytki',
    shortDescription: 'Neogotycki pałac z 1888 r. zwany "zamkiem" — dziś Dom Pomocy Społecznej',
    fullDescription:
      'Neogotycki pałac z 1888 roku w osadzie Chróścin-Zamek (gmina Bolesławiec), potocznie zwany „zamkiem" ze względu na detale architektoniczne: krenelaż, ząbkowane szczyty i fryz arkadkowy. Majątek otrzymał gen. Krasnokuckij od cara za tłumienie powstania styczniowego (1866). Budowę pałacu dokończył jego zięć, generał Łopuchin, umieszczając w nim rodowe witraże. Budynek wzbogaca dwukolorowa czerwono-czarna dachówka. Od 1952 r. mieści Dom Pomocy Społecznej. Wpisany do rejestru zabytków. Budynek można podziwiać wyłącznie z zewnątrz — zwiedzanie wnętrz nie jest możliwe.',
    lat: 51.1604,
    lng: 18.1949,
    image: `${BASE}images/places/palac-chroscin.jpg`,
    contact: {
      label: 'Dom Pomocy Społecznej',
      note: 'Zwiedzanie wnętrz niedostępne — budynek można podziwiać z zewnątrz',
    },
  },
  {
    id: 'rezerwat-dlugosz',
    name: 'Rezerwat „Długosz Królewski"',
    category: 'przyroda',
    shortDescription: 'Rezerwat chroniący największą polską paproć',
    fullDescription:
      'Rezerwat florystyczny o powierzchni 3,26 ha między Węglewicami a Biadaszkami (gmina Galewice), utworzony 23 października 1965 roku. Chroni największą i najokazalszą polską paproć — długosza królewskiego (Osmunda regalis L.), jedynego żywego przedstawiciela rodziny Osmundaceae w Europie. Jasnozielone, pierzaste liście osadzone na długich ogonkach osiągają do 2 metrów długości. Gatunek pod ścisłą ochroną, wpisany do Polskiej Czerwonej Księgi roślin zagrożonych. Do rezerwatu prowadzi oznakowany szlak pieszy (4,5 km) z Węglewic przez Las Grady.',
    lat: 51.3989,
    lng: 18.253,
    image: `${BASE}images/places/rezerwat.jpg`,
    contact: {
      label: 'Nadleśnictwo Przedborów',
      phone: '+48627320500',
      note: 'Poruszanie się poza wyznaczonymi ścieżkami wymaga zgody RDOŚ',
    },
  },
  {
    id: 'palac-sokolniki',
    name: 'Pałac i park w Sokolnikach',
    category: 'zabytki',
    shortDescription: 'Pałac w stylu rokoka saskiego z 1774 r. — własność prywatna',
    fullDescription:
      'Pałac wzniesiony w latach 1774–1775 w stylu rokoka saskiego, według projektu drezdeńskiego architekta Fryderyka Naxa, na zlecenie starosty Łukasza Bnińskiego. Budowla parterowa na planie wydłużonego prostokąta, z piętrowym ryzalitem i owalną salą balową, kryta dachem mansardowym. Otoczony zabytkowym parkiem o powierzchni 4 ha z układem geometrycznym, z lipami, wiązami i klonami o rozmiarach pomnikowych. Pałac jest własnością prywatną i nie jest udostępniony do zwiedzania — można go podziwiać z zewnątrz.',
    lat: 51.3055,
    lng: 18.3199,
    image: `${BASE}images/places/palac-sokolniki.jpg`,
    contact: {
      label: 'Własność prywatna',
      note: 'Pałac jest prywatny — zwiedzanie wnętrz niedostępne',
    },
  },
  {
    id: 'aleja-debow',
    name: 'Aleja Dębów Czerwonych',
    category: 'przyroda',
    shortDescription: '95 dębów czerwonych — pomnik przyrody wzdłuż drogi nr 450',
    fullDescription:
      'Aleja 95 dębów czerwonych (Quercus rubra) wzdłuż drogi nr 450 między Wieruszowem a Kuźnicą Skakawską, uznana za pomnik przyrody w 2001 roku. To niezwykły skupisko tego rzadkiego w Polsce gatunku — drzewa mają ponad 90 lat, a największe osiągają 415 cm obwodu. Jesienią liście przybierają spektakularne odcienie czerwieni i złota. Co roku odbywa się tu Półmaraton Aleja Dębów Czerwonych — bieg na dystansie 21 km startujący ze stadionu w Wieruszowie. Opiekę nad aleją sprawują uczniowie Zespołu Szkół nr 2 im. Marszałka Józefa Piłsudskiego.',
    lat: 51.278,
    lng: 18.135,
    image: `${BASE}images/places/aleja-debow.jpg`,
  },
];
