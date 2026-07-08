import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { brand, links } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OZ Event Services for quotes and coordination—call or WhatsApp, email us, or visit our Enugu office.",
};

export default function ContactPage() {
  return (
    <div className="bg-oz-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-oz-gold">
            CONTACT
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get a fast quote and a professional plan.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Share your date, venue, and guest size. We’ll recommend the right
            security and hospitality coverage and respond quickly.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-oz-surface p-8">
              <h2 className="text-xl font-semibold text-white">
                Business Information
              </h2>

              <div className="mt-6 grid gap-4 text-sm text-white/75">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white/90">Email</p>
                    <a className="hover:text-white" href={links.mailto}>
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white/90">
                      Phone / WhatsApp
                    </p>
                    <a className="hover:text-white" href={links.tel}>
                      {brand.phone}
                    </a>
                    <p className="mt-1">
                      <a className="hover:text-white" href={links.whatsapp}>
                        WhatsApp us for a quote
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white/90">Office</p>
                    <p className="whitespace-pre-line text-white/70">
                      {brand.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-oz-gold-soft text-oz-gold ring-1 ring-oz-gold/20">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white/90">RC</p>
                    <p className="text-white/70">{brand.rc}</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <a
                  href={links.tel}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-oz-gold" aria-hidden="true" />
                  Click to Call
                </a>
                <a
                  href={links.whatsapp}
                  className="inline-flex items-center justify-center rounded-full bg-oz-gold px-5 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
                >
                  WhatsApp Us
                </a>
                <a
                  href={links.mailto}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Email Us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-oz-surface p-8">
              <h2 className="text-xl font-semibold text-white">Contact Form</h2>
              <p className="mt-2 text-sm leading-7 text-white/72">
                Fill this out and we’ll open WhatsApp with a ready-to-send
                message so you can get a fast response.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <section className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-oz-surface">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Google Maps
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Map integration placeholder. We can embed the official map
                  pin here once your Google Business profile location is
                  confirmed.
                </p>
                <p className="mt-4 whitespace-pre-line text-sm text-white/70">
                  {brand.address}
                </p>
              </div>
              <div className="relative min-h-[240px] bg-black/30">
                <div className="absolute inset-0 grid place-items-center p-8 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                    <p className="text-sm font-semibold text-white/90">
                      Map Placeholder
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      Embed Google Map here for the Enugu office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

