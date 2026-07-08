"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ScrollProgress } from "@/components/ScrollProgress";
import { brand, links } from "@/lib/brand";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const linkClasses = useMemo(
    () =>
      "text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors",
    [],
  );

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "relative",
        "border-b border-transparent",
        "backdrop-blur supports-[backdrop-filter]:bg-oz-bg/70",
        scrolled ? "border-white/10 bg-oz-bg/70" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo priority />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClasses}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={links.tel}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/90 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-oz-bg/95 md:hidden"
          >
            <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <a
                  href={links.tel}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
                  Call Now
                </a>
              </div>
              <p className="mt-4 text-xs text-white/65">
                {brand.tagline} · RC {brand.rc}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-oz-bg">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo className="mb-4" />
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Premium event security and staffing in Enugu—built for calm, control,
            and confident delivery.
          </p>
          <p className="mt-4 text-xs text-white/55">RC {brand.rc}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/90">
            Services
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {[
              "Event Security",
              "Bodyguards",
              "Bouncers & Door Control",
              "Ushers & Guest Services",
              "MC / DJ Services",
              "Event Photography",
            ].map((s) => (
              <li key={s} className="hover:text-white">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/90">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <a className="block hover:text-white" href={links.mailto}>
              {brand.email}
            </a>
            <a className="block hover:text-white" href={links.tel}>
              {brand.phone} (Call / WhatsApp)
            </a>
            <p className="whitespace-pre-line text-white/70">{brand.address}</p>
            <p className="text-white/60">Business Hours: Mon–Sat, 8:00am–8:00pm</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white/90">
            Quick Links
          </h2>
          <nav className="mt-4 grid gap-2 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/75 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <h2 className="mt-6 text-sm font-semibold tracking-wide text-white/90">
            Social
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Instagram · Facebook · X (links coming soon)
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

