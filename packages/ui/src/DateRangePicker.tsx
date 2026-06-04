"use client";
import type { CalendarDate, DateValue } from "@internationalized/date";
import type React from "react";
import {
	Button as AriaButton,
	DateRangePicker as AriaDateRangePicker,
	type DateRangePickerProps as AriaDateRangePickerProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	DateInput,
	DateSegment,
	Dialog,
	FieldError,
	Group,
	Heading,
	Popover,
	RangeCalendar,
	Text,
} from "react-aria-components";
import { Label } from "./Label";

export interface DateRangePickerProps<T extends DateValue>
	extends Omit<AriaDateRangePickerProps<T>, "children"> {
	label: string;
	description?: string;
	errorMessage?: string;
}

export const DateRangePicker = <T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateRangePickerProps<T>) => {
	return (
		<AriaDateRangePicker {...props} className="flex flex-col gap-1">
			<Label>{label}</Label>
			<Group className="flex border border-border rounded p-2 bg-background focus-within:ring-2 focus-within:ring-primary focus-within:outline-none">
				<DateInput slot="start" className="flex">
					{(segment: React.ComponentProps<typeof DateSegment>["segment"]) => (
						<DateSegment
							segment={segment}
							className="px-1 tabular-nums focus:bg-primary focus:text-primary-foreground rounded outline-none caret-transparent"
						/>
					)}
				</DateInput>
				<span aria-hidden="true" className="mx-2 text-foreground">
					-
				</span>
				<DateInput slot="end" className="flex">
					{(segment: React.ComponentProps<typeof DateSegment>["segment"]) => (
						<DateSegment
							segment={segment}
							className="px-1 tabular-nums focus:bg-primary focus:text-primary-foreground rounded outline-none caret-transparent"
						/>
					)}
				</DateInput>
			</Group>
			{description && (
				<Text slot="description" className="text-xs text-foreground mt-1">
					{description}
				</Text>
			)}
			<FieldError className="text-xs text-danger mt-1">
				{errorMessage}
			</FieldError>
			<Popover className="z-50 bg-background shadow-popover overflow-auto rounded-lg border border-border mt-1">
				<Dialog aria-label="Date Picker" className="p-4 outline-none">
					<RangeCalendar>
						<header className="flex items-center w-full justify-between gap-1 pb-4">
							<AriaButton
								slot="previous"
								className="px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary"
							>
								◁
							</AriaButton>
							<Heading className="text-sm font-bold m-0" />
							<AriaButton
								slot="next"
								className="px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary"
							>
								▷
							</AriaButton>
						</header>
						<CalendarGrid>
							<CalendarGridHeader>
								{(day: string) => (
									<CalendarHeaderCell className="text-xs font-semibold text-slate-500 pb-2">
										{day}
									</CalendarHeaderCell>
								)}
							</CalendarGridHeader>
							<CalendarGridBody>
								{(date: CalendarDate) => (
									<CalendarCell
										date={date}
										className="w-9 h-9 outline-none cursor-default rounded flex items-center justify-center data-[outside-month]:text-slate-300 data-[selected]:bg-slate-100 data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[hovered]:bg-surface-hover data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary"
									/>
								)}
							</CalendarGridBody>
						</CalendarGrid>
					</RangeCalendar>
				</Dialog>
			</Popover>
		</AriaDateRangePicker>
	);
};
