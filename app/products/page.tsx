import { getProducts } from '@/lib/product-service';

/**
 * Temporary verification page for the product data layer.
 * Visiting /products triggers a backend-first fetch; watch the server console for
 *   pdtfb:1  (served from backend)  or  pdtfb:0  (served from fallback).
 * This page will be replaced by the designed product section in the full build.
 */
export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
        Shree Gautam Enterprises · Est. 1981
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
        Product Range
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        {products.length} products loaded. (Data-source signal is printed to the server
        console as <code>pdtfb:1</code> / <code>pdtfb:0</code>.)
      </p>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="bg-white p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                {p.category}
              </span>
              {p.featured && (
                <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-[10px] uppercase tracking-widest text-neutral-500">
                  Featured
                </span>
              )}
            </div>
            <h2 className="mt-3 text-lg font-medium text-neutral-900">{p.name}</h2>
            <p className="mt-1 text-sm text-neutral-500">{p.tagline}</p>
            <dl className="mt-4 space-y-1 text-xs text-neutral-500">
              <div className="flex justify-between gap-4">
                <dt>Material</dt>
                <dd className="text-right text-neutral-700">{p.specs.material}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>MOQ</dt>
                <dd className="text-right text-neutral-700">{p.moq} units</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </main>
  );
}
