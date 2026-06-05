import { e as C, d as Te } from "./Button-DMaXDISd.js";
import { k as Ie, b as Le } from "./Dialog-BF34q9A4.js";
import {
	a as _,
	i as B,
	g as be,
	l as fe,
	m as k,
	f as L,
	b as Q,
	h as ue,
	e as X,
	$ as Y,
	d as Z,
} from "./Hidden-DxJAwdyU.js";
import { R as d, r as s } from "./index-BGsE_GxY.js";
import { e as Ne, j as oe } from "./useCollator-DduXULBj.js";
import { $ as He } from "./useControlledState-DNChzxNu.js";
import {
	m as Ae,
	u as j,
	G as le,
	$ as Oe,
	b as Ue,
	A as Ve,
} from "./useHover-qyAt-50Y.js";
import {
	o as $e,
	F as ae,
	m as Be,
	$ as Ce,
	g as De,
	q as Ee,
	v as ee,
	w as Fe,
	D as ge,
	k as he,
	c as Ke,
	s as ke,
	I as Me,
	e as me,
	p as Pe,
	E as pe,
	j as Se,
	G as T,
	d as te,
	a as U,
	C as ve,
	H as we,
	h as xe,
	y as ye,
} from "./useLoadMoreSentinel-Dio_d_Bw.js";
const ze = s.createContext({}),
	We = s.createContext({}),
	N = class N extends $e {
		filter(e, l) {
			const t = l.getItem(this.prevKey);
			if (t && t.type !== "separator") {
				const o = this.clone();
				return l.addDescendants(o, e), o;
			}
			return null;
		}
	};
