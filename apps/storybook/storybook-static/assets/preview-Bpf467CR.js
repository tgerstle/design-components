const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"./DocsRenderer-CFRXHY34-BlMr0rMw.js",
			"./iframe-B4JwdCBD.js",
			"./index-BGsE_GxY.js",
			"./jsx-runtime-BjG_zV1W.js",
			"./index-B9nXkq7N.js",
			"./index-BTrvSFqH.js",
			"./index-DrFu-skq.js",
			"./client-BwyMDHIK.js",
		]),
) => i.map((i) => d[i]);

import { _ as a } from "./iframe-B4JwdCBD.js";
var i = Object.defineProperty,
	s = (e, r) => {
		for (var t in r) i(e, t, { get: r[t], enumerable: !0 });
	},
	_ = {};
s(_, { parameters: () => d });
var p = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
		const [t, o] = r;
		return o.excludeFromDocsStories && (e[t] = !0), e;
	}, {}),
	d = {
		docs: {
			renderer: async () => {
				const { DocsRenderer: e } = await a(
					() => import("./DocsRenderer-CFRXHY34-BlMr0rMw.js").then((r) => r.D),
					__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
					import.meta.url,
				);
				return new e();
			},
			stories: {
				filter: (e) => {
					var r;
					return (
						(e.tags || []).filter((t) => p[t]).length === 0 &&
						!((r = e.parameters.docs) != null && r.disable)
					);
				},
			},
		},
	};
export { d as parameters };
