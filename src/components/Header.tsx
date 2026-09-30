"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { whatsappHref } from "@/lib/whatsapp";
import Logo from "./Logo";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#projects", label: t("navProjects") },
    { href: "/about", label: t("navAbout") },
    { href: "/buy", label: t("navBuyer") },
    { href: "/sell", label: t("navSeller") },
    { href: "/#contact", label: t("navContact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10 text-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Logo tagline="Chennai Residences" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-ink/70 hover:text-gold-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a
            href={whatsappHref("Hi MVK Housing, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink hover:bg-gold-light transition-colors"
          >
            {t("getInTouch")}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2 -mr-2"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 px-5 py-4 flex flex-col gap-4 bg-cream">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink/70 hover:text-gold-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-ink/10">
            <LanguageToggle />
            <a
              href={whatsappHref("Hi MVK Housing, I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink"
            >
              {t("getInTouch")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
