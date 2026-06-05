var se = (e) => {
	throw TypeError(e);
};
var ie = (e, t, n) => t.has(e) || se("Cannot " + n);
var oe = (e, t, n) => (
		ie(e, t, "read from private field"), n ? n.call(e) : t.get(e)
	),
	le = (e, t, n) =>
		t.has(e)
			? se("Cannot add the same private member more than once")
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	z = (e, t, n, a) => (
		ie(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n
	);
import {
	i as _e,
	m as A,
	p as Ae,
	b as de,
	e as Fe,
	l as Ie,
	$ as Oe,
	n as Te,
	f as Ue,
} from "./Hidden-DxJAwdyU.js";
import { R as F, r as p } from "./index-BGsE_GxY.js";
import {
	v as Be,
	e as ce,
	l as Ee,
	B as fe,
	x as Ge,
	p as He,
	E as I,
	y as je,
	r as Ne,
	a as Q,
	b as Re,
	c as S,
	w as Ve,
	z as We,
	G as Xe,
	i as Ye,
	f as y,
	F as Z,
	$ as ze,
} from "./useHover-qyAt-50Y.js";
import "./index-B9nXkq7N.js";
const qe = F.useInsertionEffect ?? Te;
function X(e) {
	const t = p.useRef(null);
	return (
		qe(() => {
			t.current = e;
		}, [e]),
		p.useCallback((...n) => {
			const a = t.current;
			return a == null ? void 0 : a(...n);
		}, [])
	);
}
const K = new Map(),
	ee = new Set();
function ue() {
	if (typeof window > "u") return;
	function e(a) {
		return "propertyName" in a;
	}
	const t = (a) => {
			const o = y(a);
			if (!e(a) || !o) return;
			let l = K.get(o);
			l ||
				((l = new Set()),
				K.set(o, l),
				o.addEventListener("transitioncancel", n, { once: !0 })),
				l.add(a.propertyName);
		},
		n = (a) => {
			const o = y(a);
			if (!e(a) || !o) return;
			const l = K.get(o);
			if (
				l &&
				(l.delete(a.propertyName),
				l.size === 0 &&
					(o.removeEventListener("transitioncancel", n), K.delete(o)),
				K.size === 0)
			) {
				for (const c of ee) c();
				ee.clear();
			}
		};
	document.body.addEventListener("transitionrun", t),
		document.body.addEventListener("transitionend", n);
}
typeof document < "u" &&
	(document.readyState !== "loading"
		? ue()
		: document.addEventListener("DOMContentLoaded", ue));
function Je() {
	for (const [e] of K) "isConnected" in e && !e.isConnected && K.delete(e);
}
function xe(e) {
	requestAnimationFrame(() => {
		Je(), K.size === 0 ? e() : ee.add(e);
	});
}
function Qe(e) {
	if (!e.isConnected) return;
	const t = I(e);
	if (Ne() === "virtual") {
		const n = ce(t);
		xe(() => {
			const a = ce(t);
			(a === n || a === t.body) && e.isConnected && Q(e);
		});
	} else Q(e);
}
function pe(e) {
	if (!e) return;
	let t = !0;
	return (n) => {
		const a = {
			...n,
			preventDefault() {
				n.preventDefault();
			},
			isDefaultPrevented() {
				return n.isDefaultPrevented();
			},
			stopPropagation() {
				t = !0;
			},
			continuePropagation() {
				t = !1;
			},
			isPropagationStopped() {
				return t;
			},
		};
		e(a), t && n.stopPropagation();
	};
}
function Ze(e) {
	return {
		keyboardProps: e.isDisabled
			? {}
			: { onKeyDown: pe(e.onKeyDown), onKeyUp: pe(e.onKeyUp) },
	};
}
function Ce(e, t) {
	Te(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref && (e.ref.current = null);
				}
			);
	});
}
const Se = F.createContext(null);
function et(e) {
	const t = p.useContext(Se) || {};
	Ce(t, e);
	const { ref: n, ...a } = t;
	return a;
}
const xt = F.forwardRef((t, n) => {
	const { children: a, ...o } = t,
		l = Oe(n),
		c = { ...o, ref: l };
	return F.createElement(Se.Provider, { value: c }, a);
});
function tt(e, t) {
	const { focusProps: n } = Re(e),
		{ keyboardProps: a } = Ze(e),
		o = A(n, a),
		l = et(t),
		c = e.isDisabled ? {} : l,
		u = p.useRef(e.autoFocus);
	p.useEffect(() => {
		u.current && t.current && Qe(t.current), (u.current = !1);
	}, [t]);
	let f = e.excludeFromTabOrder ? -1 : 0;
	return (
		e.isDisabled && (f = void 0),
		{ focusableProps: A({ ...o, tabIndex: f }, c) }
	);
}
const rt = new Set(["id"]),
	nt = new Set([
		"aria-label",
		"aria-labelledby",
		"aria-describedby",
		"aria-details",
	]),
	at = new Set([
		"href",
		"hrefLang",
		"target",
		"rel",
		"download",
		"ping",
		"referrerPolicy",
	]),
	st = new Set(["dir", "lang", "hidden", "inert", "translate"]),
	be = new Set([
		"onClick",
		"onAuxClick",
		"onContextMenu",
		"onDoubleClick",
		"onMouseDown",
		"onMouseEnter",
		"onMouseLeave",
		"onMouseMove",
		"onMouseOut",
		"onMouseOver",
		"onMouseUp",
		"onTouchCancel",
		"onTouchEnd",
		"onTouchMove",
		"onTouchStart",
		"onPointerDown",
		"onPointerMove",
		"onPointerUp",
		"onPointerCancel",
		"onPointerEnter",
		"onPointerLeave",
		"onPointerOver",
		"onPointerOut",
		"onGotPointerCapture",
		"onLostPointerCapture",
		"onScroll",
		"onWheel",
		"onAnimationStart",
		"onAnimationEnd",
		"onAnimationIteration",
		"onTransitionCancel",
		"onTransitionEnd",
		"onTransitionRun",
		"onTransitionStart",
	]),
	it = /^(data-.*)$/;
