"use client";

/**
 * The single personalized "island" on the PDP.
 *
 * Everything around it (name, description, image, specs) is static, cacheable
 * shell. This component owns the fixed-height region where the customer's net
 * price, availability, and Add-to-Cart hydrate after first paint — with a
 * skeleton reserving the space to prevent CLS (front_end.md §5).
 *
 * It also demonstrates the defensive fallbacks from issues.md §2.
 */
import { Button } from "@design_components/ui";
import { useState } from "react";
import { Skeleton } from "./Skeleton";
import { usePrice } from "./usePrice";

function formatCurrency(amount: number, currency: string): string {
	return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
		amount,
	);
}

interface PriceAndCartProps {
	sku: string;
	listPrice: { amount: number; currency: string };
}

export function PriceAndCart({ sku, listPrice }: PriceAndCartProps) {
	// Mocked auth toggle so the demo can show the gated → priced transition.
	// In production this comes from the BFF session cookie, not local state.
	const [authed, setAuthed] = useState(false);
	const { data, isPending, isError } = usePrice(sku, authed);

	const canAddToCart = !isPending && !isError && data?.inStock === true;

	return (
		<section
			aria-label="Pricing and availability"
			className="rounded-lg border border-border bg-surface p-6"
		>
			{/* Public MSRP — part of the cacheable shell, shown to everyone. */}
			<p className="text-sm text-foreground/60">List price</p>
			<p className="text-lg text-foreground/80 line-through">
				{formatCurrency(listPrice.amount, listPrice.currency)}
			</p>

			{/* Personalized region. min-h reserves the box → no layout shift. */}
			<div className="mt-4 min-h-24">
				{isPending ? (
					<div className="space-y-2">
						<Skeleton className="h-4 w-24" />
						<Skeleton className="h-9 w-40" />
						<Skeleton className="h-4 w-32" />
					</div>
				) : isError ? (
					// issues.md §2: degrade safely, never crash the page.
					<div role="alert" className="text-sm text-foreground/70">
						<p className="font-medium text-foreground">
							Pricing temporarily unavailable
						</p>
						<p>Please refresh or contact sales for a quote.</p>
					</div>
				) : data?.requiresAuth ? (
					<div>
						<p className="text-sm text-foreground/70">
							Sign in to see your contract price.
						</p>
						<Button
							variant="secondary"
							className="mt-2"
							onPress={() => setAuthed(true)}
						>
							Log in to see price
						</Button>
					</div>
				) : (
					<div>
						<p className="text-sm text-foreground/60">Your price</p>
						<p className="text-3xl font-semibold text-foreground">
							{data?.netPrice != null && data.currency
								? formatCurrency(data.netPrice, data.currency)
								: "—"}
						</p>
						<p className="mt-1 text-sm">
							{!data?.availabilityKnown ? (
								// Avoid false "Out of Stock" → protect the sale.
								<span className="text-warning">
									Inventory status temporarily unavailable
								</span>
							) : data.inStock ? (
								<span className="text-success">In stock</span>
							) : (
								<span className="text-foreground/60">
									Backordered — contact sales for lead time
								</span>
							)}
						</p>
					</div>
				)}
			</div>

			<Button
				variant="primary"
				className="mt-6 w-full"
				isDisabled={!canAddToCart}
			>
				Add to cart
			</Button>
			{!canAddToCart && !isPending && (
				<p className="mt-2 text-center text-xs text-foreground/50">
					{isError
						? "Add to cart is unavailable while pricing is down."
						: data?.requiresAuth
							? "Sign in to purchase."
							: "Currently unavailable."}
				</p>
			)}
		</section>
	);
}
