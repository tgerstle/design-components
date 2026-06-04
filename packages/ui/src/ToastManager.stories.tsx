import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastRegion } from "./ToastManager";

const ToastDemo = () => {
	return (
		<div className="relative min-h-[300px] w-full min-w-[500px] overflow-hidden rounded-md border border-border shadow-sm">
			<ToastRegion className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 w-80 outline-none">
				<Toast
					toast={{
						id: "1",
						title: "Changes Saved",
						tone: "success",
						description: "Your profile has been updated.",
					}}
				/>
				<Toast
					toast={{
						id: "2",
						title: "Error",
						tone: "danger",
						description: "Failed to save data.",
					}}
				/>
			</ToastRegion>
		</div>
	);
};

const meta = {
	title: "UI/Overlays/ToastManager",
	component: ToastDemo,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
} satisfies Meta<typeof ToastDemo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
