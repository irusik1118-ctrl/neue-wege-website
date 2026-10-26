import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Locale } from "@/i18n/config";
import { contactsData } from "@/data/contacts";

interface ContactButtonProps {
  locale: Locale;
  label?: string;
  variant?: "primary" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  hrefType?: "page" | "mailto";
  className?: string;
  showIcon?: boolean;
}

export function ContactButton({
  locale,
  label,
  variant = "primary",
  size = "md",
  hrefType = "page",
  className = "",
  showIcon = true,
}: ContactButtonProps) {
  const defaultLabel =
    label ||
    (locale === "ua"
      ? "Зв'язатися з нами"
      : locale === "de"
      ? "Kontakt aufnehmen"
      : "Contact Us");

  const href =
    hrefType === "mailto"
      ? `mailto:${contactsData.email}`
      : `/${locale}/contact`;

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-brand-purple hover:bg-brand-purple-deep text-white border-2 border-brand-gold shadow-lg hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-0.5",
    gold:
      "bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold text-brand-navy border-2 border-brand-purple shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-black",
    outline:
      "bg-white hover:bg-brand-surface text-brand-purple border-2 border-brand-purple hover:border-brand-gold shadow-xs hover:shadow-md",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-black uppercase tracking-wider transition-all duration-200 active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && (
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" />
      )}
      <span>{defaultLabel}</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
