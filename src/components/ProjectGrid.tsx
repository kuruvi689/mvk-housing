"use client";

import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { whatsappHref } from "@/lib/whatsapp";
import { budgetRangeLabel } from "@/data/config";

const bhkFilters = ["All", "2BHK", "3BHK", "4BHK"] as const;
const budgetFilters = ["All Budgets", "Under ₹1 Cr", "₹1 Cr & above"] as const;

export default function ProjectGrid() {
  const [bhk, setBhk] = useState<(typeof bhkFilters)[number]>("All");
  const [budget, setBudget] = useState<(typeof budgetFilters)[number]>("All Budgets");
  const [selected, setSelected] = useState<Project | null>(null);

  const priceLakhs = (p: Project) => {
    const match = p.price.match(/[\d.]+/);
    if (!match) return 0;
    const value = parseFloat(match[0]);
    return p.price.includes("Crore") ? value * 100 : value;
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const bhkMatch = bhk === "All" || p.bhk === bhk;
      const budgetMatch =
        budget === "All Budgets" ||
        (budget === "Under ₹1 Cr" && priceLakhs(p) < 100) ||
        (budget === "₹1 Cr & above" && priceLakhs(p) >= 100);
      return bhkMatch && budgetMatch;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bhk, budget]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {bhkFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setBhk(f)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              bhk === f
                ? "bg-gold text-ink"
                : "border border-ink/15 text-ink/60 hover:border-gold/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        {budgetFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setBudget(f)}
            className={`rounded-full px-4 py-2 text-xs transition-colors ${
              budget === f
                ? "bg-gold/90 text-ink"
                : "border border-ink/10 text-ink/40 hover:border-gold/40"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="text-xs text-ink/40">
          Budgets typically {budgetRangeLabel} {"—"} larger requirements welcome too.
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-ink/10 bg-cream-card p-10 text-center">
          <p className="text-ink/60">
            No {bhk !== "All" ? bhk : ""} listings right now in this range &mdash; ask us on
            WhatsApp and we&rsquo;ll help you find one.
          </p>
          <a
            href={whatsappHref("Hi MVK Housing, I couldn't find a matching listing on your site — can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink"
          >
            Ask on WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} onView={setSelected} />
          ))}
        </div>
      )}

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
