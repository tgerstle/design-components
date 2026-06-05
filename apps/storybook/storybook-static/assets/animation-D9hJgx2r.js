import { n as o } from "./Hidden-DxJAwdyU.js";
import { r as l } from "./index-B9nXkq7N.js";
import { r } from "./index-BGsE_GxY.js";
import { a as f } from "./useControlledState-DNChzxNu.js";
const u = r.createContext({});
function x() {
	return r.useContext(u) ?? {};
}
function g(t) {
	const [n, e] = f(t.isOpen, t.defaultOpen || !1, t.onOpenChange);
	const c = r.useCallback(() => {
			e(!0);
		}, [e]),
		a = r.useCallback(() => {
			e(!1);
		}, [e]),
		i = r.useCallback(() => {
			e(!n);
		}, [e, n]);
	return { isOpen: n, setOpen: e, open: c, close: a, toggle: i };
}
function d(t, n = !0) {
	const [e, c] = r.useState(!0),
		a = e && n;
	return (
		o(() => {
			if (a && t.current && "getAnimations" in t.current)
				for (const i of t.current.getAnimations())
					i instanceof CSSTransition && i.cancel();
		}, [t, a]),
		s(
			t,
			a,
			r.useCallback(() => c(!1), []),
		),
		a
	);
}
function C(t, n) {
	const [e, c] = r.useState(n ? "open" : "closed");
	switch (e) {
		case "open":
			n || c("exiting");
			break;
		case "closed":
		case "exiting":
			n && c("open");
			break;
	}
	const a = e === "exiting";
	return (
		s(
			t,
			a,
			r.useCallback(() => {
				c((i) => (i === "exiting" ? "closed" : i));
			}, []),
		),
		a
	);
}
function s(t, n, e) {
	o(() => {
		if (n && t.current) {
			if (!("getAnimations" in t.current)) {
				e();
				return;
			}
			const c = t.current.getAnimations();
			if (c.length === 0) {
				e();
				return;
			}
			let a = !1;
			return (
				Promise.allSettled(c.map((i) => i.finished)).then(() => {
					a ||
						l.flushSync(() => {
							e();
						});
				}),
				() => {
					a = !0;
				}
			);
		}
	}, [t, n, e]);
}
export { C as b, d as c, g as a, x as $ };
