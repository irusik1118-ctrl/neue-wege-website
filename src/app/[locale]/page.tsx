import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, Users, CheckCircle2, Phone, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ActivityCard } from '@/components/sections/ActivityCard';
import { PackageCard } from '@/components/sections/PackageCard';
import { activitiesData } from '@/data/activities';
import { packagesData } from '@/data/packages';
import { exhibitionData } from '@/data/exhibition';
import { partnersData } from '@/data/partners';
import { articlesData } from '@/data/articles';
import { contactsData } from '@/data/contacts';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-brand-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(#4B176B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/50 shadow-xs text-xs font-semibold text-brand-purple">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>{dict.home.heroBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-[1.15]">
                {dict.home.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {dict.home.heroSubtitle}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href={`/${typedLocale}/services`}
                  className="px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  <span>{dict.home.ctaServices}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>

                <Link
                  href={`/${typedLocale}/contact`}
                  className="px-6 py-3.5 bg-white hover:bg-brand-surface text-brand-navy font-bold text-sm rounded-xl border border-brand-border shadow-xs hover:border-brand-gold transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-purple" />
                  <span>{dict.home.ctaContact}</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl font-black text-brand-purple">5</p>
                  <p className="text-xs text-brand-muted">Напрямків агробізнесу</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-brand-gold">14–17.01</p>
                  <p className="text-xs text-brand-muted">Гент, Бельгія 2027</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-brand-navy">100%</p>
                  <p className="text-xs text-brand-muted">Без особистого виїзду</p>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-gold/60 shadow-2xl space-y-6">
                <div className="relative aspect-square w-48 sm:w-56 mx-auto rounded-full p-2 bg-gradient-to-tr from-brand-purple via-brand-gold to-brand-navy shadow-inner">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                    <Image
                      src="/brand/logo-neue-wege.jpg"
                      alt="Neue Wege GmbH Logo"
                      width={220}
                      height={220}
                      className="w-full h-full object-contain rounded-full"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-xl font-bold text-brand-navy">
                    {contactsData.legal.companyNameAt}
                  </h2>
                  <p className="text-xs text-brand-purple font-bold uppercase tracking-wider">
                    {contactsData.legal.companyNameUa}
                  </p>
                  <p className="text-xs text-brand-muted italic">
                    «{contactsData.legal.sloganUa}»
                  </p>
                </div>

                <div className="bg-brand-surface rounded-2xl p-4 border border-brand-border text-xs space-y-2 text-brand-ink/90">
                  <div className="flex items-center gap-2 text-brand-purple font-semibold">
                    <Building2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Wien, Österreich • Представництво в Україні</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Офіційні послуги та прямий вихід на ринок ЄС</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ACTIVITIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Комплексний підхід"
          title={dict.home.activitiesHeading}
          subtitle={dict.home.activitiesSubheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} locale={typedLocale} />
          ))}

          {/* 6th Info CTA card */}
          <div className="bg-gradient-to-br from-brand-purple to-brand-purple-deep rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-gold-light bg-white/10 px-3 py-1 rounded-full border border-brand-gold/30">
                Індивідуальний підхід
              </span>
              <h3 className="text-2xl font-bold">
                Потрібне індивідуальне представництво?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Ми узгоджуємо спеціальні умови участі та представлення ваших аграрних проєктів перед європейськими партнерами.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href={`/${typedLocale}/contact`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-light transition-colors"
              >
                <span>Обговорити умови</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXHIBITION GHENT 2027 BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy text-white p-8 sm:p-12 border-2 border-brand-gold/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>{dict.home.exhibitionBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                {dict.home.exhibitionHeading}
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {dict.home.exhibitionSubheading} За підтримки австрійської благодійної організації «Надія та Гідність» ми презентуємо продукцію та можливості вашого господарства перед 70 000 європейських відвідувачів.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{exhibitionData.location.display[typedLocale]}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Users className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>70 000+ відвідувачів • 50 000 м²</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/${typedLocale}/events`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200"
                >
                  <span>{dict.home.exhibitionCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full border-2 border-brand-gold p-1 bg-white shadow-xl">
                <Image
                  src="/brand/logo-hoffnung-wurde.jpg"
                  alt="Hoffnung & Würde"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-gold-light">
                  За підтримки організації
                </p>
                <p className="text-sm font-black text-white">
                  «Надія та Гідність» (Wien)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Пакетні пропозиції"
          title={dict.home.servicesHeading}
          subtitle={dict.home.servicesSubheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} locale={typedLocale} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${typedLocale}/services`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-purple-deep underline underline-offset-4"
          >
            <span>Переглянути весь прайс-лист окремих послуг (від 100 €)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Надійна співпраця"
          title={dict.home.partnersHeading}
          subtitle={dict.home.partnersSubheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:border-brand-gold hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {partner.logoUrl ? (
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 p-0.5 bg-white mb-2 overflow-hidden">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name[typedLocale]}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-purple font-black text-sm mb-2">
                    B2B
                  </div>
                )}
                <span className="text-[11px] font-semibold text-brand-purple bg-brand-surface px-2.5 py-0.5 rounded-full border border-brand-border">
                  {partner.type[typedLocale]}
                </span>
                <h3 className="text-base font-bold text-brand-navy leading-snug">
                  {partner.name[typedLocale]}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {partner.description[typedLocale]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/60 text-[11px] font-medium text-brand-muted flex items-center justify-between">
                <span>{partner.location}</span>
                {partner.regNumber && <span className="text-brand-purple font-semibold">{partner.regNumber}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ARTICLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
              База знань
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">
              {dict.home.articlesHeading}
            </h2>
          </div>
          <Link
            href={`/${typedLocale}/articles`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:underline uppercase tracking-wider"
          >
            <span>Всі публікації</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="font-semibold text-brand-purple bg-brand-surface px-2 py-0.5 rounded-md">
                    {article.category[typedLocale]}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-base font-bold text-brand-navy leading-snug hover:text-brand-purple transition-colors">
                  <Link href={`/${typedLocale}/articles/${article.slug}`}>
                    {article.title[typedLocale]}
                  </Link>
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {article.excerpt[typedLocale]}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-brand-border/40">
                <Link
                  href={`/${typedLocale}/articles/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-purple-deep"
                >
                  <span>{dict.common.readArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-surface border border-brand-gold/60 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
            {dict.home.ctaBannerTitle}
          </h2>
          <p className="text-sm text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {dict.home.ctaBannerSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contactsData.persons[0].phone}`}
              className="px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Подзвонити: {contactsData.persons[0].displayPhone}</span>
            </a>
            <a
              href={contactsData.messenger.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
            >
              <span>WhatsApp / Viber / TG</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
