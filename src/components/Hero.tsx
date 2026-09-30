"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappHref } from "@/lib/whatsapp";

export default function Hero() {
  const { t } = useLanguage();

  const stages = [
    { n: "01", label: t("stagePlot") },
    { n: "02", label: t("stageBlueprint") },
    { n: "03", label: t("stageStructure") },
    { n: "04", label: t("stageFinished") },
  ];

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <Image
        src="/images/projects/subam-house.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8 pt-28 pb-16 md:pt-36 md:pb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/40 px-4 py-1.5 text-xs tracking-widest uppercase text-gold">
          {t("heroEyebrow")}
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1]">
          {t("heroTitleLine1")}
          <br />
          <span className="italic text-gold">{t("heroTitleLine2")}</span>
        </h1>

        <p className="mt-6 max-w-xl text-cream/70 text-base md:text-lg">{t("heroDesc")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/buy"
            className="rounded-full bg-gold px-7 py-3 font-medium text-ink hover:bg-gold-light transition-colors"
          >
            {t("heroCtaPrimary")}
          </Link>
          <a
            href={whatsappHref("Hi MVK Housing, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-7 py-3 font-medium text-cream hover:border-gold hover:text-gold transition-colors"
          >
            {t("heroCtaSecondary")}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-4 border-t border-cream/10 pt-6">
          {stages.map((s) => (
            <div key={s.n}>
              <span className="text-xs text-gold/70">{s.n}</span>
              <p className="mt-1 text-sm text-cream/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
