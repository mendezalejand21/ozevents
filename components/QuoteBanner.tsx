"use client";

import { Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { brand, links } from "@/lib/brand";

export function QuoteBanner() {
  return (
    <section className="border-t border-white/10 bg-oz-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-oz-surface px-6 py-10 sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 left-1/2 h-60 w-[40rem] -translate-x-1/2 rounded-full bg-oz-gold/12 blur-3xl" />
            </div>
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-white/75">
                  REQUEST A QUOTE
                </p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Get professional coverage—fast, clear, and coordinated.
                </h2>
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-7 text-white/72 sm:text-base">
                  Tell us your event date, venue, and estimated guests. We’ll
                  respond with a clear recommendation and pricing—so you can
                  book with confidence.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={links.whatsapp}
                  className="inline-flex items-center justify-center rounded-full bg-oz-gold px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-oz-gold-2"
                >
                  WhatsApp Quote
                </a>
                <a
                  href={links.tel}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
                  Call {brand.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

