interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border ${
            dark
              ? 'bg-white/10 text-brand-gold-light border-brand-gold/30'
              : 'bg-brand-surface text-brand-purple border-brand-gold/40'
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-white/75' : 'text-brand-muted'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative accent divider */}
      <div
        className={`mt-4 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-12 h-0.5 bg-brand-gold" />
        <span className="w-2 h-2 rounded-full bg-brand-purple" />
        <span className="w-12 h-0.5 bg-brand-gold" />
      </div>
    </div>
  );
}
