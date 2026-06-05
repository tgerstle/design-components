import { b as ee, c as te, $ as X, a as Z } from "./animation-D9hJgx2r.js";
import { i as A, h as F, e as H, c as U } from "./Button-DMaXDISd.js";
import {
	d as G,
	f as J,
	o as K,
	i as Q,
	e as Y,
	m as y,
	b as z,
} from "./Hidden-DxJAwdyU.js";
import { O as re } from "./index-B9nXkq7N.js";
import { R as d, r as l } from "./index-BGsE_GxY.js";
import { j as x } from "./jsx-runtime-BjG_zV1W.js";
import { G as L, u as ne, r as oe } from "./useHover-qyAt-50Y.js";
import { a as q, b as V, d as W } from "./useOverlayPosition-D0MI8dT9.js";
import "./useControlledState-DNChzxNu.js";
const T = d.createContext(null);
function ae(e) {
	const { children: r } = e,
		t = l.useContext(T),
		[o, c] = l.useState(0),
		i = l.useMemo(
			() => ({
				parent: t,
				modalCount: o,
				addModal() {
					c((a) => a + 1), t && t.addModal();
				},
				removeModal() {
					c((a) => a - 1), t && t.removeModal();
				},
			}),
			[t, o],
		);
	return d.createElement(T.Provider, { value: i }, r);
}
function le() {
	const e = l.useContext(T);
	return {
		modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : void 0 },
	};
}
function ce(e) {
	const { modalProviderProps: r } = le();
	return d.createElement("div", { "data-overlay-container": !0, ...e, ...r });
}
function ie(e) {
	return d.createElement(ae, null, d.createElement(ce, e));
}
function fe(e) {
	let r = K(),
		{ portalContainer: t = r ? null : document.body, ...o } = e,
		{ getContainer: c } = X();
	if (
		(!e.portalContainer && c && (t = c()),
		d.useEffect(() => {
			if (t != null && t.closest("[data-overlay-container]"))
				throw new Error(
					"An OverlayContainer must not be inside another container. Please change the portalContainer prop.",
				);
		}, [t]),
		!t)
	)
		return null;
	const i = d.createElement(ie, o);
	return re.createPortal(i, t);
}
const de = 1500,
	w = 500;
let m = {},
	se = 0,
	h = !1,
	u = null,
	b = null;
function N(e = {}) {
	const { delay: r = de, closeDelay: t = w } = e,
		{ isOpen: o, open: c, close: i } = Z(e),
		a = l.useMemo(() => `${++se}`, []),
		n = l.useRef(null),
		f = l.useRef(i),
		p = () => {
			m[a] = P;
		},
		$ = () => {
			for (const s in m) s !== a && (m[s](!0), delete m[s]);
		},
		v = () => {
			n.current && clearTimeout(n.current),
				(n.current = null),
				$(),
				p(),
				(h = !0),
				c(),
				u && (clearTimeout(u), (u = null)),
				b && (clearTimeout(b), (b = null));
		},
		P = (s) => {
			s || t <= 0
				? (n.current && clearTimeout(n.current),
					(n.current = null),
					f.current())
				: n.current ||
					(n.current = setTimeout(() => {
						(n.current = null), f.current();
					}, t)),
				u && (clearTimeout(u), (u = null)),
				h &&
					(b && clearTimeout(b),
					(b = setTimeout(
						() => {
							delete m[a], (b = null), (h = !1);
						},
						Math.max(w, t),
					)));
		},
		E = () => {
			$(),
				p(),
				!o && !h
					? (u && clearTimeout(u),
						(u = setTimeout(() => {
							(u = null), (h = !0), v();
						}, r)))
					: o || v();
		};
	return (
		l.useEffect(() => {
			f.current = i;
		}, [i]),
		l.useEffect(
			() => () => {
				n.current && clearTimeout(n.current), m[a] && delete m[a];
			},
			[a],
		),
		{
			isOpen: o,
			open: (s) => {
				!s && r > 0 && !n.current ? E() : v();
			},
			close: P,
		}
	);
}
function ue(e, r) {
	const t = H(e, { labelable: !0 }),
		{ hoverProps: o } = L({
			onHoverStart: () => (r == null ? void 0 : r.open(!0)),
			onHoverEnd: () => (r == null ? void 0 : r.close()),
		});
	return { tooltipProps: y(t, o, { role: "tooltip" }) };
}
function $e(e, r, t) {
	const { isDisabled: o, trigger: c, shouldCloseOnPress: i = !0 } = e,
		a = z(),
		n = l.useRef(!1),
		f = l.useRef(!1),
		p = () => {
			(n.current || f.current) && r.open(f.current);
		},
		$ = (g) => {
			!n.current && !f.current && r.close(g);
		};
	l.useEffect(() => {
		const g = (C) => {
			t &&
				t.current &&
				C.key === "Escape" &&
				(C.stopPropagation(), r.close(!0));
		};
		if (r.isOpen)
			return (
				document.addEventListener("keydown", g, !0),
				() => {
					document.removeEventListener("keydown", g, !0);
				}
			);
	}, [t, r]);
	const v = () => {
			c !== "focus" &&
				(oe() === "pointer" ? (n.current = !0) : (n.current = !1), p());
		},
		P = () => {
			c !== "focus" && ((f.current = !1), (n.current = !1), $());
		},
		E = () => {
			i && ((f.current = !1), (n.current = !1), $(!0));
		},
		s = () => {
			ne() && ((f.current = !0), p());
		},
		B = () => {
			(f.current = !1), (n.current = !1), $(!0);
		},
		{ hoverProps: _ } = L({ isDisabled: o, onHoverStart: v, onHoverEnd: P }),
		{ focusableProps: k } = A({ isDisabled: o, onFocus: s, onBlur: B }, t);
	return {
		triggerProps: {
			"aria-describedby": r.isOpen ? a : void 0,
			...y(k, _, { onPointerDown: E, onKeyDown: E }),
			tabIndex: void 0,
		},
		tooltipProps: { id: a },
	};
}
const R = l.createContext(null),
	I = l.createContext(null);
