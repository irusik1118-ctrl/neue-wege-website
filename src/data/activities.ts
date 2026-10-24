export interface ActivityDirection {
  id: string;
  number: number;
  iconName: string;
  title: {
    de: string;
    uk: string;
    en: string;
  };
  shortDescription: {
    de: string;
    uk: string;
    en: string;
  };
  items: {
    de: string[];
    uk: string[];
    en: string[];
  };
}

export const activitiesData: ActivityDirection[] = [
  {
    id: 'livestock',
    number: 1,
    iconName: 'Beef',
    title: {
      de: 'Tierzucht und Viehhaltung',
      uk: 'Тваринництво та скотарство',
      en: 'Livestock Breeding & Husbandry',
    },
    shortDescription: {
      de: 'Zucht von Rindern, Schweinen, Geflügel und Kaninchen sowie Erzeugung hochwertiger tierischer Produkte und Zuchtwahl.',
      uk: 'Розведення великої рогатої худоби, свиней, кролів і свійської птиці, виробництво продукції тваринного походження та селекція.',
      en: 'Breeding of cattle, pigs, poultry and rabbits, production of high-grade animal products and genetic selection.',
    },
    items: {
      de: [
        'Zucht von Rindern (Milch- und Fleischrassen)',
        'Aufzucht von Schweinen, Kaninchen und Geflügel',
        'Erzeugung von Qualitätsmilch, Fleisch, Eiern und Nebenprodukten',
        'Zuchtwahl, Genetik und Fortentwicklung tierischer Rassen',
      ],
      uk: [
        'Розведення великої рогатої худоби (молочні та м’ясні породи)',
        'Вирощування свиней, кролів і свійської птиці',
        'Виробництво молока, м’яса, яєць та іншої продукції тваринного походження',
        'Розвиток племінної справи та селекції тварин',
      ],
      en: [
        'Breeding of cattle (dairy and beef breeds)',
        'Raising of pigs, rabbits, and domestic poultry',
        'Production of milk, meat, eggs, and raw animal products',
        'Pedigree management, genetics, and animal selection',
      ],
    },
  },
  {
    id: 'crop-production',
    number: 2,
    iconName: 'Wheat',
    title: {
      de: 'Pflanzenbau und Gartenbau',
      uk: 'Рослинництво та садівництво',
      en: 'Crop Production & Horticulture',
    },
    shortDescription: {
      de: 'Anbau von Getreide, Ölsaaten, Futter- und Gemüsekulturen, Obst- und Beerengärten, Saatgutproduktion und Blumenzucht.',
      uk: 'Вирощування зернових, технічних, овочевих і кормових культур, садівництво, насінництво, селекція та квіткові господарства.',
      en: 'Cultivation of grains, oilseeds, fodder and vegetable crops, berry and fruit orchards, seed production and horticulture.',
    },
    items: {
      de: [
        'Anbau von Getreide-, Industrie-, Gemüse- und Futterpflanzen',
        'Obst- und Beerenplantagen sowie Gartenbaukulturen',
        'Erzeugung, Aufbereitung und Vertrieb von zertifiziertem Saatgut',
        'Züchtungsaktivitäten und Sortenverbesserung',
        'Anbau von Schnittblumen, Zierpflanzen und Baumschulen',
      ],
      uk: [
        'Вирощування зернових, технічних, овочевих та кормових культур',
        'Вирощування фруктів, ягід та інших садових культур',
        'Виробництво, закупівля та реалізація насіння',
        'Селекційна діяльність і покращення сортів рослин',
        'Вирощування квітів, декоративних рослин та створення квіткових господарств',
      ],
      en: [
        'Cultivation of cereals, industrial, vegetable and fodder crops',
        'Cultivation of fruits, berries and orchard crops',
        'Production, procurement and distribution of high-grade seeds',
        'Plant breeding activities and variety improvement',
        'Flower cultivation, ornamental plants and nursery establishments',
      ],
    },
  },
  {
    id: 'forestry',
    number: 3,
    iconName: 'Trees',
    title: {
      de: 'Forstwirtschaft und Waldpflege',
      uk: 'Лісове господарство',
      en: 'Forestry & Wood Management',
    },
    shortDescription: {
      de: 'Aufforstung, Pflege von Waldbeständen, nachhaltige Holz- und Forstwirtschaft sowie Zierbaumschulen.',
      uk: 'Вирощування, відновлення та догляд за лісовими насадженнями, заготівля лісової продукції та раціональне природокористування.',
      en: 'Reforestation, woodland maintenance, sustainable timber and forest products management, and decorative tree cultivation.',
    },
    items: {
      de: [
        'Anbau, Aufforstung und nachhaltige Pflege von Baumbeständen',
        'Rechtskonforme Ernte und Verwertung forstwirtschaftlicher Erzeugnisse',
        'Zucht von Baumsetzlingen und Ziergehölzen',
        'Ressourcenschonende und ökologische Waldwirtschaft',
      ],
      uk: [
        'Вирощування, відновлення та догляд за лісовими насадженнями',
        'Заготівля та реалізація лісової продукції відповідно до законодавства',
        'Вирощування саджанців дерев і декоративних рослин',
        'Раціональне використання та збереження природних ресурсів',
      ],
      en: [
        'Cultivation, regeneration and maintenance of forest stands',
        'Harvesting and distribution of timber and forestry products',
        'Cultivation of tree saplings and ornamental shrubs',
        'Rational, environmentally sustainable resource conservation',
      ],
    },
  },
  {
    id: 'production-processing',
    number: 4,
    iconName: 'Factory',
    title: {
      de: 'Produktion und Verarbeitung',
      uk: 'Виробництво та переробка',
      en: 'Production & Processing',
    },
    shortDescription: {
      de: 'Verarbeitung pflanzlicher und tierischer Rohstoffe, Lebensmittelherstellung, moderne Lagerung und Verpackung.',
      uk: 'Виробництво с/г продукції, переробка рослинної та тваринної сировини, зберігання, пакування та підготовка до збуту.',
      en: 'Processing of plant and animal raw materials, food processing, professional storage, packaging and distribution readiness.',
    },
    items: {
      de: [
        'Herstellung hochwertiger Primär- und Veredelungsprodukte',
        'Tiefgehende Verarbeitung pflanzlicher und tierischer Rohstoffe',
        'Erzeugung marktreifer Nahrungs- und Futtermittel',
        'Klimakontrollierte Lagerung, Verpackung und Liefervorbereitung',
      ],
      uk: [
        'Виробництво сільськогосподарської продукції',
        'Переробка рослинної та тваринної сировини',
        'Виготовлення харчових продуктів відповідно до обраних напрямів',
        'Зберігання, пакування та підготовка продукції до реалізації',
      ],
      en: [
        'Production of raw agricultural produce',
        'Primary and advanced processing of crop and animal materials',
        'Manufacture of food products and feedstuffs',
        'Climate-controlled storage, packaging and preparation for delivery',
      ],
    },
  },
  {
    id: 'trade-distribution',
    number: 5,
    iconName: 'Store',
    title: {
      de: 'Handel und Distribution',
      uk: 'Торгівля та реалізація продукції',
      en: 'Trade & Distribution',
    },
    shortDescription: {
      de: 'Groß- und Einzelhandel mit Agrarerzeugnissen, B2B-Lieferketten zu europäischen Handelsnetzen und Endabnehmern.',
      uk: 'Оптова та роздрібна торгівля зерном, насінням, овочами, фруктами, м’ясом, молоком; експорт та внутрішній ринок.',
      en: 'Wholesale and retail commerce in grain, seeds, produce, dairy and meat; supply to commercial networks and European partners.',
    },
    items: {
      de: [
        'Groß- und Einzelhandel mit eigener und zugekaufter Agrarware',
        'Vertrieb von Getreide, Saatgut, Obst, Gemüse, Fleisch und Molkereiprodukten',
        'Lieferungen an Lebensmittelketten, Verarbeiter und Gewerbekunden',
        'Aufbau internationaler Handelsbeziehungen und B2B-Kooperationen',
      ],
      uk: [
        'Оптова й роздрібна торгівля власною та придбаною продукцією',
        'Реалізація зерна, насіння, овочів, фруктів, квітів, м’яса, молока, яєць',
        'Постачання продукції підприємствам, торговельним мережам і покупцям',
        'Розвиток партнерських відносин на внутрішньому та міжнародному ринках',
      ],
      en: [
        'Wholesale and retail trading of self-produced and procured goods',
        'Sales of grains, seeds, vegetables, fruits, flowers, meat, dairy, eggs',
        'Supply to food processing industries, retail chains and commercial buyers',
        'Expansion of bilateral partnerships in domestic and European markets',
      ],
    },
  },
];
