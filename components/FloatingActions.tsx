"use client";

import { MessageCircle, Phone } from "lucide-react";
import { links } from "@/lib/brand";

export function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 md:bottom-4">
      <a
        href={links.whatsapp}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-oz-gold px-4 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_-22px_rgba(212,175,55,0.7)] transition hover:-translate-y-0.5 hover:bg-oz-gold-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oz-gold focus-visible:ring-offset-2 focus-visible:ring-offset-oz-bg motion-safe:animate-[pulse_2.6s_ease-in-out_infinite]"
        aria-label="Request a quote on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>

      <a
        href={links.tel}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.75)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-oz-bg sm:hidden"
        aria-label="Call OZ Event Services"
      >
        <Phone className="h-5 w-5 text-oz-gold" aria-hidden="true" />
        Call
      </a>
    </div>
  );
}

