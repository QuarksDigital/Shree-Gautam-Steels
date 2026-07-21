"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const STEPS = [
  {
    n: "01",
    title: "Raw Steel",
    body: "Food-grade 304 and 202 stainless coils, sourced to spec and verified for composition before a single sheet is cut.",
    chips: ["304 / 202 grade", "Verified composition", "Certified coils"],
  },
  {
    n: "02",
    title: "Forming",
    body: "Deep-draw presses and spinning lathes shape each vessel — consistent gauge, true circles, clean rims.",
    chips: ["Deep-draw press", "Precision spinning", "True-circle rims"],
  },
  {
    n: "03",
    title: "Triply Bonding",
    body: "An aluminium core is impact-bonded between two steel layers for even, edge-to-edge heat with no hot spots.",
    chips: ["Aluminium core", "Impact-bonded", "Even heat"],
  },
  {
    n: "04",
    title: "Finishing",
    body: "Mirror and matte finishes are polished by hand and machine to a uniform, export-grade sheen.",
    chips: ["Mirror polish", "Matte options", "Export-grade"],
  },
  {
    n: "05",
    title: "Quality Control",
    body: "Every batch is checked for gauge, seal, finish and dimension before it is cleared for dispatch.",
    chips: ["Gauge check", "Seal test", "Batch cleared"],
  },
];

export default function CraftStory() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const el = track.current;
      if (!el) return;
      const maxScroll = () => el.scrollWidth - window.innerWidth;

      const tween = gsap.to(el, {
        x: () => -maxScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          pin: true,
          scrub: 1,
          // 1.15x makes the horizontal glide a touch slower than the scroll.
          end: () => "+=" + maxScroll() * 1.15,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".craft-panel").forEach((panel: HTMLElement) => {
        const inner = panel.querySelector(".craft-inner");
        if (!inner) return;
        gsap.from(inner, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tween,
            start: "left 78%",
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="craft" ref={root} className="relative overflow-hidden bg-ink text-paper">
      <div
        ref={track}
        className="flex flex-col md:h-[100svh] md:w-max md:flex-row md:flex-nowrap"
      >
        {/* Intro */}
        <div className="craft-panel flex min-h-[60svh] w-full flex-col justify-center px-6 md:h-full md:w-[52vw] md:max-w-[680px] md:flex-shrink-0 md:pl-20 md:pr-10">
          <div className="craft-inner max-w-xl">
            <p className="eyebrow mb-6 text-steel-400">The Process</p>
            <h2 className="font-display display-lg font-light">
              From coil to <span className="italic">craft</span>.
            </h2>
            <p className="mt-6 max-w-md text-steel-300">
              We are not a trading house. Every product is formed, bonded,
              finished and inspected under one roof — the reason our partners
              trust our consistency at scale.
            </p>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-steel-500">
              Five stages, one roof →
            </p>
          </div>
        </div>

        {/* Steps */}
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="craft-panel relative flex min-h-[60svh] w-full flex-col justify-center border-t border-white/10 px-6 md:h-full md:w-[62vw] md:max-w-[860px] md:flex-shrink-0 md:border-l md:border-t-0 md:px-16"
          >
            <div className="craft-inner grid w-full gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <span className="font-display text-6xl font-light text-steel-600 md:text-8xl">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-3xl font-light md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-steel-300">{s.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-steel-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="steel-surface sheen-sweep relative aspect-square w-full max-w-xs rounded-2xl">
                  <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                    Stage {s.n}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Closing CTA */}
        <div className="craft-panel flex min-h-[60svh] w-full flex-col justify-center border-t border-white/10 px-6 md:h-full md:w-[52vw] md:max-w-[640px] md:flex-shrink-0 md:border-l md:border-t-0 md:px-16 md:pr-20">
          <div className="craft-inner max-w-md">
            <p className="eyebrow mb-6 text-steel-400">The Result</p>
            <h2 className="font-display display-lg font-light">
              Consistency, <span className="italic">at scale</span>.
            </h2>
            <p className="mt-6 text-steel-300">
              The same process, every batch, every order — from a hundred units
              to a full container.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex h-[52px] items-center rounded-full bg-paper px-6 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore the range →
              </a>
              <a
                href="#enquiry"
                className="inline-flex h-[52px] items-center rounded-full border border-white/25 px-6 text-sm font-semibold text-paper transition-colors hover:bg-white/10"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
