import { m as De, l as Ke } from "./Button-DMaXDISd.js";
import { b as He, m as je, n as T } from "./Hidden-DxJAwdyU.js";
import { R as k, r as N } from "./index-BGsE_GxY.js";
import { $ as pe } from "./useControlledState-DNChzxNu.js";
import {
	q as _e,
	F as $e,
	g as Ae,
	r as Be,
	l as Ce,
	e as E,
	f as F,
	n as Ie,
	c as L,
	m as Me,
	o as Pe,
	i as Re,
	j as We,
	E as w,
} from "./useHover-qyAt-50Y.js";
function ht(e) {
	return Re() ? e.metaKey : e.ctrlKey;
}
const ze = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset",
]);
function bt(e) {
	return (
		(e instanceof HTMLInputElement && !ze.has(e.type)) ||
		e instanceof HTMLTextAreaElement ||
		(e instanceof HTMLElement && e.isContentEditable)
	);
}
function $t(e, t, r, n) {
	const o = De(r),
		l = r == null;
	N.useEffect(() => {
		if (l || !e.current) return;
		const i = e.current;
		return (
			i.addEventListener(t, o, n),
			() => {
				i.removeEventListener(t, o, n);
			}
		);
	}, [e, t, n, l]);
}
function pt(e, t) {
	let { id: r, "aria-label": n, "aria-labelledby": o } = e;
	return (
		(r = He(r)),
		o && n
			? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" "))
			: o && (o = o.trim().split(/\s+/).join(" ")),
		!n && !o && t && (n = t),
		{ id: r, "aria-label": n, "aria-labelledby": o }
	);
}
const Ue = Symbol.for("react-aria.i18n.locale"),
	qe = Symbol.for("react-aria.i18n.strings");
