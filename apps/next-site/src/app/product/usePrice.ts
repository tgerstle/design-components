"use client";

import { useQuery } from "@tanstack/react-query";
import type { PriceResponse } from "./price/route";

/**
 * Client-side, per-session price fetch (Real-Time Transactional Loop,
 * overview.md §2.2). Routes through the BFF (`/product/price`), never
 * directly to SAP. Deduped + cached by TanStack Query to reduce load on
 * the BFF and, downstream, SAP OCC (front_end.md §6).
 */
export function usePrice(sku: string, authed: boolean) {
	return useQuery<PriceResponse>({
		queryKey: ["price", sku, authed],
		queryFn: async ({ signal }) => {
			const res = await fetch(
				`/product/price?sku=${encodeURIComponent(sku)}&authed=${authed ? 1 : 0}`,
				{ signal },
			);
			if (!res.ok) {
				throw new Error(`Price request failed: ${res.status}`);
			}
			return (await res.json()) as PriceResponse;
		},
	});
}
