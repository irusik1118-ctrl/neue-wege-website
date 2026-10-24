import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, ShieldCheck, FileText } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/i18n/types';
import { contactsData } from '@/data/contacts';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-purple-deep text-white border-t border-brand-gold/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-brand-gold p-0.5 bg-white shrink-0">
                <Image
                  src="/brand/logo-neue-wege.jpg"
                  alt="Neue Wege GmbH"
                  width={46}
                  height={46}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Neue Wege GmbH</h3>
                <p className="text-xs text-brand-gold-light font-medium">ТОВ «НОВА ДОРОГА»</p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              {contactsData.legal.sloganUa} • {contactsData.legal.sloganDe}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-brand-gold/30 text-xs text-brand-gold-light">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Wien, Österreich</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold-light uppercase tracking-wider mb-4">
              {dict.footer.navigationHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={`/${locale}`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/events`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.events}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/partners`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.partners}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/articles`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.articles}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-white/75 hover:text-brand-gold-light transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold-light uppercase tracking-wider mb-4">
              {dict.footer.contactHeading}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-white/80">{contactsData.address.display}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-[11px]">Україна:</p>
                  <a
                    href={`tel:${contactsData.persons[0].phone}`}
                    className="text-white font-semibold hover:text-brand-gold-light transition-colors"
                  >
                    {contactsData.persons[0].displayPhone} (Олег)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-[11px]">Австрія:</p>
                  <a
                    href={`tel:${contactsData.persons[1].phone}`}
                    className="text-white font-semibold hover:text-brand-gold-light transition-colors"
                  >
                    {contactsData.persons[1].displayPhone} (Михайло)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-[11px]">WhatsApp / Viber / Telegram:</p>
                  <a
                    href={contactsData.messenger.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold-light font-semibold hover:underline"
                  >
                    {contactsData.messenger.displayPhone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Fair presentation */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold-light uppercase tracking-wider mb-4">
              {dict.footer.legalHeading}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Міжнародна аграрна виставка у Генті, Бельгія (14–17 січня 2027 року). Офіційне представництво інтересів українських агровиробників.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href={`/${locale}/contact#impressum`}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-brand-gold-light transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-brand-gold" />
                <span>{dict.footer.impressum}</span>
              </Link>
              <Link
                href={`/${locale}/contact#privacy`}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-brand-gold-light transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>{dict.footer.privacyPolicy}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} Neue Wege GmbH / ТОВ «НОВА ДОРОГА». {dict.common.allRightsReserved}</p>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Wien • Österreich</span>
            <span>•</span>
            <span className="text-white/40">Україна</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
