import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "./Combobox";

const meta = {
	title: "UI/Form Controls/Combobox",
	component: Combobox,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = [
	{ id: "1", label: "Cat" },
	{ id: "2", label: "Dog" },
	{ id: "3", label: "Kangaroo" },
];

export const Default: Story = {
	args: {
		label: "Favorite Animal",
		items,
		description: "Choose your favorite animal from the list",
	},
};
