import { Button } from "@design_components/ui";
import type React from "react";

export interface HeroProps {
	title: string;
	description: string;
	primaryCtaText?: string;
	secondaryCtaText?: string;
	onPrimaryClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
	title,
	description,
	primaryCtaText,
	secondaryCtaText,
	onPrimaryClick,
}) => {
	return (
		<section className="flex flex-col items-center justify-center py-24 px-4 bg-background text-center">
			<h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-4">
				{title}
			</h1>
			<p className="text-lg md:text-xl text-foreground opacity-80 max-w-2xl mb-8">
				{description}
			</p>

			<div className="flex gap-4">
				{primaryCtaText && (
					<Button variant="primary" onClick={onPrimaryClick}>
						{primaryCtaText}
					</Button>
				)}
				{secondaryCtaText && (
					<Button variant="secondary">{secondaryCtaText}</Button>
				)}
			</div>
		</section>
	);
};
