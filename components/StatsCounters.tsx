"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Stat = { label: string; value: number; suffix?: string; prefix?: string };

const stats: Stat[] = [
  { value: 250, suffix: "+", label: "Events Secured" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 150, suffix: "+", label: "Professional Personnel" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function formatNumber(n: number) {
  return n.toLocaleString("en-NG");
}

function useInViewOnce<T extends Element>(rootMargin = "-20% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { root: null, threshold: 0.2, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView } as const;
}

function AnimatedNumber({
  target,
  suffix,
  prefix,
  play,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  play: boolean;
}) {
  const [value, setValue] = useState(0);

  const targetValue = useMemo(() => target, [target]);

  useEffect(() => {
    if (!play) return;
    let raf = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * targetValue));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, targetValue]);

  return (
    <span className="tabular-nums">
      {prefix ?? ""}
      {formatNumber(value)}
      {suffix ?? ""}
    </span>
  );
}

export function StatsCounters() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Numbers that reflect confidence.
        </h2>
        <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-white/72">
          Behind every booking is one goal: a safe, organized event that feels
          premium from the gate to the closing moment.
        </p>
      </Reveal>

      <div ref={ref} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => (
          <Reveal key={s.label} delay={0.03 * idx}>
            <div className="rounded-2xl border border-white/10 bg-oz-surface p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]">
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <AnimatedNumber
                  target={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  play={inView}
                />
              </p>
              <p className="mt-2 text-sm font-semibold tracking-wide text-white/65">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

