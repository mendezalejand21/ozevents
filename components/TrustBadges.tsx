"use client";

import {
  BadgeCheck,
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const badges = [
  {
    title: "Trained Personnel",
    icon: ShieldCheck,
    body: "Disciplined teams trained for access control, crowd flow, and calm escalation.",
  },
  {
    title: "Professional Appearance",
    icon: BadgeCheck,
    body: "Well-presented personnel that protect your event’s image and guest confidence.",
  },
  {
    title: "Reliable Communication",
    icon: MessageSquareText,
    body: "Clear updates before and during the event—no surprises, no confusion.",
  },
  {
    title: "Event Planning Support",
    icon: ClipboardList,
    body: "We help define coverage points, entry control, and roles so execution is smooth.",
  },
  {
    title: "Customer Satisfaction",
    icon: Users,
    body: "A service culture built on respect, coordination, and consistent delivery.",
  },
  {
    title: "Rapid Response",
    icon: Timer,
    body: "Fast coordination when you need urgent coverage or last-minute adjustments.",
  },
] as const;

export function TrustBadges() {
  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          The trust signals clients look for
        </h2>
        <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
          When your event is on the line, you need more than manpower—you need a
          professional system that protects guests and keeps the venue under
          control.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((b, idx) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.title} delay={0.02 * idx}>
              <div className="group h-full rounded-2xl border border-white/10 bg-oz-surface p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white/90">
                      {b.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      {b.body}
                    </p>
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

