export interface PackageItem {
  id: 'business' | 'economy';
  name: {
    de: string;
    ua: string;
    en: string;
  };
  badge: {
    de: string;
    ua: string;
    en: string;
  };
  subtitle: {
    de: string;
    ua: string;
    en: string;
  };
  priceDisplay: {
    de: string;
    ua: string;
    en: string;
  };
  priceNote: {
    de: string;
    ua: string;
    en: string;
  };
  totalStandardPriceEur?: number;
  features: {
    de: string[];
    ua: string[];
    en: string[];
  };
  ctaText: {
    de: string;
    ua: string;
    en: string;
  };
  isPopular?: boolean;
}

export const packagesData: PackageItem[] = [
  {
    id: 'business',
    name: {
      de: 'Business-Paket',
      ua: 'Бізнес-пакет',
      en: 'Business Package',
    },
    badge: {
      de: 'Komplett-Präsenz',
      ua: 'Комплексне представлення',
      en: 'Complete Presence',
    },
    subtitle: {
      de: 'Umfassende Repräsentanz des Unternehmens in Europa auf der Messe in Gent',
      ua: 'Комплексне представлення підприємства в Європі',
      en: 'Comprehensive business representation in Europe at Ghent exhibition',
    },
    priceDisplay: {
      de: '2.040 €',
      ua: '2 040 €',
      en: '€2,040',
    },
    priceNote: {
      de: 'Gesamtwert der Leistungen nach Standard-Preisliste — 2.040 €. Der endgültige Paketpreis wird bei der Bestellung vereinbart.',
      ua: 'Загальна вартість послуг за стандартним прайс-листом — 2 040 €. Остаточна вартість пакета погоджується під час оформлення замовлення.',
      en: 'Total service value by standard price list — €2,040. Final package rate agreed upon ordering.',
    },
    totalStandardPriceEur: 2040,
    features: {
      de: [
        'Videopräsentation des Unternehmens auf dem Großmonitor des Pavillons',
        'Präsentation von 200 Exemplaren gedruckter Werbematerialien',
        'Verteilung von bis zu 200 Werbeflyern',
        'Platzierung von 400 Visitenkarten an zentralen Ständen',
        'Werbebanner im Format 1 × 2 m',
        'Gezielte Informationssammlung & Kontaktrecherche zu potenziellen Partnern auf Anfrage',
        'Eintrag des Unternehmens im Online-Katalog für 12 Monate',
      ],
      ua: [
        'Відеопрезентація підприємства на великому моніторі виставкового павільйону',
        'Представлення 200 примірників друкованої рекламної продукції',
        'Розповсюдження до 200 рекламних флаєрів',
        'Розміщення 400 візитних карток',
        'Рекламний банер розміром 1 × 2 м',
        'Збір інформації та контактів потенційних партнерів за запитом',
        'Розміщення інформації про підприємство в онлайн-каталозі строком на 12 місяців',
      ],
      en: [
        'Company video presentation on the large screen of the exhibition pavilion',
        'Presentation of 200 copies of printed advertising materials',
        'Distribution of up to 200 promotional flyers',
        'Placement of 400 business cards at central counters',
        'Advertising banner sized 1 × 2 m',
        'Collection of information and contacts of prospective partners upon request',
        'Company profile listing in the online directory for 12 months',
      ],
    },
    ctaText: {
      de: 'Business-Paket anfragen',
      ua: 'Замовити Бізнес-пакет',
      en: 'Inquire Business Package',
    },
    isPopular: true,
  },
  {
    id: 'economy',
    name: {
      de: 'Economy-Paket',
      ua: 'Економ-пакет',
      en: 'Economy Package',
    },
    badge: {
      de: 'Individuelle Auswahl',
      ua: 'Гнучкий вибір за бюджетом',
      en: 'Budget Flexibility',
    },
    subtitle: {
      de: 'Sie wählen Leistungen entsprechend Ihrem individuellen Budget',
      ua: 'Ви обираєте послуги відповідно до свого бюджету',
      en: 'You select services according to your individual budget',
    },
    priceDisplay: {
      de: 'ab 1.000 €',
      ua: 'від 1 000 €',
      en: 'from €1,000',
    },
    priceNote: {
      de: 'Mindestbestellwert — 1.000 €. Zusätzliche Leistungen außerhalb des vereinbarten Paketumfangs werden mit 30% Aufschlag berechnet.',
      ua: 'Мінімальна вартість замовлення — 1 000 €. Ви самостійно обираєте потрібні послуги та їхній обсяг. На додаткові послуги поза погодженим складом пакета нараховується 30% до стандартної ціни.',
      en: 'Minimum order value — €1,000. You independently choose required services and volume. Additional services outside agreed package subject to +30% surcharge.',
    },
    features: {
      de: [
        'Mindestbestellwert ab 1.000 €',
        'Sie wählen eigenständig die gewünschten Leistungen und deren Umfang',
        'Keine Pflicht zur Buchung des vollständigen Business-Pakets',
        'Aufschlag von 30% auf zusätzliche Einzelleistungen außerhalb des Pakets',
        'Gezielte Präsentation der für Sie wichtigsten Prioritäten',
      ],
      ua: [
        'Мінімальна вартість замовлення — від 1 000 €',
        'Ви самостійно обираєте потрібні послуги та їхній обсяг',
        'Не потрібно замовляти весь перелік послуг Бізнес-пакета',
        'На додаткові послуги поза погодженим складом нараховується 30% до стандартної ціни',
        'Фокус виключно на пріоритетних для вашого підприємства напрямках',
      ],
      en: [
        'Minimum order value — from €1,000',
        'You choose the needed services and their scope yourself',
        'No obligation to order the full Business Package list',
        '30% surcharge applied to additional single services beyond the agreed package',
        'Targeted presentation focusing strictly on your core commercial priorities',
      ],
    },
    ctaText: {
      de: 'Economy-Paket anfragen',
      ua: 'Замовити Економ-пакет',
      en: 'Inquire Economy Package',
    },
    isPopular: false,
  },
];

