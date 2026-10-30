import Image from 'next/image';
import { Calendar, Info, ShieldCheck, Heart } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from '@/components/sections/PackageCard';
import { PricingTable } from '@/components/sections/PricingTable';
import { ContactButton } from '@/components/ui/ContactButton';
import { packagesData, packageDifference, packageTerms, packageSignOff } from '@/data/packages';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const heroContent = {
    badge: {
      de: 'PREISLISTE DER DIENSTLEISTUNGEN',
      ua: 'ПРАЙС-ЛИСТ ПОСЛУГ',
      en: 'SERVICE PRICE LIST',
    },
    title: {
      de: 'Vertretung ukrainischer Agrarunternehmen auf der Messe in Gent, Belgien',
      ua: 'Представлення українських аграрних підприємств на виставці в Генті, Бельгія',
      en: 'Representation of Ukrainian Agribusinesses at the Exhibition in Ghent, Belgium',
    },
    dates: {
      de: '14.–17. Januar 2027 • Flandern Expo, Gent',
      ua: '14–17 січня 2027 року • Flanders Expo, Гент',
      en: '14–17 January 2027 • Flanders Expo, Ghent',
    },
    subtitle: {
      de: 'Das österreichische Unternehmen «NEUE WEGE» bietet ukrainischen Agrarbetrieben Dienstleistungen zur Präsentation ihrer Produkte und zur Suche potenzieller Partner auf dem europäischen Markt.',
      ua: 'Австрійська компанія «НОВА ДОРОГА» пропонує українським аграрним підприємствам послуги з представлення продукції та пошуку потенційних партнерів на європейському ринку.',
      en: 'The Austrian company “NEUE WEGE” offers Ukrainian agricultural enterprises services to present their produce and connect with prospective partners across the European market.',
    },
  };

  const sectionTitles = {
    tableHeading: {
      de: 'Vergleichende Preistabelle',
      ua: 'Порівняльна таблиця цін',
      en: 'Comparative Price Table',
    },
    tableSubtitle: {
      de: 'Übersicht aller 7 Einzelleistungen für das Business-Paket und das flexible Economy-Paket',
      ua: 'Огляд усіх 7 послуг для Бізнес-пакета та гнучкого Економ-пакета',
      en: 'Overview of all 7 services across the Business Package and flexible Economy Package',
    },
    packagesHeading: {
      de: 'Paketangebote für die Messeteilnahme',
      ua: 'Пакети представлення на виставці',
      en: 'Exhibition Representation Packages',
    },
    packagesSubtitle: {
      de: 'Wählen Sie zwischen umfassender Vollpräsenz im Business-Paket oder bedarfsorientierter Auswahl im Economy-Paket',
      ua: 'Оберіть комплексне представлення в Бізнес-пакеті або гнучкий підбір послуг в Економ-пакеті',
      en: 'Choose full comprehensive representation in the Business Package or tailored selection in the Economy Package',
    },
    termsHeading: {
      de: 'Wichtige Bedingungen',
      ua: 'Важливі умови',
      en: 'Important Terms & Conditions',
    },
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy rounded-3xl p-6 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border-2 border-brand-gold/60">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-wider shadow-sm">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{heroContent.badge[typedLocale]}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {heroContent.title[typedLocale]}
            </h1>

            <p className="inline-block text-sm sm:text-base font-bold text-brand-gold-light bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              {heroContent.dates[typedLocale]}
            </p>

            <p className="text-sm sm:text-lg text-white/90 leading-relaxed pt-2">
              {heroContent.subtitle[typedLocale]}
            </p>

            <div className="pt-4">
              <ContactButton locale={typedLocale} size="md" variant="gold" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPARATIVE PRICING TABLE (Section 10 of TZ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={heroContent.badge[typedLocale]}
          title={sectionTitles.tableHeading[typedLocale]}
          subtitle={sectionTitles.tableSubtitle[typedLocale]}
        />

        <PricingTable locale={typedLocale} />
      </section>

      {/* 3. BUSINESS & ECONOMY PACKAGES (Section 10.1 of TZ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.services.packagesBadge}
          title={sectionTitles.packagesHeading[typedLocale]}
          subtitle={sectionTitles.packagesSubtitle[typedLocale]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} locale={typedLocale} />
            ))}
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm lg:max-w-none rounded-3xl border-2 border-brand-gold/60 bg-white p-3 shadow-xl flex items-center justify-center">
              <Image
                src="/brand/services-agricultural-sector-29-3.webp"
                alt={
                  typedLocale === 'ua'
                    ? 'Neue Wege GmbH — Послуги в аграрному секторі (Agricultural Sector — We Work For Your Business)'
                    : typedLocale === 'de'
                    ? 'Neue Wege GmbH — Dienstleistungen im Agrarsektor (Agricultural Sector — We Work For Your Business)'
                    : 'Neue Wege GmbH — Services in the Agricultural Sector (We Work For Your Business)'
                }
                width={512}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 384px"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Highlighted Difference Callout */}
        <div className="max-w-5xl mx-auto mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brand-surface to-white border-2 border-brand-purple/20 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-purple text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-purple">
              {typedLocale === 'ua' ? 'Ключова відмінність пакетів' : typedLocale === 'de' ? 'Wesentlicher Unterschied der Pakete' : 'Key Package Difference'}
            </h4>
            <p className="text-xs sm:text-sm text-brand-navy font-bold leading-relaxed mt-1">
              {packageDifference[typedLocale]}
            </p>
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT TERMS & CONDITIONS (Section 9.1 of TZ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-surface border-2 border-brand-gold/60 p-6 sm:p-12 space-y-8 shadow-sm">
          <div className="flex items-center gap-3.5 border-b border-brand-border/80 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-gold flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                {sectionTitles.termsHeading[typedLocale]}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-medium">
                {typedLocale === 'ua'
                  ? 'Умови співпраці, надання послуг та порядок розрахунків'
                  : 'Bedingungen der Zusammenarbeit und Leistungsabwicklung'}
              </p>
            </div>
          </div>

          <ul className="space-y-3.5">
            {packageTerms[typedLocale].map((term, i) => (
              <li
                key={i}
                className="flex items-start gap-3.5 text-xs sm:text-sm text-brand-ink leading-relaxed bg-white p-4 sm:p-5 rounded-2xl border border-brand-border shadow-2xs"
              >
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  {i + 1}
                </span>
                <span className="font-medium">{term}</span>
              </li>
            ))}
          </ul>

          {/* Slogan and Charity sign-off */}
          <div className="pt-6 border-t border-brand-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <p className="text-sm sm:text-base font-black text-brand-purple">
                {packageSignOff.slogan[typedLocale]}
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-semibold flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-gold fill-brand-gold shrink-0" />
                <span>{packageSignOff.support[typedLocale]}</span>
              </p>
            </div>

            <ContactButton locale={typedLocale} size="md" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
