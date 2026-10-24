'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Dictionary } from '@/i18n/types';
import { contactsData } from '@/data/contacts';

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.phone && !formData.email)) {
      return;
    }
    // Simulation with local state feedback
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-surface rounded-2xl border border-brand-gold/60 p-8 text-center space-y-4 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-brand-gold" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">
          {dict.contact.sentSuccess}
        </h3>
        <p className="text-xs text-brand-muted max-w-md mx-auto">
          {dict.contact.sentSuccessDesc}
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <a
            href={contactsData.messenger.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{dict.contact.btnWriteWhatsapp}</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 bg-white text-brand-ink border border-brand-border rounded-xl text-xs font-medium hover:bg-brand-surface"
          >
            {dict.contact.btnSendAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 shadow-sm space-y-5">
      <div>
        <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
          {dict.contact.nameLabel} *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={dict.contact.namePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 text-sm outline-hidden transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            {dict.contact.phoneLabel} *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={dict.contact.phonePlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 text-sm outline-hidden transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            {dict.contact.emailLabel}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={dict.contact.emailPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 text-sm outline-hidden transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
          {dict.contact.messageLabel}
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={dict.contact.messagePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 text-sm outline-hidden transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-6 bg-brand-purple hover:bg-brand-purple-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
      >
        <span>{dict.contact.sendButton}</span>
        <Send className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-[11px] text-brand-muted text-center leading-relaxed">
        {dict.contact.consentNotice}
      </p>
    </form>
  );
}
