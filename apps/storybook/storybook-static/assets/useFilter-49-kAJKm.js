import { a as be, c as ge, b as me } from "./animation-D9hJgx2r.js";
import { m as I, e as K, l as ne } from "./Button-DMaXDISd.js";
import {
	e as ae,
	g as ee,
	n as ie,
	i as j,
	f as re,
	$ as te,
	j as X,
	b as Z,
	a as z,
} from "./Dialog-BF34q9A4.js";
import {
	i as _,
	n as F,
	e as G,
	r as J,
	f as L,
	m as R,
	a as T,
} from "./Hidden-DxJAwdyU.js";
import { R as b, r as o } from "./index-BGsE_GxY.js";
import { j as he } from "./useCollator-DduXULBj.js";
import { $ as pe } from "./useControlledState-DNChzxNu.js";
import {
	r as ce,
	G as de,
	d as fe,
	s as le,
	f as oe,
	$ as se,
} from "./useHover-qyAt-50Y.js";
import { c as $e, d as ue, a as ve } from "./useOverlayPosition-D0MI8dT9.js";
const q = o.createContext(null),
	ze = o.forwardRef((e, a) => {
		const i = o.useContext(q);
		return i != null && i.isInvalid
			? b.createElement(xe, { ...e, ref: a })
			: null;
	}),
	xe = o.forwardRef((r, e) => {
		const a = o.useContext(q),
			{ elementType: i, ...t } = r,
			n = K(t, { global: !0 }),
			l = L({
				...t,
				defaultClassName: "react-aria-FieldError",
				defaultChildren:
					a.validationErrors.length === 0
						? void 0
						: a.validationErrors.join(" "),
				values: a,
			});
		return l.children == null
			? null
			: b.createElement(X, {
					slot: "errorMessage",
					elementType: i,
					...n,
					...l,
					ref: e,
				});
	}),
	A = {
		badInput: !1,
		customError: !1,
		patternMismatch: !1,
		rangeOverflow: !1,
		rangeUnderflow: !1,
		stepMismatch: !1,
		tooLong: !1,
		tooShort: !1,
		typeMismatch: !1,
		valueMissing: !1,
		valid: !0,
	},
	Q = { ...A, customError: !0, valid: !1 },
	C = { isInvalid: !1, validationDetails: A, validationErrors: [] },
	Ee = o.createContext({}),
	W = "__reactAriaFormValidationState";
