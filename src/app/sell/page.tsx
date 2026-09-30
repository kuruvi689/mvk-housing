import type { Metadata } from "next";
import IntakeFlow from "@/components/IntakeFlow";

export const metadata: Metadata = {
  title: "Sell Your Property | MVK Housing",
};

export default function SellPage() {
  return (
    <div>
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">For Sellers</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Sell Your Property
          </h1>
          <p className="mt-3 max-w-xl text-cream/60">
            No browsing, no sales pitch &mdash; just tell us about your property and we&rsquo;ll
            take it from there.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
        <IntakeFlow
          type="seller"
          title="Sell your property"
          blurb="Confidential, direct to Mahendran — no public listing."
          ctaLabel="Fill Property Details →"
          fields={[
            { name: "name", label: "Your name", type: "text", required: true },
            { name: "address", label: "Exact address of the property", type: "text", required: true },
            { name: "phone", label: "Phone number", type: "tel", required: true },
            { name: "location", label: "General location / locality", type: "text" },
            { name: "configuration", label: "Configuration — 2BHK / 3BHK / etc.", type: "text" },
            { name: "area", label: "Area in sq.ft", type: "text" },
            {
              name: "furnishing",
              label: "Furnishing",
              type: "select",
              options: ["Furnished", "Semi-furnished", "Unfurnished"],
            },
          ]}
        />
      </section>
    </div>
  );
}
