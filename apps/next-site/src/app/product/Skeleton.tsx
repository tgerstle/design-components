/**
 * Fixed-dimension skeleton primitive.
 *
 * The whole point (front_end.md §5): reserve the exact layout box the real
 * content will occupy so that when client-side price/availability resolves,
 * nothing shifts — keeping Cumulative Layout Shift (CLS) near zero.
 */
export function Skeleton({ className = "" }: { className?: string }) {
	return (
		<div
			aria-hidden="true"
			className={`animate-pulse rounded-md bg-surface-hover ${className}`}
		/>
	);
}
