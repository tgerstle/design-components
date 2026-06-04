"use client";

import { Button } from "@design_components/ui";

const themes = [
	{ id: "blue", name: "Blue (Default)", value: "#2563eb" },
	{ id: "emerald", name: "Emerald", value: "#10b981" },
	{ id: "violet", name: "Violet", value: "#8b5cf6" },
	{ id: "rose", name: "Rose", value: "#f43f5e" },
];

export function ColorPicker() {
	const handleThemeChange = (themeId: string) => {
		// Clear inline style overrides that may be stuck from the previous implementation
		document.documentElement.removeAttribute("style");
		// Activate the data attribute so CSS takes over
		document.documentElement.setAttribute("data-theme", themeId);
	};

	return (
		<div className="flex items-center gap-2">
			<span className="text-xs text-foreground/70 hidden sm:block">Theme:</span>
			{themes.map((t) => (
				<Button
					key={t.id}
					aria-label={`Set theme to ${t.name}`}
					variant="ghost"
					className="w-6 h-6 p-0 rounded-full min-w-0 flex-shrink-0 border border-border"
					style={{ backgroundColor: t.value }}
					onPress={() => handleThemeChange(t.id)}
				/>
			))}
		</div>
	);
}
