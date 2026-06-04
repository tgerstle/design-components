import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "react-aria-components";
import { CommandPalette } from "./CommandPalette";

// Wrapper to manage state in Storybook
const CommandPaletteWithState = (args: any) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button className="p-2 border rounded" onPress={() => setIsOpen(true)}>
				Open Palette
			</Button>
			<CommandPalette {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

const meta = {
	title: "UI/Overlays/CommandPalette",
	component: CommandPaletteWithState,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof CommandPaletteWithState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		actions: [
			{
				id: "profile",
				label: "Profile Settings",
				onSelect: () => console.log("Profile"),
			},
			{
				id: "billing",
				label: "Billing",
				onSelect: () => console.log("Billing"),
			},
			{
				id: "logout",
				label: "Log Out",
				onSelect: () => console.log("Log out"),
			},
		],
	},
};
