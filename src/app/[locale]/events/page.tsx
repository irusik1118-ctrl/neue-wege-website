import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight, Video, FileText, Search, BarChart3, Shield } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { exhibitionData } from '@/data/exhibition';

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const formats = [
    {
      icon: Users,
      title: '1. Професійна презентація вашого господарства',
      desc: 'Наші менеджери детально розкажуть відвідувачам павільйону про вашу діяльність, продукцію, виробничі можливості та конкурентні переваги.',
    },
    {
      icon: FileText,
      title: '2. Розміщення друкованих матеріалів та банерів',
      desc: 'Розповсюдження ваших двомовних каталогів, буклетів, листівок, 400 візиток та вертикального рекламного банера 1 × 2 м.',
    },
    {
      icon: Video,
      title: '3. Демонстрація відеоматеріалів на великому моніторі',
      desc: 'Показ 5-хвилинного ролика кожні 20 хвилин із 08:00 до 20:00 у центрі виставкового простору.',
    },
    {
      icon: Search,
      title: '4. Збір інформації та контактів за вашим запитом',
      desc: 'Цільовий пошук постачальників техніки, насіння, біопрепаратів або європейських покупців вашої продукції.',
    },
    {
      icon: BarChart3,
      title: '5. Зворотний зв’язок та фінальний звіт',
      desc: 'Після виставки ви отримуєте структурований звіт про результати представлення та повний контактний перелік.',
    },
  ];

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-brand-gold/40">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-gold-light bg-white/10 px-3 py-1 rounded-full border border-brand-gold/30">
              {dict.events.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.events.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.events.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. KEY STATS & OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-purple flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs text-brand-muted">{dict.events.dateLabel}</p>
              <p className="text-sm font-bold text-brand-navy">{exhibitionData.dates[typedLocale]}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-purple flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs text-brand-muted">{dict.events.locationLabel}</p>
              <p className="text-sm font-bold text-brand-navy">{exhibitionData.location.display[typedLocale]}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-purple flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs text-brand-muted">{dict.events.visitorsLabel}</p>
              <p className="text-sm font-bold text-brand-navy">Близько 70 000 осіб</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-purple flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs text-brand-muted">{dict.events.areaLabel}</p>
              <p className="text-sm font-bold text-brand-navy">50 000 м² площі</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONCEPT: REPRESENTATION WITHOUT PERSONAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
              Концепція участі
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-snug">
              {dict.events.conceptHeading}
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              {dict.events.conceptText}
            </p>
            <p className="text-xs sm:text-sm text-brand-ink/80 leading-relaxed bg-brand-surface p-5 rounded-2xl border border-brand-border">
              Вам не обов’язково долати великі відстані, нести значні витрати на поїздку, візи та логістику й залишати господарство без особистого контролю. Наша команда бере на себе всі організаційні завдання.
            </p>

            <div className="pt-2">
              <Link
                href={`/${typedLocale}/services`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
              >
                <span>Ознайомитися з пакетами послуг</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white rounded-3xl p-6 border-2 border-brand-gold/60 shadow-xl space-y-4 max-w-sm w-full text-center">
              <div className="w-24 h-24 rounded-full border-2 border-brand-gold mx-auto overflow-hidden p-1 bg-white">
                <Image
                  src="/brand/logo-hoffnung-wurde.jpg"
                  alt="Hoffnung & Würde Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-base font-bold text-brand-navy">
                За підтримки благодійної організації «Надія та Гідність»
              </h4>
              <p className="text-xs text-brand-muted">
                Відень, Австрія • ZVR 1984068166
              </p>
              <p className="text-[11px] text-brand-ink/75 italic bg-brand-surface p-3 rounded-xl border border-brand-border">
                «Спільна мета — зробити український аграрний сектор помітним на європейському ринку та створити нові можливості для міжнародного партнерства.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 5 FORMATS OF PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Формати участі"
          title={dict.events.benefitsHeading}
          subtitle="Комплексна програма просування вашого бізнесу на виставці в Генті."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((fmt, i) => {
            const Icon = fmt.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:border-brand-gold transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-purple flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-base font-bold text-brand-navy leading-snug">
                  {fmt.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            );
          })}

          <div className="bg-brand-purple rounded-2xl p-6 text-white flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-light bg-white/10 px-2.5 py-1 rounded-md">
                Терміни бронювання
              </span>
              <h3 className="text-lg font-bold">
                Кількість місць у павільйоні обмежена
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Рекомендуємо завчасно узгодити формат презентації та надати двомовні матеріали для підготовки стенду.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href={`/${typedLocale}/contact`}
                className="inline-flex items-center justify-center w-full py-2.5 bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-gold-light transition-colors"
              >
                Забронювати участь
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTORS OF THE EXHIBITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-sm space-y-8">
          <SectionHeading
            badge="Галузі виставки"
            title={dict.events.sectorsHeading}
            subtitle="Тематичні напрями, представлені виробниками та експертами з усієї Європи."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exhibitionData.sectors[typedLocale].map((sector, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-brand-surface border border-brand-border/60 text-xs text-brand-ink/90 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-purple to-brand-navy text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Бажаєте заявити про своє підприємство на європейському рівні?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            Зв’яжіться з нашими менеджерами для узгодження індивідуального формату представлення та бронювання рекламного місця.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${typedLocale}/contact`}
              className="px-6 py-3.5 bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-brand-gold-light transition-all"
            >
              Зв’язатися для узгодження участі
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
