import Image from 'next/image';
import { Phone, MapPin, MessageSquare, ShieldCheck, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/sections/ContactForm';
import { contactsData } from '@/data/contacts';

export default async function ContactPage({
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
              {dict.contact.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.contact.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {dict.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ukraine Contact */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 shadow-xs hover:border-brand-gold transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-2.5 py-1 rounded-full border border-brand-border">
                Представництво в Україні
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                {contactsData.persons[0].name[typedLocale]}
              </h3>
              <p className="text-xs text-brand-muted">
                Консультації щодо участі господарств, підготовки матеріалів та співпраці.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60">
              <a
                href={`tel:${contactsData.persons[0].phone}`}
                className="inline-flex items-center gap-2 text-base font-bold text-brand-purple hover:text-brand-purple-deep"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>{contactsData.persons[0].displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Austria Contact */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 shadow-xs hover:border-brand-gold transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-2.5 py-1 rounded-full border border-brand-border">
                Штаб-квартира Відень, Австрія
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                {contactsData.persons[1].name[typedLocale]}
              </h3>
              <p className="text-xs text-brand-muted">
                Міжнародні договори, координація у Відні та представництво на виставках ЄС.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60">
              <a
                href={`tel:${contactsData.persons[1].phone}`}
                className="inline-flex items-center gap-2 text-base font-bold text-brand-purple hover:text-brand-purple-deep"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>{contactsData.persons[1].displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Messengers */}
          <div className="bg-brand-surface rounded-3xl border border-brand-gold/60 p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-dark bg-white px-2.5 py-1 rounded-full border border-brand-gold/30">
                Онлайн-зв’язок 24/7
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                WhatsApp, Viber, Telegram
              </h3>
              <p className="text-xs text-brand-muted">
                Оперативні запитання, передача файлів та погодження умов співпраці.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60 space-y-2">
              <a
                href={contactsData.messenger.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{contactsData.messenger.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & OFFICE CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                {dict.contact.contactFormHeading}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">
                Надішліть запит на розрахунок представництва
              </h2>
            </div>

            <ContactForm dict={dict} />
          </div>

          {/* Right Address & Verification Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-border p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-gold/40 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {dict.contact.officeHeading}
                  </h3>
                  <p className="text-xs text-brand-muted font-medium">
                    {contactsData.address.display}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-brand-ink/90">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Офіційна реєстрація: Відень, Республіка Австрія</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>ТОВ «НОВА ДОРОГА» — партнерство в Україні</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Повна відповідність стандартам ділової етики та конфіденційності</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border text-center space-y-2">
                <p className="text-xs text-brand-muted">Візитка компанії з оригінального буклету:</p>
                <div className="rounded-xl overflow-hidden border border-brand-gold/40 shadow-xs">
                  <Image
                    src="/brand/business-card.jpg"
                    alt="Neue Wege GmbH Business Card"
                    width={400}
                    height={240}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL CREDENTIALS & IMPRESSUM SECTION */}
      <section id="impressum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-3xl border border-brand-gold/60 p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-brand-purple" />
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
              Офіційні реквізити та правова інформація (Impressum)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-xs text-brand-ink/90 leading-relaxed border-t border-brand-border">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-brand-border">
              <h4 className="font-bold text-brand-purple text-sm">
                Австрійська юридична особа:
              </h4>
              <p><strong>Компанія:</strong> Neue Wege GmbH</p>
              <p><strong>Місце реєстрації:</strong> Wien, Österreich (Відень, Австрія)</p>
              <p><strong>Сфера діяльності:</strong> Аграрний сектор, представництво, виробництво, переробка та торгівля сільськогосподарською продукцією</p>
              <p><strong>Слоган:</strong> Ihr Partner von der Gründung bis zum erfolgreichen Business</p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-brand-border">
              <h4 className="font-bold text-brand-purple text-sm">
                Партнерська структура в Україні:
              </h4>
              <p><strong>Організація:</strong> ТОВ «НОВА ДОРОГА»</p>
              <p><strong>Діяльність:</strong> Сільське господарство, тваринництво, рослинництво, лісове господарство та переробка продукції</p>
              <p><strong>Підтримка:</strong> Благодійна організація «Надія та Гідність» (Hoffnung & Würde, ZVR 1984068166)</p>
              <p><strong>Слоган:</strong> Новий шлях до розвитку, якості та добробуту</p>
            </div>
          </div>

          <div id="privacy" className="pt-4 border-t border-brand-border text-[11px] text-brand-muted leading-relaxed space-y-2">
            <p className="font-semibold text-brand-navy">Політика конфіденційності та захист даних:</p>
            <p>
              Будь-яка інформація про клієнтів, обсяги виробництва та контактні дані, надані для участі у виставці або консультацій, обробляється суворо конфіденційно і передається третім особам виключно за попередньою письмовою згодою замовника.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
