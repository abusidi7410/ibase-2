import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, MapPin } from "lucide-react";

import { projects, services, projectImageGalleries } from "@/data/company";
import { PageFrame, SectionLabel, SiteFooter, SiteHeader } from "@/components/site-shell";

import govImage from "@/assets/consulting-building.jpg";
import eduImage from "@/assets/network-cables.jpg";
import telecomImage from "@/assets/fiber-optics.jpg";
import publicImage from "@/assets/wireless-router.jpg";
import financialImage from "@/assets/network-switches.jpg";
import fallbackImage from "@/assets/datacenter-aisle.jpg";

function imageForSector(sector: string): string {
  if (sector.includes("Education")) return eduImage;
  if (sector.includes("Telecommunications")) return telecomImage;
  if (sector.includes("Financial")) return financialImage;
  if (sector.includes("Public Sector")) return publicImage;
  if (sector.includes("Government")) return govImage;
  return fallbackImage;
}

function stem(word: string): string {
  return word.toLowerCase().replace(/s$/, "");
}

function matchesService(title: string, projectName: string): boolean {
  const t = title.toLowerCase();
  const n = projectName.toLowerCase();
  if (t.includes(n) || n.includes(t)) return true;
  const tFirst = stem((t.split(" ")[0] ?? "").split("&")[0] ?? "");
  const nFirst = stem((n.split(" ")[0] ?? "").split("&")[0] ?? "");
  return tFirst.length > 2 && tFirst === nFirst;
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    const related = projects
      .filter((item) => item.slug !== params.slug && item.sector === project.sector)
      .concat(
        projects.filter((item) => item.slug !== params.slug && item.sector !== project.sector),
      )
      .slice(0, 3);
    const projectServices = services.filter((service) =>
      project.services.some((name) => matchesService(service.title, name)),
    );
    return { project, related, projectServices };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.client ?? "Project"} | IBASE Technologies`,
      },
      {
        name: "description",
        content: loaderData?.project.description ?? "IBASE Technologies project experience.",
      },
      {
        property: "og:title",
        content: `${loaderData?.project.client ?? "Project"} | IBASE Technologies`,
      },
      {
        property: "og:description",
        content: loaderData?.project.description ?? "IBASE Technologies project experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/projects/${loaderData?.project.slug ?? ""}` }],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project, related, projectServices } = Route.useLoaderData();
  const gallery = projectImageGalleries[project.slug] ?? [imageForSector(project.sector)];

  return (
    <PageFrame>
      <SiteHeader />
      <main>
        {/* Hero / header */}
        <section className="bg-brand">
          <div className="section-container py-20 sm:py-28">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2.5 text-[12.5px] text-brand-foreground/40">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-200 hover:text-brand-foreground/70"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-brand-foreground/20">
                  /
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="transition-colors duration-200 hover:text-brand-foreground/70"
                  >
                    Projects
                  </Link>
                </li>
                <li aria-hidden="true" className="text-brand-foreground/20">
                  /
                </li>
                <li className="max-w-[30ch] truncate text-brand-foreground/60">{project.client}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-brand">
                  {project.sector}
                </p>
                <h1 className="mt-5 max-w-[22ch] font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-foreground sm:text-5xl">
                  {project.client}
                </h1>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-brand-foreground/60">
                <MapPin className="size-4 text-accent-brand" />
                {project.location}
              </div>
            </div>
          </div>
        </section>

        {/* Large image */}
        <section className="bg-brand pt-0">
          <div className="section-container">
            <div className="aspect-[21/9] overflow-hidden border border-brand-foreground/10">
              <img
                src={gallery[0]}
                alt={`${project.client} — ${project.sector} infrastructure project`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Additional project photos */}
        {gallery.length > 1 && (
          <section className="bg-brand pt-0">
            <div className="section-container">
              <div className="grid gap-6 sm:grid-cols-2">
                {gallery.slice(1).map((src, i) => (
                  <div
                    key={src}
                    className="aspect-[16/10] overflow-hidden border border-brand-foreground/10"
                  >
                    <img
                      src={src}
                      alt={`${project.client} — project photo ${i + 2}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main content */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-28">
            <Link
              to="/projects"
              className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-mute transition-colors duration-200 hover:text-ink"
            >
              <ArrowLeft className="size-4" /> All projects
            </Link>

            <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
              {/* Left: overview */}
              <div>
                <SectionLabel>Project overview</SectionLabel>
                <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-mute">
                  {project.description}
                </p>

                <div className="mt-12">
                  <SectionLabel>Scope of work</SectionLabel>
                  <ul className="mt-6 space-y-0.5 border-t border-ink/8">
                    {project.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-ink/8 py-3.5 text-[15px] text-ink"
                      >
                        <Check className="mt-1 size-4 shrink-0 text-accent-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-14 flex flex-col gap-4 border border-ink/8 bg-mist/60 p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      Planning a similar requirement?
                    </p>
                    <p className="mt-1 text-sm text-mute">
                      Discuss your infrastructure project with the team.
                    </p>
                  </div>
                  <Link to="/contact" className="btn-primary shrink-0">
                    Request a Quote <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Right: facts */}
              <aside>
                <div className="sticky top-28 border-l border-ink/10 pl-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-brand">
                    Project facts
                  </p>
                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                        Client
                      </dt>
                      <dd className="mt-1 text-[14.5px] font-medium text-ink">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                        Sector
                      </dt>
                      <dd className="mt-1 text-[14.5px] font-medium text-ink">{project.sector}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                        Location
                      </dt>
                      <dd className="mt-1 text-[14.5px] font-medium text-ink">
                        {project.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                        Services delivered
                      </dt>
                      <dd className="mt-2">
                        <ul className="space-y-1.5">
                          {project.services.map((service) => (
                            <li
                              key={service}
                              className="flex items-start gap-2 text-[13.5px] text-ink/75"
                            >
                              <span className="mt-[7px] h-1 w-1 shrink-0 bg-accent-brand" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Services involved */}
        {projectServices.length > 0 && (
          <section className="bg-mist">
            <div className="section-container py-20 sm:py-24">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <SectionLabel>Services involved</SectionLabel>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    The capabilities behind this project
                  </h2>
                </div>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
                >
                  All services
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="divide-y divide-ink/8 border-y border-ink/8">
                {projectServices.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group grid gap-4 py-6 transition-colors duration-200 hover:bg-white sm:grid-cols-[52px_1fr_auto] sm:items-center sm:gap-8 sm:px-5"
                  >
                    <span className="font-display text-[12.5px] font-medium text-accent-brand/70">
                      {service.number}
                    </span>
                    <div>
                      <p className="font-display text-[16px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                        {service.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mute">{service.short}</p>
                    </div>
                    <span className="hidden text-ink/25 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-brand sm:inline-block">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related projects */}
        <section className="bg-brand">
          <div className="section-container py-20 sm:py-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>Related projects</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-foreground">
                  More from the project record
                </h2>
              </div>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/70 transition-colors duration-200 hover:text-brand-foreground"
              >
                All projects
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="divide-y divide-brand-foreground/10 border-y border-brand-foreground/10">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/projects/$slug"
                  params={{ slug: rel.slug }}
                  className="group grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-brand/80">
                      {rel.sector}
                    </p>
                    <p className="mt-2 font-display text-[17px] font-semibold tracking-tight text-brand-foreground transition-colors duration-200 group-hover:text-accent-brand">
                      {rel.client}
                    </p>
                  </div>
                  <span className="text-xs text-brand-foreground/40">{rel.location}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
