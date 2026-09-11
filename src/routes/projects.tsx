import { useMemo, useState } from "react";
import { createFileRoute, Link, Outlet, useParams } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

import { projects } from "@/data/company";
import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

const filters = [
  "All",
  "Education",
  "Government",
  "Telecommunications / Infrastructure",
  "Financial Services",
  "Public Sector",
] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Experience | IBASE Technologies" },
      {
        name: "description",
        content:
          "Explore project experience referenced in the IBASE Technologies company profile across education, government, infrastructure and financial services.",
      },
      { property: "og:title", content: "Projects & Experience | IBASE Technologies" },
      {
        property: "og:description",
        content: "Selected project experience across Nigerian organizations and sectors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.sector === filter)),
    [filter],
  );
  const { slug } = useParams({ strict: false });
  if (slug) return <Outlet />;

  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Project experience"
          title="A record of work across Nigerian organizations."
          description="The company profile references projects across education, government, infrastructure, public sector and financial services environments. All information is presented factually from the company record."
        />

        <section className="bg-white">
          <div className="section-container py-20 sm:py-28">
            {/* Filters */}
            <div className="mb-16 flex flex-wrap items-center gap-2 border-b border-ink/8 pb-8">
              <span className="mr-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-mute">
                Filter by sector
              </span>
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  onClick={() => setFilter(item)}
                  className={`border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200 ${
                    filter === item
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-ink/12 text-mute hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Project list */}
            {visibleProjects.length === 0 ? (
              <p className="py-16 text-center text-sm text-mute">
                No projects listed for this sector filter.
              </p>
            ) : (
              <div className="divide-y divide-ink/8 border-y border-ink/8">
                {visibleProjects.map((project, idx) => (
                  <Link
                    key={project.client}
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="group grid gap-6 py-10 sm:grid-cols-[64px_1.2fr_0.9fr] sm:gap-8 sm:items-start"
                  >
                    <span className="pt-1 font-display text-[13px] font-medium text-accent-brand/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-baseline justify-between gap-6">
                        <h2 className="font-display text-[22px] font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                          {project.client}
                        </h2>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-mute">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-mute/60" /> {project.location}
                        </span>
                        <span className="border border-ink/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
                          {project.sector}
                        </span>
                      </div>
                    </div>
                    <div className="sm:pl-4 sm:border-l sm:border-ink/8">
                      <p className="text-[14px] leading-relaxed text-mute">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.services.map((service) => (
                          <span key={service} className="text-[11.5px] text-ink/55">
                            {service}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-ink transition-colors duration-200 group-hover:text-accent-brand">
                        View project
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand">
          <div className="section-container flex flex-wrap items-center justify-between gap-8 py-20">
            <div>
              <SectionLabel>Work with IBASE</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-foreground">
                Bring a requirement to the team.
              </h2>
            </div>
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
