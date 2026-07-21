import { getProducts } from "@/lib/product-service";
import ProductGrid from "@/components/sections/ProductGrid";
import Reveal from "@/components/ui/Reveal";

/**
 * Server component — fetches products backend-first (logs pdtfb:1 / pdtfb:0)
 * and hands them to the interactive, filterable client grid.
 */
export default async function ProductRange() {
  const products = await getProducts();

  return (
    <section id="products" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal as="p" className="eyebrow mb-4">
              The Range
            </Reveal>
            <Reveal as="h2" className="font-display display-lg max-w-[14ch] font-light">
              A catalogue built for <span className="italic">buyers</span>.
            </Reveal>
          </div>
          <Reveal as="p" className="max-w-sm text-steel-600">
            From flagship containers to triply cookware — every line is
            available for bulk, private-label and export orders with defined
            MOQs and finish options.
          </Reveal>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
