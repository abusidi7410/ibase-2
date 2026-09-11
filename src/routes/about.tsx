import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";

import { company, services, projects } from "@/data/company";
import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IBASE Technologies | Kaduna ICT Company" },
      {
        name: "description",
        content:
          "Learn about IBASE Technologies Ltd, established in 2012 as a Nigerian ICT, networking and technology infrastructure company.",
      },
      { property: "og:title", content: "About IBASE Technologies | Kaduna ICT Company" },
      {
        property: "og:description",
        content: "An established Nigerian technology infrastructure and ICT solutions provider.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="About IBASE"
          title="Technical depth, practical support, Nigerian context."
          description="IBASE Technologies Ltd was established in 2012 and brings together professionals in information and telecommunication technology to serve organizations across Nigeria."
        />

        {/* Company overview */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
              <div>
                <SectionLabel>Company overview</SectionLabel>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl">
                  A dependable technology partner for the infrastructure behind daily work.
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-mute">
                  <p>
                    IBASE works across networking, connectivity, telecommunications and information
                    technology infrastructure. Its practice is built to support customers through
                    design, implementation and continuous technical assistance — from initial
                    planning to post-deployment support.
                  </p>
                  <p>
                    That breadth allows projects to be considered as complete environments: the
                    physical cabling, wireless and satellite links, network design, servers, voice
                    communications and structured support process that help an organization stay
                    connected and operational.
                  </p>
                  <p>
                    The company serves government agencies, educational institutions,
                    telecommunications providers, financial services organizations, hospitality
                    businesses and large enterprises across Nigeria, operating from its base in
                    Kaduna.
                  </p>
                </div>
              </div>
              <aside className="border-l border-ink/8 pl-10">
                <SectionLabel>At a glance</SectionLabel>
                <dl className="mt-6 divide-y divide-ink/8">
                  {[
                    { label: "Established", value: company.established },
                    { label: "Registration", value: `RC ${company.rc}` },
                    { label: "Headquarters", value: "Kaduna, Nigeria" },
                    { label: "Service areas", value: String(services.length) },
                    { label: "Coverage", value: "Nationwide" },
                  ].map(({ label, value }) => (
                    <div key={label} className="py-4">
                      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-mute">
                        {label}
                      </dt>
                      <dd className="mt-1.5 font-display text-[22px] font-semibold tracking-tight text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* Company timeline */}
        <section className="bg-mist">
          <div className="section-container py-24 sm:py-32">
            <SectionLabel>Company timeline</SectionLabel>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                {
                  year: "2012",
                  heading: "Establishment",
                  body: "IBASE Technologies Ltd is registered as a limited company and begins professional operations in Kaduna, Nigeria.",
                  accent: true,
                },
                {
                  year: "Project record",
                  heading: "Sector experience",
                  body: "The company profile records work across government, education, telecommunications, infrastructure and financial services environments.",
                  accent: false,
                },
                {
                  year: "Ongoing",
                  heading: "Continuous support",
                  body: "Technical support and support agreements remain active parts of the company's stated service approach and client engagement.",
                  accent: false,
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className={`border-t-2 pt-7 ${item.accent ? "border-accent-brand" : "border-ink/15"}`}
                >
                  <p
                    className={`font-display text-3xl font-semibold tracking-tight ${
                      item.accent ? "text-ink" : "text-mute"
                    }`}
                  >
                    {item.year}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services summary */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="mb-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <SectionLabel>Services</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  What IBASE delivers
                </h2>
              </div>
              <p className="max-w-[58ch] text-[15px] leading-relaxed text-mute">
                {services.length} defined service areas covering connectivity, network engineering,
                infrastructure and ongoing technical support.
              </p>
            </div>
            <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex items-start gap-4 border-t border-ink/8 py-5"
                >
                  <span className="w-9 shrink-0 font-display text-[12px] font-medium text-accent-brand/70">
                    {service.number}
                  </span>
                  <span className="text-[14.5px] font-medium leading-snug text-ink transition-colors duration-200 group-hover:text-accent-brand">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-mist">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Approach</SectionLabel>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl">
                  How IBASE works with organizations
                </h2>
              </div>
              <div className="divide-y divide-ink/8">
                {[
                  {
                    title: "Consultancy first",
                    body: "Engagements begin with a structured understanding of the operating environment, requirements and constraints.",
                  },
                  {
                    title: "End-to-end delivery",
                    body: "Design, supply, installation, configuration and commissioning are handled as a single coordinated engagement.",
                  },
                  {
                    title: "Structured support",
                    body: "A monitored support process and tiered support agreements provide continuity beyond the initial project.",
                  },
                  {
                    title: "Long-term relationship",
                    body: "Project experience across government, education and commercial sectors reflects sustained client relationships.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
                  >
                    <h3 className="font-display text-[15.5px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="max-w-[52ch] text-sm leading-relaxed text-mute">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project record */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Project history</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Work referenced in the company profile
                </h2>
              </div>
              <p className="max-w-[54ch] text-[15px] leading-relaxed text-mute">
                A selection of organizations served, presented factually from the company record.
                Every project is approached as a complete environment, not a discrete install.
              </p>
            </div>
            <div className="divide-y divide-ink/8 border-y border-ink/8">
              {projects.slice(0, 6).map((project) => (
                <div key={project.client} className="flex flex-wrap items-center gap-4 py-5">
                  <span className="flex flex-1 items-center gap-3 min-w-0 font-display text-[15.5px] font-semibold tracking-tight text-ink">
                    <Building2 className="size-4 shrink-0 text-mute/50" />
                    {project.client}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-mute">
                    <MapPin className="size-3.5 text-mute/50" /> {project.location}
                  </span>
                  <span className="border border-ink/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
                    {project.sector}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
            >
              View all projects
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
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
