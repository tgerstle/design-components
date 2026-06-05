import { m as n } from "./Button-DMaXDISd.js";
import { r } from "./index-BGsE_GxY.js";
function p(u, e) {
	const t = r.useRef(!0),
		f = r.useRef(null);
	const c = n(u);
	r.useEffect(
		() => (
			(t.current = !0),
			() => {
				t.current = !1;
			}
		),
		[],
	),
		r.useEffect(() => {
			const s = f.current;
			t.current
				? (t.current = !1)
				: (!s || e.some((o, a) => !Object.is(o, s[a]))) && c(),
				(f.current = e);
		}, e);
}
export { p as $ };
