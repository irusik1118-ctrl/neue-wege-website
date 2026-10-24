export interface PackageItem {
  id: 'economy' | 'platinum';
  name: {
    de: string;
    uk: string;
    en: string;
  };
  badge: {
    de: string;
    uk: string;
    en: string;
  };
  subtitle: {
    de: string;
    uk: string;
    en: string;
  };
  priceDisplay: {
    de: string;
    uk: string;
    en: string;
  };
  priceNote: {
    de: string;
    uk: string;
    en: string;
  };
  referenceSumEur?: number;
  features: {
    de: string[];
    uk: string[];
    en: string[];
  };
  ctaText: {
    de: string;
    uk: string;
    en: string;
  };
  isPopular?: boolean;
}

export const packagesData: PackageItem[] = [
  {
    id: 'economy',
    name: {
      de: 'Economy-Paket',
      uk: 'Економ пакет',
      en: 'Economy Package',
    },
    badge: {
      de: 'Flexibler Einstieg',
      uk: 'Гнучкий вибір',
      en: 'Flexible Entry',
    },
    subtitle: {
      de: 'Flexible Repräsentanz Ihres Unternehmens auf dem europäischen Markt',
      uk: 'Гнучке представлення вашого підприємства в Європі',
      en: 'Flexible presentation of your enterprise on the European market',
    },
    priceDisplay: {
      de: 'ab 1.000 €',
      uk: 'від 1 000 €',
      en: 'from €1,000',
    },
    priceNote: {
      de: 'Mindestbestellwert 1.000 €. Zusätzliche Leistungen mit +30% Aufschlag wählbar.',
      uk: 'Мінімальна вартість замовлення становить 1 000 €. Додаткові послуги розраховуються з націнкою +30%.',
      en: 'Minimum order value €1,000. Additional services available with a +30% surcharge.',
    },
    features: {
      de: [
        'Freie Auswahl aus allen verfügbaren Einzelleistungen',
        'Zusammenstellung nach Ihren individuellen Zielen & Budget',
        'Präsentation durch geschulte mehrsprachige Vertreter',
        'Distanzbeobachtung über Livestream & Messe-Chat (soweit verfügbar)',
        'Möglichkeit zur modularen Erweiterung (+30% Aufschlag)',
      ],
      uk: [
        'Вільний вибір серед усіх доступних послуг компанії',
        'Формування складу відповідно до ваших цілей і бюджету',
        'Професійне представлення інтересів без виїзду до Бельгії',
        'Дистанційне спостереження за виставкою через стрім і чат',
        'Можливість замовлення додаткових послуг із націнкою 30%',
      ],
      en: [
        'Custom selection among all available single services',
        'Tailored combination aligned with your targets and budget',
        'Professional representation without travel to Belgium',
        'Remote monitoring via exhibition livestream and chat (if available)',
        'Option to add further single services with +30% surcharge',
      ],
    },
    ctaText: {
      de: 'Economy-Paket anfragen',
      uk: 'Замовити Економ пакет',
      en: 'Inquire Economy Package',
    },
    isPopular: false,
  },
  {
    id: 'platinum',
    name: {
      de: 'Business / Platin-Paket',
      uk: 'Бізнес / Платиновий пакет',
      en: 'Business / Platinum Package',
    },
    badge: {
      de: 'Komplett-Präsenz',
      uk: 'Максимальне охоплення',
      en: 'Complete Presence',
    },
    subtitle: {
      de: 'Umfassende Repräsentanz mit allen Werbe- und Informationsformaten',
      uk: 'Комплексне представлення вашого підприємства в Європі',
      en: 'Comprehensive business representation covering all promotional formats',
    },
    priceDisplay: {
      de: 'Individuelle Vereinbarung',
      uk: 'Узгоджується під час замовлення',
      en: 'Agreed on consultation',
    },
    priceNote: {
      de: 'Kombinierter Einzelwert aller Leistungen: 2.040 €. Sonderkonditionen im Paket.',
      uk: 'Загальна вартість усіх послуг окремо: 2 040 €. Спеціальна пакетна вартість розраховується індивідуально.',
      en: 'Combined value of single services: €2,040. Special bundled rate agreed during booking.',
    },
    referenceSumEur: 2040,
    features: {
      de: [
        'Videopräsentation auf Großmonitor (5 Min, 08:00–20:00 alle 20 Min)',
        'Verteilung von 200 gedruckten Werbematerialien (Broschüren/Kataloge)',
        'Auslage von bis zu 200 Werbeflyern (A4 gefalzt)',
        'Platzierung von 400 Visitenkarten an zentralen Infotheken',
        'Werbebanner 1 × 2 m im Ausstellungspavillon',
        'Gezielte Informationssammlung & Partnersuche nach Ihrem Profil',
        '12 Monate Firmeneintrag im europäischen Online-Katalog',
      ],
      uk: [
        'Відеопрезентація на великому моніторі (до 5 хв, кожні 20 хв з 08:00 до 20:00)',
        'Представлення друкованої продукції — комплект із 200 примірників',
        'Розповсюдження рекламних флаєрів — до 200 примірників',
        'Розміщення 400 візитних карток на центральних стійках',
        'Рекламний банер розміром 1 × 2 м у виставковому просторі',
        'Збір інформації та контактів потенційних партнерів за вашим запитом',
        'Річне розміщення інформації в онлайн-каталозі (12 місяців)',
      ],
      en: [
        'Video presentation on large screen (5 min, every 20 min from 08:00 to 20:00)',
        'Distribution of 200 printed promotional items (catalogues/brochures)',
        'Distribution of up to 200 folded A4 promotional flyers',
        'Placement of 400 business cards at central information points',
        'Vertical advertising banner 1 × 2 m in the pavilion',
        'Targeted market research and potential partner contact gathering',
        '12 months featured listing in the European online directory',
      ],
    },
    ctaText: {
      de: 'Platin-Paket anfragen',
      uk: 'Замовити Платиновий пакет',
      en: 'Inquire Platinum Package',
    },
    isPopular: true,
  },
];

export const packageTerms = {
  de: [
    'Alle Preise verstehen sich in Euro (€). Die MwSt.-Regelung richtet sich nach dem rechtlichen Status des Leistungserbringers.',
    'Die Erstellung von Videoclips, Bannern und Drucksorten ist nicht im Repräsentationspreis enthalten. Materialien werden vom Auftraggeber auf Englisch mit ukrainischer Zweitsprache bereitgestellt.',
    'Individuelle Wünsche und Sonderleistungen werden gesondert vereinbart.',
  ],
  uk: [
    'Усі ціни вказані в євро. Питання ПДВ визначається відповідно до юридичного статусу виконавця та застосовних податкових правил.',
    'Виготовлення відеороликів, банерів і друкованої продукції не входить у вартість представлення. Матеріали готує замовник англійською мовою з дублюванням українською.',
    'Індивідуальні послуги та додаткові побажання розглядаються окремо під час узгодження замовлення.',
  ],
  en: [
    'All prices are in Euros (€). Applicable VAT terms depend on the legal status of the service provider.',
    'Production of videos, banners and printed materials is not included in the representation fee. Promotional materials are provided by the client in English with Ukrainian secondary text.',
    'Custom requests and individual services are discussed and agreed separately upon order confirmation.',
  ],
};
