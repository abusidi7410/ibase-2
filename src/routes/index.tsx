import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-datacenter.jpg";
import datacenterImage from "@/assets/datacenter-aisle.jpg";
import cablesImage from "@/assets/network-cables.jpg";
import { company, projects, services, industries, serviceImages, projectImageGalleries } from "@/data/company";
import { PageFrame, SectionLabel, SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IBASE Technologies | ICT Infrastructure Nigeria" },
      {
        name: "description",
        content:
          "IBASE Technologies Ltd delivers networking, connectivity, telecommunications and IT infrastructure solutions from Kaduna across Nigeria.",
      },
      { property: "og:title", content: "IBASE Technologies | ICT Infrastructure Nigeria" },
      {
        property: "og:description",
        content: "Engineering reliable technology infrastructure for organizations across Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <IndustriesSection />
        <WhyIbaseSection />
        <SupportSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}

/* ---------------------------------- HERO ---------------------------------- */

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <img
        src={heroImage}
        alt="Enterprise data centre corridor with racked server infrastructure"
        width={1600}
        height={900}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand via-brand/85 to-brand/70" />
      <div className="section-container relative flex min-h-[92vh] flex-col justify-end pb-24 pt-32">
        <div className="max-w-[680px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-brand">
            ICT · Networking · Telecommunications
          </p>
          <h1 className="reveal-delay-1 mt-7 font-display text-[40px] font-semibold leading-[1.06] tracking-tight text-brand-foreground sm:text-5xl lg:text-[62px]">
            Engineering the infrastructure behind connected business
          </h1>
          <p className="reveal-delay-2 mt-8 max-w-[54ch] text-base leading-relaxed text-brand-foreground/60 sm:text-lg">
            Professional ICT, networking, telecommunications and infrastructure solutions designed
            to keep organizations connected, secure and operational.
          </p>
          <div className="reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-brand-foreground/25 px-7 py-[15px] text-[13px] font-medium text-brand-foreground/80 transition-colors duration-200 hover:border-brand-foreground/45 hover:text-brand-foreground"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-brand-foreground/10 pt-8 text-xs text-brand-foreground/40">
            <span>Established {company.established}</span>
            <span className="h-3 w-px bg-brand-foreground/15" />
            <span>Kaduna, Nigeria</span>
            <span className="h-3 w-px bg-brand-foreground/15" />
            <span>Serving organizations nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INTRODUCTION ------------------------------ */

function IntroductionSection() {
  return (
    <section className="bg-white">
      <div className="section-container py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionLabel>The company</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-[40px] sm:leading-[1.15]">
              Technology infrastructure built around reliability, expertise and long-term support.
            </h2>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
            >
              Read about IBASE <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-6 text-base leading-relaxed text-mute">
              <p>
                Founded in {company.established}, IBASE Technologies Ltd brings together
                professionals in information and telecommunications technology to serve
                organizations across Nigeria. The company designs, deploys and supports
                infrastructure for government agencies, educational institutions, telecommunications
                providers, financial organizations and large enterprises.
              </p>
              <p>
                From physical cabling and wireless infrastructure through to network design,
                servers, voice systems and ongoing technical support — IBASE approaches technology
                as a complete, connected operating environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-8 border-t border-ink/8 pt-8">
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                  {company.established}
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
                  Established
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                  {services.length}
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
                  Service areas
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                  RC {company.rc}
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
                  Registered company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SERVICES -------------------------------- */

function ServicesSection() {
  return (
    <section className="bg-mist">
      <div className="section-container py-24 sm:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Core services</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Infrastructure, delivered end to end
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
          >
            All services
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-x-16 lg:grid-cols-[1fr_340px]">
          <div className="divide-y divide-ink/8 border-y border-ink/8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex items-baseline gap-5 py-[26px] transition-colors duration-200 hover:bg-white/70 sm:gap-8"
              >
                <span className="w-10 shrink-0 font-display text-[13px] font-medium text-accent-brand/70">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-[58ch] text-sm leading-relaxed text-mute">
                    {service.short}
                  </p>
                </div>
                <span className="hidden shrink-0 text-ink/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-brand sm:inline-block">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Featured service image */}
          <div className="relative mt-16 hidden border border-ink/8 bg-brand lg:mt-0 lg:block">
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={serviceImages["server-room"]}
                alt="Managed server and computer room infrastructure"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-brand">
                  Managed environments
                </p>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight text-brand-foreground">
                  Servers, storage and computer rooms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CAPABILITIES ------------------------------ */

function CapabilitiesSection() {
  const capabilities = [
    "Fiber Optics",
    "Structured Cabling",
    "Wired Networks",
    "Wireless Networks",
    "Network Design",
    "Point-to-Point Links",
    "VPN",
    "Firewall",
    "Routing · BGP · OSPF",
    "Bandwidth Management",
    "Server Rooms",
    "VSAT · Satellite",
    "VoIP",
    "NOC Infrastructure",
    "Telecom Power",
    "UPS Systems",
  ];

  return (
    <section className="bg-brand">
      <div className="section-container py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Engineering capabilities</SectionLabel>
            <h2 className="mt-5 max-w-[16ch] font-display text-3xl font-semibold tracking-tight text-brand-foreground sm:text-4xl">
              Engineered across the full infrastructure stack
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-0 sm:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-brand-foreground/10 py-4"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-accent-brand/70" />
                <span className="text-[13px] leading-snug text-brand-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PROJECTS -------------------------------- */

function ProjectsSection() {
  const featured = [
    {
      ...projects[0],
      image: projectImageGalleries[projects[0].slug]?.[0] ?? datacenterImage,
      summary:
        "Design and implementation of ICT infrastructure for the National Information Technology Development Agency, supporting government digital initiatives.",
    },
    {
      ...projects[1],
      image: projectImageGalleries[projects[1].slug]?.[0] ?? cablesImage,
      summary:
        "Comprehensive campus network deployment with structured cabling, wireless coverage and ongoing technical support for the university environment.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="section-container py-24 sm:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Selected projects</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A record of work across Nigerian organizations
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="space-y-24 lg:space-y-28">
          {featured.map((project, idx) => (
            <div
              key={project.client}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative aspect-[16/10] overflow-hidden border border-ink/8 bg-mist">
                <img
                  src={project.image}
                  alt={`${project.client} — ${project.sector} infrastructure project`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className={idx % 2 === 1 ? "lg:pl-8" : "lg:pr-8"}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-brand">
                  {project.sector}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {project.client}
                </h3>
                <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-mute">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-mute">
                  {project.services.map((service) => (
                    <span key={service} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-accent-brand" /> {service}
                    </span>
                  ))}
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-brand"
                >
                  View project
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining project references */}
        <div className="mt-24 divide-y divide-ink/8 border-y border-ink/8">
          {projects.slice(2, 7).map((project) => (
            <Link
              key={project.client}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group flex flex-wrap items-center gap-4 py-5"
            >
              <span className="flex-1 min-w-0 font-display text-[15.5px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-brand">
                {project.client}
              </span>
              <span className="border border-ink/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
                {project.sector}
              </span>
              <ArrowUpRight className="size-4 text-ink/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-brand" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INDUSTRIES -------------------------------- */

function IndustriesSection() {
  return (
    <section className="bg-mist">
      <div className="section-container py-24 sm:py-32">
        <SectionLabel>Sectors served</SectionLabel>
        <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Infrastructure shaped around the organization
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, idx) => (
            <div key={industry.title} className="border-l border-ink/12 pl-6">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-accent-brand">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-[17px] font-semibold tracking-tight text-ink">
                {industry.title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-mute">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- WHY IBASE -------------------------------- */

function WhyIbaseSection() {
  const pillars = [
    {
      title: "Technical Expertise",
      body: "A team of ICT professionals working across networking, connectivity, telecommunications and infrastructure disciplines.",
    },
    {
      title: "End-to-End Delivery",
      body: "Design, supply, installation and commissioning are handled as a single coordinated engagement.",
    },
    {
      title: "Post-Sale Support",
      body: "Support agreements and a monitored technical support process provide structured assistance after project completion.",
    },
    {
      title: "Long-Term Partnership",
      body: "Continuous operations since 2012 across government, education, telecom and financial sector environments.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="section-container py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <SectionLabel>Why IBASE</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl">
              Expertise, implementation and continuous support
            </h2>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-mute">
              IBASE operates as a full-lifecycle technology partner — from initial design and
              consultancy through to deployment, training and ongoing technical assistance.
            </p>
            <div className="mt-10 border border-ink/8 bg-mist/60 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-brand">
                Long-standing
              </p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                Operating since {company.established}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                RC {company.rc} · Registered in Nigeria with continuous service to public and
                private organizations.
              </p>
            </div>
          </div>
          <div className="divide-y divide-ink/8 border-y border-ink/8">
            {pillars.map((item) => (
              <div key={item.title} className="grid gap-3 py-7 sm:grid-cols-[220px_1fr] sm:gap-8">
                <h3 className="font-display text-[15.5px] font-semibold text-ink">{item.title}</h3>
                <p className="max-w-[52ch] text-sm leading-relaxed text-mute">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SUPPORT --------------------------------- */

function SupportSection() {
  return (
    <section className="bg-mist">
      <div className="section-container py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Technical support</SectionLabel>
            <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Support that stays connected to the infrastructure
            </h2>
            <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-mute">
              IBASE maintains a monitored support process with a stated response window of
              Monday–Friday, 09:00–17:00 GMT+1. Support agreements are available across
              high-availability, advanced, standard and basic tiers.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Technical Support",
                body: "Monitored request process for diagnostics and assistance.",
              },
              {
                title: "Online Technical Support",
                body: "Remote assistance across the supported environment.",
              },
              {
                title: "Support Agreements",
                body: "Structured tiers shaped around coverage requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-accent-brand/40 pt-5">
                <h3 className="font-display text-[15.5px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="sm:col-span-3">
            <Link to="/support" className="btn-primary">
              Request Technical Support <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA -------------------------------- */

function FinalCtaSection() {
  return (
    <section className="bg-brand">
      <div className="section-container py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Start a project</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-brand-foreground sm:text-4xl">
              Start a project with IBASE Technologies
            </h2>
            <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-brand-foreground/55">
              Share your requirement and the team will respond with a structured conversation about
              what you need connected, supported or delivered.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-brand-foreground/20 px-7 py-[15px] text-[13px] font-medium text-brand-foreground/70 transition-colors duration-200 hover:border-brand-foreground/40 hover:text-brand-foreground"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
