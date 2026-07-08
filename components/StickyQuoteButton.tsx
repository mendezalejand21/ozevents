"use client";

import Link from "next/link";

export function StickyQuoteButton() {
  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <Link
        href="/contact"
        className="rounded-full bg-oz-gold px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_-22px_rgba(212,175,55,0.7)] transition hover:-translate-y-0.5 hover:bg-oz-gold-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oz-gold focus-visible:ring-offset-2 focus-visible:ring-offset-oz-bg"
        aria-label="Request a quote"
      >
        Request Quote
      </Link>
    </div>
  );
}

