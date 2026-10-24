import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { articlesData } from '@/data/articles';

export default async function ArticlesPage({
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
              {dict.articles.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.articles.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.articles.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden hover:border-brand-gold hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <span className="font-semibold text-brand-purple bg-brand-surface px-2.5 py-1 rounded-full border border-brand-border">
                    {article.category[typedLocale]}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-brand-navy leading-snug hover:text-brand-purple transition-colors">
                  <Link href={`/${typedLocale}/articles/${article.slug}`}>
                    {article.title[typedLocale]}
                  </Link>
                </h2>

                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {article.excerpt[typedLocale]}
                </p>
              </div>

              <div className="p-7 pt-4 border-t border-brand-border/40">
                <Link
                  href={`/${typedLocale}/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-purple-deep group"
                >
                  <span>{dict.articles.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
