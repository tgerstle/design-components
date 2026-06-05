import { $ as et } from "./animation-D9hJgx2r.js";
import {
	e as Q,
	a as Qe,
	l as V,
	m as W,
	$ as Xe,
	b as Ye,
} from "./Button-DMaXDISd.js";
import {
	b as A,
	f as Ae,
	h as B,
	m as Be,
	e as F,
	o as Fe,
	i as k,
	a as ke,
	l as q,
	n as U,
	d as We,
} from "./Hidden-DxJAwdyU.js";
import { O as tt } from "./index-B9nXkq7N.js";
import { R as E, r as m } from "./index-BGsE_GxY.js";
import {
	k as _e,
	s as Ge,
	a as J,
	q as je,
	d as Ke,
	o as N,
	e as Ue,
	i as Ve,
	r as z,
} from "./useCollator-DduXULBj.js";
import {
	e as H,
	l as Je,
	f as L,
	c as P,
	F as qe,
	q as T,
	E as Z,
	d as Ze,
	m as ze,
} from "./useHover-qyAt-50Y.js";
function Et(t) {
	let {
		id: e,
		label: r,
		"aria-labelledby": a,
		"aria-label": o,
		labelElementType: i = "label",
	} = t;
	e = A(e);
	let s = A(),
		l = {};
	r &&
		((a = a ? `${s} ${a}` : s),
		(l = { id: s, htmlFor: i === "label" ? e : void 0 }));
	const c = z({ id: e, "aria-label": o, "aria-labelledby": a });
	return { labelProps: l, fieldProps: c };
}
const X = m.createContext({}),
	gt = m.forwardRef((e, r) => {
		[e, r] = F(e, r, X);
		const { children: a, level: o = 3, className: i, ...s } = e,
			l = k[`h${o}`];
		return E.createElement(
			l,
			{ ...s, ref: r, className: i ?? "react-aria-Heading" },
			a,
		);
	}),
	rt = m.createContext({}),
	yt = m.forwardRef((e, r) => {
		[e, r] = F(e, r, rt);
		const { elementType: a = "span", ...o } = e,
			i = k[a];
		return E.createElement(i, { className: "react-aria-Text", ...o, ref: r });
	}),
	at = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function K(t) {
	return (
		t.dataset.liveAnnouncer === "true" || t.dataset.reactAriaTopLayer !== void 0
	);
}
const D = new WeakMap(),
	h = [];
