import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

const NUMBERS = [
  { to: 44, suffix: "+", label: "Years in manufacturing" },
  { to: 50, suffix: "+", label: "Active product lines" },
  { to: 100, suffix: "K+", label: "Units capacity / month" },
  { to: 12, suffix: "+", label: "States & export markets" },
];

export default function Numbers() {
  return (
    <section id="numbers" className="bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal as="p" className="eyebrow mb-4 text-steel-400">
          By the Numbers
        </Reveal>
        <Reveal
          as="h2"
          className="font-display display-lg mb-16 max-w-[16ch] font-light"
        >
          Scale you can <span className="italic">build on</span>.
        </Reveal>

        <div className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="border-l border-white/15 pl-6">
              <div className="font-display text-5xl font-light md:text-7xl">
                <CountUp to={n.to} suffix={n.suffix} />
              </div>
              <p className="mt-3 max-w-[18ch] text-xs uppercase tracking-[0.16em] text-steel-400">
                {n.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-md text-sm text-steel-500">
          Figures are indicative of current capacity. Share your requirement and
          we will confirm exact lead times and pricing for your order.
        </p>
      </div>
    </section>
  );
}
