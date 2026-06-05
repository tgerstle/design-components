try {
	(() => {
		var g = __STORYBOOK_API__,
			{
				ActiveTabs: y,
				Consumer: b,
				ManagerContext: k,
				Provider: E,
				RequestResponseError: O,
				addons: n,
				combineParameters: T,
				controlOrMetaKey: U,
				controlOrMetaSymbol: A,
				eventMatchesShortcut: h,
				eventToShortcut: v,
				experimental_MockUniversalStore: R,
				experimental_UniversalStore: I,
				experimental_requestResponse: P,
				experimental_useUniversalStore: x,
				isMacLike: C,
				isShortcutTaken: M,
				keyToSymbol: D,
				merge: N,
				mockChannel: B,
				optionOrAltSymbol: K,
				shortcutMatchesShortcut: V,
				shortcutToHumanString: f,
				types: q,
				useAddonState: G,
				useArgTypes: L,
				useArgs: Y,
				useChannel: $,
				useGlobalTypes: H,
				useGlobals: Q,
				useParameter: j,
				useSharedState: w,
				useStoryPrepared: z,
				useStorybookApi: F,
				useStorybookState: J,
			} = __STORYBOOK_API__;
		var e = "storybook/links",
			d = {
				NAVIGATE: `${e}/navigate`,
				REQUEST: `${e}/request`,
				RECEIVE: `${e}/receive`,
			};
		n.register(e, (o) => {
			o.on(d.REQUEST, ({ kind: m, name: l }) => {
				const u = o.storyId(m, l);
				o.emit(d.RECEIVE, u);
			});
		});
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}
