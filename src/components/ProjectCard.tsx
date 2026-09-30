import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onView,
}: {
  project: Project;
  onView: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      data-testid={`project-card-${project.slug}`}
      onClick={() => onView(project)}
      className="group text-left rounded-2xl overflow-hidden border border-ink/10 bg-cream-card hover:border-gold/50 hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="flex items-center gap-1 text-xs uppercase tracking-widest text-gold-dark">
          <span aria-hidden>&#128205;</span> {project.location}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold">{project.name}</h3>

        <div className="mt-3 flex items-center gap-4 text-sm text-ink/60">
          <span>{project.bhk}</span>
          <span>&middot;</span>
          <span>{project.areaSqft.toLocaleString("en-IN")} sq.ft</span>
        </div>

        <p className="mt-3 inline-block rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs text-ink/60">
          {project.highlight}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="font-display text-lg text-gold-dark">{project.price}</span>
          <span className="text-sm font-medium text-ink group-hover:text-gold-dark transition-colors">
            View Details &rarr;
          </span>
        </div>
      </div>
    </button>
  );
}
