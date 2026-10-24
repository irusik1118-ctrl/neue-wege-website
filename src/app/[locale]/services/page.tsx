import Link from 'next/link';
import { ArrowRight, Check, Info } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { PackageCard } from '@/components/sections/PackageCard';
import { servicesData } from '@/data/services';
import { packagesData, packageTerms } from '@/data/packages';

export default async function ServicesPage({
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
              {dict.services.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.services.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PACKAGES FIRST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.services.packagesBadge}
          title={dict.services.packagesHeading}
          subtitle={dict.services.packagesSubheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} locale={typedLocale} />
          ))}
        </div>
      </section>

      {/* 3. INDIVIDUAL SERVICE PRICE LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.services.singleServicesBadge}
          title={dict.services.singleServicesHeading}
          subtitle={dict.services.singleServicesSubheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={typedLocale}
              ctaLabel={dict.common.requestOffer}
            />
          ))}
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
              {dict.services.tableBadge}
            </span>
            <h3 className="text-2xl font-bold text-brand-navy mt-2">
              {dict.services.tableHeading}
            </h3>
            <p className="text-xs text-brand-muted mt-1">
              {dict.services.tableSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-navy bg-brand-surface text-brand-navy font-black uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-4">{dict.services.thService}</th>
                  <th className="py-4 px-4">{dict.services.thStandardPrice}</th>
                  <th className="py-4 px-4 text-brand-purple">{dict.services.thEconomyExtra}</th>
                  <th className="py-4 px-4">{dict.services.thIncludedInPlatinum}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/60">
                {servicesData.filter((s) => s.priceEur !== null).map((s) => (
                  <tr key={s.id} className="hover:bg-brand-surface/60 transition-colors">
                    <td className="py-3 px-4 font-semibold text-brand-ink">
                      {s.title[typedLocale]}
                    </td>
                    <td className="py-3 px-4 font-bold text-brand-navy">
                      {s.priceEur} €
                    </td>
                    <td className="py-3 px-4 font-bold text-brand-purple">
                      {s.surchargePriceEur} €
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{dict.services.yes}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. TERMS & CONDITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-surface border border-brand-gold/60 p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple text-brand-gold flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy">
                {dict.services.termsHeading}
              </h3>
              <p className="text-xs text-brand-muted">
                {dict.services.termsSubtitle}
              </p>
            </div>
          </div>

          <ul className="space-y-3 pt-2">
            {packageTerms[typedLocale].map((term, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-brand-ink/90 leading-relaxed bg-white p-4 rounded-xl border border-brand-border">
                <span className="w-5 h-5 rounded-full bg-brand-purple/10 text-brand-purple font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                  {i + 1}
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border/60">
            <p className="text-xs text-brand-muted">
              {dict.services.questionPrompt}
            </p>
            <Link
              href={`/${typedLocale}/contact`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
            >
              <span>{dict.common.contactUs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
