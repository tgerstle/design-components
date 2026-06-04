"use client";
import {
	OverlayArrow,
	Tooltip,
	type TooltipProps,
	TooltipTrigger,
} from "react-aria-components";

export interface SmartTooltipProps extends Omit<TooltipProps, "children"> {
	delay?: number;
	content: React.ReactNode;
	children: React.ReactElement;
}

export const SmartPopover = ({
	delay = 300,
	content,
	children,
	...props
}: SmartTooltipProps) => {
	return (
		<TooltipTrigger delay={delay}>
			{children}
			<Tooltip
				{...props}
				className={
					"bg-popover text-foreground border border-border px-3 py-2 rounded-md shadow-lg text-sm z-50 " +
					(props.className || "")
				}
			>
				<OverlayArrow>
					<svg width={8} height={8} aria-hidden="true" viewBox="0 0 8 8">
						<path
							d="M0 0 L4 4 L8 0"
							fill="var(--color-popover)"
							stroke="var(--color-border)"
							strokeWidth={1}
						/>
					</svg>
				</OverlayArrow>
				{content}
			</Tooltip>
		</TooltipTrigger>
	);
};
