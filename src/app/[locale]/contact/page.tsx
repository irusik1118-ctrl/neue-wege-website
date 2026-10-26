import { Phone, MapPin, MessageSquare, FileText, CheckCircle2, Mail } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { ContactForm } from '@/components/sections/ContactForm';
import { BusinessCardModal } from '@/components/sections/BusinessCardModal';
import { ContactButton } from '@/components/ui/ContactButton';
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
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-navy rounded-3xl p-6 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border-2 border-brand-gold/60">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-black uppercase tracking-wider text-brand-gold-light bg-white/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
              {dict.contact.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {dict.contact.title}
            </h1>
            <p className="text-sm sm:text-lg text-white/90 leading-relaxed">
              {dict.contact.subtitle}
            </p>
            <div className="pt-2">
              <ContactButton locale={typedLocale} size="md" variant="gold" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ukraine Contact */}
          <div className="bg-white rounded-3xl border-2 border-brand-border p-6 sm:p-8 shadow-sm hover:border-brand-gold transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                {dict.contact.ukraineOfficeBadge}
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                {contactsData.persons[0].name[typedLocale]}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {dict.contact.ukraineOfficeDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60">
              <a
                href={`tel:${contactsData.persons[0].phone}`}
                className="inline-flex items-center gap-2 text-base font-black text-brand-purple hover:text-brand-purple-deep"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>{contactsData.persons[0].displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Austria Contact */}
          <div className="bg-white rounded-3xl border-2 border-brand-border p-6 sm:p-8 shadow-sm hover:border-brand-gold transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                {dict.contact.austriaOfficeBadge}
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                {contactsData.persons[1].name[typedLocale]}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {dict.contact.austriaOfficeDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60">
              <a
                href={`tel:${contactsData.persons[1].phone}`}
                className="inline-flex items-center gap-2 text-base font-black text-brand-purple hover:text-brand-purple-deep"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>{contactsData.persons[1].displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Email & Messengers */}
          <div className="bg-gradient-to-br from-brand-surface to-white rounded-3xl border-2 border-brand-gold/60 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-dark bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
                {dict.contact.online247Badge}
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                WhatsApp, Viber, Telegram & Email
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {dict.contact.online247Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60 space-y-2.5">
              <a
                href={`mailto:${contactsData.email}`}
                className="flex items-center gap-2 text-sm font-black text-brand-purple hover:underline break-all"
              >
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{contactsData.email}</span>
              </a>

              <a
                href={contactsData.messenger.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-purple-deep"
              >
                <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{contactsData.messenger.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & BUSINESS CARD 001 SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
                {dict.contact.contactFormHeading}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">
                {dict.contact.contactFormSubtitle}
              </h2>
            </div>

            <ContactForm dict={dict} />
          </div>

          {/* Right Business Card 001 with Lightbox and verified details */}
          <div className="lg:col-span-5 space-y-6">
            <BusinessCardModal locale={typedLocale} />
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL CREDENTIALS & IMPRESSUM SECTION */}
      <section id="impressum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-3xl border-2 border-brand-gold/60 p-6 sm:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-brand-purple" />
            <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
              {dict.contact.impressumHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-xs text-brand-ink/90 leading-relaxed border-t border-brand-border">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-brand-border">
              <h4 className="font-bold text-brand-purple text-sm">
                {dict.contact.atEntityHeading}
              </h4>
              <p><strong>{dict.contact.atCompanyLabel}</strong> {contactsData.legal.companyNameAt}</p>
              <p><strong>{dict.contact.atRegPlaceLabel}</strong> {dict.contact.atRegPlaceValue}</p>
              <p><strong>{dict.contact.atFieldLabel}</strong> {dict.contact.atFieldValue}</p>
              <p><strong>{dict.contact.atSloganLabel}</strong> {contactsData.legal.sloganDe}</p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-brand-border">
              <h4 className="font-bold text-brand-purple text-sm">
                {dict.contact.uaEntityHeading}
              </h4>
              <p><strong>{dict.contact.uaCompanyLabel}</strong> {contactsData.legal.companyNameUa}</p>
              <p><strong>{dict.contact.uaFieldLabel}</strong> {dict.contact.uaFieldValue}</p>
              <p><strong>{dict.contact.uaSupportLabel}</strong> {dict.contact.uaSupportValue}</p>
              <p><strong>{dict.contact.uaSloganLabel}</strong> {contactsData.legal.taglineUa}</p>
            </div>
          </div>

          <div id="privacy" className="pt-4 border-t border-brand-border text-[11px] text-brand-muted leading-relaxed space-y-2">
            <p className="font-semibold text-brand-navy">{dict.contact.privacyHeading}</p>
            <p>
              {dict.contact.privacyText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
