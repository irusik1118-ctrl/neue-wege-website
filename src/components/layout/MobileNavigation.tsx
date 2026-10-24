'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/i18n/types';
import { LanguageSwitcher } from './LanguageSwitcher';
import { contactsData } from '@/data/contacts';

interface MobileNavigationProps {
  locale: Locale;
  dict: Dictionary;
}

export function MobileNavigation({ locale, dict }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/events`, label: dict.nav.events },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/articles`, label: dict.nav.articles },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="p-2 rounded-lg text-brand-ink hover:text-brand-purple hover:bg-brand-surface focus:outline-hidden focus:ring-2 focus:ring-brand-purple"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                Мова / Sprache / Language
              </span>
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-brand-ink hover:text-brand-purple hover:bg-brand-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 mt-6 border-t border-brand-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-surface shrink-0">
                <Image
                  src="/brand/logo-neue-wege.jpg"
                  alt="Neue Wege GmbH Logo"
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-purple">Neue Wege GmbH</p>
                <p className="text-[11px] text-brand-muted">{contactsData.address.display[locale]}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${contactsData.persons[0].phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-surface hover:bg-brand-border/40 text-brand-ink text-xs font-semibold rounded-lg border border-brand-border"
              >
                <Phone className="w-3.5 h-3.5 text-brand-purple" />
                <span>{contactsData.persons[0].country[locale]}</span>
              </a>
              <a
                href={contactsData.messenger.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-purple text-white text-xs font-semibold rounded-lg shadow-xs hover:bg-brand-purple-deep"
              >
                <MessageCircle className="w-3.5 h-3.5 text-brand-gold-light" />
                <span>{dict.common.messengers}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
