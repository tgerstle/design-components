import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "../tailwind.css";

const ThemeWrapper = ({
	theme,
	children,
}: {
	theme: string;
	children: React.ReactNode;
}) => {
	useEffect(() => {
		const html = document.documentElement;
		if (theme === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className="font-sans antialiased text-foreground bg-background min-h-screen">
			{children}
		</div>
	);
};

const preview: Preview = {
	parameters: {
		backgrounds: {
			disable: true,
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

			return (
				<ThemeWrapper theme={theme}>
					<Story />
				</ThemeWrapper>
			);
		},
	],
};

export default preview;
