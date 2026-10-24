import { CheckCircle2, Beef, Wheat, Trees, Factory, Store, LucideIcon } from 'lucide-react';
import { ActivityDirection } from '@/data/activities';
import { Locale } from '@/i18n/config';

interface ActivityCardProps {
  activity: ActivityDirection;
  locale: Locale;
}

const iconMap: Record<string, LucideIcon> = {
  Beef,
  Wheat,
  Trees,
  Factory,
  Store,
};

export function ActivityCard({ activity, locale }: ActivityCardProps) {
  const Icon = iconMap[activity.iconName] || Wheat;

  return (
    <div className="group relative bg-white rounded-2xl border border-brand-border p-6 sm:p-8 hover:border-brand-gold/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top accent badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-xl bg-brand-surface border border-brand-gold/30 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-gold transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
        <span className="text-3xl font-black text-brand-border group-hover:text-brand-gold/40 transition-colors">
          0{activity.number}
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-purple transition-colors">
          {activity.title[locale]}
        </h3>

        <p className="text-sm text-brand-muted leading-relaxed">
          {activity.shortDescription[locale]}
        </p>

        {/* Bullets */}
        <div className="pt-4 border-t border-brand-border/60">
          <ul className="space-y-2">
            {activity.items[locale].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-ink/80">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs font-semibold text-brand-purple group-hover:text-brand-purple-deep">
        <span>ТОВ «НОВА ДОРОГА»</span>
        <span className="w-8 h-0.5 bg-brand-gold group-hover:w-12 transition-all duration-300" />
      </div>
    </div>
  );
}
