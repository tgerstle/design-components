import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "UI/Form Controls/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "radio",
			options: ["primary", "secondary"],
		},
		isDisabled: {
			control: "boolean",
		},
		onPress: { action: "pressed" },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Save Changes",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Cancel",
	},
};

export const Disabled: Story = {
	args: {
		variant: "primary",
		isDisabled: true,
		children: "Not Allowed",
	},
};
