/**
 * Product Detail Page (PDP) — demonstrates the decoupled data model.
 *
 * This is a React Server Component: the name, brand, description, image, and
 * specs render server-side into a globally cacheable shell (overview.md §2.1).
 * Only the <PriceAndCart /> island fetches personalized data client-side
 * (overview.md §2.2), so the cached HTML is identical for every visitor.
 *
 * JSON-LD includes the public list price + availability so the page is still
 * SEO-rich (questions.md §1.4); the customer-specific net price is layered in
 * on the client and intentionally excluded from the structured data.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { PriceAndCart } from "./PriceAndCart";
import { DEMO_PRODUCT } from "./product-data";
import { QueryProvider } from "./QueryProvider";

const product = DEMO_PRODUCT;

export const metadata: Metadata = {
	title: product.name,
	description: product.shortDescription,
	alternates: { canonical: `/product` },
	openGraph: {
		title: product.name,
		description: product.shortDescription,
		type: "website",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: product.name,
	sku: product.sku,
	brand: { "@type": "Brand", name: product.brand },
	description: product.shortDescription,
	offers: {
		"@type": "Offer",
		priceCurrency: product.listPrice.currency,
		price: product.listPrice.amount,
		availability: "https://schema.org/InStock",
	},
};

export default function ProductPage() {
	return (
		<main className="mx-auto max-w-5xl px-6 py-12">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: see above
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<nav className="mb-8 text-sm text-foreground/60">
				<Link href="/" className="hover:text-foreground">
					Home
				</Link>
				<span className="mx-2">/</span>
				<span className="text-foreground/80">{product.brand}</span>
			</nav>

			<div className="grid gap-10 md:grid-cols-2">
				{/* Image slot — fixed aspect ratio reserves space (no CLS).
				    In production this is next/image with the Cloudflare loader
				    (overview.md §4.2). */}
				<div className="aspect-square w-full overflow-hidden rounded-lg border border-border bg-surface-hover">
					<div className="flex h-full w-full items-center justify-center text-foreground/30">
						<span className="text-sm">Product image</span>
					</div>
				</div>

				<div>
					<p className="text-sm font-medium uppercase tracking-wide text-foreground/50">
						{product.brand}
					</p>
					<h1 className="mt-1 text-3xl font-semibold text-foreground">
						{product.name}
					</h1>
					<p className="mt-1 text-sm text-foreground/60">SKU: {product.sku}</p>

					<p className="mt-4 text-foreground/80">{product.shortDescription}</p>

					<div className="mt-6">
						<QueryProvider>
							<PriceAndCart sku={product.sku} listPrice={product.listPrice} />
						</QueryProvider>
					</div>
				</div>
			</div>

			<section className="mt-12">
				<h2 className="text-xl font-semibold text-foreground">Description</h2>
				<p className="mt-3 max-w-3xl text-foreground/80">
					{product.description}
				</p>
			</section>

			<section className="mt-10">
				<h2 className="text-xl font-semibold text-foreground">
					Specifications
				</h2>
				<dl className="mt-4 divide-y divide-border rounded-lg border border-border">
					{product.specs.map((spec) => (
						<div
							key={spec.label}
							className="grid grid-cols-3 gap-4 px-4 py-3 text-sm"
						>
							<dt className="font-medium text-foreground/70">{spec.label}</dt>
							<dd className="col-span-2 text-foreground">{spec.value}</dd>
						</div>
					))}
				</dl>
			</section>
		</main>
	);
}