N.type = "separator";
const G = N;
const O = new WeakMap();
function Re(a) {
	return typeof a == "string" ? a.replace(/\s*/g, "") : "" + a;
}
function _e(a, e) {
	const l = O.get(a);
	if (!l) throw new Error("Unknown list");
	return `${l.id}-option-${Re(e)}`;
}
function je(a) {
	const {
			selectionManager: e,
			collection: l,
			disabledKeys: t,
			ref: o,
			keyboardDelegate: r,
			layoutDelegate: n,
			orientation: i,
		} = a,
		c = oe({ usage: "search", sensitivity: "base" }),
		f = e.disabledBehavior,
		$ = s.useMemo(
			() =>
				r ||
				new ee({
					collection: l,
					disabledKeys: t,
					disabledBehavior: f,
					ref: o,
					collator: c,
					layoutDelegate: n,
					orientation: i,
				}),
			[r, n, l, t, o, c, f, i],
		),
		{ collectionProps: g } = ge({
			...a,
			ref: o,
			selectionManager: e,
			keyboardDelegate: $,
		});
	return { listProps: g };
}
function Ge(a, e, l) {
	let t = C(a, { labelable: !0 }),
		o = a.selectionBehavior || "toggle",
		r = a.orientation || "vertical",
		n = a.linkBehavior || (o === "replace" ? "action" : "override");
	o === "toggle" && n === "action" && (n = "override");
	const { listProps: i } = je({
			...a,
			ref: l,
			selectionManager: e.selectionManager,
			collection: e.collection,
			disabledKeys: e.disabledKeys,
			linkBehavior: n,
		}),
		{ focusWithinProps: c } = Ae({
			onFocusWithin: a.onFocus,
			onBlurWithin: a.onBlur,
			onFocusWithinChange: a.onFocusChange,
		}),
		f = Q(a.id);
	O.set(e, {
		id: f,
		shouldUseVirtualFocus: a.shouldUseVirtualFocus,
		shouldSelectOnPressUp: a.shouldSelectOnPressUp,
		shouldFocusOnHover: a.shouldFocusOnHover,
		isVirtualized: a.isVirtualized,
		onAction: a.onAction,
		linkBehavior: n,
		UNSTABLE_itemBehavior: a.UNSTABLE_itemBehavior,
	});
	const { labelProps: $, fieldProps: g } = Le({
		...a,
		id: f,
		labelElementType: "span",
	});
	return {
		labelProps: $,
		listBoxProps: k(
			t,
			c,
			e.selectionManager.selectionMode === "multiple"
				? { "aria-multiselectable": "true" }
				: {},
			{ role: "listbox", "aria-orientation": r, ...k(g, i) },
		),
	};
}
const q = new WeakMap();
function qe(a) {
	const e = q.get(a);
	if (e != null) return e;
	let l = 0,
		t = (o) => {
			for (const r of o)
				r.type === "section" ? t(ye(r, a)) : r.type === "item" && l++;
		};
	return t(a), q.set(a, l), l;
}
function Je(a, e, l) {
	var w, F;
	const { key: t } = a,
		o = O.get(e),
		r = a.isDisabled ?? e.selectionManager.isDisabled(t),
		n = a.isSelected ?? e.selectionManager.isSelected(t),
		i =
			a.shouldSelectOnPressUp ?? (o == null ? void 0 : o.shouldSelectOnPressUp),
		c = a.shouldFocusOnHover ?? (o == null ? void 0 : o.shouldFocusOnHover),
		f =
			a.shouldUseVirtualFocus ?? (o == null ? void 0 : o.shouldUseVirtualFocus),
		$ = a.isVirtualized ?? (o == null ? void 0 : o.isVirtualized),
		g = _(),
		h = _(),
		u = {
			role: "option",
			"aria-disabled": r || void 0,
			"aria-selected": e.selectionManager.selectionMode !== "none" ? n : void 0,
			"aria-label": a["aria-label"],
			"aria-labelledby": g,
			"aria-describedby": h,
		},
		b = e.collection.getItem(t);
	if ($) {
		const m = Number(b == null ? void 0 : b.index);
		(u["aria-posinset"] = Number.isNaN(m) ? void 0 : m + 1),
			(u["aria-setsize"] = qe(e.collection));
	}
	const v =
			o != null && o.onAction
				? () => {
						var m;
						return (m = o == null ? void 0 : o.onAction) == null
							? void 0
							: m.call(o, t);
					}
				: void 0,
		S = _e(e, t),
		{
			itemProps: M,
			isPressed: x,
			isFocused: y,
			hasAction: D,
			allowsSelection: K,
		} = pe({
			selectionManager: e.selectionManager,
			key: t,
			ref: l,
			shouldSelectOnPressUp: i,
			allowsDifferentPressOrigin: i && c,
			isVirtualized: $,
			shouldUseVirtualFocus: f,
			isDisabled: r,
			onAction:
				v || ((w = b == null ? void 0 : b.props) != null && w.onAction)
					? fe(
							(F = b == null ? void 0 : b.props) == null ? void 0 : F.onAction,
							v,
						)
					: void 0,
			linkBehavior: o == null ? void 0 : o.linkBehavior,
			UNSTABLE_itemBehavior: o == null ? void 0 : o.UNSTABLE_itemBehavior,
			id: S,
		}),
		{ hoverProps: P } = le({
			isDisabled: r || !c,
			onHoverStart() {
				j() ||
					(e.selectionManager.setFocused(!0),
					e.selectionManager.setFocusedKey(t));
			},
		}),
		p = C(b == null ? void 0 : b.props);
	delete p.id;
	const E = Ve(b == null ? void 0 : b.props);
	return {
		optionProps: { ...u, ...k(p, M, P, E), id: S },
		labelProps: { id: g },
		descriptionProps: { id: h },
		isFocused: y,
		isFocusVisible: y && e.selectionManager.isFocused && j(),
		isSelected: n,
		isDisabled: r,
		isPressed: x,
		allowsSelection: K,
		hasAction: D,
	};
}
function Qe(a) {
	const { heading: e, "aria-label": l } = a,
		t = Q();
	return {
		itemProps: { role: "presentation" },
		headingProps: e
			? {
					id: t,
					role: "presentation",
					onMouseDown: (o) => {
						o.preventDefault();
					},
				}
			: {},
		groupProps: {
			role: "group",
			"aria-label": l,
			"aria-labelledby": e ? t : void 0,
		},
	};
}
class J {
	constructor(e) {
		(this.keyMap = new Map()),
			(this.firstKey = null),
			(this.lastKey = null),
			(this.iterable = e);
		const l = (n) => {
			if ((this.keyMap.set(n.key, n), n.childNodes && n.type === "section"))
				for (const i of n.childNodes) l(i);
		};
		for (const n of e) l(n);
		let t = null,
			o = 0,
			r = 0;
		for (const [n, i] of this.keyMap)
			t
				? ((t.nextKey = n), (i.prevKey = t.key))
				: ((this.firstKey = n), (i.prevKey = void 0)),
				i.type === "item" && (i.index = o++),
				(i.type === "section" || i.type === "item") && r++,
				(t = i),
				(t.nextKey = void 0);
		(this._size = r), (this.lastKey = (t == null ? void 0 : t.key) ?? null);
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		const l = this.keyMap.get(e);
		return l ? (l.prevKey ?? null) : null;
	}
	getKeyAfter(e) {
		const l = this.keyMap.get(e);
		return l ? (l.nextKey ?? null) : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		const l = [...this.getKeys()];
		return this.getItem(l[e]);
	}
	getChildren(e) {
		const l = this.keyMap.get(e);
		return (l == null ? void 0 : l.childNodes) || [];
	}
}
function Xe(a) {
	const { filter: e, layoutDelegate: l } = a,
		t = he(a),
		o = s.useMemo(
			() => (a.disabledKeys ? new Set(a.disabledKeys) : new Set()),
			[a.disabledKeys],
		),
		r = s.useCallback((f) => (e ? new J(e(f)) : new J(f)), [e]),
		n = s.useMemo(
			() => ({ suppressTextValueWarning: a.suppressTextValueWarning }),
			[a.suppressTextValueWarning],
		),
		i = ve(a, r, n),
		c = s.useMemo(() => new xe(i, t, { layoutDelegate: l }), [i, t, l]);
	return re(i, c), { collection: i, disabledKeys: o, selectionManager: c };
}
function Ye(a, e) {
	const l = s.useMemo(
			() => (e ? a.collection.filter(e) : a.collection),
			[a.collection, e],
		),
		t = a.selectionManager.withCollection(l);
	return (
		re(l, t),
		{ collection: l, selectionManager: t, disabledKeys: a.disabledKeys }
	);
}
function re(a, e) {
	const l = s.useRef(null);
	s.useEffect(() => {
		if (e.focusedKey != null && !a.getItem(e.focusedKey) && l.current) {
			let t = l.current.getKeyAfter(e.focusedKey),
				o = null;
			for (; t != null; ) {
				const r = a.getItem(t);
				if (r && r.type === "item" && !e.isDisabled(t)) {
					o = t;
					break;
				}
				t = l.current.getKeyAfter(t);
			}
			if (o == null)
				for (t = l.current.getKeyBefore(e.focusedKey); t != null; ) {
					const r = a.getItem(t);
					if (r && r.type === "item" && !e.isDisabled(t)) {
						o = t;
						break;
					}
					t = l.current.getKeyBefore(t);
				}
			e.setFocusedKey(o);
		}
		l.current = a;
	}, [a, e]);
}
const ie = s.createContext(null),
	I = s.createContext(null),
	ut = s.forwardRef((e, l) => {
		[e, l] = X(e, l, ie);
		const t = s.useContext(I);
		return t
			? d.createElement(ne, { state: t, props: e, listBoxRef: l })
			: d.createElement(me, { content: d.createElement(De, e) }, (o) =>
					d.createElement(Ze, { props: e, listBoxRef: l, collection: o }),
				);
	});