export const packageDifference = {
  de: 'Hauptunterschied: Das Business-Paket bietet eine umfassende Komplettrepräsentanz Ihres Unternehmens, während das Economy-Paket Ihnen erlaubt, gezielt die für Sie wichtigsten Leistungen zu wählen.',
  ua: 'Головна відмінність: Бізнес-пакет передбачає комплексне представлення підприємства, а Економ-пакет дозволяє обрати лише найважливіші послуги.',
  en: 'Key difference: The Business Package delivers comprehensive full-scale representation of your enterprise, while the Economy Package allows you to select only the most vital services within your budget.',
};

export const packageTerms = {
  de: [
    'Alle Preise verstehen sich in Euro (€).',
    'Fragen der Mehrwertsteuer richten sich nach dem Status des Ausführenden und den anwendbaren Steuervorschriften.',
    'Die Erstellung von Videoclips, Bannern und Druckmaterialien wird separat vergütet, sofern nicht anders vereinbart. Materialien werden vom Auftraggeber auf Englisch mit ukrainischer Zweitsprache bereitgestellt.',
    'Die Distanzbeobachtung der Messe per Livestream und interaktivem Chat ist bei technischer Verfügbarkeit möglich.',
    'Der endgültige Leistungsumfang, das Arbeitsvolumen und die Kosten werden vor der Bestellung verbindlich abgestimmt.',
  ],
  ua: [
    'Усі ціни вказані в євро.',
    'Питання ПДВ визначається відповідно до статусу виконавця та застосовних податкових правил.',
    'Виготовлення відеороликів, банерів і друкованої продукції оплачується окремо, якщо інше не погоджено сторонами. Матеріали готує замовник англійською мовою з дублюванням українською.',
    'Дистанційне спостереження за виставкою через трансляцію та інтерактивний чат можливе за умови їхньої технічної доступності.',
    'Остаточний склад послуг, обсяг робіт і вартість погоджуються до оформлення замовлення.',
  ],
  en: [
    'All prices are quoted in Euros (€).',
    'VAT application is determined according to the legal status of the service provider and applicable tax regulations.',
    'Production of video clips, banners and printed materials is paid separately unless otherwise agreed. Materials are prepared by the client in English with Ukrainian duplication.',
    'Remote exhibition monitoring via livestream and interactive chat is subject to technical availability.',
    'Final service composition, scope of work and total price are aligned before placing the order.',
  ],
};

export const packageSignOff = {
  slogan: {
    de: '«NEUE WEGE» — wir vertreten ukrainische Agrarunternehmen auf dem europäischen Markt.',
    ua: '«НОВА ДОРОГА» — представляємо український аграрний бізнес на європейському ринку.',
    en: '“NEUE WEGE” — representing Ukrainian agribusiness on the European market.',
  },
  support: {
    de: 'Mit Unterstützung der Hilfsorganisation «Hoffnung & Würde».',
    ua: 'За підтримки благодійної організації «Надія та Гідність».',
    en: 'Supported by the charitable organisation “Hoffnung & Würde”.',
  },
};
