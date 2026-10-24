import { Locale, defaultLocale } from './config';
import { Dictionary } from './types';
import { de } from './dictionaries/de';
import { uk } from './dictionaries/uk';
import { en } from './dictionaries/en';

const dictionaries: Record<Locale, Dictionary> = {
  de,
  uk,
  en,
};

export const getDictionary = (locale: string): Dictionary => {
  if (locale === 'uk' || locale === 'en' || locale === 'de') {
    return dictionaries[locale];
  }
  return dictionaries[defaultLocale];
};
