"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import SteelPlate from "@/components/ui/SteelPlate";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-word",
          { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.09 },
          "-=0.4",
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
        .from(".hero-cta", { opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.6")
        .from(".hero-meta", { opacity: 0, duration: 1 }, "-=0.8")
        .from(
          ".hero-disc",
          { scale: 0.6, opacity: 0, rotate: -25, duration: 1.4, ease: "power3.out" },
          0.2,
        );

      gsap.to(".hero-disc", {
        yPercent: 22,
        rotate: 24,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-headline", {
        yPercent: -14,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Steel plate centerpiece with embossed logo */}
      <div className="pointer-events-none absolute right-[-16%] top-1/2 -translate-y-1/2 sm:right-[-6%] md:right-[3%]">
        <div className="hero-disc relative h-[64vw] max-h-[660px] min-h-[300px] w-[64vw] min-w-[300px] max-w-[660px]">
          <SteelPlate className="absolute inset-0 h-full w-full [filter:drop-shadow(0_30px_45px_rgba(20,25,30,0.22))]" />
          <div
            className="plate-logo absolute left-1/2 top-1/2 h-[27%] w-[27%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
        </div>
      </div>

      {/* Vertical meta */}
      <div className="hero-meta absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
        <span
          className="eyebrow block"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          28.66°N · 77.16°E — Wazirpur, New Delhi
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <p className="hero-eyebrow eyebrow mb-6">B2B Stainless Steel Manufacturer</p>

        <h1 className="hero-headline font-display display-xl max-w-[16ch] font-light">
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Steel,</span>{" "}
            <span className="hero-word inline-block italic">engineered</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">since</span>{" "}
            <span className="hero-word steel-text inline-block">1981.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-md text-base leading-relaxed text-steel-600 md:text-lg">
          Four decades of precision stainless steel — cookware, serveware,
          storage and thalis — manufactured in Delhi for wholesale, retail and
          export partners worldwide.
        </p>

        <div
          className="mt-10"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="#enquiry"
            className="hero-cta group rounded-full bg-ink text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              height: "54px",
              padding: "0 1.75rem",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Become a Partner
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#products"
            className="hero-cta rounded-full text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              height: "54px",
              padding: "0 1.75rem",
              flexShrink: 0,
              whiteSpace: "nowrap",
              border: "1px solid var(--line-strong)",
            }}
          >
            View the Range
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-steel-400">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-[var(--line-strong)]" />
      </div>
    </section>
  );
}
