export const locales = ["de", "ua", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const localeNames: Record<
  Locale,
  { label: string; nativeName: string; flag: string }
> = {
  de: { label: "Deutsch", nativeName: "Deutsch", flag: "🇦🇹" },
  ua: { label: "Ukrainisch", nativeName: "Українська", flag: "🇺🇦" },
  en: { label: "Englisch", nativeName: "English", flag: "🇪🇺" },
};
