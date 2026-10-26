export interface ArticleItem {
  slug: string;
  date: string;
  category: {
    de: string;
    ua:string;
    en: string;
  };
  title: {
    de: string;
    ua:string;
    en: string;
  };
  excerpt: {
    de: string;
    ua:string;
    en: string;
  };
  content: {
    de: string[];
    ua:string[];
    en: string[];
  };
}

export const articlesData: ArticleItem[] = [
  {
    slug: 'eu-export-standards-grains',
    date: '2026-10-15',
    category: {
      de: 'EU-Export & Zertifizierung',
      ua:'Експорт до ЄС та сертифікація',
      en: 'EU Export & Certification',
    },
    title: {
      de: 'EU-Qualitätsstandards für Getreide und Ölsaaten: Was ukrainische Exporteure wissen müssen',
      ua:'Вимоги ЄС до експорту зернових та олійних культур: стандарти якості та сертифікація',
      en: 'EU Quality Standards for Grains and Oilseeds: Essential Rules for Ukrainian Exporters',
    },
    excerpt: {
      de: 'Ein praxisnaher Leitfaden zu mykotoxikologischen Grenzwerten, Rückstandshöchstmengen (MRL) und phytosanitären Zertifikaten für den Marktzugang in die EU.',
      ua:'Практичний посібник щодо норм мікотоксинів, залишкових кількостей пестицидів (MRL) та фітосанітарних сертифікатів для успішного виходу на ринок Євросоюзу.',
      en: 'A practical guide on mycotoxin limits, pesticide MRLs and phytosanitary certificate workflows required for market entry into the European Union.',
    },
    content: {
      de: [
        'Der europäische Agrarmarkt bietet immense Chancen für Qualitätshersteller aus der Ukraine. Gleichzeitig verlangt die Europäische Union kompromisslose Einhaltung der Lebensmittelsicherheit und lückenloser Rückverfolgbarkeit (Traceability).',
        'Zentrale Pfeiler für Getreidelieferungen sind die Einhaltung der maximal zulässigen Rückstandsmengen (Maximum Residue Limits, MRL) für Pflanzenschutzmittel sowie strenge Grenzwerte für Mykotoxine wie Aflatoxine, Deoxynivalenol (DON) und Zearalenon.',
        'Neue Wege GmbH unterstützt ukrainische Partner bei der Vorab-Prüfung akkreditierter Laboranalysen und stellt die direkte Verbindung zu verlässlichen europäischen Getreidemühlen und Mischfutterherstellern her.',
      ],
      ua:[
        'Європейський аграрний ринок відкриває великі перспективи для українських агровиробників. Водночас Європейський Союз висуває суворі вимоги до безпечності харчової продукції та повної простежуваності (Traceability) кожного ланцюга постачання.',
        'Ключовими чинниками успішного експорту зерна є дотримання нормативів вмісту пестицидів (MRL), відсутність важких металів та жорсткий контроль мікотоксинів (афлатоксинів, дезоксиніваленолу та зеараленону).',
        'Компанія «НОВА ДОРОГА» надає консультаційну підтримку щодо відповідності вимогам європейських стандартів і допомагає встановити прямі контракти з європейськими комбікормовими та переробними заводами.',
      ],
      en: [
        'The European agricultural marketplace provides remarkable opportunities for Ukrainian producers. At the same time, the EU maintains rigorous food safety regulations and comprehensive farm-to-fork traceability.',
        'Key compliance areas for grain shipments include adhering to Maximum Residue Limits (MRLs) for crop protection chemicals and strict monitoring of mycotoxins such as aflatoxins, DON, and zearalenone.',
        'Neue Wege GmbH assists Ukrainian farming businesses in preparing documentation for EU buyers and connecting directly with leading European feed mills and processors.',
      ],
    },
  },
  {
    slug: 'preparing-agri-exhibition-remotely',
    date: '2026-09-28',
    category: {
      de: 'Messe & B2B-Marketing',
      ua:'Виставки та B2B маркетинг',
      en: 'Exhibitions & B2B Marketing',
    },
    title: {
      de: 'Erfolgreich auf europäischen Agrarmessen präsent sein – ohne persönliche Anreise',
      ua:'Як ефективно представити агропідприємство на європейській виставці без особистого виїзду',
      en: 'How to Successfully Present Your Agribusiness at European Trade Fairs Remotely',
    },
    excerpt: {
      de: 'Wie ukrainische Agrarbetriebe durch professionelle Vertretung, 5-Minuten-Videoclips und gezielte B2B-Kataloge maximale Reichweite in Ghent 2027 erzielen.',
      ua:'Як дистанційний формат участі дозволяє зберегти бюджет, залучити реальних покупців та отримати повний звіт про переговори з європейськими контрагентами.',
      en: 'How remote exhibition representation allows farms to protect operational budgets, attract real off-takers and gain verified trade dossiers in Ghent 2027.',
    },
    content: {
      de: [
        'In Zeiten intensiver Feldarbeiten und operativer Herausforderungen ist es für Betriebsinhaber oft schwer, mehrere Tage für Auslandsreisen abzustellen. Genau hier setzt das Repräsentanzmodell von Neue Wege GmbH an.',
        'Ein aussagekräftiger, englisch untertitelter 5-Minuten-Videoclip auf Großbildschirmen gepaart mit professionell gestalteten Katalogen erzeugt nachweisbar höchste Aufmerksamkeit bei Fachbesuchern.',
        'Unsere geschulten Manager beantworten technische Fragen zu Ihren Anbauflächen, Rassen und Kapazitäten direkt vor Ort und erfassen alle Kontaktdaten strukturiert im B2B-Dossier.',
      ],
      ua:[
        'В умовах активного виробничого сезону керівникам господарств буває складно відволікатися на тривалі поїздки за кордон. Модель професійного представництва компанії «НОВА ДОРОГА» вирішує цю задачу.',
        'Відеоролик тривалістю до 5 хвилин із субтитрами, що транслюється кожні 20 хвилин на великому моніторі центрального павільйону, у поєднанні з якісними двомовними каталогами гарантує увагу десятків тисяч професійних відвідувачів.',
        'Наші представники на місці беруть на себе перший контакт, збирають конкретні запити на закупівлю чи постачання технологій і передають вам детальний підсумковий звіт.',
      ],
      en: [
        'Given operational commitments and travel complexities, sending a full delegation to Belgium can be challenging. Neue Wege GmbH’s proxy representation model bridges this gap seamlessly.',
        'A concise 5-minute video presentation displayed every 20 minutes on high-visibility screens, backed by professional bilingual catalogues, commands high interest among European trade delegates.',
        'Our multilingual team conducts initial introductions on-site, gathers precise procurement requests, and delivers a fully actionable dossier directly to your management.',
      ],
    },
  },
  {
    slug: 'sustainable-agriculture-trends-2027',
    date: '2026-09-10',
    category: {
      de: 'Agrartrends & Technologie',
      ua:'Аграрні тренди та технології',
      en: 'Agri Trends & Technology',
    },
    title: {
      de: 'Europäische Agrartrends 2027: Präzisionslandwirtschaft, biologischer Pflanzenschutz und Bodengesundheit',
      ua:'Європейські аграрні тренди 2027: точне землеробство, біозахист та збереження родючості ґрунтів',
      en: 'European Agri Trends 2027: Precision Agriculture, Biological Protection and Soil Health',
    },
    excerpt: {
      de: 'Welche Technologien und Partnerschaften auf der Messe in Ghent 2027 im Mittelpunkt stehen und wie Betriebe von modernen Lösungen profitieren.',
      ua:'Які інновації будуть визначати порядок денний виставки в Генті та які технологічні рішення шукають європейські фермери.',
      en: 'What innovations will drive discussions at Flanders Expo Ghent 2027 and how forward-looking farming enterprises can benefit.',
    },
    content: {
      de: [
        'Die europäische Landwirtschaft befindet sich in einer tiefgreifenden Transformation hin zu höherer Ressourceneffizienz, reduzierten chemischen Einträgen und digitaler Bestandsführung.',
        'Auf der Messe in Gent stehen 2027 neben modernster Bodenbearbeitungsmechanik vor allem biologische Pflanzenschutzmittel, mikrobielle Bodenverbesserer und KI-gestützte Sensorik im Fokus.',
        'Durch den gezielten Partnersuch-Service von Neue Wege GmbH können ukrainische Landwirte frühzeitig Kontakte zu innovativen europäischen Entwicklern und Kooperationspartnern knüpfen.',
      ],
      ua:[
        'Європейський аграрний сектор переживає стрімку модернізацію: підвищення ресурсоефективності, мінімізація втрат добрив та впровадження систем супутникового й сенсорного моніторингу полів.',
        'На виставці в Генті у січні 2027 року ключовими темами стануть біологічні засоби захисту рослин, технології збереження вологи в ґрунті та нові породи у тваринництві.',
        'Завдяки послузі цільового пошуку партнерів компанія «НОВА ДОРОГА» допомагає українським підприємствам знайти постачальників цих передових рішень на вигідних умовах.',
      ],
      en: [
        'European agriculture is undergoing profound transformation toward enhanced resource efficiency, carbon stewardship, and digital crop management.',
        'At the 2027 Ghent exhibition, leading topics will center on biological crop stimulants, water-retention soil solutions, precision seeding, and advanced livestock breeding lines.',
        'Through Neue Wege GmbH’s tailored partner search service, Ukrainian farms can connect early with technology developers and establish long-term supply arrangements.',
      ],
    },
  },
];
