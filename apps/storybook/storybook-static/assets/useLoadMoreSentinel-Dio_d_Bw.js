import { k as Ne, j as Se, l as se, m as st } from "./Button-DMaXDISd.js";
import {
	o as _e,
	l as ot,
	n as re,
	q as rt,
	m as Z,
	b as ze,
} from "./Hidden-DxJAwdyU.js";
import { r as Ue } from "./index-B9nXkq7N.js";
import { R as K, r as u } from "./index-BGsE_GxY.js";
import {
	k as De,
	a as gt,
	b as ht,
	$ as pt,
	h as Q,
	n as q,
	c as we,
	f as yt,
} from "./useCollator-DduXULBj.js";
import { $ as bt, a as Kt } from "./useControlledState-DNChzxNu.js";
import {
	p as at,
	d as Ce,
	k as ct,
	B as dt,
	e as ee,
	F as ft,
	a as oe,
	E as qe,
	o as ut,
	r as ve,
	f as W,
	C as We,
	c as X,
} from "./useHover-qyAt-50Y.js";
const mt = "react-aria-clear-focus",
	$t = "react-aria-focus";
function je(n) {
	const e = St(qe(n));
	e !== n && (e && xt(e, n), n && Ge(n, e));
}
function xt(n, e) {
	n.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })),
		n.dispatchEvent(
			new FocusEvent("focusout", { bubbles: !0, relatedTarget: e }),
		);
}
function Ge(n, e) {
	n.dispatchEvent(new FocusEvent("focus", { relatedTarget: e })),
		n.dispatchEvent(
			new FocusEvent("focusin", { bubbles: !0, relatedTarget: e }),
		);
}
function St(n) {
	const e = ee(n),
		t = e == null ? void 0 : e.getAttribute("aria-activedescendant");
	return (t && n.getElementById(t)) || e;
}
const hl = u.createContext(null),
	yl = u.createContext(null);
