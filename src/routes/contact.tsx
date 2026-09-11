import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Building2, Clock, Mail, Phone } from "lucide-react";

import { company, services } from "@/data/company";
import {
  PageFrame,
  PageIntro,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact IBASE Technologies | Request a Quote" },
      {
        name: "description",
        content:
          "Contact IBASE Technologies Ltd in Kaduna for networking, telecommunications, ICT infrastructure, technical support and project enquiries.",
      },
      { property: "og:title", content: "Contact IBASE Technologies | Request a Quote" },
      {
        property: "og:description",
        content: "Start a conversation about your technology infrastructure requirement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const organization = String(data.get("organization") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const location = String(data.get("location") ?? "");
    const description = String(data.get("description") ?? "");
    const contactMethod = String(data.get("contactMethod") ?? "");

    const subject = encodeURIComponent(
      `${service || "General enquiry"} — ${organization || name || "IBASE enquiry"}`,
    );
    const bodyLines = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service required: ${service || "Not specified"}`,
      `Project location: ${location}`,
      `Preferred contact method: ${contactMethod}`,
      "",
      "Project description:",
      description,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setFeedback(
      `Your email app should now open with the enquiry composed and addressed to ${company.email}. If it did not, send the same details directly to ${company.email}.`,
    );
  };

  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Start a conversation about your infrastructure."
          description="Tell IBASE what you are planning, connecting or supporting. The team is based in Kaduna and serves organizations across Nigeria."
        />

        <section className="bg-white">
          <div className="section-container py-24 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* Contact info */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-brand">
                  {company.name}
                </p>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Talk to the team.
                </h2>
                <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-mute">
                  Reach us by phone, email or using the enquiry form. We respond to all enquiries
                  through our monitored support process.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center border border-ink/10 bg-mist/60">
                      <Building2 className="size-4 text-accent-brand" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mute">
                        Address
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        {company.address[0]}
                        <br />
                        {company.address[1]}
                        <br />
                        {company.address[2]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center border border-ink/10 bg-mist/60">
                      <Phone className="size-4 text-accent-brand" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mute">
                        Phone
                      </p>
                      <div className="mt-2 space-y-1">
                        {company.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="block text-sm text-ink transition-colors duration-200 hover:text-accent-brand"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center border border-ink/10 bg-mist/60">
                      <Mail className="size-4 text-accent-brand" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mute">
                        Email
                      </p>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-2 block break-all text-sm text-ink transition-colors duration-200 hover:text-accent-brand"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center border border-ink/10 bg-mist/60">
                      <Clock className="size-4 text-accent-brand" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mute">
                        Support window
                      </p>
                      <p className="mt-2 text-sm text-ink">Monday – Friday · 09:00 – 17:00 GMT+1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="border border-ink/10 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-10">
                <form className="grid gap-7" onSubmit={handleSubmit}>
                  <div>
                    <SectionLabel>Request a Quote</SectionLabel>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                      Tell us about your requirement
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-[12.5px] font-medium text-ink">Full Name *</span>
                      <input
                        required
                        name="name"
                        className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-[12.5px] font-medium text-ink">Organization *</span>
                      <input
                        required
                        name="organization"
                        className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-[12.5px] font-medium text-ink">Email *</span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-[12.5px] font-medium text-ink">Phone</span>
                      <input
                        name="phone"
                        className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                      />
                    </label>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-[12.5px] font-medium text-ink">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-[12.5px] font-medium text-ink">Project Location</span>
                    <input
                      name="location"
                      className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[12.5px] font-medium text-ink">
                      Project Description *
                    </span>
                    <textarea
                      required
                      name="description"
                      rows={5}
                      className="resize-y border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                    />
                  </label>

                  <div className="grid gap-2">
                    <label htmlFor="contact-method" className="text-[12.5px] font-medium text-ink">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contact-method"
                      name="contactMethod"
                      className="border border-ink/12 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent-brand"
                    >
                      <option>Email</option>
                      <option>Phone</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary mt-2">
                    Send Enquiry <Check className="size-4" />
                  </button>

                  {feedback && (
                    <p className="border-l-2 border-accent-brand bg-mist/50 px-4 py-3 text-[13px] leading-relaxed text-ink">
                      {feedback}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
