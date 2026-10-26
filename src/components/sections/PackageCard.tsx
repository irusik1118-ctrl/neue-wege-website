import Link from 'next/link';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PackageItem } from '@/data/packages';
import { Locale } from '@/i18n/config';

interface PackageCardProps {
  pkg: PackageItem;
  locale: Locale;
}

export function PackageCard({ pkg, locale }: PackageCardProps) {
  const isBusiness = pkg.id === 'business';

  const labels = {
    servicesIncluded: {
      de: isBusiness ? 'Im Business-Paket enthalten:' : 'Bedingungen & Vorteile:',
      ua: isBusiness ? 'До пакета входить:' : 'Умови та переваги:',
      en: isBusiness ? 'Package includes:' : 'Terms & highlights:',
    },
  };

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
        isBusiness
          ? 'bg-gradient-to-b from-brand-purple via-brand-purple to-brand-purple-deep text-white border-2 border-brand-gold shadow-2xl scale-[1.01] hover:scale-[1.02]'
          : 'bg-white text-brand-ink border-2 border-brand-border hover:border-brand-gold shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Top Badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
            isBusiness
              ? 'bg-brand-gold text-brand-navy shadow-sm'
              : 'bg-brand-surface text-brand-purple border border-brand-border'
          }`}
        >
          {isBusiness ? <Star className="w-3.5 h-3.5 fill-current" /> : <Sparkles className="w-3.5 h-3.5 text-brand-gold" />}
          <span>{pkg.badge[locale]}</span>
        </span>
      </div>

      <div>
        <div className="mb-6">
          <h3
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isBusiness ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {pkg.name[locale]}
          </h3>
          <p
            className={`text-xs sm:text-sm mt-2 leading-relaxed font-medium ${
              isBusiness ? 'text-white/85' : 'text-brand-muted'
            }`}
          >
            {pkg.subtitle[locale]}
          </p>
        </div>

        {/* Highlighted Price Box */}
        <div
          className={`p-5 rounded-2xl mb-7 transition-colors ${
            isBusiness
              ? 'bg-black/25 border border-brand-gold/40'
              : 'bg-brand-surface border border-brand-border'
          }`}
        >
          <div className="flex items-baseline gap-2">
            <span
              className={`text-3xl sm:text-4xl font-black ${
                isBusiness ? 'text-brand-gold-light' : 'text-brand-purple'
              }`}
            >
              {pkg.priceDisplay[locale]}
            </span>
          </div>

          <p
            className={`text-xs mt-2.5 leading-relaxed font-medium ${
              isBusiness ? 'text-white/80' : 'text-brand-ink/80'
            }`}
          >
            {pkg.priceNote[locale]}
          </p>
        </div>

        {/* Included Services / Features */}
        <div className="space-y-3.5 mb-8">
          <p
            className={`text-xs font-black uppercase tracking-wider ${
              isBusiness ? 'text-brand-gold-light' : 'text-brand-purple'
            }`}
          >
            {labels.servicesIncluded[locale]}
          </p>
          <ul className="space-y-3">
            {pkg.features[locale].map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isBusiness ? 'text-brand-gold' : 'text-brand-purple'
                  }`}
                />
                <span
                  className={`leading-snug ${
                    isBusiness ? 'text-white/95' : 'text-brand-ink/90'
                  }`}
                >
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className={`pt-6 border-t ${isBusiness ? 'border-white/15' : 'border-brand-border'}`}>
        <Link
          href={`/${locale}/contact?package=${pkg.id}`}
          className={`inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-md ${
            isBusiness
              ? 'bg-brand-gold hover:bg-brand-gold-light text-brand-navy hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-brand-purple hover:bg-brand-purple-deep text-white hover:shadow-lg hover:-translate-y-0.5'
          }`}
        >
          <span>{pkg.ctaText[locale]}</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
