"use client";

import { useMemo, useRef } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const testimonials = [
  {
    name: "Mrs. Adaeze N.",
    event: "Wedding Planner (Enugu)",
    quote:
      "OZ Event Services brought calm control from the gate to the main hall. Guests were guided properly, entry stayed organized, and the couple enjoyed their day without stress.",
  },
  {
    name: "Pastor Chinedu O.",
    event: "Church Convention",
    quote:
      "Their team was professional, respectful, and alert. Crowd movement was smooth, and we felt confident throughout the program. Communication was excellent before and during the event.",
  },
  {
    name: "Ngozi A.",
    event: "Private Birthday Event",
    quote:
      "We needed door control and a professional presence. They handled the guest list firmly but politely, and the entire venue felt safer and more organized.",
  },
  {
    name: "Corporate Admin, Enugu",
    event: "Corporate Launch",
    quote:
      "They understood our schedule, VIP movement, and the image we wanted. The team looked sharp, coordinated well with our staff, and the event ran smoothly.",
  },
] as const;

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => testimonials, []);

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Testimonials
        </h2>
        <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
          Feedback from clients who needed calm control, professionalism, and
          fast coordination.
        </p>
      </Reveal>

      <div className="mt-8">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Client testimonials slider"
        >
          {items.map((t, idx) => (
            <div
              key={t.name}
              className="w-full flex-none snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]"
            >
              <Reveal delay={0.02 * idx}>
                <figure className="group flex h-full flex-col rounded-2xl border border-white/10 bg-oz-surface p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-1 text-oz-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-white/72">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="text-sm font-semibold text-white/90">
                      {t.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-white/60">
                      {t.event}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

