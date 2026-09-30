import { brandCopy } from "@/data/config";

// Client-confirmed totals (2026-09-29) — actual project/unit count exceeds
// what's shown on the site since not every project has photos/assets ready
// to display yet.
const stats = [
  { label: "Projects", value: "10+" },
  { label: "Units Built", value: "30+" },
  { label: "Districts Served", value: "4" },
];

export default function TrustSection() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">The MVK Standard</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
          Built On Trust,
          <br />
          <span className="italic">Defined By Service.</span>
        </h2>

        <blockquote className="mt-8 border-l-2 border-gold pl-5 text-left font-display text-xl italic text-ink/90">
          &ldquo;{brandCopy.quote}&rdquo;
          <footer className="mt-3 text-sm not-italic font-sans text-ink/50">
            Mahendran M.A, Founder &mdash; MVK Housing
          </footer>
        </blockquote>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-xl border border-ink/10 bg-cream-card py-5"
            >
              <p className="font-display text-3xl text-gold-dark">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
