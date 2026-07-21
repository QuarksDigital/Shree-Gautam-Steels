"use client";

import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";

type Filter = "All" | ProductCategory;

export default function ProductGrid({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  // Only show category chips that actually have products
  const categories = useMemo<Filter[]>(() => {
    const present = PRODUCT_CATEGORIES.filter((c) =>
      products.some((p) => p.category === c),
    );
    return ["All", ...present];
  }, [products]);

  const visible = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [products, filter],
  );

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              filter === c
                ? "border-ink bg-ink text-paper"
                : "border-[var(--line-strong)] text-ink hover:bg-ink/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 80}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
