"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

/**
 * Premium product card. Loads the real product photo and gracefully falls back
 * to a brushed-steel placeholder if the image can't load — so the grid always
 * looks intentional.
 */
export default function ProductCard({ product }: { product: Product }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <article
      data-cursor
      className="group relative flex flex-col overflow-hidden border border-[var(--line)] bg-paper transition-colors duration-500 hover:bg-white"
    >
      {/* Visual */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="steel-surface sheen-sweep flex h-full w-full items-center justify-center">
            <span className="font-display text-6xl font-light text-white/60 mix-blend-overlay">
              {product.name.charAt(0)}
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink backdrop-blur">
          {product.category}
        </span>

        {/* Spec reveal */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-5 text-paper backdrop-blur transition-transform duration-500 group-hover:translate-y-0">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <dt className="text-steel-400">Material</dt>
              <dd className="mt-0.5">{product.specs.material}</dd>
            </div>
            <div>
              <dt className="text-steel-400">MOQ</dt>
              <dd className="mt-0.5">{product.moq} units</dd>
            </div>
            {product.specs.capacity && (
              <div>
                <dt className="text-steel-400">Capacity</dt>
                <dd className="mt-0.5">{product.specs.capacity}</dd>
              </div>
            )}
            {product.specs.finish && (
              <div>
                <dt className="text-steel-400">Finish</dt>
                <dd className="mt-0.5">{product.specs.finish}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* Caption */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-normal">{product.name}</h3>
          {product.price && (
            <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-ink">
              {product.price}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-steel-500">{product.tagline}</p>
        <a
          href="#enquiry"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
        >
          Enquire
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
