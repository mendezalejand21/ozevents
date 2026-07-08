"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ScrollProgress } from "@/components/ScrollProgress";
import { brand, links } from "@/lib/brand";

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
      <span className="text-oz-gold" aria-hidden="true">
        {children}
      </span>
      <span className="font-medium text-white/75">{label}</span>
    </span>
  );
}

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
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <Logo />
          <p className="mt-3 text-xs text-white/55">RC {brand.rc}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
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
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <SocialIcon label="Instagram">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.75 6.2a1.05 1.05 0 1 1-1.05-1.05 1.05 1.05 0 0 1 1.05 1.05z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon label="Facebook">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.6 1.6-1.6H16.7V4.8c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.8V11H6.8v3h2.5v8h4.2z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon label="X">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6 22H2.9l7.3-8.4L1 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon label="TikTok">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M16.7 5.4c.9.7 1.6 1.7 1.7 3v2.4c.8.6 1.7 1 2.6 1.2-.3.9-.8 1.7-1.6 2.3-.4.3-.7.6-1 1v6.1c0 1.3-1 2.3-2.3 2.3H8c-1.3 0-2.3-1-2.3-2.3V9.2c0-2.4 2-4.4 4.4-4.4h1.5c1.6 0 3-.6 4.1-1.8zM10.1 6.8c-1.3 0-2.4 1.1-2.4 2.4v11.2c0 .2.2.4.4.4h8.1c.2 0 .4-.2.4-.4v-6.8c0-.4.2-.8.5-1.1.3-.3.6-.6 1-.8-.4-.2-.8-.5-1.1-.8-.3-.3-.5-.7-.5-1.1V8.4c0-.8-.6-1.6-1.4-1.6-.8 0-1.4.6-1.4 1.4v1.5c0 .6-.4 1-1 1H10z"
                />
              </svg>
            </SocialIcon>
          </div>
          </div>
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

