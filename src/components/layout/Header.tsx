import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/i18n/types';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavigation } from './MobileNavigation';
import { contactsData } from '@/data/contacts';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/events`, label: dict.nav.events },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/articles`, label: dict.nav.articles },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border shadow-xs">
      {/* Top bar with verified contacts */}
      <div className="bg-brand-purple text-white text-xs py-1.5 px-4 sm:px-8 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-brand-gold-light font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>{contactsData.address.display}</span>
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="hidden md:inline-block text-white/80">
              ТОВ «НОВА ДОРОГА» & Neue Wege GmbH
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${contactsData.persons[0].phone}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold" />
              <span className="text-white/70">UA:</span>
              <span className="font-semibold">{contactsData.persons[0].displayPhone}</span>
            </a>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <a
              href={`tel:${contactsData.persons[1].phone}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold" />
              <span className="text-white/70">AT:</span>
              <span className="font-semibold">{contactsData.persons[1].displayPhone}</span>
            </a>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <a
              href={contactsData.messenger.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-brand-gold-light hover:text-white transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-brand-gold" />
              <span className="font-medium">WhatsApp / Viber / TG</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative w-13 h-13 rounded-full border-2 border-brand-gold/60 p-0.5 bg-white shadow-xs group-hover:border-brand-gold transition-colors shrink-0">
              <Image
                src="/brand/logo-neue-wege.jpg"
                alt="Neue Wege GmbH"
                width={50}
                height={50}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-brand-navy group-hover:text-brand-purple transition-colors leading-tight">
                Neue Wege <span className="text-brand-gold font-bold">GmbH</span>
              </span>
              <span className="text-[11px] font-semibold text-brand-muted tracking-wide">
                ТОВ «НОВА ДОРОГА»
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-brand-ink hover:text-brand-purple hover:bg-brand-surface rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions: Language switcher & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-semibold rounded-lg shadow-xs hover:shadow-md transition-all duration-200"
            >
              <span>{dict.common.contactUs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </Link>
          </div>

          {/* Mobile navigation toggle */}
          <MobileNavigation locale={locale} dict={dict} />
        </div>
      </div>

      {/* Decorative gold hairline divider */}
      <div className="h-[2px] bg-gradient-to-r from-brand-purple via-brand-gold to-brand-navy opacity-80" />
    </header>
  );
}
