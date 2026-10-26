'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
import { Locale, locales, localeNames } from '@/i18n/config';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || `/${currentLocale}`;

  // Close dropdown on outside click or escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

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

  const currentInfo = localeNames[currentLocale] || {
    label: currentLocale.toUpperCase(),
    nativeName: currentLocale.toUpperCase(),
    flag: '🌐',
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white hover:bg-brand-surface text-brand-navy font-bold text-xs border border-brand-border hover:border-brand-gold shadow-2xs transition-all duration-150 focus:outline-hidden focus:ring-2 focus:ring-brand-purple/20"
      >
        <span className="text-sm leading-none">{currentInfo.flag}</span>
        <span className="uppercase tracking-wider font-extrabold">{currentLocale}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-brand-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-purple' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-brand-border py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        >
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-muted border-b border-brand-border/60">
            Language / Мова / Sprache
          </div>
          <div className="py-1">
            {locales.map((locale) => {
              const isActive = locale === currentLocale;
              const info = localeNames[locale];
              return (
                <Link
                  key={locale}
                  href={getLocalizedPath(locale)}
                  hrefLang={locale}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors duration-150 ${
                    isActive
                      ? 'bg-brand-surface text-brand-purple font-bold'
                      : 'text-brand-ink hover:bg-brand-surface/70 hover:text-brand-purple font-medium'
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{info.flag}</span>
                    <div className="flex flex-col text-left">
                      <span className="text-xs leading-tight">{info.nativeName}</span>
                      <span className="text-[10px] text-brand-muted uppercase tracking-wider">
                        {locale}
                      </span>
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-brand-purple shrink-0" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
