import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import IntakeFlow from "@/components/IntakeFlow";

export const metadata: Metadata = {
  title: "Projects | MVK Housing",
};

export default function BuyPage() {
  return (
    <div>
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">For Buyers</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Find Your Home
          </h1>
          <p className="mt-3 max-w-xl text-cream/60">
            Browse completed work and current listings across Chennai, Kanchipuram, Chengalpattu
            and Thiruvallur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-14 md:py-20">
        <ProjectGrid />
      </section>

      <section className="border-t border-ink/10 bg-cream-soft px-5 md:px-8 py-20 md:py-28">
        <IntakeFlow
          type="buyer"
          title="Not sure which project yet?"
          blurb="Tell us what you're looking for — a ready home, land, a custom build on your own plot, or just advice — and we'll match you with the right option."
          ctaLabel="Share Your Requirement →"
          fields={[
            { name: "name", label: "Your name", type: "text", required: true },
            { name: "phone", label: "Phone number", type: "tel", required: true },
            { name: "location", label: "Preferred location", type: "text" },
            { name: "budget", label: "Your budget", type: "text", placeholder: "e.g. ₹50L – ₹75L" },
            {
              name: "needType",
              label: "What you need",
              type: "select",
              required: true,
              options: ["A house", "Land", "Construction on my own land", "Consulting"],
            },
            {
              name: "expectations",
              label: "Expectations — area in sq.ft, 2BHK / 3BHK / etc.",
              type: "textarea",
            },
          ]}
        />
      </section>
    </div>
  );
}
