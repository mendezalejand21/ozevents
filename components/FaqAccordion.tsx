"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const faq = [
  {
    q: "What types of events do you secure?",
    a: "We provide coverage for weddings, ceremonies, corporate events, church programs, private parties, concerts, and public gatherings. We’ll recommend the right staffing level based on your guest size, venue, and event flow.",
  },
  {
    q: "How early should I book?",
    a: "For best availability, book as early as possible—especially for weekends and peak dates. If your event is soon, contact us immediately; we respond fast and can often support urgent requests.",
  },
  {
    q: "Do you provide armed or unarmed security?",
    a: "We primarily provide professional unarmed event security and door control. If an event requires additional security measures, we can discuss coordination options during planning.",
  },
  {
    q: "Can I hire only ushers or photographers?",
    a: "Yes. You can request a single service (ushers, photography, MC, DJ) or combine multiple services. We’ll tailor the coverage to your exact event needs.",
  },
  {
    q: "Do you travel outside Enugu?",
    a: "Yes—depending on the event type, date, and logistics. Share your location and requirements and we’ll confirm availability and planning details.",
  },
  {
    q: "How do I request a quotation?",
    a: "Use WhatsApp for the fastest response, or call us directly. Share your event date, venue, estimated guests, and the services you need—we’ll reply with a clear plan and quote.",
  },
] as const;

export function FaqAccordion() {
  const groupId = useId();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const items = useMemo(() => faq, []);

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
          Clear answers to help you plan quickly and confidently.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-3">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          const buttonId = `${groupId}-btn-${idx}`;
          const panelId = `${groupId}-panel-${idx}`;

          return (
            <Reveal key={item.q} delay={0.02 * idx}>
              <div className="rounded-2xl border border-white/10 bg-oz-surface">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
                >
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 flex-none text-oz-gold transition-transform",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0">
                    <div className="px-6 pb-6 text-sm leading-7 text-white/72">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