function ke(e, t = {}) {
	const { labelable: n, isLink: a, global: o, events: l = o, propNames: c } = t,
		u = {};
	for (const f in e)
		Object.hasOwn(e, f) &&
			(rt.has(f) ||
				(n && nt.has(f)) ||
				(a && at.has(f)) ||
				(o && st.has(f)) ||
				(l &&
					(be.has(f) || (f.endsWith("Capture") && be.has(f.slice(0, -7))))) ||
				(c != null && c.has(f)) ||
				it.test(f)) &&
			(u[f] = e[f]);
	return u;
}
let N = "default",
	te = "",
	G = new WeakMap();
function ot(e) {
	if (Ee()) {
		if (N === "default") {
			const t = I(e);
			(te = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = "none");
		}
		N = "disabled";
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		const t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		G.set(e, e.style[t]), (e.style[t] = "none");
	}
}
function $e(e) {
	if (Ee()) {
		if (N !== "disabled") return;
		(N = "restoring"),
			setTimeout(() => {
				xe(() => {
					if (N === "restoring") {
						const t = I(e);
						t.documentElement.style.webkitUserSelect === "none" &&
							(t.documentElement.style.webkitUserSelect = te || ""),
							(te = ""),
							(N = "default");
					}
				});
			}, 300);
	} else if (
		(e instanceof HTMLElement || e instanceof SVGElement) &&
		e &&
		G.has(e)
	) {
		const t = G.get(e),
			n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		e.style[n] === "none" && (e.style[n] = t),
			e.getAttribute("style") === "" && e.removeAttribute("style"),
			G.delete(e);
	}
}
function Pe(e) {
	const t = e == null ? void 0 : e.defaultView;
	return (
		(t == null ? void 0 : t.__webpack_nonce__) ||
		globalThis.__webpack_nonce__ ||
		void 0
	);
}
const q = new WeakMap();
function lt(e) {
	const t = e ?? (typeof document < "u" ? document : void 0);
	if (!t) return Pe(t);
	if (q.has(t)) return q.get(t);
	const n = t.querySelector('meta[property="csp-nonce"]'),
		a =
			(n && n instanceof Z(n).HTMLMetaElement && (n.nonce || n.content)) ||
			Pe(t) ||
			void 0;
	return a !== void 0 && q.set(t, a), a;
}
const Le = F.createContext({ register: () => {} });
Le.displayName = "PressResponderContext";
function dt(e) {
	const t = p.useContext(Le);
	if (t) {
		const { register: n, ref: a, ...o } = t;
		(e = A(o, e)), n();
	}
	return Ce(t, e.ref), e;
}
var R;
class j {
	constructor(t, n, a, o) {
		le(this, R);
		z(this, R, !0);
		const l = (o == null ? void 0 : o.target) ?? a.currentTarget;
		const c = l == null ? void 0 : l.getBoundingClientRect();
		let u,
			f = 0,
			T,
			C = null;
		a.clientX != null &&
			a.clientY != null &&
			((T = a.clientX), (C = a.clientY)),
			c &&
				(T != null && C != null
					? ((u = T - c.left), (f = C - c.top))
					: ((u = c.width / 2), (f = c.height / 2))),
			(this.type = t),
			(this.pointerType = n),
			(this.target = a.currentTarget),
			(this.shiftKey = a.shiftKey),
			(this.metaKey = a.metaKey),
			(this.ctrlKey = a.ctrlKey),
			(this.altKey = a.altKey),
			(this.x = u),
			(this.y = f),
			(this.key = a.key);
	}
	continuePropagation() {
		z(this, R, !1);
	}
	get shouldStopPropagation() {
		return oe(this, R);
	}
}
R = new WeakMap();
const ve = Symbol("linkClicked"),
	ge = "react-aria-pressable-style",
	ye = "data-react-aria-pressable";
