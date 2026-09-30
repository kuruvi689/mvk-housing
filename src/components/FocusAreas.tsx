import { brandCopy } from "@/data/config";

const icons = ["\u{1F3E1}", "\u{1F3D7}️", "\u{1F3E2}", "\u{1F4CB}"];

export default function FocusAreas() {
  return (
    <section className="bg-ink py-20 md:py-28 text-cream">
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">What We Do</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
          Built Around Four Services
        </h2>
        <p className="mt-3 text-cream/60">{brandCopy.vision}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 px-5 sm:grid-cols-2 md:px-8">
        {brandCopy.focus.map((f, i) => (
          <div
            key={f}
            className="rounded-2xl border border-cream/10 bg-cream/5 p-6 hover:border-gold/40 transition-colors"
          >
            <span className="text-2xl" aria-hidden>
              {icons[i]}
            </span>
            <p className="mt-3 font-display text-lg font-semibold">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
