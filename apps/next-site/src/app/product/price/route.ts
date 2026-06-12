/**
 * Co-located BFF endpoint: GET /product/price
 *
 * Stands in for the production Backend-For-Frontend route (issues.md §3,
 * conventionally `/api/sap/*`). In production this handler would:
 *   - read the HTTPOnly session cookie and attach the SAP OCC token,
 *   - proxy to SAP Commerce OCC v2 for customer-specific contract pricing,
 *   - run behind Cloudflare "Bypass Cache on Cookie / Authorization" rules,
 *   - never expose the SAP token to the browser.
 *
 * Here it is mocked, with artificial latency so the loading skeleton (which
 * prevents CLS while price hydrates) is actually visible in the demo.
 */
import type { NextRequest } from "next/server";

// Personalized, cookie-dependent data must never be statically cached.
export const dynamic = "force-dynamic";

export interface PriceResponse {
	/** True when the user is not authenticated → "log in to see price". */
	requiresAuth: boolean;
	/** Customer-specific net price (only present when authed). */
	netPrice?: number;
	currency?: string;
	/** Whether stock could be determined (false → show "unavailable", not OOS). */
	availabilityKnown: boolean;
	inStock?: boolean;
}

export async function GET(request: NextRequest): Promise<Response> {
	const authed = request.nextUrl.searchParams.get("authed") === "1";

	// Simulate BFF → SAP OCC round-trip latency.
	await new Promise((resolve) => setTimeout(resolve, 900));

	// Matches the observed live-site behavior: shared catalog, gated price.
	if (!authed) {
		const gated: PriceResponse = {
			requiresAuth: true,
			availabilityKnown: false,
		};
		return Response.json(gated);
	}

	const body: PriceResponse = {
		requiresAuth: false,
		netPrice: 1049.0, // mocked contract price; would come from SAP OCC
		currency: "USD",
		availabilityKnown: true,
		inStock: true,
	};
	return Response.json(body);
}