class te {
	constructor(e) {
		(this.value = null),
			(this.level = 0),
			(this.hasChildNodes = !1),
			(this.rendered = null),
			(this.textValue = ""),
			(this["aria-label"] = void 0),
			(this.index = 0),
			(this.parentKey = null),
			(this.prevKey = null),
			(this.nextKey = null),
			(this.firstChildKey = null),
			(this.lastChildKey = null),
			(this.props = {}),
			(this.colSpan = null),
			(this.colIndex = null),
			(this.type = this.constructor.type),
			(this.key = e);
	}
	get childNodes() {
		throw new Error("childNodes is not supported");
	}
	clone() {
		const e = new this.constructor(this.key);
		return (
			(e.value = this.value),
			(e.level = this.level),
			(e.hasChildNodes = this.hasChildNodes),
			(e.rendered = this.rendered),
			(e.textValue = this.textValue),
			(e["aria-label"] = this["aria-label"]),
			(e.index = this.index),
			(e.parentKey = this.parentKey),
			(e.prevKey = this.prevKey),
			(e.nextKey = this.nextKey),
			(e.firstChildKey = this.firstChildKey),
			(e.lastChildKey = this.lastChildKey),
			(e.props = this.props),
			(e.render = this.render),
			(e.colSpan = this.colSpan),
			(e.colIndex = this.colIndex),
			e
		);
	}
	filter(e, t, l) {
		const i = this.clone();
		return t.addDescendants(i, e), i;
	}
}
class Ye extends te {
	filter(e, t, l) {
		const [i, s] = Xe(e, t, this.firstChildKey, l),
			r = this.clone();
		return (r.firstChildKey = i), (r.lastChildKey = s), r;
	}
}
const ae = class ae extends te {};
ae.type = "header";
const Ie = ae;
const fe = class fe extends te {};
fe.type = "loader";
const Ee = fe;
const de = class de extends Ye {
	filter(e, t, l) {
		if (l(this.textValue, this)) {
			const i = this.clone();
			return t.addDescendants(i, e), i;
		}
		return null;
	}
};
de.type = "item";
const ke = de;
const he = class he extends Ye {
	filter(e, t, l) {
		const i = super.filter(e, t, l);
		if (i && i.lastChildKey !== null) {
			const s = e.getItem(i.lastChildKey);
			if (s && s.type !== "header") return i;
		}
		return null;
	}
};
he.type = "section";
const Fe = he;
class vt {
	get size() {
		return this.itemCount;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	*[Symbol.iterator]() {
		let e = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
		for (; e; )
			yield e, (e = e.nextKey != null ? this.keyMap.get(e.nextKey) : void 0);
	}
	getChildren(e) {
		const t = this.keyMap;
		return {
			*[Symbol.iterator]() {
				let l = t.get(e),
					i =
						(l == null ? void 0 : l.firstChildKey) != null
							? t.get(l.firstChildKey)
							: null;
				for (; i; )
					yield i, (i = i.nextKey != null ? t.get(i.nextKey) : void 0);
			},
		};
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.prevKey != null) {
			for (
				t = this.keyMap.get(t.prevKey);
				t && t.type !== "item" && t.lastChildKey != null;
			)
				t = this.keyMap.get(t.lastChildKey);
			return (t == null ? void 0 : t.key) ?? null;
		}
		return t.parentKey;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.type !== "item" && t.firstChildKey != null) return t.firstChildKey;
		for (; t; ) {
			if (t.nextKey != null) return t.nextKey;
			if (t.parentKey != null) t = this.keyMap.get(t.parentKey);
			else return null;
		}
		return null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		let e = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
		for (; (e == null ? void 0 : e.lastChildKey) != null; )
			e = this.keyMap.get(e.lastChildKey);
		return (e == null ? void 0 : e.key) ?? null;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at() {
		throw new Error("Not implemented");
	}
	clone() {
		const e = this.constructor,
			t = new e();
		return (
			(t.keyMap = new Map(this.keyMap)),
			(t.firstKey = this.firstKey),
			(t.lastKey = this.lastKey),
			(t.itemCount = this.itemCount),
			t
		);
	}
	addNode(e) {
		if (this.frozen)
			throw new Error("Cannot add a node to a frozen collection");
		e.type === "item" && this.keyMap.get(e.key) == null && this.itemCount++,
			this.keyMap.set(e.key, e);
	}
	addDescendants(e, t) {
		this.addNode(e);
		const l = t.getChildren(e.key);
		for (const i of l) this.addDescendants(i, t);
	}
	removeNode(e) {
		if (this.frozen)
			throw new Error("Cannot remove a node to a frozen collection");
		const t = this.keyMap.get(e);
		t != null && t.type === "item" && this.itemCount--, this.keyMap.delete(e);
	}
	commit(e, t, l = !1) {
		if (this.frozen) throw new Error("Cannot commit a frozen collection");
		(this.firstKey = e), (this.lastKey = t), (this.frozen = !l);
	}
	filter(e) {
		const t = new this.constructor(),
			[l, i] = Xe(this, t, this.firstKey, e);
		return t == null || t.commit(l, i), t;
	}
	constructor() {
		(this.keyMap = new Map()),
			(this.firstKey = null),
			(this.lastKey = null),
			(this.frozen = !1),
			(this.itemCount = 0);
	}
}
function Xe(n, e, t, l) {
	if (t == null) return [null, null];
	let i = null,
		s = null,
		r = n.getItem(t);
	for (; r != null; ) {
		const a = r.filter(n, e, l);
		a != null &&
			((a.nextKey = null),
			s && ((a.prevKey = s.key), (s.nextKey = a.key)),
			i == null && (i = a),
			e.addNode(a),
			(s = a)),
			(r = r.nextKey != null ? n.getItem(r.nextKey) : null);
	}
	if (s && s.type === "separator") {
		const a = s.prevKey;
		e.removeNode(s.key),
			a != null ? ((s = e.getItem(a)), (s.nextKey = null)) : (s = null);
	}
	return [
		(i == null ? void 0 : i.key) ?? null,
		(s == null ? void 0 : s.key) ?? null,
	];
}
class Ze {
	constructor(e) {
		(this._firstChild = null),
			(this._lastChild = null),
			(this._previousSibling = null),
			(this._nextSibling = null),
			(this._parentNode = null),
			(this._minInvalidChildIndex = null),
			(this.ownerDocument = e);
	}
	*[Symbol.iterator]() {
		let e = this.firstChild;
		for (; e; ) yield e, (e = e.nextSibling);
	}
	get firstChild() {
		return this._firstChild;
	}
	set firstChild(e) {
		(this._firstChild = e), this.ownerDocument.markDirty(this);
	}
	get lastChild() {
		return this._lastChild;
	}
	set lastChild(e) {
		(this._lastChild = e), this.ownerDocument.markDirty(this);
	}
	get previousSibling() {
		return this._previousSibling;
	}
	set previousSibling(e) {
		(this._previousSibling = e), this.ownerDocument.markDirty(this);
	}
	get nextSibling() {
		return this._nextSibling;
	}
	set nextSibling(e) {
		(this._nextSibling = e), this.ownerDocument.markDirty(this);
	}
	get parentNode() {
		return this._parentNode;
	}
	set parentNode(e) {
		(this._parentNode = e), this.ownerDocument.markDirty(this);
	}
	get isConnected() {
		var e;
		return ((e = this.parentNode) == null ? void 0 : e.isConnected) || !1;
	}
	invalidateChildIndices(e) {
		(this._minInvalidChildIndex == null ||
			!this._minInvalidChildIndex.isConnected ||
			e.index < this._minInvalidChildIndex.index) &&
			((this._minInvalidChildIndex = e), this.ownerDocument.markDirty(this));
	}
	updateChildIndices() {
		let e = this._minInvalidChildIndex;
		for (; e; )
			(e.index = e.previousSibling ? e.previousSibling.index + 1 : 0),
				(e = e.nextSibling);
		this._minInvalidChildIndex = null;
	}
	appendChild(e) {
		e.parentNode && e.parentNode.removeChild(e),
			this.firstChild == null && (this.firstChild = e),
			this.lastChild
				? ((this.lastChild.nextSibling = e),
					(e.index = this.lastChild.index + 1),
					(e.previousSibling = this.lastChild))
				: ((e.previousSibling = null), (e.index = 0)),
			(e.parentNode = this),
			(e.nextSibling = null),
			(this.lastChild = e),
			this.ownerDocument.markDirty(this),
			this.isConnected && this.ownerDocument.queueUpdate();
	}
	insertBefore(e, t) {
		if (t == null) return this.appendChild(e);
		e.parentNode && e.parentNode.removeChild(e),
			(e.nextSibling = t),
			(e.previousSibling = t.previousSibling),
			(e.index = t.index - 1),
			this.firstChild === t
				? (this.firstChild = e)
				: t.previousSibling && (t.previousSibling.nextSibling = e),
			(t.previousSibling = e),
			(e.parentNode = t.parentNode),
			this.invalidateChildIndices(e),
			this.isConnected && this.ownerDocument.queueUpdate();
	}
	removeChild(e) {
		e.parentNode === this &&
			(this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null),
			e.nextSibling &&
				(this.invalidateChildIndices(e.nextSibling),
				(e.nextSibling.previousSibling = e.previousSibling)),
			e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling),
			this.firstChild === e && (this.firstChild = e.nextSibling),
			this.lastChild === e && (this.lastChild = e.previousSibling),
			(e.parentNode = null),
			(e.nextSibling = null),
			(e.previousSibling = null),
			(e.index = 0),
			this.ownerDocument.markDirty(e),
			this.isConnected && this.ownerDocument.queueUpdate());
	}
	addEventListener() {}
	removeEventListener() {}
	get previousVisibleSibling() {
		let e = this.previousSibling;
		for (; e && e.isHidden; ) e = e.previousSibling;
		return e;
	}
	get nextVisibleSibling() {
		let e = this.nextSibling;
		for (; e && e.isHidden; ) e = e.nextSibling;
		return e;
	}
	get firstVisibleChild() {
		let e = this.firstChild;
		for (; e && e.isHidden; ) e = e.nextSibling;
		return e;
	}
	get lastVisibleChild() {
		let e = this.lastChild;
		for (; e && e.isHidden; ) e = e.previousSibling;
		return e;
	}
}
class j extends Ze {
	constructor(e, t) {
		super(t),
			(this.nodeType = 8),
			(this.isMutated = !0),
			(this._index = 0),
			(this.isHidden = !1),
			(this.node = null);
	}
	get index() {
		return this._index;
	}
	set index(e) {
		(this._index = e), this.ownerDocument.markDirty(this);
	}
	get level() {
		var e;
		return this.parentNode instanceof j
			? this.parentNode.level +
					(((e = this.parentNode.node) == null ? void 0 : e.type) === "item"
						? 1
						: 0)
			: 0;
	}
	getMutableNode() {
		return this.node == null
			? null
			: (this.isMutated ||
					((this.node = this.node.clone()), (this.isMutated = !0)),
				this.ownerDocument.markDirty(this),
				this.node);
	}
	updateNode() {
		var l, i, s, r, a, o, d, g;
		const e = this.nextVisibleSibling,
			t = this.getMutableNode();
		if (
			t != null &&
			((t.index = this.index),
			(t.level = this.level),
			(t.parentKey =
				this.parentNode instanceof j
					? (((l = this.parentNode.node) == null ? void 0 : l.key) ?? null)
					: null),
			(t.prevKey =
				((s = (i = this.previousVisibleSibling) == null ? void 0 : i.node) ==
				null
					? void 0
					: s.key) ?? null),
			(t.nextKey =
				((r = e == null ? void 0 : e.node) == null ? void 0 : r.key) ?? null),
			(t.hasChildNodes = !!this.firstChild),
			(t.firstChildKey =
				((o = (a = this.firstVisibleChild) == null ? void 0 : a.node) == null
					? void 0
					: o.key) ?? null),
			(t.lastChildKey =
				((g = (d = this.lastVisibleChild) == null ? void 0 : d.node) == null
					? void 0
					: g.key) ?? null),
			(t.colSpan != null || t.colIndex != null) && e)
		) {
			const y = (t.colIndex ?? t.index) + (t.colSpan ?? 1);
			if (e.node != null && y !== e.node.colIndex) {
				const p = e.getMutableNode();
				p.colIndex = y;
			}
		}
	}
	setProps(e, t, l, i, s) {
		let r,
			{ value: a, textValue: o, id: d, ...g } = e;
		if (
			(this.node == null
				? ((r = new l(d ?? `react-aria-${++this.ownerDocument.nodeId}`)),
					(this.node = r))
				: (r = this.getMutableNode()),
			(g.ref = t),
			(r.props = g),
			(r.rendered = i),
			(r.render = s),
			(r.value = a),
			e["aria-label"] && (r["aria-label"] = e["aria-label"]),
			(r.textValue =
				o ||
				(typeof g.children == "string" ? g.children : "") ||
				e["aria-label"] ||
				""),
			d != null && d !== r.key)
		)
			throw new Error("Cannot change the id of an item");
		g.colSpan != null && (r.colSpan = g.colSpan),
			this.isConnected && this.ownerDocument.queueUpdate();
	}
	get style() {
		const e = this;
		return {
			get display() {
				return e.isHidden ? "none" : "";
			},
			set display(t) {
				var i, s;
				const l = t === "none";
				if (e.isHidden !== l) {
					(((i = e.parentNode) == null ? void 0 : i.firstVisibleChild) === e ||
						((s = e.parentNode) == null ? void 0 : s.lastVisibleChild) === e) &&
						e.ownerDocument.markDirty(e.parentNode);
					const r = e.previousVisibleSibling,
						a = e.nextVisibleSibling;
					r && e.ownerDocument.markDirty(r),
						a && e.ownerDocument.markDirty(a),
						(e.isHidden = l),
						e.ownerDocument.markDirty(e);
				}
			},
		};
	}
	hasAttribute() {}
	setAttribute() {}
	setAttributeNS() {}
	removeAttribute() {}
}
class Ct extends Ze {
	constructor(e) {
		super(null),
			(this.nodeType = 11),
			(this.ownerDocument = this),
			(this.dirtyNodes = new Set()),
			(this.isSSR = !1),
			(this.nodeId = 0),
			(this.nodesByProps = new WeakMap()),
			(this.nextCollection = null),
			(this.subscriptions = new Set()),
			(this.queuedRender = !1),
			(this.inSubscription = !1),
			(this.collection = e),
			(this.nextCollection = e);
	}
	get isConnected() {
		return !0;
	}
	createElement(e) {
		return new j(e, this);
	}
	getMutableCollection() {
		return (
			this.nextCollection || (this.nextCollection = this.collection.clone()),
			this.nextCollection
		);
	}
	markDirty(e) {
		this.dirtyNodes.add(e);
	}
	addNode(e) {
		if (e.isHidden || e.node == null) return;
		const t = this.getMutableCollection();
		if (!t.getItem(e.node.key)) for (const l of e) this.addNode(l);
		t.addNode(e.node);
	}
	removeNode(e) {
		for (const t of e) this.removeNode(t);
		e.node && this.getMutableCollection().removeNode(e.node.key);
	}
	getCollection() {
		return this.inSubscription
			? this.collection
			: ((this.queuedRender = !1), this.updateCollection(), this.collection);
	}
	updateCollection() {
		var e, t, l, i;
		for (const s of this.dirtyNodes)
			s instanceof j && (!s.isConnected || s.isHidden)
				? this.removeNode(s)
				: s.updateChildIndices();
		for (const s of this.dirtyNodes)
			s instanceof j
				? (s.isConnected && !s.isHidden && (s.updateNode(), this.addNode(s)),
					s.node && this.dirtyNodes.delete(s),
					(s.isMutated = !1))
				: this.dirtyNodes.delete(s);
		this.nextCollection &&
			(this.nextCollection.commit(
				((t = (e = this.firstVisibleChild) == null ? void 0 : e.node) == null
					? void 0
					: t.key) ?? null,
				((i = (l = this.lastVisibleChild) == null ? void 0 : l.node) == null
					? void 0
					: i.key) ?? null,
				this.isSSR,
			),
			this.isSSR ||
				((this.collection = this.nextCollection),
				(this.nextCollection = null)));
	}
	queueUpdate() {
		if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
			(this.queuedRender = !0),
				(this.inSubscription = !0),
				this.isSSR || (this.collection = this.collection.clone());
			for (const e of this.subscriptions) e();
			this.inSubscription = !1;
		}
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	resetAfterSSR() {
		this.isSSR &&
			((this.isSSR = !1),
			(this.firstChild = null),
			(this.lastChild = null),
			(this.nodeId = 0));
	}
}
function Je(n) {
	const {
			children: e,
			items: t,
			idScope: l,
			addIdAndValue: i,
			dependencies: s = [],
		} = n,
		r = u.useMemo(() => {}, [e]),
		a = u.useMemo(() => new WeakMap(), [...s, r]);
	return u.useMemo(() => {
		if (t && typeof e == "function") {
			const o = [];
			for (const d of t) {
				let g = wt(d) ? d : null,
					y = g ? a.get(g) : null;
				if (!y) {
					y = e(d);
					let p =
						y.props.id ??
						(d == null ? void 0 : d.key) ??
						(d == null ? void 0 : d.id);
					l != null && y.props.id == null && p != null && (p = l + ":" + p);
					const b = p ?? o.length;
					(y = u.cloneElement(y, i ? { key: b, id: p, value: d } : { key: b })),
						g && a.set(g, y);
				}
				o.push(y);
			}
			return o;
		} else if (typeof e != "function") return e;
	}, [e, t, a, l, i]);
}
function wt(n) {
	switch (typeof n) {
		case "object":
			return n != null;
		case "function":
		case "symbol":
			return !0;
		default:
			return !1;
	}
}
var Qe = { exports: {} },
	He = {}; /**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G = u;
function Dt(n, e) {
	return (n === e && (n !== 0 || 1 / n === 1 / e)) || (n !== n && e !== e);
}
var It = typeof Object.is == "function" ? Object.is : Dt,
	Et = G.useState,
	kt = G.useEffect,
	Ft = G.useLayoutEffect,
	Pt = G.useDebugValue;
function Mt(n, e) {
	var t = e(),
		l = Et({ inst: { value: t, getSnapshot: e } }),
		i = l[0].inst,
		s = l[1];
	return (
		Ft(() => {
			(i.value = t), (i.getSnapshot = e), le(i) && s({ inst: i });
		}, [n, t, e]),
		kt(
			() => (
				le(i) && s({ inst: i }),
				n(() => {
					le(i) && s({ inst: i });
				})
			),
			[n],
		),
		Pt(t),
		t
	);
}
function le(n) {
	var e = n.getSnapshot;
	n = n.value;
	try {
		var t = e();
		return !It(n, t);
	} catch {
		return !0;
	}
}
function Rt(n, e) {
	return e();
}
var Tt =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? Rt
		: Mt;
He.useSyncExternalStore =
	G.useSyncExternalStore !== void 0 ? G.useSyncExternalStore : Tt;
Qe.exports = He;
var Bt = Qe.exports;
const et = u.createContext(!1),
	J = u.createContext(null);
function pl(n) {
	if (u.useContext(J)) return n.content;
	const { collection: t, document: l } = Ot(n.createCollection);
	return K.createElement(
		K.Fragment,
		null,
		K.createElement(
			rt,
			null,
			K.createElement(J.Provider, { value: l }, n.content),
		),
		K.createElement(Lt, { render: n.children, collection: t }),
	);
}
function Lt({ collection: n, render: e }) {
	return e(n);
}
function At(n, e, t) {
	const l = _e(),
		i = u.useRef(l);
	i.current = l;
	const s = u.useCallback(() => (i.current ? t() : e()), [e, t]);
	return Bt.useSyncExternalStore(n, s);
}
const Vt =
	typeof K.useSyncExternalStore == "function" ? K.useSyncExternalStore : At;
function Ot(n) {
	const [e] = u.useState(() => new Ct((n == null ? void 0 : n()) || new vt())),
		t = u.useCallback((r) => e.subscribe(r), [e]),
		l = u.useCallback(() => {
			const r = e.getCollection();
			return e.isSSR && e.resetAfterSSR(), r;
		}, [e]),
		i = u.useCallback(() => ((e.isSSR = !0), e.getCollection()), [e]);
	return { collection: Vt(t, l, i), document: e };
}
const ce = u.createContext(null);
function Nt(n) {
	var t;
	return (t = class extends te {}), (t.type = n), t;
}
function tt(n, e, t, l, i, s) {
	typeof n == "string" && (n = Nt(n));
	const r = u.useCallback(
			(o) => {
				o == null || o.setProps(e, t, n, l, s);
			},
			[e, t, l, s, n],
		),
		a = u.useContext(ce);
	if (a) {
		let o = a.ownerDocument.nodesByProps.get(e);
		return (
			o ||
				((o = a.ownerDocument.createElement(n.type)),
				o.setProps(e, t, n, l, s),
				a.appendChild(o),
				a.ownerDocument.updateCollection(),
				a.ownerDocument.nodesByProps.set(e, o)),
			i ? K.createElement(ce.Provider, { value: o }, i) : null
		);
	}
	return K.createElement(n.type, { ref: r }, i);
}
function gl(n, e) {
	const t = ({ node: i }) => e(i.props, i.props.ref, i),
		l = u.forwardRef((i, s) => {
			const r = u.useContext(Se);
			if (!u.useContext(et)) {
				if (e.length >= 3)
					throw new Error(e.name + " cannot be rendered outside a collection.");
				return e(i, s);
			}
			return tt(n, i, s, "children" in i ? i.children : null, null, (o) =>
				K.createElement(
					Se.Provider,
					{ value: r },
					K.createElement(t, { node: o }),
				),
			);
		});
	return (l.displayName = e.name), l;
}
function bl(n, e, t = lt) {
	const l = ({ node: s }) => e(s.props, s.props.ref, s),
		i = u.forwardRef((s, r) => {
			const a = t(s);
			return (
				tt(n, s, r, null, a, (o) => K.createElement(l, { node: o })) ??
				K.createElement(K.Fragment, null)
			);
		});
	return (i.displayName = e.name), i;
}
function lt(n) {
	return Je({ ...n, addIdAndValue: !0 });
}
const Pe = u.createContext(null);
function Kl(n) {
	let e = u.useContext(Pe),
		t = ((e == null ? void 0 : e.dependencies) || []).concat(n.dependencies),
		l = n.idScope ?? (e == null ? void 0 : e.idScope),
		i = lt({ ...n, idScope: l, dependencies: t });
	return (
		u.useContext(J) && (i = K.createElement(_t, null, i)),
		(e = u.useMemo(() => ({ dependencies: t, idScope: l }), [l, ...t])),
		K.createElement(Pe.Provider, { value: e }, i)
	);
}
function _t({ children: n }) {
	const e = u.useContext(J),
		t = u.useMemo(
			() =>
				K.createElement(
					J.Provider,
					{ value: null },
					K.createElement(et.Provider, { value: !0 }, n),
				),
			[n],
		);
	return _e()
		? K.createElement(ce.Provider, { value: e }, t)
		: Ue.createPortal(t, e);
}
const ml = u.createContext(null),
	zt = {
		CollectionRoot({ collection: n, renderDropIndicator: e }) {
			return Me(n, null, e);
		},
		CollectionBranch({ collection: n, parent: e, renderDropIndicator: t }) {
			return Me(n, e, t);
		},
	};
function Me(n, e, t) {
	return Je({
		items: e ? n.getChildren(e.key) : n,
		dependencies: [t],
		children(l) {
			if (l.type === "content") return K.createElement(K.Fragment, null);
			const i = l.render(l);
			return !t || l.type !== "item"
				? i
				: K.createElement(
						K.Fragment,
						null,
						t({ type: "item", key: l.key, dropPosition: "before" }),
						i,
						Ut(n, l, t),
					);
		},
	});
}
function Ut(n, e, t) {
	let l = e.key,
		i = n.getKeyAfter(l),
		s = i != null ? n.getItem(i) : null;
	for (; s != null && s.type !== "item"; )
		(i = n.getKeyAfter(s.key)), (s = i != null ? n.getItem(i) : null);
	let r = e.nextKey != null ? n.getItem(e.nextKey) : null;
	for (; r != null && r.type !== "item"; )
		r = r.nextKey != null ? n.getItem(r.nextKey) : null;
	const a = [];
	if (r == null) {
		let o = e;
		for (
			;
			(o == null ? void 0 : o.type) === "item" &&
			(!s || (o.parentKey !== s.parentKey && s.level < o.level));
		) {
			const d = t({ type: "item", key: o.key, dropPosition: "after" });
			u.isValidElement(d) &&
				a.push(u.cloneElement(d, { key: `${o.key}-after` })),
				(o = o.parentKey != null ? n.getItem(o.parentKey) : null);
		}
	}
	return a;
}
const $l = u.createContext(zt),
	xl = u.createContext({}),
	qt = u.createContext(null),
	Wt = u.forwardRef((e, t) => {
		const { render: l } = u.useContext(qt);
		return K.createElement(K.Fragment, null, l(e, t));
	});
function Sl(n, e) {
	var s;
	const t = n == null ? void 0 : n.renderDropIndicator,
		l =
			(s = n == null ? void 0 : n.isVirtualDragging) == null
				? void 0
				: s.call(n),
		i = u.useCallback(
			(r) => {
				if (l || (e != null && e.isDropTarget(r)))
					return t ? t(r) : K.createElement(Wt, { target: r });
			},
			[e == null ? void 0 : e.target, l, t],
		);
	return n != null && n.useDropIndicator ? i : void 0;
}
function vl(n, e, t) {
	var s, r, a;
	let l = n.focusedKey,
		i = null;
	if (
		(s = e == null ? void 0 : e.isVirtualDragging) != null &&
		s.call(e) &&
		((r = t == null ? void 0 : t.target) == null ? void 0 : r.type) ===
			"item" &&
		((i = t.target.key), t.target.dropPosition === "after")
	) {
		let o = t.collection.getKeyAfter(i),
			d = null;
		if (o != null) {
			const g = ((a = t.collection.getItem(i)) == null ? void 0 : a.level) ?? 0;
			for (; o != null; ) {
				const y = t.collection.getItem(o);
				if (!y) break;
				if (y.type !== "item") {
					o = t.collection.getKeyAfter(o);
					continue;
				}
				if ((y.level ?? 0) <= g) break;
				(d = o), (o = t.collection.getKeyAfter(o));
			}
		}
		i = o ?? d ?? i;
	}
	return u.useMemo(() => new Set([l, i].filter((o) => o != null)), [l, i]);
}
const jt = u.createContext(null);
function Cl(n) {
	const e = u.useRef({});
	return K.createElement(jt.Provider, { value: e }, n.children);
}
const wl = u.createContext({ isSelected: !1 });
function ue(n) {
	return ct() ? n.altKey : n.ctrlKey;
}
function H(n, e) {
	var i, s;
	let t = `[data-key="${CSS.escape(String(e))}"]`,
		l = (i = n.current) == null ? void 0 : i.dataset.collection;
	return (
		l && (t = `[data-collection="${CSS.escape(l)}"]${t}`),
		(s = n.current) == null ? void 0 : s.querySelector(t)
	);
}
const it = new WeakMap();
function Gt(n) {
	const e = ze();
	return it.set(n, e), e;
}
function Yt(n) {
	return it.get(n);
}
const Xt = 1e3;
function Zt(n) {
	const { keyboardDelegate: e, selectionManager: t, onTypeSelect: l } = n,
		i = u.useRef({ search: "", timeout: void 0 }).current,
		s = (r) => {
			const a = Jt(r.key);
			if (
				!(
					!a ||
					r.ctrlKey ||
					r.metaKey ||
					!X(r.currentTarget, W(r)) ||
					(i.search.length === 0 && a === " ")
				)
			) {
				if (
					(a === " " &&
						i.search.trim().length > 0 &&
						(r.preventDefault(),
						"continuePropagation" in r || r.stopPropagation()),
					(i.search += a),
					e.getKeyForSearch != null)
				) {
					let o = e.getKeyForSearch(i.search, t.focusedKey);
					o == null && (o = e.getKeyForSearch(i.search)),
						o != null && (t.setFocusedKey(o), l && l(o));
				}
				clearTimeout(i.timeout),
					(i.timeout = setTimeout(() => {
						i.search = "";
					}, Xt));
			}
		};
	return {
		typeSelectProps: { onKeyDownCapture: e.getKeyForSearch ? s : void 0 },
	};
}
function Jt(n) {
	return n.length === 1 || !/^[A-Z]/i.test(n) ? n : "";
}
function Re(n, e) {
	const t = u.useRef(!0),
		l = u.useRef(null);
	re(
		() => (
			(t.current = !0),
			() => {
				t.current = !1;
			}
		),
		[],
	),
		re(() => {
			t.current
				? (t.current = !1)
				: (!l.current || e.some((i, s) => !Object.is(i, l[s]))) && n(),
				(l.current = e);
		}, e);
}
function Dl(n) {
	const {
			selectionManager: e,
			keyboardDelegate: t,
			ref: l,
			autoFocus: i = !1,
			shouldFocusWrap: s = !1,
			disallowEmptySelection: r = !1,
			disallowSelectAll: a = !1,
			escapeKeyBehavior: o = "clearSelection",
			selectOnFocus: d = e.selectionBehavior === "replace",
			disallowTypeAhead: g = !1,
			shouldUseVirtualFocus: y,
			allowsTabNavigation: p = !1,
			scrollRef: b = l,
			linkBehavior: D = "action",
		} = n,
		{ direction: I } = bt(),
		v = We(),
		B = (f) => {
			var x, S, k, T, c, V, ye, pe, ge, be, Ke, me, $e, xe;
			if (
				(f.altKey && f.key === "Tab" && f.preventDefault(),
				!l.current || !X(l.current, W(f)))
			)
				return;
			const m = (h, _) => {
				if (h != null) {
					if (e.isLink(h) && D === "selection" && d && !ue(f)) {
						Ue.flushSync(() => {
							e.setFocusedKey(h, _);
						});
						const z = H(l, h),
							Y = e.getItemProps(h);
						z && v.open(z, f, Y.href, Y.routerOptions);
						return;
					}
					if ((e.setFocusedKey(h, _), e.isLink(h) && D === "override")) return;
					f.shiftKey && e.selectionMode === "multiple"
						? e.extendSelection(h)
						: d && !ue(f) && e.replaceSelection(h);
				}
			};
			switch (f.key) {
				case "ArrowDown":
					if (t.getKeyBelow) {
						let h =
							e.focusedKey != null
								? (x = t.getKeyBelow) == null
									? void 0
									: x.call(t, e.focusedKey)
								: (S = t.getFirstKey) == null
									? void 0
									: S.call(t);
						h == null &&
							s &&
							(h =
								(k = t.getFirstKey) == null ? void 0 : k.call(t, e.focusedKey)),
							h != null && (f.preventDefault(), m(h));
					}
					break;
				case "ArrowUp":
					if (t.getKeyAbove) {
						let h =
							e.focusedKey != null
								? (T = t.getKeyAbove) == null
									? void 0
									: T.call(t, e.focusedKey)
								: (c = t.getLastKey) == null
									? void 0
									: c.call(t);
						h == null &&
							s &&
							(h =
								(V = t.getLastKey) == null ? void 0 : V.call(t, e.focusedKey)),
							h != null && (f.preventDefault(), m(h));
					}
					break;
				case "ArrowLeft":
					if (t.getKeyLeftOf) {
						let h =
							e.focusedKey != null
								? (ye = t.getKeyLeftOf) == null
									? void 0
									: ye.call(t, e.focusedKey)
								: (pe = t.getFirstKey) == null
									? void 0
									: pe.call(t);
						h == null &&
							s &&
							(h =
								I === "rtl"
									? (ge = t.getFirstKey) == null
										? void 0
										: ge.call(t, e.focusedKey)
									: (be = t.getLastKey) == null
										? void 0
										: be.call(t, e.focusedKey)),
							h != null &&
								(f.preventDefault(), m(h, I === "rtl" ? "first" : "last"));
					}
					break;
				case "ArrowRight":
					if (t.getKeyRightOf) {
						let h =
							e.focusedKey != null
								? (Ke = t.getKeyRightOf) == null
									? void 0
									: Ke.call(t, e.focusedKey)
								: (me = t.getFirstKey) == null
									? void 0
									: me.call(t);
						h == null &&
							s &&
							(h =
								I === "rtl"
									? ($e = t.getLastKey) == null
										? void 0
										: $e.call(t, e.focusedKey)
									: (xe = t.getFirstKey) == null
										? void 0
										: xe.call(t, e.focusedKey)),
							h != null &&
								(f.preventDefault(), m(h, I === "rtl" ? "last" : "first"));
					}
					break;
				case "Home":
					if (t.getFirstKey) {
						if (e.focusedKey === null && f.shiftKey) return;
						f.preventDefault();
						const h = t.getFirstKey(e.focusedKey, q(f));
						e.setFocusedKey(h),
							h != null &&
								(q(f) && f.shiftKey && e.selectionMode === "multiple"
									? e.extendSelection(h)
									: d && e.replaceSelection(h));
					}
					break;
				case "End":
					if (t.getLastKey) {
						if (e.focusedKey === null && f.shiftKey) return;
						f.preventDefault();
						const h = t.getLastKey(e.focusedKey, q(f));
						e.setFocusedKey(h),
							h != null &&
								(q(f) && f.shiftKey && e.selectionMode === "multiple"
									? e.extendSelection(h)
									: d && e.replaceSelection(h));
					}
					break;
				case "PageDown":
					if (t.getKeyPageBelow && e.focusedKey != null) {
						const h = t.getKeyPageBelow(e.focusedKey);
						h != null && (f.preventDefault(), m(h));
					}
					break;
				case "PageUp":
					if (t.getKeyPageAbove && e.focusedKey != null) {
						const h = t.getKeyPageAbove(e.focusedKey);
						h != null && (f.preventDefault(), m(h));
					}
					break;
				case "a":
					q(f) &&
						e.selectionMode === "multiple" &&
						a !== !0 &&
						(f.preventDefault(), e.selectAll());
					break;
				case "Escape":
					o === "clearSelection" &&
						!r &&
						e.selectedKeys.size !== 0 &&
						(f.stopPropagation(), f.preventDefault(), e.clearSelection());
					break;
				case "Tab":
					if (!p) {
						if (f.shiftKey) l.current.focus();
						else {
							let h = yt(l.current, { tabbable: !0 }),
								_,
								z;
							do (z = h.lastChild()), z && (_ = z);
							while (z);
							const Y = ee();
							_ && (!Ce(_) || (Y && !ut(Y))) && oe(_);
						}
						break;
					}
			}
		},
		$ = u.useRef({ top: 0, left: 0 });
	Q(b, "scroll", () => {
		var f, m;
		$.current = {
			top: ((f = b.current) == null ? void 0 : f.scrollTop) ?? 0,
			left: ((m = b.current) == null ? void 0 : m.scrollLeft) ?? 0,
		};
	});
	const C = (f) => {
			var m, x;
			if (e.isFocused) {
				X(f.currentTarget, W(f)) || e.setFocused(!1);
				return;
			}
			if (X(f.currentTarget, W(f))) {
				if ((e.setFocused(!0), e.focusedKey == null)) {
					const S = (T) => {
							T != null &&
								(e.setFocusedKey(T),
								d && !e.isSelected(T) && e.replaceSelection(T));
						},
						k = f.relatedTarget;
					k &&
					f.currentTarget.compareDocumentPosition(k) &
						Node.DOCUMENT_POSITION_FOLLOWING
						? S(
								e.lastSelectedKey ??
									((m = t.getLastKey) == null ? void 0 : m.call(t)),
							)
						: S(
								e.firstSelectedKey ??
									((x = t.getFirstKey) == null ? void 0 : x.call(t)),
							);
				} else
					b.current &&
						((b.current.scrollTop = $.current.top),
						(b.current.scrollLeft = $.current.left));
				if (e.focusedKey != null && b.current) {
					const S = H(l, e.focusedKey);
					S instanceof HTMLElement &&
						(!Ce(S) && !y && oe(S),
						ve() === "keyboard" && we(S, { containingElement: l.current }));
				}
			}
		},
		E = (f) => {
			X(f.currentTarget, f.relatedTarget) || e.setFocused(!1);
		},
		P = u.useRef(!1);
	Q(
		l,
		$t,
		y
			? (f) => {
					const { detail: m } = f;
					f.stopPropagation(),
						e.setFocused(!0),
						(m == null ? void 0 : m.focusStrategy) === "first" &&
							(P.current = !0);
				}
			: void 0,
	),
		Re(() => {
			var f;
			if (P.current) {
				const m = ((f = t.getFirstKey) == null ? void 0 : f.call(t)) ?? null;
				if (m == null) {
					const x = ee();
					je(l.current), Ge(x, null), e.collection.size > 0 && (P.current = !1);
				} else e.setFocusedKey(m), (P.current = !1);
			}
		}, [e.collection]),
		Re(() => {
			e.collection.size > 0 && (P.current = !1);
		}, [e.focusedKey]),
		Q(
			l,
			mt,
			y
				? (f) => {
						var m;
						f.stopPropagation(),
							e.setFocused(!1),
							(m = f.detail) != null &&
								m.clearFocusKey &&
								e.setFocusedKey(null);
					}
				: void 0,
		);
	const L = u.useRef(i),
		M = u.useRef(!1);
	u.useEffect(() => {
		var f, m;
		if (L.current) {
			let x = null;
			i === "first" &&
				(x = ((f = t.getFirstKey) == null ? void 0 : f.call(t)) ?? null),
				i === "last" &&
					(x = ((m = t.getLastKey) == null ? void 0 : m.call(t)) ?? null);
			const S = e.selectedKeys;
			if (S.size) {
				for (const k of S)
					if (e.canSelectItem(k)) {
						x = k;
						break;
					}
			}
			e.setFocused(!0),
				e.setFocusedKey(x),
				x == null && !y && l.current && se(l.current),
				e.collection.size > 0 && ((L.current = !1), (M.current = !0));
		}
	});
	const A = u.useRef(e.focusedKey),
		R = u.useRef(null);
	u.useEffect(() => {
		if (
			e.isFocused &&
			e.focusedKey != null &&
			(e.focusedKey !== A.current || M.current) &&
			b.current &&
			l.current
		) {
			const f = ve(),
				m = H(l, e.focusedKey);
			if (!(m instanceof HTMLElement)) return;
			(f === "keyboard" || M.current) &&
				(R.current && cancelAnimationFrame(R.current),
				(R.current = requestAnimationFrame(() => {
					b.current &&
						(ht(b.current, m),
						f !== "virtual" && we(m, { containingElement: l.current }));
				})));
		}
		!y &&
			e.isFocused &&
			e.focusedKey == null &&
			A.current != null &&
			l.current &&
			se(l.current),
			(A.current = e.focusedKey),
			(M.current = !1);
	}),
		u.useEffect(
			() => () => {
				R.current && cancelAnimationFrame(R.current);
			},
			[],
		),
		Q(l, "react-aria-focus-scope-restore", (f) => {
			f.preventDefault(), e.setFocused(!0);
		});
	let U = {
			onKeyDown: B,
			onFocus: C,
			onBlur: E,
			onMouseDown(f) {
				b.current === W(f) && f.preventDefault();
			},
		},
		{ typeSelectProps: O } = Zt({ keyboardDelegate: t, selectionManager: e });
	g || (U = Z(O, U));
	let N;
	y || (N = e.focusedKey == null ? 0 : -1);
	const w = Gt(e.collection);
	return { collectionProps: Z(U, { tabIndex: N, "data-collection": w }) };
}
class Te {
	constructor(e) {
		this.ref = e;
	}
	getItemRect(e) {
		const t = this.ref.current;
		if (!t) return null;
		const l = e != null ? H(this.ref, e) : null;
		if (!l) return null;
		const i = t.getBoundingClientRect(),
			s = l.getBoundingClientRect();
		return {
			x: s.left - i.left - t.clientLeft + t.scrollLeft,
			y: s.top - i.top - t.clientTop + t.scrollTop,
			width: s.width,
			height: s.height,
		};
	}
	getContentSize() {
		const e = this.ref.current;
		return {
			width: (e == null ? void 0 : e.scrollWidth) ?? 0,
			height: (e == null ? void 0 : e.scrollHeight) ?? 0,
		};
	}
	getVisibleRect() {
		const e = this.ref.current;
		return {
			x: (e == null ? void 0 : e.scrollLeft) ?? 0,
			y: (e == null ? void 0 : e.scrollTop) ?? 0,
			width: (e == null ? void 0 : e.clientWidth) ?? 0,
			height: (e == null ? void 0 : e.clientHeight) ?? 0,
		};
	}
}
class Il {
	constructor(...e) {
		if (e.length === 1) {
			const t = e[0];
			(this.collection = t.collection),
				(this.ref = t.ref),
				(this.collator = t.collator),
				(this.disabledKeys = t.disabledKeys || new Set()),
				(this.disabledBehavior = t.disabledBehavior || "all"),
				(this.orientation = t.orientation || "vertical"),
				(this.direction = t.direction),
				(this.layout = t.layout || "stack"),
				(this.layoutDelegate = t.layoutDelegate || new Te(t.ref));
		} else
			(this.collection = e[0]),
				(this.disabledKeys = e[1]),
				(this.ref = e[2]),
				(this.collator = e[3]),
				(this.layout = "stack"),
				(this.orientation = "vertical"),
				(this.disabledBehavior = "all"),
				(this.layoutDelegate = new Te(this.ref));
		this.layout === "stack" &&
			this.orientation === "vertical" &&
			((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
	}
	isDisabled(e) {
		var t, l;
		return (
			this.disabledBehavior === "all" &&
			(((t = e.props) == null ? void 0 : t.isDisabled) ||
				this.disabledKeys.has(e.key)) &&
			((l = e.props) == null ? void 0 : l.disabledBehavior) !== "selection"
		);
	}
	findNextNonDisabled(e, t, l = !1) {
		let i = e;
		for (; i != null; ) {
			const s = this.collection.getItem(i);
			if (
				(s == null ? void 0 : s.type) === "item" &&
				(l || !this.isDisabled(s))
			)
				return i;
			i = t(i);
		}
		return null;
	}
	getNextKey(e, t) {
		let l = e;
		return (
			(l = this.collection.getKeyAfter(l)),
			this.findNextNonDisabled(
				l,
				(i) => this.collection.getKeyAfter(i),
				t == null ? void 0 : t.includeDisabled,
			)
		);
	}
	getPreviousKey(e, t) {
		let l = e;
		return (
			(l = this.collection.getKeyBefore(l)),
			this.findNextNonDisabled(
				l,
				(i) => this.collection.getKeyBefore(i),
				t == null ? void 0 : t.includeDisabled,
			)
		);
	}
	findKey(e, t, l) {
		let i = e,
			s = this.layoutDelegate.getItemRect(i);
		if (!s || i == null) return null;
		const r = s;
		do {
			if (((i = t(i)), i == null)) break;
			s = this.layoutDelegate.getItemRect(i);
		} while (s && l(r, s) && i != null);
		return i;
	}
	isSameRow(e, t) {
		return e.y === t.y || e.x !== t.x;
	}
	isSameColumn(e, t) {
		return e.x === t.x || e.y !== t.y;
	}
	getKeyBelow(e, t) {
		return this.layout === "grid" && this.orientation === "vertical"
			? this.findKey(e, (l) => this.getNextKey(l, t), this.isSameRow)
			: this.getNextKey(e, t);
	}
	getKeyAbove(e, t) {
		return this.layout === "grid" && this.orientation === "vertical"
			? this.findKey(e, (l) => this.getPreviousKey(l, t), this.isSameRow)
			: this.getPreviousKey(e, t);
	}
	getNextColumn(e, t, l) {
		return t ? this.getPreviousKey(e, l) : this.getNextKey(e, l);
	}
	getKeyRightOf(e, t) {
		const l = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
		return this.layoutDelegate[l]
			? ((e = this.layoutDelegate[l](e)),
				this.findNextNonDisabled(
					e,
					(i) => this.layoutDelegate[l](i),
					t == null ? void 0 : t.includeDisabled,
				))
			: this.layout === "grid"
				? this.orientation === "vertical"
					? this.getNextColumn(e, this.direction === "rtl", t)
					: this.findKey(
							e,
							(i) => this.getNextColumn(i, this.direction === "rtl", t),
							this.isSameColumn,
						)
				: this.orientation === "horizontal"
					? this.getNextColumn(e, this.direction === "rtl", t)
					: null;
	}
	getKeyLeftOf(e, t) {
		const l = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
		return this.layoutDelegate[l]
			? ((e = this.layoutDelegate[l](e)),
				this.findNextNonDisabled(
					e,
					(i) => this.layoutDelegate[l](i),
					t == null ? void 0 : t.includeDisabled,
				))
			: this.layout === "grid"
				? this.orientation === "vertical"
					? this.getNextColumn(e, this.direction === "ltr", t)
					: this.findKey(
							e,
							(i) => this.getNextColumn(i, this.direction === "ltr", t),
							this.isSameColumn,
						)
				: this.orientation === "horizontal"
					? this.getNextColumn(e, this.direction === "ltr", t)
					: null;
	}
	getFirstKey() {
		const e = this.collection.getFirstKey();
		return this.findNextNonDisabled(e, (t) => this.collection.getKeyAfter(t));
	}
	getLastKey() {
		const e = this.collection.getLastKey();
		return this.findNextNonDisabled(e, (t) => this.collection.getKeyBefore(t));
	}
	getKeyPageAbove(e) {
		let t = this.ref.current,
			l = this.layoutDelegate.getItemRect(e);
		if (!l) return null;
		if (t && !De(t)) return this.getFirstKey();
		let i = e;
		if (this.orientation === "horizontal") {
			const s = Math.max(
				0,
				l.x + l.width - this.layoutDelegate.getVisibleRect().width,
			);
			for (; l && l.x > s && i != null; )
				(i = this.getKeyAbove(i)),
					(l = i == null ? null : this.layoutDelegate.getItemRect(i));
		} else {
			const s = Math.max(
				0,
				l.y + l.height - this.layoutDelegate.getVisibleRect().height,
			);
			for (; l && l.y > s && i != null; )
				(i = this.getKeyAbove(i)),
					(l = i == null ? null : this.layoutDelegate.getItemRect(i));
		}
		return i ?? this.getFirstKey();
	}
	getKeyPageBelow(e) {
		let t = this.ref.current,
			l = this.layoutDelegate.getItemRect(e);
		if (!l) return null;
		if (t && !De(t)) return this.getLastKey();
		let i = e;
		if (this.orientation === "horizontal") {
			const s = Math.min(
				this.layoutDelegate.getContentSize().width,
				l.x - l.width + this.layoutDelegate.getVisibleRect().width,
			);
			for (; l && l.x < s && i != null; )
				(i = this.getKeyBelow(i)),
					(l = i == null ? null : this.layoutDelegate.getItemRect(i));
		} else {
			const s = Math.min(
				this.layoutDelegate.getContentSize().height,
				l.y - l.height + this.layoutDelegate.getVisibleRect().height,
			);
			for (; l && l.y < s && i != null; )
				(i = this.getKeyBelow(i)),
					(l = i == null ? null : this.layoutDelegate.getItemRect(i));
		}
		return i ?? this.getLastKey();
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let l = this.collection,
			i = t || this.getFirstKey();
		for (; i != null; ) {
			const s = l.getItem(i);
			if (!s) return null;
			const r = s.textValue.slice(0, e.length);
			if (s.textValue && this.collator.compare(r, e) === 0) return i;
			i = this.getNextKey(i);
		}
		return null;
	}
}
const Qt = 500;
function Ht(n) {
	const {
		isDisabled: e,
		onLongPressStart: t,
		onLongPressEnd: l,
		onLongPress: i,
		threshold: s = Qt,
		accessibilityDescription: r,
	} = n;
	const a = u.useRef(void 0);
	const { addGlobalListener: o, removeGlobalListener: d } = at(),
		{ pressProps: g } = Ne({
			isDisabled: e,
			onPressStart(p) {
				if (
					(p.continuePropagation(),
					(p.pointerType === "mouse" || p.pointerType === "touch") &&
						(t && t({ ...p, type: "longpressstart" }),
						(a.current = setTimeout(() => {
							p.target.dispatchEvent(
								new PointerEvent("pointercancel", { bubbles: !0 }),
							),
								qe(p.target).activeElement !== p.target && oe(p.target),
								i && i({ ...p, type: "longpress" }),
								(a.current = void 0);
						}, s)),
						p.pointerType === "touch"))
				) {
					const b = (I) => {
							I.preventDefault();
						},
						D = ft(p.target);
					o(p.target, "contextmenu", b, { once: !0 }),
						o(
							D,
							"pointerup",
							() => {
								setTimeout(() => {
									d(p.target, "contextmenu", b);
								}, 30);
							},
							{ once: !0 },
						);
				}
			},
			onPressEnd(p) {
				a.current && clearTimeout(a.current),
					l &&
						(p.pointerType === "mouse" || p.pointerType === "touch") &&
						l({ ...p, type: "longpressend" });
			},
		}),
		y = pt(i && !e ? r : void 0);
	return { longPressProps: Z(g, y) };
}
function El(n) {
	let {
			id: e,
			selectionManager: t,
			key: l,
			ref: i,
			shouldSelectOnPressUp: s,
			shouldUseVirtualFocus: r,
			focus: a,
			isDisabled: o,
			onAction: d,
			allowsDifferentPressOrigin: g,
			linkBehavior: y = "action",
		} = n,
		p = We();
	e = ze(e);
	const b = (c) => {
		if (c.pointerType === "keyboard" && ue(c)) t.toggleSelection(l);
		else {
			if (t.selectionMode === "none") return;
			if (t.isLink(l)) {
				if (y === "selection" && i.current) {
					const V = t.getItemProps(l);
					p.open(i.current, c, V.href, V.routerOptions),
						t.setSelectedKeys(t.selectedKeys);
					return;
				} else if (y === "override" || y === "none") return;
			}
			t.selectionMode === "single"
				? t.isSelected(l) && !t.disallowEmptySelection
					? t.toggleSelection(l)
					: t.replaceSelection(l)
				: c && c.shiftKey
					? t.extendSelection(l)
					: t.selectionBehavior === "toggle" ||
							(c &&
								(q(c) ||
									c.pointerType === "touch" ||
									c.pointerType === "virtual"))
						? t.toggleSelection(l)
						: t.replaceSelection(l);
		}
	};
	u.useEffect(() => {
		l === t.focusedKey &&
			t.isFocused &&
			(r
				? je(i.current)
				: a
					? a()
					: ee() !== i.current && i.current && se(i.current));
	}, [i, l, t.focusedKey, t.childFocusStrategy, t.isFocused, r]),
		(o = o || t.isDisabled(l));
	let D = {};
	!r && !o
		? (D = {
				tabIndex: l === t.focusedKey ? 0 : -1,
				onFocus(c) {
					W(c) === i.current && t.setFocusedKey(l);
				},
			})
		: o &&
			(D.onMouseDown = (c) => {
				c.preventDefault();
			}),
		u.useEffect(() => {
			o && t.focusedKey === l && t.setFocusedKey(null);
		}, [t, o, l]);
	let I = t.isLink(l) && y === "override",
		v = d && n.UNSTABLE_itemBehavior === "action",
		B = t.isLink(l) && y !== "selection" && y !== "none",
		$ = !o && t.canSelectItem(l) && !I && !v,
		C = (d || B) && !o,
		E = C && (t.selectionBehavior === "replace" ? !$ : !$ || t.isEmpty),
		P = C && $ && t.selectionBehavior === "replace",
		L = E || P,
		M = u.useRef(null),
		A = L && $,
		R = u.useRef(!1),
		U = u.useRef(!1),
		O = t.getItemProps(l),
		N = (c) => {
			var V;
			d &&
				(d(),
				(V = i.current) == null ||
					V.dispatchEvent(
						new CustomEvent("react-aria-item-action", { bubbles: !0 }),
					)),
				B && i.current && p.open(i.current, c, O.href, O.routerOptions);
		},
		w = { ref: i };
	if (
		(s
			? ((w.onPressStart = (c) => {
					(M.current = c.pointerType),
						(R.current = A),
						c.pointerType === "keyboard" && (!L || Le(c.key)) && b(c);
				}),
				g
					? ((w.onPressUp = E
							? void 0
							: (c) => {
									c.pointerType === "mouse" && $ && b(c);
								}),
						(w.onPress = E
							? N
							: (c) => {
									c.pointerType !== "keyboard" &&
										c.pointerType !== "mouse" &&
										$ &&
										b(c);
								}))
					: (w.onPress = (c) => {
							if (E || (P && c.pointerType !== "mouse")) {
								if (c.pointerType === "keyboard" && !Be(c.key)) return;
								N(c);
							} else c.pointerType !== "keyboard" && $ && b(c);
						}))
			: ((w.onPressStart = (c) => {
					(M.current = c.pointerType),
						(R.current = A),
						(U.current = E),
						$ &&
							((c.pointerType === "mouse" && !E) ||
								(c.pointerType === "keyboard" && (!C || Le(c.key)))) &&
							b(c);
				}),
				(w.onPress = (c) => {
					(c.pointerType === "touch" ||
						c.pointerType === "pen" ||
						c.pointerType === "virtual" ||
						(c.pointerType === "keyboard" && L && Be(c.key)) ||
						(c.pointerType === "mouse" && U.current)) &&
						(L ? N(c) : $ && b(c));
				})),
		(D["data-collection"] = Yt(t.collection)),
		(D["data-key"] = l),
		(w.preventFocusOnPress = r),
		r &&
			(w = Z(w, {
				onPressStart(c) {
					c.pointerType !== "touch" && (t.setFocused(!0), t.setFocusedKey(l));
				},
				onPress(c) {
					c.pointerType === "touch" && (t.setFocused(!0), t.setFocusedKey(l));
				},
			})),
		O)
	)
		for (const c of [
			"onPressStart",
			"onPressEnd",
			"onPressChange",
			"onPress",
			"onPressUp",
			"onClick",
		])
			O[c] && (w[c] = ot(w[c], O[c]));
	const { pressProps: f, isPressed: m } = Ne(w),
		x = P
			? (c) => {
					M.current === "mouse" &&
						(c.stopPropagation(), c.preventDefault(), N(c));
				}
			: void 0,
		{ longPressProps: S } = Ht({
			isDisabled: !A,
			onLongPress(c) {
				c.pointerType === "touch" && (b(c), t.setSelectionBehavior("toggle"));
			},
		}),
		k = (c) => {
			M.current === "touch" && R.current && c.preventDefault();
		},
		T =
			y !== "none" && t.isLink(l)
				? (c) => {
						dt.isOpening || c.preventDefault();
					}
				: void 0;
	return {
		itemProps: Z(
			D,
			$ || E || (r && !o) ? f : {},
			A ? S : {},
			{ onDoubleClick: x, onDragStartCapture: k, onClick: T, id: e },
			r ? { onMouseDown: (c) => c.preventDefault() } : void 0,
		),
		isPressed: m,
		isSelected: t.isSelected(l),
		isFocused: t.isFocused && t.focusedKey === l,
		isDisabled: o,
		allowsSelection: $,
		hasAction: L,
	};
}
function Be(n) {
	return n === "Enter";
}
function Le(n) {
	return n === " ";
}
function el(n, e) {
	return typeof e.getChildren == "function"
		? e.getChildren(n.key)
		: n.childNodes;
}
function tl(n) {
	return ll(n, 0);
}
function ll(n, e) {
	if (e < 0) return;
	let t = 0;
	for (const l of n) {
		if (t === e) return l;
		t++;
	}
}
function kl(n) {
	let e;
	for (const t of n) e = t;
	return e;
}
function ie(n, e, t) {
	if (e.parentKey === t.parentKey) return e.index - t.index;
	const l = [...Ae(n, e), e],
		i = [...Ae(n, t), t],
		s = l.slice(0, i.length).findIndex((r, a) => r !== i[a]);
	return s !== -1
		? ((e = l[s]), (t = i[s]), e.index - t.index)
		: l.findIndex((r) => r === t) >= 0
			? 1
			: (i.findIndex((r) => r === e) >= 0, -1);
}
function Ae(n, e) {
	let t = [],
		l = e;
	for (; (l == null ? void 0 : l.parentKey) != null; )
		(l = n.getItem(l.parentKey)), l && t.unshift(l);
	return t;
}
function Fl(n) {
	const e = u.version.split(".");
	return parseInt(e[0], 10) >= 19 ? n : n ? "true" : void 0;
}
class F extends Set {
	constructor(e, t, l) {
		super(e),
			e instanceof F
				? ((this.anchorKey = t ?? e.anchorKey),
					(this.currentKey = l ?? e.currentKey))
				: ((this.anchorKey = t ?? null), (this.currentKey = l ?? null));
	}
}
function il(n, e) {
	if (n.size !== e.size) return !1;
	for (const t of n) if (!e.has(t)) return !1;
	return !0;
}
function Pl(n) {
	const {
			selectionMode: e = "none",
			disallowEmptySelection: t = !1,
			allowDuplicateSelectionEvents: l,
			selectionBehavior: i = "toggle",
			disabledBehavior: s = "all",
		} = n,
		r = u.useRef(!1),
		[, a] = u.useState(!1),
		o = u.useRef(null),
		d = u.useRef(null),
		[, g] = u.useState(null),
		y = u.useMemo(() => Ve(n.selectedKeys), [n.selectedKeys]),
		p = u.useMemo(
			() => Ve(n.defaultSelectedKeys, new F()),
			[n.defaultSelectedKeys],
		),
		[b, D] = Kt(y, p, n.onSelectionChange),
		I = u.useMemo(
			() => (n.disabledKeys ? new Set(n.disabledKeys) : new Set()),
			[n.disabledKeys],
		),
		[v, B] = u.useState(i);
	i === "replace" &&
		v === "toggle" &&
		typeof b == "object" &&
		b.size === 0 &&
		B("replace");
	const $ = u.useRef(i);
	return (
		u.useEffect(() => {
			i !== $.current && (B(i), ($.current = i));
		}, [i]),
		{
			selectionMode: e,
			disallowEmptySelection: t,
			selectionBehavior: v,
			setSelectionBehavior: B,
			get isFocused() {
				return r.current;
			},
			setFocused(C) {
				(r.current = C), a(C);
			},
			get focusedKey() {
				return o.current;
			},
			get childFocusStrategy() {
				return d.current;
			},
			setFocusedKey(C, E = "first") {
				(o.current = C), (d.current = E), g(C);
			},
			selectedKeys: b,
			setSelectedKeys(C) {
				(l || !il(C, b)) && D(C);
			},
			disabledKeys: I,
			disabledBehavior: s,
		}
	);
}
function Ve(n, e) {
	return n ? (n === "all" ? "all" : new F(n)) : e;
}
class nt {
	constructor(e, t, l) {
		(this.collection = e),
			(this.state = t),
			(this.allowsCellSelection =
				(l == null ? void 0 : l.allowsCellSelection) ?? !1),
			(this._isSelectAll = null),
			(this.layoutDelegate = (l == null ? void 0 : l.layoutDelegate) || null),
			(this.fullCollection = (l == null ? void 0 : l.fullCollection) || null);
	}
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === "all"
			? new Set(this.getSelectAllKeys())
			: this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		if (this.state.selectionMode === "none") return !1;
		const t = this.getKey(e);
		return t == null
			? !1
			: this.state.selectedKeys === "all"
				? this.canSelectItem(t)
				: this.state.selectedKeys.has(t);
	}
	get isEmpty() {
		return (
			this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0
		);
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === "all") return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		const e = this.getSelectAllKeys(),
			t = this.state.selectedKeys;
		return (this._isSelectAll = e.every((l) => t.has(l))), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (const t of this.state.selectedKeys) {
			const l = this.collection.getItem(t);
			(!e || (l && ie(this.collection, l, e) < 0)) && (e = l);
		}
		return (e == null ? void 0 : e.key) ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (const t of this.state.selectedKeys) {
			const l = this.collection.getItem(t);
			(!e || (l && ie(this.collection, l, e) > 0)) && (e = l);
		}
		return (e == null ? void 0 : e.key) ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(e);
			return;
		}
		const t = this.getKey(e);
		if (t == null) return;
		let l;
		if (this.state.selectedKeys === "all") l = new F([t], t, t);
		else {
			const i = this.state.selectedKeys,
				s = i.anchorKey ?? t;
			l = new F(i, s, t);
			for (const r of this.getKeyRange(s, i.currentKey ?? t)) l.delete(r);
			for (const r of this.getKeyRange(t, s)) this.canSelectItem(r) && l.add(r);
		}
		this.state.setSelectedKeys(l);
	}
	getKeyRange(e, t) {
		const l = this.collection.getItem(e),
			i = this.collection.getItem(t);
		return l && i
			? ie(this.collection, l, i) <= 0
				? this.getKeyRangeInternal(e, t)
				: this.getKeyRangeInternal(t, e)
			: [];
	}
	getKeyRangeInternal(e, t) {
		var s;
		if ((s = this.layoutDelegate) != null && s.getKeyRange)
			return this.layoutDelegate.getKeyRange(e, t);
		let l = [],
			i = e;
		for (; i != null; ) {
			const r = this.collection.getItem(i);
			if (
				(r &&
					(r.type === "item" ||
						(r.type === "cell" && this.allowsCellSelection)) &&
					l.push(i),
				i === t)
			)
				return l;
			i = this.collection.getKeyAfter(i);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || (t.type === "cell" && this.allowsCellSelection)) return e;
		for (; t && t.type !== "item" && t.parentKey != null; )
			t = this.collection.getItem(t.parentKey);
		return !t || t.type !== "item" ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		const t = this.getKey(e);
		if (t == null) return;
		const l = new F(
			this.state.selectedKeys === "all"
				? this.getSelectAllKeys()
				: this.state.selectedKeys,
		);
		l.has(t)
			? l.delete(t)
			: this.canSelectItem(t) &&
				(l.add(t), (l.anchorKey = t), (l.currentKey = t)),
			!(this.disallowEmptySelection && l.size === 0) &&
				this.state.setSelectedKeys(l);
	}
	replaceSelection(e) {
		if (this.selectionMode === "none") return;
		const t = this.getKey(e);
		if (t == null) return;
		const l = this.canSelectItem(t) ? new F([t], t, t) : new F();
		this.state.setSelectedKeys(l);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === "none") return;
		const t = new F();
		for (const l of e) {
			const i = this.getKey(l);
			if (i != null && (t.add(i), this.selectionMode === "single")) break;
		}
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		const e = this.fullCollection ?? this.collection,
			t = [],
			l = (i) => {
				var s;
				for (; i != null; ) {
					if (this.canSelectItemIn(i, e)) {
						const r = e.getItem(i);
						(r == null ? void 0 : r.type) === "item" && t.push(i),
							r != null &&
								r.hasChildNodes &&
								(this.allowsCellSelection || r.type !== "item") &&
								l(((s = tl(el(r, e))) == null ? void 0 : s.key) ?? null);
					}
					i = e.getKeyAfter(i);
				}
			};
		return l(e.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll &&
			this.selectionMode === "multiple" &&
			this.state.setSelectedKeys("all");
	}
	clearSelection() {
		!this.disallowEmptySelection &&
			(this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) &&
			this.state.setSelectedKeys(new F());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== "none" &&
			(this.selectionMode === "single"
				? this.isSelected(e) && !this.disallowEmptySelection
					? this.toggleSelection(e)
					: this.replaceSelection(e)
				: this.selectionBehavior === "toggle" ||
						(t && (t.pointerType === "touch" || t.pointerType === "virtual"))
					? this.toggleSelection(e)
					: this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		const t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (const l of e) if (!t.has(l)) return !1;
		for (const l of t) if (!e.has(l)) return !1;
		return !0;
	}
	canSelectItem(e) {
		return this.canSelectItemIn(e, this.collection);
	}
	canSelectItemIn(e, t) {
		var i;
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e))
			return !1;
		const l = t.getItem(e);
		return !(
			!l ||
			((i = l == null ? void 0 : l.props) != null && i.isDisabled) ||
			(l.type === "cell" && !this.allowsCellSelection)
		);
	}
	isDisabled(e) {
		var l, i;
		const t = this.collection.getItem(e);
		return (
			this.state.disabledBehavior === "all" &&
			(this.state.disabledKeys.has(e) ||
				!!((l = t == null ? void 0 : t.props) != null && l.isDisabled)) &&
			((i = t == null ? void 0 : t.props) == null
				? void 0
				: i.disabledBehavior) !== "selection"
		);
	}
	isLink(e) {
		var t, l;
		return !!(
			(l = (t = this.collection.getItem(e)) == null ? void 0 : t.props) !=
				null && l.href
		);
	}
	getItemProps(e) {
		var t;
		return (t = this.collection.getItem(e)) == null ? void 0 : t.props;
	}
	withCollection(e) {
		return new nt(e, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection,
		});
	}
}
class nl {
	build(e, t) {
		return (this.context = t), Oe(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		const { children: t, items: l } = e;
		if (K.isValidElement(t) && t.type === K.Fragment)
			yield* this.iterateCollection({ children: t.props.children, items: l });
		else if (typeof t == "function") {
			if (!l)
				throw new Error(
					"props.children was a function but props.items is missing",
				);
			let i = 0;
			for (const s of l)
				yield* this.getFullNode({ value: s, index: i }, { renderer: t }), i++;
		} else {
			const i = [];
			K.Children.forEach(t, (r) => {
				r && i.push(r);
			});
			let s = 0;
			for (const r of i) {
				const a = this.getFullNode({ element: r, index: s }, {});
				for (const o of a) s++, yield o;
			}
		}
	}
	getKey(e, t, l, i) {
		if (e.key != null) return e.key;
		if (t.type === "cell" && t.key != null) return `${i}${t.key}`;
		const s = t.value;
		if (s != null) {
			const r = s.key ?? s.id;
			if (r == null) throw new Error("No key found for item");
			return r;
		}
		return i ? `${i}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, t, l, i) {
		if (K.isValidElement(e.element) && e.element.type === K.Fragment) {
			const o = [];
			K.Children.forEach(e.element.props.children, (g) => {
				o.push(g);
			});
			let d = e.index ?? 0;
			for (const g of o)
				yield* this.getFullNode({ element: g, index: d++ }, t, l, i);
			return;
		}
		let s = e.element;
		if (!s && e.value && t && t.renderer) {
			const o = this.cache.get(e.value);
			if (o && (!o.shouldInvalidate || !o.shouldInvalidate(this.context))) {
				(o.index = e.index), (o.parentKey = i ? i.key : null), yield o;
				return;
			}
			s = t.renderer(e.value);
		}
		if (K.isValidElement(s)) {
			const o = s.type;
			if (typeof o != "function" && typeof o.getCollectionNode != "function") {
				const p = s.type;
				throw new Error(`Unknown element <${p}> in collection.`);
			}
			let d = o.getCollectionNode(s.props, this.context),
				g = e.index ?? 0,
				y = d.next();
			for (; !y.done && y.value; ) {
				const p = y.value;
				e.index = g;
				let b = p.key ?? null;
				b == null && (b = p.element ? null : this.getKey(s, e, t, l));
				const I = [
					...this.getFullNode(
						{ ...p, key: b, index: g, wrapper: sl(e.wrapper, p.wrapper) },
						this.getChildState(t, p),
						l ? `${l}${s.key}` : s.key,
						i,
					),
				];
				for (const v of I) {
					if (
						((v.value = p.value ?? e.value ?? null),
						v.value && this.cache.set(v.value, v),
						e.type && v.type !== e.type)
					)
						throw new Error(
							`Unsupported type <${ne(v.type)}> in <${ne((i == null ? void 0 : i.type) ?? "unknown parent type")}>. Only <${ne(e.type)}> is supported.`,
						);
					g++, yield v;
				}
				y = d.next(I);
			}
			return;
		}
		if (e.key == null || e.type == null) return;
		const r = this,
			a = {
				type: e.type,
				props: e.props,
				key: e.key,
				parentKey: i ? i.key : null,
				value: e.value ?? null,
				level:
					((i == null ? void 0 : i.level) ?? 0) +
					((i == null ? void 0 : i.type) === "item" ? 1 : 0),
				index: e.index,
				rendered: e.rendered,
				textValue: e.textValue ?? "",
				"aria-label": e["aria-label"],
				wrapper: e.wrapper,
				shouldInvalidate: e.shouldInvalidate,
				hasChildNodes: e.hasChildNodes || !1,
				childNodes: Oe(function* () {
					if (!e.hasChildNodes || !e.childNodes) return;
					let o = 0;
					for (const d of e.childNodes()) {
						d.key != null && (d.key = `${a.key}${d.key}`);
						const g = r.getFullNode(
							{ ...d, index: o },
							r.getChildState(t, d),
							a.key,
							a,
						);
						for (const y of g) o++, yield y;
					}
				}),
			};
		yield a;
	}
	constructor() {
		this.cache = new WeakMap();
	}
}
function Oe(n) {
	let e = [],
		t = null;
	return {
		*[Symbol.iterator]() {
			for (const l of e) yield l;
			t || (t = n());
			for (const l of t) e.push(l), yield l;
		},
	};
}
function sl(n, e) {
	if (n && e) return (t) => n(e(t));
	if (n) return n;
	if (e) return e;
}
function ne(n) {
	return n[0].toUpperCase() + n.slice(1);
}
function Ml(n, e, t) {
	const l = u.useMemo(() => new nl(), []),
		{ children: i, items: s, collection: r } = n;
	return u.useMemo(() => {
		if (r) return r;
		const o = l.build({ children: i, items: s }, t);
		return e(o);
	}, [l, i, s, r, t, e]);
}
function Rl(n, e) {
	const { collection: t, onLoadMore: l, scrollOffset: i = 1 } = n,
		s = u.useRef(null),
		r = st((a) => {
			for (const o of a) o.isIntersecting && l && l();
		});
	re(
		() => (
			e.current &&
				((s.current = new IntersectionObserver(r, {
					root: gt(e == null ? void 0 : e.current),
					rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`,
				})),
				s.current.observe(e.current)),
			() => {
				s.current && s.current.disconnect();
			}
		),
		[t, e, i],
	);
}
export {
	$l as a,
	bl as f,
	Cl as q,
	Dl as D,
	Ee as m,
	El as E,
	el as y,
	Fl as w,
	Ge as x,
	gl as d,
	Ht as r,
	hl as j,
	Il as v,
	Je as t,
	Kl as g,
	ke as p,
	kl as A,
	ll as z,
	Ml as C,
	ml as c,
	nt as h,
	Pl as k,
	pl as e,
	qt as I,
	Rl as $,
	Sl as F,
	Te as u,
	te as o,
	tl as B,
	vl as H,
	vt as l,
	wl as s,
	xl as G,
	Ye as n,
	yl as i,
	zt as b,
};
