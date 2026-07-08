"use client";

import { MessageCircle, Phone } from "lucide-react";
import { links } from "@/lib/brand";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-oz-bg/92 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-3 py-3">
        <a
          href={links.tel}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
        >
          <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={links.whatsapp}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-oz-gold px-3 py-3 text-xs font-semibold text-black hover:bg-oz-gold-2"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

