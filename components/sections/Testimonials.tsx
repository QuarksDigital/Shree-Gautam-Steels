import Reveal from "@/components/ui/Reveal";

/** Placeholder testimonials — swap for real distributor/retailer quotes. */
const QUOTES = [
  {
    quote:
      "Consistency is what keeps us with Shree Gautam. Ten years of orders and the gauge and finish never drift.",
    author: "Wholesale Distributor",
    location: "Delhi NCR",
  },
  {
    quote:
      "They handled our private-label run end to end — stamping, packaging, dispatch. Zero rejections on delivery.",
    author: "Retail Brand Partner",
    location: "Maharashtra",
  },
  {
    quote:
      "Export documentation and packaging were spot on. The container cleared without a single query.",
    author: "Export Buyer",
    location: "Gulf Region",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-[var(--line)] bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal as="p" className="eyebrow mb-4">
          Trusted By The Trade
        </Reveal>
        <Reveal
          as="h2"
          className="font-display display-lg mb-16 max-w-[18ch] font-light"
        >
          Relationships measured in <span className="italic">decades</span>.
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between bg-paper p-8 md:p-10">
                <blockquote className="font-display text-xl font-light leading-snug md:text-2xl">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-semibold">{q.author}</span>
                  <span className="block text-steel-500">{q.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
