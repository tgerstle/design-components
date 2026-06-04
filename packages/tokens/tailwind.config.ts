import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
		"../../packages/widgets/src/**/*.{js,ts,jsx,tsx}",
		"../../apps/next-site/src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				surface: {
					DEFAULT: "var(--color-surface)",
					hover: "var(--color-surface-hover)",
				},
				popover: "var(--color-popover)",
				foreground: "var(--color-foreground)",
				border: "var(--color-border)",
				primary: {
					DEFAULT: "var(--color-primary)",
					hover: "var(--color-primary-hover)",
					foreground: "var(--color-primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--color-secondary)",
					hover: "var(--color-secondary-hover)",
					foreground: "var(--color-secondary-foreground)",
				},
				success: "var(--color-success)",
				info: "var(--color-info)",
				warning: "var(--color-warning)",
				danger: "var(--color-danger)",
			},
			spacing: {
				"1": "0.25rem",
				"2": "0.5rem",
				"3": "1rem",
				"4": "1.5rem",
			},
			fontSize: {
				xs: ["var(--text-xs)", "var(--line-height-xs)"],
				sm: ["var(--text-sm)", "var(--line-height-sm)"],
				base: ["var(--text-base)", "var(--line-height-base)"],
				lg: ["var(--text-lg)", "var(--line-height-lg)"],
				xl: ["var(--text-xl)", "var(--line-height-xl)"],
				"2xl": ["var(--text-2xl)", "var(--line-height-2xl)"],
				"3xl": ["var(--text-3xl)", "var(--line-height-3xl)"],
				"4xl": ["var(--text-4xl)", "var(--line-height-4xl)"],
				"5xl": ["var(--text-5xl)", "var(--line-height-5xl)"],
			},
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
				mono: ["var(--font-mono)", "monospace"],
			},
			borderRadius: {
				sm: "0.125rem",
				md: "0.25rem",
				lg: "0.5rem",
			},
		},
	},
	plugins: [],
};

export default config;
