import { m as de, e as ge } from "./Button-DMaXDISd.js";
import { f as ie, n as j, i as me, e as pe } from "./Hidden-DxJAwdyU.js";
import { r as A, R as he } from "./index-BGsE_GxY.js";
import { $ as xe } from "./useControlledState-DNChzxNu.js";
import {
	f as $e,
	d as be,
	e as q,
	c as te,
	h as ue,
} from "./useHover-qyAt-50Y.js";
function U(t, e = -1 / 0, o = 1 / 0) {
	return Math.min(Math.max(t, e), o);
}
const Ee = A.createContext({ placement: "bottom" }),
	Xe = A.forwardRef((e, o) => {
		[e, o] = pe(e, o, Ee);
		const r = e.placement,
			l = {
				position: "absolute",
				transform:
					r === "top" || r === "bottom"
						? "translateX(-50%)"
						: "translateY(-50%)",
			};
		r != null && (l[r] = "100%");
		const n = ie({
			...e,
			defaultClassName: "react-aria-OverlayArrow",
			values: { placement: r },
		});
		n.style &&
			Object.keys(n.style).forEach(
				(c) => n.style[c] === void 0 && delete n.style[c],
			);
		const f = ge(e);
		return he.createElement(me.div, {
			...f,
			...n,
			style: { ...l, ...n.style },
			ref: o,
			"data-placement": r,
		});
	}),
	I = { top: "top", bottom: "top", left: "left", right: "left" },
	_ = { top: "bottom", bottom: "top", left: "right", right: "left" },
	Pe = { top: "left", left: "top" },
	W = { top: "height", left: "width" },
	le = { width: "totalWidth", height: "totalHeight" },
	O = {};
