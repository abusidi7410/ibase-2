import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { services, serviceImages } from "@/data/company";
import { PageFrame, SectionLabel, SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    const serviceIndex = services.findIndex((item) => item.slug === params.slug);
    const related = services.filter((_, i) => i !== serviceIndex).slice(0, 3);
    return { service, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title ?? "Service"} | IBASE Technologies` },
      {
        name: "description",
        content: loaderData?.service.short ?? "IBASE Technologies service details.",
      },
      {
        property: "og:title",
        content: `${loaderData?.service.title ?? "Service"} | IBASE Technologies`,
      },
      {
        property: "og:description",
        content: loaderData?.service.short ?? "IBASE Technologies service details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/services/${loaderData?.service.slug ?? ""}` }],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service, related } = Route.useLoaderData();
  const image =
    serviceImages[service.image as keyof typeof serviceImages] ?? serviceImages["network-cables"];

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
                    to="/services"
                    className="transition-colors duration-200 hover:text-brand-foreground/70"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-brand-foreground/20">
                  /
                </li>
                <li className="max-w-[30ch] truncate text-brand-foreground/60">{service.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-brand">
                  Service {service.number}
                </p>
                <h1 className="mt-5 max-w-[24ch] font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-foreground sm:text-5xl">
                  {service.title}
                </h1>
              </div>
              <p className="max-w-[42ch] text-base leading-relaxed text-brand-foreground/60">
                {service.short}
              </p>
            </div>
          </div>
        </section>

        {/* Large image */}
        <section className="bg-brand pt-0">
          <div className="section-container">
            <div className="aspect-[21/9] overflow-hidden border border-brand-foreground/10">
              <img
                src={image}
                alt={`${service.title} — delivered by IBASE Technologies`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-28">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
              {/* Left: Description */}
              <div>
                <Link
                  to="/services"
                  className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-mute transition-colors duration-200 hover:text-ink"
                >
                  <ArrowLeft className="size-4" /> All services
                </Link>

                <SectionLabel>What this covers</SectionLabel>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                  Scope of the service
                </h2>
                <div className="mt-6 max-w-[68ch] space-y-5 text-base leading-relaxed text-mute">
                  {service.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 border-t border-ink/8 pt-10">
                  <SectionLabel>Applications</SectionLabel>
                  <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-mute">
                    {service.title} is referenced in IBASE's project record across government,
                    education, telecommunications and financial services environments in Nigeria.
                    The practical scope of an engagement is confirmed during the initial
                    consultation, based on the operating environment and requirement.
                  </p>
                </div>

                <div className="mt-14 flex flex-col gap-4 border border-ink/8 bg-mist/60 p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      Discuss this service with the team
                    </p>
                    <p className="mt-1 text-sm text-mute">
                      Response through the monitored support process.
                    </p>
                  </div>
                  <Link to="/contact" className="btn-primary shrink-0">
                    Request a Quote <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Capabilities */}
              <aside>
                <div className="sticky top-28 border-l border-ink/10 pl-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-brand">
                    Capabilities referenced
                  </p>
                  <ul className="mt-6 space-y-0.5">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-3 py-2.5 text-[14px] text-ink"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-accent-brand" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="bg-mist">
          <div className="section-container py-20 sm:py-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>Related services</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  Part of a connected infrastructure
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
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/services/$slug"
                  params={{ slug: rel.slug }}
                  className="group grid gap-4 py-6 transition-colors duration-200 hover:bg-white sm:grid-cols-[52px_1fr_auto] sm:items-center sm:gap-8 sm:px-5"
                >
                  <span className="font-display text-[12.5px] font-medium text-accent-brand/70">
                    {rel.number}
                  </span>
                  <div>
                    <p className="font-display text-[16px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                      {rel.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{rel.short}</p>
                  </div>
                  <span className="hidden text-ink/25 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-brand sm:inline-block">
                    <ArrowUpRight className="size-5" />
                  </span>
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
