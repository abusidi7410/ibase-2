import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { company, services } from "@/data/company";
import logo from "@/assets/logo.svg";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and mega menu on route change
  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/industries", label: "Industries" },
    { to: "/support", label: "Support" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-ink/10 bg-paper"
      }`}
    >
      <div className="section-container">
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex h-[52px] w-auto items-center" aria-label={company.name}>
            <img
              src={logo}
              alt={company.name}
              className="logo-spin h-full w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {navLinks.map((item) =>
              item.to === "/services" ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    to={item.to}
                    activeProps={{ className: "!text-accent-brand" }}
                    className={`relative inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors duration-200 hover:text-ink ${
                      megaOpen ? "text-ink" : "text-mute"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {megaOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-5">
                      <div className="border border-brand-foreground/15 bg-brand shadow-2xl shadow-black/40">
                        <div className="flex items-center justify-between border-b border-brand-foreground/10 px-8 py-5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-foreground/50">
                            Services
                          </p>
                          <Link
                            to="/services"
                            className="group inline-flex items-center gap-2 text-[13px] font-medium text-accent-brand transition-colors duration-200 hover:text-brand-foreground"
                          >
                            All services
                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 px-8 py-6">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              to="/services/$slug"
                              params={{ slug: service.slug }}
                              className="group flex items-baseline gap-4 py-3"
                            >
                              <span className="w-6 shrink-0 font-display text-[11px] font-medium text-accent-brand/60">
                                {service.number}
                              </span>
                              <span>
                                <span className="block text-[13.5px] font-semibold tracking-tight text-brand-foreground/80 transition-colors duration-200 group-hover:text-brand-foreground">
                                  {service.title}
                                </span>
                                <span className="mt-0.5 block text-[12px] leading-snug text-brand-foreground/40">
                                  {service.short}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-brand-foreground/10 px-8 py-4">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent-brand transition-colors duration-200 hover:text-brand-foreground"
                          >
                            Not sure where to start? Discuss a requirement{" "}
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "!text-accent-brand" }}
                  className="relative text-[13.5px] font-medium text-mute transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 bg-accent-brand px-5 py-2.5 text-[12.5px] font-semibold text-brand transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Request a Quote <ArrowUpRight className="size-3.5" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center border border-ink/15 text-ink transition-colors hover:border-ink/30 lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <nav className="section-container py-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map(({ to, label }) =>
                to === "/services" ? (
                  <li key={to}>
                    <div className="flex items-center justify-between border-b border-ink/8 py-3.5">
                      <Link
                        to={to}
                        className="text-[15px] font-medium text-ink/85 transition-colors hover:text-ink"
                      >
                        {label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-label={
                          mobileServicesOpen ? "Hide services list" : "Show services list"
                        }
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="grid size-9 place-items-center text-ink/40 transition-colors hover:text-ink"
                      >
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <ul className="mb-2 ml-4 border-l border-ink/10 pl-4">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to="/services/$slug"
                              params={{ slug: service.slug }}
                              className="flex items-baseline gap-3 py-2 text-[13.5px] text-ink/70 transition-colors hover:text-ink"
                            >
                              <span className="font-display text-[10.5px] font-medium text-accent-brand/70">
                                {service.number}
                              </span>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={to}>
                    <Link
                      to={to}
                      className="flex items-center justify-between border-b border-ink/8 py-3.5 text-[15px] font-medium text-ink/85 transition-colors hover:text-ink"
                    >
                      {label}
                      <ArrowRight className="size-4 text-ink/25" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 bg-accent-brand px-4 py-3.5 text-[13.5px] font-semibold text-brand"
              >
                Request a Quote <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-foreground/8 bg-brand">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display text-[16px] font-semibold tracking-tight text-brand-foreground"
            >
              {company.shortName}
            </Link>
            <p className="mt-5 max-w-[32ch] text-[14px] leading-relaxed text-brand-foreground/50">
              ICT infrastructure, networking, telecommunications and technology solutions for
              organizations across Nigeria.
            </p>
            <p className="mt-6 text-xs text-brand-foreground/30">
              Established {company.established} · RC {company.rc}
            </p>
          </div>

          {/* Services */}
          <FooterLinks title="Services">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }}>
                {service.title}
              </Link>
            ))}
            <Link
              to="/services"
              className="!text-accent-brand/80 font-medium transition-colors hover:!text-accent-brand"
            >
              All Services →
            </Link>
          </FooterLinks>

          {/* Company */}
          <FooterLinks title="Company">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact</Link>
          </FooterLinks>

          {/* Contact */}
          <div>
            <p className="footer-label">Contact</p>
            <ul className="mt-5 space-y-3.5 text-[14px] text-brand-foreground/55">
              <li className="flex items-start gap-2.5 leading-relaxed">
                <Building2 className="mt-0.5 size-4 shrink-0 text-brand-foreground/30" />
                <span>
                  {company.address[0]}
                  <br />
                  {company.address[1]}
                  <br />
                  {company.address[2]}
                </span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-brand-foreground/30" />
                  <a
                    href={`tel:${phone}`}
                    className="transition-colors duration-200 hover:text-brand-foreground"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-brand-foreground/30" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors duration-200 hover:text-brand-foreground"
                >
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-1.5 border border-brand-foreground/20 px-5 py-2.5 text-[12.5px] font-medium text-brand-foreground transition-colors duration-200 hover:border-brand-foreground/35"
            >
              Request a Quote <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-brand-foreground/8 pt-6">
          <p className="text-xs text-brand-foreground/30">
            © {new Date().getFullYear()} {company.name}
          </p>
          <p className="text-xs text-brand-foreground/30">{company.website}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="footer-label">{title}</p>
      <ul className="mt-5 space-y-2.5">
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <li
              key={index}
              className="text-[14px] text-brand-foreground/50 transition-colors duration-200 hover:text-brand-foreground"
            >
              {child}
            </li>
          ))
        ) : (
          <li className="text-[14px] text-brand-foreground/50 transition-colors duration-200 hover:text-brand-foreground">
            {children}
          </li>
        )}
      </ul>
    </div>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-white text-ink">{children}</div>;
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-brand">
      <div className="section-container py-24 sm:py-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-brand">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-[24ch] font-display text-[34px] font-semibold leading-[1.12] tracking-tight text-brand-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-7 max-w-[56ch] text-base leading-relaxed text-brand-foreground/60">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}
