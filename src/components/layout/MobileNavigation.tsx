'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Home,
  Building2,
  Briefcase,
  Calendar,
  Handshake,
  FileText,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/i18n/types';
import { contactsData } from '@/data/contacts';

const emptySubscribe = () => () => {};

interface MobileNavigationProps {
  locale: Locale;
  dict: Dictionary;
}

export function MobileNavigation({ locale, dict }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home, icon: Home },
    { href: `/${locale}/about`, label: dict.nav.about, icon: Building2 },
    { href: `/${locale}/events`, label: dict.nav.events, icon: Calendar },
    { href: `/${locale}/partners`, label: dict.nav.partners, icon: Handshake },
    { href: `/${locale}/services`, label: dict.nav.services, icon: Briefcase },
    { href: `/${locale}/articles`, label: dict.nav.articles, icon: FileText },
    { href: `/${locale}/contact`, label: dict.nav.contact, icon: Mail },
  ];

  return (
    <div className="lg:hidden">
      {/* Burger Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-white hover:bg-brand-surface text-brand-navy border border-brand-border hover:border-brand-gold shadow-2xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-brand-purple/20"
      >
        <Menu className="w-5 h-5 text-brand-navy" />
      </button>

      {/* Render Drawer into document.body via Portal so it is not trapped inside the header's backdrop-filter containing block */}
      {isMounted && isOpen && createPortal(
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <div
            role="presentation"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity duration-200"
          />

          {/* Slide-over Navigation Drawer */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-sm h-full h-[100dvh] bg-white shadow-2xl flex flex-col justify-between border-l border-brand-border z-10 animate-in slide-in-from-right duration-250 ease-out"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-brand-border bg-gradient-to-r from-brand-surface to-white shrink-0">
              <Link
                href={`/${locale}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-full border border-brand-gold/50 p-0.5 bg-white shrink-0">
                  <Image
                    src="/brand/logo-neue-wege.jpg"
                    alt="Neue Wege GmbH"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-brand-navy leading-tight">
                    Neue Wege <span className="text-brand-gold">GmbH</span>
                  </span>
                  <span className="text-[10px] font-semibold text-brand-muted">
                    {locale === 'ua' ? 'ТОВ «НОВА ДОРОГА»' : 'Austrian Agribusiness'}
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-brand-muted hover:text-brand-navy hover:bg-brand-surface border border-transparent hover:border-brand-border transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links Body */}
            <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-1">
              <p className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-wider text-brand-muted">
                {locale === 'de' ? 'Navigation' : locale === 'ua' ? 'Навігація' : 'Navigation'}
              </p>

              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive =
                  link.href === `/${locale}`
                    ? pathname === `/${locale}`
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-purple text-white shadow-xs'
                        : 'text-brand-navy hover:bg-brand-surface hover:text-brand-purple'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-brand-gold' : 'text-brand-muted'
                      }`}
                    />
                    <span className="flex-1">{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Footer Actions & Contacts */}
            <div className="p-4 sm:p-5 border-t border-brand-border bg-brand-surface/50 space-y-3 shrink-0">
              {/* Primary CTA */}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>{dict.common.contactUs}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>

              {/* Quick Contact shortcuts */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${contactsData.persons[0].phone}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white hover:bg-brand-surface text-brand-navy text-[11px] font-bold rounded-lg border border-brand-border shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">UA Office</span>
                </a>
                <a
                  href={contactsData.messenger.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white hover:bg-brand-surface text-brand-purple text-[11px] font-bold rounded-lg border border-brand-border shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{dict.common.messengers}</span>
                </a>
              </div>

              <div className="pt-1 text-center">
                <a
                  href={`mailto:${contactsData.email}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-purple hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>{contactsData.email}</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-brand-muted pt-0.5">
                {contactsData.address.display[locale]}
              </p>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </div>
  );
}

