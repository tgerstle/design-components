"use client";
import { Search } from "lucide-react";
import { Dialog, ListBox, ListBoxItem, Modal } from "react-aria-components";
import { Input } from "./Input";

export interface CommandAction {
	id: string;
	label: string;
	icon?: React.ReactNode;
	onSelect: () => void;
}

export interface CommandPaletteProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	actions: CommandAction[];
}

export const CommandPalette = ({
	isOpen,
	setIsOpen,
	actions,
}: CommandPaletteProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={setIsOpen}
			className="fixed inset-0 bg-overlay flex items-center justify-center p-4 z-popover data-[entering]:animate-in data-[entering]:fade-in data-[exiting]:animate-out data-[exiting]:fade-out"
		>
			<Dialog
				aria-label="Command Palette"
				className="bg-background shadow-modal rounded-lg w-full max-w-lg overflow-hidden border border-border outline-none"
			>
				<div className="border-b border-border px-4 py-3 flex items-center gap-2">
					<Search className="w-5 h-5 text-slate-400" />
					<Input
						placeholder="Search commands..."
						className="flex-1 bg-transparent border-0 outline-none text-foreground px-0 focus:ring-0"
						autoFocus
					/>
				</div>
				<ListBox
					items={actions}
					className="max-h-60 overflow-y-auto p-2 outline-none"
				>
					{(action: CommandAction) => (
						<ListBoxItem
							textValue={action.label}
							className="px-3 py-2 text-sm text-foreground data-[hovered]:bg-secondary data-[focused]:bg-secondary rounded cursor-pointer outline-none flex items-center gap-2"
						>
							{action.icon} {action.label}
						</ListBoxItem>
					)}
				</ListBox>
			</Dialog>
		</Modal>
	);
};
