'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomIn, X, Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { Locale } from '@/i18n/config';
import { contactsData } from '@/data/contacts';

interface BusinessCardModalProps {
  locale: Locale;
}

export function BusinessCardModal({ locale }: BusinessCardModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const captionText =
    locale === 'ua'
      ? 'Офіційна візитна картка компанії (натисніть для збільшення)'
      : locale === 'de'
      ? 'Offizielle Visitenkarte des Unternehmens (Klicken zum Vergrößern)'
      : 'Official company business card (click to enlarge)';

  return (
    <>
      <div className="bg-white rounded-3xl border-2 border-brand-gold/60 p-5 sm:p-7 shadow-xl space-y-6">
        {/* Interactive image wrapper */}
        <div className="space-y-2">
          <div
            onClick={() => setIsOpen(true)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-brand-gold/50 shadow-md bg-brand-surface hover:border-brand-purple transition-all duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(true);
              }
            }}
            aria-label={captionText}
          >
            <div className="relative aspect-[1024/624] w-full">
              <Image
                src="/brand/business-card.jpg"
                alt="Neue Wege GmbH Business Card 001"
                width={1024}
                height={624}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-purple text-white text-xs font-bold shadow-lg border border-brand-gold">
                <ZoomIn className="w-4 h-4 text-brand-gold" />
                <span>{locale === 'ua' ? 'Збільшити візитку' : locale === 'de' ? 'Vergrößern' : 'Enlarge Card'}</span>
              </span>
            </div>
          </div>
          <p className="text-[11px] text-center text-brand-muted flex items-center justify-center gap-1.5 pt-1">
            <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
            <span>{captionText}</span>
          </p>
        </div>

        {/* Contact details replicated right next to/under business card */}
        <div className="bg-brand-surface rounded-2xl p-4 sm:p-5 border border-brand-border space-y-3.5 text-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
            <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
            <span className="font-bold text-brand-navy">{contactsData.address.display[locale]}</span>
          </div>

          {/* Clickable email requirement */}
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">
                {locale === 'ua' ? 'Електронна пошта' : locale === 'de' ? 'E-Mail-Adresse' : 'Email Address'}
              </p>
              <a
                href={`mailto:${contactsData.email}`}
                className="text-sm font-black text-brand-purple hover:text-brand-purple-deep hover:underline transition-colors break-all"
              >
                {contactsData.email}
              </a>
            </div>
          </div>

          {/* Verified Phone numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href={`tel:${contactsData.persons[0].phone}`}
              className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-brand-border hover:border-brand-gold transition-colors text-brand-navy"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-brand-muted leading-none">UA ({contactsData.persons[0].name[locale]})</p>
                <p className="font-bold text-xs truncate">{contactsData.persons[0].displayPhone}</p>
              </div>
            </a>

            <a
              href={`tel:${contactsData.persons[1].phone}`}
              className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-brand-border hover:border-brand-gold transition-colors text-brand-navy"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-brand-muted leading-none">AT ({contactsData.persons[1].name[locale]})</p>
                <p className="font-bold text-xs truncate">{contactsData.persons[1].displayPhone}</p>
              </div>
            </a>
          </div>

          <a
            href={contactsData.messenger.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-brand-border hover:border-emerald-500 transition-colors text-emerald-800"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] text-brand-muted leading-none">WhatsApp / Viber / Telegram</p>
                <p className="font-bold text-xs">{contactsData.messenger.displayPhone}</p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-navy/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl p-3 sm:p-6 shadow-2xl border-2 border-brand-gold overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                <h3 className="text-sm sm:text-base font-black text-brand-navy">
                  {locale === 'ua' ? 'Візитка компанії «НОВА ДОРОГА»' : 'Neue Wege GmbH Visitenkarte'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-brand-surface hover:bg-brand-purple hover:text-white flex items-center justify-center transition-colors text-brand-navy"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal image */}
            <div className="relative aspect-[1024/624] w-full my-3 sm:my-4 rounded-2xl overflow-hidden border border-brand-border shadow-inner">
              <Image
                src="/brand/business-card.jpg"
                alt="Neue Wege GmbH Business Card Full"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>

            {/* Modal footer with quick action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-brand-border text-xs">
              <span className="text-brand-muted">
                Email: <strong className="text-brand-purple">{contactsData.email}</strong>
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contactsData.email}`}
                  className="px-4 py-2 bg-brand-purple hover:bg-brand-purple-deep text-white font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{locale === 'ua' ? 'Написати на пошту' : 'E-Mail senden'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
