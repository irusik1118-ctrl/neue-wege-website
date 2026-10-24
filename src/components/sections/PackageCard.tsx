import Link from 'next/link';
import { Check, Star, ArrowRight } from 'lucide-react';
import { PackageItem } from '@/data/packages';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

interface PackageCardProps {
  pkg: PackageItem;
  locale: Locale;
}

export function PackageCard({ pkg, locale }: PackageCardProps) {
  const isPlatinum = pkg.id === 'platinum';
  const dict = getDictionary(locale);

  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
        isPlatinum
          ? 'bg-gradient-to-b from-brand-purple to-brand-purple-deep text-white border-2 border-brand-gold shadow-2xl scale-[1.02]'
          : 'bg-white text-brand-ink border border-brand-border shadow-lg hover:border-brand-gold'
      }`}
    >
      {/* Popular badge */}
      {isPlatinum && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>{pkg.badge[locale]}</span>
        </div>
      )}

      <div>
        <div className="mb-6">
          {!isPlatinum && (
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border mb-3">
              {pkg.badge[locale]}
            </span>
          )}
          <h3
            className={`text-2xl font-black tracking-tight ${
              isPlatinum ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {pkg.name[locale]}
          </h3>
          <p
            className={`text-xs mt-2 leading-relaxed ${
              isPlatinum ? 'text-white/80' : 'text-brand-muted'
            }`}
          >
            {pkg.subtitle[locale]}
          </p>
        </div>

        {/* Price block */}
        <div
          className={`p-5 rounded-2xl mb-8 ${
            isPlatinum ? 'bg-white/10 border border-brand-gold/30' : 'bg-brand-surface border border-brand-border'
          }`}
        >
          <div className="flex items-baseline gap-2">
            <span
              className={`text-3xl font-black ${
                isPlatinum ? 'text-brand-gold-light' : 'text-brand-purple'
              }`}
            >
              {pkg.priceDisplay[locale]}
            </span>
          </div>

          <p
            className={`text-xs mt-2 leading-relaxed ${
              isPlatinum ? 'text-white/75' : 'text-brand-muted'
            }`}
          >
            {pkg.priceNote[locale]}
          </p>
        </div>

        {/* Features list */}
        <div className="space-y-3 mb-8">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              isPlatinum ? 'text-brand-gold-light' : 'text-brand-purple'
            }`}
          >
            {dict.cards.packageIncluded}
          </p>
          <ul className="space-y-2.5">
            {pkg.features[locale].map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isPlatinum ? 'text-brand-gold-light' : 'text-brand-purple'
                  }`}
                />
                <span className={isPlatinum ? 'text-white/90' : 'text-brand-ink/80'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <Link
          href={`/${locale}/contact?package=${pkg.id}`}
          className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md ${
            isPlatinum
              ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy hover:shadow-brand-gold/20 hover:scale-[1.01]'
              : 'bg-brand-purple text-white hover:bg-brand-purple-deep'
          }`}
        >
          <span>{pkg.ctaText[locale]}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
