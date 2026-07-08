import type { Metadata } from "next";
import { Award, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { brand, links } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OZ Event Services—our mission, vision and values, and why clients trust our event security and hospitality services in Enugu.",
};

export default function AboutPage() {
  return (
    <div className="bg-oz-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-oz-gold">
            ABOUT {brand.name.toUpperCase()}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A premium standard for event safety and guest experience.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            OZ Event Services provides professional event security and
            hospitality staffing in Enugu. We combine calm crowd control,
            disciplined coordination, and well-presented personnel—so your
            event feels safe, organized, and memorable from arrival to closing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-oz-surface p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white">Mission</h2>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    To deliver reliable, professional security and hospitality
                    services that protect people, venues, and reputations—while
                    keeping guests comfortable and events running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-white/10 bg-oz-surface p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white">Vision</h2>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    To be the first choice for premium event security and
                    hospitality staffing in Enugu—recognized for disciplined
                    teams, excellent coordination, and trusted delivery.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="mt-12 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Core values that guide every deployment
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Professionalism",
              icon: ShieldCheck,
              body: "We show up prepared, well-presented, and focused—maintaining clear control without unnecessary confrontation.",
            },
            {
              title: "Service",
              icon: HeartHandshake,
              body: "We protect your event’s reputation by supporting guests and organizers with respect, clarity, and calm coordination.",
            },
          ].map((v, idx) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={0.05 * idx}>
                <div className="h-full rounded-2xl border border-white/10 bg-oz-surface p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white/90">
                        {v.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-white/10 bg-oz-surface px-6 py-10 sm:px-10">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Why clients trust OZ Event Services
            </h2>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-white/72 md:grid-cols-2">
              <p>
                We prioritize visible professionalism: well-groomed personnel,
                clear communication, and disciplined positioning that improves
                safety without interrupting the guest experience.
              </p>
              <p>
                We focus on coordination: entry control, crowd flow, and
                escalation readiness—so your program stays on schedule and your
                venue stays protected.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.whatsapp}
                className="inline-flex items-center justify-center rounded-full bg-oz-gold px-6 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
              >
                Request a Quote
              </a>
              <a
                href={links.tel}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

