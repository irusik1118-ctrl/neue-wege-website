'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales, localeNames } from '@/i18n/config';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() || `/${currentLocale}`;

  // Helper to replace the locale prefix in current URL
  const getLocalizedPath = (targetLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return `/${targetLocale}`;
    }
    // If first segment is a locale, replace it
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return `/${segments.join('/')}`;
    }
    return `/${targetLocale}/${segments.join('/')}`;
  };

  return (
    <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm border border-brand-border rounded-full p-1 shadow-xs">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            hrefLang={locale}
            aria-current={isActive ? 'page' : undefined}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
              isActive
                ? 'bg-brand-purple text-white shadow-xs'
                : 'text-brand-ink hover:text-brand-purple hover:bg-brand-surface'
            }`}
          >
            <span className="text-sm leading-none">{localeNames[locale].flag}</span>
            <span className="uppercase">{locale}</span>
          </Link>
        );
      })}
    </div>
  );
}
