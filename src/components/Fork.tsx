"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-ink/70">
      <span className="mt-0.5 text-gold-dark">&#10003;</span>
      <span>{children}</span>
    </li>
  );
}

export default function Fork() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">{t("portalsEyebrow")}</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
          {t("portalsTitle")}
        </h2>
        <p className="mt-3 text-ink/60">{t("portalsSubtitle")}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-8">
        <div className="rounded-2xl border border-ink/10 bg-cream-card p-8 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-gold-dark">{t("forkTagBuyer")}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{t("forkHeadlineBuyer")}</h3>
          <p className="mt-3 text-sm text-ink/60">
            Move-in ready homes, resale properties, and land across Chennai, Kanchipuram,
            Chengalpattu and Thiruvallur.
          </p>
          <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
            <CheckItem>Construction, resale &amp; land listings</CheckItem>
            <CheckItem>Direct WhatsApp enquiry &mdash; no forms to browse</CheckItem>
          </ul>
          <Link
            href="/buy"
            className="mt-6 inline-block text-sm font-medium text-gold-dark hover:underline"
          >
            {t("forkCtaBuyer")}
          </Link>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-cream-card p-8 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-gold-dark">{t("forkTagSeller")}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{t("forkHeadlineSeller")}</h3>
          <p className="mt-3 text-sm text-ink/60">
            Tell us about your property and we&rsquo;ll reach out directly &mdash; no public
            listing, no browsing required.
          </p>
          <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
            <CheckItem>Confidential enquiry, handled personally</CheckItem>
            <CheckItem>Same-day WhatsApp follow-up</CheckItem>
          </ul>
          <Link
            href="/sell"
            className="mt-6 inline-block text-sm font-medium text-gold-dark hover:underline"
          >
            {t("forkCtaSeller")}
          </Link>
        </div>
      </div>
    </section>
  );
}
