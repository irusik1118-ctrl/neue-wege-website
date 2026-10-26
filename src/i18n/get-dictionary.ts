import { Locale, defaultLocale } from './config';
import { Dictionary } from './types';
import { de } from './dictionaries/de';
import { ua } from './dictionaries/ua';
import { en } from './dictionaries/en';

const dictionaries: Record<Locale, Dictionary> = {
  de,
  ua,
  en,
};

export const getDictionary = (locale: string): Dictionary => {
  if (locale === 'ua' || locale === 'en' || locale === 'de') {
    return dictionaries[locale as Locale];
  }
  return dictionaries[defaultLocale];
};
