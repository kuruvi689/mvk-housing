"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappHref } from "@/lib/whatsapp";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-ink border-t border-gold/15">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Logo className="h-9" />
          <p className="mt-3 text-sm text-ink-50/60 max-w-xs">{t("footerTagline")}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gold/80 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-ink-50/70">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/buy" className="hover:text-gold">{t("navProjects")}</Link></li>
            <li><Link href="/sell" className="hover:text-gold">{t("navSeller")}</Link></li>
            <li><Link href="/about" className="hover:text-gold">{t("navAbout")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gold/80 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-ink-50/70">
            <li>Chennai &middot; Kanchipuram &middot; Chengalpattu &middot; Thiruvallur</li>
            <li>
              <a href="tel:+919840055269" className="hover:text-gold">+91 98400 55269</a>
            </li>
            <li>
              <a href="mailto:jawmahaae@gmail.com" className="hover:text-gold">
                jawmahaae@gmail.com
              </a>
            </li>
            <li>
              <a
                href={whatsappHref("Hi MVK Housing, I'd like to get in touch.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gold/80 mb-4">Follow</h3>
          <ul className="space-y-2 text-sm text-ink-50/70">
            <li>
              <a
                href="https://instagram.com/vmk_housing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/profile.php?id=61573140956804"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-50/40">
        <span>&copy; {new Date().getFullYear()} MVK Housing. All rights reserved.</span>
        <span>{t("footerCredit")}</span>
      </div>
    </footer>
  );
}