function ct(e) {
	const {
			onPress: t,
			onPressChange: n,
			onPressStart: a,
			onPressEnd: o,
			onPressUp: l,
			onClick: c,
			isDisabled: u,
			isPressed: f,
			preventFocusOnPress: T,
			shouldCancelOnPointerExit: C,
			allowTextSelectionOnPress: E,
			ref: M,
			...U
		} = dt(e),
		[D, k] = p.useState(!1),
		b = p.useRef({
			isPressed: !1,
			ignoreEmulatedMouseEvents: !1,
			didFirePressStart: !1,
			isTriggeringEvent: !1,
			activePointerId: null,
			target: null,
			isOverTarget: !1,
			pointerType: null,
			disposables: [],
		}),
		{ addGlobalListener: x, removeAllGlobalListeners: L } = He(),
		h = p.useCallback(
			(r, d) => {
				const $ = b.current;
				if (u || $.didFirePressStart) return !1;
				let s = !0;
				if ((($.isTriggeringEvent = !0), a)) {
					const P = new j("pressstart", d, r);
					a(P), (s = P.shouldStopPropagation);
				}
				return (
					n && n(!0),
					($.isTriggeringEvent = !1),
					($.didFirePressStart = !0),
					k(!0),
					s
				);
			},
			[u, a, n],
		),
		H = p.useCallback(
			(r, d, $ = !0) => {
				const s = b.current;
				if (!s.didFirePressStart) return !1;
				(s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
				let P = !0;
				if (o) {
					const i = new j("pressend", d, r);
					o(i), (P = i.shouldStopPropagation);
				}
				if ((n && n(!1), k(!1), t && $ && !u)) {
					const i = new j("press", d, r);
					t(i), P && (P = i.shouldStopPropagation);
				}
				return (s.isTriggeringEvent = !1), P;
			},
			[u, o, n, t],
		),
		V = X(H),
		De = p.useCallback(
			(r, d) => {
				const $ = b.current;
				if (u) return !1;
				if (l) {
					$.isTriggeringEvent = !0;
					const s = new j("pressup", d, r);
					return l(s), ($.isTriggeringEvent = !1), s.shouldStopPropagation;
				}
				return !0;
			},
			[u, l],
		),
		B = X(De),
		W = p.useCallback(
			(r) => {
				const d = b.current;
				if (d.isPressed && d.target) {
					d.didFirePressStart &&
						d.pointerType != null &&
						H(O(d.target, r), d.pointerType, !1),
						(d.isPressed = !1),
						(d.isOverTarget = !1),
						(d.activePointerId = null),
						(d.pointerType = null),
						L(),
						E || $e(d.target);
					for (const $ of d.disposables) $();
					d.disposables = [];
				}
			},
			[E, L, H],
		),
		_ = X(W);
	p.useEffect(() => {
		u &&
			b.current.isPressed &&
			_({
				currentTarget: b.current.target,
				shiftKey: !1,
				ctrlKey: !1,
				metaKey: !1,
				altKey: !1,
			});
	}, [u]);
	const ne = p.useCallback(
			(r) => {
				C && W(r);
			},
			[C, W],
		),
		Y = p.useCallback(
			(r) => {
				u || c == null || c(r);
			},
			[u, c],
		),
		ae = p.useCallback(
			(r, d) => {
				if (!u && c) {
					const $ = new MouseEvent("click", r);
					Ve($, d), c(Be($));
				}
			},
			[u, c],
		),
		Ke = p.useMemo(() => {
			const r = b.current,
				d = {
					onKeyDown(s) {
						var P;
						if (J(s.nativeEvent, s.currentTarget) && S(s.currentTarget, y(s))) {
							he(y(s), s.key) && s.preventDefault();
							let i = !0;
							!r.isPressed &&
								!s.repeat &&
								((r.target = s.currentTarget),
								(r.isPressed = !0),
								(r.pointerType = "keyboard"),
								(i = h(s, "keyboard")));
							const v = s.currentTarget,
								g = (w) => {
									J(w, v) &&
										!w.repeat &&
										S(v, y(w)) &&
										r.target &&
										B(O(r.target, w), "keyboard");
								};
							x(I(s.currentTarget), "keyup", Ie(g, $), !0),
								i && s.stopPropagation(),
								s.metaKey &&
									Ye() &&
									((P = r.metaKeyEvents) == null ||
										P.set(s.key, s.nativeEvent));
						} else s.key === "Meta" && (r.metaKeyEvents = new Map());
					},
					onClick(s) {
						if (
							!(s && !S(s.currentTarget, y(s))) &&
							s &&
							s.button === 0 &&
							!r.isTriggeringEvent &&
							!fe.isOpening
						) {
							let P = !0;
							if (
								(u && s.preventDefault(),
								!r.ignoreEmulatedMouseEvents &&
									!r.isPressed &&
									(r.pointerType === "virtual" || We(s.nativeEvent)))
							) {
								const i = h(s, "virtual"),
									v = B(s, "virtual"),
									g = V(s, "virtual");
								Y(s), (P = i && v && g);
							} else if (r.isPressed && r.pointerType !== "keyboard") {
								const i =
										r.pointerType || s.nativeEvent.pointerType || "virtual",
									v = B(O(s.currentTarget, s), i),
									g = V(O(s.currentTarget, s), i, !0);
								(P = v && g), (r.isOverTarget = !1), Y(s), _(s);
							}
							(r.ignoreEmulatedMouseEvents = !1), P && s.stopPropagation();
						}
					},
				},
				$ = (s) => {
					var P, i, v;
					if (r.isPressed && r.target && J(s, r.target)) {
						he(y(s), s.key) && s.preventDefault();
						const g = y(s),
							w = S(r.target, g);
						V(O(r.target, s), "keyboard", w),
							w && ae(s, r.target),
							L(),
							s.key !== "Enter" &&
								re(r.target) &&
								S(r.target, g) &&
								!s[ve] &&
								((s[ve] = !0), fe(r.target, s, !1)),
							(r.isPressed = !1),
							(P = r.metaKeyEvents) == null || P.delete(s.key);
					} else if (
						s.key === "Meta" &&
						(i = r.metaKeyEvents) != null &&
						i.size
					) {
						const g = r.metaKeyEvents;
						r.metaKeyEvents = void 0;
						for (const w of g.values())
							(v = r.target) == null ||
								v.dispatchEvent(new KeyboardEvent("keyup", w));
					}
				};
			if (typeof PointerEvent < "u") {
				(d.onPointerDown = (i) => {
					if (i.button !== 0 || !S(i.currentTarget, y(i))) return;
					if (je(i.nativeEvent)) {
						r.pointerType = "virtual";
						return;
					}
					r.pointerType = i.pointerType;
					let v = !0;
					if (!r.isPressed) {
						(r.isPressed = !0),
							(r.isOverTarget = !0),
							(r.activePointerId = i.pointerId),
							(r.target = i.currentTarget),
							E || ot(r.target),
							(v = h(i, r.pointerType));
						const g = y(i);
						"releasePointerCapture" in g &&
							("hasPointerCapture" in g
								? g.hasPointerCapture(i.pointerId) &&
									g.releasePointerCapture(i.pointerId)
								: g.releasePointerCapture(i.pointerId)),
							x(I(i.currentTarget), "pointerup", s, !1),
							x(I(i.currentTarget), "pointercancel", P, !1);
					}
					v && i.stopPropagation();
				}),
					(d.onMouseDown = (i) => {
						if (S(i.currentTarget, y(i)) && i.button === 0) {
							if (T) {
								const v = Ge(i.target);
								v && r.disposables.push(v);
							}
							i.stopPropagation();
						}
					}),
					(d.onPointerUp = (i) => {
						!S(i.currentTarget, y(i)) ||
							r.pointerType === "virtual" ||
							(i.button === 0 &&
								!r.isPressed &&
								B(i, r.pointerType || i.pointerType));
					}),
					(d.onPointerEnter = (i) => {
						i.pointerId === r.activePointerId &&
							r.target &&
							!r.isOverTarget &&
							r.pointerType != null &&
							((r.isOverTarget = !0), h(O(r.target, i), r.pointerType));
					}),
					(d.onPointerLeave = (i) => {
						i.pointerId === r.activePointerId &&
							r.target &&
							r.isOverTarget &&
							r.pointerType != null &&
							((r.isOverTarget = !1),
							V(O(r.target, i), r.pointerType, !1),
							ne(i));
					});
				const s = (i) => {
						if (
							i.pointerId === r.activePointerId &&
							r.isPressed &&
							i.button === 0 &&
							r.target
						) {
							if (S(r.target, y(i)) && r.pointerType != null) {
								let v = !1,
									g = setTimeout(() => {
										r.isPressed &&
											r.target instanceof HTMLElement &&
											(v ? _(i) : (Q(r.target), r.target.click()));
									}, 80);
								x(i.currentTarget, "click", () => (v = !0), !0),
									r.disposables.push(() => clearTimeout(g));
							} else _(i);
							r.isOverTarget = !1;
						}
					},
					P = (i) => {
						_(i);
					};
				d.onDragStart = (i) => {
					S(i.currentTarget, y(i)) && _(i);
				};
			}
			return d;
		}, [x, u, T, L, E, ne, h, Y, ae]);
	return (
		p.useEffect(() => {
			if (!M) return;
			const r = I(M.current);
			if (!r || !r.head || r.getElementById(ge)) return;
			const d = r.createElement("style");
			d.id = ge;
			const $ = lt(r);
			$ && (d.nonce = $),
				(d.textContent = `
@layer {
  [${ye}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
				r.head.prepend(d);
		}, [M]),
		p.useEffect(() => {
			const r = b.current;
			return () => {
				E || $e(r.target ?? void 0);
				for (const d of r.disposables) d();
				r.disposables = [];
			};
		}, [E]),
		{ isPressed: f || D, pressProps: A(U, Ke, { [ye]: !0 }) }
	);
}
function re(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function J(e, t) {
	const { key: n, code: a } = e,
		o = t,
		l = o.getAttribute("role");
	return (
		(n === "Enter" || n === " " || n === "Spacebar" || a === "Space") &&
		!(
			(o instanceof Z(o).HTMLInputElement && !we(o, n)) ||
			o instanceof Z(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((l === "link" || (!l && re(o))) && n !== "Enter")
	);
}
function O(e, t) {
	const n = t.clientX,
		a = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: a,
		key: t.key,
	};
}
function ft(e) {
	return e instanceof HTMLInputElement
		? !1
		: e instanceof HTMLButtonElement
			? e.type !== "submit" && e.type !== "reset"
			: !re(e);
}
function he(e, t) {
	return e instanceof HTMLInputElement ? !we(e, t) : ft(e);
}
const ut = new Set([
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
function we(e, t) {
	return e.type === "checkbox" || e.type === "radio"
		? t === " "
		: ut.has(e.type);
}
const pt = p.createContext(null),
	Me = 7e3;
let m = null;
function me(e, t = "assertive", n = Me) {
	m
		? m.announce(e, t, n)
		: ((m = new bt()),
			(
				typeof IS_REACT_ACT_ENVIRONMENT == "boolean"
					? IS_REACT_ACT_ENVIRONMENT
					: typeof jest < "u"
			)
				? m.announce(e, t, n)
				: setTimeout(() => {
						m != null && m.isAttached() && (m == null || m.announce(e, t, n));
					}, 100));
}
function Ct(e) {
	m && m.clear(e);
}
class bt {
	constructor() {
		(this.node = null),
			(this.assertiveLog = null),
			(this.politeLog = null),
			typeof document < "u" &&
				((this.node = document.createElement("div")),
				(this.node.dataset.liveAnnouncer = "true"),
				Object.assign(this.node.style, {
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
				}),
				(this.assertiveLog = this.createLog("assertive")),
				this.node.appendChild(this.assertiveLog),
				(this.politeLog = this.createLog("polite")),
				this.node.appendChild(this.politeLog),
				document.body.prepend(this.node));
	}
	isAttached() {
		var t;
		return (t = this.node) == null ? void 0 : t.isConnected;
	}
	createLog(t) {
		const n = document.createElement("div");
		return (
			n.setAttribute("role", "log"),
			n.setAttribute("aria-live", t),
			n.setAttribute("aria-relevant", "additions"),
			n
		);
	}
	destroy() {
		this.node && (document.body.removeChild(this.node), (this.node = null));
	}
	announce(t, n = "assertive", a = Me) {
		var l, c;
		if (!this.node) return;
		const o = document.createElement("div");
		typeof t == "object"
			? (o.setAttribute("role", "img"),
				o.setAttribute("aria-labelledby", t["aria-labelledby"]))
			: (o.textContent = t),
			n === "assertive"
				? (l = this.assertiveLog) == null || l.appendChild(o)
				: (c = this.politeLog) == null || c.appendChild(o),
			t !== "" &&
				setTimeout(() => {
					o.remove();
				}, a);
	}
	clear(t) {
		this.node &&
			((!t || t === "assertive") &&
				this.assertiveLog &&
				(this.assertiveLog.innerHTML = ""),
			(!t || t === "polite") &&
				this.politeLog &&
				(this.politeLog.innerHTML = ""));
	}
}
function $t(e, t) {
	let {
			elementType: n = "button",
			isDisabled: a,
			onPress: o,
			onPressStart: l,
			onPressEnd: c,
			onPressUp: u,
			onPressChange: f,
			preventFocusOnPress: T,
			allowFocusWhenDisabled: C,
			onClick: E,
			href: M,
			target: U,
			rel: D,
			type: k = "button",
		} = e,
		b;
	n === "button"
		? (b = {
				type: k,
				disabled: a,
				form: e.form,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formMethod: e.formMethod,
				formNoValidate: e.formNoValidate,
				formTarget: e.formTarget,
				name: e.name,
				value: e.value,
			})
		: (b = {
				role: "button",
				href: n === "a" && !a ? M : void 0,
				target: n === "a" ? U : void 0,
				type: n === "input" ? k : void 0,
				disabled: n === "input" ? a : void 0,
				"aria-disabled": !a || n === "input" ? void 0 : a,
				rel: n === "a" ? D : void 0,
			});
	const { pressProps: x, isPressed: L } = ct({
			onPressStart: l,
			onPressEnd: c,
			onPressChange: f,
			onPress: o,
			onPressUp: u,
			onClick: E,
			isDisabled: a,
			preventFocusOnPress: T,
			ref: t,
		}),
		{ focusableProps: h } = tt(e, t);
	C && (h.tabIndex = a ? -1 : h.tabIndex);
	const H = A(h, x, ke(e, { labelable: !0 }));
	return {
		isPressed: L,
		buttonProps: A(b, H, {
			"aria-haspopup": e["aria-haspopup"],
			"aria-expanded": e["aria-expanded"],
			"aria-controls": e["aria-controls"],
			"aria-pressed": e["aria-pressed"],
			"aria-current": e["aria-current"],
			"aria-disabled": e["aria-disabled"],
		}),
	};
}
const Pt = p.createContext({}),
	St = Ae((t, n) => {
		[t, n] = Fe(t, n, Pt);
		let a = t,
			{ isPending: o } = a,
			{ buttonProps: l, isPressed: c } = $t(t, n);
		l = gt(l, o);
		let { focusProps: u, isFocused: f, isFocusVisible: T } = ze(t),
			{ hoverProps: C, isHovered: E } = Xe({
				...t,
				isDisabled: t.isDisabled || o,
			}),
			M = {
				isHovered: E,
				isPressed: (a.isPressed || c) && !o,
				isFocused: f,
				isFocusVisible: T,
				isDisabled: t.isDisabled || !1,
				isPending: o ?? !1,
			},
			U = Ue({ ...t, values: M, defaultClassName: "react-aria-Button" }),
			D = de(l.id),
			k = de(),
			b = l["aria-labelledby"];
		o && (b ? (b = `${b} ${k}`) : l["aria-label"] && (b = `${D} ${k}`));
		const x = p.useRef(o);
		p.useEffect(() => {
			const h = { "aria-labelledby": b || D };
			((!x.current && f && o) || (x.current && f && !o)) && me(h, "assertive"),
				(x.current = o);
		}, [o, f, b, D]);
		const L = ke(t, { global: !0 });
		return (
			delete L.onClick,
			F.createElement(
				_e.button,
				{
					...A(L, U, l, u, C),
					type: l.type === "submit" && o ? "button" : l.type,
					id: D,
					ref: n,
					"aria-labelledby": b,
					slot: t.slot || void 0,
					"aria-disabled": o ? "true" : l["aria-disabled"],
					"data-disabled": t.isDisabled || void 0,
					"data-pressed": M.isPressed || void 0,
					"data-hovered": E || void 0,
					"data-focused": f || void 0,
					"data-pending": o || void 0,
					"data-focus-visible": T || void 0,
				},
				F.createElement(pt.Provider, { value: { id: k } }, U.children),
			)
		);
	}),
	vt =
		/Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function gt(e, t) {
	if (t) {
		for (const n in e) n.startsWith("on") && !vt.test(n) && (e[n] = void 0);
		(e.href = void 0), (e.target = void 0);
	}
	return e;
}
export {
	Ct as g,
	ct as k,
	ke as e,
	Le as $,
	lt as a,
	me as f,
	Pt as b,
	Qe as l,
	Se as j,
	St as c,
	tt as i,
	X as m,
	xt as h,
	Ze as d,
};
