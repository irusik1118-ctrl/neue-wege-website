export interface ContactPerson {
  id: string;
  country: string;
  name: Record<'de' | 'uk' | 'en', string>;
  phone: string;
  displayPhone: string;
  isConfirmed: boolean;
}

export interface MessengerContact {
  id: string;
  name: string;
  phone: string;
  displayPhone: string;
  channels: ('whatsapp' | 'viber' | 'telegram')[];
  whatsappLink: string;
  viberLink: string;
  telegramLink: string;
}

export const contactsData = {
  address: {
    city: 'Wien',
    country: 'Österreich',
    display: 'Wien, Österreich',
    postalCode: '1010', // pending full street confirmation
  },
  persons: [
    {
      id: 'ukraine',
      country: 'Україна',
      name: {
        de: 'Oleg (Ukraine Repräsentant)',
        uk: 'Олег (Представник в Україні)',
        en: 'Oleh (Ukraine Representative)',
      },
      phone: '+380938119524',
      displayPhone: '+38 0938119524',
      isConfirmed: true,
    },
    {
      id: 'austria',
      country: 'Österreich',
      name: {
        de: 'Michael (Österreich Leitung)',
        uk: 'Михайло (Керівництво Австрія)',
        en: 'Michael (Austria Management)',
      },
      phone: '+4366499605910',
      displayPhone: '+43 66499605910',
      isConfirmed: true,
    },
  ] as ContactPerson[],
  messenger: {
    id: 'general-messenger',
    name: 'WhatsApp / Viber / Telegram',
    phone: '+4366499701588',
    displayPhone: '+43 66499701588',
    channels: ['whatsapp', 'viber', 'telegram'],
    whatsappLink: 'https://wa.me/4366499701588',
    viberLink: 'viber://chat?number=%2B4366499701588',
    telegramLink: 'https://t.me/+4366499701588',
  } as MessengerContact,
  email: 'office@neuewege-gmbh.at', // pending final domain mail setup
  legal: {
    companyNameAt: 'Neue Wege GmbH',
    companyNameUa: 'ТОВ «НОВА ДОРОГА»',
    sloganDe: 'Ihr Partner von der Gründung bis zum erfolgreichen Business',
    sloganUa: 'Ваш партнер від заснування до успішного бізнесу',
    taglineUa: 'Новий шлях до розвитку, якості та добробуту',
    taglineDe: 'Neuer Weg zu Entwicklung, Qualität und Wohlstand',
    taglineEn: 'New path to development, quality and prosperity',
  },
};
