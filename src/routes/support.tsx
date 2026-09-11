import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";

import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Technical Support | IBASE Technologies" },
      {
        name: "description",
        content:
          "Learn about the IBASE Technologies technical support process, stated support window and support agreement options.",
      },
      { property: "og:title", content: "Technical Support | IBASE Technologies" },
      {
        property: "og:description",
        content:
          "Technical assistance, support request monitoring and support agreements from IBASE Technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

const supportChannels = [
  {
    slug: "technical-support",
    number: "01",
    name: "Technical Support",
    description:
      "Monitored request process covering diagnostics, technical assistance and resolution of issues across the supported infrastructure.",
  },
  {
    slug: "online-technical-support",
    number: "02",
    name: "Online Technical Support",
    description:
      "Remote assistance delivered over network access, allowing faster triage and resolution on supported environments.",
  },
  {
    slug: "support-agreement",
    number: "03",
    name: "Support Agreements",
    description:
      "Structured coverage arranged around availability, hardware and software needs, with scope agreed per engagement.",
  },
];

const agreementTiers = [
  {
    name: "High-Availability Support",
    description:
      "Structured for environments where network downtime has direct operational consequences. Scope and commercial terms available on request.",
  },
  {
    name: "Advanced Support",
    description:
      "Comprehensive technical coverage for complex infrastructure environments. Scope and commercial terms available on request.",
  },
  {
    name: "Standard Support",
    description:
      "Reliable scheduled support for organizations with moderate infrastructure complexity. Scope and commercial terms available on request.",
  },
  {
    name: "Basic Hardware Support",
    description:
      "Hardware-focused support for physical network and server infrastructure. Scope and commercial terms available on request.",
  },
  {
    name: "Basic Software Support",
    description:
      "Software and configuration support for network and system environments. Scope and commercial terms available on request.",
  },
];

function SupportPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Technical support"
          title="Support that stays connected to the infrastructure."
          description="IBASE describes a monitored support process for service and support requests, with technical assistance shaped around the customer environment."
        />

        {/* Support approach */}
        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
              {/* Narrative */}
              <div>
                <SectionLabel>Support approach</SectionLabel>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl">
                  A clear path from request to response.
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-mute">
                  <p>
                    The company profile states that service and support requests can be monitored
                    through IBASE's support process. The stated response approach is usually within
                    one working day during the policy window below.
                  </p>
                  <p>
                    This is information from the company's stated support policy, not a universal
                    guaranteed SLA. Exact response, coverage and escalation terms should be agreed
                    for the relevant engagement.
                  </p>
                </div>

                {/* Support channels */}
                <div className="mt-12 divide-y divide-ink/8 border-y border-ink/8">
                  {supportChannels.map((channel) => (
                    <div
                      key={channel.number}
                      className="grid gap-3 py-6 sm:grid-cols-[52px_1fr] sm:gap-8"
                    >
                      <span className="font-display text-[12.5px] font-medium text-accent-brand/70">
                        {channel.number}
                      </span>
                      <div>
                        <h3 className="font-display text-[16px] font-semibold tracking-tight text-ink">
                          <Link
                            to="/services/$slug"
                            params={{ slug: channel.slug }}
                            className="transition-colors duration-200 hover:text-accent-brand"
                          >
                            {channel.name}
                          </Link>
                        </h3>
                        <p className="mt-1.5 max-w-[58ch] text-sm leading-relaxed text-mute">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link to="/contact" className="btn-primary">
                    Request Technical Support <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Policy card */}
              <aside>
                <div className="sticky top-28 border border-ink/10 bg-mist/70 p-8">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-accent-brand" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-brand">
                      Policy window
                    </p>
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                    Monday – Friday
                  </p>
                  <p className="mt-1.5 text-[15px] text-mute">09:00 – 17:00 GMT+1</p>
                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="text-[14px] font-medium text-ink">
                      Usually within one working day
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-mute">
                      As stated in the company profile.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-ink/10 pt-6">
                    <p className="text-[13px] leading-relaxed text-mute">
                      Support can be delivered remotely or on-site depending on the nature of the
                      issue and the agreement in place.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Support agreements */}
        <section className="bg-mist">
          <div className="section-container py-24 sm:py-32">
            <SectionLabel>Support agreements</SectionLabel>
            <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Structured support for every environment
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-mute">
              IBASE offers a range of support agreement types. Scope and commercial terms should be
              discussed directly based on the environment and required level of coverage.
            </p>

            <div className="mt-14 divide-y divide-ink/8 border-y border-ink/8">
              {agreementTiers.map((tier, idx) => (
                <div
                  key={tier.name}
                  className="grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:gap-8 sm:items-start"
                >
                  <span className="font-display text-[12.5px] font-medium text-accent-brand/60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink">
                      {tier.name}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-mute">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/contact" className="btn-primary">
                Discuss support options <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
