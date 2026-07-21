import Reveal from "@/components/ui/Reveal";

const VALUES = [
  {
    n: "01",
    title: "OEM & Private Label",
    body: "Manufacture under your brand — custom stamping, laser marking, bespoke packaging and finish specs.",
  },
  {
    n: "02",
    title: "Manufacturing Capacity",
    body: "In-house pressing, spinning, bonding and polishing lines built to hold lead times on volume orders.",
  },
  {
    n: "03",
    title: "Consistent Quality",
    body: "Batch-level QC on gauge, seal, dimension and finish. What you approve is what ships — every time.",
  },
  {
    n: "04",
    title: "Bulk & Wholesale Pricing",
    body: "Transparent, tiered pricing structured for distributors, retailers and institutional buyers.",
  },
  {
    n: "05",
    title: "Export-Ready",
    body: "Documentation, compliant packaging and freight coordination for smooth cross-border dispatch.",
  },
  {
    n: "06",
    title: "Since 1981",
    body: "Four decades of relationships. A supplier your business can plan around for the next four.",
  },
];

export default function WhyPartner() {
  return (
    <section id="partner" className="border-y border-[var(--line)] bg-[var(--paper-2)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <Reveal as="p" className="eyebrow mb-4">
            Why Partner With Us
          </Reveal>
          <Reveal as="h2" className="font-display display-lg font-light">
            A manufacturer, <span className="italic">not a middleman</span>.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={(i % 3) * 90}>
              <div className="group h-full bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-10">
                <span className="font-display text-2xl font-light text-steel-400 transition-colors group-hover:text-steel-500">
                  {v.n}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500 transition-colors group-hover:text-steel-300">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
