"use client";

import type { ReactNode } from "react";
import { FloatingActions } from "@/components/FloatingActions";
import { MobileActionBar } from "@/components/MobileActionBar";
import { QuoteBanner } from "@/components/QuoteBanner";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { PageTransition } from "@/components/motion/PageTransition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">
        <PageTransition>{children}</PageTransition>
      </main>
      <QuoteBanner />
      <SiteFooter />
      <FloatingActions />
      <StickyQuoteButton />
      <MobileActionBar />
    </>
  );
}

