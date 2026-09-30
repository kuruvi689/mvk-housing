"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { whatsappHref } from "@/lib/whatsapp";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isCompleted = project.status === "completed";
  const waMessage = isCompleted
    ? `Hi MVK Housing, I saw ${project.name} and would like to ask about a similar project.`
    : `Hi MVK Housing, I'm interested in ${project.name}.`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4"
      onClick={onClose}
      data-testid="project-modal-backdrop"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-ink/10 bg-cream-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          data-testid="project-modal-close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink hover:text-gold-dark shadow"
        >
          &#10005;
        </button>

        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 42rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          {isCompleted && (
            <p className="mb-3 text-xs uppercase tracking-widest text-gold-dark">
              Showcase &middot; Completed Project
            </p>
          )}
          <h2 className="font-display text-3xl font-semibold">{project.name}</h2>
          <p className="text-sm text-ink/50 mt-1">{project.location}</p>

          <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm border-y border-ink/10 py-5">
            <div>
              <dt className="text-ink/40">Configuration</dt>
              <dd className="mt-1 font-medium">{project.bhk}</dd>
            </div>
            <div>
              <dt className="text-ink/40">Area</dt>
              <dd className="mt-1 font-medium">{project.areaSqft.toLocaleString("en-IN")} sq.ft</dd>
            </div>
            <div>
              <dt className="text-ink/40">Units</dt>
              <dd className="mt-1 font-medium">{project.units}</dd>
            </div>
            <div>
              <dt className="text-ink/40">Price</dt>
              <dd className="mt-1 font-medium text-gold-dark">{project.price}</dd>
            </div>
            <div>
              <dt className="text-ink/40">Status</dt>
              <dd className="mt-1 font-medium">{project.statusLabel}</dd>
            </div>
          </dl>

          <p className="mt-5 text-sm text-ink/60 leading-relaxed">{project.description}</p>

          <p className="mt-5 rounded-md border border-gold/25 bg-gold/10 px-4 py-3 text-xs text-ink/60">
            Approvals &amp; documents pending confirmation.
          </p>

          <a
            href={whatsappHref(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="project-modal-whatsapp-cta"
            className="mt-6 block w-full rounded-full bg-gold py-3 text-center font-medium text-ink hover:bg-gold-light transition-colors"
          >
            {isCompleted ? "Ask about a similar project" : `I'm interested in ${project.name}`}
          </a>
        </div>
      </div>
    </div>
  );
}
