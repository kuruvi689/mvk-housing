"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/whatsapp";

export interface IntakeField {
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

function buildWhatsAppMessage(type: "buyer" | "seller", v: Record<string, string>): string {
  const lines =
    type === "buyer"
      ? [
          "New buyer enquiry — MVK Housing website",
          `Name: ${v.name}`,
          `Phone: ${v.phone}`,
          `Looking for: ${v.needType || "-"}`,
          `Location: ${v.location || "-"}`,
          `Budget: ${v.budget || "-"}`,
          `Expectations: ${v.expectations || "-"}`,
        ]
      : [
          "New seller enquiry — MVK Housing website",
          `Name: ${v.name}`,
          `Phone: ${v.phone}`,
          `Property address: ${v.address}`,
          `Location: ${v.location || "-"}`,
          `Configuration: ${v.configuration || "-"}`,
          `Area: ${v.area ? `${v.area} sq.ft` : "-"}`,
          `Furnishing: ${v.furnishing || "-"}`,
        ];
  return lines.join("\n");
}

export default function IntakeFlow({
  type,
  title,
  blurb,
  fields,
  ctaLabel,
}: {
  type: "buyer" | "seller";
  title: string;
  blurb: string;
  fields: IntakeField[];
  ctaLabel: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setField(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...values }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try WhatsApp directly.");
      }
      window.location.href = whatsappHref(buildWhatsAppMessage(type, values));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="text-center">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">{title}</h1>
        <p className="mt-4 text-ink/60">{blurb}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm text-ink/60 mb-1.5">
              {field.label}
              {field.required && <span className="text-gold-dark"> *</span>}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={(e) => setField(field.name, e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-cream-card px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
              >
                <option value="" disabled>
                  Select
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => setField(field.name, e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-ink/15 bg-cream-card px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => setField(field.name, e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-cream-card px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
              />
            )}
          </div>
        ))}

        {error && (
          <p
            data-testid="intake-error"
            className="rounded-md border border-red-300 bg-red-50 px-4 py-2.5 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          data-testid="intake-submit"
          className="mt-2 w-full rounded-full bg-gold px-8 py-3.5 font-medium text-ink hover:bg-gold-light transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : ctaLabel}
        </button>
        <p className="text-center text-xs text-ink/40">
          Submitting takes you straight to WhatsApp to confirm with Mahendran.
        </p>
      </form>
    </div>
  );
}
