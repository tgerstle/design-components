import { B as l } from "./Button-Cr9yRxI-.js";
import "./jsx-runtime-BjG_zV1W.js";
import "./Button-DMaXDISd.js";
import "./Hidden-DxJAwdyU.js";
import "./index-BGsE_GxY.js";
import "./useHover-qyAt-50Y.js";
import "./index-B9nXkq7N.js";
const C = {
		title: "UI/Form Controls/Button",
		component: l,
		parameters: { layout: "centered" },
		tags: ["autodocs"],
		argTypes: {
			variant: { control: "radio", options: ["primary", "secondary"] },
			isDisabled: { control: "boolean" },
			onPress: { action: "pressed" },
		},
	},
	r = { args: { variant: "primary", children: "Save Changes" } },
	a = { args: { variant: "secondary", children: "Cancel" } },
	e = { args: { variant: "primary", isDisabled: !0, children: "Not Allowed" } };
var o, s, n;
r.parameters = {
	...r.parameters,
	docs: {
		...((o = r.parameters) == null ? void 0 : o.docs),
		source: {
			originalSource: `{
  args: {
    variant: "primary",
    children: "Save Changes"
  }
}`,
			...((n = (s = r.parameters) == null ? void 0 : s.docs) == null
				? void 0
				: n.source),
		},
	},
};
var t, i, c;
a.parameters = {
	...a.parameters,
	docs: {
		...((t = a.parameters) == null ? void 0 : t.docs),
		source: {
			originalSource: `{
  args: {
    variant: "secondary",
    children: "Cancel"
  }
}`,
			...((c = (i = a.parameters) == null ? void 0 : i.docs) == null
				? void 0
				: c.source),
		},
	},
};
var d, m, p;
e.parameters = {
	...e.parameters,
	docs: {
		...((d = e.parameters) == null ? void 0 : d.docs),
		source: {
			originalSource: `{
  args: {
    variant: "primary",
    isDisabled: true,
    children: "Not Allowed"
  }
}`,
			...((p = (m = e.parameters) == null ? void 0 : m.docs) == null
				? void 0
				: p.source),
		},
	},
};
const D = ["Primary", "Secondary", "Disabled"];
export {
	a as Secondary,
	C as default,
	D as __namedExportsOrder,
	e as Disabled,
	r as Primary,
};
