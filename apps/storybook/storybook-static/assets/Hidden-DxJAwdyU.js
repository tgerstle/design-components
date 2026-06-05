import { r as c, R as o } from "./index-BGsE_GxY.js";
function I(...e) {
	return (...t) => {
		for (const n of e) typeof n == "function" && n(...t);
	};
}
const y = typeof document < "u" ? o.useLayoutEffect : () => {},
	h = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	g = o.createContext(h),
	w = o.createContext(!1);
const x = new WeakMap();
function M(e = !1) {
	var r, f;
	const t = c.useContext(g),
		n = c.useRef(null);
	if (n.current === null && !e) {
		const u =
			(f =
				(r = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null
					? void 0
					: r.ReactCurrentOwner) == null
				? void 0
				: f.current;
		if (u) {
			const l = x.get(u);
			l == null
				? x.set(u, { id: t.current, state: u.memoizedState })
				: u.memoizedState !== l.state && ((t.current = l.id), x.delete(u));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function O(e) {
	const t = c.useContext(g),
		n = M(!!e),
		r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function N(e) {
	const t = o.useId(),
		[n] = c.useState(P()),
		r = n ? "react-aria" : `react-aria${h.prefix}`;
	return e || `${r}-${t}`;
}
const _ = typeof o.useId == "function" ? N : O;
function L() {
	return !1;
}
function k() {
	return !0;
}
function H(e) {
	return () => {};
}
function P() {
	return typeof o.useSyncExternalStore == "function"
		? o.useSyncExternalStore(H, L, k)
		: c.useContext(w);
}
function j(e) {
	const [t, n] = c.useState(e),
		r = c.useRef(t),
		f = c.useRef(null),
		u = c.useRef(() => {
			if (!f.current) return;
			const a = f.current.next();
			if (a.done) {
				f.current = null;
				return;
			}
			r.current === a.value ? u.current() : n(a.value);
		});
	y(() => {
		(r.current = t), f.current && u.current();
	});
	const l = c.useCallback(
		(a) => {
			(f.current = a(r.current)), u.current();
		},
		[u],
	);
	return [t, l];
}
let T = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	),
	$ = new Map(),
	p;
typeof FinalizationRegistry < "u" &&
	(p = new FinalizationRegistry((e) => {
		$.delete(e);
	}));
function F(e) {
	const [t, n] = c.useState(e),
		r = c.useRef(null),
		f = _(t),
		u = c.useRef(null);
	if ((p && p.register(u, f), T)) {
		const l = $.get(f);
		l && !l.includes(r) ? l.push(r) : $.set(f, [r]);
	}
	return (
		y(() => {
			const l = f;
			return () => {
				p && p.unregister(u), $.delete(l);
			};
		}, [f]),
		c.useEffect(() => {
			const l = r.current;
			return (
				l && n(l),
				() => {
					l && (r.current = null);
				}
			);
		}),
		f
	);
}
function V(e, t) {
	if (e === t) return e;
	const n = $.get(e);
	if (n) return n.forEach((f) => (f.current = t)), t;
	const r = $.get(t);
	return r ? (r.forEach((f) => (f.current = e)), e) : t;
}
function K(e = []) {
	const t = F(),
		[n, r] = j(t),
		f = c.useCallback(() => {
			r(function* () {
				yield t, yield document.getElementById(t) ? t : void 0;
			});
		}, [t, r]);
	return y(f, [t, f, ...e]), n;
}
function S(...e) {
	return e.length === 1 && e[0]
		? e[0]
		: (t) => {
				let n = !1;
				const r = e.map((f) => {
					const u = C(f, t);
					return n || (n = typeof u == "function"), u;
				});
				if (n)
					return () => {
						r.forEach((f, u) => {
							typeof f == "function" ? f() : C(e[u], null);
						});
					};
			};
}
function C(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function R(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var f = e.length;
			for (t = 0; t < f; t++)
				e[t] && (n = R(e[t])) && (r && (r += " "), (r += n));
		} else for (n in e) e[n] && (r && (r += " "), (r += n));
	return r;
}
function z() {
	for (var e, t, n = 0, r = "", f = arguments.length; n < f; n++)
		(e = arguments[n]) && (t = R(e)) && (r && (r += " "), (r += t));
	return r;
}
function A(...e) {
	const t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		const r = e[n];
		for (const f in r) {
			const u = t[f],
				l = r[f];
			typeof u == "function" &&
			typeof l == "function" &&
			f[0] === "o" &&
			f[1] === "n" &&
			f.charCodeAt(2) >= 65 &&
			f.charCodeAt(2) <= 90
				? (t[f] = I(u, l))
				: (f === "className" || f === "UNSAFE_className") &&
						typeof u == "string" &&
						typeof l == "string"
					? (t[f] = z(u, l))
					: f === "id" && u && l
						? (t.id = V(u, l))
						: f === "ref" && u && l
							? (t.ref = S(u, l))
							: (t[f] = l !== void 0 ? l : u);
		}
	}
	return t;
}
function D(e) {
	const t = c.useRef(null),
		n = c.useRef(void 0),
		r = c.useCallback(
			(f) => {
				if (typeof e == "function") {
					const u = e,
						l = u(f);
					return () => {
						typeof l == "function" ? l() : u(null);
					};
				} else if (e)
					return (
						(e.current = f),
						() => {
							e.current = null;
						}
					);
			},
			[e],
		);
	return c.useMemo(
		() => ({
			get current() {
				return t.current;
			},
			set current(f) {
				(t.current = f),
					n.current && (n.current(), (n.current = void 0)),
					f != null && (n.current = r(f));
			},
		}),
		[r],
	);
}
const U = Symbol("default");
function Y({ values: e, children: t }) {
	for (const [n, r] of e) t = o.createElement(n.Provider, { value: r }, t);
	return t;
}
function G(e) {
	const {
		className: t,
		style: n,
		children: r,
		defaultClassName: f,
		defaultChildren: u,
		defaultStyle: l,
		values: a,
		render: i,
	} = e;
	return c.useMemo(() => {
		let b, s, d;
		return (
			typeof t == "function" ? (b = t({ ...a, defaultClassName: f })) : (b = t),
			typeof n == "function"
				? (s = n({ ...a, defaultStyle: l || {} }))
				: (s = n),
			typeof r == "function"
				? (d = r({ ...a, defaultChildren: u }))
				: r == null
					? (d = u)
					: (d = r),
			{
				className: b ?? f,
				style: s || l ? { ...l, ...s } : void 0,
				children: d ?? u,
				"data-rac": "",
				render: i ? (E) => i(E, a) : void 0,
			}
		);
	}, [t, n, r, f, u, l, a, i]);
}
function q(e, t) {
	const n = c.useContext(e);
	if (t === null) return null;
	if (n && typeof n == "object" && "slots" in n && n.slots) {
		const r = t || U;
		if (!n.slots[r]) {
			const f = new Intl.ListFormat().format(
					Object.keys(n.slots).map((l) => `"${l}"`),
				),
				u = t ? `Invalid slot "${t}".` : "A slot prop is required.";
			throw new Error(`${u} Valid slot names are ${f}.`);
		}
		return n.slots[r];
	}
	return n;
}
function J(e, t, n) {
	const r = q(n, e.slot) || {},
		{ ref: f, ...u } = r,
		l = D(c.useMemo(() => S(t, f), [t, f])),
		a = A(u, e);
	return (
		"style" in u &&
			u.style &&
			"style" in e &&
			e.style &&
			(typeof u.style == "function" || typeof e.style == "function"
				? (a.style = (i) => {
						const b = typeof u.style == "function" ? u.style(i) : u.style,
							s = { ...i.defaultStyle, ...b },
							d =
								typeof e.style == "function"
									? e.style({ ...i, defaultStyle: s })
									: e.style;
						return { ...s, ...d };
					})
				: (a.style = { ...u.style, ...e.style })),
		[a, l]
	);
}
function Q(e = !0) {
	const [t, n] = c.useState(e),
		r = c.useRef(!1),
		f = c.useCallback((u) => {
			(r.current = !0), n(!!u);
		}, []);
	return (
		y(() => {
			r.current || n(!1);
		}, []),
		[f, t]
	);
}
function X(e) {
	const t = /^(data-.*)$/;
	const n = {};
	for (const r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function W(e, t, n) {
	const { render: r, ...f } = t,
		u = c.useRef(null),
		l = c.useMemo(() => S(n, u), [n, u]);
	y(() => {}, [e, r]);
	const a = { ...f, ref: l };
	return r ? r(a, void 0) : o.createElement(e, a);
}
const v = {},
	Z = new Proxy(
		{},
		{
			get(e, t) {
				if (typeof t != "string") return;
				let n = v[t];
				return n || ((n = c.forwardRef(W.bind(null, t))), (v[t] = n)), n;
			},
		},
	);
typeof HTMLTemplateElement < "u" &&
	(Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
		configurable: !0,
		enumerable: !0,
		get: function () {
			return this.content.firstChild;
		},
	}),
	Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
		configurable: !0,
		enumerable: !0,
		value: function (e) {
			return this.content.appendChild(e);
		},
	}),
	Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
		configurable: !0,
		enumerable: !0,
		value: function (e) {
			return this.content.removeChild(e);
		},
	}),
	Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
		configurable: !0,
		enumerable: !0,
		value: function (e, t) {
			return this.content.insertBefore(e, t);
		},
	}));
const m = c.createContext(!1);
function ee(e) {
	if (c.useContext(m)) return o.createElement(o.Fragment, null, e.children);
	const n = o.createElement(m.Provider, { value: !0 }, e.children);
	return o.createElement("template", null, n);
}
function te(e) {
	const t = (n, r) => (c.useContext(m) ? null : e(n, r));
	return (t.displayName = e.displayName || e.name), c.forwardRef(t);
}
function ne() {
	return c.useContext(m);
}
export {
	A as m,
	D as $,
	ee as q,
	F as b,
	G as f,
	I as l,
	J as e,
	K as a,
	ne as r,
	P as o,
	Q as g,
	q as k,
	S as c,
	te as p,
	U as h,
	X as j,
	Y as d,
	y as n,
	Z as i,
};
