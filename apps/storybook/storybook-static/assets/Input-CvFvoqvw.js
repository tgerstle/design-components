import { e as $, m as b, i as l, p as n, f as u } from "./Hidden-DxJAwdyU.js";
import { R as v, r as x } from "./index-BGsE_GxY.js";
import { G as H, $ as m } from "./useHover-qyAt-50Y.js";
const F = x.createContext({});
const P = (o) => {
	const { onHoverStart: e, onHoverChange: a, onHoverEnd: s, ...t } = o;
	return t;
};
const C = n((e, a) => {
	[e, a] = $(e, a, F);
	const { hoverProps: s, isHovered: t } = H({ ...e, isDisabled: e.disabled }),
		{
			isFocused: d,
			isFocusVisible: i,
			focusProps: r,
		} = m({ isTextInput: !0, autoFocus: e.autoFocus }),
		f = !!e["aria-invalid"] && e["aria-invalid"] !== "false",
		c = u({
			...e,
			values: {
				isHovered: t,
				isFocused: d,
				isFocusVisible: i,
				isDisabled: e.disabled || !1,
				isInvalid: f,
			},
			defaultClassName: "react-aria-Input",
		});
	return v.createElement(l.input, {
		...b(P(e), r, s),
		...c,
		ref: a,
		"data-focused": d || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": t || void 0,
		"data-focus-visible": i || void 0,
		"data-invalid": f || void 0,
	});
});
export { C as a, F as $ };
