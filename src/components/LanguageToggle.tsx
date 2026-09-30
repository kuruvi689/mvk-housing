"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-ink/15 text-xs font-medium overflow-hidden">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-gold text-ink" : "text-ink/60 hover:text-gold-dark"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ta")}
        aria-pressed={lang === "ta"}
        className={`px-3 py-1.5 transition-colors ${
          lang === "ta" ? "bg-gold text-ink" : "text-ink/60 hover:text-gold-dark"
        }`}
      >
        {"தமிழ்"}
      </button>
    </div>
  );
}