function je(r) {
	if (r[W]) {
		const {
			realtimeValidation: e,
			displayValidation: a,
			updateValidation: i,
			resetValidation: t,
			commitValidation: n,
		} = r[W];
		return {
			realtimeValidation: e,
			displayValidation: a,
			updateValidation: i,
			resetValidation: t,
			commitValidation: n,
		};
	}
	return ye(r);
}
function ye(r) {
	let {
		isInvalid: e,
		validationState: a,
		name: i,
		value: t,
		builtinValidation: n,
		validate: l,
		validationBehavior: c = "aria",
	} = r;
	a && (e || (e = a === "invalid"));
	const f =
			e !== void 0
				? { isInvalid: e, validationErrors: [], validationDetails: Q }
				: null,
		d = o.useMemo(() => {
			if (!l || t == null) return null;
			const u = Pe(l, t);
			return k(u);
		}, [l, t]);
	n != null && n.validationDetails.valid && (n = void 0);
	const s = o.useContext(Ee),
		$ = o.useMemo(
			() => (i ? (Array.isArray(i) ? i.flatMap((u) => N(s[u])) : N(s[i])) : []),
			[s, i],
		),
		[m, p] = o.useState(s),
		[v, g] = o.useState(!1);
	s !== m && (p(s), g(!1));
	const h = o.useMemo(() => k(v ? [] : $), [v, $]),
		P = o.useRef(C),
		[x, V] = o.useState(C),
		y = o.useRef(C),
		M = () => {
			if (!S) return;
			E(!1);
			const u = d || n || P.current;
			O(u, y.current) || ((y.current = u), V(u));
		},
		[S, E] = o.useState(!1);
	return (
		o.useEffect(M),
		{
			realtimeValidation: f || h || d || n || C,
			displayValidation: c === "native" ? f || h || x : f || h || d || n || x,
			updateValidation(u) {
				c === "aria" && !O(x, u) ? V(u) : (P.current = u);
			},
			resetValidation() {
				const u = C;
				O(u, y.current) || ((y.current = u), V(u)),
					c === "native" && E(!1),
					g(!0);
			},
			commitValidation() {
				c === "native" && E(!0), g(!0);
			},
		}
	);
}
function N(r) {
	return r ? (Array.isArray(r) ? r : [r]) : [];
}
function Pe(r, e) {
	if (typeof r == "function") {
		const a = r(e);
		if (a && typeof a != "boolean") return N(a);
	}
	return [];
}
function k(r) {
	return r.length
		? { isInvalid: !0, validationErrors: r, validationDetails: Q }
		: null;
}
function O(r, e) {
	return r === e
		? !0
		: !!r &&
				!!e &&
				r.isInvalid === e.isInvalid &&
				r.validationErrors.length === e.validationErrors.length &&
				r.validationErrors.every((a, i) => a === e.validationErrors[i]) &&
				Object.entries(r.validationDetails).every(
					([a, i]) => e.validationDetails[a] === i,
				);
}
function We(...r) {
	let e = new Set(),
		a = !1,
		i = { ...A };
	for (const t of r) {
		for (const n of t.validationErrors) e.add(n);
		a || (a = t.isInvalid);
		for (const n in i) i[n] || (i[n] = t.validationDetails[n]);
	}
	return (
		(i.valid = !a),
		{ isInvalid: a, validationErrors: [...e], validationDetails: i }
	);
}
const ke = o.createContext(null);
function Ue(r) {
	let { description: e, errorMessage: a, isInvalid: i, validationState: t } = r,
		{ labelProps: n, fieldProps: l } = Z(r),
		c = T([!!e, !!a, i, t]),
		f = T([!!e, !!a, i, t]);
	return (
		(l = R(l, {
			"aria-describedby":
				[c, f, r["aria-describedby"]].filter(Boolean).join(" ") || void 0,
		})),
		{
			labelProps: n,
			fieldProps: l,
			descriptionProps: { id: c },
			errorMessageProps: { id: f },
		}
	);
}
function Ge(r, e, a) {
	const i = I((t) => {
		a && !t.defaultPrevented && a(e);
	});
	o.useEffect(() => {
		var n;
		const t = (n = r == null ? void 0 : r.current) == null ? void 0 : n.form;
		return (
			t == null || t.addEventListener("reset", i),
			() => {
				t == null || t.removeEventListener("reset", i);
			}
		);
	}, [r]);
}
function _e(r, e, a) {
	const { validationBehavior: i, focus: t } = r;
	F(() => {
		if (i === "native" && a != null && a.current && !a.current.disabled) {
			const d = e.realtimeValidation.isInvalid
				? e.realtimeValidation.validationErrors.join(" ") || "Invalid value."
				: "";
			a.current.setCustomValidity(d),
				a.current.hasAttribute("title") || (a.current.title = ""),
				e.realtimeValidation.isInvalid || e.updateValidation(Ce(a.current));
		}
	});
	const n = o.useRef(!1),
		l = I(() => {
			n.current || e.resetValidation();
		}),
		c = I((d) => {
			var $, m;
			e.displayValidation.isInvalid || e.commitValidation();
			const s = ($ = a == null ? void 0 : a.current) == null ? void 0 : $.form;
			!d.defaultPrevented &&
				a &&
				s &&
				Ie(s) === a.current &&
				(t ? t() : (m = a.current) == null || m.focus(), le("keyboard")),
				d.preventDefault();
		}),
		f = I(() => {
			e.commitValidation();
		});
	o.useEffect(() => {
		const d = a == null ? void 0 : a.current;
		if (!d) return;
		const s = d.form,
			$ = s == null ? void 0 : s.reset;
		return (
			s &&
				(s.reset = () => {
					(n.current =
						!window.event ||
						(window.event.type === "message" &&
							oe(window.event) instanceof MessagePort)),
						$ == null || $.call(s),
						(n.current = !1);
				}),
			d.addEventListener("invalid", c),
			d.addEventListener("change", f),
			s == null || s.addEventListener("reset", l),
			() => {
				d.removeEventListener("invalid", c),
					d.removeEventListener("change", f),
					s == null || s.removeEventListener("reset", l),
					s && (s.reset = $);
			}
		);
	}, [a, i]);
}
function Ve(r) {
	const e = r.validity;
	return {
		badInput: e.badInput,
		customError: e.customError,
		patternMismatch: e.patternMismatch,
		rangeOverflow: e.rangeOverflow,
		rangeUnderflow: e.rangeUnderflow,
		stepMismatch: e.stepMismatch,
		tooLong: e.tooLong,
		tooShort: e.tooShort,
		typeMismatch: e.typeMismatch,
		valueMissing: e.valueMissing,
		valid: e.valid,
	};
}
function Ce(r) {
	return {
		isInvalid: !r.validity.valid,
		validationDetails: Ve(r),
		validationErrors: r.validationMessage ? [r.validationMessage] : [],
	};
}
function Ie(r) {
	var e;
	for (let a = 0; a < r.elements.length; a++) {
		const i = r.elements[a];
		if (((e = i.validity) == null ? void 0 : e.valid) === !1) return i;
	}
	return null;
}
const Re = o.createContext({}),
	Ke = o.forwardRef((e, a) => {
		[e, a] = G(e, a, Re);
		let {
			isDisabled: i,
			isInvalid: t,
			isReadOnly: n,
			onHoverStart: l,
			onHoverChange: c,
			onHoverEnd: f,
			...d
		} = e;
		i ?? (i = !!e["aria-disabled"] && e["aria-disabled"] !== "false"),
			t ?? (t = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
		const { hoverProps: s, isHovered: $ } = de({
				onHoverStart: l,
				onHoverChange: c,
				onHoverEnd: f,
				isDisabled: i,
			}),
			{ isFocused: m, isFocusVisible: p, focusProps: v } = se({ within: !0 }),
			g = L({
				...e,
				values: {
					isHovered: $,
					isFocusWithin: m,
					isFocusVisible: p,
					isDisabled: i,
					isInvalid: t,
				},
				defaultClassName: "react-aria-Group",
			});
		return b.createElement(
			_.div,
			{
				...R(d, v, s),
				...g,
				ref: a,
				role: e.role ?? "group",
				slot: e.slot ?? void 0,
				"data-focus-within": m || void 0,
				"data-hovered": $ || void 0,
				"data-focus-visible": p || void 0,
				"data-disabled": i || void 0,
				"data-invalid": t || void 0,
				"data-readonly": n || void 0,
			},
			g.children,
		);
	});
function Me(r, e) {
	const {
			triggerRef: a,
			popoverRef: i,
			groupRef: t,
			isNonModal: n,
			isKeyboardDismissDisabled: l,
			shouldCloseOnInteractOutside: c,
			...f
		} = r,
		d = f.trigger === "SubmenuTrigger",
		{ overlayProps: s, underlayProps: $ } = ee(
			{
				isOpen: e.isOpen,
				onClose: e.close,
				shouldCloseOnBlur: !0,
				isDismissable: !n || d,
				isKeyboardDismissDisabled: l,
				shouldCloseOnInteractOutside: c,
			},
			t ?? i,
		),
		{
			overlayProps: m,
			arrowProps: p,
			placement: v,
			triggerAnchorPoint: g,
		} = ue({
			...f,
			targetRef: a,
			overlayRef: i,
			isOpen: e.isOpen,
			onClose: n && !d ? e.close : null,
		});
	return (
		te({ isDisabled: n || !e.isOpen }),
		o.useEffect(() => {
			if (e.isOpen && i.current)
				return n
					? ae((t == null ? void 0 : t.current) ?? i.current)
					: re([(t == null ? void 0 : t.current) ?? i.current], {
							shouldUseInert: !0,
						});
		}, [n, e.isOpen, i, t]),
		{
			popoverProps: R(s, m),
			arrowProps: p,
			underlayProps: $,
			placement: v,
			triggerAnchorPoint: g,
		}
	);
}
const Se = o.createContext(null),
	U = o.createContext(null),
	qe = o.forwardRef((e, a) => {
		[e, a] = G(e, a, Se);
		const i = o.useContext(ie),
			t = be(e),
			n = e.isOpen != null || e.defaultOpen != null || !i ? t : i,
			l = me(a, n.isOpen) || e.isExiting || !1,
			c = J(),
			{ direction: f } = pe();
		if (c) {
			let d = e.children;
			return (
				typeof d == "function" &&
					(d = d({
						trigger: e.trigger || null,
						placement: "bottom",
						isEntering: !1,
						isExiting: !1,
						defaultChildren: null,
					})),
				b.createElement(b.Fragment, null, d)
			);
		}
		return n && !n.isOpen && !l
			? null
			: b.createElement(we, {
					...e,
					triggerRef: e.triggerRef,
					state: n,
					popoverRef: a,
					isExiting: l,
					dir: f,
				});
	});
function we({
	state: r,
	isExiting: e,
	UNSTABLE_portalContainer: a,
	clearContexts: i,
	...t
}) {
	var u, B;
	const n = o.useRef(null),
		l = o.useRef(null),
		c = o.useContext(U),
		f = c && t.trigger === "SubmenuTrigger",
		{
			popoverProps: d,
			underlayProps: s,
			arrowProps: $,
			placement: m,
			triggerAnchorPoint: p,
		} = Me(
			{ ...t, offset: t.offset ?? 8, arrowRef: n, groupRef: f ? c : l },
			r,
		),
		v = t.popoverRef,
		g = ge(v, !!m) || t.isEntering || !1,
		h = L({
			...t,
			defaultClassName: "react-aria-Popover",
			values: {
				trigger: t.trigger || null,
				placement: m,
				isEntering: g,
				isExiting: e,
			},
		}),
		P = !t.isNonModal || t.trigger === "SubmenuTrigger",
		[x, V] = o.useState(!1);
	F(() => {
		v.current && V(P && !v.current.querySelector("[role=dialog]"));
	}, [v, P]),
		o.useEffect(() => {
			x &&
				(t.trigger !== "SubmenuTrigger" || ce() !== "pointer") &&
				v.current &&
				!fe(v.current) &&
				ne(v.current);
		}, [x, v, t.trigger]);
	const y = o.useMemo(() => {
			let D = h.children;
			if (i)
				for (const Y of i) D = b.createElement(Y.Provider, { value: null }, D);
			return D;
		}, [h.children, i]),
		[M, S] = o.useState(null),
		E = o.useCallback(() => {
			t.triggerRef.current &&
				S(t.triggerRef.current.getBoundingClientRect().width + "px");
		}, [t.triggerRef]);
	F(E, [E]),
		$e({
			ref:
				(u = h.style) != null && u["--trigger-width"] ? void 0 : t.triggerRef,
			onResize: E,
		});
	const H = {
			...d.style,
			"--trigger-anchor-point": p ? `${p.x}px ${p.y}px` : void 0,
			...h.style,
			"--trigger-width":
				((B = h.style) == null ? void 0 : B["--trigger-width"]) || M,
		},
		w = b.createElement(
			_.div,
			{
				...R(K(t, { global: !0 }), d),
				...h,
				role: x ? "dialog" : void 0,
				tabIndex: x ? -1 : void 0,
				"aria-label": t["aria-label"],
				"aria-labelledby": t["aria-labelledby"],
				ref: v,
				slot: t.slot || void 0,
				style: H,
				dir: t.dir,
				"data-trigger": t.trigger,
				"data-placement": m,
				"data-entering": g || void 0,
				"data-exiting": e || void 0,
			},
			!t.isNonModal && b.createElement(z, { onDismiss: r.close }),
			b.createElement(
				ve.Provider,
				{ value: { ...$, placement: m, ref: n } },
				y,
			),
			b.createElement(z, { onDismiss: r.close }),
		);
	return f
		? b.createElement(
				j,
				{
					...t,
					shouldContainFocus: x,
					isExiting: e,
					portalContainer: a ?? (c == null ? void 0 : c.current) ?? void 0,
				},
				w,
			)
		: b.createElement(
				j,
				{ ...t, shouldContainFocus: x, isExiting: e, portalContainer: a },
				!t.isNonModal &&
					r.isOpen &&
					b.createElement("div", {
						"data-testid": "underlay",
						...s,
						style: { position: "fixed", inset: 0 },
					}),
				b.createElement(
					"div",
					{ ref: l, style: { display: "contents" } },
					b.createElement(U.Provider, { value: l }, w),
				),
			);
}
function Qe(r) {
	const e = he({ usage: "search", ...r }),
		a = o.useCallback(
			(n, l) =>
				l.length === 0
					? !0
					: ((n = n.normalize("NFC")),
						(l = l.normalize("NFC")),
						e.compare(n.slice(0, l.length), l) === 0),
			[e],
		),
		i = o.useCallback(
			(n, l) =>
				l.length === 0
					? !0
					: ((n = n.normalize("NFC")),
						(l = l.normalize("NFC")),
						e.compare(n.slice(-l.length), l) === 0),
			[e],
		),
		t = o.useCallback(
			(n, l) => {
				if (l.length === 0) return !0;
				(n = n.normalize("NFC")), (l = l.normalize("NFC"));
				let c = 0,
					f = l.length;
				for (; c + f <= n.length; c++) {
					const d = n.slice(c, c + f);
					if (e.compare(l, d) === 0) return !0;
				}
				return !1;
			},
			[e],
		);
	return o.useMemo(
		() => ({ startsWith: a, endsWith: i, contains: t }),
		[a, i, t],
	);
}
export {
	_e as h,
	A as m,
	C as n,
	Ge as c,
	je as o,
	Ke as d,
	ke as i,
	Qe as j,
	q as b,
	qe as f,
	Re as e,
	Se as g,
	Ue as $,
	W as l,
	We as k,
	ze as a,
};