function wt(t, e) {
	const r = qe(t == null ? void 0 : t[0]),
		a = e instanceof r.Element ? { root: e } : e,
		o = (a == null ? void 0 : a.root) ?? document.body,
		i = (a == null ? void 0 : a.shouldUseInert) && at,
		s = new Set(t),
		l = new Set(),
		c = (n) =>
			i && n instanceof r.HTMLElement
				? n.inert
				: n.getAttribute("aria-hidden") === "true",
		y = (n, d) => {
			i && n instanceof r.HTMLElement
				? (n.inert = d)
				: d
					? n.setAttribute("aria-hidden", "true")
					: (n.removeAttribute("aria-hidden"),
						n instanceof r.HTMLElement && (n.inert = !1));
		},
		u = new Set();
	if (T())
		for (const n of t) {
			let d = n;
			for (; d && d !== o; ) {
				const v = d.getRootNode();
				"shadowRoot" in v && u.add(v.shadowRoot), (d = v.parentNode);
			}
		}
	const f = (n) => {
			for (const b of n.querySelectorAll(
				"[data-live-announcer], [data-react-aria-top-layer]",
			))
				s.add(b);
			const d = (b) => {
					if (
						l.has(b) ||
						s.has(b) ||
						(b.parentElement &&
							l.has(b.parentElement) &&
							b.parentElement.getAttribute("role") !== "row")
					)
						return NodeFilter.FILTER_REJECT;
					for (const He of s) if (P(b, He)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				v = Ve(Z(n), n, NodeFilter.SHOW_ELEMENT, { acceptNode: d }),
				w = d(n);
			if (
				(w === NodeFilter.FILTER_ACCEPT && p(n), w !== NodeFilter.FILTER_REJECT)
			) {
				let b = v.nextNode();
				for (; b != null; ) p(b), (b = v.nextNode());
			}
		},
		p = (n) => {
			const d = D.get(n) ?? 0;
			(c(n) && d === 0) || (d === 0 && y(n, !0), l.add(n), D.set(n, d + 1));
		};
	h.length && h[h.length - 1].disconnect(), f(o);
	const x = new MutationObserver((n) => {
		for (const d of n)
			if (d.type === "childList") {
				if (d.target.isConnected && ![...s, ...l].some((v) => P(v, d.target)))
					for (const v of d.addedNodes)
						(v instanceof HTMLElement || v instanceof SVGElement) && K(v)
							? s.add(v)
							: v instanceof Element && f(v);
				if (T()) {
					for (const v of u)
						if (!v.isConnected) {
							x.disconnect();
							break;
						}
				}
			}
	});
	x.observe(o, { childList: !0, subtree: !0 });
	const $ = new Set();
	if (T())
		for (const n of u) {
			const d = new MutationObserver((v) => {
				for (const w of v)
					if (w.type === "childList") {
						if (
							w.target.isConnected &&
							![...s, ...l].some((b) => P(b, w.target))
						)
							for (const b of w.addedNodes)
								(b instanceof HTMLElement || b instanceof SVGElement) && K(b)
									? s.add(b)
									: b instanceof Element && f(b);
						if (T()) {
							for (const b of u)
								if (!b.isConnected) {
									x.disconnect();
									break;
								}
						}
					}
			});
			d.observe(n, { childList: !0, subtree: !0 }), $.add(d);
		}
	const C = {
		visibleNodes: s,
		hiddenNodes: l,
		observe() {
			x.observe(o, { childList: !0, subtree: !0 });
		},
		disconnect() {
			x.disconnect();
		},
	};
	return (
		h.push(C),
		() => {
			if ((x.disconnect(), T())) for (const n of $) n.disconnect();
			for (const n of l) {
				const d = D.get(n);
				d != null && (d === 1 ? (y(n, !1), D.delete(n)) : D.set(n, d - 1));
			}
			C === h[h.length - 1]
				? (h.pop(), h.length && h[h.length - 1].observe())
				: h.splice(h.indexOf(C), 1);
		}
	);
}
function Ct(t) {
	const e = h[h.length - 1];
	if (e && !e.visibleNodes.has(t))
		return (
			e.visibleNodes.add(t),
			() => {
				e.visibleNodes.delete(t);
			}
		);
}
function ot(t) {
	const {
			ref: e,
			onInteractOutside: r,
			isDisabled: a,
			onInteractOutsideStart: o,
		} = t,
		i = m.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
		s = W((c) => {
			r && _(c, e) && (o && o(c), (i.current.isPointerDown = !0));
		}),
		l = W((c) => {
			r && r(c);
		});
	m.useEffect(() => {
		const c = i.current;
		if (a) return;
		const y = e.current,
			u = Z(y);
		if (typeof PointerEvent < "u") {
			const f = (p) => {
				c.isPointerDown && _(p, e) && l(p), (c.isPointerDown = !1);
			};
			return (
				u.addEventListener("pointerdown", s, !0),
				u.addEventListener("click", f, !0),
				() => {
					u.removeEventListener("pointerdown", s, !0),
						u.removeEventListener("click", f, !0);
				}
			);
		}
	}, [e, a]);
}
function _(t, e) {
	if (t.button > 0) return !1;
	const r = L(t);
	if (r) {
		const a = r.ownerDocument;
		if (
			!a ||
			!P(a.documentElement, r) ||
			r.closest("[data-react-aria-top-layer]")
		)
			return !1;
	}
	return e.current ? !t.composedPath().includes(e.current) : !1;
}
const g = [];
function Tt(t, e) {
	const {
			onClose: r,
			shouldCloseOnBlur: a,
			isOpen: o,
			isDismissable: i = !1,
			isKeyboardDismissDisabled: s = !1,
			shouldCloseOnInteractOutside: l,
		} = t,
		c = m.useRef(void 0);
	m.useEffect(() => {
		if (o && !g.includes(e))
			return (
				g.push(e),
				() => {
					const $ = g.indexOf(e);
					$ >= 0 && g.splice($, 1);
				}
			);
	}, [o, e]);
	const y = () => {
			g[g.length - 1] === e && r && r();
		},
		u = ($) => {
			const C = g[g.length - 1];
			(c.current = C), (!l || l(L($))) && C === e && $.stopPropagation();
		},
		f = ($) => {
			(!l || l(L($))) &&
				(g[g.length - 1] === e && $.stopPropagation(), c.current === e && y()),
				(c.current = void 0);
		},
		p = ($) => {
			$.key === "Escape" &&
				!s &&
				!$.nativeEvent.isComposing &&
				($.stopPropagation(), $.preventDefault(), y());
		};
	ot({
		ref: e,
		onInteractOutside: i && o ? f : void 0,
		onInteractOutsideStart: u,
	});
	const { focusWithinProps: x } = ze({
		isDisabled: !a,
		onBlurWithin: ($) => {
			!$.relatedTarget ||
				Ke($.relatedTarget) ||
				((!l || l($.relatedTarget)) && (r == null || r()));
		},
	});
	return { overlayProps: { onKeyDown: p, ...x }, underlayProps: {} };
}
const R = typeof document < "u" && window.visualViewport;
let O = 0,
	I;
function Dt(t = {}) {
	const { isDisabled: e } = t;
	U(() => {
		if (!e)
			return (
				O++,
				O === 1 && (Je() ? (I = st()) : (I = nt())),
				() => {
					O--, O === 0 && I();
				}
			);
	}, [e]);
}
function nt() {
	const t = window.innerWidth - document.documentElement.clientWidth;
	return q(
		t > 0 &&
			("scrollbarGutter" in document.documentElement.style
				? S(document.documentElement, "scrollbarGutter", "stable")
				: S(document.documentElement, "paddingRight", `${t}px`)),
		S(document.documentElement, "overflow", "hidden"),
	);
}
function st() {
	let t = S(document.documentElement, "overflow", "hidden"),
		e,
		r = !1,
		a = (u) => {
			const f = L(u);
			(e = _e(f) ? f : J(f, !0)), (r = !1);
			const p = f.ownerDocument.defaultView.getSelection();
			p && !p.isCollapsed && p.containsNode(f, !0) && (r = !0),
				u
					.composedPath()
					.some((x) => x instanceof HTMLInputElement && x.type === "range") &&
					(r = !0),
				"selectionStart" in f &&
					"selectionEnd" in f &&
					f.selectionStart < f.selectionEnd &&
					f.ownerDocument.activeElement === f &&
					(r = !0);
		},
		o = document.createElement("style"),
		i = Qe();
	i && (o.nonce = i),
		(o.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim()),
		document.head.prepend(o);
	const s = (u) => {
			if (!(u.touches.length === 2 || r)) {
				if (!e || e === document.documentElement || e === document.body) {
					u.preventDefault();
					return;
				}
				e.scrollHeight === e.clientHeight &&
					e.scrollWidth === e.clientWidth &&
					u.preventDefault();
			}
		},
		l = (u) => {
			var x;
			const f = L(u),
				p = u.relatedTarget;
			if (p && N(p)) p.focus({ preventScroll: !0 }), j(p, N(f));
			else if (!p) {
				const $ =
					(x = f.parentElement) == null ? void 0 : x.closest("[tabindex]");
				$ == null || $.focus({ preventScroll: !0 });
			}
		},
		c = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function (u) {
		const f = H(),
			p = f != null && N(f);
		c.call(this, { ...u, preventScroll: !0 }),
			(!u || !u.preventScroll) && j(this, p);
	};
	const y = q(
		M(document, "touchstart", a, { passive: !1, capture: !0 }),
		M(document, "touchmove", s, { passive: !1, capture: !0 }),
		M(document, "blur", l, !0),
	);
	return () => {
		t(), y(), o.remove(), (HTMLElement.prototype.focus = c);
	};
}
function S(t, e, r) {
	const a = t.style[e];
	return (
		(t.style[e] = r),
		() => {
			t.style[e] = a;
		}
	);
}
function M(t, e, r, a) {
	return (
		t.addEventListener(e, r, a),
		() => {
			t.removeEventListener(e, r, a);
		}
	);
}
function j(t, e) {
	e || !R ? G(t) : R.addEventListener("resize", () => G(t), { once: !0 });
}
function G(t) {
	let e = document.scrollingElement || document.documentElement,
		r = t;
	for (; r && r !== e; ) {
		const a = J(r);
		if (a !== document.documentElement && a !== document.body && a !== r) {
			const o = a.getBoundingClientRect(),
				i = r.getBoundingClientRect();
			if (i.top < o.top || i.bottom > o.top + r.clientHeight) {
				let s = o.bottom;
				R && (s = Math.min(s, R.offsetTop + R.height));
				const l = i.top - o.top - ((s - o.top) / 2 - i.height / 2);
				a.scrollTo({
					top: Math.max(
						0,
						Math.min(a.scrollHeight - a.clientHeight, a.scrollTop + l),
					),
					behavior: "smooth",
				});
			}
		}
		r = a.parentElement;
	}
}
var Y = {};
Y = { dismiss: "تجاهل" };
var ee = {};
ee = { dismiss: "Отхвърляне" };
var te = {};
te = { dismiss: "Odstranit" };
var re = {};
re = { dismiss: "Luk" };
var ae = {};
ae = { dismiss: "Schließen" };
var oe = {};
oe = { dismiss: "Απόρριψη" };
var ne = {};
ne = { dismiss: "Dismiss" };
var se = {};
se = { dismiss: "Descartar" };
var ie = {};
ie = { dismiss: "Lõpeta" };
var le = {};
le = { dismiss: "Hylkää" };
var ce = {};
ce = { dismiss: "Rejeter" };
var fe = {};
fe = { dismiss: "התעלם" };
var de = {};
de = { dismiss: "Odbaci" };
var ue = {};
ue = { dismiss: "Elutasítás" };
var $e = {};
$e = { dismiss: "Ignora" };
var be = {};
be = { dismiss: "閉じる" };
var me = {};
me = { dismiss: "무시" };
var pe = {};
pe = { dismiss: "Atmesti" };
var ve = {};
ve = { dismiss: "Nerādīt" };
var xe = {};
xe = { dismiss: "Lukk" };
var he = {};
he = { dismiss: "Negeren" };
var Ee = {};
Ee = { dismiss: "Zignoruj" };
var ge = {};
ge = { dismiss: "Descartar" };
var ye = {};
ye = { dismiss: "Dispensar" };
var we = {};
we = { dismiss: "Revocare" };
var Ce = {};
Ce = { dismiss: "Пропустить" };
var Te = {};
Te = { dismiss: "Zrušiť" };
var De = {};
De = { dismiss: "Opusti" };
var Re = {};
Re = { dismiss: "Odbaci" };
var Le = {};
Le = { dismiss: "Avvisa" };
var Oe = {};
Oe = { dismiss: "Kapat" };
var Pe = {};
Pe = { dismiss: "Скасувати" };
var Se = {};
Se = { dismiss: "取消" };
var Ne = {};
Ne = { dismiss: "關閉" };
var Ie = {};
Ie = {
	"ar-AE": Y,
	"bg-BG": ee,
	"cs-CZ": te,
	"da-DK": re,
	"de-DE": ae,
	"el-GR": oe,
	"en-US": ne,
	"es-ES": se,
	"et-EE": ie,
	"fi-FI": le,
	"fr-FR": ce,
	"he-IL": fe,
	"hr-HR": de,
	"hu-HU": ue,
	"it-IT": $e,
	"ja-JP": be,
	"ko-KR": me,
	"lt-LT": pe,
	"lv-LV": ve,
	"nb-NO": xe,
	"nl-NL": he,
	"pl-PL": Ee,
	"pt-BR": ge,
	"pt-PT": ye,
	"ro-RO": we,
	"ru-RU": Ce,
	"sk-SK": Te,
	"sl-SI": De,
	"sr-SP": Re,
	"sv-SE": Le,
	"tr-TR": Oe,
	"uk-UA": Pe,
	"zh-CN": Se,
	"zh-TW": Ne,
};
function it(t) {
	return t && t.__esModule ? t.default : t;
}
function Rt(t) {
	const { onDismiss: e, ...r } = t,
		a = je(it(Ie), "@react-aria/overlays"),
		o = z(r, a.format("dismiss")),
		i = () => {
			e && e();
		};
	return E.createElement(
		Ge,
		null,
		E.createElement("button", {
			...o,
			tabIndex: -1,
			onClick: i,
			style: { width: 1, height: 1 },
		}),
	);
}
function lt({ children: t }) {
	const e = m.useMemo(() => ({ register: () => {} }), []);
	return E.createElement(Xe.Provider, { value: e }, t);
}
const Me = E.createContext(null);
function Lt(t) {
	let e = Fe(),
		{ portalContainer: r = e ? null : document.body, isExiting: a } = t,
		[o, i] = m.useState(!1),
		s = m.useMemo(() => ({ contain: o, setContain: i }), [o, i]),
		{ getContainer: l } = et();
	if ((!t.portalContainer && l && (r = l()), !r)) return null;
	let c = t.children;
	return (
		t.disableFocusManagement ||
			(c = E.createElement(
				Ue,
				{ restoreFocus: !0, contain: (t.shouldContainFocus || o) && !a },
				c,
			)),
		(c = E.createElement(
			Me.Provider,
			{ value: s },
			E.createElement(lt, null, c),
		)),
		tt.createPortal(c, r)
	);
}
function ct() {
	const t = m.useContext(Me),
		e = t == null ? void 0 : t.setContain;
	U(() => {
		e == null || e(!0);
	}, [e]);
}
function ft(t, e) {
	let { role: r = "dialog" } = t,
		a = ke();
	a = t["aria-label"] ? void 0 : a;
	const o = m.useRef(!1);
	return (
		m.useEffect(() => {
			if (e.current && !Ze(e.current)) {
				V(e.current);
				const i = setTimeout(() => {
					(H() === e.current || H() === document.body) &&
						((o.current = !0),
						e.current && (e.current.blur(), V(e.current)),
						(o.current = !1));
				}, 500);
				return () => {
					clearTimeout(i);
				};
			}
		}, [e]),
		ct(),
		m.useRef(!1),
		m.useEffect(() => {}),
		{
			dialogProps: {
				...Q(t, { labelable: !0 }),
				role: r,
				tabIndex: -1,
				"aria-labelledby": t["aria-labelledby"] || a,
				onBlur: (i) => {
					o.current && i.stopPropagation();
				},
			},
			titleProps: { id: a },
		}
	);
}
const dt = m.createContext(null),
	ut = m.createContext(null),
	Ot = m.forwardRef((e, r) => {
		const a = e["aria-labelledby"];
		[e, r] = F(e, r, dt);
		const { dialogProps: o, titleProps: i } = ft(
				{ ...e, "aria-labelledby": a },
				r,
			),
			s = m.useContext(ut);
		!o["aria-label"] &&
			!o["aria-labelledby"] &&
			e["aria-labelledby"] &&
			(o["aria-labelledby"] = e["aria-labelledby"]);
		const l = Ae({
				defaultClassName: "react-aria-Dialog",
				className: e.className,
				style: e.style,
				children: e.children,
				values: { close: (s == null ? void 0 : s.close) || (() => {}) },
			}),
			c = Q(e, { global: !0 });
		return E.createElement(
			k.section,
			{ ...Be(c, l, o), render: e.render, ref: r, slot: e.slot || void 0 },
			E.createElement(
				We,
				{
					values: [
						[X, { slots: { [B]: {}, title: { ...i, level: 2 } } }],
						[
							Ye,
							{
								slots: {
									[B]: {},
									close: { onPress: () => (s == null ? void 0 : s.close()) },
								},
							},
						],
					],
				},
				l.children,
			),
		);
	});
export {
	Ct as e,
	ct as h,
	Dt as $,
	dt as m,
	Et as b,
	gt as c,
	Lt as i,
	Ot as l,
	Rt as a,
	rt as k,
	Tt as g,
	ut as n,
	wt as f,
	X as d,
	yt as j,
};