function pe(e) {
	const r = N(e),
		t = l.useRef(null),
		{ triggerProps: o, tooltipProps: c } = $e(e, r, t);
	return d.createElement(
		G,
		{
			values: [
				[R, r],
				[I, { ...c, triggerRef: t }],
			],
		},
		d.createElement(F, { ...o, ref: t }, e.children),
	);
}
const me = l.forwardRef(({ UNSTABLE_portalContainer: r, ...t }, o) => {
	[t, o] = Y(t, o, I);
	const c = l.useContext(R),
		i = N(t),
		a = t.isOpen != null || t.defaultOpen != null || !c ? i : c,
		n = ee(o, a.isOpen) || t.isExiting || !1;
	return !a.isOpen && !n
		? null
		: d.createElement(
				fe,
				{ portalContainer: r },
				d.createElement(be, { ...t, tooltipRef: o, isExiting: n }),
			);
});
function be(e) {
	const r = l.useContext(R),
		t = l.useRef(null),
		{
			overlayProps: o,
			arrowProps: c,
			placement: i,
			triggerAnchorPoint: a,
		} = W({
			placement: e.placement || "top",
			targetRef: e.triggerRef,
			overlayRef: e.tooltipRef,
			arrowRef: t,
			offset: e.offset,
			crossOffset: e.crossOffset,
			isOpen: r.isOpen,
			arrowBoundaryOffset: e.arrowBoundaryOffset,
			shouldFlip: e.shouldFlip,
			containerPadding: e.containerPadding,
			onClose: () => r.close(!0),
		}),
		n = te(e.tooltipRef, !!i) || e.isEntering || !1,
		f = J({
			...e,
			defaultClassName: "react-aria-Tooltip",
			values: { placement: i, isEntering: n, isExiting: e.isExiting, state: r },
		});
	e = y(e, o);
	const { tooltipProps: p } = ue(e, r),
		$ = H(e, { global: !0 });
	return d.createElement(
		Q.div,
		{
			...y($, f, p),
			ref: e.tooltipRef,
			style: {
				...o.style,
				"--trigger-anchor-point": a ? `${a.x}px ${a.y}px` : void 0,
				...f.style,
			},
			"data-placement": i ?? void 0,
			"data-entering": n || void 0,
			"data-exiting": e.isExiting || void 0,
		},
		d.createElement(
			q.Provider,
			{ value: { ...c, placement: i, ref: t } },
			f.children,
		),
	);
}
const j = ({ delay: e = 300, content: r, children: t, ...o }) =>
	x.jsxs(pe, {
		delay: e,
		children: [
			t,
			x.jsxs(me, {
				...o,
				className:
					"bg-popover text-foreground border border-border px-3 py-2 rounded-md shadow-lg text-sm z-50 " +
					(o.className || ""),
				children: [
					x.jsx(V, {
						children: x.jsx("svg", {
							width: 8,
							height: 8,
							"aria-hidden": "true",
							viewBox: "0 0 8 8",
							children: x.jsx("path", {
								d: "M0 0 L4 4 L8 0",
								fill: "var(--color-popover)",
								stroke: "var(--color-border)",
								strokeWidth: 1,
							}),
						}),
					}),
					r,
				],
			}),
		],
	});
j.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "SmartPopover",
	props: {
		delay: {
			required: !1,
			tsType: { name: "number" },
			description: "",
			defaultValue: { value: "300", computed: !1 },
		},
		content: {
			required: !0,
			tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
			description: "",
		},
		children: {
			required: !0,
			tsType: { name: "ReactReactElement", raw: "React.ReactElement" },
			description: "",
		},
	},
	composes: ["Omit"],
};
const Re = {
		title: "UI/Overlays/SmartPopover",
		component: j,
		parameters: { layout: "centered" },
		tags: ["autodocs"],
	},
	O = {
		args: {
			content: "This is a helpful hint!",
			children: x.jsx(U, {
				className: "p-2 border rounded",
				children: "Hover me",
			}),
		},
	};
var D, S, M;
O.parameters = {
	...O.parameters,
	docs: {
		...((D = O.parameters) == null ? void 0 : D.docs),
		source: {
			originalSource: `{
  args: {
    content: "This is a helpful hint!",
    children: <Button className="p-2 border rounded">Hover me</Button>
  }
}`,
			...((M = (S = O.parameters) == null ? void 0 : S.docs) == null
				? void 0
				: M.source),
		},
	},
};
const Ce = ["Default"];
export { Ce as __namedExportsOrder, O as Default, Re as default };
