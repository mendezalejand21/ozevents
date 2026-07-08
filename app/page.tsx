import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HeroBackground } from "@/components/motion/HeroBackground";
import { brand, links } from "@/lib/brand";
import { services, valueProps } from "@/lib/services";
import { StatsCounters } from "@/components/StatsCounters";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional event security and hospitality services in Enugu—trained guards, ushers, bodyguards, bouncers, MC/DJ services and event photography.",
};

export default function Home() {
  return (
    <div className="bg-oz-bg text-oz-text">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <HeroBackground />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80">
                  <span className="h-2 w-2 rounded-full bg-oz-gold" />
                  {brand.tagline.toUpperCase()}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Professional Event Security & Hospitality Services
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  From private gatherings to large public events, OZ Event
                  Services provides trained security personnel, professional
                  ushers, experienced bodyguards, skilled MCs, DJs and event
                  photographers to ensure every event is safe, organized and
                  memorable.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={links.whatsapp}
                    className="inline-flex items-center justify-center rounded-full bg-oz-gold px-6 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
                  >
                    Request a Quote
                  </a>
                  <a
                    href={links.tel}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-white/70">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Calm crowd control
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Premium guest experience
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Fast coordination in Enugu
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative" delay={0.05}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-oz-gold/15 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-oz-surface p-6 shadow-[0_20px_80px_-30px_rgba(212,175,55,0.35)]">
                <Image
                  src="/logo.png"
                  alt="OZ Event Services logo"
                  width={1200}
                  height={630}
                  priority
                  className="h-auto w-full rounded-2xl border border-white/10"
                />
                <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-white/90">
                    Office (Enugu)
                  </p>
                  <p className="whitespace-pre-line text-sm leading-6 text-white/70">
                    {brand.address}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={links.mailto}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                    >
                      {brand.email}
                    </a>
                    <a
                      href={links.tel}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                    >
                      {brand.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Why clients choose OZ Event Services
            </h2>
            <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
              You don’t just need manpower—you need calm control, clear
              communication, and a team that protects your event’s image while
              keeping guests comfortable.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={0.02 * idx}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-oz-surface p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-white/90">
                          {p.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/72">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Our Services
            </h2>
            <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
              Professional coverage that improves safety, protects your schedule,
              and elevates the guest experience.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={0.02 * idx}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-oz-surface p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-white/90">
                          {s.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/72">
                          {s.short}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How We Work */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              How We Work
            </h2>
            <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
              A clear process designed to keep planning simple and delivery
              professional.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Contact Us", b: "Call or WhatsApp us and share your event date, venue, and requirements." },
              { n: "02", t: "Discuss Your Event", b: "We confirm guest size, risk profile, timing, and staffing expectations." },
              { n: "03", t: "Receive Professional Planning", b: "We recommend coverage, entry control, and coordination strategy." },
              { n: "04", t: "Successful Event Execution", b: "Our team deploys on time and stays coordinated through the full program." },
            ].map((step, idx) => (
              <Reveal key={step.n} delay={0.03 * idx}>
                <div className="h-full rounded-2xl border border-white/10 bg-oz-surface p-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-oz-gold">
                    {step.n}
                  </p>
                  <p className="mt-3 text-base font-semibold text-white/90">
                    {step.t}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {step.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-oz-surface px-6 py-12 sm:px-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 h-60 w-[40rem] -translate-x-1/2 rounded-full bg-oz-gold/12 blur-3xl" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/75">
                  {brand.tagline.toUpperCase()}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to secure your event with a professional team?
                </h2>
                <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-white/72">
                  Contact OZ Event Services today for a clear, fast quote and a
                  professional plan. We’ll help you protect your guests, your
                  venue, and your event’s reputation.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={links.whatsapp}
                    className="inline-flex items-center justify-center rounded-full bg-oz-gold px-6 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href={links.tel}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <StatsCounters />

        {/* Trust */}
        <TrustBadges />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FaqAccordion />
      </div>
    </div>
  );
}
