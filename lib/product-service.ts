import type { Product, ProductCategory } from '@/types/product';
import { products as fallbackProducts } from '@/lib/products';

/**
 * Product data layer.
 *
 * Source of truth is the backend API. If the API is unreachable (or returns a
 * bad response), we transparently fall back to the bundled `products.ts` so the
 * site never renders empty.
 *
 * Data-source signal (printed to the console / server logs):
 *   pdtfb:1  → served from the BACKEND
 *   pdtfb:0  → served from the FRONTEND fallback
 * (pdtfb = "product data from backend")
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

/** Milliseconds before a backend request is abandoned in favour of the fallback. */
const REQUEST_TIMEOUT_MS = 4000;

const logSource = (fromBackend: boolean): void => {
  // eslint-disable-next-line no-console
  console.log(`pdtfb:${fromBackend ? 1 : 0}`);
};

interface ApiListResponse {
  success: boolean;
  count: number;
  data: Product[];
}

interface ApiItemResponse {
  success: boolean;
  data: Product;
}

async function fetchFromBackend<T>(path: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      signal: controller.signal,
      // Always get fresh catalogue data; adjust to `next: { revalidate }` to cache.
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`Backend responded ${res.status}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

/** Get all products (optionally filtered by category). Backend-first, fallback-safe. */
export async function getProducts(category?: ProductCategory): Promise<Product[]> {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  try {
    const json = await fetchFromBackend<ApiListResponse>(`/products${query}`);
    logSource(true);
    return json.data;
  } catch {
    logSource(false);
    return category
      ? fallbackProducts.filter((p) => p.category === category)
      : fallbackProducts;
  }
}

/** Get featured products for hero/highlight sections. */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const json = await fetchFromBackend<ApiListResponse>('/products?featured=true');
    logSource(true);
    return json.data;
  } catch {
    logSource(false);
    return fallbackProducts.filter((p) => p.featured);
  }
}

/** Get a single product by slug. Returns null if not found anywhere. */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const json = await fetchFromBackend<ApiItemResponse>(
      `/products/${encodeURIComponent(slug)}`,
    );
    logSource(true);
    return json.data;
  } catch {
    logSource(false);
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  }
}