let S;
class G {
	constructor(t, r = "en-US") {
		(this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n))),
			(this.defaultLocale = r);
	}
	getStringForLocale(t, r) {
		const o = this.getStringsForLocale(r)[t];
		if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
		return o;
	}
	getStringsForLocale(t) {
		let r = this.strings[t];
		return (
			r ||
				((r = Ge(t, this.strings, this.defaultLocale)), (this.strings[t] = r)),
			r
		);
	}
	static getGlobalDictionaryForPackage(t) {
		if (typeof window > "u") return null;
		const r = window[Ue];
		if (S === void 0) {
			const o = window[qe];
			if (!o) return null;
			S = {};
			for (const l in o) S[l] = new G({ [r]: o[l] }, r);
		}
		const n = S == null ? void 0 : S[t];
		if (!n)
			throw new Error(
				`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
			);
		return n;
	}
}
function Ge(e, t, r = "en-US") {
	if (t[e]) return t[e];
	const n = Je(e);
	if (t[n]) return t[n];
	for (const o in t) if (o.startsWith(n + "-")) return t[o];
	return t[r];
}
function Je(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const ce = new Map(),
	fe = new Map();
class Xe {
	constructor(t, r) {
		(this.locale = t), (this.strings = r);
	}
	format(t, r) {
		const n = this.strings.getStringForLocale(t, this.locale);
		return typeof n == "function" ? n(r, this) : n;
	}
	plural(t, r, n = "cardinal") {
		let o = r["=" + t];
		if (o) return typeof o == "function" ? o() : o;
		let l = this.locale + ":" + n,
			i = ce.get(l);
		i || ((i = new Intl.PluralRules(this.locale, { type: n })), ce.set(l, i));
		const a = i.select(t);
		return (o = r[a] || r.other), typeof o == "function" ? o() : o;
	}
	number(t) {
		let r = fe.get(this.locale);
		return (
			r || ((r = new Intl.NumberFormat(this.locale)), fe.set(this.locale, r)),
			r.format(t)
		);
	}
	select(t, r) {
		const n = t[r] || t.other;
		return typeof n == "function" ? n() : n;
	}
}
const se = new WeakMap();
function Ye(e) {
	let t = se.get(e);
	return t || ((t = new G(e)), se.set(e, t)), t;
}
function Oe(e, t) {
	return (t && G.getGlobalDictionaryForPackage(t)) || Ye(e);
}
function Nt(e, t) {
	const { locale: r } = pe(),
		n = Oe(e, t);
	return N.useMemo(() => new Xe(r, n), [r, n]);
}
function Z(e, t) {
	if (!e) return !1;
	let r = window.getComputedStyle(e),
		n = document.scrollingElement || document.documentElement,
		o = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
	return (
		e === n && r.overflow !== "hidden" && (o = !0),
		o &&
			t &&
			(o =
				e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
		o
	);
}
function mt(e, t) {
	let r = e;
	for (Z(r, t) && (r = r.parentElement); r && !Z(r, t); ) r = r.parentElement;
	return r || document.scrollingElement || document.documentElement;
}
function J(e, t) {
	const r = [],
		n = document.scrollingElement || document.documentElement;
	for (; e && (Z(e, t) && r.push(e), e !== n); ) e = e.parentElement;
	return r;
}
function X(e, t, r = {}) {
	const { block: n = "nearest", inline: o = "nearest" } = r;
	if (e === t) return;
	let l = e.scrollTop,
		i = e.scrollLeft,
		a = t.getBoundingClientRect(),
		u = e.getBoundingClientRect(),
		f = window.getComputedStyle(t),
		c = window.getComputedStyle(e),
		s = document.scrollingElement || document.documentElement,
		d = e === s,
		h = e === s ? 0 : u.top,
		$ = e === s ? e.clientHeight : u.bottom,
		W = e === s ? 0 : u.left,
		R = e === s ? e.clientWidth : u.right,
		we = parseFloat(f.scrollMarginTop) || 0,
		ve = parseFloat(f.scrollMarginBottom) || 0,
		ge = parseFloat(f.scrollMarginLeft) || 0,
		Te = parseFloat(f.scrollMarginRight) || 0,
		Ee = parseFloat(c.scrollPaddingTop) || 0,
		ye = parseFloat(c.scrollPaddingBottom) || 0,
		xe = parseFloat(c.scrollPaddingLeft) || 0,
		Se = parseFloat(c.scrollPaddingRight) || 0,
		ne = parseFloat(c.borderTopWidth) || 0,
		oe = parseFloat(c.borderBottomWidth) || 0,
		le = parseFloat(c.borderLeftWidth) || 0,
		ae = parseFloat(c.borderRightWidth) || 0,
		A = a.top - we,
		B = a.bottom + ve,
		D = a.left - ge,
		K = a.right + Te,
		Fe = e === s ? 0 : le + ae,
		ke = e === s ? 0 : ne + oe,
		ie = e === s ? 0 : e.offsetWidth - e.clientWidth - Fe,
		Le = e === s ? 0 : e.offsetHeight - e.clientHeight - ke,
		H = h + (d ? 0 : ne) + Ee,
		j = $ - (d ? 0 : oe) - ye - Le,
		C = W + (d ? 0 : le) + xe,
		M = R - (d ? 0 : ae) - Se;
	c.direction === "rtl" && !Ce() ? (C += ie) : (M -= ie);
	const z = A < H || B > j,
		U = D < C || K > M;
	if (z && n === "start") l += A - H;
	else if (z && n === "center") l += (A + B) / 2 - (H + j) / 2;
	else if (z && n === "end") l += B - j;
	else if (z && n === "nearest") {
		const _ = A - H,
			P = B - j;
		l += Math.abs(_) <= Math.abs(P) ? _ : P;
	}
	if (U && o === "start") i += D - C;
	else if (U && o === "center") i += (D + K) / 2 - (C + M) / 2;
	else if (U && o === "end") i += K - M;
	else if (U && o === "nearest") {
		const _ = D - C,
			P = K - M;
		i += Math.abs(_) <= Math.abs(P) ? _ : P;
	}
	e.scrollTo({ left: i, top: l });
}
function wt(e, t = {}) {
	var n, o, l;
	const { containingElement: r } = t;
	if (e && e.isConnected) {
		const i = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(i).overflow === "hidden") {
			let { left: u, top: f } = e.getBoundingClientRect(),
				c = J(e, !0);
			for (const h of c) X(h, e);
			const { left: s, top: d } = e.getBoundingClientRect();
			if (Math.abs(u - s) > 1 || Math.abs(f - d) > 1) {
				c = r ? J(r, !0) : [];
				for (const h of c) X(h, r, { block: "center", inline: "center" });
				for (const h of J(e, !0)) X(h, e);
			}
		} else {
			const { left: u, top: f } = e.getBoundingClientRect();
			(n = e == null ? void 0 : e.scrollIntoView) == null ||
				n.call(e, { block: "nearest" });
			const { left: c, top: s } = e.getBoundingClientRect();
			(Math.abs(u - c) > 1 || Math.abs(f - s) > 1) &&
				((o = r == null ? void 0 : r.scrollIntoView) == null ||
					o.call(r, { block: "center", inline: "center" }),
				(l = e.scrollIntoView) == null || l.call(e, { block: "nearest" }));
		}
	}
}
let Qe = 0;
const Y = new Map();
function vt(e) {
	const [t, r] = N.useState();
	return (
		T(() => {
			if (!e) return;
			let n = Y.get(e);
			if (n) r(n.element.id);
			else {
				const o = `react-aria-description-${Qe++}`;
				r(o);
				const l = document.createElement("div");
				(l.id = o),
					(l.style.display = "none"),
					(l.textContent = e),
					document.body.appendChild(l),
					(n = { refCount: 0, element: l }),
					Y.set(e, n);
			}
			return (
				n.refCount++,
				() => {
					n && --n.refCount === 0 && (n.element.remove(), Y.delete(e));
				}
			);
		}, [e]),
		{ "aria-describedby": e ? t : void 0 }
	);
}
const ue = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap",
};
function Ze(e = {}) {
	const { style: t, isFocusable: r } = e,
		[n, o] = N.useState(!1),
		{ focusWithinProps: l } = Me({
			isDisabled: !r,
			onFocusWithinChange: (a) => o(a),
		}),
		i = N.useMemo(() => (n ? t : t ? { ...ue, ...t } : ue), [n]);
	return { visuallyHiddenProps: { ...l, style: i } };
}
function gt(e) {
	const {
			children: t,
			elementType: r = "div",
			isFocusable: n,
			style: o,
			...l
		} = e,
		{ visuallyHiddenProps: i } = Ze(e);
	return k.createElement(r, je(l, i), t);
}
class Ve {
	constructor(t, r, n, o) {
		(this._walkerStack = []),
			(this._currentSetFor = new Set()),
			(this._acceptNode = (i) => {
				var a;
				if (i.nodeType === Node.ELEMENT_NODE) {
					const u = i.shadowRoot;
					if (u) {
						const f = this._doc.createTreeWalker(u, this.whatToShow, {
							acceptNode: this._acceptNode,
						});
						return this._walkerStack.unshift(f), NodeFilter.FILTER_ACCEPT;
					} else {
						if (typeof this.filter == "function") return this.filter(i);
						if ((a = this.filter) != null && a.acceptNode)
							return this.filter.acceptNode(i);
						if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
					}
				}
				return NodeFilter.FILTER_SKIP;
			}),
			(this._doc = t),
			(this.root = r),
			(this.filter = o ?? null),
			(this.whatToShow = n ?? NodeFilter.SHOW_ALL),
			(this._currentNode = r),
			this._walkerStack.unshift(t.createTreeWalker(r, n, this._acceptNode));
		const l = r.shadowRoot;
		if (l) {
			const i = this._doc.createTreeWalker(l, this.whatToShow, {
				acceptNode: this._acceptNode,
			});
			this._walkerStack.unshift(i);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(t) {
		if (!L(this.root, t))
			throw new Error(
				"Cannot set currentNode to a node that is not contained by the root node.",
			);
		const r = [];
		let n = t,
			o = t;
		for (this._currentNode = t; n && n !== this.root; )
			if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
				const i = n,
					a = this._doc.createTreeWalker(i, this.whatToShow, {
						acceptNode: this._acceptNode,
					});
				r.push(a),
					(a.currentNode = o),
					this._currentSetFor.add(a),
					(n = o = i.host);
			} else n = n.parentNode;
		const l = this._doc.createTreeWalker(this.root, this.whatToShow, {
			acceptNode: this._acceptNode,
		});
		r.push(l),
			(l.currentNode = o),
			this._currentSetFor.add(l),
			(this._walkerStack = r);
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		const t = this.currentNode,
			r = this.nextNode();
		return L(t, r)
			? (r && (this.currentNode = r), r)
			: ((this.currentNode = t), null);
	}
	lastChild() {
		const r = this._walkerStack[0].lastChild();
		return r && (this.currentNode = r), r;
	}
	nextNode() {
		var r;
		const t = this._walkerStack[0].nextNode();
		if (t) {
			if (t.shadowRoot) {
				let o;
				if (
					(typeof this.filter == "function"
						? (o = this.filter(t))
						: (r = this.filter) != null &&
							r.acceptNode &&
							(o = this.filter.acceptNode(t)),
					o === NodeFilter.FILTER_ACCEPT)
				)
					return (this.currentNode = t), t;
				const l = this.nextNode();
				return l && (this.currentNode = l), l;
			}
			return t && (this.currentNode = t), t;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			const n = this.nextNode();
			return n && (this.currentNode = n), n;
		} else return null;
	}
	previousNode() {
		var n;
		const t = this._walkerStack[0];
		if (t.currentNode === t.root) {
			if (this._currentSetFor.has(t))
				if ((this._currentSetFor.delete(t), this._walkerStack.length > 1)) {
					this._walkerStack.shift();
					const o = this.previousNode();
					return o && (this.currentNode = o), o;
				} else return null;
			return null;
		}
		const r = t.previousNode();
		if (r) {
			if (r.shadowRoot) {
				let l;
				if (
					(typeof this.filter == "function"
						? (l = this.filter(r))
						: (n = this.filter) != null &&
							n.acceptNode &&
							(l = this.filter.acceptNode(r)),
					l === NodeFilter.FILTER_ACCEPT)
				)
					return r && (this.currentNode = r), r;
				const i = this.lastChild();
				return i && (this.currentNode = i), i;
			}
			return r && (this.currentNode = r), r;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			const o = this.previousNode();
			return o && (this.currentNode = o), o;
		} else return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
}
function et(e, t, r, n) {
	return _e() ? new Ve(e, t, r, n) : e.createTreeWalker(t, r, n);
}
const de = k.createContext(null),
	V = "react-aria-focus-scope-restore";
let b = null;
function Tt(e) {
	const { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		l = N.useRef(null),
		i = N.useRef(null),
		a = N.useRef([]),
		{ parentNode: u } = N.useContext(de) || {},
		f = N.useMemo(() => new te({ scopeRef: a }), [a]);
	T(() => {
		let d = u || p.root;
		if (p.getTreeNode(d.scopeRef) && b && !q(b, d.scopeRef)) {
			const h = p.getTreeNode(b);
			h && (d = h);
		}
		d.addChild(f), p.addNode(f);
	}, [f, u]),
		T(() => {
			const d = p.getTreeNode(a);
			d && (d.contain = !!r);
		}, [r]),
		T(() => {
			var W;
			let d = (W = l.current) == null ? void 0 : W.nextSibling,
				h = [],
				$ = (R) => R.stopPropagation();
			for (; d && d !== i.current; )
				h.push(d), d.addEventListener(V, $), (d = d.nextSibling);
			return (
				(a.current = h),
				() => {
					for (const R of h) R.removeEventListener(V, $);
				}
			);
		}, [t]),
		at(a, n, r),
		ot(a, r),
		it(a, n, r),
		lt(a, o),
		N.useEffect(() => {
			const d = E(w(a.current ? a.current[0] : void 0));
			let h = null;
			if (g(d, a.current)) {
				for (const $ of p.traverse())
					$.scopeRef && g(d, $.scopeRef.current) && (h = $);
				h === p.getTreeNode(a) && (b = h.scopeRef);
			}
		}, [a]),
		T(
			() => () => {
				var h, $;
				const d =
					(($ = (h = p.getTreeNode(a)) == null ? void 0 : h.parent) == null
						? void 0
						: $.scopeRef) ?? null;
				(a === b || q(a, b)) && (!d || p.getTreeNode(d)) && (b = d),
					p.removeTreeNode(a);
			},
			[a],
		);
	const c = N.useMemo(() => tt(a), []),
		s = N.useMemo(() => ({ focusManager: c, parentNode: f }), [f, c]);
	return k.createElement(
		de.Provider,
		{ value: s },
		k.createElement("span", {
			"data-focus-scope-start": !0,
			hidden: !0,
			ref: l,
		}),
		t,
		k.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: i }),
	);
}
function tt(e) {
	return {
		focusNext(t = {}) {
			const r = e.current,
				{ from: n, tabbable: o, wrap: l, accept: i } = t,
				a = n || E(w(r[0] ?? void 0)),
				u = r[0].previousElementSibling,
				f = x(r),
				c = v(f, { tabbable: o, accept: i }, r);
			c.currentNode = g(a, r) ? a : u;
			let s = c.nextNode();
			return (
				!s && l && ((c.currentNode = u), (s = c.nextNode())), s && m(s, !0), s
			);
		},
		focusPrevious(t = {}) {
			const r = e.current,
				{ from: n, tabbable: o, wrap: l, accept: i } = t,
				a = n || E(w(r[0] ?? void 0)),
				u = r[r.length - 1].nextElementSibling,
				f = x(r),
				c = v(f, { tabbable: o, accept: i }, r);
			c.currentNode = g(a, r) ? a : u;
			let s = c.previousNode();
			return (
				!s && l && ((c.currentNode = u), (s = c.previousNode())),
				s && m(s, !0),
				s
			);
		},
		focusFirst(t = {}) {
			const r = e.current,
				{ tabbable: n, accept: o } = t,
				l = x(r),
				i = v(l, { tabbable: n, accept: o }, r);
			i.currentNode = r[0].previousElementSibling;
			const a = i.nextNode();
			return a && m(a, !0), a;
		},
		focusLast(t = {}) {
			const r = e.current,
				{ tabbable: n, accept: o } = t,
				l = x(r),
				i = v(l, { tabbable: n, accept: o }, r);
			i.currentNode = r[r.length - 1].nextElementSibling;
			const a = i.previousNode();
			return a && m(a, !0), a;
		},
	};
}
function x(e) {
	return e[0].parentElement;
}
function I(e) {
	let t = p.getTreeNode(b);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function rt(e) {
	if (!e.form)
		return Array.from(
			w(e).querySelectorAll(
				`input[type="radio"][name="${CSS.escape(e.name)}"]`,
			),
		).filter((n) => !n.form);
	const t = e.form.elements.namedItem(e.name);
	const r = $e(e);
	return t instanceof r.RadioNodeList
		? Array.from(t).filter((n) => n instanceof r.HTMLInputElement)
		: t instanceof r.HTMLInputElement
			? [t]
			: [];
}
function nt(e) {
	if (e.checked) return !0;
	const t = rt(e);
	return t.length > 0 && !t.some((r) => r.checked);
}
function ot(e, t) {
	const r = N.useRef(void 0),
		n = N.useRef(void 0);
	T(() => {
		const o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = void 0));
			return;
		}
		const l = w(o ? o[0] : void 0);
		const i = (f) => {
				if (
					f.key !== "Tab" ||
					f.altKey ||
					f.ctrlKey ||
					f.metaKey ||
					!I(e) ||
					f.isComposing
				)
					return;
				const c = E(l),
					s = e.current;
				if (!s || !g(c, s)) return;
				const d = x(s),
					h = v(d, { tabbable: !0 }, s);
				if (!c) return;
				h.currentNode = c;
				let $ = f.shiftKey ? h.previousNode() : h.nextNode();
				$ ||
					((h.currentNode = f.shiftKey
						? s[s.length - 1].nextElementSibling
						: s[0].previousElementSibling),
					($ = f.shiftKey ? h.previousNode() : h.nextNode())),
					f.preventDefault(),
					$ && (m($, !0), $ instanceof $e($).HTMLInputElement && $.select());
			},
			a = (f) => {
				(!b || q(b, e)) && g(F(f), e.current)
					? ((b = e), (r.current = F(f)))
					: I(e) && !y(F(f), e)
						? r.current
							? r.current.focus()
							: b && b.current && ee(b.current)
						: I(e) && (r.current = F(f));
			},
			u = (f) => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						var h;
						const c = Be(),
							s = (c === "virtual" || c === null) && We() && Ae(),
							d = E(l);
						if (!s && d && I(e) && !y(d, e)) {
							b = e;
							const $ = F(f);
							$ && $.isConnected
								? ((r.current = $), (h = r.current) == null || h.focus())
								: b.current && ee(b.current);
						}
					}));
			};
		return (
			l.addEventListener("keydown", i, !1),
			l.addEventListener("focusin", a, !1),
			o == null || o.forEach((f) => f.addEventListener("focusin", a, !1)),
			o == null || o.forEach((f) => f.addEventListener("focusout", u, !1)),
			() => {
				l.removeEventListener("keydown", i, !1),
					l.removeEventListener("focusin", a, !1),
					o == null ||
						o.forEach((f) => f.removeEventListener("focusin", a, !1)),
					o == null ||
						o.forEach((f) => f.removeEventListener("focusout", u, !1));
			}
		);
	}, [e, t]),
		T(
			() => () => {
				n.current && cancelAnimationFrame(n.current);
			},
			[n],
		);
}
function Ne(e) {
	return y(e);
}
function g(e, t) {
	return !e || !t ? !1 : t.some((r) => L(r, e));
}
function y(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
		return !0;
	for (const { scopeRef: r } of p.traverse(p.getTreeNode(t)))
		if (r && g(e, r.current)) return !0;
	return !1;
}
function Et(e) {
	return y(e, b);
}
function q(e, t) {
	var n;
	let r = (n = p.getTreeNode(t)) == null ? void 0 : n.parent;
	for (; r; ) {
		if (r.scopeRef === e) return !0;
		r = r.parent;
	}
	return !1;
}
function m(e, t = !1) {
	if (e != null && !t)
		try {
			Ke(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function me(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = x(e),
		o = v(n, { tabbable: t }, e);
	o.currentNode = r;
	let l = o.nextNode();
	return (
		t &&
			!l &&
			((n = x(e)),
			(o = v(n, { tabbable: !1 }, e)),
			(o.currentNode = r),
			(l = o.nextNode())),
		l
	);
}
function ee(e, t = !0) {
	m(me(e, t));
}
function lt(e, t) {
	const r = k.useRef(t);
	N.useEffect(() => {
		if (r.current) {
			b = e;
			const n = w(e.current ? e.current[0] : void 0);
			!g(E(n), b.current) && e.current && ee(e.current);
		}
		r.current = !1;
	}, [e]);
}
function at(e, t, r) {
	T(() => {
		if (t || r) return;
		const n = e.current;
		const o = w(n ? n[0] : void 0);
		const l = (i) => {
			const a = F(i);
			g(a, e.current) ? (b = e) : Ne(a) || (b = null);
		};
		return (
			o.addEventListener("focusin", l, !1),
			n == null || n.forEach((i) => i.addEventListener("focusin", l, !1)),
			() => {
				o.removeEventListener("focusin", l, !1),
					n == null ||
						n.forEach((i) => i.removeEventListener("focusin", l, !1));
			}
		);
	}, [e, t, r]);
}
function he(e) {
	let t = p.getTreeNode(b);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return (t == null ? void 0 : t.scopeRef) === e;
}
function it(e, t, r) {
	const n = N.useRef(
		typeof document < "u" ? E(w(e.current ? e.current[0] : void 0)) : null,
	);
	T(() => {
		const o = e.current;
		const l = w(o ? o[0] : void 0);
		if (!t || r) return;
		const i = () => {
			(!b || q(b, e)) && g(E(l), e.current) && (b = e);
		};
		return (
			l.addEventListener("focusin", i, !1),
			o == null || o.forEach((a) => a.addEventListener("focusin", i, !1)),
			() => {
				l.removeEventListener("focusin", i, !1),
					o == null ||
						o.forEach((a) => a.removeEventListener("focusin", i, !1));
			}
		);
	}, [e, r]),
		T(() => {
			const o = w(e.current ? e.current[0] : void 0);
			if (!t) return;
			const l = (i) => {
				if (
					i.key !== "Tab" ||
					i.altKey ||
					i.ctrlKey ||
					i.metaKey ||
					!I(e) ||
					i.isComposing
				)
					return;
				const a = o.activeElement;
				if (!y(a, e) || !he(e)) return;
				const u = p.getTreeNode(e);
				if (!u) return;
				let f = u.nodeToRestore,
					c = v(o.body, { tabbable: !0 });
				c.currentNode = a;
				let s = i.shiftKey ? c.previousNode() : c.nextNode();
				if (
					((!f || !f.isConnected || f === o.body) &&
						((f = void 0), (u.nodeToRestore = void 0)),
					(!s || !y(s, e)) && f)
				) {
					c.currentNode = f;
					do s = i.shiftKey ? c.previousNode() : c.nextNode();
					while (y(s, e));
					i.preventDefault(),
						i.stopPropagation(),
						s ? m(s, !0) : Ne(f) ? m(f, !0) : a.blur();
				}
			};
			return (
				r || o.addEventListener("keydown", l, !0),
				() => {
					r || o.removeEventListener("keydown", l, !0);
				}
			);
		}, [e, t, r]),
		T(() => {
			const o = w(e.current ? e.current[0] : void 0);
			if (!t) return;
			const l = p.getTreeNode(e);
			if (l)
				return (
					(l.nodeToRestore = n.current ?? void 0),
					() => {
						const i = p.getTreeNode(e);
						if (!i) return;
						const a = i.nodeToRestore,
							u = E(o);
						if (t && a && ((u && y(u, e)) || (u === o.body && he(e)))) {
							const f = p.clone();
							requestAnimationFrame(() => {
								if (o.activeElement === o.body) {
									let c = f.getTreeNode(e);
									for (; c; ) {
										if (c.nodeToRestore && c.nodeToRestore.isConnected) {
											be(c.nodeToRestore);
											return;
										}
										c = c.parent;
									}
									for (c = f.getTreeNode(e); c; ) {
										if (
											c.scopeRef &&
											c.scopeRef.current &&
											p.getTreeNode(c.scopeRef)
										) {
											const s = me(c.scopeRef.current, !0);
											be(s);
											return;
										}
										c = c.parent;
									}
								}
							});
						}
					}
				);
		}, [e, t]);
}
function be(e) {
	e.dispatchEvent(new CustomEvent(V, { bubbles: !0, cancelable: !0 })) && m(e);
}
function v(e, t, r) {
	const n = t != null && t.tabbable ? Pe : Ie,
		o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
		l = w(o),
		i = et(l, e || l, NodeFilter.SHOW_ELEMENT, {
			acceptNode(a) {
				return L(t == null ? void 0 : t.from, a) ||
					(t != null &&
						t.tabbable &&
						a.tagName === "INPUT" &&
						a.getAttribute("type") === "radio" &&
						(!nt(a) ||
							(i.currentNode.tagName === "INPUT" &&
								i.currentNode.type === "radio" &&
								i.currentNode.name === a.name)))
					? NodeFilter.FILTER_REJECT
					: n(a) && (!r || g(a, r)) && (!(t != null && t.accept) || t.accept(a))
						? NodeFilter.FILTER_ACCEPT
						: NodeFilter.FILTER_SKIP;
			},
		});
	return t != null && t.from && (i.currentNode = t.from), i;
}
function yt(e, t = {}) {
	return {
		focusNext(r = {}) {
			const n = e.current;
			if (!n) return null;
			const {
					from: o,
					tabbable: l = t.tabbable,
					wrap: i = t.wrap,
					accept: a = t.accept,
				} = r,
				u = o || E(w(n)),
				f = v(n, { tabbable: l, accept: a });
			L(n, u) && (f.currentNode = u);
			let c = f.nextNode();
			return (
				!c && i && ((f.currentNode = n), (c = f.nextNode())), c && m(c, !0), c
			);
		},
		focusPrevious(r = t) {
			const n = e.current;
			if (!n) return null;
			const {
					from: o,
					tabbable: l = t.tabbable,
					wrap: i = t.wrap,
					accept: a = t.accept,
				} = r,
				u = o || E(w(n)),
				f = v(n, { tabbable: l, accept: a });
			if (L(n, u)) f.currentNode = u;
			else {
				const s = O(f);
				return s && m(s, !0), s ?? null;
			}
			let c = f.previousNode();
			if (!c && i) {
				f.currentNode = n;
				const s = O(f);
				if (!s) return null;
				c = s;
			}
			return c && m(c, !0), c ?? null;
		},
		focusFirst(r = t) {
			const n = e.current;
			if (!n) return null;
			const { tabbable: o = t.tabbable, accept: l = t.accept } = r,
				a = v(n, { tabbable: o, accept: l }).nextNode();
			return a && m(a, !0), a;
		},
		focusLast(r = t) {
			const n = e.current;
			if (!n) return null;
			const { tabbable: o = t.tabbable, accept: l = t.accept } = r,
				i = v(n, { tabbable: o, accept: l }),
				a = O(i);
			return a && m(a, !0), a ?? null;
		},
	};
}
function O(e) {
	let t, r;
	do (r = e.lastChild()), r && (t = r);
	while (r);
	return t;
}
class re {
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new te({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		const o = this.fastMap.get(r ?? null);
		if (!o) return;
		const l = new te({ scopeRef: t });
		o.addChild(l),
			(l.parent = o),
			this.fastMap.set(t, l),
			n && (l.nodeToRestore = n);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		const r = this.fastMap.get(t);
		if (!r) return;
		const n = r.parent;
		for (const l of this.traverse())
			l !== r &&
				r.nodeToRestore &&
				l.nodeToRestore &&
				r.scopeRef &&
				r.scopeRef.current &&
				g(l.nodeToRestore, r.scopeRef.current) &&
				(l.nodeToRestore = r.nodeToRestore);
		const o = r.children;
		n && (n.removeChild(r), o.size > 0 && o.forEach((l) => n && n.addChild(l))),
			this.fastMap.delete(r.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (const r of t.children) yield* this.traverse(r);
	}
	clone() {
		var r;
		const t = new re();
		for (const n of this.traverse())
			t.addTreeNode(
				n.scopeRef,
				((r = n.parent) == null ? void 0 : r.scopeRef) ?? null,
				n.nodeToRestore,
			);
		return t;
	}
}
class te {
	constructor(t) {
		(this.children = new Set()),
			(this.contain = !1),
			(this.scopeRef = t.scopeRef);
	}
	addChild(t) {
		this.children.add(t), (t.parent = this);
	}
	removeChild(t) {
		this.children.delete(t), (t.parent = void 0);
	}
}
const p = new re(),
	Q = new Map();
function xt(e) {
	const { locale: t } = pe(),
		r =
			t +
			(e
				? Object.entries(e)
						.sort((o, l) => (o[0] < l[0] ? -1 : 1))
						.join()
				: "");
	if (Q.has(r)) return Q.get(r);
	const n = new Intl.Collator(t, e);
	return Q.set(r, n), n;
}
export {
	$t as h,
	bt as o,
	Et as d,
	et as i,
	G as l,
	gt as s,
	ht as n,
	mt as a,
	Nt as q,
	Oe as p,
	pt as r,
	Tt as e,
	v as f,
	vt as $,
	wt as c,
	X as b,
	Xe as m,
	xt as j,
	yt as g,
	Z as k,
	Ze as t,
};
