import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { industries } from "@/data/company";
import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | IBASE Technologies Nigeria" },
      {
        name: "description",
        content:
          "Technology infrastructure perspectives for government, education, telecom, finance, hospitality, SMEs and large organizations in Nigeria.",
      },
      { property: "og:title", content: "Industries | IBASE Technologies Nigeria" },
      {
        property: "og:description",
        content: "Technology infrastructure for different organizational environments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Industries"
          title="Technology infrastructure shaped around the environment."
          description="Organizations operate differently. IBASE brings the same engineering discipline to different settings — from public institutions and campuses to financial, hospitality and technology environments."
        />

        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-x-16 lg:grid-cols-[1fr_320px]">
              <div className="divide-y divide-ink/8 border-y border-ink/8">
                {industries.map((industry, idx) => (
                  <div
                    key={industry.title}
                    className="grid gap-5 py-10 sm:grid-cols-[64px_1fr] sm:gap-10 sm:items-start"
                  >
                    <span className="pt-1 font-display text-[13px] font-medium text-accent-brand/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                        {industry.title}
                      </h2>
                      <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-mute">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="mt-16 self-start border border-ink/8 bg-mist/60 p-7 lg:mt-0">
                <SectionLabel>Shared discipline</SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-mute">
                  The same structured engineering approach — understanding the environment, then
                  designing, installing and supporting — applies across every sector IBASE serves.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Context block */}
        <section className="bg-mist">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>Cross-sector capability</SectionLabel>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl">
                  The same engineering discipline across every environment
                </h2>
              </div>
              <div className="space-y-6 text-[15px] leading-relaxed text-mute">
                <p>
                  Whether serving a government ministry, a university campus, a financial
                  institution or a telecommunications provider, IBASE applies the same structured
                  approach to understanding the operating environment before recommending solutions.
                </p>
                <p>
                  Infrastructure decisions made for one sector inform the quality of work delivered
                  in others. That cross-sector experience is part of what IBASE brings to each
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand">
          <div className="section-container flex flex-wrap items-center justify-between gap-8 py-20">
            <div>
              <SectionLabel>Start with context</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-foreground">
                Bring your operating environment to the conversation.
              </h2>
            </div>
            <Link to="/contact" className="btn-accent">
              Talk to IBASE <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
