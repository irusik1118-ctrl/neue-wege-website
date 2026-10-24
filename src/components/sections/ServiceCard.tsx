import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

interface ServiceCardProps {
  service: ServiceItem;
  locale: Locale;
  ctaLabel: string;
}

export function ServiceCard({ service, locale, ctaLabel }: ServiceCardProps) {
  const dict = getDictionary(locale);

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="inline-block text-[11px] font-semibold text-brand-purple bg-brand-surface px-2.5 py-1 rounded-md border border-brand-border mb-2">
              {service.unit[locale]}
            </span>
            <h3 className="text-lg font-bold text-brand-navy leading-snug">
              {service.title[locale]}
            </h3>
          </div>

          <div className="text-right shrink-0">
            {service.priceEur ? (
              <div>
                <span className="text-2xl font-black text-brand-purple">
                  {service.priceEur} €
                </span>
                {service.surchargePriceEur && (
                  <p className="text-[10px] text-brand-muted mt-0.5">
                    {dict.cards.surchargeEconomy} <span className="font-semibold">{service.surchargePriceEur} €</span>
                  </p>
                )}
              </div>
            ) : (
              <span className="text-sm font-bold text-brand-gold bg-brand-surface px-2.5 py-1 rounded-md border border-brand-gold/40">
                {dict.common.customAgreement}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-brand-muted leading-relaxed mb-5">
          {service.description[locale]}
        </p>

        <ul className="space-y-2 mb-6 border-t border-brand-border/60 pt-4">
          {service.specs[locale].map((spec, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-brand-ink/80">
              <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-brand-border/40">
        <Link
          href={`/${locale}/contact?service=${service.id}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-brand-surface hover:bg-brand-purple hover:text-white text-brand-ink text-xs font-semibold rounded-xl border border-brand-border transition-colors duration-200 group"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
