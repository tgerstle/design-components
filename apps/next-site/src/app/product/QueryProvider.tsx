"use client";

/**
 * Local TanStack Query provider.
 *
 * Scoped to the product route so this demo is fully self-contained in one
 * folder. In the real storefront a single QueryClientProvider would live in
 * the root layout instead.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// Commerce price/availability is correctness-sensitive:
						// keep the stale window short (front_end.md §6).
						staleTime: 30_000,
						// TanStack applies exponential backoff between retries
						// (issues.md §2: resilience to brief SAP blips).
						retry: 2,
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
