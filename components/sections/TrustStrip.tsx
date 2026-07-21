import CountUp from "@/components/ui/CountUp";

const STATS = [
  { to: 1981, label: "Established", isYear: true },
  { to: 44, label: "Years of manufacturing", suffix: "+" },
  { to: 50, label: "Product lines", suffix: "+" },
  { to: 12, label: "States & export markets", suffix: "+" },
];

const MARQUEE = [
  "OEM & Private Label",
  "Bulk Supply",
  "304 / 202 Grade Steel",
  "Export Documentation",
  "In-house QC",
  "Custom Finishes",
  "Triply Bonding",
  "Consistent Gauge",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-paper px-6 py-10 md:px-10 md:py-14">
            <div className="font-display text-4xl font-light md:text-6xl">
              <CountUp
                to={s.to}
                suffix={s.suffix ?? ""}
                duration={s.isYear ? 1200 : 1800}
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-steel-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Capability marquee */}
      <div className="overflow-hidden border-t border-[var(--line)] py-5">
        <div className="marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="mx-8 flex items-center gap-8 whitespace-nowrap text-sm font-medium text-steel-500"
            >
              {m}
              <span className="h-1 w-1 rounded-full bg-steel-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
