"use client";
import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	FieldError,
	ListBox,
	ListBoxItem,
	Popover,
	Text,
} from "react-aria-components";
import { Input } from "./Input";
import { Label } from "./Label";

export interface ComboboxItemProps {
	id: string;
	label: string;
	description?: string;
}

export interface ComboboxProps<T extends object>
	extends Omit<AriaComboBoxProps<T>, "children"> {
	label: string;
	items: T[];
	description?: string;
	errorMessage?: string;
}

export const Combobox = <T extends ComboboxItemProps>({
	label,
	items,
	description,
	errorMessage,
	...props
}: ComboboxProps<T>) => {
	return (
		<AriaComboBox items={items} {...props} className="flex flex-col gap-1">
			<Label>{label}</Label>
			<div className="relative">
				<Input />
			</div>
			{description && (
				<Text slot="description" className="text-xs text-foreground mt-1">
					{description}
				</Text>
			)}
			<FieldError className="text-xs text-danger mt-1">
				{errorMessage}
			</FieldError>
			<Popover className="z-50 bg-popover border border-border shadow-lg rounded-md mt-1 overflow-hidden">
				<ListBox className="p-1 outline-none">
					{(item: {
						id: string | number;
						textValue?: string;
						label?: string;
						name?: string;
					}) => (
						<ListBoxItem
							id={item.id}
							className="cursor-pointer px-3 py-2 text-sm text-foreground data-[hovered]:bg-surface-hover data-[focused]:bg-surface-hover rounded-sm outline-none"
						>
							{item.label}
						</ListBoxItem>
					)}
				</ListBox>
			</Popover>
		</AriaComboBox>
	);
};
