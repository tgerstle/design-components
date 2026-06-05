import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: [
		join(
			getAbsolutePath("@design_components/ui"),
			"src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		),
		join(
			getAbsolutePath("@design_components/widgets"),
			"src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		),
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
};
export default config;
