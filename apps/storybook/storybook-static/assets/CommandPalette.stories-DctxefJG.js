import { b as C, c as W, a as Y } from "./animation-D9hJgx2r.js";
import { e as D, c as z } from "./Button-DMaXDISd.js";
import { c as ne } from "./createLucideIcon-DPMF01l1.js";
import {
	g as A,
	n as E,
	$ as F,
	h as H,
	f as k,
	a as q,
	i as T,
	l as V,
} from "./Dialog-BF34q9A4.js";
import {
	i as B,
	c as G,
	$ as I,
	e as J,
	o as L,
	f as M,
	d as Q,
	m as y,
} from "./Hidden-DxJAwdyU.js";
import { I as te } from "./Input-CZQj5NRG.js";
import { r as d, R as u } from "./index-BGsE_GxY.js";
import { j as m } from "./jsx-runtime-BjG_zV1W.js";
import { d as K, a as U } from "./ListBox-CTwCpOYP.js";
import { o as O, k as X } from "./useCollator-DduXULBj.js";
import { e as ee, l as R, f as Z } from "./useHover-qyAt-50Y.js";
import "./index-B9nXkq7N.js";
import "./useLoadMoreSentinel-Dio_d_Bw.js";
import "./useControlledState-DNChzxNu.js";
import "./Input-CvFvoqvw.js";
function ae(t, e, n) {
	const { overlayProps: a, underlayProps: i } = A(
		{ ...t, isOpen: e.isOpen, onClose: e.close },
		n,
	);
	return (
		F({ isDisabled: !e.isOpen }),
		H(),
		d.useEffect(() => {
			if (e.isOpen && n.current) return k([n.current], { shouldUseInert: !0 });
		}, [e.isOpen, n]),
		{ modalProps: y(a), underlayProps: i }
	);
}
const l = typeof document < "u" && window.visualViewport;
function ie() {
	const t = L(),
		[e, n] = d.useState(() => (t ? { width: 0, height: 0 } : v()));
	return (
		d.useEffect(() => {
			let a = (o) => {
					n((r) => (o.width === r.width && o.height === r.height ? r : o));
				},
				i = () => {
					(l && l.scale > 1) || a(v());
				},
				c,
				s = (o) => {
					(l && l.scale > 1) ||
						(O(Z(o)) &&
							(c = requestAnimationFrame(() => {
								const r = ee();
								(!r || !O(r)) &&
									a({
										width: document.documentElement.clientWidth,
										height: document.documentElement.clientHeight,
									});
							})));
				};
			return (
				a(v()),
				R() && window.addEventListener("blur", s, !0),
				l
					? l.addEventListener("resize", i)
					: window.addEventListener("resize", i),
				() => {
					cancelAnimationFrame(c),
						R() && window.removeEventListener("blur", s, !0),
						l
							? l.removeEventListener("resize", i)
							: window.removeEventListener("resize", i);
				}
			);
		}, []),
		e
	);
}
function v() {
	return {
		width: l
			? Math.min(l.width * l.scale, document.documentElement.clientWidth)
			: document.documentElement.clientWidth,
		height: l ? l.height * l.scale : document.documentElement.clientHeight,
	};
}
const oe = d.createContext(null),
	w = d.createContext(null),
	re = d.forwardRef((e, n) => {
		if (d.useContext(w))
			return u.createElement(P, { ...e, modalRef: n }, e.children);
		const {
			isDismissable: i,
			isKeyboardDismissDisabled: c,
			isOpen: s,
			defaultOpen: o,
			onOpenChange: r,
			children: f,
			isEntering: b,
			isExiting: p,
			UNSTABLE_portalContainer: $,
			shouldCloseOnInteractOutside: x,
			...h
		} = e;
		return u.createElement(
			de,
			{
				isDismissable: i,
				isKeyboardDismissDisabled: c,
				isOpen: s,
				defaultOpen: o,
				onOpenChange: r,
				isEntering: b,
				isExiting: p,
				UNSTABLE_portalContainer: $,
				shouldCloseOnInteractOutside: x,
			},
			u.createElement(P, { ...h, modalRef: n }, f),
		);
	});
