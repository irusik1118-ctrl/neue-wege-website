export interface ServiceItem {
  id: string;
  priceEur: number | null; // null for on-demand
  isCustomPrice?: boolean;
  unit: {
    de: string;
    uk: string;
    en: string;
  };
  title: {
    de: string;
    uk: string;
    en: string;
  };
  description: {
    de: string;
    uk: string;
    en: string;
  };
  specs: {
    de: string[];
    uk: string[];
    en: string[];
  };
  surchargePriceEur?: number; // +30% for extra services in economy package
}

export const servicesData: ServiceItem[] = [
  {
    id: 'video-presentation',
    priceEur: 470,
    surchargePriceEur: 611,
    unit: {
      de: 'Bis zu 5 Min. Präsentation',
      uk: 'До 5 хвилин ролик',
      en: 'Up to 5 min presentation',
    },
    title: {
      de: 'Videopräsentation Ihres Unternehmens',
      uk: 'Відеопрезентація вашого підприємства',
      en: 'Video Presentation of Your Enterprise',
    },
    description: {
      de: 'Vorführung eines fünfminütigen Videoclips über Ihr Unternehmen auf einem Großbildschirm im Ausstellungspavillon.',
      uk: 'Демонстрація п’ятихвилинного відеоролика про ваше господарство на великому моніторі у виставковому павільйоні.',
      en: 'Demonstration of a 5-minute video clip about your farm or enterprise on a large monitor in the exhibition pavilion.',
    },
    specs: {
      de: [
        'Präsentationszeit: 08:00 bis 20:00 Uhr',
        'Wiederholung: alle 20 Minuten',
        'Dauer: bis zu 5 Minuten',
        'Wiedergabe ohne Ton (englische Untertitel empfohlen)',
      ],
      uk: [
        'Період демонстрації: з 08:00 до 20:00',
        'Періодичність показу: кожні 20 хвилин',
        'Тривалість ролика: до 5 хвилин',
        'Відтворення без звуку (рекомендовані англомовні субтитри)',
      ],
      en: [
        'Broadcast period: 08:00 to 20:00',
        'Frequency: every 20 minutes',
        'Duration: up to 5 minutes',
        'Silent playback (English subtitles strongly recommended)',
      ],
    },
  },
  {
    id: 'print-materials',
    priceEur: 350,
    surchargePriceEur: 455,
    unit: {
      de: 'Set mit 200 Exemplaren',
      uk: 'Комплект із 200 примірників',
      en: 'Set of 200 copies',
    },
    title: {
      de: 'Gedruckte Werbematerialien',
      uk: 'Друкована рекламна продукція',
      en: 'Printed Promotional Materials',
    },
    description: {
      de: 'Präsentation von Broschüren, Katalogen und A4-Informationsblättern für interessierte Messebesucher.',
      uk: 'Розміщення брошур, каталогів, інформаційних листів формату А4 та презентаційних видань.',
      en: 'Placement of brochures, catalogues, A4 informational sheets and promotional publications.',
    },
    specs: {
      de: [
        'Umfang: 200 Exemplare',
        'Formate: Broschüren, Kataloge, Info-Blätter A4',
        'Pflichtvoraussetzung: Inhalte auf Ukrainisch & Englisch',
        'Direkte Auslage für Fachbesucher',
      ],
      uk: [
        'Обсяг: 200 примірників',
        'Формати: брошури, каталоги, інфолисти А4',
        'Обов’язкова вимога: матеріали українською та англійською мовами',
        'Доступні всім зацікавленим відвідувачам',
      ],
      en: [
        'Volume: 200 copies',
        'Formats: brochures, catalogues, A4 sheets',
        'Mandatory requirement: text in Ukrainian and English',
        'Directly available to interested trade visitors',
      ],
    },
  },
  {
    id: 'flyers',
    priceEur: 120,
    surchargePriceEur: 156,
    unit: {
      de: 'Bis zu 200 Exemplare',
      uk: 'До 200 примірників',
      en: 'Up to 200 copies',
    },
    title: {
      de: 'Werbeflyer (A4 gefalzt)',
      uk: 'Рекламні флаєри',
      en: 'Promotional Flyers',
    },
    description: {
      de: 'Kompakte Präsentation Ihres Betriebs, der Produkte und wichtigsten Wettbewerbsvorteile im handlichen Format.',
      uk: 'Розміщення рекламної інформації у вигляді листівок формату А4, складених удвоє.',
      en: 'Flyers in folded A4 format for a concise overview of key competitive advantages and products.',
    },
    specs: {
      de: [
        'Format: A4, 1-Bruch-Falz',
        'Auflage: bis zu 200 Exemplare',
        'Kompakte Übersicht von Produkten & Kontakten',
      ],
      uk: [
        'Формат: А4, складені удвоє',
        'Наклад: до 200 примірників',
        'Коротка презентація господарства та продукції',
      ],
      en: [
        'Format: folded A4 leaflets',
        'Volume: up to 200 copies',
        'Concise company summary and contact details',
      ],
    },
  },
  {
    id: 'business-cards',
    priceEur: 100,
    surchargePriceEur: 130,
    unit: {
      de: '400 Stück',
      uk: '400 штук',
      en: '400 cards',
    },
    title: {
      de: 'Visitenkarten-Auslage',
      uk: 'Візитні картки',
      en: 'Business Cards Distribution',
    },
    description: {
      de: 'Gezielte Weitergabe Ihrer geschäftlichen Kontaktdaten an europäische Fachbesucher und potenzielle Abnehmer.',
      uk: 'Розміщення візиток для збереження контактів відвідувачами та потенційними партнерами.',
      en: 'Distribution of business cards allowing trade visitors and prospective buyers to save your contacts.',
    },
    specs: {
      de: [
        'Menge: 400 Stück',
        'Möglichkeit zur Beilage an Broschüren und Kataloge',
        'Präsentation auf dem Haupttisch des Pavillons',
      ],
      uk: [
        'Кількість: 400 штук',
        'Можливість прикріплення до брошур і каталогів',
        'Розміщення на головних інформаційних стійках',
      ],
      en: [
        'Quantity: 400 cards',
        'Can be attached to brochures or distributed at counters',
        'Prominent placement in the central pavilion zone',
      ],
    },
  },
  {
    id: 'advertising-banner',
    priceEur: 450,
    surchargePriceEur: 585,
    unit: {
      de: '1 × 2 Meter Banner',
      uk: '1 × 2 м банер',
      en: '1 × 2 m banner',
    },
    title: {
      de: 'Vertikaler Werbebanner',
      uk: 'Рекламний банер',
      en: 'Advertising Exhibition Banner',
    },
    description: {
      de: 'Visuelle Großpräsentation mit Firmenname, Logo, Produkten, Tätigkeitsfeldern und Kontaktdaten.',
      uk: 'Вертикальний рекламний банер для наочного представлення підприємства, логотипу та продукції.',
      en: 'Vertical banner showcasing company identity, logo, products, core activities, and contact details.',
    },
    specs: {
      de: [
        'Standardformat: 1 × 2 Meter',
        'Vertikale Ausrichtung',
        'Hervorgehobene Platzierung im Pavillon',
      ],
      uk: [
        'Стандартний розмір: 1 × 2 метри',
        'Формат: вертикальний рекламний банер',
        'Розміщення в узгодженому форматі виставкового простору',
      ],
      en: [
        'Standard size: 1 × 2 meters',
        'Format: vertical banner',
        'Placement within the coordinated pavilion space',
      ],
    },
  },
  {
    id: 'partner-search',
    priceEur: 250,
    surchargePriceEur: 325,
    unit: {
      de: 'Recherche & Kontaktliste',
      uk: 'Пошук за індивідуальним запитом',
      en: 'Search & contact dossier',
    },
    title: {
      de: 'Informationssammlung & Partnersuche',
      uk: 'Збір інформації та пошук потенційних партнерів',
      en: 'Partner Research & Contact Gathering',
    },
    description: {
      de: 'Gezielte Marktrecherche nach passenden Partnern: Landmaschinenhersteller, Futtermittel, Tierzucht, Futter- & Saatgutabnehmer.',
      uk: 'Збір інформації за вашим індивідуальним запитом у визначеному сегменті європейського аграрного ринку.',
      en: 'Gathering relevant trade contacts and market intelligence according to your specific agricultural sector needs.',
    },
    specs: {
      de: [
        'Vorab-Abstimmung der Suchkriterien',
        'Lieferanten von Agrartechnik, Futter, Tierarznei',
        'Potenzielle Direktabnehmer Ihrer Erzeugnisse',
        'Strukturierter Bericht nach Messeabschluss',
      ],
      uk: [
        'Попереднє узгодження напрямку пошуку та критеріїв',
        'Постачальники с/г техніки, кормів, ветеринарії',
        'Потенційні покупці вашої продукції та партнерські проєкти',
        'Фінальний звіт за підсумками виставки',
      ],
      en: [
        'Preliminary alignment on search criteria',
        'Machinery suppliers, veterinary, feeds, seed centres',
        'Prospective European buyers of your produce',
        'Structured post-exhibition summary report',
      ],
    },
  },
  {
    id: 'online-directory',
    priceEur: 300,
    surchargePriceEur: 390,
    unit: {
      de: '12 Monate Präsenz',
      uk: '12 місяців розміщення',
      en: '12 months listing',
    },
    title: {
      de: 'Jährliche Präsenz im Online-Katalog',
      uk: 'Річне розміщення в онлайн-каталозі',
      en: 'Annual Online Directory Listing',
    },
    description: {
      de: 'Ganzjährige Darstellung Ihres Agrarunternehmens auf den Web-Ressourcen für europäische Partner.',
      uk: 'Розміщення інформації про ваше підприємство в онлайн-каталозі українських аграрних виробників.',
      en: 'Listing your agricultural enterprise in the dedicated online directory for European buyers and partners.',
    },
    specs: {
      de: [
        'Laufzeit: 12 Monate',
        'Unternehmensprofil, Fotos, Produktionsangaben',
        'Verlinkung zu Ihren direkten Kontakten',
      ],
      uk: [
        'Термін дії: 12 місяців',
        'Назва, опис, напрями виробництва, контакти',
        'Постійна доступність для європейських партнерів',
      ],
      en: [
        'Duration: 12 months',
        'Company profile, activities, produce, verified contacts',
        'Continuous visibility for prospective partners',
      ],
    },
  },
  {
    id: 'individual-representation',
    priceEur: null,
    isCustomPrice: true,
    unit: {
      de: 'Nach Vereinbarung',
      uk: 'За домовленістю',
      en: 'By agreement',
    },
    title: {
      de: 'Individuelle Geschäftsvertretung',
      uk: 'Індивідуальне представлення інтересів',
      en: 'Individual Business Representation',
    },
    description: {
      de: 'Maßgeschneidertes B2B-Vertretungskonzept durch unser mehrsprachiges Team auf der Messe und im EU-Markt.',
      uk: 'Особистий менеджер, індивідуальні переговори, організація зустрічей та розширені маркетингові формати.',
      en: 'Tailored B2B representation by experienced multilingual managers directly negotiating on your behalf.',
    },
    specs: {
      de: [
        'Persönliche Betreuung durch erfahrene Manager',
        'Verhandlungen mit europäischen Großkunden',
        'Detaillierte Vor- und Nachbereitung',
      ],
      uk: [
        'Персональний менеджер та багатомовний супровід',
        'Прямі переговори з європейськими контрагентами',
        'Індивідуальний звіт та координація співпраці',
      ],
      en: [
        'Dedicated senior multilingual representative',
        'Direct negotiations with European buyers and suppliers',
        'Customized agenda, meeting coordination and reporting',
      ],
    },
  },
];
