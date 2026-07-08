"use client";

import { useEffect, useMemo, useRef } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const testimonials = [
  {
    name: "Mrs. Adaeze N.",
    event: "Wedding Planner (Enugu, Enugu)",
    quote:
      "OZ Event Services brought calm control from the gate to the main hall. Guests were guided properly, entry stayed organized, and the couple enjoyed their day without stress.",
  },
  {
    name: "Pastor Chinedu O.",
    event: "Church Convention (Anambra)",
    quote:
      "Their team was professional, respectful, and alert. Crowd movement was smooth, and we felt confident throughout the program. Communication was excellent before and during the event.",
  },
  {
    name: "Ngozi A.",
    event: "Private Birthday Event (Abuja, FCT)",
    quote:
      "We needed door control and a professional presence. They handled the guest list firmly but politely, and the entire venue felt safer and more organized.",
  },
  {
    name: "Corporate Admin, Enugu",
    event: "Corporate Launch (Lagos)",
    quote:
      "They understood our schedule, VIP movement, and the image we wanted. The team looked sharp, coordinated well with our staff, and the event ran smoothly.",
  },
  {
    name: "Mr. Ibrahim S.",
    event: "Conference Security (Kano)",
    quote:
      "Very organized team. They controlled entry calmly and kept the venue secure without disturbing attendees. Communication was clear from planning to execution.",
  },
  {
    name: "Mrs. Ifeoma O.",
    event: "Traditional Wedding (Imo)",
    quote:
      "They handled family entrances, seating flow, and crowd control with respect. Everything felt premium and well coordinated.",
  },
  {
    name: "Event Lead, Port Harcourt",
    event: "Corporate Dinner (Rivers)",
    quote:
      "Professional appearance, punctual arrival, and steady coordination. Our VIP movement was smooth and guests felt comfortable.",
  },
  {
    name: "Mrs. Kemi A.",
    event: "Private Celebration (Oyo)",
    quote:
      "Door control was firm but polite. No drama at the gate and the whole venue stayed orderly all night.",
  },
  {
    name: "Church Admin Team",
    event: "Youth Program (Delta)",
    quote:
      "They managed crowd movement and entry checks with patience. The program stayed focused and the environment felt safe.",
  },
  {
    name: "Mr. Samuel E.",
    event: "Product Launch (Edo)",
    quote:
      "They aligned with our schedule, controlled access zones, and supported ushers well. It was clean and professional.",
  },
  {
    name: "Mrs. Aisha M.",
    event: "Wedding Reception (Kaduna)",
    quote:
      "Good coordination and respectful approach. Guests were guided properly and the event stayed calm.",
  },
  {
    name: "Mr. Uche K.",
    event: "Outdoor Concert (Abia)",
    quote:
      "Strong crowd control and clear positioning. They kept entrances moving and handled issues early before they escalated.",
  },
  {
    name: "Corporate HR, Abuja",
    event: "Staff End‑of‑Year Party (FCT)",
    quote:
      "We needed a professional presence, not intimidation. OZ delivered calm control and great communication throughout.",
  },
  {
    name: "Mrs. Zainab O.",
    event: "Family Event (Kwara)",
    quote:
      "They were polite, alert, and well presented. Entry stayed organized and the venue felt secure.",
  },
  {
    name: "Mr. Tunde A.",
    event: "Club Door Control (Lagos)",
    quote:
      "Firm door control with respect. Guest list was handled properly and the entrance stayed smooth even during peak time.",
  },
  {
    name: "Mrs. Grace N.",
    event: "Naming Ceremony (Enugu)",
    quote:
      "Very neat team. They helped with seating flow and kept the environment calm. We were happy with the professionalism.",
  },
  {
    name: "Mr. Chuks I.",
    event: "Community Meeting (Ebonyi)",
    quote:
      "They managed entry points and crowd movement. No confusion, no unnecessary tension—just clean coordination.",
  },
  {
    name: "Mrs. Bisi O.",
    event: "Wedding Planner (Ogun)",
    quote:
      "They supported the ushers, handled gate control, and kept the flow steady. The couple had peace of mind.",
  },
  {
    name: "Mr. Peter A.",
    event: "VIP Escort (Cross River)",
    quote:
      "Discreet and professional. Movement was smooth and there was no crowd pressure around our guest.",
  },
  {
    name: "Mrs. Halima A.",
    event: "Religious Program (Nasarawa)",
    quote:
      "They were respectful and coordinated with our team. The program ran without disruptions.",
  },
  {
    name: "Event Coordinator, Jos",
    event: "Conference & Exhibition (Plateau)",
    quote:
      "Strong access control and calm coordination across multiple entry points. Very reliable team.",
  },
  {
    name: "Mrs. Seyi K.",
    event: "Private Party (Osun)",
    quote:
      "They kept the venue organized and handled guest list checks politely. Highly professional.",
  },
  {
    name: "Mr. Yusuf A.",
    event: "Public Gathering (Katsina)",
    quote:
      "Good discipline and clear positioning. They prevented congestion and kept the space controlled.",
  },
  {
    name: "Mrs. Nneka E.",
    event: "Wedding Reception (Anambra)",
    quote:
      "Guests were guided well and key moments were protected from crowding. The team looked sharp and coordinated.",
  },
  {
    name: "Mr. Daniel O.",
    event: "Corporate Meeting (Ondo)",
    quote:
      "Professional staff, clear communication, and smooth entry control. Exactly what we needed.",
  },
  {
    name: "Mrs. Fatima S.",
    event: "Family Ceremony (Sokoto)",
    quote:
      "They were calm, respectful, and alert. The event stayed safe and organized from start to finish.",
  },
  {
    name: "Mr. Emmanuel A.",
    event: "School Event (Benue)",
    quote:
      "Great coordination with organizers and steady crowd control. Parents and guests felt comfortable.",
  },
  {
    name: "Mrs. Rita O.",
    event: "Birthday Event (Bayelsa)",
    quote:
      "Door control was handled professionally and politely. No overcrowding and no disorder.",
  },
  {
    name: "Mr. Nura A.",
    event: "Community Program (Borno)",
    quote:
      "They kept entrances controlled and handled issues early. The team remained disciplined throughout.",
  },
  {
    name: "Mrs. Esther U.",
    event: "Wedding Planner (Akwa Ibom)",
    quote:
      "Very supportive team. They coordinated well with ushers and ensured a calm, premium guest experience.",
  },
  {
    name: "Mr. Segun A.",
    event: "Corporate Launch (Ekiti)",
    quote:
      "Professional appearance and reliable communication. The event stayed on schedule and controlled.",
  },
  {
    name: "Mrs. Mariam B.",
    event: "Private Gathering (Niger)",
    quote:
      "They were punctual and respectful. The environment felt secure and the entry flow stayed smooth.",
  },
  {
    name: "Mr. Kingsley C.",
    event: "Public Show (Kogi)",
    quote:
      "Strong perimeter awareness and crowd flow management. Very effective without causing tension.",
  },
  {
    name: "Mrs. Helen I.",
    event: "Church Anniversary (Enugu)",
    quote:
      "They coordinated entry and movement with respect. Our guests felt safe and the program stayed focused.",
  },
  {
    name: "Mr. Adekunle T.",
    event: "Corporate Dinner (Lagos)",
    quote:
      "VIP movement was smooth and the team looked sharp. They communicated clearly and stayed coordinated.",
  },
  {
    name: "Mrs. Olivia C.",
    event: "Traditional Ceremony (Anambra)",
    quote:
      "They protected the key moments and controlled crowd pressure. Everything felt organized and premium.",
  },
  {
    name: "Mr. Sani Y.",
    event: "Conference Security (Bauchi)",
    quote:
      "Professional team with clear coordination. Entry was controlled and attendees were comfortable.",
  },
  {
    name: "Mrs. Vivian A.",
    event: "Private Party (Rivers)",
    quote:
      "They kept the venue orderly and handled the gate properly. Very respectful approach.",
  },
  {
    name: "Mr. Joseph N.",
    event: "Corporate Event (Enugu)",
    quote:
      "They understood our flow and supported our staff. Calm control, good communication, and punctual deployment.",
  },
  {
    name: "Mrs. Hauwa M.",
    event: "Family Celebration (Gombe)",
    quote:
      "Everything was organized. They kept guests comfortable and maintained control without stress.",
  },
  {
    name: "Mr. Collins O.",
    event: "Outdoor Event (Abuja, FCT)",
    quote:
      "Good crowd flow management and clear positioning. We felt confident throughout the event.",
  },
  {
    name: "Mrs. Temilade A.",
    event: "Wedding Reception (Ogun)",
    quote:
      "The team supported seating flow and kept entrances calm. Great professionalism and presentation.",
  },
  {
    name: "Event Organizer, Ibadan",
    event: "Community Concert (Oyo)",
    quote:
      "They kept entrances moving and reduced congestion. Issues were handled early and professionally.",
  },
  {
    name: "Mrs. Blessing E.",
    event: "Naming Ceremony (Edo)",
    quote:
      "Guests were guided properly and the environment stayed calm. Very neat and professional team.",
  },
  {
    name: "Mr. Haruna A.",
    event: "Religious Program (Jigawa)",
    quote:
      "Respectful, disciplined team. They managed the crowd well and kept the venue controlled.",
  },
  {
    name: "Mrs. Janet O.",
    event: "Corporate Training (Lagos)",
    quote:
      "Entry checks were smooth and the venue stayed secure. Communication was reliable and timely.",
  },
  {
    name: "Mr. Francis U.",
    event: "Private Event (Imo)",
    quote:
      "They handled gate control and kept things orderly. Great service and professional appearance.",
  },
  {
    name: "Mrs. Queen A.",
    event: "Wedding Planner (Delta)",
    quote:
      "They coordinated well with the MC and ushers. Guests were seated smoothly and key moments were protected.",
  },
  {
    name: "Mr. Musa A.",
    event: "VIP Escort (Zamfara)",
    quote:
      "Discreet and professional. They kept crowd pressure away and movement stayed smooth.",
  },
  {
    name: "Mrs. Chioma E.",
    event: "Church Program (Abia)",
    quote:
      "Calm control and good coordination. Our guests felt safe and the program stayed organized.",
  },
] as const;

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const interval = window.setInterval(() => {
      const first = el.querySelector<HTMLElement>("[data-slide]");
      if (!first) return;
      const slideWidth = first.offsetWidth;
      if (!slideWidth) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth - 2;
      const nextLeft = Math.min(el.scrollLeft + (slideWidth + 16), maxScrollLeft);

      if (el.scrollLeft >= maxScrollLeft) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: nextLeft, behavior: "smooth" });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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
              data-slide
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

