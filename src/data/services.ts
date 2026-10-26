export interface ServiceItem {
  id: string;
  priceEur: number;
  surchargePriceEur: number; // +30% for Economy package
  unit: {
    de: string;
    ua: string;
    en: string;
  };
  title: {
    de: string;
    ua: string;
    en: string;
  };
  description: {
    de: string;
    ua: string;
    en: string;
  };
  specs: {
    de: string[];
    ua: string[];
    en: string[];
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'video-presentation',
    priceEur: 470,
    surchargePriceEur: 611,
    unit: {
      de: 'Bis zu 5 Minuten',
      ua: 'До 5 хвилин',
      en: 'Up to 5 minutes',
    },
    title: {
      de: 'Videopräsentation des Unternehmens auf dem Pavillon-Monitor',
      ua: 'Відеопрезентація підприємства на моніторі виставкового павільйону',
      en: 'Company video presentation on the exhibition pavilion monitor',
    },
    description: {
      de: 'Vorführung eines fünfminütigen Videoclips über Ihr Unternehmen auf einem Großbildschirm im Pavillon.',
      ua: 'Демонстрація п’ятихвилинного відеоролика про ваше господарство на великому моніторі у виставковому павільйоні.',
      en: 'Demonstration of a five-minute video clip about your enterprise on a large monitor in the pavilion.',
    },
    specs: {
      de: [
        'Sendezeit: 08:00 bis 20:00 Uhr',
        'Wiederholung: alle 20 Minuten',
        'Dauer: bis zu 5 Minuten',
        'Wiedergabe ohne Ton (englische Untertitel empfohlen)',
      ],
      ua: [
        'Період демонстрації: з 08:00 до 20:00',
        'Періодичність показу: кожні 20 хвилин',
        'Тривалість ролика: до 5 хвилин',
        'Відтворення без звуку (рекомендовані англомовні субтитри)',
      ],
      en: [
        'Display period: 08:00 to 20:00',
        'Frequency: every 20 minutes',
        'Duration: up to 5 minutes',
        'Silent playback (English subtitles recommended)',
      ],
    },
  },
  {
    id: 'print-materials',
    priceEur: 350,
    surchargePriceEur: 455,
    unit: {
      de: '200 Exemplare',
      ua: '200 примірників',
      en: '200 copies',
    },
    title: {
      de: 'Präsentation gedruckter Werbematerialien',
      ua: 'Представлення друкованої рекламної продукції',
      en: 'Presentation of printed advertising materials',
    },
    description: {
      de: 'Präsentation von Broschüren, Katalogen und A4-Informationsblättern für interessierte Messebesucher.',
      ua: 'Розміщення брошур, каталогів, інформаційних листів формату А4 та презентаційних видань.',
      en: 'Placement of brochures, catalogues, and A4 info sheets for prospective clients.',
    },
    specs: {
      de: [
        'Umfang: 200 Exemplare',
        'Formate: Broschüren, Kataloge, Info-Blätter A4',
        'Pflichtvoraussetzung: Inhalte auf Ukrainisch & Englisch',
        'Direkte Auslage für Fachbesucher',
      ],
      ua: [
        'Обсяг: 200 примірників',
        'Формати: брошури, каталоги, інфолисти А4',
        'Обов’язкова вимога: матеріали українською та англійською мовами',
        'Доступні всім зацікавленим відвідувачам',
      ],
      en: [
        'Volume: 200 copies',
        'Formats: brochures, catalogues, A4 sheets',
        'Requirement: materials in Ukrainian & English',
        'Accessible to trade visitors',
      ],
    },
  },
  {
    id: 'flyers',
    priceEur: 120,
    surchargePriceEur: 156,
    unit: {
      de: 'Bis zu 200 Exemplare',
      ua: 'До 200 примірників',
      en: 'Up to 200 copies',
    },
    title: {
      de: 'Verteilung von Werbeflyern',
      ua: 'Розповсюдження рекламних флаєрів',
      en: 'Distribution of promotional flyers',
    },
    description: {
      de: 'Kompakte Darstellung Ihres Betriebs, der Produkte und Wettbewerbsvorteile auf A4-Faltblättern.',
      ua: 'Розміщення рекламної інформації у вигляді листівок формату А4, складених удвоє.',
      en: 'Distribution of advertising leaflets in folded A4 format highlighting your farm and produce.',
    },
    specs: {
      de: [
        'Format: A4, gefalzt',
        'Auflage: bis zu 200 Exemplare',
        'Kompakte Übersicht von Produkten & Kontakten',
      ],
      ua: [
        'Формат: А4, складені удвоє',
        'Наклад: до 200 примірників',
        'Коротка презентація господарства та продукції',
      ],
      en: [
        'Format: folded A4 leaflets',
        'Volume: up to 200 copies',
        'Brief presentation of enterprise and produce',
      ],
    },
  },
  {
    id: 'business-cards',
    priceEur: 100,
    surchargePriceEur: 130,
    unit: {
      de: '400 Stück',
      ua: '400 штук',
      en: '400 cards',
    },
    title: {
      de: 'Platzierung von Visitenkarten',
      ua: 'Розміщення візитних карток',
      en: 'Placement of business cards',
    },
    description: {
      de: 'Gezielte Weitergabe Ihrer Geschäftskontaktdaten an Fachbesucher und potenzielle Partner.',
      ua: 'Розміщення візиток для збереження контактів відвідувачами та потенційними партнерами.',
      en: 'Placement of company business cards to establish direct contact with European partners.',
    },
    specs: {
      de: [
        'Menge: 400 Stück',
        'Beilage an Broschüren und Kataloge möglich',
        'Präsentation auf zentralen Informationstheken',
      ],
      ua: [
        'Кількість: 400 штук',
        'Можливість прикріплення до брошур і каталогів',
        'Розміщення на головних інформаційних стійках',
      ],
      en: [
        'Quantity: 400 pieces',
        'Can be paired with brochures and catalogues',
        'Prominently displayed at information desks',
      ],
    },
  },
  {
    id: 'advertising-banner',
    priceEur: 450,
    surchargePriceEur: 585,
    unit: {
      de: '1 × 2 m',
      ua: '1 × 2 м',
      en: '1 × 2 m',
    },
    title: {
      de: 'Werbebanner',
      ua: 'Рекламний банер',
      en: 'Advertising banner',
    },
    description: {
      de: 'Visuelle Großpräsentation mit Name, Logo, Produkten und Kontaktdaten Ihres Unternehmens.',
      ua: 'Вертикальний рекламний банер для наочного представлення підприємства, логотипу та продукції.',
      en: 'Vertical banner showcasing company name, logo, agricultural produce, and contact details.',
    },
    specs: {
      de: [
        'Format: 1 × 2 Meter',
        'Vertikale Ausrichtung',
        'Platzierung im Pavillon',
      ],
      ua: [
        'Розмір: 1 × 2 м',
        'Формат: вертикальний рекламний банер',
        'Розміщення у виставковому просторі',
      ],
      en: [
        'Size: 1 × 2 m',
        'Format: vertical banner',
        'Pavilion display positioning',
      ],
    },
  },
  {
    id: 'partner-search',
    priceEur: 250,
    surchargePriceEur: 325,
    unit: {
      de: 'Auf Kundenanfrage',
      ua: 'За запитом замовника',
      en: 'Upon client request',
    },
    title: {
      de: 'Informationssammlung & Kontaktrecherche zu potenziellen Partnern',
      ua: 'Збір інформації та контактів потенційних партнерів',
      en: 'Information gathering and contacts of prospective partners',
    },
    description: {
      de: 'Gezielte Marktrecherche nach passenden Partnern: Technik, Tierzucht, Futter, Saatgut und Direktabnehmer.',
      ua: 'Збір інформації за вашим індивідуальним запитом у визначеному сегменті європейського аграрного ринку.',
      en: 'Targeted research for agricultural machinery, feeds, seeds, and prospective produce buyers.',
    },
    specs: {
      de: [
        'Vorab-Abstimmung der Suchkriterien',
        'Lieferanten von Agrartechnik und Futter',
        'Direktabnehmer Ihrer Erzeugnisse',
        'Strukturierter Bericht nach Messeabschluss',
      ],
      ua: [
        'Попереднє узгодження напрямку пошуку та критеріїв',
        'Постачальники с/г техніки, кормів, ветеринарії',
        'Потенційні покупці вашої продукції',
        'Фінальний звіт за підсумками виставки',
      ],
      en: [
        'Search criteria agreed beforehand',
        'Machinery, feeds, seeds, veterinary suppliers',
        'Direct buyers of your harvest',
        'Detailed report following the exhibition',
      ],
    },
  },
  {
    id: 'online-directory',
    priceEur: 300,
    surchargePriceEur: 390,
    unit: {
      de: '12 Monate',
      ua: '12 місяців',
      en: '12 months',
    },
    title: {
      de: 'Eintrag im Online-Unternehmenskatalog',
      ua: 'Розміщення в онлайн-каталозі підприємств',
      en: 'Listing in enterprise online directory',
    },
    description: {
      de: 'Ganzjährige Darstellung Ihres Agrarunternehmens auf den Web-Ressourcen für europäische Partner.',
      ua: 'Розміщення інформації про ваше підприємство в онлайн-каталозі терміном на 12 місяців.',
      en: 'Year-round enterprise profile in online agro directory for European buyers and partners.',
    },
    specs: {
      de: [
        'Laufzeit: 12 Monate',
        'Unternehmensprofil, Fotos, Produktionsangaben',
        'Direkte Kontaktaufnahme',
      ],
      ua: [
        'Термін дії: 12 місяців',
        'Профіль підприємства, фотографії, опис продукції',
        'Прямий зв’язок із європейськими контрагентами',
      ],
      en: [
        'Duration: 12 months',
        'Company profile, images, produce details',
        'Direct link to your representatives',
      ],
    },
  },
];

export const priceTableSummary = {
  totalTitle: {
    de: 'Gesamtwert aller Einzelleistungen',
    ua: 'Загальна вартість усіх послуг окремо',
    en: 'Total value of all individual services',
  },
  totalUnit: {
    de: 'Vollständiges Paket',
    ua: 'Повний перелік',
    en: 'Complete list',
  },
  businessTotalEur: 2040,
  economyTotalEur: 2652,
};
