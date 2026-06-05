import { j as e } from "./jsx-runtime-BjG_zV1W.js";
const l = {
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#0a0a0a" },
			],
		},
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
	},
	decorators: [
		(t, r) => {
			var a;
			const o =
				((a = r.globals.backgrounds) == null ? void 0 : a.value) === "#0a0a0a"
					? "dark"
					: "light";
			return e.jsx("div", {
				"data-theme": o,
				className: "font-sans antialiased text-foreground",
				children: e.jsx(t, {}),
			});
		},
	],
};
export { l as default };
