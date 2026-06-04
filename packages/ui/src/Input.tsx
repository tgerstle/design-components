"use client";
import { Input as AriaInput, type InputProps } from "react-aria-components";

export const Input = (props: InputProps) => {
	return (
		<AriaInput
			{...props}
			className={
				"w-full border border-border bg-background px-3 py-2 text-foreground rounded focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary data-[invalid]:border-danger data-[invalid]:ring-danger data-[disabled]:opacity-50 " +
				(props.className || "")
			}
		/>
	);
};
