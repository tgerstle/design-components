import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
	title: "UI/Form Controls/Input",
	component: Input,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: {
		placeholder: "Enter value...",
	},
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
