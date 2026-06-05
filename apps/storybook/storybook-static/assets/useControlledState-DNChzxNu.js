import { o as g } from "./Hidden-DxJAwdyU.js";
import { r, R as u } from "./index-BGsE_GxY.js";
const v = new Set([
		"Arab",
		"Syrc",
		"Samr",
		"Mand",
		"Thaa",
		"Mend",
		"Nkoo",
		"Adlm",
		"Rohg",
		"Hebr",
	]),
	y = new Set([
		"ae",
		"ar",
		"arc",
		"bcc",
		"bqi",
		"ckb",
		"dv",
		"fa",
		"glk",
		"he",
		"ku",
		"mzn",
		"nqo",
		"pnb",
		"ps",
		"sd",
		"ug",
		"ur",
		"yi",
	]);
function R(e) {
	if (Intl.Locale) {
		const t = new Intl.Locale(e).maximize(),
			n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return v.has(t.script);
	}
	const a = e.split("-")[0];
	return y.has(a);
}
const p = Symbol.for("react-aria.i18n.locale");
function x() {
	let e =
		(typeof window < "u" && window[p]) ||
		(typeof navigator < "u" &&
			(navigator.language || navigator.userLanguage)) ||
		"en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return { locale: e, direction: R(e) ? "rtl" : "ltr" };
}
let i = x(),
	c = new Set();
function b() {
	i = x();
	for (const e of c) e(i);
}
function I() {
	const e = g(),
		[a, t] = r.useState(i);
	return (
		r.useEffect(
			() => (
				c.size === 0 && window.addEventListener("languagechange", b),
				c.add(t),
				() => {
					c.delete(t),
						c.size === 0 && window.removeEventListener("languagechange", b);
				}
			),
			[],
		),
		e
			? {
					locale: (typeof window < "u" && window[p]) || "en-US",
					direction: "ltr",
				}
			: a
	);
}
const E = u.createContext(null);
function z() {
	const e = I();
	return r.useContext(E) || e;
}
const T =
	typeof document < "u"
		? (u.useInsertionEffect ?? u.useLayoutEffect)
		: () => {};
function U(e, a, t) {
	const [n, w] = r.useState(e || a),
		o = r.useRef(n),
		s = r.useRef(e !== void 0),
		f = e !== void 0;
	r.useEffect(() => {
		s.current, (s.current = f);
	}, [f]);
	const $ = f ? e : n;
	T(() => {
		o.current = $;
	});
	const [, S] = r.useReducer(() => ({}), {}),
		m = r.useCallback(
			(d, ...L) => {
				const l = typeof d == "function" ? d(o.current) : d;
				Object.is(o.current, l) ||
					((o.current = l), w(l), S(), t == null || t(l, ...L));
			},
			[t],
		);
	return [$, m];
}
export { U as a, z as $ };
