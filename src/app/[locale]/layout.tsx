import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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
  const typedLocale = (locales.includes(locale as Locale) ? locale : 'de') as Locale;
  const dict = getDictionary(typedLocale);

  return {
    title: `${contactsData.legal.companyNameAt} | ${dict.home.heroTitle}`,
    description: dict.home.heroSubtitle,
    alternates: {
      canonical: `/${typedLocale}`,
      languages: {
        de: '/de',
        uk: '/uk',
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

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={typedLocale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} dict={dict} />
    </div>
  );
}
