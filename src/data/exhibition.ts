export interface ExhibitionInfo {
  dates: {
    de: string;
    ua:string;
    en: string;
  };
  startDate: string;
  endDate: string;
  location: {
    city: string;
    country: string;
    venue: string;
    display: {
      de: string;
      ua:string;
      en: string;
    };
  };
  stats: {
    visitors: string;
    area: string;
  };
  sectors: {
    de: string[];
    ua:string[];
    en: string[];
  };
  benefits: {
    de: { title: string; desc: string }[];
    ua:{ title: string; desc: string }[];
    en: { title: string; desc: string }[];
  };
}

export const exhibitionData: ExhibitionInfo = {
  startDate: '2027-01-14',
  endDate: '2027-01-17',
  dates: {
    de: '14. – 17. Januar 2027',
    ua:'14–17 січня 2027 року',
    en: 'January 14–17, 2027',
  },
  location: {
    city: 'Gent',
    country: 'Belgien',
    venue: 'Flanders Expo, Gent',
    display: {
      de: 'Gent, Belgien (Flanders Expo)',
      ua:'м. Гент, Бельгія (Flanders Expo)',
      en: 'Ghent, Belgium (Flanders Expo)',
    },
  },
  stats: {
    visitors: '70 000+',
    area: '50 000 m²',
  },
  sectors: {
    de: [
      'Tierzucht und Selektion: neue Rassen, Zuchtwesen, Haltungssysteme',
      'Geflügel- und Schweinezucht, Kaninchenhaltung und Fütterungstechnik',
      'Agrartechnik und Mechanisierung: moderne Bodenbearbeitung, Erntemaschinen',
      'Pflanzenschutz: Pflanzenernährung, Schädlingsbekämpfung und biologische Lösungen',
      'Veterinärmedizin: Pharmazeutika, Tiergesundheit und Biosicherheit',
    ],
    ua:[
      'Тваринництво та селекція: нові породи, племінна справа, розведення',
      'Птахівництво та тваринництво: свинарство, кролівництво та годівля',
      'Сільськогосподарська техніка та механізація: сучасне обладнання, обробіток ґрунту',
      'Захист рослин: агрохімія, біозахист та сучасні засоби захисту врожаю',
      'Ветеринарія: ветеринарні препарати, засоби догляду та рішення для здоров’я тварин',
    ],
    en: [
      'Livestock breeding & genetics: pedigree lines, selection methods, farm technology',
      'Poultry, swine and rabbit farming: management, nutrition and housing systems',
      'Agricultural machinery & mechanisation: modern soil cultivation, precision farming',
      'Crop protection: agrochemistry, pest management, crop health innovations',
      'Veterinary science: pharmaceuticals, animal welfare, diagnostic solutions',
    ],
  },
  benefits: {
    de: [
      {
        title: 'Kein Reiseaufwand erforderlich',
        desc: 'Sie sparen wertvolle Reisezeit, Kosten für Visa und Logistik und bleiben voll auf Ihren laufenden Betrieb fokussiert.',
      },
      {
        title: 'Mehrsprachige Fachmanager',
        desc: 'Unser Team vor Ort spricht Deutsch, Englisch, Niederländisch und Ukrainisch und vertritt Ihre Interessen auf Augenhöhe.',
      },
      {
        title: 'Direkter B2B-Kontakt zu Einkäufern',
        desc: 'Wir sammeln strukturierte Kontaktdaten potenzieller Abnehmer, Händler und Lieferanten genau nach Ihrem Anforderungsprofil.',
      },
      {
        title: 'Präsenz auf Großbildschirmen',
        desc: 'Ihr Betrieb wird den ganzen Tag über (08:00–20:00) alle 20 Minuten per Videoclip im Hauptpavillon präsentiert.',
      },
      {
        title: 'Schriftlicher Abschlussbericht',
        desc: 'Nach Messeende erhalten Sie eine vollständige Auswertung aller geführten Gespräche und geknüpften Kontakte.',
      },
    ],
    ua:[
      {
        title: 'Вам не потрібно їхати особисто',
        desc: 'Економія коштів на поїздку, проживання та логістику. Ваше господарство залишається під вашим безперервним контролем.',
      },
      {
        title: 'Багатомовні досвідчені менеджери',
        desc: 'Наші фахівці детально розкажуть європейським відвідувачам про вашу продукцію, виробничі потужності та переваги.',
      },
      {
        title: 'Прямий контакт із європейськими покупцями',
        desc: 'Цільовий збір контактів та запитів від покупців, переробників і постачальників техніки спеціально під ваші завдання.',
      },
      {
        title: 'Відео на великому екрані павільйону',
        desc: 'Безперервна демонстрація вашого ролика кожні 20 хвилин із 08:00 до 20:00 у центрі виставкового простору.',
      },
      {
        title: 'Повний аналітичний звіт після виставки',
        desc: 'Ви отримаєте структурований звіт про результати представлення, зацікавлені компанії та зібрані контакти.',
      },
    ],
    en: [
      {
        title: 'No personal travel required',
        desc: 'Save travel, accommodation and logistics budgets while keeping full daily control over your farming operations.',
      },
      {
        title: 'Multilingual industry representatives',
        desc: 'Our experienced staff present your farm, credentials and produce directly to European trade visitors.',
      },
      {
        title: 'Targeted European B2B leads',
        desc: 'Targeted gathering of prospective buyers, distributors, equipment makers and input suppliers matching your exact needs.',
      },
      {
        title: 'High-visibility big screen playback',
        desc: 'Continuous broadcasting of your 5-minute video every 20 minutes from 08:00 to 20:00 in the central pavilion.',
      },
      {
        title: 'Comprehensive post-exhibition report',
        desc: 'You receive structured feedback, contact dossiers, and actionable commercial inquiries after the event concludes.',
      },
    ],
  },
};
