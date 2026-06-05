import { n as ce, o as se } from "./Hidden-DxJAwdyU.js";
import { r as l } from "./index-BGsE_GxY.js";
const v = (e) => (e == null ? void 0 : e.ownerDocument) ?? document,
	T = (e) =>
		e && "window" in e && e.window === e ? e : v(e).defaultView || window;
function ue(e) {
	return (
		e !== null &&
		typeof e == "object" &&
		"nodeType" in e &&
		typeof e.nodeType == "number"
	);
}
function le(e) {
	return ue(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
const fe = !1;
function j() {
	return fe;
}
function g(e, t) {
	if (!j()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n !== null; ) {
		if (n === e) return !0;
		n.tagName === "SLOT" && n.assignedSlot
			? (n = n.assignedSlot.parentNode)
			: le(n)
				? (n = n.host)
				: (n = n.parentNode);
	}
	return !1;
}
const P = (e = document) => {
	var n;
	if (!j()) return e.activeElement;
	let t = e.activeElement;
	for (
		;
		t && "shadowRoot" in t && (n = t.shadowRoot) != null && n.activeElement;
	)
		t = t.shadowRoot.activeElement;
	return t;
};
function d(e) {
	if (j() && e.target instanceof Element && e.target.shadowRoot) {
		if ("composedPath" in e) return e.composedPath()[0] ?? null;
		if ("composedPath" in e.nativeEvent)
			return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function Ne(e) {
	if (!e) return !1;
	const t = e.getRootNode(),
		n = T(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	const r = t.activeElement;
	return r != null && e.contains(r);
}
function R(e) {
	if (de()) e.focus({ preventScroll: !0 });
	else {
		const t = be(e);
		e.focus(), $e(t);
	}
}
let S = null;
function de() {
	if (S == null) {
		S = !1;
		try {
			document.createElement("div").focus({
				get preventScroll() {
					return (S = !0), !0;
				},
			});
		} catch {}
	}
	return S;
}
function be(e) {
	let t = e.parentNode,
		n = [],
		r = document.scrollingElement || document.documentElement;
	for (; t instanceof HTMLElement && t !== r; )
		(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
			n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
			(t = t.parentNode);
	return (
		r instanceof HTMLElement &&
			n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
		n
	);
}
function $e(e) {
	for (const { element: t, scrollTop: n, scrollLeft: r } of e)
		(t.scrollTop = n), (t.scrollLeft = r);
}
const pe = typeof Element < "u" && "checkVisibility" in Element.prototype;
function ve(e) {
	const t = T(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style,
		o = n !== "none" && r !== "hidden" && r !== "collapse";
	if (o) {
		const { getComputedStyle: i } = e.ownerDocument.defaultView;
		const { display: c, visibility: a } = i(e);
		o = c !== "none" && a !== "hidden" && a !== "collapse";
	}
	return o;
}
function Ee(e, t) {
	return (
		!e.hasAttribute("hidden") &&
		!e.hasAttribute("data-react-aria-prevent-focus") &&
		(e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY"
			? e.hasAttribute("open")
			: !0)
	);
}
function _(e, t) {
	return pe
		? e.checkVisibility({ visibilityProperty: !0 }) &&
				!e.closest("[data-react-aria-prevent-focus]")
		: e.nodeName !== "#comment" &&
				ve(e) &&
				Ee(e, t) &&
				(!e.parentElement || _(e.parentElement, e));
}
const U = [
		"input:not([disabled]):not([type=hidden])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"button:not([disabled])",
		"a[href]",
		"area[href]",
		"summary",
		"iframe",
		"object",
		"embed",
		"audio[controls]",
		"video[controls]",
		'[contenteditable]:not([contenteditable^="false"])',
		"permission",
	],
	he = U.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
U.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const me = U.join(':not([hidden]):not([tabindex="-1"]),');
function ye(e, t) {
	return (
		e.matches(he) &&
		!z(e) &&
		((t == null ? void 0 : t.skipVisibilityCheck) || _(e))
	);
}
function je(e) {
	return e.matches(me) && _(e) && !z(e);
}
function z(e) {
	let t = e;
	for (; t != null; ) {
		if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert)
			return !0;
		t = t.parentElement;
	}
	return !1;
}
function J(e) {
	const t = e;
	return (
		(t.nativeEvent = e),
		(t.isDefaultPrevented = () => t.defaultPrevented),
		(t.isPropagationStopped = () => t.cancelBubble),
		(t.persist = () => {}),
		t
	);
}
function ge(e, t) {
	Object.defineProperty(e, "target", { value: t }),
		Object.defineProperty(e, "currentTarget", { value: t });
}
function Q(e) {
	const t = l.useRef({ isFocused: !1, observer: null });
	return (
		ce(() => {
			const n = t.current;
			return () => {
				n.observer && (n.observer.disconnect(), (n.observer = null));
			};
		}, []),
		l.useCallback(
			(n) => {
				const r = d(n);
				if (
					r instanceof HTMLButtonElement ||
					r instanceof HTMLInputElement ||
					r instanceof HTMLTextAreaElement ||
					r instanceof HTMLSelectElement
				) {
					t.current.isFocused = !0;
					const o = r,
						i = (c) => {
							if (((t.current.isFocused = !1), o.disabled)) {
								const a = J(c);
								e == null || e(a);
							}
							t.current.observer &&
								(t.current.observer.disconnect(), (t.current.observer = null));
						};
					o.addEventListener("focusout", i, { once: !0 }),
						(t.current.observer = new MutationObserver(() => {
							var c;
							if (t.current.isFocused && o.disabled) {
								(c = t.current.observer) == null || c.disconnect();
								const a = o === P() ? null : P();
								o.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
									o.dispatchEvent(
										new FocusEvent("focusout", {
											bubbles: !0,
											relatedTarget: a,
										}),
									);
							}
						})),
						t.current.observer.observe(o, {
							attributes: !0,
							attributeFilter: ["disabled"],
						});
				}
			},
			[e],
		)
	);
}
let W = !1;
function _e(e) {
	for (; e && !ye(e, { skipVisibilityCheck: !0 }); ) e = e.parentElement;
	const t = T(e),
		n = t.document.activeElement;
	if (!n || n === e) return;
	W = !0;
	let r = !1,
		o = (u) => {
			(d(u) === n || r) && u.stopImmediatePropagation();
		},
		i = (u) => {
			(d(u) === n || r) &&
				(u.stopImmediatePropagation(), !e && !r && ((r = !0), R(n), s()));
		},
		c = (u) => {
			(d(u) === e || r) && u.stopImmediatePropagation();
		},
		a = (u) => {
			(d(u) === e || r) &&
				(u.stopImmediatePropagation(), r || ((r = !0), R(n), s()));
		};
	t.addEventListener("blur", o, !0),
		t.addEventListener("focusout", i, !0),
		t.addEventListener("focusin", a, !0),
		t.addEventListener("focus", c, !0);
	const s = () => {
			cancelAnimationFrame(f),
				t.removeEventListener("blur", o, !0),
				t.removeEventListener("focusout", i, !0),
				t.removeEventListener("focusin", a, !0),
				t.removeEventListener("focus", c, !0),
				(W = !1),
				(r = !1);
		},
		f = requestAnimationFrame(s);
	return s;
}
function V(e) {
	var n;
	if (typeof window > "u" || window.navigator == null) return !1;
	const t = (n = window.navigator.userAgentData) == null ? void 0 : n.brands;
	return (
		(Array.isArray(t) && t.some((r) => e.test(r.brand))) ||
		e.test(window.navigator.userAgent)
	);
}
function q(e) {
	var t;
	return typeof window < "u" && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) == null ? void 0 : t.platform) ||
					window.navigator.platform,
			)
		: !1;
}
function h(e) {
	let t = null;
	return () => (t == null && (t = e()), t);
}
const H = h(() => q(/^Mac/i)),
	we = h(() => q(/^iPhone/i)),
	X = h(() => q(/^iPad/i) || (H() && navigator.maxTouchPoints > 1)),
	Te = h(() => we() || X()),
	Ue = h(() => H() || Te()),
	Le = h(() => V(/AppleWebKit/i) && !xe()),
	xe = h(() => V(/Chrome/i)),
	Z = h(() => V(/Android/i)),
	Fe = h(() => V(/Firefox/i));
function Pe(e) {
	return e.pointerType === "" && e.isTrusted
		? !0
		: Z() && e.pointerType
			? e.type === "click" && e.buttons === 1
			: e.detail === 0 && !e.pointerType;
}
function qe(e) {
	return (
		(!Z() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === "mouse")
	);
}
const ke = l.createContext({ isNative: !0, open: Ce, useHref: (e) => e });
function ee() {
	return l.useContext(ke);
}
function k(e, t, n = !0) {
	var s, f;
	let { metaKey: r, ctrlKey: o, altKey: i, shiftKey: c } = t;
	Fe() &&
		(f = (s = window.event) == null ? void 0 : s.type) != null &&
		f.startsWith("key") &&
		e.target === "_blank" &&
		(H() ? (r = !0) : (o = !0));
	const a =
		Le() && H() && !X()
			? new KeyboardEvent("keydown", {
					keyIdentifier: "Enter",
					metaKey: r,
					ctrlKey: o,
					altKey: i,
					shiftKey: c,
				})
			: new MouseEvent("click", {
					metaKey: r,
					ctrlKey: o,
					altKey: i,
					shiftKey: c,
					detail: 1,
					bubbles: !0,
					cancelable: !0,
				});
	(k.isOpening = n), R(e), e.dispatchEvent(a), (k.isOpening = !1);
}
k.isOpening = !1;
function Ae(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute("data-href")) {
		const n = document.createElement("a");
		(n.href = e.getAttribute("data-href")),
			e.hasAttribute("data-target") &&
				(n.target = e.getAttribute("data-target")),
			e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
			e.hasAttribute("data-download") &&
				(n.download = e.getAttribute("data-download")),
			e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
			e.hasAttribute("data-referrer-policy") &&
				(n.referrerPolicy = e.getAttribute("data-referrer-policy")),
			e.appendChild(n),
			t(n),
			e.removeChild(n);
	}
}
function Ce(e, t) {
	Ae(e, (n) => k(n, t));
}
function Ye(e) {
	const n = ee().useHref(e.href ?? "");
	return {
		"data-href": e.href ? n : void 0,
		"data-target": e.target,
		"data-rel": e.rel,
		"data-download": e.download,
		"data-ping": e.ping,
		"data-referrer-policy": e.referrerPolicy,
	};
}
function ze(e) {
	const n = ee().useHref((e == null ? void 0 : e.href) ?? "");
	const r = {};
	if (e)
		for (const o of [
			"href",
			"target",
			"rel",
			"download",
			"ping",
			"referrerPolicy",
		])
			o in e && (r[o] = o === "href" ? n : e[o]);
	return r;
}
let E = null;
const M = new Set();
let C = new Map(),
	w = !1,
	B = !1;
const He = { Tab: !0, Escape: !0 };
function G(e, t) {
	for (const n of M) n(e, t);
}
function Me(e) {
	return !(
		e.metaKey ||
		(!H() && e.altKey) ||
		e.ctrlKey ||
		e.key === "Control" ||
		e.key === "Shift" ||
		e.key === "Meta"
	);
}
function O(e) {
	(w = !0), !k.isOpening && Me(e) && ((E = "keyboard"), G("keyboard", e));
}
function F(e) {
	(E = "pointer"),
		"pointerType" in e && e.pointerType,
		(e.type === "mousedown" || e.type === "pointerdown") &&
			((w = !0), G("pointer", e));
}
function te(e) {
	!k.isOpening && Pe(e) && ((w = !0), (E = "virtual"));
}
function ne(e) {
	const t = T(d(e)),
		n = v(d(e));
	d(e) === t ||
		d(e) === n ||
		W ||
		!e.isTrusted ||
		(!w && !B && ((E = "virtual"), G("virtual", e)), (w = !1), (B = !1));
}
function re() {
	W || ((w = !1), (B = !0));
}
function I(e) {
	if (typeof window > "u" || typeof document > "u") return;
	const t = T(e),
		n = v(e);
	if (C.get(t)) return;
	const r = t.HTMLElement.prototype.focus;
	(t.HTMLElement.prototype.focus = function () {
		(w = !0), r.apply(this, arguments);
	}),
		n.addEventListener("keydown", O, !0),
		n.addEventListener("keyup", O, !0),
		n.addEventListener("click", te, !0),
		t.addEventListener("focus", ne, !0),
		t.addEventListener("blur", re, !1),
		typeof PointerEvent < "u" &&
			(n.addEventListener("pointerdown", F, !0),
			n.addEventListener("pointermove", F, !0),
			n.addEventListener("pointerup", F, !0)),
		t.addEventListener(
			"beforeunload",
			() => {
				oe(e);
			},
			{ once: !0 },
		),
		C.set(t, { focus: r });
}
const oe = (e, t) => {
	const n = T(e),
		r = v(e);
	t && r.removeEventListener("DOMContentLoaded", t),
		C.has(n) &&
			((n.HTMLElement.prototype.focus = C.get(n).focus),
			r.removeEventListener("keydown", O, !0),
			r.removeEventListener("keyup", O, !0),
			r.removeEventListener("click", te, !0),
			n.removeEventListener("focus", ne, !0),
			n.removeEventListener("blur", re, !1),
			typeof PointerEvent < "u" &&
				(r.removeEventListener("pointerdown", F, !0),
				r.removeEventListener("pointermove", F, !0),
				r.removeEventListener("pointerup", F, !0)),
			C.delete(n));
};
function Se(e) {
	const t = v(e);
	let n;
	return (
		t.readyState !== "loading"
			? I(e)
			: ((n = () => {
					I(e);
				}),
				t.addEventListener("DOMContentLoaded", n)),
		() => oe(e, n)
	);
}
typeof document < "u" && Se();
function K() {
	return E !== "pointer";
}
function Je() {
	return E;
}
function Qe(e) {
	(E = e), G(e, null);
}
function Xe() {
	I();
	const [e, t] = l.useState(E);
	return (
		l.useEffect(() => {
			const n = () => {
				t(E);
			};
			return (
				M.add(n),
				() => {
					M.delete(n);
				}
			);
		}, []),
		se() ? null : e
	);
}
const De = new Set([
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
function We(e, t, n) {
	const r = n ? d(n) : void 0,
		o = v(r),
		i = T(r);
	const c = typeof i < "u" ? i.HTMLInputElement : HTMLInputElement,
		a = typeof i < "u" ? i.HTMLTextAreaElement : HTMLTextAreaElement,
		s = typeof i < "u" ? i.HTMLElement : HTMLElement,
		f = typeof i < "u" ? i.KeyboardEvent : KeyboardEvent;
	const u = P(o);
	return (
		(e =
			e ||
			(u instanceof c && !De.has(u.type)) ||
			u instanceof a ||
			(u instanceof s && u.isContentEditable)),
		!(e && t === "keyboard" && n instanceof f && !He[n.key])
	);
}
function Oe(e, t, n) {
	I(),
		l.useEffect(() => {
			if ((n == null ? void 0 : n.enabled) === !1) return;
			const r = (o, i) => {
				We(!!(n != null && n.isTextInput), o, i) && e(K());
			};
			return (
				M.add(r),
				() => {
					M.delete(r);
				}
			);
		}, t);
}
function Ie(e) {
	const { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
	const i = l.useCallback(
			(s) => {
				if (d(s) === s.currentTarget) return r && r(s), o && o(!1), !0;
			},
			[r, o],
		),
		c = Q(i),
		a = l.useCallback(
			(s) => {
				const f = d(s);
				const u = v(f),
					b = u ? P(u) : P();
				f === s.currentTarget && f === b && (n && n(s), o && o(!0), c(s));
			},
			[o, n, c],
		);
	return {
		focusProps: {
			onFocus: !t && (n || o || r) ? a : void 0,
			onBlur: !t && (r || o) ? i : void 0,
		},
	};
}
function ae() {
	const e = l.useRef(new Map()),
		t = l.useCallback((o, i, c, a) => {
			const s =
				a != null && a.once
					? (...f) => {
							e.current.delete(c), c(...f);
						}
					: c;
			e.current.set(c, { type: i, eventTarget: o, fn: s, options: a }),
				o.addEventListener(i, s, a);
		}, []),
		n = l.useCallback((o, i, c, a) => {
			var f;
			const s = ((f = e.current.get(c)) == null ? void 0 : f.fn) || c;
			o.removeEventListener(i, s, a), e.current.delete(c);
		}, []),
		r = l.useCallback(() => {
			e.current.forEach((o, i) => {
				n(o.eventTarget, o.type, i, o.options);
			});
		}, [n]);
	return (
		l.useEffect(() => r, [r]),
		{
			addGlobalListener: t,
			removeGlobalListener: n,
			removeAllGlobalListeners: r,
		}
	);
}
function Ve(e) {
	const {
			isDisabled: t,
			onBlurWithin: n,
			onFocusWithin: r,
			onFocusWithinChange: o,
		} = e,
		i = l.useRef({ isFocusWithin: !1 }),
		{ addGlobalListener: c, removeAllGlobalListeners: a } = ae(),
		s = l.useCallback(
			(b) => {
				g(b.currentTarget, d(b)) &&
					i.current.isFocusWithin &&
					!g(b.currentTarget, b.relatedTarget) &&
					((i.current.isFocusWithin = !1), a(), n && n(b), o && o(!1));
			},
			[n, o, i, a],
		),
		f = Q(s),
		u = l.useCallback(
			(b) => {
				if (!g(b.currentTarget, d(b))) return;
				const L = d(b);
				const p = v(L),
					A = P(p);
				if (!i.current.isFocusWithin && A === L) {
					r && r(b), o && o(!0), (i.current.isFocusWithin = !0), f(b);
					const $ = b.currentTarget;
					c(
						p,
						"focus",
						(m) => {
							const y = d(m);
							if (i.current.isFocusWithin && !g($, y)) {
								const x = new p.defaultView.FocusEvent("blur", {
									relatedTarget: y,
								});
								ge(x, $);
								const ie = J(x);
								s(ie);
							}
						},
						{ capture: !0 },
					);
				}
			},
			[r, o, f, c, s],
		);
	return t
		? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
		: { focusWithinProps: { onFocus: u, onBlur: s } };
}
function Ze(e = {}) {
	const { autoFocus: t = !1, isTextInput: n, within: r } = e,
		o = l.useRef({ isFocused: !1, isFocusVisible: t || K() }),
		[i, c] = l.useState(!1),
		[a, s] = l.useState(() => o.current.isFocused && o.current.isFocusVisible),
		f = l.useCallback(
			() => s(o.current.isFocused && o.current.isFocusVisible),
			[],
		),
		u = l.useCallback(
			(p) => {
				(o.current.isFocused = p), (o.current.isFocusVisible = K()), c(p), f();
			},
			[f],
		);
	Oe(
		(p) => {
			(o.current.isFocusVisible = p), f();
		},
		[n, i],
		{ enabled: i, isTextInput: n },
	);
	const { focusProps: b } = Ie({ isDisabled: r, onFocusChange: u }),
		{ focusWithinProps: L } = Ve({ isDisabled: !r, onFocusWithinChange: u });
	return { isFocused: i, isFocusVisible: a, focusProps: r ? L : b };
}
let N = !1,
	D = 0;
function Ge() {
	(N = !0),
		setTimeout(() => {
			N = !1;
		}, 500);
}
function Y(e) {
	e.pointerType === "touch" && Ge();
}
function Re() {
	const e = v(null);
	if (!(typeof e > "u"))
		return (
			D === 0 &&
				typeof PointerEvent < "u" &&
				e.addEventListener("pointerup", Y),
			D++,
			() => {
				D--,
					!(D > 0) &&
						typeof PointerEvent < "u" &&
						e.removeEventListener("pointerup", Y);
			}
		);
}
function et(e) {
	const { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
		[i, c] = l.useState(!1),
		a = l.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: "",
			target: null,
		}).current;
	l.useEffect(Re, []);
	const { addGlobalListener: s, removeAllGlobalListeners: f } = ae(),
		{ hoverProps: u, triggerHoverEnd: b } = l.useMemo(() => {
			const L = ($, m) => {
					if (
						((a.pointerType = m),
						o || m === "touch" || a.isHovered || !g($.currentTarget, d($)))
					)
						return;
					a.isHovered = !0;
					const y = $.currentTarget;
					(a.target = y),
						s(
							v(d($)),
							"pointerover",
							(x) => {
								a.isHovered &&
									a.target &&
									!g(a.target, d(x)) &&
									p(x, x.pointerType);
							},
							{ capture: !0 },
						),
						t && t({ type: "hoverstart", target: y, pointerType: m }),
						n && n(!0),
						c(!0);
				},
				p = ($, m) => {
					const y = a.target;
					(a.pointerType = ""),
						(a.target = null),
						!(m === "touch" || !a.isHovered || !y) &&
							((a.isHovered = !1),
							f(),
							r && r({ type: "hoverend", target: y, pointerType: m }),
							n && n(!1),
							c(!1));
				},
				A = {};
			return (
				typeof PointerEvent < "u" &&
					((A.onPointerEnter = ($) => {
						(N && $.pointerType === "mouse") || L($, $.pointerType);
					}),
					(A.onPointerLeave = ($) => {
						!o && g($.currentTarget, d($)) && p($, $.pointerType);
					})),
				{ hoverProps: A, triggerHoverEnd: p }
			);
		}, [t, n, r, o, a, s, f]);
	return (
		l.useEffect(() => {
			o && b({ currentTarget: a.target }, a.pointerType);
		}, [o]),
		{ hoverProps: u, isHovered: i }
	);
}
export {
	_e as x,
	ae as p,
	d as f,
	ee as C,
	et as G,
	g as c,
	ge as w,
	H as i,
	Ie as b,
	J as v,
	Je as r,
	j as q,
	je as o,
	K as u,
	k as B,
	Le as h,
	Ne as d,
	P as e,
	Pe as z,
	Qe as s,
	qe as y,
	R as a,
	T as F,
	Te as l,
	Ue as k,
	Ve as m,
	v as E,
	Xe as t,
	xe as g,
	Ye as D,
	ye as n,
	Z as j,
	Ze as $,
	ze as A,
};