function le(t, e) {
	[t, e] = J(t, e, oe);
	const n = d.useContext(E),
		a = Y(t),
		i = t.isOpen != null || t.defaultOpen != null || !n ? a : n,
		c = I(e),
		s = d.useRef(null),
		o = C(c, i.isOpen),
		r = C(s, i.isOpen),
		f = o || r || t.isExiting || !1,
		b = L();
	return (!i.isOpen && !f) || b
		? null
		: u.createElement(ce, {
				...t,
				state: i,
				isExiting: f,
				overlayRef: c,
				modalRef: s,
			});
}
const de = d.forwardRef(le);
function ce({ UNSTABLE_portalContainer: t, ...e }) {
	let n = e.modalRef,
		{ state: a } = e,
		{ modalProps: i, underlayProps: c } = ae(e, a, n),
		s = W(e.overlayRef) || e.isEntering || !1,
		o = M({
			...e,
			defaultClassName: "react-aria-ModalOverlay",
			values: { isEntering: s, isExiting: e.isExiting, state: a },
		}),
		r = ie(),
		f,
		b;
	if (typeof document < "u") {
		const $ = X(document.body)
				? document.body
				: document.scrollingElement || document.documentElement,
			x = $.getBoundingClientRect().width % 1,
			h = $.getBoundingClientRect().height % 1;
		(f = $.scrollWidth - x), (b = $.scrollHeight - h);
	}
	const p = {
		...o.style,
		"--visual-viewport-width": r.width + "px",
		"--visual-viewport-height": r.height + "px",
		"--page-width": f !== void 0 ? f + "px" : void 0,
		"--page-height": b !== void 0 ? b + "px" : void 0,
	};
	return u.createElement(
		T,
		{ isExiting: e.isExiting, portalContainer: t },
		u.createElement(
			B.div,
			{
				...y(D(e, { global: !0 }), c),
				...o,
				style: p,
				ref: e.overlayRef,
				"data-entering": s || void 0,
				"data-exiting": e.isExiting || void 0,
			},
			u.createElement(
				Q,
				{
					values: [
						[
							w,
							{
								modalProps: i,
								modalRef: n,
								isExiting: e.isExiting,
								isDismissable: e.isDismissable,
							},
						],
						[E, a],
					],
				},
				o.children,
			),
		),
	);
}
function P(t) {
	const {
			modalProps: e,
			modalRef: n,
			isExiting: a,
			isDismissable: i,
		} = d.useContext(w),
		c = d.useContext(E),
		s = d.useMemo(() => G(t.modalRef, n), [t.modalRef, n]),
		o = I(s),
		r = W(o),
		f = M({
			...t,
			defaultClassName: "react-aria-Modal",
			values: { isEntering: r, isExiting: a, state: c },
		});
	return u.createElement(
		B.div,
		{
			...y(D(t, { global: !0 }), e),
			...f,
			ref: o,
			"data-entering": r || void 0,
			"data-exiting": a || void 0,
		},
		i && u.createElement(q, { onDismiss: c.close }),
		f.children,
	);
} /**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = [
		["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
		["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
	],
	fe = ne("search", se),
	_ = ({ isOpen: t, setIsOpen: e, actions: n }) =>
		m.jsx(re, {
			isOpen: t,
			onOpenChange: e,
			className:
				"fixed inset-0 bg-overlay flex items-center justify-center p-4 z-popover data-[entering]:animate-in data-[entering]:fade-in data-[exiting]:animate-out data-[exiting]:fade-out",
			children: m.jsxs(V, {
				"aria-label": "Command Palette",
				className:
					"bg-background shadow-modal rounded-lg w-full max-w-lg overflow-hidden border border-border outline-none",
				children: [
					m.jsxs("div", {
						className:
							"border-b border-border px-4 py-3 flex items-center gap-2",
						children: [
							m.jsx(fe, { className: "w-5 h-5 text-slate-400" }),
							m.jsx(te, {
								placeholder: "Search commands...",
								className:
									"flex-1 bg-transparent border-0 outline-none text-foreground px-0 focus:ring-0",
								autoFocus: !0,
							}),
						],
					}),
					m.jsx(U, {
						items: n,
						className: "max-h-60 overflow-y-auto p-2 outline-none",
						children: (a) =>
							m.jsxs(K, {
								textValue: a.label,
								className:
									"px-3 py-2 text-sm text-foreground data-[hovered]:bg-secondary data-[focused]:bg-secondary rounded cursor-pointer outline-none flex items-center gap-2",
								children: [a.icon, " ", a.label],
							}),
					}),
				],
			}),
		});
_.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "CommandPalette",
	props: {
		isOpen: { required: !0, tsType: { name: "boolean" }, description: "" },
		setIsOpen: {
			required: !0,
			tsType: {
				name: "signature",
				type: "function",
				raw: "(isOpen: boolean) => void",
				signature: {
					arguments: [{ type: { name: "boolean" }, name: "isOpen" }],
					return: { name: "void" },
				},
			},
			description: "",
		},
		actions: {
			required: !0,
			tsType: {
				name: "Array",
				elements: [{ name: "CommandAction" }],
				raw: "CommandAction[]",
			},
			description: "",
		},
	},
};
const me = (t) => {
		const [e, n] = d.useState(!1);
		return m.jsxs(m.Fragment, {
			children: [
				m.jsx(z, {
					className: "p-2 border rounded",
					onPress: () => n(!0),
					children: "Open Palette",
				}),
				m.jsx(_, { ...t, isOpen: e, setIsOpen: n }),
			],
		});
	},
	Se = {
		title: "UI/Overlays/CommandPalette",
		component: me,
		parameters: { layout: "centered" },
		tags: ["autodocs"],
	},
	g = {
		args: {
			actions: [
				{
					id: "profile",
					label: "Profile Settings",
					onSelect: () => console.log("Profile"),
				},
				{
					id: "billing",
					label: "Billing",
					onSelect: () => console.log("Billing"),
				},
				{
					id: "logout",
					label: "Log Out",
					onSelect: () => console.log("Log out"),
				},
			],
		},
	};
var S, j, N;
g.parameters = {
	...g.parameters,
	docs: {
		...((S = g.parameters) == null ? void 0 : S.docs),
		source: {
			originalSource: `{
  args: {
    actions: [{
      id: "profile",
      label: "Profile Settings",
      onSelect: () => console.log("Profile")
    }, {
      id: "billing",
      label: "Billing",
      onSelect: () => console.log("Billing")
    }, {
      id: "logout",
      label: "Log Out",
      onSelect: () => console.log("Log out")
    }]
  }
}`,
			...((N = (j = g.parameters) == null ? void 0 : j.docs) == null
				? void 0
				: N.source),
		},
	},
};
const je = ["Default"];
export { g as Default, je as __namedExportsOrder, Se as default };
