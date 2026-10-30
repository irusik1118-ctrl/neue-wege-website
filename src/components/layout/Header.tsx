import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import { contactsData } from "@/data/contacts";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/events`, label: dict.nav.events },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/articles`, label: dict.nav.articles },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border shadow-xs">
      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - shrink-0 to prevent any text truncation */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 whitespace-nowrap"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-brand-gold/60 p-0.5 bg-white shadow-xs group-hover:border-brand-gold transition-colors shrink-0">
              <Image
                src="/brand/logo-neue-wege.webp"
                alt="Neue Wege GmbH"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-brand-navy group-hover:text-brand-purple transition-colors leading-tight whitespace-nowrap">
                Neue Wege{" "}
                <span className="text-brand-gold font-bold">GmbH</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-brand-muted tracking-wide whitespace-nowrap">
                {locale === "ua"
                  ? "ТОВ «НОВА ДОРОГА»"
                  : "Austrian Agribusiness"}
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold text-brand-ink hover:text-brand-purple hover:bg-brand-surface rounded-lg transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions: Desktop CTA, Language switcher, Burger menu toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop / Tablet CTA */}
            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md border border-brand-gold/50 transition-all duration-200"
            >
              <span>{dict.common.contactUs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />

            {/* Mobile navigation toggle */}
            <MobileNavigation locale={locale} dict={dict} />
          </div>
        </div>
      </div>

      {/* Decorative gold hairline divider */}
      <div className="h-[2px] bg-gradient-to-r from-brand-purple via-brand-gold to-brand-navy opacity-80" />
    </header>
  );
}
