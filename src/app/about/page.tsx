import type { Metadata } from "next";
import Image from "next/image";
import { brandCopy } from "@/data/config";

export const metadata: Metadata = {
  title: "About Us | MVK Housing",
};

// Client-confirmed totals (2026-09-29) — actual project/unit count exceeds
// what's shown on the site since not every project has photos/assets ready
// to display yet.
const stats = [
  { label: "Projects", value: "10+" },
  { label: "Units Built", value: "30+" },
  { label: "Districts Served", value: "4" },
  { label: "Founded", value: "—" }, // pending handoff.md §7 Blocker #2
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-dark text-center">About Us</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-center mt-2">
        MVK Housing
      </h1>

      <div className="mt-12 flex flex-col items-center text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-ink/15 bg-cream-card">
          <Image
            src="/images/founder/mahendran.webp"
            alt="Mahendran M.A, Founder — MVK Housing"
            fill
            sizes="128px"
            className="object-cover object-top"
            priority
          />
        </div>
        <h2 className="mt-4 font-display text-2xl font-semibold">Mahendran M.A</h2>
        <p className="text-sm text-ink/50">Founder, MVK Housing</p>
        <span className="mt-3 inline-block rounded-full border border-gold/30 px-3 py-1 text-xs text-gold-dark">
          BNI Member
        </span>

        <p className="mt-8 font-display text-xl md:text-2xl italic text-ink/90 max-w-2xl">
          &ldquo;{brandCopy.quote}&rdquo;
        </p>

        <p className="mt-6 text-ink/60 max-w-xl">{brandCopy.vision}</p>
        <p className="mt-2 font-display text-lg text-gold-dark">{brandCopy.tagline}</p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-ink/10 bg-cream-card py-5">
            <p className="font-display text-3xl text-gold-dark">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-4">
        {brandCopy.focus.map((f) => (
          <div key={f} className="rounded-xl border border-ink/10 bg-cream-card p-5 text-center">
            <p className="font-display text-lg">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
