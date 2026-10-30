import { locales, Locale, defaultLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

import { contactsData } from '@/data/contacts';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const dict = getDictionary(typedLocale);

  return {
    title: `${contactsData.legal.companyNameAt} | ${dict.home.heroTitle}`,
    description: dict.home.heroSubtitle,
    alternates: {
      canonical: `/${typedLocale}`,
      languages: {
        de: '/de',
        ua: '/ua',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={typedLocale} dict={dict} />
      <main className="flex-1">{children}</main>
      {/* Brand ribbon: purple/gold wave artwork from the corporate letterhead */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10" aria-hidden="true">
        <div className="relative h-14 sm:h-20 overflow-hidden rounded-2xl border border-brand-gold/50">
          <Image
            src="/brand/wave-bottom.webp"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <Footer locale={typedLocale} dict={dict} />
    </div>
  );
}
