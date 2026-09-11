import { createFileRoute, Link, Outlet, useParams } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { services, serviceImages } from "@/data/company";
import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "ICT & Network Services | IBASE Technologies" },
      {
        name: "description",
        content:
          "Explore IBASE Technologies services across VSAT, wireless, network management, structured cabling, servers, VoIP, web services and support.",
      },
      { property: "og:title", content: "ICT & Network Services | IBASE Technologies" },
      {
        property: "og:description",
        content: "End-to-end technology infrastructure and ICT services from Kaduna, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { slug } = useParams({ strict: false });
  if (slug) return <Outlet />;

  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Services"
          title="Infrastructure, connectivity and technical support."
          description="From satellite and wireless connectivity to network design, servers, web services and support agreements, IBASE approaches technology as a complete operating environment."
        />

        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-x-16 lg:grid-cols-[1fr_340px]">
              {/* Editorial service list */}
              <div className="divide-y divide-ink/8 border-y border-ink/8">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group grid gap-6 py-9 transition-colors duration-200 hover:bg-mist/60 sm:grid-cols-[64px_1fr] sm:gap-8 sm:px-4"
                  >
                    <span className="pt-1 font-display text-[13px] font-medium text-accent-brand/70">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex items-baseline justify-between gap-6">
                        <h2 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                          {service.title}
                        </h2>
                        <ArrowUpRight className="hidden size-5 shrink-0 text-ink/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-brand sm:inline-block" />
                      </div>
                      <p className="mt-2.5 max-w-[60ch] text-[14.5px] leading-relaxed text-mute">
                        {service.short}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.capabilities.slice(0, 4).map((cap) => (
                          <span
                            key={cap}
                            className="border border-ink/10 px-2.5 py-1 text-[11.5px] text-mute"
                          >
                            {cap}
                          </span>
                        ))}
                        {service.capabilities.length > 4 && (
                          <span className="px-1 text-[11.5px] text-mute">
                            +{service.capabilities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Sticky image rail */}
              <aside className="mt-16 lg:mt-0">
                <div className="sticky top-28 space-y-8">
                  <div className="border border-ink/8 bg-mist/60 p-7">
                    <SectionLabel>Service delivery</SectionLabel>
                    <p className="mt-4 text-sm leading-relaxed text-mute">
                      Every service is delivered as part of a complete, coordinated infrastructure
                      environment — designed, installed and supported around the organization.
                    </p>
                  </div>
                  <div className="group relative aspect-[4/3] overflow-hidden border border-ink/8">
                    <img
                      src={serviceImages["network-switches"]}
                      alt="Managed network switching infrastructure"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-display text-lg font-semibold tracking-tight text-brand-foreground">
                        Network Management
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-mist">
          <div className="section-container flex flex-wrap items-center justify-between gap-8 py-20">
            <div>
              <SectionLabel>Need a specific scope?</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                Tell us what you need connected.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary">
              Request a Quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
