import type { Preview } from "@storybook/react";
import "../tailwind.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#0a0a0a" },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme =
				context.globals.backgrounds?.value === "#0a0a0a" ? "dark" : "light";

			// Simulate the Next.js dark mode prefer-color-scheme via a class or standard setup
			// Since our theme.css uses prefers-color-scheme, Storybook sometimes struggles to force it
			// We can inject a class to body if necessary later, but for now we render the story
			return (
				<div
					data-theme={theme}
					className="font-sans antialiased text-foreground"
				>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
