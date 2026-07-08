import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { brand, links } from "@/lib/brand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OZ Event Services offerings—event security, bodyguards, door control, ushers, MC/DJ services and event photography in Enugu.",
};

export default function ServicesPage() {
  return (
    <div className="bg-oz-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-oz-gold">
            SERVICES
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Premium coverage for safety, control, and a better guest experience.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Choose what you need and we’ll handle the planning. We recommend the
            right staffing level and coordination approach for your venue, guest
            size, and program—so you get a safe, organized event without stress.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={0.03 * idx}>
                <section className="rounded-3xl border border-white/10 bg-oz-surface p-8 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06] sm:p-10">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <h2 className="text-2xl font-semibold tracking-tight text-white">
                            {s.title}
                          </h2>
                          <p className="mt-3 text-sm leading-7 text-white/72">
                            {s.short}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            What it includes
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm text-white/72">
                            {s.includes.map((x) => (
                              <li key={x} className="flex gap-2">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 flex-none text-oz-gold"
                                  aria-hidden="true"
                                />
                                <span>{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            Best for
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm text-white/72">
                            {s.forWho.map((x) => (
                              <li key={x} className="flex gap-2">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 flex-none text-oz-gold"
                                  aria-hidden="true"
                                />
                                <span>{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm font-semibold text-white/90">
                          Benefits
                        </p>
                        <ul className="mt-3 grid gap-2 text-sm text-white/72 md:grid-cols-2">
                          {s.benefits.map((x) => (
                            <li key={x} className="flex gap-2">
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 flex-none text-oz-gold"
                                aria-hidden="true"
                              />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/30 p-6">
                      <p className="text-sm font-semibold text-white/90">
                        Request this service
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        Tell us your date, venue, and guest size. We’ll respond
                        quickly with a clear plan and quote.
                      </p>
                      <div className="mt-5 flex flex-col gap-3">
                        <a
                          href={`${links.whatsapp}?text=${encodeURIComponent(
                            `Hello ${brand.name}, I need ${s.title} for my event. Please share pricing and availability.`,
                          )}`}
                          className="inline-flex items-center justify-center rounded-full bg-oz-gold px-5 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
                        >
                          WhatsApp Quote
                        </a>
                        <a
                          href={links.tel}
                          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                        >
                          Call Now
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                        >
                          Use Contact Form
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

