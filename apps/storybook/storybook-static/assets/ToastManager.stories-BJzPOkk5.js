import { B as u } from "./Button-Cr9yRxI-.js";
import { c } from "./createLucideIcon-DPMF01l1.js";
import { j as e } from "./jsx-runtime-BjG_zV1W.js";
import "./Button-DMaXDISd.js";
import "./Hidden-DxJAwdyU.js";
import "./index-BGsE_GxY.js";
import "./useHover-qyAt-50Y.js";
import "./index-B9nXkq7N.js"; /**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = [
		["path", { d: "M18 6 6 18", key: "1bl5f8" }],
		["path", { d: "m6 6 12 12", key: "d8bk6v" }],
	],
	g = c("x", p),
	r = ({ toast: t, onClose: a, className: l = "", ...m }) =>
		e.jsxs("div", {
			...m,
			className: `${{ success: "bg-success text-white", info: "bg-info text-white", warning: "bg-warning text-primary-foreground", danger: "bg-danger text-white" }[t.tone] || "bg-info text-white"} p-4 rounded-md shadow-lg data-[animation=entering]:animate-in data-[animation=entering]:slide-in-from-right data-[animation=exiting]:animate-out data-[animation=exiting]:slide-out-to-right fade-out relative ${l}`,
			children: [
				e.jsxs("div", {
					className: "pr-6",
					children: [
						e.jsx("div", { className: "font-bold text-sm", children: t.title }),
						t.description &&
							e.jsx("div", {
								className: "text-xs opacity-90 mt-1",
								children: t.description,
							}),
					],
				}),
				a &&
					e.jsx(u, {
						customVariant: "standard",
						variant: "ghost",
						onPress: a,
						className:
							"absolute top-2 right-2 !p-1 !text-current mix-blend-luminosity hover:opacity-80",
						"aria-label": "Close",
						children: e.jsx(g, { className: "w-4 h-4" }),
					}),
			],
		}),
	d = ({ className: t, ...a }) =>
		e.jsx("section", {
			...a,
			"aria-live": "polite",
			"aria-label": "Notifications",
			className:
				t !== void 0
					? t
					: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-96 outline-none",
		});
r.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "Toast",
	props: {
		toast: {
			required: !0,
			tsType: {
				name: "signature",
				type: "object",
				raw: `{
	id: string;
	title: string;
	description?: string;
	tone: ToastTone;
	duration?: number;
}`,
				signature: {
					properties: [
						{ key: "id", value: { name: "string", required: !0 } },
						{ key: "title", value: { name: "string", required: !0 } },
						{ key: "description", value: { name: "string", required: !1 } },
						{
							key: "tone",
							value: {
								name: "union",
								raw: '"success" | "info" | "warning" | "danger"',
								elements: [
									{ name: "literal", value: '"success"' },
									{ name: "literal", value: '"info"' },
									{ name: "literal", value: '"warning"' },
									{ name: "literal", value: '"danger"' },
								],
								required: !0,
							},
						},
						{ key: "duration", value: { name: "number", required: !1 } },
					],
				},
			},
			description: "",
		},
		onClose: {
			required: !1,
			tsType: {
				name: "signature",
				type: "function",
				raw: "() => void",
				signature: { arguments: [], return: { name: "void" } },
			},
			description: "",
		},
		className: { defaultValue: { value: '""', computed: !1 }, required: !1 },
	},
};
d.__docgenInfo = { description: "", methods: [], displayName: "ToastRegion" };
const x = () =>
		e.jsx("div", {
			className:
				"relative min-h-[300px] w-full min-w-[500px] overflow-hidden rounded-md border border-border shadow-sm",
			children: e.jsxs(d, {
				className:
					"absolute bottom-4 right-4 z-10 flex flex-col gap-2 w-80 outline-none",
				children: [
					e.jsx(r, {
						toast: {
							id: "1",
							title: "Changes Saved",
							tone: "success",
							description: "Your profile has been updated.",
						},
					}),
					e.jsx(r, {
						toast: {
							id: "2",
							title: "Error",
							tone: "danger",
							description: "Failed to save data.",
						},
					}),
				],
			}),
		}),
	T = {
		title: "UI/Overlays/ToastManager",
		component: x,
		parameters: { layout: "padded" },
		tags: ["autodocs"],
	},
	i = {};
var n, s, o;
i.parameters = {
	...i.parameters,
	docs: {
		...((n = i.parameters) == null ? void 0 : n.docs),
		source: {
			originalSource: "{}",
			...((o = (s = i.parameters) == null ? void 0 : s.docs) == null
				? void 0
				: o.source),
		},
	},
};
const k = ["Default"];
export { i as Default, k as __namedExportsOrder, T as default };