const Le = () => (typeof document < "u" ? window.visualViewport : null);
function J(t, e) {
	let o = 0,
		r = 0,
		l = 0,
		n = 0,
		f = 0,
		c = 0,
		m = {},
		a = ((e == null ? void 0 : e.scale) ?? 1) > 1;
	if (t.tagName === "BODY" || t.tagName === "HTML") {
		const p = document.documentElement;
		(l = p.clientWidth),
			(n = p.clientHeight),
			(o = (e == null ? void 0 : e.width) ?? l),
			(r = (e == null ? void 0 : e.height) ?? n),
			(m.top = p.scrollTop || t.scrollTop),
			(m.left = p.scrollLeft || t.scrollLeft),
			e && ((f = e.offsetTop), (c = e.offsetLeft));
	} else
		({ width: o, height: r, top: f, left: c } = F(t, !1)),
			(m.top = t.scrollTop),
			(m.left = t.scrollLeft),
			(l = o),
			(n = r);
	return (
		ue() &&
			(t.tagName === "BODY" || t.tagName === "HTML") &&
			a &&
			((m.top = 0),
			(m.left = 0),
			(f = (e == null ? void 0 : e.pageTop) ?? 0),
			(c = (e == null ? void 0 : e.pageLeft) ?? 0)),
		{
			width: o,
			height: r,
			totalWidth: l,
			totalHeight: n,
			scroll: m,
			top: f,
			left: c,
		}
	);
}
function Te(t) {
	return {
		top: t.scrollTop,
		left: t.scrollLeft,
		width: t.scrollWidth,
		height: t.scrollHeight,
	};
}
function K(t, e, o, r, l, n, f) {
	const c = l.scroll[t] ?? 0,
		m = r[W[t]],
		a = f[t] + r.scroll[I[t]] + n,
		p = f[t] + r.scroll[I[t]] + m - n,
		L = e - c + r.scroll[I[t]] + f[t] - r[I[t]],
		b = e - c + o + r.scroll[I[t]] + f[t] - r[I[t]];
	return L < a ? a - L : b > p ? Math.max(p - b, a - L) : 0;
}
function Re(t) {
	const e = window.getComputedStyle(t);
	return {
		top: parseInt(e.marginTop, 10) || 0,
		bottom: parseInt(e.marginBottom, 10) || 0,
		left: parseInt(e.marginLeft, 10) || 0,
		right: parseInt(e.marginRight, 10) || 0,
	};
}
function Q(t) {
	if (O[t]) return O[t];
	let [e, o] = t.split(" "),
		r = I[e] || "right",
		l = Pe[r];
	I[o] || (o = "center");
	const n = W[r],
		f = W[l];
	return (
		(O[t] = {
			placement: e,
			crossPlacement: o,
			axis: r,
			crossAxis: l,
			size: n,
			crossSize: f,
		}),
		O[t]
	);
}
function Z(t, e, o, r, l, n, f, c, m, a, p) {
	const {
			placement: L,
			crossPlacement: b,
			axis: x,
			crossAxis: i,
			size: $,
			crossSize: T,
		} = r,
		C = {};
	(C[i] = t[i] ?? 0),
		b === "center"
			? (C[i] += ((t[T] ?? 0) - (o[T] ?? 0)) / 2)
			: b !== i && (C[i] += (t[T] ?? 0) - (o[T] ?? 0)),
		(C[i] += n);
	const s = t[i] - o[T] + m + a,
		y = t[i] + t[T] - m - a;
	if (((C[i] = U(C[i], s, y)), L === x)) {
		const g = c ? p[$] : p[le[$]];
		C[_[x]] = Math.floor(g - t[x] + l);
	} else C[x] = Math.floor(t[x] + t[$] + l);
	return C;
}
function Ce(t, e, o, r, l, n, f, c, m, a, p) {
	const L =
			(t.top != null ? t.top : m[le.height] - (t.bottom ?? 0) - f) -
			(m.scroll.top ?? 0),
		b = a ? o.top : 0,
		x = {
			top: Math.max(
				e.top + b,
				((p == null ? void 0 : p.offsetTop) ?? e.top) + b,
			),
			bottom: Math.min(
				e.top + e.height + b,
				((p == null ? void 0 : p.offsetTop) ?? 0) +
					((p == null ? void 0 : p.height) ?? 0),
			),
		};
	return c !== "top"
		? Math.max(0, x.bottom - L - ((l.top ?? 0) + (l.bottom ?? 0) + n))
		: Math.max(0, L + f - x.top - ((l.top ?? 0) + (l.bottom ?? 0) + n));
}
function v(t, e, o, r, l, n, f, c) {
	const { placement: m, axis: a, size: p } = n;
	return m === a
		? Math.max(
				0,
				o[a] -
					(f.scroll[a] ?? 0) -
					(t[a] + (c ? e[a] : 0)) -
					(r[a] ?? 0) -
					r[_[a]] -
					l,
			)
		: Math.max(
				0,
				t[p] +
					t[a] +
					(c ? e[a] : 0) -
					o[a] -
					o[p] +
					(f.scroll[a] ?? 0) -
					(r[a] ?? 0) -
					r[_[a]] -
					l,
			);
}
function He(t, e, o, r, l, n, f, c, m, a, p, L, b, x, i, $, T, C) {
	let s = Q(t),
		{
			size: y,
			crossAxis: g,
			crossSize: M,
			placement: d,
			crossPlacement: w,
		} = s,
		E = Z(e, c, o, s, p, L, a, b, i, $, m),
		H = p,
		h = v(c, a, e, l, n + p, s, m, T);
	if (f && o[y] > h) {
		const B = Q(`${_[d]} ${w}`),
			se = Z(e, c, o, B, p, L, a, b, i, $, m);
		v(c, a, e, l, n + p, B, m, T) > h && ((s = B), (E = se), (H = p));
	}
	let R = "bottom";
	s.axis === "top"
		? s.placement === "top"
			? (R = "top")
			: s.placement === "bottom" && (R = "bottom")
		: s.crossAxis === "top" &&
			(s.crossPlacement === "top"
				? (R = "bottom")
				: s.crossPlacement === "bottom" && (R = "top"));
	let k = K(g, E[g], o[M], c, m, n, a);
	E[g] += k;
	let z = Ce(E, c, a, b, l, n, o.height, R, m, T, C);
	x && x < z && (z = x),
		(o.height = Math.min(o.height, z)),
		(E = Z(e, c, o, s, H, L, a, b, i, $, m)),
		(k = K(g, E[g], o[M], c, m, n, a)),
		(E[g] += k);
	let S = {},
		P = e[g] - E[g] - l[I[g]],
		N = P + 0.5 * e[M];
	const X = i / 2 + $,
		oe =
			I[g] === "left"
				? (l.left ?? 0) + (l.right ?? 0)
				: (l.top ?? 0) + (l.bottom ?? 0),
		re = o[M] - oe - i / 2 - $,
		ne = e[g] + i / 2 - (E[g] + l[I[g]]),
		fe = e[g] + e[M] - i / 2 - (E[g] + l[I[g]]),
		ce = U(N, ne, fe);
	(S[g] = U(ce, X, re)),
		({ placement: d, crossPlacement: w } = s),
		i
			? (P = S[g])
			: w === "right"
				? (P += e[M])
				: w === "center" && (P += e[M] / 2);
	const G = d === "left" || d === "top" ? o[y] : 0,
		ae = {
			x: d === "top" || d === "bottom" ? P : G,
			y: d === "left" || d === "right" ? P : G,
		};
	return {
		position: E,
		maxHeight: z,
		arrowOffsetLeft: S.left,
		arrowOffsetTop: S.top,
		placement: d,
		triggerAnchorPoint: ae,
	};
}
function Me(t) {
	const {
			placement: e,
			targetNode: o,
			overlayNode: r,
			scrollNode: l,
			padding: n,
			shouldFlip: f,
			boundaryElement: c,
			offset: m,
			crossOffset: a,
			maxHeight: p,
			arrowSize: L = 0,
			arrowBoundaryOffset: b = 0,
		} = t,
		x = Le(),
		i = r instanceof HTMLElement ? we(r) : document.documentElement,
		$ = i === document.documentElement;
	const T = window.getComputedStyle(i).position;
	const C = !!T && T !== "static",
		s = $ ? F(o, !1) : D(o, i, !1);
	if (!$) {
		const { marginTop: h, marginLeft: R } = window.getComputedStyle(o);
		(s.top += parseInt(h, 10) || 0), (s.left += parseInt(R, 10) || 0);
	}
	const y = F(r, !0),
		g = Re(r);
	(y.width += (g.left ?? 0) + (g.right ?? 0)),
		(y.height += (g.top ?? 0) + (g.bottom ?? 0));
	let M = Te(l),
		d = J(c, x),
		w = J(i, x),
		E;
	if ((c.tagName === "BODY" || c.tagName === "HTML") && !$) {
		const h = Y(i, !1);
		E = {
			top: -(h.top - d.top),
			left: -(h.left - d.left),
			width: 0,
			height: 0,
		};
	} else
		(c.tagName === "BODY" || c.tagName === "HTML") && $
			? (E = { top: 0, left: 0, width: 0, height: 0 })
			: (E = D(c, i, !1));
	const H = te(c, i);
	return He(e, s, y, M, g, n, f, d, w, E, m, a, C, p, L, b, H, x);
}
function Y(t, e) {
	let { top: o, left: r, width: l, height: n } = t.getBoundingClientRect();
	return (
		e &&
			t instanceof t.ownerDocument.defaultView.HTMLElement &&
			((l = t.offsetWidth), (n = t.offsetHeight)),
		{ top: o, left: r, width: l, height: n }
	);
}
function F(t, e) {
	const { top: o, left: r, width: l, height: n } = Y(t, e),
		{
			scrollTop: f,
			scrollLeft: c,
			clientTop: m,
			clientLeft: a,
		} = document.documentElement;
	return { top: o + f - m, left: r + c - a, width: l, height: n };
}
function D(t, e, o) {
	let r = window.getComputedStyle(t),
		l;
	if (r.position === "fixed") l = Y(t, o);
	else {
		l = F(t, o);
		const n = F(e, o),
			f = window.getComputedStyle(e);
		(n.top += (parseInt(f.borderTopWidth, 10) || 0) - e.scrollTop),
			(n.left += (parseInt(f.borderLeftWidth, 10) || 0) - e.scrollLeft),
			(l.top -= n.top),
			(l.left -= n.left);
	}
	return (
		(l.top -= parseInt(r.marginTop, 10) || 0),
		(l.left -= parseInt(r.marginLeft, 10) || 0),
		l
	);
}
function we(t) {
	let e = t.offsetParent;
	if (
		(e &&
			e === document.body &&
			window.getComputedStyle(e).position === "static" &&
			!V(e) &&
			(e = document.documentElement),
		e == null)
	)
		for (e = t.parentElement; e && !V(e); ) e = e.parentElement;
	return e || document.documentElement;
}
function V(t) {
	const e = window.getComputedStyle(t);
	return (
		e.transform !== "none" ||
		/transform|perspective/.test(e.willChange) ||
		e.filter !== "none" ||
		e.contain === "paint" ||
		("backdropFilter" in e && e.backdropFilter !== "none") ||
		("WebkitBackdropFilter" in e && e.WebkitBackdropFilter !== "none")
	);
}
const Ie = new WeakMap();
function ye(t) {
	const { triggerRef: e, isOpen: o, onClose: r } = t;
	A.useEffect(() => {
		if (!o || r === null) return;
		const l = (n) => {
			const f = $e(n);
			if (
				!e.current ||
				(f instanceof Node && !te(f, e.current)) ||
				f instanceof HTMLInputElement ||
				f instanceof HTMLTextAreaElement
			)
				return;
			const c = r || Ie.get(e.current);
			c && c();
		};
		return (
			window.addEventListener("scroll", l, !0),
			() => {
				window.removeEventListener("scroll", l, !0);
			}
		);
	}, [o, r, e]);
}
function Ae() {
	return typeof window.ResizeObserver < "u";
}
function ee(t) {
	const { ref: e, box: o, onResize: r } = t;
	const l = de(r);
	A.useEffect(() => {
		const n = e == null ? void 0 : e.current;
		if (n)
			if (Ae()) {
				const f = new window.ResizeObserver((c) => {
					c.length && l();
				});
				return (
					f.observe(n, { box: o }),
					() => {
						n && f.unobserve(n);
					}
				);
			} else
				return (
					window.addEventListener("resize", l, !1),
					() => {
						window.removeEventListener("resize", l, !1);
					}
				);
	}, [e, o]);
}
const u = typeof document < "u" ? window.visualViewport : null;
function Be(t) {
	const { direction: e } = xe(),
		{
			arrowSize: o,
			targetRef: r,
			overlayRef: l,
			arrowRef: n,
			scrollRef: f = l,
			placement: c = "bottom",
			containerPadding: m = 12,
			shouldFlip: a = !0,
			boundaryElement: p = typeof document < "u" ? document.body : null,
			offset: L = 0,
			crossOffset: b = 0,
			shouldUpdatePosition: x = !0,
			isOpen: i = !0,
			onClose: $,
			maxHeight: T,
			arrowBoundaryOffset: C = 0,
		} = t,
		[s, y] = A.useState(null),
		g = [
			x,
			c,
			l.current,
			r.current,
			n == null ? void 0 : n.current,
			f.current,
			m,
			a,
			p,
			L,
			b,
			i,
			e,
			T,
			C,
			o,
		],
		M = A.useRef(u == null ? void 0 : u.scale);
	A.useEffect(() => {
		i && (M.current = u == null ? void 0 : u.scale);
	}, [i]);
	const d = A.useCallback(() => {
		var z, S;
		if (
			x === !1 ||
			!i ||
			!l.current ||
			!r.current ||
			!p ||
			(u == null ? void 0 : u.scale) !== M.current
		)
			return;
		let H = null;
		if (f.current && be(f.current)) {
			const P = (z = q()) == null ? void 0 : z.getBoundingClientRect(),
				N = f.current.getBoundingClientRect();
			(H = {
				type: "top",
				offset: ((P == null ? void 0 : P.top) ?? 0) - N.top,
			}),
				H.offset > N.height / 2 &&
					((H.type = "bottom"),
					(H.offset = ((P == null ? void 0 : P.bottom) ?? 0) - N.bottom));
		}
		const h = l.current;
		!T &&
			l.current &&
			((h.style.top = "0px"),
			(h.style.bottom = ""),
			(h.style.maxHeight =
				(((S = window.visualViewport) == null ? void 0 : S.height) ??
					window.innerHeight) + "px"));
		const R = Me({
			placement: Se(c, e),
			overlayNode: l.current,
			targetNode: r.current,
			scrollNode: f.current || l.current,
			padding: m,
			shouldFlip: a,
			boundaryElement: p,
			offset: L,
			crossOffset: b,
			maxHeight: T,
			arrowSize: o ?? (n != null && n.current ? Y(n.current, !0).width : 0),
			arrowBoundaryOffset: C,
		});
		if (!R.position) return;
		(h.style.top = ""),
			(h.style.bottom = ""),
			(h.style.left = ""),
			(h.style.right = ""),
			Object.keys(R.position).forEach(
				(P) => (h.style[P] = R.position[P] + "px"),
			),
			(h.style.maxHeight = R.maxHeight != null ? R.maxHeight + "px" : "");
		const k = q();
		if (H && k && f.current) {
			const P = k.getBoundingClientRect(),
				N = f.current.getBoundingClientRect(),
				X = P[H.type] - N[H.type];
			f.current.scrollTop += X - H.offset;
		}
		y(R);
	}, g);
	j(d, g), ze(d), ee({ ref: l, onResize: d }), ee({ ref: r, onResize: d });
	const w = A.useRef(!1);
	j(() => {
		let H,
			h = () => {
				(w.current = !0),
					clearTimeout(H),
					(H = setTimeout(() => {
						w.current = !1;
					}, 500)),
					d();
			},
			R = () => {
				w.current && h();
			};
		return (
			u == null || u.addEventListener("resize", h),
			u == null || u.addEventListener("scroll", R),
			() => {
				u == null || u.removeEventListener("resize", h),
					u == null || u.removeEventListener("scroll", R);
			}
		);
	}, [d]);
	const E = A.useCallback(() => {
		w.current || $ == null || $();
	}, [$, w]);
	return (
		ye({ triggerRef: r, isOpen: i, onClose: $ && E }),
		{
			overlayProps: {
				style: {
					position: s ? "absolute" : "fixed",
					top: s ? void 0 : 0,
					left: s ? void 0 : 0,
					zIndex: 1e5,
					...(s == null ? void 0 : s.position),
					maxHeight: (s == null ? void 0 : s.maxHeight) ?? "100vh",
				},
			},
			placement: (s == null ? void 0 : s.placement) ?? null,
			triggerAnchorPoint: (s == null ? void 0 : s.triggerAnchorPoint) ?? null,
			arrowProps: {
				"aria-hidden": "true",
				role: "presentation",
				style: {
					left: s == null ? void 0 : s.arrowOffsetLeft,
					top: s == null ? void 0 : s.arrowOffsetTop,
				},
			},
			updatePosition: d,
		}
	);
}
function ze(t) {
	j(
		() => (
			window.addEventListener("resize", t, !1),
			() => {
				window.removeEventListener("resize", t, !1);
			}
		),
		[t],
	);
}
function Se(t, e) {
	return e === "rtl"
		? t.replace("start", "right").replace("end", "left")
		: t.replace("start", "left").replace("end", "right");
}
export { Be as d, Ee as a, ee as c, Ie as $, Xe as b };
