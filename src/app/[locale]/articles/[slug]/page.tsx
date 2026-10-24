import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Phone } from 'lucide-react';
import { Locale, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { articlesData } from '@/data/articles';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    articlesData.forEach((article) => {
      params.push({ locale, slug: article.slug });
    });
  });
  return params;
}

export default async function SingleArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const article = articlesData.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href={`/${typedLocale}/articles`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-purple hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{dict.common.backToArticles}</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-brand-border pb-8">
        <div className="flex items-center gap-3 text-xs text-brand-muted">
          <span className="font-semibold text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
            {article.category[typedLocale]}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-gold" />
            <span>{article.date}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy leading-tight">
          {article.title[typedLocale]}
        </h1>

        <p className="text-base text-brand-muted italic leading-relaxed">
          {article.excerpt[typedLocale]}
        </p>
      </header>

      {/* Content */}
      <div className="prose max-w-none text-sm sm:text-base leading-relaxed text-brand-ink/90 space-y-6">
        {article.content[typedLocale].map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Help Callout */}
      <div className="bg-brand-surface rounded-2xl border border-brand-gold/60 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-brand-navy">
          {dict.articles.consultationTitle}
        </h3>
        <p className="text-xs text-brand-muted leading-relaxed">
          {dict.articles.consultationDesc}
        </p>
        <div className="pt-2">
          <Link
            href={`/${typedLocale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>{dict.articles.contactConsultantBtn}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
