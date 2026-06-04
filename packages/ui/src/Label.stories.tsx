import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
	title: "UI/Form Controls/Label",
	component: Label,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: {
		children: "Username",
	},
} satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
