import Link from 'next/link';
import Image from 'next/image';
import { Target, Award, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { activitiesData } from '@/data/activities';
import { contactsData } from '@/data/contacts';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-brand-gold/40">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-gold-light bg-white/10 px-3 py-1 rounded-full border border-brand-gold/30">
              {dict.about.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.about.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                {typedLocale === 'uk' ? contactsData.legal.companyNameUa : contactsData.legal.companyNameAt} • {contactsData.address.display[typedLocale]}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-3 leading-snug">
                {dict.about.companyIntro}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-gold/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-purple text-brand-gold flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {dict.about.missionHeading}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {dict.about.missionText}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-gold/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {dict.about.visionHeading}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {dict.about.visionText}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-brand-purple font-bold text-sm">
                <Globe className="w-4 h-4 text-brand-gold" />
                <span>{dict.about.europeanMarketHeading}</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                {dict.about.europeanMarketText}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white rounded-3xl p-8 border-2 border-brand-gold/60 shadow-xl space-y-6 text-center max-w-sm w-full">
              <div className="w-48 h-48 mx-auto rounded-full p-2 bg-gradient-to-tr from-brand-purple to-brand-gold shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                  <Image
                    src="/brand/logo-neue-wege.jpg"
                    alt="Neue Wege GmbH Logo"
                    width={180}
                    height={180}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-brand-navy">{contactsData.legal.companyNameAt}</h4>
                <p className="text-xs text-brand-muted mt-1">{contactsData.address.display[typedLocale]}</p>
                <p className="text-xs text-brand-purple font-bold mt-2">
                  «{contactsData.legal.slogan[typedLocale]}»
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border text-left space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{dict.about.cardHqVienna}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{dict.about.cardOfficeUkraine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{dict.about.cardMultilingual}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Directions Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.about.fiveDirectionsBadge}
          title={dict.about.fiveDirectionsHeading}
          subtitle={dict.about.fiveDirectionsSubtitle}
        />

        <div className="space-y-6">
          {activitiesData.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 hover:border-brand-gold transition-colors shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-gold/40 text-brand-purple font-black text-lg flex items-center justify-center shrink-0">
                    0{act.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">
                      {act.title[typedLocale]}
                    </h3>
                    <p className="text-sm text-brand-muted mt-1">
                      {act.shortDescription[typedLocale]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-border/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {act.items[typedLocale].map((it, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-ink/80 bg-brand-surface p-3 rounded-xl border border-brand-border/40">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            {dict.about.ctaHeading}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            {dict.about.ctaText}
          </p>
          <div className="pt-2">
            <Link
              href={`/${typedLocale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
            >
              <span>{dict.common.contactUs}</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
