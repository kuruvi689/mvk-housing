"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onView={setSelected} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/buy"
          className="inline-block rounded-full border border-ink/15 px-6 py-2.5 text-sm font-medium text-ink hover:border-gold hover:text-gold-dark transition-colors"
        >
          View All Projects &amp; Filters &rarr;
        </Link>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
