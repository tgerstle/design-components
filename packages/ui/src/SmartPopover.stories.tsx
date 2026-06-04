import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "react-aria-components";
import { SmartPopover } from "./SmartPopover";

const meta = {
	title: "UI/Overlays/SmartPopover",
	component: SmartPopover,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof SmartPopover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "This is a helpful hint!",
		children: <Button className="p-2 border rounded">Hover me</Button>,
	},
};
