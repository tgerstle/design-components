import { c as l } from "./client-BwyMDHIK.js";
import { r as s } from "./index-BGsE_GxY.js";
import "./index-B9nXkq7N.js";
var n = new Map();
function m() {
	return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var a = ({ callback: e, children: r }) => {
	const t = s.useRef();
	return (
		s.useLayoutEffect(() => {
			t.current !== e && ((t.current = e), e());
		}, [e]),
		r
	);
};
typeof Promise.withResolvers > "u" &&
	(Promise.withResolvers = () => {
		let e = null,
			r = null;
		return {
			promise: new Promise((t, o) => {
				(e = t), (r = o);
			}),
			resolve: e,
			reject: r,
		};
	});
var v = async (e, r, t) => {
		const o = await c(r, t);
		if (m()) {
			o.render(e);
			return;
		}
		const { promise: i, resolve: u } = Promise.withResolvers();
		return o.render(s.createElement(a, { callback: u }, e)), i;
	},
	f = (e, r) => {
		const t = n.get(e);
		t && (t.unmount(), n.delete(e));
	},
	c = async (e, r) => {
		let t = n.get(e);
		return t || ((t = l.createRoot(e, r)), n.set(e, t)), t;
	};
export { f as unmountElement, v as renderElement };
