import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  ShieldCheck,
  Sparkles,
  Building2,
  CheckCircle2,
  MessageCircle,
  HelpCircle,
  Award,
} from "lucide-react";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActivityCard } from "@/components/sections/ActivityCard";
import { PackageCard } from "@/components/sections/PackageCard";
import { BusinessCardModal } from "@/components/sections/BusinessCardModal";
import { ContactButton } from "@/components/ui/ContactButton";
import { activitiesData } from "@/data/activities";
import { packagesData, packageDifference } from "@/data/packages";
import { exhibitionData } from "@/data/exhibition";
import { partnersData } from "@/data/partners";
import { articlesData } from "@/data/articles";
import { contactsData } from "@/data/contacts";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const specialistContent = {
    badge: {
      de: "KUNDENBETREUUNG & DIALOG",
      ua: "СУПРОВІД КЛІЄНТІВ ТА СПІВПРАЦЯ",
      en: "CLIENT RELATIONS & SUPPORT",
    },
    title: {
      de: "Persönliche Begleitung für Ihren Unternehmenserfolg in Europa",
      ua: "Персональний супровід вашого агробізнесу на ринку Європи",
      en: "Personal Guidance for Your Enterprise Success in Europe",
    },
    subtitle: {
      de: "Ihr direkter Ansprechpartner bei Fragen zur Messeteilnahme und Partnersuche",
      ua: "Прямий діалог, увага до кожної деталі та професійний супровід",
      en: "Direct dialogue, meticulous attention to detail, and professional representation",
    },
    desc: {
      de: "Bei «NEUE WEGE» erhalten Sie eine persönliche Betreuung durch unser engagiertes Team. Wir unterstützen Sie bei der Vorbereitung Ihrer Präsentationsmaterialien, stimmen die gewünschten Leistungen präzise auf Ihr Budget ab und vertreten Ihre Interessen vor europäischen Fachbesuchern und potenziellen Abnehmern.",
      ua: "Звертаючись до компанії «НОВА ДОРОГА», ви взаємодієте безпосередньо з нашою командою супроводу. Ми допомагаємо підготувати презентаційні матеріали, координуємо представлення на міжнародній виставці в Генті та забезпечуємо системний зв’язок із потенційними європейськими партнерами. Ми представляємо ваші інтереси в Європі — вам не обов'язково залишати господарство.",
      en: "Partnering with “NEUE WEGE” connects you directly with our dedicated client relations team. We assist in preparing your marketing materials, fine-tune your exhibition presence to your budget, and represent your farm’s interests before European trade buyers and suppliers without requiring your travel.",
    },
    points: {
      de: [
        "Mehrsprachige Kommunikation (Ukrainisch, Deutsch, Englisch)",
        "Detaillierte Abstimmung des individuellen Leistungsumfangs",
        "Regelmäßige Berichterstattung über Kontakte und Anfragen",
      ],
      ua: [
        "Багатомовна комунікація (українська, німецька, англійська)",
        "Індивідуальне узгодження обсягу та пріоритетів послуг",
        "Звітність за підсумками проведених переговорів і контактів",
      ],
      en: [
        "Multilingual communication (Ukrainian, German, English)",
        "Custom tailoring of service package and promotional priorities",
        "Comprehensive reporting on contacts and prospective partners",
      ],
    },
  };

  const aboutSnippet = {
    badge: {
      de: "ÜBER DAS UNTERNEHMEN",
      ua: "ПРО КОМПАНІЮ",
      en: "ABOUT THE ENTERPRISE",
    },
    title: {
      de: "Brücke zwischen ukrainischer Landwirtschaft und europäischen Märkten",
      ua: "Міст між українським агросектором та європейським ринком",
      en: "Bridge Connecting Ukrainian Agribusiness with European Markets",
    },
    text: {
      de: "«NEUE WEGE» (ТОВ «НОВА ДОРОГА») verbindet traditionelle landwirtschaftliche Stärken mit europäischen Vertriebs- und Kooperationswegen. Wir ermöglichen es ukrainischen Produzenten, ihre Erzeugnisse professionell vorzustellen, neue Kontakte zu knüpfen und verlässliche Absatzkanäle zu erschließen.",
      ua: "Компанія «НОВА ДОРОГА» (Neue Wege GmbH, Відень) створена для того, щоб відкрити для українських аграріїв прямий доступ до європейського бізнес-середовища. Ми беремо на себе організацію виставкової присутності, рекламу, поширення матеріалів та налагодження зв'язків із європейськими постачальниками й покупцями.",
      en: "“NEUE WEGE” (LLC “NOVA DOROHA”, Vienna) empowers Ukrainian agricultural producers with direct access to European commercial ecosystems, handling pavilion representation, brand distribution, and partnership building with international buyers.",
    },
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 overflow-x-hidden">
      {/* ============================================================ */}
      {/* 2. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28 border-b border-brand-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(#54218A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/60 shadow-2xs text-xs font-black text-brand-purple">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>{dict.home.heroBadge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-[1.15]">
                {dict.home.heroTitle}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {dict.home.heroSubtitle}
              </p>

              {/* Action buttons: Prominent Contact Button */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <ContactButton locale={typedLocale} size="md" variant="primary" />

                <Link
                  href={`/${typedLocale}/services`}
                  className="px-5 py-3.5 bg-white hover:bg-brand-surface text-brand-navy font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl border-2 border-brand-gold shadow-xs hover:border-brand-purple transition-all duration-200 flex items-center gap-2"
                >
                  <span>{dict.home.ctaServices}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-3 sm:gap-4 text-center lg:text-left">
                <div className="p-2 sm:p-0">
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">5</p>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-tight font-medium">
                    {dict.home.statAgriDirections}
                  </p>
                </div>
                <div className="p-2 sm:p-0">
                  <p className="text-xl sm:text-2xl font-black text-brand-gold">14–17.01</p>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-tight font-medium">
                    {dict.home.statExhibitionDate}
                  </p>
                </div>
                <div className="p-2 sm:p-0">
                  <p className="text-xl sm:text-2xl font-black text-brand-navy">100%</p>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-tight font-medium">
                    {dict.home.statNoTravel}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-3xl border border-brand-gold/60 bg-white shadow-lg">
                <Image
                  src="/brand/hero-presentation.jpg"
                  alt="Neue Wege GmbH – Ihr Partner von der Gründung bis zum erfolgreichen Business"
                  width={1024}
                  height={682}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="flex items-center justify-between gap-3 border-t-2 border-brand-gold bg-brand-navy px-4 py-3 text-xs">
                  <span className="font-bold text-white">
                    {contactsData.legal.companyNameAt}
                  </span>
                  <span className="font-semibold text-brand-gold-light text-right">
                    {typedLocale === "ua" ? contactsData.legal.companyNameUa : contactsData.address.display[typedLocale]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SHORT "ABOUT US" BLOCK                                    */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-surface via-white to-brand-surface border-2 border-brand-gold/50 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block text-xs font-black uppercase tracking-wider text-brand-purple bg-white px-3 py-1 rounded-full border border-brand-border shadow-2xs">
              {aboutSnippet.badge[typedLocale]}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-brand-navy leading-snug">
              {aboutSnippet.title[typedLocale]}
            </h2>
            <p className="text-xs sm:text-base text-brand-ink/80 leading-relaxed font-normal">
              {aboutSnippet.text[typedLocale]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-border/70 text-xs font-semibold text-brand-navy">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{typedLocale === "ua" ? "Офіційна реєстрація у Відні" : "Offiziell registriert in Wien"}</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{typedLocale === "ua" ? "Партнерське підприємство в Україні" : "Partnerunternehmen in der Ukraine"}</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{typedLocale === "ua" ? "Без особистої поїздки до Бельгії" : "Keine Reise nach Belgien nötig"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXHIBITIONS & EVENTS BLOCK (Agri Flanders Ghent 2027)      */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy text-white p-6 sm:p-10 lg:p-14 border-2 border-brand-gold/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>{dict.home.exhibitionBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                {dict.home.exhibitionHeading}
              </h2>

              <p className="text-xs sm:text-base text-white/85 leading-relaxed max-w-2xl font-normal">
                {dict.home.exhibitionSubheading} {dict.home.exhibitionSupporterText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{exhibitionData.location.display[typedLocale]}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Users className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{dict.home.exhibitionStats}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/${typedLocale}/events`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200"
                >
                  <span>{dict.home.exhibitionCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/${typedLocale}/services`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all duration-200"
                >
                  <span>{typedLocale === "ua" ? "Переглянути прайс-лист" : "Preisliste ansehen"}</span>
                </Link>
              </div>
            </div>

            {/* Right: Official Exhibitor Banner (from user attachments) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-3">
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-brand-gold shadow-2xl bg-white group">
                <div className="relative aspect-[1024/682] w-full">
                  <Image
                    src="/brand/exhibition-banner.jpg"
                    alt="Agri Flanders Ghent 2027 Official Exhibitor - Neue Wege GmbH"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
              </div>
              <div className="text-center pt-1">
                <p className="text-[11px] font-bold text-brand-gold-light uppercase tracking-wider">
                  {dict.home.supportedByTitle}
                </p>
                <p className="text-xs font-black text-white">
                  {dict.home.supportedByOrg}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. "OUR SERVICES" & PACKAGES OVERVIEW                         */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.home.packagesBadge}
          title={dict.home.servicesHeading}
          subtitle={dict.home.servicesSubheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} locale={typedLocale} />
          ))}
        </div>

        {/* Difference callout note */}
        <div className="max-w-5xl mx-auto mt-6 p-4 sm:p-5 rounded-2xl bg-brand-surface border border-brand-border text-center">
          <p className="text-xs sm:text-sm text-brand-ink/90 font-semibold leading-relaxed">
            <span className="text-brand-purple font-bold">★ </span>
            {packageDifference[typedLocale]}
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/${typedLocale}/services`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-surface hover:bg-white text-brand-purple font-black text-xs uppercase tracking-wider rounded-xl border border-brand-border hover:border-brand-gold shadow-2xs transition-all"
          >
            <span>{dict.home.viewAllServicesLink}</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SPECIALIST BLOCK (Photos 004, 005, 006 / Client Manager)   */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-white border-2 border-brand-gold/60 p-6 sm:p-10 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Specialist Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-brand-gold shadow-2xl bg-white p-2">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-surface">
                  <Image
                    src="/brand/consultant-navy.jpg"
                    alt="Neue Wege Client Support Specialist"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs text-brand-navy border border-brand-gold/40 shadow-sm">
                    <p className="text-xs font-black leading-tight text-brand-purple">
                      {typedLocale === "ua" ? "Клієнтський супровід" : typedLocale === "de" ? "Kundenbetreuung" : "Client Management"}
                    </p>
                    <p className="text-[11px] text-brand-muted font-medium mt-0.5">
                      {typedLocale === "ua" ? "Пряма взаємодія та супровід українських виробників" : "Direkter Austausch & Betreuung"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialist Narrative & Action */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple text-white text-xs font-black uppercase tracking-wider shadow-xs">
                <Award className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>{specialistContent.badge[typedLocale]}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight leading-snug">
                {specialistContent.title[typedLocale]}
              </h2>

              <p className="text-xs sm:text-sm font-bold text-brand-purple">
                {specialistContent.subtitle[typedLocale]}
              </p>

              <p className="text-xs sm:text-base text-brand-ink/85 leading-relaxed font-normal">
                {specialistContent.desc[typedLocale]}
              </p>

              {/* Quality Checklist */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-ink font-semibold text-left max-w-xl mx-auto lg:mx-0">
                {specialistContent.points[typedLocale].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Prominent Contact Us Button */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <ContactButton locale={typedLocale} size="lg" variant="primary" />

                <a
                  href={`mailto:${contactsData.email}`}
                  className="px-5 py-4 bg-white hover:bg-brand-surface text-brand-purple font-bold text-xs uppercase tracking-wider rounded-xl border border-brand-border hover:border-brand-gold transition-colors"
                >
                  {contactsData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PARTNERS BLOCK                                            */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.home.partnersBadge}
          title={dict.home.partnersHeading}
          subtitle={dict.home.partnersSubheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:border-brand-gold hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {partner.logoUrl ? (
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 p-0.5 bg-white mb-2 overflow-hidden">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name[typedLocale]}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-purple font-black text-sm mb-2">
                    B2B
                  </div>
                )}
                <span className="text-[11px] font-semibold text-brand-purple bg-brand-surface px-2.5 py-0.5 rounded-full border border-brand-border">
                  {partner.type[typedLocale]}
                </span>
                <h3 className="text-base font-bold text-brand-navy leading-snug">
                  {partner.name[typedLocale]}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {partner.description[typedLocale]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/60 text-[11px] font-medium text-brand-muted flex items-center justify-between">
                <span>{partner.location[typedLocale]}</span>
                {partner.regNumber && (
                  <span className="text-brand-purple font-semibold">
                    {partner.regNumber}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. ARTICLES BLOCK                                            */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
              {dict.home.articlesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">
              {dict.home.articlesHeading}
            </h2>
          </div>
          <Link
            href={`/${typedLocale}/articles`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:underline uppercase tracking-wider"
          >
            <span>{dict.common.allPublications}</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="font-semibold text-brand-purple bg-brand-surface px-2 py-0.5 rounded-md">
                    {article.category[typedLocale]}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-base font-bold text-brand-navy leading-snug hover:text-brand-purple transition-colors">
                  <Link href={`/${typedLocale}/articles/${article.slug}`}>
                    {article.title[typedLocale]}
                  </Link>
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {article.excerpt[typedLocale]}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-brand-border/40">
                <Link
                  href={`/${typedLocale}/articles/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-purple-deep"
                >
                  <span>{dict.common.readArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CONTACT BLOCK WITH BUSINESS CARD 001 AND EMAIL            */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy text-white p-6 sm:p-10 lg:p-12 border-2 border-brand-gold/60 shadow-2xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-black uppercase tracking-wider text-brand-gold bg-white/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
              {typedLocale === "ua" ? "КОНТАКТИ ТА ВІЗИТКА" : "KONTAKT & VISITENKARTE"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {typedLocale === "ua"
                ? "Зв'яжіться з представником «НОВА ДОРОГА»"
                : "Nehmen Sie Kontakt mit «NEUE WEGE» auf"}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {typedLocale === "ua"
                ? "Задайте питання, узгодьте умови участі та отримайте консультацію щодо представлення на виставці в Генті"
                : "Stellen Sie Ihre Fragen und erhalten Sie ein maßgeschneidertes Angebot"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <BusinessCardModal locale={typedLocale} />
          </div>

          <div className="pt-4 text-center">
            <ContactButton locale={typedLocale} size="lg" variant="gold" />
          </div>
        </div>
      </section>
    </div>
  );
}
