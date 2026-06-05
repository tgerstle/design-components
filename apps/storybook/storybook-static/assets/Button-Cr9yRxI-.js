import { c as i } from "./Button-DMaXDISd.js";
import { j as d } from "./jsx-runtime-BjG_zV1W.js";
const l = ({
	children: r,
	variant: a = "primary",
	className: e = "",
	...t
}) => {
	const o =
			"inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 rounded-md font-sans font-medium transition-colors border border-transparent focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background data-[focus-visible]:ring-primary data-[pressed]:scale-95",
		n = {
			primary:
				"bg-primary text-primary-foreground data-[hovered]:bg-primary-hover",
			secondary:
				"bg-secondary text-secondary-foreground data-[hovered]:bg-secondary-hover border-border",
			danger: "bg-danger text-white data-[hovered]:bg-danger/90",
			outline:
				"border border-border text-foreground data-[hovered]:bg-surface-hover",
			ghost: "bg-transparent text-foreground data-[hovered]:bg-surface-hover",
		};
	return d.jsx(i, {
		...t,
		className: (s) => `${o} ${n[a]} ${typeof e == "function" ? e(s) : e}`,
		children: r,
	});
};
l.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "Button",
	props: {
		variant: {
			required: !1,
			tsType: {
				name: "union",
				raw: '"primary" | "secondary" | "danger" | "outline" | "ghost"',
				elements: [
					{ name: "literal", value: '"primary"' },
					{ name: "literal", value: '"secondary"' },
					{ name: "literal", value: '"danger"' },
					{ name: "literal", value: '"outline"' },
					{ name: "literal", value: '"ghost"' },
				],
			},
			description: "",
			defaultValue: { value: '"primary"', computed: !1 },
		},
		customVariant: {
			required: !1,
			tsType: {
				name: "union",
				raw: '"hero" | "standard"',
				elements: [
					{ name: "literal", value: '"hero"' },
					{ name: "literal", value: '"standard"' },
				],
			},
			description: "",
		},
		className: { defaultValue: { value: '""', computed: !1 }, required: !1 },
	},
	composes: ["AriaButtonProps"],
};
export { l as B };
