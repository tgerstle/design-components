/**
 * Static product "shell" data.
 *
 * In production this is the cacheable content from the Static Content Loop
 * (overview.md §2.1): editorial copy from Payload CMS + flattened catalog
 * metadata replicated from SAP. It is identical for every visitor, so the
 * rendered PDP shell can be cached globally at the edge.
 *
 * Crucially, it contains NO customer-specific net price — that is fetched
 * client-side via the Real-Time Transactional Loop (see usePrice.ts).
 */

export interface ProductSpec {
	label: string;
	value: string;
}

export interface Product {
	slug: string;
	sku: string;
	name: string;
	brand: string;
	shortDescription: string;
	description: string;
	/** Public MSRP / list price shown to everyone, incl. anonymous + SEO. */
	listPrice: { amount: number; currency: string };
	specs: ProductSpec[];
}

export const DEMO_PRODUCT: Product = {
	slug: "commercial-stand-mixer-7qt",
	sku: "MIX-7QT-PRO",
	name: "Pro Commercial Stand Mixer — 7 Qt",
	brand: "Acme Kitchen Co.",
	shortDescription:
		"Heavy-duty 7-quart planetary mixer built for high-volume commercial kitchens.",
	description:
		"A workhorse planetary stand mixer engineered for bakeries and commercial kitchens. The 1.3 HP motor and all-metal gearbox handle dense doughs without bogging down, while the bowl-lift design keeps heavy batches stable through long mixing cycles.",
	listPrice: { amount: 1299.0, currency: "USD" },
	specs: [
		{ label: "Capacity", value: "7 qt (6.6 L)" },
		{ label: "Motor", value: "1.3 HP, all-metal gearbox" },
		{ label: "Speeds", value: "10 + pulse" },
		{ label: "Footprint", value: '14.5" W × 17" D × 22" H' },
		{ label: "Warranty", value: "2-year commercial" },
	],
};