function Ze({ props: a, listBoxRef: e, collection: l }) {
	a = { ...a, collection: l, children: null, items: null };
	const { layoutDelegate: t } = s.useContext(U),
		o = Xe({ ...a, layoutDelegate: t });
	return d.createElement(ne, { state: o, props: a, listBoxRef: e });
}
function ne({ state: a, props: e, listBoxRef: l }) {
	[e, l] = X(e, l, Se);
	const {
			dragAndDropHooks: t,
			layout: o = "stack",
			orientation: r = "vertical",
			filter: n,
		} = e,
		i = Ye(a, n),
		{ collection: c, selectionManager: f } = i,
		$ = !!(t != null && t.useDraggableCollectionState),
		g = !!(t != null && t.useDroppableCollectionState),
		{ direction: h } = He(),
		{ disabledBehavior: u, disabledKeys: b } = f,
		v = oe({ usage: "search", sensitivity: "base" }),
		{
			isVirtualized: S,
			layoutDelegate: M,
			dropTargetDelegate: x,
			CollectionRoot: y,
		} = s.useContext(U),
		D = s.useMemo(
			() =>
				e.keyboardDelegate ||
				new ee({
					collection: c,
					collator: v,
					ref: l,
					disabledKeys: b,
					disabledBehavior: u,
					layout: o,
					orientation: r,
					direction: h,
					layoutDelegate: M,
				}),
			[c, v, l, u, b, r, h, e.keyboardDelegate, o, M],
		),
		{ listBoxProps: K } = Ge(
			{
				...e,
				shouldSelectOnPressUp: $ || e.shouldSelectOnPressUp,
				keyboardDelegate: D,
				isVirtualized: S,
			},
			i,
			l,
		);
	s.useRef($), s.useRef(g), s.useEffect(() => {}, [$, g]);
	let P,
		p,
		E,
		w = !1,
		F = null,
		m = s.useRef(null);
	if ($ && t) {
		(P = t.useDraggableCollectionState({
			collection: c,
			selectionManager: f,
			preview: t.renderDragPreview ? m : void 0,
		})),
			t.useDraggableCollection({}, P, l);
		const V = t.DragPreview;
		F = t.renderDragPreview
			? d.createElement(V, { ref: m }, t.renderDragPreview)
			: null;
	}
	if (g && t) {
		p = t.useDroppableCollectionState({ collection: c, selectionManager: f });
		const V =
			t.dropTargetDelegate ||
			x ||
			new t.ListDropTargetDelegate(c, l, {
				orientation: r,
				layout: o,
				direction: h,
			});
		(E = t.useDroppableCollection(
			{ keyboardDelegate: D, dropTargetDelegate: V },
			p,
			l,
		)),
			(w = p.isDropTarget({ type: "root" }));
	}
	let { focusProps: se, isFocused: H, isFocusVisible: z } = Oe(),
		A = i.collection.size === 0,
		W = {
			isDropTarget: w,
			isEmpty: A,
			isFocused: H,
			isFocusVisible: z,
			layout: e.layout || "stack",
			orientation: r,
			state: i,
		},
		de = L({
			...e,
			children: void 0,
			defaultClassName: "react-aria-ListBox",
			values: W,
		}),
		R = null;
	A &&
		e.renderEmptyState &&
		(R = d.createElement(
			"div",
			{ role: "option", style: { display: "contents" } },
			e.renderEmptyState(W),
		));
	const ce = C(e, { global: !0 });
	return d.createElement(
		Ne,
		null,
		d.createElement(
			B.div,
			{
				...k(ce, de, K, se, E == null ? void 0 : E.collectionProps),
				ref: l,
				slot: e.slot || void 0,
				onScroll: e.onScroll,
				"data-drop-target": w || void 0,
				"data-empty": A || void 0,
				"data-focused": H || void 0,
				"data-focus-visible": z || void 0,
				"data-layout": e.layout || "stack",
				"data-orientation": r,
			},
			d.createElement(
				Z,
				{
					values: [
						[ie, e],
						[I, i],
						[T, { dragAndDropHooks: t, dragState: P, dropState: p }],
						[We, { elementType: "div" }],
						[Me, { render: tt }],
						[Ke, { name: "ListBoxSection", render: et }],
					],
				},
				d.createElement(
					Ee,
					null,
					d.createElement(y, {
						collection: c,
						scrollRef: l,
						persistedKeys: we(f, t, p),
						renderDropIndicator: ae(t, p),
					}),
				),
			),
			R,
			F,
		),
	);
}
function et(a, e, l, t = "react-aria-ListBoxSection") {
	const o = s.useContext(I),
		{ dragAndDropHooks: r, dropState: n } = s.useContext(T),
		{ CollectionBranch: i } = s.useContext(U),
		[c, f] = be(),
		{ headingProps: $, groupProps: g } = Qe({
			heading: f,
			"aria-label": a["aria-label"] ?? void 0,
		}),
		h = L({
			...a,
			id: void 0,
			children: void 0,
			defaultClassName: t,
			values: void 0,
		}),
		u = C(a, { global: !0 });
	return (
		delete u.id,
		d.createElement(
			B.section,
			{ ...k(u, h, g), ref: e },
			d.createElement(
				ze.Provider,
				{ value: { ...$, ref: c } },
				d.createElement(i, {
					collection: o.collection,
					parent: l,
					renderDropIndicator: ae(r, n),
				}),
			),
		)
	);
}
const bt = te(Pe, (e, l, t) => {
	let o = Y(l),
		r = s.useContext(I),
		{ dragAndDropHooks: n, dragState: i, dropState: c } = s.useContext(T),
		f = i && !(i.isDisabled || i.selectionManager.isDisabled(t.key)),
		{
			optionProps: $,
			labelProps: g,
			descriptionProps: h,
			...u
		} = Je(
			{ key: t.key, "aria-label": e == null ? void 0 : e["aria-label"] },
			r,
			o,
		),
		{ hoverProps: b, isHovered: v } = le({
			isDisabled: !u.allowsSelection && !u.hasAction && !f,
			onHoverStart: t.props.onHoverStart,
			onHoverChange: t.props.onHoverChange,
			onHoverEnd: t.props.onHoverEnd,
		}),
		{ keyboardProps: S } = Te(e),
		{ focusProps: M } = Ue(e),
		x = null;
	i && n && (x = n.useDraggableItem({ key: t.key, hasAction: u.hasAction }, i));
	let y = null;
	c &&
		n &&
		(y = n.useDroppableItem(
			{ target: { type: "item", key: t.key, dropPosition: "on" } },
			c,
			o,
		));
	const D = i && i.isDragging(t.key),
		K = L({
			...e,
			id: void 0,
			children: e.children,
			defaultClassName: "react-aria-ListBoxItem",
			values: {
				...u,
				isHovered: v,
				selectionMode: r.selectionManager.selectionMode,
				selectionBehavior: r.selectionManager.selectionBehavior,
				allowsDragging: !!i,
				isDragging: D,
				isDropTarget: y == null ? void 0 : y.isDropTarget,
			},
		});
	s.useEffect(() => {
		t.textValue;
	}, [t.textValue]);
	const P = e.href ? B.a : B.div,
		p = C(e, { global: !0 });
	return (
		delete p.id,
		delete p.onClick,
		e.href && $.tabIndex == null && ($.tabIndex = -1),
		d.createElement(
			P,
			{
				...k(
					p,
					K,
					$,
					b,
					S,
					M,
					x == null ? void 0 : x.dragProps,
					y == null ? void 0 : y.dropProps,
				),
				ref: o,
				"data-allows-dragging": !!i || void 0,
				"data-selected": u.isSelected || void 0,
				"data-disabled": u.isDisabled || void 0,
				"data-hovered": v || void 0,
				"data-focused": u.isFocused || void 0,
				"data-focus-visible": u.isFocusVisible || void 0,
				"data-pressed": u.isPressed || void 0,
				"data-dragging": D || void 0,
				"data-drop-target": (y == null ? void 0 : y.isDropTarget) || void 0,
				"data-selection-mode":
					r.selectionManager.selectionMode === "none"
						? void 0
						: r.selectionManager.selectionMode,
			},
			d.createElement(
				Z,
				{
					values: [
						[Ie, { slots: { [ue]: g, label: g, description: h } }],
						[ke, { isSelected: u.isSelected }],
					],
				},
				K.children,
			),
		)
	);
});
function tt(a, e) {
	e = Y(e);
	const { dragAndDropHooks: l, dropState: t } = s.useContext(T),
		{
			dropIndicatorProps: o,
			isHidden: r,
			isDropTarget: n,
		} = l.useDropIndicator(a, t, e);
	return r
		? null
		: d.createElement(lt, {
				...a,
				dropIndicatorProps: o,
				isDropTarget: n,
				ref: e,
			});
}
function at(a, e) {
	const { dropIndicatorProps: l, isDropTarget: t, ...o } = a,
		r = L({
			...o,
			defaultClassName: "react-aria-DropIndicator",
			values: { isDropTarget: t },
		});
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(B.div, {
			...l,
			...r,
			role: "option",
			ref: e,
			"data-drop-target": t || void 0,
		}),
	);
}
const lt = s.forwardRef(at);
te(Be, (e, l, t) => {
	const o = s.useContext(I),
		{ isLoading: r, onLoadMore: n, scrollOffset: i, ...c } = e,
		f = s.useRef(null),
		$ = s.useMemo(
			() => ({
				onLoadMore: n,
				collection: o == null ? void 0 : o.collection,
				sentinelRef: f,
				scrollOffset: i,
			}),
			[n, i, o == null ? void 0 : o.collection],
		);
	Ce($, f);
	const g = L({
			...c,
			id: void 0,
			children: t.rendered,
			defaultClassName: "react-aria-ListBoxLoadingIndicator",
			values: void 0,
		}),
		h = { tabIndex: -1 };
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			"div",
			{ style: { position: "relative", width: 0, height: 0 }, inert: Fe(!0) },
			d.createElement("div", {
				"data-testid": "loadMoreSentinel",
				ref: f,
				style: { position: "absolute", height: 1, width: 1 },
			}),
		),
		r &&
			g.children &&
			d.createElement(
				d.Fragment,
				null,
				d.createElement(
					B.div,
					{ ...k(C(e, { global: !0 }), h), ...g, role: "option", ref: l },
					g.children,
				),
			),
	);
});
export {
	_e as g,
	bt as d,
	I as b,
	ie as c,
	J as h,
	O as f,
	qe as $,
	ut as a,
	Xe as e,
};
