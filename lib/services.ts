import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Crown,
  DoorOpen,
  Mic2,
  Music2,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export type Service = {
  slug:
    | "event-security"
    | "bodyguards"
    | "bouncers-door-control"
    | "ushers-guest-services"
    | "mc-services"
    | "dj-services"
    | "event-photography";
  title: string;
  short: string;
  icon: LucideIcon;
  includes: string[];
  forWho: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "event-security",
    title: "Event Security",
    short:
      "Calm, professional security coverage that protects guests, controls access, and keeps your program running smoothly.",
    icon: Shield,
    includes: [
      "Access control & guest screening",
      "Crowd management and perimeter monitoring",
      "Venue patrol and risk escalation",
      "Coordination with event organizers and staff",
    ],
    forWho: [
      "Weddings, ceremonies, and private parties",
      "Concerts, shows, and public events",
      "Corporate meetings and launches",
    ],
    benefits: [
      "Guests feel safe and welcomed",
      "Cleaner entry flow and stronger control",
      "Fewer disruptions during key moments",
    ],
  },
  {
    slug: "bodyguards",
    title: "Bodyguards",
    short:
      "Discreet close-protection for VIP arrivals, movements, and high-attention moments—delivered with professionalism.",
    icon: Crown,
    includes: [
      "Close protection and secure movement",
      "Route and venue safety coordination",
      "Risk awareness and crowd buffering",
      "Professional liaison with organizers",
    ],
    forWho: [
      "VIP guests and public personalities",
      "Executives and dignitaries",
      "Hosts who require close-protection coverage",
    ],
    benefits: [
      "Confident VIP arrivals and departures",
      "Reduced crowd pressure and interference",
      "A safer experience without drawing attention",
    ],
  },
  {
    slug: "bouncers-door-control",
    title: "Bouncers & Door Control",
    short:
      "Firm, respectful entry control that protects your venue, enforces guest lists, and keeps the door moving.",
    icon: DoorOpen,
    includes: [
      "Entry screening and guest list control",
      "Queue management and conflict de-escalation",
      "Wristband/ID checks (as required)",
      "Support for venue rules and access zones",
    ],
    forWho: ["Clubs and lounges", "Ticketed events", "High-traffic venues"],
    benefits: [
      "Faster, calmer entry experience",
      "Better control of access zones and capacity",
      "Reduced conflict at the gate",
    ],
  },
  {
    slug: "ushers-guest-services",
    title: "Ushers & Guest Services",
    short:
      "Premium ushering that improves guest flow, seating order, and the overall look and feel of your event.",
    icon: Users,
    includes: [
      "Guest reception and directional guidance",
      "Seating support and protocol coordination",
      "Queue, line, and entry assistance",
      "Coordination with MC and event planners",
    ],
    forWho: [
      "Weddings and ceremonies",
      "Corporate events and conferences",
      "Church and community gatherings",
    ],
    benefits: [
      "A more organized, premium guest experience",
      "Faster seating and fewer delays",
      "Support that protects the program timeline",
    ],
  },
  {
    slug: "mc-services",
    title: "MC Services",
    short:
      "Confident hosting that keeps your program on time, your transitions smooth, and your audience engaged.",
    icon: Mic2,
    includes: [
      "Event hosting and program coordination",
      "Announcements, transitions, and crowd engagement",
      "Coordination with DJs, ushers, and planners",
      "Timekeeping to protect your schedule",
    ],
    forWho: ["Weddings", "Corporate events", "Ceremonies and celebrations"],
    benefits: [
      "Better pacing and smoother transitions",
      "Clear announcements and guest direction",
      "Less stress for hosts and planners",
    ],
  },
  {
    slug: "dj-services",
    title: "DJ Services",
    short:
      "Clean, professional sound and music that matches every moment—from arrivals to high-energy celebration.",
    icon: Music2,
    includes: [
      "Music curation to match your event style",
      "Professional setup and sound checks",
      "Coordination with MC and program timing",
      "Clean transitions and guest-friendly volume control",
    ],
    forWho: ["Weddings", "Parties", "Corporate celebrations"],
    benefits: [
      "The right mood at every stage of your event",
      "Professional timing that supports your program",
      "A more memorable guest experience",
    ],
  },
  {
    slug: "event-photography",
    title: "Event Photography",
    short:
      "Professional coverage that captures key moments, guests, and details—so your event is remembered with pride.",
    icon: Camera,
    includes: [
      "Event coverage for key moments and highlights",
      "Guest and group portraits",
      "Detail shots and venue storytelling",
      "Delivery coordination after the event",
    ],
    forWho: ["Weddings", "Corporate events", "Celebrations and special moments"],
    benefits: [
      "A clean record of your best moments",
      "Professional consistency throughout the day",
      "Photos delivered with premium presentation",
    ],
  },
];

export const valueProps = [
  {
    title: "Professional Team",
    icon: Sparkles,
    body: "Well-presented personnel who protect your event’s image while maintaining calm, disciplined control.",
  },
  {
    title: "Trusted Security",
    icon: Shield,
    body: "Strong access control and coordinated positioning—built for real event environments, not theory.",
  },
  {
    title: "Customer Satisfaction",
    icon: Users,
    body: "Clear communication, punctual deployments, and a guest-first approach that protects your reputation.",
  },
  {
    title: "Fast Response",
    icon: Crown,
    body: "Quick coordination for urgent needs—because safety planning should never be delayed.",
  },
  {
    title: "Affordable Packages",
    icon: Sparkles,
    body: "Transparent pricing and flexible coverage that matches your event size and risk level.",
  },
  {
    title: "Reliable Service",
    icon: Shield,
    body: "We deploy prepared, stay coordinated, and maintain control from arrival to closing.",
  },
] as const;

