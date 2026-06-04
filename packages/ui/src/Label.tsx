"use client";
import type React from "react";
import { Label as AriaLabel } from "react-aria-components";

export type LabelProps = React.ComponentProps<typeof AriaLabel> & {
	className?: string | ((props: Parameters<typeof AriaLabel>[0]) => string);
	children?: React.ReactNode;
};

export const Label = ({ className, ...props }: LabelProps) => {
	return (
		<AriaLabel
			{...props}
			className={
				typeof className === "function"
					? className
					: `text-sm font-medium text-foreground data-[disabled]:opacity-50 group-data-[required]:after:content-['*'] group-data-[required]:after:text-danger group-data-[required]:after:ml-0.5 ${className || ""}`
			}
		/>
	);
};
