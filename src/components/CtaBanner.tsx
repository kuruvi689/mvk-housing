import { whatsappHref } from "@/lib/whatsapp";

export default function CtaBanner() {
  return (
    <section className="bg-ink text-cream py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Direct Access</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
          Begin Your Property Journey
        </h2>
        <p className="mt-4 text-cream/60">
          Whether you want to buy, sell, or ask a question &mdash; message us directly and
          Mahendran will personally get back to you the same day.
        </p>
        <a
          href={whatsappHref("Hi MVK Housing, I'd like to get in touch.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-gold px-8 py-3.5 font-medium text-ink hover:bg-gold-light transition-colors"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}
