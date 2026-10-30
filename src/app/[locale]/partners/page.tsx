import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partnersData } from '@/data/partners';

export default async function PartnersPage({
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
              {dict.partners.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.partners.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.partners.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. LEAD OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {dict.partners.leadText}
          </p>
          <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* 3. DETAILED PARTNER PROFILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl border border-brand-border p-8 sm:p-10 shadow-sm hover:border-brand-gold transition-colors flex flex-col lg:flex-row items-center gap-8 justify-between"
            >
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                    {partner.type[typedLocale]}
                  </span>
                  <span className="text-xs text-brand-muted">•</span>
                  <span className="text-xs text-brand-muted font-medium">{partner.location[typedLocale]}</span>
                  {partner.regNumber && (
                    <>
                      <span className="text-xs text-brand-muted">•</span>
                      <span className="text-xs font-semibold text-brand-purple">{partner.regNumber}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-brand-navy">
                  {partner.name[typedLocale]}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {partner.description[typedLocale]}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>{dict.partners.officialCoordination}</span>
                </div>
              </div>

              {partner.logoUrl && (
                <div className="w-44 sm:w-52 rounded-2xl border-2 border-brand-gold p-1.5 bg-white shrink-0 shadow-md overflow-hidden">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name[typedLocale]}
                    width={512}
                    height={1024}
                    sizes="(max-width: 640px) 176px, 208px"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. BECOME A PARTNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-3xl border border-brand-gold/60 p-8 sm:p-14 text-center space-y-6">
          <SectionHeading
            badge={dict.partners.becomePartnerBadge}
            title={dict.partners.becomePartnerHeading}
            subtitle={dict.partners.becomePartnerText}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left pt-2 pb-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-2">
              <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              <h4 className="text-sm font-bold text-brand-navy">{dict.partners.targetFarmsTitle}</h4>
              <p className="text-xs text-brand-muted">
                {dict.partners.targetFarmsDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-2">
              <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              <h4 className="text-sm font-bold text-brand-navy">{dict.partners.targetImportersTitle}</h4>
              <p className="text-xs text-brand-muted">
                {dict.partners.targetImportersDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-2">
              <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              <h4 className="text-sm font-bold text-brand-navy">{dict.partners.targetMakersTitle}</h4>
              <p className="text-xs text-brand-muted">
                {dict.partners.targetMakersDesc}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/${typedLocale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors"
            >
              <span>{dict.partners.partnerCta}</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
