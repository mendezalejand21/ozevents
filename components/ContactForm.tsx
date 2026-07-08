"use client";

import { useMemo, useState } from "react";
import { brand, links } from "@/lib/brand";

type FormState = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guests: string;
  servicesRequired: string[];
  notes: string;
};

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Church Program",
  "Birthday / Private Party",
  "Concert / Public Event",
  "Other",
] as const;

const services = [
  "Event Security",
  "Bodyguards",
  "Bouncers & Door Control",
  "Ushers & Guest Services",
  "MC Services",
  "DJ Services",
  "Event Photography",
] as const;

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    eventDate: "",
    eventLocation: "",
    guests: "",
    servicesRequired: ["Event Security"],
    notes: "",
  });

  const whatsappUrl = useMemo(() => {
    const selectedServices =
      state.servicesRequired.length > 0
        ? state.servicesRequired
        : ["[Services required]"];

    const text = [
      `Hello ${brand.name},`,
      ``,
      `I would like to request a quotation for an event.`,
      ``,
      `Name: ${state.name || "[Name]"}`,
      `Phone / WhatsApp: ${state.phone || "[Phone]"}`,
      `Email: ${state.email || "[Email]"}`,
      ``,
      `Event Type: ${state.eventType || "[Event type]"}`,
      `Event Date: ${state.eventDate || "[Event date]"}`,
      `Event Location: ${state.eventLocation || "[Event location]"}`,
      `Estimated Guests: ${state.guests || "[Number of guests]"}`,
      ``,
      `Services Required:`,
      ...selectedServices.map((s) => `- ${s}`),
      ``,
      `Additional Notes: ${state.notes || "[Additional notes]"}`,
    ].join("\n");

    return `${links.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [state]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-white/85" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            required
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label
            className="text-sm font-semibold text-white/85"
            htmlFor="phone"
          >
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            required
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
            placeholder="0813 750 9682"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-white/85" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
            placeholder={brand.email}
            autoComplete="email"
          />
        </div>
        <div>
          <label
            className="text-sm font-semibold text-white/85"
            htmlFor="eventType"
          >
            Event Type
          </label>
          <select
            id="eventType"
            value={state.eventType}
            onChange={(e) => setState((s) => ({ ...s, eventType: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
          >
            {eventTypes.map((t) => (
              <option key={t} value={t} className="bg-oz-bg text-white">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            className="text-sm font-semibold text-white/85"
            htmlFor="eventDate"
          >
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={state.eventDate}
            onChange={(e) =>
              setState((s) => ({ ...s, eventDate: e.target.value }))
            }
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
          />
        </div>
        <div>
          <label
            className="text-sm font-semibold text-white/85"
            htmlFor="guests"
          >
            Estimated Number of Guests
          </label>
          <input
            id="guests"
            inputMode="numeric"
            value={state.guests}
            onChange={(e) => setState((s) => ({ ...s, guests: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
            placeholder="e.g., 150"
          />
        </div>
      </div>

      <div>
        <label
          className="text-sm font-semibold text-white/85"
          htmlFor="eventLocation"
        >
          Event Location
        </label>
        <input
          id="eventLocation"
          value={state.eventLocation}
          onChange={(e) =>
            setState((s) => ({ ...s, eventLocation: e.target.value }))
          }
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
          placeholder="Venue address (Enugu or nearby)"
        />
      </div>

      <fieldset className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <legend className="px-1 text-sm font-semibold text-white/85">
          Services Required
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map((s) => {
            const id = `svc-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            const checked = state.servicesRequired.includes(s);
            return (
              <label
                key={s}
                htmlFor={id}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10"
              >
                <input
                  id={id}
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#d4af37]"
                  checked={checked}
                  onChange={(e) => {
                    setState((prev) => {
                      const next = new Set(prev.servicesRequired);
                      if (e.target.checked) next.add(s);
                      else next.delete(s);
                      return { ...prev, servicesRequired: Array.from(next) };
                    });
                  }}
                />
                <span className="font-semibold text-white/90">{s}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-oz-gold px-6 py-3 text-sm font-semibold text-black hover:bg-oz-gold-2"
        >
          Request Quote on WhatsApp
        </button>
        <a
          href={links.tel}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
        >
          Call Now
        </a>
      </div>

      <div>
        <label className="text-sm font-semibold text-white/85" htmlFor="notes">
          Additional Notes
        </label>
        <textarea
          id="notes"
          value={state.notes}
          onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
          className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-oz-gold/50"
          placeholder="Any VIP movement, special entrances, security concerns, or timing details we should plan for?"
        />
      </div>

      <p className="text-xs leading-6 text-white/55">
        Prefer email? Send details to{" "}
        <a className="text-white/80 hover:text-white" href={links.mailto}>
          {brand.email}
        </a>
        .
      </p>
    </form>
  );
}

