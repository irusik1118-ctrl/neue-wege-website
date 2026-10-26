import { Locale } from '@/i18n/config';
import { servicesData, priceTableSummary } from '@/data/services';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface PricingTableProps {
  locale: Locale;
}

export function PricingTable({ locale }: PricingTableProps) {
  const headers = {
    serviceName: {
      de: 'Bezeichnung der Leistung',
      ua: 'Назва послуги',
      en: 'Service Name',
    },
    quantity: {
      de: 'Menge / Umfang',
      ua: 'Кількість / обсяг',
      en: 'Quantity / Volume',
    },
    businessPkg: {
      de: 'Business-Paket',
      ua: 'Бізнес-пакет',
      en: 'Business Package',
    },
    economyPkg: {
      de: 'Еconomy-Paket (+30%)',
      ua: 'Економ-пакет (+30%)',
      en: 'Economy Package (+30%)',
    },
  };

  const noteText = {
    de: 'Preise des Economy-Pakets in der Tabelle verstehen sich mit einem Aufschlag von 30% gegenüber den Standardpreisen. Die tatsächlichen Kosten richten sich nach den gewählten Leistungen.',
    ua: 'Ціни Економ-пакета в таблиці наведені з націнкою 30% до стандартних цін. Фактична вартість залежить від обраних послуг.',
    en: 'Economy package prices in the table include a 30% surcharge on standard rates. Actual cost depends on selected services.',
  };

  const formatPrice = (val: number) => {
    if (locale === 'ua') {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    if (locale === 'de') {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return val.toLocaleString('en-US');
  };

  return (
    <div className="w-full space-y-6">
      {/* Table explanation note */}
      <div className="p-4 rounded-2xl bg-brand-surface border border-brand-gold/40 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-brand-ink/90 leading-relaxed font-medium">
          {noteText[locale]}
        </p>
      </div>

      {/* 1. Desktop & Tablet Table (Hidden on small mobile screens to prevent overflow) */}
      <div className="hidden md:block overflow-hidden rounded-2xl border-2 border-brand-purple/20 shadow-xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-purple text-white">
              <th className="py-4 px-6 text-xs font-black uppercase tracking-wider border-r border-white/10">
                {headers.serviceName[locale]}
              </th>
              <th className="py-4 px-5 text-xs font-black uppercase tracking-wider text-center border-r border-white/10 whitespace-nowrap">
                {headers.quantity[locale]}
              </th>
              <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-right border-r border-white/10 bg-brand-purple-deep text-brand-gold-light whitespace-nowrap">
                {headers.businessPkg[locale]}
              </th>
              <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-right whitespace-nowrap">
                {headers.economyPkg[locale]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
            {servicesData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-white hover:bg-brand-surface/60 transition-colors' : 'bg-brand-surface/40 hover:bg-brand-surface transition-colors'}
              >
                <td className="py-3.5 px-6 font-bold text-brand-navy border-r border-brand-border/60">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-purple/10 text-brand-purple text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="leading-snug">{item.title[locale]}</span>
                  </div>
                </td>
                <td className="py-3.5 px-5 text-center text-brand-muted font-medium border-r border-brand-border/60 whitespace-nowrap">
                  {item.unit[locale]}
                </td>
                <td className="py-3.5 px-6 text-right font-black text-brand-purple text-base border-r border-brand-border/60 bg-brand-gold/5 whitespace-nowrap">
                  {formatPrice(item.priceEur)} €
                </td>
                <td className="py-3.5 px-6 text-right font-black text-brand-navy text-base whitespace-nowrap">
                  {formatPrice(item.surchargePriceEur)} €
                </td>
              </tr>
            ))}

            {/* Total Row */}
            <tr className="bg-gradient-to-r from-brand-purple via-brand-purple-deep to-brand-navy text-white font-black border-t-2 border-brand-gold">
              <td className="py-5 px-6 text-sm sm:text-base border-r border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>{priceTableSummary.totalTitle[locale]}</span>
                </div>
              </td>
              <td className="py-5 px-5 text-center text-xs sm:text-sm text-brand-gold-light border-r border-white/10 whitespace-nowrap">
                {priceTableSummary.totalUnit[locale]}
              </td>
              <td className="py-5 px-6 text-right text-lg sm:text-xl text-brand-gold-light border-r border-white/10 whitespace-nowrap bg-black/20">
                {formatPrice(priceTableSummary.businessTotalEur)} €
              </td>
              <td className="py-5 px-6 text-right text-lg sm:text-xl text-white whitespace-nowrap">
                {formatPrice(priceTableSummary.economyTotalEur)} €
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. Mobile Responsive Cards (Specifically built for mobile widths 320px–767px) */}
      <div className="md:hidden space-y-4">
        {servicesData.map((item, index) => (
          <div
            key={item.id}
            className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm space-y-3"
          >
            <div className="flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                {index + 1}
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-brand-navy text-sm leading-snug">
                  {item.title[locale]}
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  <span className="font-semibold text-brand-navy">{headers.quantity[locale]}:</span> {item.unit[locale]}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-border/60">
              <div className="bg-brand-surface rounded-xl p-2.5 border border-brand-gold/40 text-center">
                <p className="text-[10px] font-bold uppercase text-brand-muted">
                  {headers.businessPkg[locale]}
                </p>
                <p className="text-base font-black text-brand-purple mt-0.5">
                  {item.priceEur} €
                </p>
              </div>

              <div className="bg-brand-surface rounded-xl p-2.5 border border-brand-border text-center">
                <p className="text-[10px] font-bold uppercase text-brand-muted">
                  {headers.economyPkg[locale]}
                </p>
                <p className="text-base font-black text-brand-navy mt-0.5">
                  {item.surchargePriceEur} €
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Total Card */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white p-5 border-2 border-brand-gold shadow-xl space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
            <h4 className="font-black text-base text-white">
              {priceTableSummary.totalTitle[locale]}
            </h4>
          </div>
          <p className="text-xs text-brand-gold-light">
            {priceTableSummary.totalUnit[locale]}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20">
            <div className="bg-white/10 rounded-xl p-3 border border-brand-gold/40 text-center">
              <p className="text-[10px] font-bold uppercase text-brand-gold-light">
                {headers.businessPkg[locale]}
              </p>
              <p className="text-lg font-black text-white mt-0.5">
                {formatPrice(priceTableSummary.businessTotalEur)} €
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-3 border border-white/20 text-center">
              <p className="text-[10px] font-bold uppercase text-white/80">
                {headers.economyPkg[locale]}
              </p>
              <p className="text-lg font-black text-brand-gold-light mt-0.5">
                {formatPrice(priceTableSummary.economyTotalEur)} €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
