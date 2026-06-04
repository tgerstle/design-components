"use client";

import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	type ButtonRenderProps,
} from "react-aria-components";

export interface ButtonProps extends AriaButtonProps {
	variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
	customVariant?: "hero" | "standard";
}

export const Button = ({
	children,
	variant = "primary",
	className = "",
	...props
}: ButtonProps) => {
	const baseStyles =
		"inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 rounded-md font-sans font-medium transition-colors border border-transparent focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background data-[focus-visible]:ring-primary data-[pressed]:scale-95";

	const variants = {
		primary:
			"bg-primary text-primary-foreground data-[hovered]:bg-primary-hover",
		secondary:
			"bg-secondary text-secondary-foreground data-[hovered]:bg-secondary-hover border-border",
		danger: "bg-danger text-white data-[hovered]:bg-danger/90",
		outline:
			"border border-border text-foreground data-[hovered]:bg-surface-hover",
		ghost: "bg-transparent text-foreground data-[hovered]:bg-surface-hover",
	};

	return (
		<AriaButton
			{...props}
			className={(
				renderProps: ButtonRenderProps & {
					defaultClassName: string | undefined;
				},
			) =>
				`${baseStyles} ${variants[variant]} ${typeof className === "function" ? className(renderProps) : className}`
			}
		>
			{children}
		</AriaButton>
	);
};
