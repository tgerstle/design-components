import { p as c, e as d, i as f } from "./Hidden-DxJAwdyU.js";
import { R as i, r as p } from "./index-BGsE_GxY.js";
import { j as s } from "./jsx-runtime-BjG_zV1W.js";
const m = p.createContext({}),
	l = c((e, a) => {
		[e, a] = d(e, a, m);
		const { elementType: r = "label", ...o } = e,
			n = f[r];
		return i.createElement(n, { className: "react-aria-Label", ...o, ref: a });
	}),
	b = ({ className: t, ...e }) =>
		s.jsx(l, {
			...e,
			className:
				typeof t == "function"
					? t
					: `text-sm font-medium text-foreground data-[disabled]:opacity-50 group-data-[required]:after:content-['*'] group-data-[required]:after:text-danger group-data-[required]:after:ml-0.5 ${t || ""}`,
		});
b.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "Label",
	props: {
		className: {
			required: !1,
			tsType: {
				name: "union",
				raw: "string | ((props: Parameters<typeof AriaLabel>[0]) => string)",
				elements: [{ name: "string" }, { name: "unknown" }],
			},
			description: "",
		},
		children: {
			required: !1,
			tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
			description: "",
		},
	},
};
export { b as L, m as $ };
