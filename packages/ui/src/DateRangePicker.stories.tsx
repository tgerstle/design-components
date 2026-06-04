import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "./DateRangePicker";

const meta = {
	title: "UI/Form Controls/DateRangePicker",
	component: DateRangePicker,
	parameters: {
		layout: "centered",
		docs: { description: { component: "Handles DateValue generics." } },
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DateRangePicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Event Date",
		description: "Select start and end dates",
	},
};
