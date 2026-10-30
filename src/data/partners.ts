export interface PartnerItem {
  id: string;
  name: {
    de: string;
    ua:string;
    en: string;
  };
  type: {
    de: string;
    ua:string;
    en: string;
  };
  description: {
    de: string;
    ua:string;
    en: string;
  };
  logoUrl?: string;
  location: {
    de: string;
    ua:string;
    en: string;
  };
  regNumber?: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: 'hoffnung-wuerde',
    name: {
      de: 'Gemeinnützige Organisation „Hoffnung & Würde“',
      ua:'Благодійна організація «Надія та Гідність»',
      en: 'Non-profit Organization "Hoffnung & Würde"',
    },
    type: {
      de: 'Strategischer Kooperationspartner',
      ua:'Стратегічний партнер з підтримки та координації',
      en: 'Strategic Non-Profit Partner',
    },
    description: {
      de: 'Österreichische Organisation mit Sitz in Wien, die ukrainische Initiativen und Unternehmen bei der nachhaltigen Integration in den europäischen Wirtschaftsraum aktiv unterstützt.',
      ua:'Австрійська благодійна організація (м. Відень), яка підтримує представлення інтересів українських аграрних підприємств на міжнародних виставках та майданчиках Європи.',
      en: 'Austrian organization based in Vienna supporting the representation and integration of Ukrainian agricultural enterprises in European markets.',
    },
    logoUrl: '/brand/partner-hoffnung-wurde-29-1.webp',
    location: {
      de: 'Wien, Österreich',
      ua:'м. Відень, Австрія',
      en: 'Vienna, Austria',
    },
    regNumber: 'ZVR 1984068166',
  },
  {
    id: 'european-agri-network',
    name: {
      de: 'Europäisches Agrar- und Handelsnetzwerk',
      ua:'Європейська мережа агротрейдерів та дистриб’юторів',
      en: 'European Agricultural & Trade Network',
    },
    type: {
      de: 'B2B-Handelspartner & Einkäufer',
      ua:'Торговельні партнери та імпортери',
      en: 'B2B Trade Partners & Off-takers',
    },
    description: {
      de: 'Zusammenarbeit mit europäischen Getreidehändlern, Verarbeitungsbetrieben, Futtermittelherstellern und Supermarktketten in Österreich, Deutschland und den Benelux-Staaten.',
      ua:'Співпраця з трейдерами зернових та олійних культур, переробними заводами, комбікормовими підприємствами в Австрії, Німеччині та країнах Бенілюксу.',
      en: 'Cooperation with European grain traders, food processors, feed compounders, and commercial buyers across Austria, Germany and Benelux.',
    },
    location: {
      de: 'EU (Österreich, Deutschland, Belgien)',
      ua:'ЄС (Австрія, Німеччина, Бельгія)',
      en: 'EU (Austria, Germany, Belgium)',
    },
  },
  {
    id: 'machinery-genetics',
    name: {
      de: 'Technologie- und Zuchtpartner',
      ua:'Постачальники обладнання та селекційні центри',
      en: 'Agri-Tech & Breeding Centres',
    },
    type: {
      de: 'Technologie & Genetik',
      ua:'Технології, техніка та генетика',
      en: 'Technology & Genetics',
    },
    description: {
      de: 'Netzwerk führender Hersteller moderner Bodenbearbeitungstechnik, Melkanlagen, Fütterungssysteme und Saatgutproduzenten für den Technologietransfer.',
      ua:'Партнерські зв’язки з провідними європейськими заводами сільгосптехніки, виробниками доїльного обладнання, систем мікроклімату та насіннєвими заводами.',
      en: 'Partnership with European machinery manufacturers, milking technology innovators, precision farming suppliers, and seed breeders.',
    },
    location: {
      de: 'EU',
      ua:'ЄС',
      en: 'EU',
    },
  },
];
