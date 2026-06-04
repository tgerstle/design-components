"use client";

import { Button } from "@design_components/ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				aria-label="Toggle Theme"
				className="w-10 h-10 p-0 flex items-center justify-center opacity-0"
			/>
		);
	}

	return (
		<Button
			variant="ghost"
			aria-label="Toggle Theme"
			className="flex items-center gap-2 px-3 h-8 text-sm"
			onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<>
					<Sun className="w-4 h-4" />
					<span className="hidden sm:inline">Light</span>
				</>
			) : (
				<>
					<Moon className="w-4 h-4" />
					<span className="hidden sm:inline">Dark</span>
				</>
			)}
		</Button>
	);
}
