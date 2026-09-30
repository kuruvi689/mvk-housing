"use client";

import Hero from "@/components/Hero";
import Fork from "@/components/Fork";
import ProjectShowcase from "@/components/ProjectShowcase";
import FocusAreas from "@/components/FocusAreas";
import TrustSection from "@/components/TrustSection";
import CtaBanner from "@/components/CtaBanner";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      <Hero />
      <Fork />

      <section id="projects" className="bg-cream py-20 md:py-28 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">
            {t("projectsEyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
            {t("projectsTitle")}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-5 md:px-8">
          <ProjectShowcase />
        </div>
      </section>

      <FocusAreas />
      <TrustSection />
      <CtaBanner />
    </div>
  );
}
