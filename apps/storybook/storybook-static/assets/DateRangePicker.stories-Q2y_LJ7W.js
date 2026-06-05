var _i = (e) => {
	throw TypeError(e);
};
var Te = (e, a, t) =>
	a.has(e)
		? _i("Cannot add the same private member more than once")
		: a instanceof WeakSet
			? a.add(e)
			: a.set(e, t);
import { a as Al } from "./animation-D9hJgx2r.js";
import {
	k as $u,
	g as Ji,
	f as Na,
	b as nt,
	m as pe,
	c as St,
	e as ue,
} from "./Button-DMaXDISd.js";
import {
	l as il,
	c as ll,
	j as nl,
	k as ot,
	m as rl,
	d as tl,
	n as ul,
} from "./Dialog-BF34q9A4.js";
import {
	f as $a,
	j as al,
	i as be,
	m as ee,
	g as el,
	e as it,
	b as ja,
	d as lt,
	k as Oa,
	n as Qi,
	a as qi,
	$ as Xi,
} from "./Hidden-DxJAwdyU.js";
import { a as El, $ as Fl } from "./Input-CvFvoqvw.js";
import { r as d, R as j } from "./index-BGsE_GxY.js";
import { j as _ } from "./jsx-runtime-BjG_zV1W.js";
import { $ as Eu, L as Pl } from "./Label-DOdb3z-o.js";
import {
	q as Ae,
	f as bu,
	g as ct,
	$ as dt,
	l as ha,
	c as hu,
	s as kt,
	p as ol,
	h as Se,
	m as sl,
	r as st,
	a as yu,
} from "./useCollator-DduXULBj.js";
import { $ as oe, a as ze } from "./useControlledState-DNChzxNu.js";
import {
	f as Bl,
	d as Bu,
	j as bl,
	a as Cl,
	o as Cu,
	i as gl,
	c as hl,
	l as It,
	e as mt,
	m as pl,
	k as ua,
	n as Vt,
	b as vl,
	$ as vu,
	g as xl,
	h as yl,
} from "./useFilter-49-kAJKm.js";
import {
	i as $l,
	r as cl,
	l as Dl,
	a as dl,
	d as fl,
	$ as ft,
	G as gu,
	p as ml,
	f as Oe,
	e as pu,
	m as xu,
	c as Ze,
} from "./useHover-qyAt-50Y.js";
import { $ as Mt } from "./useUpdateEffect-DPtzyKNG.js";
import "./index-B9nXkq7N.js";
import "./useOverlayPosition-D0MI8dT9.js";
let Ea = new Map(),
	Ua = !1;
try {
	Ua =
		new Intl.NumberFormat("de-DE", {
			signDisplay: "exceptZero",
		}).resolvedOptions().signDisplay === "exceptZero";
} catch {}
let ra = !1;
try {
	ra =
		new Intl.NumberFormat("de-DE", {
			style: "unit",
			unit: "degree",
		}).resolvedOptions().style === "unit";
} catch {}
const Fu = {
	degree: {
		narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" },
	},
};
class za {
	constructor(a, t = {}) {
		(this.numberFormatter = wl(a, t)), (this.options = t);
	}
	format(a) {
		var u;
		let t = "";
		if (
			(!Ua && this.options.signDisplay != null
				? (t = Rl(this.numberFormatter, this.options.signDisplay, a))
				: (t = this.numberFormatter.format(a)),
			this.options.style === "unit" && !ra)
		) {
			const {
				unit: n,
				unitDisplay: r = "short",
				locale: l,
			} = this.resolvedOptions();
			if (!n) return t;
			const i = (u = Fu[n]) == null ? void 0 : u[r];
			t += i[l] || i.default;
		}
		return t;
	}
	formatToParts(a) {
		return this.numberFormatter.formatToParts(a);
	}
	formatRange(a, t) {
		if (typeof this.numberFormatter.formatRange == "function")
			return this.numberFormatter.formatRange(a, t);
		if (t < a) throw new RangeError("End date must be >= start date");
		return `${this.format(a)} – ${this.format(t)}`;
	}
	formatRangeToParts(a, t) {
		if (typeof this.numberFormatter.formatRangeToParts == "function")
			return this.numberFormatter.formatRangeToParts(a, t);
		if (t < a) throw new RangeError("End date must be >= start date");
		const u = this.numberFormatter.formatToParts(a),
			n = this.numberFormatter.formatToParts(t);
		return [
			...u.map((r) => ({ ...r, source: "startRange" })),
			{ type: "literal", value: " – ", source: "shared" },
			...n.map((r) => ({ ...r, source: "endRange" })),
		];
	}
	resolvedOptions() {
		let a = this.numberFormatter.resolvedOptions();
		return (
			!Ua &&
				this.options.signDisplay != null &&
				(a = { ...a, signDisplay: this.options.signDisplay }),
			!ra &&
				this.options.style === "unit" &&
				(a = {
					...a,
					style: "unit",
					unit: this.options.unit,
					unitDisplay: this.options.unitDisplay,
				}),
			a
		);
	}
}
function wl(e, a = {}) {
	var r;
	const { numberingSystem: t } = a;
	if (
		(t &&
			e.includes("-nu-") &&
			(e.includes("-u-") || (e += "-u-"), (e += `-nu-${t}`)),
		a.style === "unit" && !ra)
	) {
		const { unit: l, unitDisplay: i = "short" } = a;
		if (!l) throw new Error('unit option must be provided with style: "unit"');
		if (!((r = Fu[l]) != null && r[i]))
			throw new Error(`Unsupported unit ${l} with unitDisplay = ${i}`);
		a = { ...a, style: "decimal" };
	}
	const u =
		e +
		(a
			? Object.entries(a)
					.sort((l, i) => (l[0] < i[0] ? -1 : 1))
					.join()
			: "");
	if (Ea.has(u)) return Ea.get(u);
	const n = new Intl.NumberFormat(e, a);
	return Ea.set(u, n), n;
}
function Rl(e, a, t) {
	if (a === "auto") return e.format(t);
	if (a === "never") return e.format(Math.abs(t));
	{
		let u = !1;
		if (
			(a === "always"
				? (u = t > 0 || Object.is(t, 0))
				: a === "exceptZero" &&
					(Object.is(t, -0) || Object.is(t, 0)
						? (t = Math.abs(t))
						: (u = t > 0)),
			u)
		) {
			const n = e.format(-t),
				r = e.format(t),
				l = n.replace(r, "").replace(/\u200e|\u061C/, "");
			return (
				[...l].length !== 1 &&
					console.warn(
						"@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
					),
				n.replace(r, "!!!").replace(l, "+").replace("!!!", r)
			);
		} else return e.format(t);
	}
}
const Sl = /^.*\(.*\).*$/,
	kl = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class Pu {
	constructor(a, t = {}) {
		(this.locale = a), (this.options = t);
	}
	parse(a) {
		return Fa(this.locale, this.options, a).parse(a);
	}
	isValidPartialNumber(a, t, u) {
		return Fa(this.locale, this.options, a).isValidPartialNumber(a, t, u);
	}
	getNumberingSystem(a) {
		return Fa(this.locale, this.options, a).options.numberingSystem;
	}
}
const Tt = new Map();
function Fa(e, a, t) {
	const u = Nt(e, a);
	if (!e.includes("-nu-") && !u.isValidPartialNumber(t)) {
		for (const n of kl)
			if (n !== u.options.numberingSystem) {
				const r = Nt(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + n, a);
				if (r.isValidPartialNumber(t)) return r;
			}
	}
	return u;
}
function Nt(e, a) {
	let t =
			e +
			(a
				? Object.entries(a)
						.sort((n, r) => (n[0] < r[0] ? -1 : 1))
						.join()
				: ""),
		u = Tt.get(t);
	return u || ((u = new Ml(e, a)), Tt.set(t, u)), u;
}
class Ml {
	constructor(a, t = {}) {
		(this.locale = a),
			t.roundingIncrement !== 1 &&
				t.roundingIncrement != null &&
				(t.maximumFractionDigits == null && t.minimumFractionDigits == null
					? ((t.maximumFractionDigits = 0), (t.minimumFractionDigits = 0))
					: t.maximumFractionDigits == null
						? (t.maximumFractionDigits = t.minimumFractionDigits)
						: t.minimumFractionDigits == null &&
							(t.minimumFractionDigits = t.maximumFractionDigits)),
			(this.formatter = new Intl.NumberFormat(a, t)),
			(this.options = this.formatter.resolvedOptions()),
			(this.symbols = Vl(a, this.formatter, this.options, t)),
			this.options.style === "percent" &&
				((this.options.minimumFractionDigits ?? 0) > 18 ||
					(this.options.maximumFractionDigits ?? 0) > 18) &&
				console.warn(
					"NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
				);
	}
	parse(a) {
		let t = this.formatter.resolvedOptions().useGrouping,
			u = this.sanitize(a);
		if (!t && this.symbols.group && u.includes(this.symbols.group)) return NaN;
		if (
			(this.symbols.group && (u = u.replaceAll(this.symbols.group, "")),
			this.symbols.decimal && (u = u.replace(this.symbols.decimal, ".")),
			this.symbols.minusSign && (u = u.replace(this.symbols.minusSign, "-")),
			(u = u.replace(this.symbols.numeral, this.symbols.index)),
			this.options.style === "percent")
		) {
			const r = u.indexOf("-");
			(u = u.replace("-", "")), (u = u.replace("+", ""));
			let l = u.indexOf(".");
			l === -1 && (l = u.length),
				(u = u.replace(".", "")),
				l - 2 === 0
					? (u = `0.${u}`)
					: l - 2 === -1
						? (u = `0.0${u}`)
						: l - 2 === -2
							? (u = "0.00")
							: (u = `${u.slice(0, l - 2)}.${u.slice(l - 2)}`),
				r > -1 && (u = `-${u}`);
		}
		let n = u ? +u : NaN;
		if (isNaN(n)) return NaN;
		if (this.options.style === "percent") {
			const r = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min(
					(this.options.minimumFractionDigits ?? 0) + 2,
					20,
				),
				maximumFractionDigits: Math.min(
					(this.options.maximumFractionDigits ?? 0) + 2,
					20,
				),
			};
			return new Pu(this.locale, r).parse(new za(this.locale, r).format(n));
		}
		return (
			this.options.currencySign === "accounting" && Sl.test(a) && (n = -1 * n),
			n
		);
	}
	sanitize(a) {
		const t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 &&
			this.symbols.noNumeralUnits.find((u) => u.unit === a)
			? this.symbols.noNumeralUnits.find((u) => u.unit === a).value.toString()
			: ((a = a.replace(this.symbols.literals, "")),
				this.symbols.minusSign && (a = a.replace("-", this.symbols.minusSign)),
				this.options.numberingSystem === "arab" &&
					(this.symbols.decimal &&
						((a = De(a, ",", this.symbols.decimal)),
						(a = De(a, "،", this.symbols.decimal))),
					this.symbols.group && t && (a = De(a, ".", this.symbols.group))),
				this.symbols.group === "’" &&
					a.includes("'") &&
					t &&
					(a = De(a, "'", this.symbols.group)),
				this.symbols.group === "'" &&
					a.includes("’") &&
					t &&
					(a = De(a, "’", this.symbols.group)),
				this.options.locale === "fr-FR" &&
					this.symbols.group &&
					t &&
					((a = De(a, " ", this.symbols.group)),
					(a = De(a, /\u00A0/g, this.symbols.group))),
				a);
	}
	isValidPartialNumber(a, t = -1 / 0, u = 1 / 0) {
		const n = this.formatter.resolvedOptions().useGrouping;
		return (
			(a = this.sanitize(a)),
			this.symbols.minusSign && a.startsWith(this.symbols.minusSign) && t < 0
				? (a = a.slice(this.symbols.minusSign.length))
				: this.symbols.plusSign &&
					a.startsWith(this.symbols.plusSign) &&
					u > 0 &&
					(a = a.slice(this.symbols.plusSign.length)),
			this.symbols.decimal &&
			a.indexOf(this.symbols.decimal) > -1 &&
			this.options.maximumFractionDigits === 0
				? !1
				: (this.symbols.group && n && (a = De(a, this.symbols.group, "")),
					(a = a.replace(this.symbols.numeral, "")),
					this.symbols.decimal && (a = a.replace(this.symbols.decimal, "")),
					a.length === 0)
		);
	}
}
const Ot = new Set([
		"decimal",
		"fraction",
		"integer",
		"minusSign",
		"plusSign",
		"group",
	]),
	jt = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function Vl(e, a, t, u) {
	var V, I, T, N;
	let n = new Intl.NumberFormat(e, {
			...t,
			minimumSignificantDigits: 1,
			maximumSignificantDigits: 21,
			roundingIncrement: 1,
			roundingPriority: "auto",
			roundingMode: "halfExpand",
			useGrouping: !0,
		}),
		r = n.formatToParts(-10000.111),
		l = n.formatToParts(10000.111),
		i = jt.map((w) => n.formatToParts(w)),
		o = i
			.map((w, C) => {
				const E = w.find((U) => U.type === "unit");
				return E &&
					!w.some((U) => U.type === "integer" || U.type === "fraction")
					? { unit: E.value, value: jt[C] }
					: null;
			})
			.filter((w) => !!w),
		c =
			((V = r.find((w) => w.type === "minusSign")) == null
				? void 0
				: V.value) ?? "-",
		s = (I = l.find((w) => w.type === "plusSign")) == null ? void 0 : I.value;
	!s &&
		((u == null ? void 0 : u.signDisplay) === "exceptZero" ||
			(u == null ? void 0 : u.signDisplay) === "always") &&
		(s = "+");
	const $ =
			(T = new Intl.NumberFormat(e, {
				...t,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
				.formatToParts(0.001)
				.find((w) => w.type === "decimal")) == null
				? void 0
				: T.value,
		D = (N = r.find((w) => w.type === "group")) == null ? void 0 : N.value,
		h = r.filter((w) => !Ot.has(w.type)).map((w) => Ut(w.value)),
		f = i.flatMap((w) =>
			w.filter((C) => !Ot.has(C.type)).map((C) => Ut(C.value)),
		),
		b = [...new Set([...h, ...f])].sort((w, C) => C.length - w.length),
		p =
			b.length === 0
				? /\p{White_Space}|\p{Cf}/gu
				: new RegExp(`${b.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"),
		S = [
			...new Intl.NumberFormat(t.locale, { useGrouping: !1 }).format(
				9876543210,
			),
		].reverse(),
		A = new Map(S.map((w, C) => [w, C])),
		B = new RegExp(`[${S.join("")}]`, "g");
	return {
		minusSign: c,
		plusSign: s,
		decimal: $,
		group: D,
		literals: p,
		numeral: B,
		numerals: S,
		index: (w) => String(A.get(w)),
		noNumeralUnits: o,
	};
}
function De(e, a, t) {
	return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function Ut(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var Au = {};
Au = {
	dateRange: (e) => `${e.startDate} إلى ${e.endDate}`,
	dateSelected: (e) => `${e.date} المحدد`,
	finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
	maximumDate: "آخر تاريخ متاح",
	minimumDate: "أول تاريخ متاح",
	next: "التالي",
	previous: "السابق",
	selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
	selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.dateRange}`,
	startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
	todayDate: (e) => `اليوم، ${e.date}`,
	todayDateSelected: (e) => `اليوم، ${e.date} محدد`,
};
var wu = {};
wu = {
	dateRange: (e) => `${e.startDate} до ${e.endDate}`,
	dateSelected: (e) => `Избрано е ${e.date}`,
	finishRangeSelectionPrompt:
		"Натиснете, за да довършите избора на времеви интервал",
	maximumDate: "Последна налична дата",
	minimumDate: "Първа налична дата",
	next: "Напред",
	previous: "Назад",
	selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Избран диапазон: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Натиснете, за да пристъпите към избора на времеви интервал",
	todayDate: (e) => `Днес, ${e.date}`,
	todayDateSelected: (e) => `Днес, ${e.date} са избрани`,
};
var Ru = {};
Ru = {
	dateRange: (e) => `${e.startDate} až ${e.endDate}`,
	dateSelected: (e) => `Vybráno ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výběr rozsahu dat",
	maximumDate: "Poslední dostupné datum",
	minimumDate: "První dostupné datum",
	next: "Další",
	previous: "Předchozí",
	selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrané období: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím zahájíte výběr rozsahu dat",
	todayDate: (e) => `Dnes, ${e.date}`,
	todayDateSelected: (e) => `Dnes, vybráno ${e.date}`,
};
var Su = {};
Su = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klik for at fuldføre valg af datoområde",
	maximumDate: "Sidste ledige dato",
	minimumDate: "Første ledige dato",
	next: "Næste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik for at starte valg af datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
var ku = {};
ku = {
	dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
	dateSelected: (e) => `${e.date} ausgewählt`,
	finishRangeSelectionPrompt:
		"Klicken, um die Auswahl des Datumsbereichs zu beenden",
	maximumDate: "Letztes verfügbares Datum",
	minimumDate: "Erstes verfügbares Datum",
	next: "Weiter",
	previous: "Zurück",
	selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Klicken, um die Auswahl des Datumsbereichs zu beginnen",
	todayDate: (e) => `Heute, ${e.date}`,
	todayDateSelected: (e) => `Heute, ${e.date} ausgewählt`,
};
var Mu = {};
Mu = {
	dateRange: (e) => `${e.startDate} έως ${e.endDate}`,
	dateSelected: (e) => `Επιλέχθηκε ${e.date}`,
	finishRangeSelectionPrompt:
		"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
	maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
	minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
	next: "Επόμενο",
	previous: "Προηγούμενο",
	selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
	selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
	todayDate: (e) => `Σήμερα, ${e.date}`,
	todayDateSelected: (e) => `Σήμερα, επιλέχτηκε ${e.date}`,
};
var Vu = {};
Vu = {
	previous: "Previous",
	next: "Next",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
	todayDate: (e) => `Today, ${e.date}`,
	todayDateSelected: (e) => `Today, ${e.date} selected`,
	dateSelected: (e) => `${e.date} selected`,
	startRangeSelectionPrompt: "Click to start selecting date range",
	finishRangeSelectionPrompt: "Click to finish selecting date range",
	minimumDate: "First available date",
	maximumDate: "Last available date",
	dateRange: (e) => `${e.startDate} to ${e.endDate}`,
};
var Iu = {};
Iu = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} seleccionado`,
	finishRangeSelectionPrompt:
		"Haga clic para terminar de seleccionar rango de fechas",
	maximumDate: "Última fecha disponible",
	minimumDate: "Primera fecha disponible",
	next: "Siguiente",
	previous: "Anterior",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Haga clic para comenzar a seleccionar un rango de fechas",
	todayDate: (e) => `Hoy, ${e.date}`,
	todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`,
};
var Tu = {};
Tu = {
	dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
	dateSelected: (e) => `${e.date} valitud`,
	finishRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimise lõpetamiseks",
	maximumDate: "Viimane saadaolev kuupäev",
	minimumDate: "Esimene saadaolev kuupäev",
	next: "Järgmine",
	previous: "Eelmine",
	selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimiseks",
	todayDate: (e) => `Täna, ${e.date}`,
	todayDateSelected: (e) => `Täna, ${e.date} valitud`,
};
var Nu = {};
Nu = {
	dateRange: (e) => `${e.startDate} – ${e.endDate}`,
	dateSelected: (e) => `${e.date} valittu`,
	finishRangeSelectionPrompt:
		"Lopeta päivämääräalueen valinta napsauttamalla tätä.",
	maximumDate: "Viimeinen varattavissa oleva päivämäärä",
	minimumDate: "Ensimmäinen varattavissa oleva päivämäärä",
	next: "Seuraava",
	previous: "Edellinen",
	selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikaväli: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Aloita päivämääräalueen valinta napsauttamalla tätä.",
	todayDate: (e) => `Tänään, ${e.date}`,
	todayDateSelected: (e) => `Tänään, ${e.date} valittu`,
};
var Ou = {};
Ou = {
	dateRange: (e) => `${e.startDate} à ${e.endDate}`,
	dateSelected: (e) => `${e.date} sélectionné`,
	finishRangeSelectionPrompt:
		"Cliquer pour finir de sélectionner la plage de dates",
	maximumDate: "Dernière date disponible",
	minimumDate: "Première date disponible",
	next: "Suivant",
	previous: "Précédent",
	selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
	selectedRangeDescription: (e) => `Plage sélectionnée : ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Cliquer pour commencer à sélectionner la plage de dates",
	todayDate: (e) => `Aujourd'hui, ${e.date}`,
	todayDateSelected: (e) => `Aujourd’hui, ${e.date} sélectionné`,
};
var ju = {};
ju = {
	dateRange: (e) => `${e.startDate} עד ${e.endDate}`,
	dateSelected: (e) => `${e.date} נבחר`,
	finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
	maximumDate: "תאריך פנוי אחרון",
	minimumDate: "תאריך פנוי ראשון",
	next: "הבא",
	previous: "הקודם",
	selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
	selectedRangeDescription: (e) => `טווח נבחר: ${e.dateRange}`,
	startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
	todayDate: (e) => `היום, ${e.date}`,
	todayDateSelected: (e) => `היום, ${e.date} נבחר`,
};
var Uu = {};
Uu = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} odabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
	maximumDate: "Posljednji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sljedeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, odabran ${e.date}`,
};
var zu = {};
zu = {
	dateRange: (e) => `${e.startDate}–${e.endDate}`,
	dateSelected: (e) => `${e.date} kiválasztva`,
	finishRangeSelectionPrompt:
		"Kattintson a dátumtartomány kijelölésének befejezéséhez",
	maximumDate: "Utolsó elérhető dátum",
	minimumDate: "Az első elérhető dátum",
	next: "Következő",
	previous: "Előző",
	selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Kattintson a dátumtartomány kijelölésének indításához",
	todayDate: (e) => `Ma, ${e.date}`,
	todayDateSelected: (e) => `Ma, ${e.date} kijelölve`,
};
var Zu = {};
Zu = {
	dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selezionata`,
	finishRangeSelectionPrompt:
		"Fai clic per completare la selezione dell’intervallo di date",
	maximumDate: "Ultima data disponibile",
	minimumDate: "Prima data disponibile",
	next: "Successivo",
	previous: "Precedente",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
	startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
	todayDate: (e) => `Oggi, ${e.date}`,
	todayDateSelected: (e) => `Oggi, ${e.date} selezionata`,
};
var Lu = {};
Lu = {
	dateRange: (e) => `${e.startDate} から ${e.endDate}`,
	dateSelected: (e) => `${e.date} を選択`,
	finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
	maximumDate: "最終利用可能日",
	minimumDate: "最初の利用可能日",
	next: "次へ",
	previous: "前へ",
	selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
	selectedRangeDescription: (e) => `選択範囲 : ${e.dateRange}`,
	startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
	todayDate: (e) => `本日、${e.date}`,
	todayDateSelected: (e) => `本日、${e.date} を選択`,
};
var Ku = {};
Ku = {
	dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
	dateSelected: (e) => `${e.date} 선택됨`,
	finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
	maximumDate: "마지막으로 사용 가능한 일자",
	minimumDate: "처음으로 사용 가능한 일자",
	next: "다음",
	previous: "이전",
	selectedDateDescription: (e) => `선택 일자: ${e.date}`,
	selectedRangeDescription: (e) => `선택 범위: ${e.dateRange}`,
	startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
	todayDate: (e) => `오늘, ${e.date}`,
	todayDateSelected: (e) => `오늘, ${e.date} 선택됨`,
};
var Yu = {};
Yu = {
	dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
	dateSelected: (e) => `Pasirinkta ${e.date}`,
	finishRangeSelectionPrompt:
		"Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
	maximumDate: "Paskutinė galima data",
	minimumDate: "Pirmoji galima data",
	next: "Paskesnis",
	previous: "Ankstesnis",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
	todayDate: (e) => `Šiandien, ${e.date}`,
	todayDateSelected: (e) => `Šiandien, pasirinkta ${e.date}`,
};
var Gu = {};
Gu = {
	dateRange: (e) => `No ${e.startDate} līdz ${e.endDate}`,
	dateSelected: (e) => `Atlasīts: ${e.date}`,
	finishRangeSelectionPrompt:
		"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
	maximumDate: "Pēdējais pieejamais datums",
	minimumDate: "Pirmais pieejamais datums",
	next: "Tālāk",
	previous: "Atpakaļ",
	selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlasītais diapazons: ${e.dateRange}`,
	startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
	todayDate: (e) => `Šodien, ${e.date}`,
	todayDateSelected: (e) => `Atlasīta šodiena, ${e.date}`,
};
var Hu = {};
Hu = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klikk for å fullføre valg av datoområde",
	maximumDate: "Siste tilgjengelige dato",
	minimumDate: "Første tilgjengelige dato",
	next: "Neste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt område: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klikk for å starte valg av datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
var Wu = {};
Wu = {
	dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
	dateSelected: (e) => `${e.date} geselecteerd`,
	finishRangeSelectionPrompt:
		"Klik om de selectie van het datumbereik te voltooien",
	maximumDate: "Laatste beschikbare datum",
	minimumDate: "Eerste beschikbare datum",
	next: "Volgende",
	previous: "Vorige",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
	todayDate: (e) => `Vandaag, ${e.date}`,
	todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`,
};
var _u = {};
_u = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Wybrano ${e.date}`,
	finishRangeSelectionPrompt: "Kliknij, aby zakończyć wybór zakresu dat",
	maximumDate: "Ostatnia dostępna data",
	minimumDate: "Pierwsza dostępna data",
	next: "Dalej",
	previous: "Wstecz",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknij, aby rozpocząć wybór zakresu dat",
	todayDate: (e) => `Dzisiaj, ${e.date}`,
	todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`,
};
var Ju = {};
Ju = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt:
		"Clique para concluir a seleção do intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Clique para iniciar a seleção do intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
};
var qu = {};
qu = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt:
		"Clique para terminar de selecionar o intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Clique para começar a selecionar o intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
};
var Qu = {};
Qu = {
	dateRange: (e) => `De la ${e.startDate} până la ${e.endDate}`,
	dateSelected: (e) => `${e.date} selectată`,
	finishRangeSelectionPrompt:
		"Apăsaţi pentru a finaliza selecţia razei pentru dată",
	maximumDate: "Ultima dată disponibilă",
	minimumDate: "Prima dată disponibilă",
	next: "Următorul",
	previous: "Înainte",
	selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
	startRangeSelectionPrompt:
		"Apăsaţi pentru a începe selecţia razei pentru dată",
	todayDate: (e) => `Astăzi, ${e.date}`,
	todayDateSelected: (e) => `Azi, ${e.date} selectată`,
};
var Xu = {};
Xu = {
	dateRange: (e) => `С ${e.startDate} по ${e.endDate}`,
	dateSelected: (e) => `Выбрано ${e.date}`,
	finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
	maximumDate: "Последняя доступная дата",
	minimumDate: "Первая доступная дата",
	next: "Далее",
	previous: "Назад",
	selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
	selectedRangeDescription: (e) => `Выбранный диапазон: ${e.dateRange}`,
	startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
	todayDate: (e) => `Сегодня, ${e.date}`,
	todayDateSelected: (e) => `Сегодня, выбрано ${e.date}`,
};
var er = {};
er = {
	dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Vybratý dátum ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výber rozsahu dátumov",
	maximumDate: "Posledný dostupný dátum",
	minimumDate: "Prvý dostupný dátum",
	next: "Nasledujúce",
	previous: "Predchádzajúce",
	selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybratý rozsah: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím spustíte výber rozsahu dátumov",
	todayDate: (e) => `Dnes ${e.date}`,
	todayDateSelected: (e) => `Vybratý dnešný dátum ${e.date}`,
};
var ar = {};
ar = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izbrano`,
	finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
	maximumDate: "Zadnji razpoložljivi datum",
	minimumDate: "Prvi razpoložljivi datum",
	next: "Naprej",
	previous: "Nazaj",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano območje: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
	todayDate: (e) => `Danes, ${e.date}`,
	todayDateSelected: (e) => `Danes, ${e.date} izbrano`,
};
var tr = {};
tr = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
	maximumDate: "Zadnji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sledeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, izabran ${e.date}`,
};
var ur = {};
ur = {
	dateRange: (e) => `${e.startDate} till ${e.endDate}`,
	dateSelected: (e) => `${e.date} har valts`,
	finishRangeSelectionPrompt: "Klicka för att avsluta val av datumintervall",
	maximumDate: "Sista tillgängliga datum",
	minimumDate: "Första tillgängliga datum",
	next: "Nästa",
	previous: "Föregående",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klicka för att välja datumintervall",
	todayDate: (e) => `Idag, ${e.date}`,
	todayDateSelected: (e) => `Idag, ${e.date} har valts`,
};
var rr = {};
rr = {
	dateRange: (e) => `${e.startDate} - ${e.endDate}`,
	dateSelected: (e) => `${e.date} seçildi`,
	finishRangeSelectionPrompt: "Tarih aralığı seçimini tamamlamak için tıklayın",
	maximumDate: "Son müsait tarih",
	minimumDate: "İlk müsait tarih",
	next: "Sonraki",
	previous: "Önceki",
	selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Seçilen Aralık: ${e.dateRange}`,
	startRangeSelectionPrompt: "Tarih aralığı seçimini başlatmak için tıklayın",
	todayDate: (e) => `Bugün, ${e.date}`,
	todayDateSelected: (e) => `Bugün, ${e.date} seçildi`,
};
var nr = {};
nr = {
	dateRange: (e) => `${e.startDate} — ${e.endDate}`,
	dateSelected: (e) => `Вибрано ${e.date}`,
	finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
	maximumDate: "Остання доступна дата",
	minimumDate: "Перша доступна дата",
	next: "Наступний",
	previous: "Попередній",
	selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Вибраний діапазон: ${e.dateRange}`,
	startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
	todayDate: (e) => `Сьогодні, ${e.date}`,
	todayDateSelected: (e) => `Сьогодні, вибрано ${e.date}`,
};
var ir = {};
ir = {
	dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
	dateSelected: (e) => `已选择 ${e.date}`,
	finishRangeSelectionPrompt: "单击以完成选择日期范围",
	maximumDate: "最后一个可用日期",
	minimumDate: "第一个可用日期",
	next: "下一页",
	previous: "上一页",
	selectedDateDescription: (e) => `选定的日期：${e.date}`,
	selectedRangeDescription: (e) => `选定的范围：${e.dateRange}`,
	startRangeSelectionPrompt: "单击以开始选择日期范围",
	todayDate: (e) => `今天，即 ${e.date}`,
	todayDateSelected: (e) => `已选择今天，即 ${e.date}`,
};
var lr = {};
lr = {
	dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
	dateSelected: (e) => `已選取 ${e.date}`,
	finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
	maximumDate: "最後一個可用日期",
	minimumDate: "第一個可用日期",
	next: "下一頁",
	previous: "上一頁",
	selectedDateDescription: (e) => `選定的日期：${e.date}`,
	selectedRangeDescription: (e) => `選定的範圍：${e.dateRange}`,
	startRangeSelectionPrompt: "按一下以開始選取日期範圍",
	todayDate: (e) => `今天，${e.date}`,
	todayDateSelected: (e) => `已選取今天，${e.date}`,
};
var He = {};
He = {
	"ar-AE": Au,
	"bg-BG": wu,
	"cs-CZ": Ru,
	"da-DK": Su,
	"de-DE": ku,
	"el-GR": Mu,
	"en-US": Vu,
	"es-ES": Iu,
	"et-EE": Tu,
	"fi-FI": Nu,
	"fr-FR": Ou,
	"he-IL": ju,
	"hr-HR": Uu,
	"hu-HU": zu,
	"it-IT": Zu,
	"ja-JP": Lu,
	"ko-KR": Ku,
	"lt-LT": Yu,
	"lv-LV": Gu,
	"nb-NO": Hu,
	"nl-NL": Wu,
	"pl-PL": _u,
	"pt-BR": Ju,
	"pt-PT": qu,
	"ro-RO": Qu,
	"ru-RU": Xu,
	"sk-SK": er,
	"sl-SI": ar,
	"sr-SP": tr,
	"sv-SE": ur,
	"tr-TR": rr,
	"uk-UA": nr,
	"zh-CN": ir,
	"zh-TW": lr,
};
function or(e, a) {
	const t = d.useRef(null);
	return (
		e && t.current && a(e, t.current) && (e = t.current), (t.current = e), e
	);
}
function ke(e, a) {
	return e - a * Math.floor(e / a);
}
const sr = 1721426;
function Ce(e, a, t, u) {
	a = We(e, a);
	let n = a - 1,
		r = -2;
	return (
		t <= 2 ? (r = 0) : he(a) && (r = -1),
		sr -
			1 +
			365 * n +
			Math.floor(n / 4) -
			Math.floor(n / 100) +
			Math.floor(n / 400) +
			Math.floor((367 * t - 362) / 12 + r + u)
	);
}
function he(e) {
	return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function We(e, a) {
	return e === "BC" ? 1 - a : a;
}
function ya(e) {
	let a = "AD";
	return e <= 0 && ((a = "BC"), (e = 1 - e)), [a, e];
}
const Il = {
	standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
class Q {
	fromJulianDay(a) {
		let t = a,
			u = t - sr,
			n = Math.floor(u / 146097),
			r = ke(u, 146097),
			l = Math.floor(r / 36524),
			i = ke(r, 36524),
			o = Math.floor(i / 1461),
			c = ke(i, 1461),
			s = Math.floor(c / 365),
			m = n * 400 + l * 100 + o * 4 + s + (l !== 4 && s !== 4 ? 1 : 0),
			[$, D] = ya(m),
			h = t - Ce($, D, 1, 1),
			f = 2;
		t < Ce($, D, 3, 1) ? (f = 0) : he(D) && (f = 1);
		const b = Math.floor(((h + f) * 12 + 373) / 367),
			p = t - Ce($, D, b, 1) + 1;
		return new J($, D, b, p);
	}
	toJulianDay(a) {
		return Ce(a.era, a.year, a.month, a.day);
	}
	getDaysInMonth(a) {
		return Il[he(a.year) ? "leapyear" : "standard"][a.month - 1];
	}
	getMonthsInYear(a) {
		return 12;
	}
	getDaysInYear(a) {
		return he(a.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(a) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(a) {
		return a.era === "BC";
	}
	balanceDate(a) {
		a.year <= 0 &&
			((a.era = a.era === "BC" ? "AD" : "BC"), (a.year = 1 - a.year));
	}
	constructor() {
		this.identifier = "gregory";
	}
}
const Tl = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1,
};
function H(e, a) {
	return (
		(a = K(a, e.calendar)),
		e.era === a.era &&
			e.year === a.year &&
			e.month === a.month &&
			e.day === a.day
	);
}
function Nl(e, a) {
	return (
		(a = K(a, e.calendar)),
		(e = Fe(e)),
		(a = Fe(a)),
		e.era === a.era && e.year === a.year && e.month === a.month
	);
}
function Ol(e, a) {
	return ba(e.calendar, a.calendar) && H(e, a);
}
function ba(e, a) {
	var t, u;
	return (
		((t = e.isEqual) == null ? void 0 : t.call(e, a)) ??
		((u = a.isEqual) == null ? void 0 : u.call(a, e)) ??
		e.identifier === a.identifier
	);
}
function dr(e, a) {
	return H(e, $t(a));
}
const jl = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
function Dt(e, a, t) {
	let u = e.calendar.toJulianDay(e),
		n = t ? jl[t] : Kl(a),
		r = Math.ceil(u + 1 - n) % 7;
	return r < 0 && (r += 7), r;
}
function cr(e) {
	return ce(Date.now(), e);
}
function $t(e) {
	return X(cr(e));
}
function fr(e, a) {
	return e.calendar.toJulianDay(e) - a.calendar.toJulianDay(a);
}
function mr(e, a) {
	return zt(e) - zt(a);
}
function zt(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Pa = null,
	Ul = !1;
function ht() {
	return (
		Pa == null && (Pa = new Intl.DateTimeFormat().resolvedOptions().timeZone),
		Pa
	);
}
function Dr() {
	return Ul;
}
function Fe(e) {
	return e.subtract({ days: e.day - 1 });
}
function na(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function zl(e) {
	return Fe(e.subtract({ months: e.month - 1 }));
}
function Le(e, a, t) {
	const u = Dt(e, a, t);
	return e.subtract({ days: u });
}
function Zl(e, a, t) {
	return Le(e, a, t).add({ days: 6 });
}
const Zt = new Map(),
	Aa = new Map();
function Ll(e) {
	if (Intl.Locale) {
		let t = Zt.get(e);
		return (
			t || ((t = new Intl.Locale(e).maximize().region), t && Zt.set(e, t)), t
		);
	}
	const a = e.split("-")[1];
	return a === "u" ? void 0 : a;
}
function Kl(e) {
	let a = Aa.get(e);
	if (!a) {
		if (Intl.Locale) {
			const u = new Intl.Locale(e);
			if ("getWeekInfo" in u && ((a = u.getWeekInfo()), a))
				return Aa.set(e, a), a.firstDay;
		}
		const t = Ll(e);
		if (e.includes("-fw-")) {
			const u = e.split("-fw-")[1].split("-")[0];
			u === "mon"
				? (a = { firstDay: 1 })
				: u === "tue"
					? (a = { firstDay: 2 })
					: u === "wed"
						? (a = { firstDay: 3 })
						: u === "thu"
							? (a = { firstDay: 4 })
							: u === "fri"
								? (a = { firstDay: 5 })
								: u === "sat"
									? (a = { firstDay: 6 })
									: (a = { firstDay: 0 });
		} else
			e.includes("-ca-iso8601")
				? (a = { firstDay: 1 })
				: (a = { firstDay: (t && Tl[t]) || 0 });
		Aa.set(e, a);
	}
	return a.firstDay;
}
function Yl(e, a, t) {
	const u = e.calendar.getDaysInMonth(e);
	return Math.ceil((Dt(Fe(e), a, t) + u) / 7);
}
function yt(e, a) {
	return e && a ? (e.compare(a) <= 0 ? e : a) : e || a;
}
function bt(e, a) {
	return e && a ? (e.compare(a) >= 0 ? e : a) : e || a;
}
function Ie(e) {
	e = K(e, new Q());
	const a = We(e.era, e.year);
	return $r(a, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function $r(e, a, t, u, n, r, l) {
	const i = new Date();
	return i.setUTCHours(u, n, r, l), i.setUTCFullYear(e, a - 1, t), i.getTime();
}
function Za(e, a) {
	if (a === "UTC") return 0;
	if (e > 0 && a === ht() && !Dr())
		return new Date(e).getTimezoneOffset() * -6e4;
	const { year: t, month: u, day: n, hour: r, minute: l, second: i } = hr(e, a);
	return $r(t, u, n, r, l, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Lt = new Map();
function hr(e, a) {
	let t = Lt.get(a);
	t ||
		((t = new Intl.DateTimeFormat("en-US", {
			timeZone: a,
			hour12: !1,
			era: "short",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		})),
		Lt.set(a, t));
	const u = t.formatToParts(new Date(e)),
		n = {};
	for (const r of u) r.type !== "literal" && (n[r.type] = r.value);
	return {
		year: n.era === "BC" || n.era === "B" ? -n.year + 1 : +n.year,
		month: +n.month,
		day: +n.day,
		hour: n.hour === "24" ? 0 : +n.hour,
		minute: +n.minute,
		second: +n.second,
	};
}
const Kt = 864e5;
function Gl(e, a, t, u) {
	return (t === u ? [t] : [t, u]).filter((r) => Hl(e, a, r));
}
function Hl(e, a, t) {
	const u = hr(t, a);
	return (
		e.year === u.year &&
		e.month === u.month &&
		e.day === u.day &&
		e.hour === u.hour &&
		e.minute === u.minute &&
		e.second === u.second
	);
}
function de(e, a, t = "compatible") {
	let u = me(e);
	if (a === "UTC") return Ie(u);
	if (a === ht() && t === "compatible" && !Dr()) {
		u = K(u, new Q());
		const o = new Date(),
			c = We(u.era, u.year);
		return (
			o.setFullYear(c, u.month - 1, u.day),
			o.setHours(u.hour, u.minute, u.second, u.millisecond),
			o.getTime()
		);
	}
	const n = Ie(u),
		r = Za(n - Kt, a),
		l = Za(n + Kt, a),
		i = Gl(u, a, n - r, n - l);
	if (i.length === 1) return i[0];
	if (i.length > 1)
		switch (t) {
			case "compatible":
			case "earlier":
				return i[0];
			case "later":
				return i[i.length - 1];
			case "reject":
				throw new RangeError("Multiple possible absolute times found");
		}
	switch (t) {
		case "earlier":
			return Math.min(n - r, n - l);
		case "compatible":
		case "later":
			return Math.max(n - r, n - l);
		case "reject":
			throw new RangeError("No such absolute time found");
	}
}
function yr(e, a, t = "compatible") {
	return new Date(de(e, a, t));
}
function ce(e, a) {
	const t = Za(e, a),
		u = new Date(e + t),
		n = u.getUTCFullYear(),
		r = u.getUTCMonth() + 1,
		l = u.getUTCDate(),
		i = u.getUTCHours(),
		o = u.getUTCMinutes(),
		c = u.getUTCSeconds(),
		s = u.getUTCMilliseconds();
	return new ia(
		n < 1 ? "BC" : "AD",
		n < 1 ? -n + 1 : n,
		r,
		l,
		a,
		t,
		i,
		o,
		c,
		s,
	);
}
function X(e) {
	return new J(e.calendar, e.era, e.year, e.month, e.day);
}
function me(e, a) {
	let t = 0,
		u = 0,
		n = 0,
		r = 0;
	if ("timeZone" in e) ({ hour: t, minute: u, second: n, millisecond: r } = e);
	else if ("hour" in e && !a) return e;
	return (
		a && ({ hour: t, minute: u, second: n, millisecond: r } = a),
		new Ga(e.calendar, e.era, e.year, e.month, e.day, t, u, n, r)
	);
}
function K(e, a) {
	if (ba(e.calendar, a)) return e;
	const t = a.fromJulianDay(e.calendar.toJulianDay(e)),
		u = e.copy();
	return (
		(u.calendar = a),
		(u.era = t.era),
		(u.year = t.year),
		(u.month = t.month),
		(u.day = t.day),
		Pe(u),
		u
	);
}
function Wl(e, a, t) {
	if (e instanceof ia) return e.timeZone === a ? e : Jl(e, a);
	const u = de(e, a, t);
	return ce(u, a);
}
function _l(e) {
	const a = Ie(e) - e.offset;
	return new Date(a);
}
function Jl(e, a) {
	const t = Ie(e) - e.offset;
	return K(ce(t, a), e.calendar);
}
const Ne = 36e5;
function pa(e, a) {
	var l, i;
	const t = e.copy(),
		u = "hour" in t ? xr(t, a) : 0;
	La(t, a.years || 0),
		t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e),
		(t.month += a.months || 0),
		Ka(t),
		br(t),
		(t.day += (a.weeks || 0) * 7),
		(t.day += a.days || 0),
		(t.day += u),
		ql(t),
		t.calendar.balanceDate && t.calendar.balanceDate(t),
		t.year < 1 && ((t.year = 1), (t.month = 1), (t.day = 1));
	const n = t.calendar.getYearsInEra(t);
	if (t.year > n) {
		const o =
			(i = (l = t.calendar).isInverseEra) == null ? void 0 : i.call(l, t);
		(t.year = n),
			(t.month = o ? 1 : t.calendar.getMonthsInYear(t)),
			(t.day = o ? 1 : t.calendar.getDaysInMonth(t));
	}
	t.month < 1 && ((t.month = 1), (t.day = 1));
	const r = t.calendar.getMonthsInYear(t);
	return (
		t.month > r && ((t.month = r), (t.day = t.calendar.getDaysInMonth(t))),
		(t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day))),
		t
	);
}
function La(e, a) {
	var t, u;
	(u = (t = e.calendar).isInverseEra) != null && u.call(t, e) && (a = -a),
		(e.year += a);
}
function Ka(e) {
	for (; e.month < 1; ) La(e, -1), (e.month += e.calendar.getMonthsInYear(e));
	let a = 0;
	for (; e.month > (a = e.calendar.getMonthsInYear(e)); )
		(e.month -= a), La(e, 1);
}
function ql(e) {
	for (; e.day < 1; ) e.month--, Ka(e), (e.day += e.calendar.getDaysInMonth(e));
	for (; e.day > e.calendar.getDaysInMonth(e); )
		(e.day -= e.calendar.getDaysInMonth(e)), e.month++, Ka(e);
}
function br(e) {
	(e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
		(e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function Pe(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e),
		(e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
		br(e);
}
function pt(e) {
	const a = {};
	for (const t in e) typeof e[t] == "number" && (a[t] = -e[t]);
	return a;
}
function pr(e, a) {
	return pa(e, pt(a));
}
function gt(e, a) {
	const t = e.copy();
	return (
		a.era != null && (t.era = a.era),
		a.year != null && (t.year = a.year),
		a.month != null && (t.month = a.month),
		a.day != null && (t.day = a.day),
		Pe(t),
		t
	);
}
function Ke(e, a) {
	const t = e.copy();
	return (
		a.hour != null && (t.hour = a.hour),
		a.minute != null && (t.minute = a.minute),
		a.second != null && (t.second = a.second),
		a.millisecond != null && (t.millisecond = a.millisecond),
		gr(t),
		t
	);
}
function Ql(e) {
	(e.second += Math.floor(e.millisecond / 1e3)),
		(e.millisecond = _e(e.millisecond, 1e3)),
		(e.minute += Math.floor(e.second / 60)),
		(e.second = _e(e.second, 60)),
		(e.hour += Math.floor(e.minute / 60)),
		(e.minute = _e(e.minute, 60));
	const a = Math.floor(e.hour / 24);
	return (e.hour = _e(e.hour, 24)), a;
}
function gr(e) {
	(e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3))),
		(e.second = Math.max(0, Math.min(e.second, 59))),
		(e.minute = Math.max(0, Math.min(e.minute, 59))),
		(e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function _e(e, a) {
	let t = e % a;
	return t < 0 && (t += a), t;
}
function xr(e, a) {
	return (
		(e.hour += a.hours || 0),
		(e.minute += a.minutes || 0),
		(e.second += a.seconds || 0),
		(e.millisecond += a.milliseconds || 0),
		Ql(e)
	);
}
function vr(e, a) {
	const t = e.copy();
	return xr(t, a), t;
}
function Xl(e, a) {
	return vr(e, pt(a));
}
function xt(e, a, t, u) {
	var r, l;
	const n = e.copy();
	switch (a) {
		case "era": {
			let i = e.calendar.getEras(),
				o = i.indexOf(e.era);
			if (o < 0) throw new Error("Invalid era: " + e.era);
			(o = fe(o, t, 0, i.length - 1, u == null ? void 0 : u.round)),
				(n.era = i[o]),
				Pe(n);
			break;
		}
		case "year":
			(l = (r = n.calendar).isInverseEra) != null && l.call(r, n) && (t = -t),
				(n.year = fe(e.year, t, -1 / 0, 9999, u == null ? void 0 : u.round)),
				n.year === -1 / 0 && (n.year = 1),
				n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
			break;
		case "month":
			n.month = fe(
				e.month,
				t,
				1,
				e.calendar.getMonthsInYear(e),
				u == null ? void 0 : u.round,
			);
			break;
		case "day":
			n.day = fe(
				e.day,
				t,
				1,
				e.calendar.getDaysInMonth(e),
				u == null ? void 0 : u.round,
			);
			break;
		default:
			throw new Error("Unsupported field " + a);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(n), Pe(n), n;
}
function vt(e, a, t, u) {
	const n = e.copy();
	switch (a) {
		case "hour": {
			let r = e.hour,
				l = 0,
				i = 23;
			if ((u == null ? void 0 : u.hourCycle) === 12) {
				const o = r >= 12;
				(l = o ? 12 : 0), (i = o ? 23 : 11);
			}
			n.hour = fe(r, t, l, i, u == null ? void 0 : u.round);
			break;
		}
		case "minute":
			n.minute = fe(e.minute, t, 0, 59, u == null ? void 0 : u.round);
			break;
		case "second":
			n.second = fe(e.second, t, 0, 59, u == null ? void 0 : u.round);
			break;
		case "millisecond":
			n.millisecond = fe(
				e.millisecond,
				t,
				0,
				999,
				u == null ? void 0 : u.round,
			);
			break;
		default:
			throw new Error("Unsupported field " + a);
	}
	return n;
}
function fe(e, a, t, u, n = !1) {
	if (n) {
		(e += Math.sign(a)), e < t && (e = u);
		const r = Math.abs(a);
		a > 0 ? (e = Math.ceil(e / r) * r) : (e = Math.floor(e / r) * r),
			e > u && (e = t);
	} else
		(e += a), e < t ? (e = u - (t - e - 1)) : e > u && (e = t + (e - u - 1));
	return e;
}
function Cr(e, a) {
	let t;
	if (
		(a.years != null && a.years !== 0) ||
		(a.months != null && a.months !== 0) ||
		(a.weeks != null && a.weeks !== 0) ||
		(a.days != null && a.days !== 0)
	) {
		const n = pa(me(e), {
			years: a.years,
			months: a.months,
			weeks: a.weeks,
			days: a.days,
		});
		t = de(n, e.timeZone);
	} else t = Ie(e) - e.offset;
	(t += a.milliseconds || 0),
		(t += (a.seconds || 0) * 1e3),
		(t += (a.minutes || 0) * 6e4),
		(t += (a.hours || 0) * 36e5);
	const u = ce(t, e.timeZone);
	return K(u, e.calendar);
}
function eo(e, a) {
	return Cr(e, pt(a));
}
function ao(e, a, t, u) {
	switch (a) {
		case "hour": {
			let n = 0,
				r = 23;
			if ((u == null ? void 0 : u.hourCycle) === 12) {
				const h = e.hour >= 12;
				(n = h ? 12 : 0), (r = h ? 23 : 11);
			}
			let l = me(e),
				i = K(Ke(l, { hour: n }), new Q()),
				o = [de(i, e.timeZone, "earlier"), de(i, e.timeZone, "later")].filter(
					(h) => ce(h, e.timeZone).day === i.day,
				)[0],
				c = K(Ke(l, { hour: r }), new Q()),
				s = [de(c, e.timeZone, "earlier"), de(c, e.timeZone, "later")]
					.filter((h) => ce(h, e.timeZone).day === c.day)
					.pop(),
				m = Ie(e) - e.offset,
				$ = Math.floor(m / Ne),
				D = m % Ne;
			return (
				(m =
					fe(
						$,
						t,
						Math.floor(o / Ne),
						Math.floor(s / Ne),
						u == null ? void 0 : u.round,
					) *
						Ne +
					D),
				K(ce(m, e.timeZone), e.calendar)
			);
		}
		case "minute":
		case "second":
		case "millisecond":
			return vt(e, a, t, u);
		case "era":
		case "year":
		case "month":
		case "day": {
			const n = xt(me(e), a, t, u),
				r = de(n, e.timeZone);
			return K(ce(r, e.timeZone), e.calendar);
		}
		default:
			throw new Error("Unsupported field " + a);
	}
}
function to(e, a, t) {
	const u = me(e),
		n = Ke(gt(u, a), a);
	if (n.compare(u) === 0) return e;
	const r = de(n, e.timeZone, t);
	return K(ce(r, e.timeZone), e.calendar);
}
function Br(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Er(e) {
	let a = K(e, new Q()),
		t;
	return (
		a.era === "BC"
			? (t =
					a.year === 1
						? "0000"
						: "-" + String(Math.abs(1 - a.year)).padStart(6, "00"))
			: (t = String(a.year).padStart(4, "0")),
		`${t}-${String(a.month).padStart(2, "0")}-${String(a.day).padStart(2, "0")}`
	);
}
function Fr(e) {
	return `${Er(e)}T${Br(e)}`;
}
function uo(e) {
	const a = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let t = Math.floor(e / 36e5),
		u = Math.floor((e % 36e5) / 6e4),
		n = Math.floor(((e % 36e5) % 6e4) / 1e3),
		r = `${a}${String(t).padStart(2, "0")}:${String(u).padStart(2, "0")}`;
	return n !== 0 && (r += `:${String(n).padStart(2, "0")}`), r;
}
function ro(e) {
	return `${Fr(e)}${uo(e.offset)}[${e.timeZone}]`;
}
function Ct(e) {
	let a = typeof e[0] == "object" ? e.shift() : new Q(),
		t;
	if (typeof e[0] == "string") t = e.shift();
	else {
		const l = a.getEras();
		t = l[l.length - 1];
	}
	const u = e.shift(),
		n = e.shift(),
		r = e.shift();
	return [a, t, u, n, r];
}
var at;
const fa = class fa {
	constructor(...a) {
		Te(this, at);
		const [t, u, n, r, l] = Ct(a);
		(this.calendar = t),
			(this.era = u),
			(this.year = n),
			(this.month = r),
			(this.day = l),
			Pe(this);
	}
	copy() {
		return this.era
			? new fa(this.calendar, this.era, this.year, this.month, this.day)
			: new fa(this.calendar, this.year, this.month, this.day);
	}
	add(a) {
		return pa(this, a);
	}
	subtract(a) {
		return pr(this, a);
	}
	set(a) {
		return gt(this, a);
	}
	cycle(a, t, u) {
		return xt(this, a, t, u);
	}
	toDate(a) {
		return yr(this, a);
	}
	toString() {
		return Er(this);
	}
	compare(a) {
		return fr(this, a);
	}
};
at = new WeakMap();
const J = fa;
var tt;
const Rt = class Rt {
	constructor(a = 0, t = 0, u = 0, n = 0) {
		Te(this, tt);
		(this.hour = a),
			(this.minute = t),
			(this.second = u),
			(this.millisecond = n),
			gr(this);
	}
	copy() {
		return new Rt(this.hour, this.minute, this.second, this.millisecond);
	}
	add(a) {
		return vr(this, a);
	}
	subtract(a) {
		return Xl(this, a);
	}
	set(a) {
		return Ke(this, a);
	}
	cycle(a, t, u) {
		return vt(this, a, t, u);
	}
	toString() {
		return Br(this);
	}
	compare(a) {
		return mr(this, a);
	}
};
tt = new WeakMap();
const Ya = Rt;
var ut;
const ma = class ma {
	constructor(...a) {
		Te(this, ut);
		const [t, u, n, r, l] = Ct(a);
		(this.calendar = t),
			(this.era = u),
			(this.year = n),
			(this.month = r),
			(this.day = l),
			(this.hour = a.shift() || 0),
			(this.minute = a.shift() || 0),
			(this.second = a.shift() || 0),
			(this.millisecond = a.shift() || 0),
			Pe(this);
	}
	copy() {
		return this.era
			? new ma(
					this.calendar,
					this.era,
					this.year,
					this.month,
					this.day,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
				)
			: new ma(
					this.calendar,
					this.year,
					this.month,
					this.day,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
				);
	}
	add(a) {
		return pa(this, a);
	}
	subtract(a) {
		return pr(this, a);
	}
	set(a) {
		return gt(Ke(this, a), a);
	}
	cycle(a, t, u) {
		switch (a) {
			case "era":
			case "year":
			case "month":
			case "day":
				return xt(this, a, t, u);
			default:
				return vt(this, a, t, u);
		}
	}
	toDate(a, t) {
		return yr(this, a, t);
	}
	toString() {
		return Fr(this);
	}
	compare(a) {
		const t = fr(this, a);
		return t === 0 ? mr(this, me(a)) : t;
	}
};
ut = new WeakMap();
const Ga = ma;
var rt;
const Da = class Da {
	constructor(...a) {
		Te(this, rt);
		const [t, u, n, r, l] = Ct(a),
			i = a.shift(),
			o = a.shift();
		(this.calendar = t),
			(this.era = u),
			(this.year = n),
			(this.month = r),
			(this.day = l),
			(this.timeZone = i),
			(this.offset = o),
			(this.hour = a.shift() || 0),
			(this.minute = a.shift() || 0),
			(this.second = a.shift() || 0),
			(this.millisecond = a.shift() || 0),
			Pe(this);
	}
	copy() {
		return this.era
			? new Da(
					this.calendar,
					this.era,
					this.year,
					this.month,
					this.day,
					this.timeZone,
					this.offset,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
				)
			: new Da(
					this.calendar,
					this.year,
					this.month,
					this.day,
					this.timeZone,
					this.offset,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
				);
	}
	add(a) {
		return Cr(this, a);
	}
	subtract(a) {
		return eo(this, a);
	}
	set(a, t) {
		return to(this, a, t);
	}
	cycle(a, t, u) {
		return ao(this, a, t, u);
	}
	toDate() {
		return _l(this);
	}
	toString() {
		return ro(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(a) {
		return this.toDate().getTime() - Wl(a, this.timeZone).toDate().getTime();
	}
};
rt = new WeakMap();
const ia = Da;
const Me = [
		[1868, 9, 8],
		[1912, 7, 30],
		[1926, 12, 25],
		[1989, 1, 8],
		[2019, 5, 1],
	],
	no = [
		[1912, 7, 29],
		[1926, 12, 24],
		[1989, 1, 7],
		[2019, 4, 30],
	],
	Xe = [1867, 1911, 1925, 1988, 2018],
	$e = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function Yt(e) {
	const a = Me.findIndex(
		([t, u, n]) =>
			e.year < t ||
			(e.year === t && e.month < u) ||
			(e.year === t && e.month === u && e.day < n),
	);
	return a === -1 ? Me.length - 1 : a === 0 ? 0 : a - 1;
}
function wa(e) {
	const a = Xe[$e.indexOf(e.era)];
	if (!a) throw new Error("Unknown era: " + e.era);
	return new J(e.year + a, e.month, e.day);
}
class io extends Q {
	fromJulianDay(a) {
		const t = super.fromJulianDay(a),
			u = Yt(t);
		return new J(this, $e[u], t.year - Xe[u], t.month, t.day);
	}
	toJulianDay(a) {
		return super.toJulianDay(wa(a));
	}
	balanceDate(a) {
		const t = wa(a),
			u = Yt(t);
		$e[u] !== a.era && ((a.era = $e[u]), (a.year = t.year - Xe[u])),
			this.constrainDate(a);
	}
	constrainDate(a) {
		const t = $e.indexOf(a.era),
			u = no[t];
		if (u != null) {
			const [n, r, l] = u,
				i = n - Xe[t];
			(a.year = Math.max(1, Math.min(i, a.year))),
				a.year === i &&
					((a.month = Math.min(r, a.month)),
					a.month === r && (a.day = Math.min(l, a.day)));
		}
		if (a.year === 1 && t >= 0) {
			const [, n, r] = Me[t];
			(a.month = Math.max(n, a.month)),
				a.month === n && (a.day = Math.max(r, a.day));
		}
	}
	getEras() {
		return $e;
	}
	getYearsInEra(a) {
		const t = $e.indexOf(a.era),
			u = Me[t],
			n = Me[t + 1];
		if (n == null) return 9999 - u[0] + 1;
		let r = n[0] - u[0];
		return (a.month < n[1] || (a.month === n[1] && a.day < n[2])) && r++, r;
	}
	getDaysInMonth(a) {
		return super.getDaysInMonth(wa(a));
	}
	getMinimumMonthInYear(a) {
		const t = Gt(a);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(a) {
		const t = Gt(a);
		return t && a.month === t[1] ? t[2] : 1;
	}
	constructor(...a) {
		super(...a), (this.identifier = "japanese");
	}
}
function Gt(e) {
	if (e.year === 1) {
		const a = $e.indexOf(e.era);
		return Me[a];
	}
}
const Pr = -543;
class lo extends Q {
	fromJulianDay(a) {
		const t = super.fromJulianDay(a),
			u = We(t.era, t.year);
		return new J(this, u - Pr, t.month, t.day);
	}
	toJulianDay(a) {
		return super.toJulianDay(Ht(a));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(a) {
		return super.getDaysInMonth(Ht(a));
	}
	balanceDate() {}
	constructor(...a) {
		super(...a), (this.identifier = "buddhist");
	}
}
function Ht(e) {
	const [a, t] = ya(e.year + Pr);
	return new J(a, t, e.month, e.day);
}
const la = 1911;
function Ar(e) {
	return e.era === "minguo" ? e.year + la : 1 - e.year + la;
}
function Wt(e) {
	const a = e - la;
	return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class oo extends Q {
	fromJulianDay(a) {
		const t = super.fromJulianDay(a),
			u = We(t.era, t.year),
			[n, r] = Wt(u);
		return new J(this, n, r, t.month, t.day);
	}
	toJulianDay(a) {
		return super.toJulianDay(_t(a));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(a) {
		const [t, u] = Wt(Ar(a));
		(a.era = t), (a.year = u);
	}
	isInverseEra(a) {
		return a.era === "before_minguo";
	}
	getDaysInMonth(a) {
		return super.getDaysInMonth(_t(a));
	}
	getYearsInEra(a) {
		return a.era === "before_minguo" ? 9999 : 9999 - la;
	}
	constructor(...a) {
		super(...a), (this.identifier = "roc");
	}
}
function _t(e) {
	const [a, t] = ya(Ar(e));
	return new J(a, t, e.month, e.day);
}
const Jt = 1948320,
	qt = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class so {
	fromJulianDay(a) {
		const t = a - Jt,
			u = 1 + Math.floor((33 * t + 3) / 12053),
			n = 365 * (u - 1) + Math.floor((8 * u + 21) / 33),
			r = t - n,
			l = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30),
			i = r - qt[l] + 1;
		return new J(this, u, l + 1, i);
	}
	toJulianDay(a) {
		let t = Jt - 1 + 365 * (a.year - 1) + Math.floor((8 * a.year + 21) / 33);
		return (t += qt[a.month - 1]), (t += a.day), t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(a) {
		return a.month <= 6
			? 31
			: a.month <= 11 || ke(25 * a.year + 11, 33) < 8
				? 30
				: 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
}
const Ra = 78,
	Qt = 80;
class co extends Q {
	fromJulianDay(a) {
		let t = super.fromJulianDay(a),
			u = t.year - Ra,
			n = a - Ce(t.era, t.year, 1, 1),
			r;
		n < Qt
			? (u--, (r = he(t.year - 1) ? 31 : 30), (n += r + 155 + 90 + 10))
			: ((r = he(t.year) ? 31 : 30), (n -= Qt));
		let l, i;
		if (n < r) (l = 1), (i = n + 1);
		else {
			let o = n - r;
			o < 155
				? ((l = Math.floor(o / 31) + 2), (i = (o % 31) + 1))
				: ((o -= 155), (l = Math.floor(o / 30) + 7), (i = (o % 30) + 1));
		}
		return new J(this, u, l, i);
	}
	toJulianDay(a) {
		let t = a.year + Ra,
			[u, n] = ya(t),
			r,
			l;
		return (
			he(n)
				? ((r = 31), (l = Ce(u, n, 3, 21)))
				: ((r = 30), (l = Ce(u, n, 3, 22))),
			a.month === 1
				? l + a.day - 1
				: ((l += r + Math.min(a.month - 2, 5) * 31),
					a.month >= 8 && (l += (a.month - 7) * 30),
					(l += a.day - 1),
					l)
		);
	}
	getDaysInMonth(a) {
		return (a.month === 1 && he(a.year + Ra)) || (a.month >= 2 && a.month <= 6)
			? 31
			: 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...a) {
		super(...a), (this.identifier = "indian");
	}
}
const oa = 1948440,
	Xt = 1948439,
	ae = 1300,
	we = 1600,
	fo = 460322;
function sa(e, a, t, u) {
	return (
		u +
		Math.ceil(29.5 * (t - 1)) +
		(a - 1) * 354 +
		Math.floor((3 + 11 * a) / 30) +
		e -
		1
	);
}
function wr(e, a, t) {
	const u = Math.floor((30 * (t - a) + 10646) / 10631),
		n = Math.min(12, Math.ceil((t - (29 + sa(a, u, 1, 1))) / 29.5) + 1),
		r = t - sa(a, u, n, 1) + 1;
	return new J(e, u, n, r);
}
function eu(e) {
	return (14 + 11 * e) % 30 < 11;
}
class Bt {
	fromJulianDay(a) {
		return wr(this, oa, a);
	}
	toJulianDay(a) {
		return sa(oa, a.year, a.month, a.day);
	}
	getDaysInMonth(a) {
		let t = 29 + (a.month % 2);
		return a.month === 12 && eu(a.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(a) {
		return eu(a.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
}
class mo extends Bt {
	fromJulianDay(a) {
		return wr(this, Xt, a);
	}
	toJulianDay(a) {
		return sa(Xt, a.year, a.month, a.day);
	}
	constructor(...a) {
		super(...a), (this.identifier = "islamic-tbla");
	}
}
const Do =
	"qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Ha, Ve;
function ea(e) {
	return fo + Ve[e - ae];
}
function je(e, a) {
	const t = e - ae,
		u = 1 << (11 - (a - 1));
	return Ha[t] & u ? 30 : 29;
}
function au(e, a) {
	let t = ea(e);
	for (let u = 1; u < a; u++) t += je(e, u);
	return t;
}
function tu(e) {
	return Ve[e + 1 - ae] - Ve[e - ae];
}
class $o extends Bt {
	constructor() {
		if (
			(super(),
			(this.identifier = "islamic-umalqura"),
			Ha ||
				(Ha = new Uint16Array(
					Uint8Array.from(atob(Do), (a) => a.charCodeAt(0)).buffer,
				)),
			!Ve)
		) {
			Ve = new Uint32Array(we - ae + 1);
			let a = 0;
			for (let t = ae; t <= we; t++) {
				Ve[t - ae] = a;
				for (let u = 1; u <= 12; u++) a += je(t, u);
			}
		}
	}
	fromJulianDay(a) {
		const t = a - oa,
			u = ea(ae),
			n = ea(we);
		if (t < u || t > n) return super.fromJulianDay(a);
		{
			let r = ae - 1,
				l = 1,
				i = 1;
			for (; i > 0; ) {
				r++, (i = t - ea(r) + 1);
				const o = tu(r);
				if (i === o) {
					l = 12;
					break;
				} else if (i < o) {
					let c = je(r, l);
					for (l = 1; i > c; ) (i -= c), l++, (c = je(r, l));
					break;
				}
			}
			return new J(this, r, l, t - au(r, l) + 1);
		}
	}
	toJulianDay(a) {
		return a.year < ae || a.year > we
			? super.toJulianDay(a)
			: oa + au(a.year, a.month) + (a.day - 1);
	}
	getDaysInMonth(a) {
		return a.year < ae || a.year > we
			? super.getDaysInMonth(a)
			: je(a.year, a.month);
	}
	getDaysInYear(a) {
		return a.year < ae || a.year > we ? super.getDaysInYear(a) : tu(a.year);
	}
}
const uu = 347997,
	Rr = 1080,
	Sr = 24 * Rr,
	ho = 29,
	yo = 12 * Rr + 793,
	bo = ho * Sr + yo;
function ve(e) {
	return ke(e * 7 + 1, 19) < 7;
}
function aa(e) {
	let a = Math.floor((235 * e - 234) / 19),
		t = 12084 + 13753 * a,
		u = a * 29 + Math.floor(t / 25920);
	return ke(3 * (u + 1), 7) < 3 && (u += 1), u;
}
function po(e) {
	const a = aa(e - 1),
		t = aa(e);
	return aa(e + 1) - t === 356 ? 2 : t - a === 382 ? 1 : 0;
}
function Ue(e) {
	return aa(e) + po(e);
}
function kr(e) {
	return Ue(e + 1) - Ue(e);
}
function go(e) {
	let a = kr(e);
	switch ((a > 380 && (a -= 30), a)) {
		case 353:
			return 0;
		case 354:
			return 1;
		case 355:
			return 2;
	}
}
function Je(e, a) {
	if (
		(a >= 6 && !ve(e) && a++,
		a === 4 || a === 7 || a === 9 || a === 11 || a === 13)
	)
		return 29;
	const t = go(e);
	return a === 2
		? t === 2
			? 30
			: 29
		: a === 3
			? t === 0
				? 29
				: 30
			: a === 6
				? ve(e)
					? 30
					: 0
				: 30;
}
class xo {
	fromJulianDay(a) {
		let t = a - uu,
			u = (t * Sr) / bo,
			n = Math.floor((19 * u + 234) / 235) + 1,
			r = Ue(n),
			l = Math.floor(t - r);
		for (; l < 1; ) n--, (r = Ue(n)), (l = Math.floor(t - r));
		let i = 1,
			o = 0;
		for (; o < l; ) (o += Je(n, i)), i++;
		i--, (o -= Je(n, i));
		const c = l - o;
		return new J(this, n, i, c);
	}
	toJulianDay(a) {
		let t = Ue(a.year);
		for (let u = 1; u < a.month; u++) t += Je(a.year, u);
		return t + a.day + uu;
	}
	getDaysInMonth(a) {
		return Je(a.year, a.month);
	}
	getMonthsInYear(a) {
		return ve(a.year) ? 13 : 12;
	}
	getDaysInYear(a) {
		return kr(a.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(a, t) {
		t.year !== a.year &&
			(ve(t.year) && !ve(a.year) && t.month > 6
				? a.month--
				: !ve(t.year) && ve(a.year) && t.month > 6 && a.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}
const Wa = 1723856,
	ru = 1824665,
	_a = 5500;
function da(e, a, t, u) {
	return e + 365 * a + Math.floor(a / 4) + 30 * (t - 1) + u - 1;
}
function Et(e, a) {
	const t = Math.floor((4 * (a - e)) / 1461),
		u = 1 + Math.floor((a - da(e, t, 1, 1)) / 30),
		n = a + 1 - da(e, t, u, 1);
	return [t, u, n];
}
function Mr(e) {
	return Math.floor((e % 4) / 3);
}
function Vr(e, a) {
	return a % 13 !== 0 ? 30 : Mr(e) + 5;
}
class Ft {
	fromJulianDay(a) {
		let [t, u, n] = Et(Wa, a),
			r = "AM";
		return t <= 0 && ((r = "AA"), (t += _a)), new J(this, r, t, u, n);
	}
	toJulianDay(a) {
		let t = a.year;
		return a.era === "AA" && (t -= _a), da(Wa, t, a.month, a.day);
	}
	getDaysInMonth(a) {
		return Vr(a.year, a.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(a) {
		return 365 + Mr(a.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(a) {
		return a.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
}
class vo extends Ft {
	fromJulianDay(a) {
		let [t, u, n] = Et(Wa, a);
		return (t += _a), new J(this, "AA", t, u, n);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...a) {
		super(...a), (this.identifier = "ethioaa");
	}
}
class Co extends Ft {
	fromJulianDay(a) {
		let [t, u, n] = Et(ru, a),
			r = "CE";
		return t <= 0 && ((r = "BCE"), (t = 1 - t)), new J(this, r, t, u, n);
	}
	toJulianDay(a) {
		let t = a.year;
		return a.era === "BCE" && (t = 1 - t), da(ru, t, a.month, a.day);
	}
	getDaysInMonth(a) {
		let t = a.year;
		return a.era === "BCE" && (t = 1 - t), Vr(t, a.month);
	}
	isInverseEra(a) {
		return a.era === "BCE";
	}
	balanceDate(a) {
		a.year <= 0 &&
			((a.era = a.era === "BCE" ? "CE" : "BCE"), (a.year = 1 - a.year));
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(a) {
		return a.era === "BCE" ? 9999 : 9715;
	}
	constructor(...a) {
		super(...a), (this.identifier = "coptic");
	}
}
function Ir(e) {
	switch (e) {
		case "buddhist":
			return new lo();
		case "ethiopic":
			return new Ft();
		case "ethioaa":
			return new vo();
		case "coptic":
			return new Co();
		case "hebrew":
			return new xo();
		case "indian":
			return new co();
		case "islamic-civil":
			return new Bt();
		case "islamic-tbla":
			return new mo();
		case "islamic-umalqura":
			return new $o();
		case "japanese":
			return new io();
		case "persian":
			return new so();
		case "roc":
			return new oo();
		case "gregory":
		default:
			return new Q();
	}
}
const Sa = new Map();
class ie {
	constructor(a, t = {}) {
		(this.formatter = Tr(a, t)), (this.options = t);
	}
	format(a) {
		return this.formatter.format(a);
	}
	formatToParts(a) {
		return this.formatter.formatToParts(a);
	}
	formatRange(a, t) {
		if (typeof this.formatter.formatRange == "function")
			return this.formatter.formatRange(a, t);
		if (t < a) throw new RangeError("End date must be >= start date");
		return `${this.formatter.format(a)} – ${this.formatter.format(t)}`;
	}
	formatRangeToParts(a, t) {
		if (typeof this.formatter.formatRangeToParts == "function")
			return this.formatter.formatRangeToParts(a, t);
		if (t < a) throw new RangeError("End date must be >= start date");
		const u = this.formatter.formatToParts(a),
			n = this.formatter.formatToParts(t);
		return [
			...u.map((r) => ({ ...r, source: "startRange" })),
			{ type: "literal", value: " – ", source: "shared" },
			...n.map((r) => ({ ...r, source: "endRange" })),
		];
	}
	resolvedOptions() {
		const a = this.formatter.resolvedOptions();
		return (
			Fo() &&
				(this.resolvedHourCycle ||
					(this.resolvedHourCycle = Po(a.locale, this.options)),
				(a.hourCycle = this.resolvedHourCycle),
				(a.hour12 =
					this.resolvedHourCycle === "h11" ||
					this.resolvedHourCycle === "h12")),
			a.calendar === "ethiopic-amete-alem" && (a.calendar = "ethioaa"),
			a
		);
	}
}
const Bo = { true: { ja: "h11" }, false: {} };
function Tr(e, a = {}) {
	if (typeof a.hour12 == "boolean" && Eo()) {
		a = { ...a };
		const n = Bo[String(a.hour12)][e.split("-")[0]],
			r = a.hour12 ? "h12" : "h23";
		(a.hourCycle = n ?? r), delete a.hour12;
	}
	const t =
		e +
		(a
			? Object.entries(a)
					.sort((n, r) => (n[0] < r[0] ? -1 : 1))
					.join()
			: "");
	if (Sa.has(t)) return Sa.get(t);
	const u = new Intl.DateTimeFormat(e, a);
	return Sa.set(t, u), u;
}
let ka = null;
function Eo() {
	return (
		ka == null &&
			(ka =
				new Intl.DateTimeFormat("en-US", {
					hour: "numeric",
					hour12: !1,
				}).format(new Date(2020, 2, 3, 0)) === "24"),
		ka
	);
}
let Ma = null;
function Fo() {
	return (
		Ma == null &&
			(Ma =
				new Intl.DateTimeFormat("fr", {
					hour: "numeric",
					hour12: !1,
				}).resolvedOptions().hourCycle === "h12"),
		Ma
	);
}
function Po(e, a) {
	if (!a.timeStyle && !a.hour) return;
	(e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "")),
		(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn");
	const t = Tr(e, { ...a, timeZone: void 0 }),
		u = parseInt(
			t.formatToParts(new Date(2020, 2, 3, 0)).find((r) => r.type === "hour")
				.value,
			10,
		),
		n = parseInt(
			t.formatToParts(new Date(2020, 2, 3, 23)).find((r) => r.type === "hour")
				.value,
			10,
		);
	if (u === 0 && n === 23) return "h23";
	if (u === 24 && n === 23) return "h24";
	if (u === 0 && n === 11) return "h11";
	if (u === 12 && n === 11) return "h12";
	throw new Error("Unexpected hour cycle result");
}
function le(e) {
	e = or(e ?? {}, Ao);
	const { locale: a } = oe();
	return d.useMemo(() => new ie(a, e), [a, e]);
}
function Ao(e, a) {
	if (e === a) return !0;
	const t = Object.keys(e),
		u = Object.keys(a);
	if (t.length !== u.length) return !1;
	for (const n of t) if (a[n] !== e[n]) return !1;
	return !0;
}
function Nr(e) {
	return e && e.__esModule ? e.default : e;
}
const Pt = new WeakMap();
function Ye(e) {
	return (e == null ? void 0 : e.calendar.identifier) === "gregory" &&
		e.era === "BC"
		? "short"
		: void 0;
}
function wo(e) {
	let a = Ae(Nr(He), "@react-aria/calendar"),
		t,
		u;
	"highlightedRange" in e
		? ({ start: t, end: u } = e.highlightedRange || {})
		: ((t = Array.isArray(e.value) ? e.value[0] : (e.value ?? void 0)),
			(u = Array.isArray(e.value) ? e.value.at(-1) : (e.value ?? void 0)));
	const n = le({
			weekday: "long",
			month: "long",
			year: "numeric",
			day: "numeric",
			era: Ye(t) || Ye(u),
			timeZone: e.timeZone,
		}),
		{ locale: r } = oe(),
		l = d.useMemo(() => new Intl.ListFormat(r), [r]),
		i = "anchorDate" in e ? e.anchorDate : null;
	return d.useMemo(() => {
		if (!i && t && u) {
			if (H(t, u)) {
				const o = n.format(t.toDate(e.timeZone));
				return a.format("selectedDateDescription", { date: o });
			} else if ("highlightedRange" in e) {
				const o = qa(n, a, t, u, e.timeZone);
				return a.format("selectedRangeDescription", { dateRange: o });
			} else if (Array.isArray(e.value)) {
				const o = e.value.map((s) => n.format(s.toDate(e.timeZone))),
					c = l.format(o);
				return a.format("selectedDateDescription", { date: c });
			}
		}
		return "";
	}, [t, u, i, e, a, n, l]);
}
function Ja(e, a, t, u) {
	const n = Ae(Nr(He), "@react-aria/calendar"),
		r = Ye(e) || Ye(a),
		l = le({
			month: "long",
			year: "numeric",
			era: r,
			calendar: e.calendar.identifier,
			timeZone: t,
		}),
		i = le({
			month: "long",
			year: "numeric",
			day: "numeric",
			era: r,
			calendar: e.calendar.identifier,
			timeZone: t,
		});
	return d.useMemo(() => {
		if (H(e, Fe(e))) {
			let o = e,
				c = a;
			if (
				(e.calendar.getFormattableMonth &&
					(o = e.calendar.getFormattableMonth(e)),
				a.calendar.getFormattableMonth &&
					(c = a.calendar.getFormattableMonth(a)),
				H(a, na(e)))
			)
				return l.format(o.toDate(t));
			if (H(a, na(a)))
				return u ? qa(l, n, o, c, t) : l.formatRange(o.toDate(t), c.toDate(t));
		}
		return u ? qa(i, n, e, a, t) : i.formatRange(e.toDate(t), a.toDate(t));
	}, [e, a, l, i, n, t, u]);
}
function qa(e, a, t, u, n) {
	let r = e.formatRangeToParts(t.toDate(n), u.toDate(n)),
		l = -1;
	for (let c = 0; c < r.length; c++) {
		const s = r[c];
		if (s.source === "shared" && s.type === "literal") l = c;
		else if (s.source === "endRange") break;
	}
	let i = "",
		o = "";
	for (let c = 0; c < r.length; c++)
		c < l ? (i += r[c].value) : c > l && (o += r[c].value);
	return a.format("dateRange", { startDate: i, endDate: o });
}
function Ro(e) {
	return e && e.__esModule ? e.default : e;
}
function So(e, a) {
	const t = Ae(Ro(He), "@react-aria/calendar"),
		u = ue(e),
		n = Ja(a.visibleRange.start, a.visibleRange.end, a.timeZone, !1),
		r = Ja(a.visibleRange.start, a.visibleRange.end, a.timeZone, !0);
	Mt(() => {
		a.isFocused || Na(r);
	}, [r]);
	const l = wo(a);
	Mt(() => {
		l && Na(l, "polite", 4e3);
	}, [l]);
	const i = qi([!!e.errorMessage, e.isInvalid, e.validationState]);
	Pt.set(a, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: e["aria-labelledby"],
		errorMessageId: i,
		selectedDateDescription: l,
	});
	const [o, c] = d.useState(!1),
		s = e.isDisabled || a.isNextVisibleRangeInvalid();
	s && o && (c(!1), a.setFocused(!0));
	const [m, $] = d.useState(!1),
		D = e.isDisabled || a.isPreviousVisibleRangeInvalid();
	D && m && ($(!1), a.setFocused(!0));
	const h = st({
		id: e.id,
		"aria-label": [e["aria-label"], r].filter(Boolean).join(", "),
		"aria-labelledby": e["aria-labelledby"],
	});
	return {
		calendarProps: ee(u, h, {
			role: "application",
			"aria-details": e["aria-details"] || void 0,
			"aria-describedby": e["aria-describedby"] || void 0,
		}),
		nextButtonProps: {
			onPress: () => a.focusNextPage(),
			"aria-label": t.format("next"),
			isDisabled: s,
			onFocusChange: c,
		},
		prevButtonProps: {
			onPress: () => a.focusPreviousPage(),
			"aria-label": t.format("previous"),
			isDisabled: D,
			onFocusChange: $,
		},
		errorMessageProps: { id: i },
		title: n,
	};
}
function ko(e, a) {
	const {
			startDate: t = a.visibleRange.start,
			endDate: u = a.visibleRange.end,
			firstDayOfWeek: n,
		} = e,
		{ direction: r } = oe(),
		l = (f) => {
			switch (f.key) {
				case "Enter":
				case " ":
					f.preventDefault(), a.selectFocusedDate();
					break;
				case "PageUp":
					f.preventDefault(),
						f.stopPropagation(),
						a.focusPreviousSection(f.shiftKey);
					break;
				case "PageDown":
					f.preventDefault(),
						f.stopPropagation(),
						a.focusNextSection(f.shiftKey);
					break;
				case "End":
					f.preventDefault(), f.stopPropagation(), a.focusSectionEnd();
					break;
				case "Home":
					f.preventDefault(), f.stopPropagation(), a.focusSectionStart();
					break;
				case "ArrowLeft":
					f.preventDefault(),
						f.stopPropagation(),
						r === "rtl" ? a.focusNextDay() : a.focusPreviousDay();
					break;
				case "ArrowUp":
					f.preventDefault(), f.stopPropagation(), a.focusPreviousRow();
					break;
				case "ArrowRight":
					f.preventDefault(),
						f.stopPropagation(),
						r === "rtl" ? a.focusPreviousDay() : a.focusNextDay();
					break;
				case "ArrowDown":
					f.preventDefault(), f.stopPropagation(), a.focusNextRow();
					break;
				case "Escape":
					"setAnchorDate" in a && (f.preventDefault(), a.setAnchorDate(null));
					break;
			}
		},
		i = Ja(t, u, a.timeZone, !0),
		{ ariaLabel: o, ariaLabelledBy: c } = Pt.get(a),
		s = st({
			"aria-label": [o, i].filter(Boolean).join(", "),
			"aria-labelledby": c,
		}),
		m = le({ weekday: e.weekdayStyle || "narrow", timeZone: a.timeZone }),
		{ locale: $ } = oe(),
		D = d.useMemo(() => {
			const f = a.visibleDuration.days && a.visibleDuration.days < 7,
				b = f ? t : Le($t(a.timeZone), $, n),
				p = f ? a.visibleDuration.days : 7;
			return [...new Array(p).keys()].map((S) => {
				const B = b.add({ days: S }).toDate(a.timeZone);
				return m.format(B);
			});
		}, [$, a.timeZone, m, n, t, a.visibleDuration.days]),
		h = a.getWeeksInMonth(t);
	return {
		gridProps: ee(s, {
			role: "grid",
			"aria-readonly": a.isReadOnly || void 0,
			"aria-disabled": a.isDisabled || void 0,
			"aria-multiselectable":
				"highlightedRange" in a || a.selectionMode === "multiple" || void 0,
			onKeyDown: l,
			onFocus: () => a.setFocused(!0),
			onBlur: () => a.setFocused(!1),
		}),
		headerProps: { "aria-hidden": !0 },
		weekDays: D,
		weeksInMonth: h,
	};
}
function Mo(e) {
	return e && e.__esModule ? e.default : e;
}
function Vo(e, a, t) {
	let { date: u, isDisabled: n } = e,
		{ errorMessageId: r, selectedDateDescription: l } = Pt.get(a),
		i = Ae(Mo(He), "@react-aria/calendar"),
		o = le({
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
			era: Ye(u),
			timeZone: a.timeZone,
		}),
		c = a.isCellFocused(u) && !e.isOutsideMonth;
	n = n || a.isCellDisabled(u) || !!e.isOutsideMonth;
	let s = a.isCellUnavailable(u),
		m = !n && !s,
		$ = a.isSelected(u) && m,
		D = !1;
	a.isValueInvalid &&
		("highlightedRange" in a
			? (D =
					!a.anchorDate &&
					a.highlightedRange != null &&
					u.compare(a.highlightedRange.start) >= 0 &&
					u.compare(a.highlightedRange.end) <= 0)
			: Array.isArray(a.value)
				? (D = a.value.some((C) => H(C, u)))
				: a.value && (D = H(a.value, u))),
		D && !n && ($ = !0),
		(u = or(u, Ol));
	let h = d.useMemo(() => u.toDate(a.timeZone), [u, a.timeZone]),
		f = dr(u, a.timeZone),
		b = d.useMemo(() => {
			let C = "";
			return (
				"highlightedRange" in a &&
					a.value &&
					!a.anchorDate &&
					(H(u, a.value.start) || H(u, a.value.end)) &&
					(C = l + ", "),
				(C += o.format(h)),
				f
					? (C = i.format($ ? "todayDateSelected" : "todayDate", { date: C }))
					: $ && (C = i.format("dateSelected", { date: C })),
				a.minValue && H(u, a.minValue)
					? (C += ", " + i.format("minimumDate"))
					: a.maxValue &&
						H(u, a.maxValue) &&
						(C += ", " + i.format("maximumDate")),
				C
			);
		}, [o, h, i, $, f, u, a, l]),
		p = "";
	"anchorDate" in a &&
		c &&
		!a.isReadOnly &&
		m &&
		(a.anchorDate
			? (p = i.format("finishRangeSelectionPrompt"))
			: (p = i.format("startRangeSelectionPrompt")));
	let S = dt(p),
		A = d.useRef(!1),
		B = d.useRef(!1),
		x = d.useRef(void 0),
		{ pressProps: V, isPressed: I } = $u({
			shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
			preventFocusOnPress: !0,
			isDisabled: !m || a.isReadOnly,
			onPressStart(C) {
				if (a.isReadOnly) {
					a.setFocusedDate(u), a.setFocused(!0);
					return;
				}
				if (
					"highlightedRange" in a &&
					!a.anchorDate &&
					(C.pointerType === "mouse" || C.pointerType === "touch")
				) {
					if (a.highlightedRange && !D) {
						if (H(u, a.highlightedRange.start)) {
							a.setAnchorDate(a.highlightedRange.end),
								a.setFocusedDate(u),
								a.setFocused(!0),
								a.setDragging(!0),
								(B.current = !0);
							return;
						} else if (H(u, a.highlightedRange.end)) {
							a.setAnchorDate(a.highlightedRange.start),
								a.setFocusedDate(u),
								a.setFocused(!0),
								a.setDragging(!0),
								(B.current = !0);
							return;
						}
					}
					const E = () => {
						a.setDragging(!0),
							(x.current = void 0),
							a.selectDate(u),
							a.setFocusedDate(u),
							a.setFocused(!0),
							(A.current = !0);
					};
					C.pointerType === "touch" ? (x.current = setTimeout(E, 200)) : E();
				}
			},
			onPressEnd() {
				(B.current = !1),
					(A.current = !1),
					clearTimeout(x.current),
					(x.current = void 0);
			},
			onPress() {
				!("anchorDate" in a) &&
					!a.isReadOnly &&
					(a.selectDate(u), a.setFocusedDate(u), a.setFocused(!0));
			},
			onPressUp(C) {
				a.isReadOnly ||
					("anchorDate" in a &&
						x.current &&
						(a.selectDate(u), a.setFocusedDate(u), a.setFocused(!0)),
					"anchorDate" in a &&
						(B.current
							? a.setAnchorDate(u)
							: a.anchorDate && !A.current
								? (a.selectDate(u), a.setFocusedDate(u), a.setFocused(!0))
								: C.pointerType === "keyboard" && !a.anchorDate
									? (a.selectDate(u), a.focusNearestAvailableDate(u))
									: C.pointerType === "virtual" &&
										(a.selectDate(u), a.setFocusedDate(u), a.setFocused(!0))));
			},
		}),
		T;
	n || (T = H(u, a.focusedDate) ? 0 : -1),
		d.useEffect(() => {
			c &&
				t.current &&
				(dl(t.current),
				cl() !== "pointer" &&
					pu() === t.current &&
					hu(t.current, { containingElement: yu(t.current) }));
		}, [c, t]);
	const N = le({
			day: "numeric",
			timeZone: a.timeZone,
			calendar: u.calendar.identifier,
		}),
		w = d.useMemo(
			() => N.formatToParts(h).find((C) => C.type === "day").value,
			[N, h],
		);
	return {
		cellProps: {
			role: "gridcell",
			"aria-disabled": !m || void 0,
			"aria-selected": $ || void 0,
			"aria-invalid": D || void 0,
		},
		buttonProps: ee(V, {
			onFocus() {
				n || (a.setFocusedDate(u), a.setFocused(!0));
			},
			tabIndex: T,
			role: "button",
			"aria-disabled": !m || void 0,
			"aria-label": b,
			"aria-invalid": D || void 0,
			"aria-describedby":
				[D ? r : void 0, S["aria-describedby"]].filter(Boolean).join(" ") ||
				void 0,
			onPointerEnter(C) {
				"highlightDate" in a &&
					(C.pointerType !== "touch" || a.isDragging) &&
					m &&
					a.highlightDate(u);
			},
			onPointerDown(C) {
				const E = Oe(C);
				E instanceof HTMLElement &&
					"releasePointerCapture" in E &&
					("hasPointerCapture" in E
						? E.hasPointerCapture(C.pointerId) &&
							E.releasePointerCapture(C.pointerId)
						: E.releasePointerCapture(C.pointerId));
			},
			onContextMenu(C) {
				C.preventDefault();
			},
		}),
		isPressed: I,
		isFocused: c,
		isSelected: $,
		isDisabled: n,
		isUnavailable: s,
		isOutsideVisibleRange:
			u.compare(a.visibleRange.start) < 0 || u.compare(a.visibleRange.end) > 0,
		isInvalid: D,
		formattedDate: w,
	};
}
function Io(e, a, t) {
	const { commitBehavior: u = "select", ...n } = e,
		r = So(n, a),
		l = d.useRef(!1),
		i = d.useRef(typeof window < "u" ? window : null);
	Se(i, "pointerdown", (s) => {
		l.current = s.width === 0 && s.height === 0;
	});
	const o = {
		clear: () => a.clearSelection(),
		reset: () => a.setAnchorDate(null),
		select: () => a.commitSelection(),
	};
	return (
		Se(i, "pointerup", (s) => {
			if (l.current) {
				l.current = !1;
				return;
			}
			if ((a.setDragging(!1), !a.anchorDate)) return;
			const m = s.target;
			t.current &&
				fl(t.current) &&
				(!Ze(t.current, m) || !m.closest('button, [role="button"]')) &&
				o[u]();
		}),
		(r.calendarProps.onBlur = (s) => {
			t.current &&
				(!s.relatedTarget || !Ze(t.current, s.relatedTarget)) &&
				a.anchorDate &&
				o[u]();
		}),
		Se(
			t,
			"touchmove",
			(s) => {
				a.isDragging && s.preventDefault();
			},
			{ passive: !1, capture: !0 },
		),
		r
	);
}
function ye(e, a, t) {
	return (a != null && e.compare(a) < 0) || (t != null && e.compare(t) > 0);
}
function Qa(e, a, t, u, n) {
	const r = {};
	for (const i in a)
		(r[i] = Math.floor(a[i] / 2)), r[i] > 0 && a[i] % 2 === 0 && r[i]--;
	const l = Be(e, a, t).subtract(r);
	return Ge(e, l, a, t, u, n);
}
function Be(e, a, t, u, n) {
	let r = e;
	return (
		a.years
			? (r = zl(e))
			: a.months
				? (r = Fe(e))
				: (a.weeks || (a.days && a.days > 7)) && (r = Le(e, t)),
		Ge(e, r, a, t, u, n)
	);
}
function Xa(e, a, t, u, n) {
	const r = { ...a };
	r.days
		? r.days--
		: r.weeks
			? r.weeks--
			: r.months
				? r.months--
				: r.years && r.years--;
	const l = Be(e, a, t).subtract(r);
	return Ge(e, l, a, t, u, n);
}
function Ge(e, a, t, u, n, r) {
	if (n && e.compare(n) >= 0) {
		const l = bt(a, Be(X(n), t, u));
		l && (a = l);
	}
	if (r && e.compare(r) <= 0) {
		const l = yt(a, Xa(X(r), t, u));
		l && (a = l);
	}
	return a;
}
function re(e, a, t) {
	if (a) {
		const u = bt(e, X(a));
		u && (e = u);
	}
	if (t) {
		const u = yt(e, X(t));
		u && (e = u);
	}
	return e;
}
function Or(e, a, t) {
	if (!t) return e;
	for (; e.compare(a) >= 0 && t(e); ) e = e.subtract({ days: 1 });
	return e.compare(a) >= 0 ? e : null;
}
function To(e, a) {
	return e === a
		? !0
		: e.days === a.days &&
				e.weeks === a.weeks &&
				e.months === a.months &&
				e.years === a.years;
}
function No(e) {
	const a = d.useMemo(() => new ie(e.locale), [e.locale]),
		t = d.useMemo(() => a.resolvedOptions(), [a]),
		{
			locale: u,
			createCalendar: n,
			visibleDuration: r = { months: 1 },
			minValue: l,
			maxValue: i,
			selectionAlignment: o,
			isDateUnavailable: c,
			pageBehavior: s = "visible",
			selectionMode: m = "single",
			firstDayOfWeek: $,
			weeksInMonth: D,
		} = e,
		h = d.useMemo(() => n(t.calendar), [n, t.calendar]),
		[f, b] = ze(e.value, e.defaultValue ?? null, e.onChange),
		p = d.useMemo(
			() =>
				Array.isArray(f) ? f.map((v) => K(X(v), h)) : f ? K(X(f), h) : null,
			[f, h],
		),
		S = d.useMemo(() => {
			const v = Array.isArray(f) ? f[0] : f;
			return v && "timeZone" in v ? v.timeZone : t.timeZone;
		}, [f, t.timeZone]),
		A = d.useMemo(
			() => (e.focusedValue ? re(K(X(e.focusedValue), h), l, i) : void 0),
			[e.focusedValue, h, l, i],
		),
		B = d.useMemo(
			() =>
				e.defaultFocusedValue
					? re(K(X(e.defaultFocusedValue), h), l, i)
					: re(p ? (Array.isArray(p) ? p[0] : p) : K($t(S), h), l, i),
			[e.defaultFocusedValue, p, S, h, l, i],
		),
		[x, V] = ze(A, B, e.onFocusChange),
		I = () => {
			switch (o) {
				case "start":
					return Be(x, r, u, l, i);
				case "end":
					return Xa(x, r, u, l, i);
				case "center":
				default:
					return Qa(x, r, u, l, i);
			}
		},
		[T, N] = d.useState(I),
		[w, C] = d.useState(e.autoFocus || !1),
		[E, U] = d.useState(r);
	To(r, E) || (U(r), N(I()));
	const z = d.useMemo(() => {
			const v = { ...r };
			return v.days ? v.days-- : (v.days = -1), T.add(v);
		}, [T, r]),
		[W, P] = d.useState(h);
	if (!ba(h, W)) {
		const v = K(x, h);
		N(Qa(v, r, u, l, i)), V(v), P(h);
	}
	ye(x, l, i)
		? V(re(x, l, i))
		: x.compare(T) < 0
			? N(Xa(x, r, u, l, i))
			: x.compare(z) > 0 && N(Be(x, r, u, l, i));
	function R(v) {
		(v = re(v, l, i)), V(v);
	}
	function k(v) {
		const G = re(v, l, i),
			Y = Or(G, T, c);
		if (!Y) return null;
		const g = Array.isArray(f) ? f[0] : f,
			M = K(Y, (g == null ? void 0 : g.calendar) || new Q());
		return g && "hour" in g ? g.set(M) : M;
	}
	function L(v) {
		if (!e.isDisabled && !e.isReadOnly) {
			if (v === null) {
				b(m === "multiple" ? [] : null);
				return;
			}
			if (Array.isArray(v)) b(v.map(k).filter(Boolean));
			else {
				const G = k(v);
				G && b(G);
			}
		}
	}
	const y = d.useMemo(
			() =>
				p
					? Array.isArray(p)
						? p.some((v) => (c == null ? void 0 : c(v)) || ye(v, l, i))
						: (c == null ? void 0 : c(p)) || ye(p, l, i)
					: !1,
			[p, c, l, i],
		),
		O = e.isInvalid || e.validationState === "invalid" || y,
		Z = O ? "invalid" : null,
		F = d.useMemo(() => (s === "visible" ? r : Va(r)), [s, r]);
	return {
		isDisabled: e.isDisabled ?? !1,
		isReadOnly: e.isReadOnly ?? !1,
		value: p,
		setValue: L,
		selectionMode: m,
		visibleDuration: r,
		visibleRange: { start: T, end: z },
		minValue: l,
		maxValue: i,
		focusedDate: x,
		timeZone: S,
		validationState: Z,
		isValueInvalid: O,
		setFocusedDate(v) {
			R(v);
		},
		focusNextDay() {
			R(x.add({ days: 1 }));
		},
		focusPreviousDay() {
			R(x.subtract({ days: 1 }));
		},
		focusNextRow() {
			r.days
				? this.focusNextPage()
				: (r.weeks || r.months || r.years) && R(x.add({ weeks: 1 }));
		},
		focusPreviousRow() {
			r.days
				? this.focusPreviousPage()
				: (r.weeks || r.months || r.years) && R(x.subtract({ weeks: 1 }));
		},
		focusNextPage() {
			const v = T.add(F);
			V(re(x.add(F), l, i)), N(Be(Ge(x, v, F, u, l, i), F, u));
		},
		focusPreviousPage() {
			const v = T.subtract(F);
			V(re(x.subtract(F), l, i)), N(Be(Ge(x, v, F, u, l, i), F, u));
		},
		focusSectionStart() {
			r.days ? R(T) : r.weeks ? R(Le(x, u)) : (r.months || r.years) && R(Fe(x));
		},
		focusSectionEnd() {
			r.days ? R(z) : r.weeks ? R(Zl(x, u)) : (r.months || r.years) && R(na(x));
		},
		focusNextSection(v) {
			if (!v && !r.days) {
				R(x.add(Va(r)));
				return;
			}
			r.days
				? this.focusNextPage()
				: r.weeks
					? R(x.add({ months: 1 }))
					: (r.months || r.years) && R(x.add({ years: 1 }));
		},
		focusPreviousSection(v) {
			if (!v && !r.days) {
				R(x.subtract(Va(r)));
				return;
			}
			r.days
				? this.focusPreviousPage()
				: r.weeks
					? R(x.subtract({ months: 1 }))
					: (r.months || r.years) && R(x.subtract({ years: 1 }));
		},
		selectFocusedDate() {
			(c && c(x)) || this.selectDate(x);
		},
		selectDate(v) {
			if (!(e.isDisabled || e.isReadOnly))
				if (m === "multiple" && v != null) {
					const G = k(v);
					if (!G) return;
					let Y = [];
					Array.isArray(f) ? (Y = f) : f != null && (Y = [f]);
					const g = Y.findIndex((q) => H(q, G)),
						M = g >= 0 ? Y.slice(0, g).concat(Y.slice(g + 1)) : [...Y, G];
					b(M);
				} else L(v);
		},
		isFocused: w,
		setFocused: C,
		isInvalid(v) {
			return ye(v, l, i);
		},
		isSelected(v) {
			return !p || this.isCellDisabled(v) || this.isCellUnavailable(v)
				? !1
				: Array.isArray(p)
					? p.some((G) => H(G, v))
					: H(v, p);
		},
		isCellFocused(v) {
			return w && x && H(v, x);
		},
		isCellDisabled(v) {
			return (
				e.isDisabled ||
				v.compare(T) < 0 ||
				v.compare(z) > 0 ||
				this.isInvalid(v)
			);
		},
		isCellUnavailable(v) {
			return e.isDateUnavailable ? e.isDateUnavailable(v) : !1;
		},
		isPreviousVisibleRangeInvalid() {
			const v = T.subtract({ days: 1 });
			return H(v, T) || this.isInvalid(v);
		},
		isNextVisibleRangeInvalid() {
			const v = z.add({ days: 1 });
			return H(v, z) || this.isInvalid(v);
		},
		getDatesInWeek(v, G = T) {
			let Y = G.add({ weeks: v }),
				g = [],
				M = r.days && r.days < 7 ? r.days : 7;
			if (M === 7) {
				Y = Le(Y, u, $);
				const q = Dt(Y, u, $);
				for (let se = 0; se < q; se++) g.push(null);
			}
			for (; g.length < M; ) {
				g.push(Y);
				const q = Y.add({ days: 1 });
				if (H(Y, q)) break;
				Y = q;
			}
			for (; g.length < M; ) g.push(null);
			return g;
		},
		getWeeksInMonth(v = T) {
			let G = D || Yl(v, u, $);
			return (
				(r.weeks || r.days) &&
					((G = r.weeks ?? 0), r.days && (G += Math.ceil(r.days / 7))),
				G
			);
		},
	};
}
function Va(e) {
	const a = { ...e };
	for (const t in e) a[t] = 1;
	return a;
}
function Oo(e) {
	let {
			value: a,
			defaultValue: t,
			onChange: u,
			createCalendar: n,
			locale: r,
			visibleDuration: l = { months: 1 },
			minValue: i,
			maxValue: o,
			...c
		} = e,
		[s, m] = ze(a, t || null, u),
		[$, D] = d.useState(null),
		h = "center";
	if (s && s.start && s.end) {
		const U = Qa(X(s.start), l, r, i, o).add(l).subtract({ days: 1 });
		s.end.compare(U) > 0 && (h = "start");
	}
	const f = d.useMemo(() => {
			const E = e.isDateUnavailable;
			if (E) return (U) => E(U, $);
		}, [e.isDateUnavailable, $]),
		b = d.useCallback(
			(E) => {
				if (E && f && !e.allowsNonContiguousRanges) {
					const U = iu(E, f, l, -1),
						z = iu(E, f, l, 1);
					return { start: U, end: z };
				} else return null;
			},
			[f, l, e.allowsNonContiguousRanges],
		),
		p = d.useMemo(() => b($), [b, $]),
		S = d.useMemo(() => bt(i, p == null ? void 0 : p.start), [i, p]),
		A = d.useMemo(() => yt(o, p == null ? void 0 : p.end), [o, p]),
		B = No({
			...c,
			value: s && s.start,
			createCalendar: n,
			locale: r,
			visibleDuration: l,
			minValue: S,
			maxValue: A,
			selectionAlignment: e.selectionAlignment || h,
			isDateUnavailable: f,
		}),
		x = $ ? Ia($, B.focusedDate) : s && Ia(s.start, s.end),
		V = (E) => {
			if (e.isReadOnly) return;
			const U = re(E, S, A),
				z = Or(U, B.visibleRange.start, f);
			if (z)
				if (!$) D(z);
				else {
					const W = Ia($, z);
					W &&
						m({
							start: nu(W.start, s == null ? void 0 : s.start),
							end: nu(W.end, s == null ? void 0 : s.end),
						}),
						D(null);
				}
		},
		[I, T] = d.useState(!1),
		N = d.useMemo(
			() =>
				!s || $
					? !1
					: f && (f(s.start) || f(s.end))
						? !0
						: ye(s.start, i, o) || ye(s.end, i, o),
			[f, s, $, i, o],
		),
		w = e.isInvalid || e.validationState === "invalid" || N;
	return {
		...B,
		value: s,
		setValue: m,
		anchorDate: $,
		setAnchorDate: D,
		highlightedRange: x,
		validationState: w ? "invalid" : null,
		isValueInvalid: w,
		selectFocusedDate() {
			B.isCellUnavailable(B.focusedDate) || V(B.focusedDate);
		},
		commitSelection() {
			V(B.focusedDate);
		},
		selectDate: V,
		highlightDate(E) {
			$ && B.setFocusedDate(E);
		},
		isSelected(E) {
			return !!(
				x &&
				E.compare(x.start) >= 0 &&
				E.compare(x.end) <= 0 &&
				!B.isCellDisabled(E) &&
				!B.isCellUnavailable(E)
			);
		},
		isInvalid(E) {
			return (
				B.isInvalid(E) ||
				ye(E, p == null ? void 0 : p.start, p == null ? void 0 : p.end)
			);
		},
		isDragging: I,
		setDragging: T,
		clearSelection() {
			D(null), m(null);
		},
		focusNearestAvailableDate(E) {
			let U = b(E),
				z = (P) =>
					this.isInvalid(P) ||
					ye(P, U == null ? void 0 : U.start, U == null ? void 0 : U.end),
				W = E.add({ days: 1 });
			z(W) && (W = E.subtract({ days: 1 })),
				z(W) || (this.setFocusedDate(W), this.setFocused(!0));
		},
	};
}
function Ia(e, a) {
	return !e || !a
		? null
		: (a.compare(e) < 0 && ([e, a] = [a, e]), { start: X(e), end: X(a) });
}
function nu(e, a) {
	return (
		(e = K(e, (a == null ? void 0 : a.calendar) || new Q())),
		a && "hour" in a ? a.set(e) : e
	);
}
function iu(e, a, t, u) {
	let n = e.add({ days: u }),
		r = e.subtract(t),
		l = e.add(t);
	for (; (u < 0 ? n.compare(r) >= 0 : n.compare(l) <= 0) && !a(n); )
		n = n.add({ days: u });
	if (a(n)) return n.add({ days: -u });
}
const jo = d.createContext(null),
	ca = d.createContext(null),
	At = d.createContext(null),
	ga = d.createContext(null),
	Uo = d.forwardRef((a, t) => {
		[a, t] = it(a, t, ca);
		const { locale: u } = oe(),
			n = Oo({ ...a, locale: u, createCalendar: a.createCalendar || Ir }),
			{
				calendarProps: r,
				prevButtonProps: l,
				nextButtonProps: i,
				errorMessageProps: o,
				title: c,
			} = Io(a, n, t),
			s = $a({
				...a,
				values: {
					state: n,
					isDisabled: a.isDisabled || !1,
					isInvalid: n.isValueInvalid,
				},
				defaultClassName: "react-aria-RangeCalendar",
			}),
			m = ue(a, { global: !0 });
		return j.createElement(
			be.div,
			{
				...ee(s, m, r),
				ref: t,
				slot: a.slot || void 0,
				"data-disabled": a.isDisabled || void 0,
				"data-invalid": n.isValueInvalid || void 0,
			},
			j.createElement(
				lt,
				{
					values: [
						[nt, { slots: { previous: l, next: i } }],
						[tl, { "aria-hidden": !0, level: 2, children: c }],
						[ga, n],
						[ca, a],
						[ot, { slots: { errorMessage: o } }],
					],
				},
				j.createElement(kt, null, j.createElement("h2", null, r["aria-label"])),
				s.children,
				j.createElement(
					kt,
					null,
					j.createElement("button", {
						"aria-label": i["aria-label"],
						disabled: i.isDisabled,
						onClick: () => n.focusNextPage(),
						tabIndex: -1,
					}),
				),
			),
		);
	}),
	xa = d.createContext(null),
	zo = d.forwardRef((a, t) => {
		let u = d.useContext(At),
			n = d.useContext(ga),
			r = Oa(jo),
			l = Oa(ca),
			i = u ?? n,
			o = i.visibleRange.start;
		a.offset && (o = o.add(a.offset));
		const c =
				(r == null ? void 0 : r.firstDayOfWeek) ??
				(l == null ? void 0 : l.firstDayOfWeek),
			{
				gridProps: s,
				headerProps: m,
				weekDays: $,
				weeksInMonth: D,
			} = ko(
				{
					startDate: o,
					endDate: na(o),
					weekdayStyle: a.weekdayStyle,
					firstDayOfWeek: c,
				},
				i,
			),
			h = ue(a, { global: !0 });
		return j.createElement(
			xa.Provider,
			{ value: { headerProps: m, weekDays: $, startDate: o, weeksInMonth: D } },
			j.createElement(
				be.table,
				{
					render: a.render,
					...ee(h, s),
					ref: t,
					style: a.style,
					cellPadding: 0,
					className: a.className ?? "react-aria-CalendarGrid",
				},
				typeof a.children != "function"
					? a.children
					: j.createElement(
							j.Fragment,
							null,
							j.createElement(jr, null, (f) => j.createElement(Ur, null, f)),
							j.createElement(zr, null, a.children),
						),
			),
		);
	});
function Zo(e, a) {
	const { children: t, style: u, className: n } = e,
		{ headerProps: r, weekDays: l } = d.useContext(xa),
		i = ue(e, { global: !0 });
	return j.createElement(
		be.thead,
		{
			render: e.render,
			...ee(i, r),
			ref: a,
			style: u,
			className: n ?? "react-aria-CalendarGridHeader",
		},
		j.createElement(
			"tr",
			null,
			l.map((o, c) => j.cloneElement(t(o), { key: c })),
		),
	);
}
const jr = d.forwardRef(Zo);
function Lo(e, a) {
	const { children: t, style: u, className: n } = e,
		r = ue(e, { global: !0 });
	return j.createElement(
		be.th,
		{
			render: e.render,
			...r,
			ref: a,
			style: u,
			className: n || "react-aria-CalendarHeaderCell",
		},
		t,
	);
}
const Ur = d.forwardRef(Lo);
function Ko(e, a) {
	const { children: t, style: u, className: n } = e,
		r = d.useContext(At),
		l = d.useContext(ga),
		i = r ?? l,
		{ startDate: o, weeksInMonth: c } = d.useContext(xa),
		s = ue(e, { global: !0 });
	return j.createElement(
		be.tbody,
		{
			render: e.render,
			...s,
			ref: a,
			style: u,
			className: n ?? "react-aria-CalendarGridBody",
		},
		[...new Array(c).keys()].map((m) =>
			j.createElement(
				"tr",
				{ key: m },
				i
					.getDatesInWeek(m, o)
					.map(($, D) =>
						$
							? j.cloneElement(t($), { key: D })
							: j.createElement("td", { key: D }),
					),
			),
		),
	);
}
const zr = d.forwardRef(Ko),
	Yo = d.forwardRef(({ date: a, ...t }, u) => {
		let n = d.useContext(At),
			r = d.useContext(ga),
			l = n ?? r,
			{ startDate: i } = d.useContext(xa) ?? {
				startDate: l.visibleRange.start,
			},
			o = l.visibleDuration.days || l.visibleDuration.weeks ? !1 : !Nl(i, a),
			c = dr(a, l.timeZone),
			s = d.useRef(null),
			{
				cellProps: m,
				buttonProps: $,
				...D
			} = Vo({ date: a, isOutsideMonth: o }, l, s),
			{ hoverProps: h, isHovered: f } = gu({
				...t,
				isDisabled: D.isDisabled || D.isUnavailable,
			}),
			{ focusProps: b, isFocusVisible: p } = ft();
		p && (p = D.isFocused);
		let S = !1,
			A = !1;
		"highlightedRange" in l &&
			l.highlightedRange &&
			((S = H(a, l.highlightedRange.start)),
			(A = H(a, l.highlightedRange.end)));
		const B = $a({
				...t,
				defaultChildren: D.formattedDate,
				defaultClassName: "react-aria-CalendarCell",
				values: {
					date: a,
					isHovered: f,
					isOutsideMonth: o,
					isFocusVisible: p,
					isSelectionStart: S,
					isSelectionEnd: A,
					isToday: c,
					...D,
				},
			}),
			x = {
				"data-focused": D.isFocused || void 0,
				"data-hovered": f || void 0,
				"data-pressed": D.isPressed || void 0,
				"data-unavailable": D.isUnavailable || void 0,
				"data-disabled": D.isDisabled || void 0,
				"data-focus-visible": p || void 0,
				"data-outside-visible-range": D.isOutsideVisibleRange || void 0,
				"data-outside-month": o || void 0,
				"data-selected": D.isSelected || void 0,
				"data-selection-start": S || void 0,
				"data-selection-end": A || void 0,
				"data-invalid": D.isInvalid || void 0,
				"data-today": c || void 0,
			},
			V = ue(t, { global: !0 });
		return j.createElement(
			"td",
			{ ...m, ref: u },
			j.createElement(be.div, { ...ee(V, $, b, h, x, B), ref: s }),
		);
	});
var Zr = {};
Zr = { Empty: "فارغ" };
var Lr = {};
Lr = { Empty: "Изпразни" };
var Kr = {};
Kr = { Empty: "Prázdné" };
var Yr = {};
Yr = { Empty: "Tom" };
var Gr = {};
Gr = { Empty: "Leer" };
var Hr = {};
Hr = { Empty: "Άδειο" };
var Wr = {};
Wr = { Empty: "Empty" };
var _r = {};
_r = { Empty: "Vacío" };
var Jr = {};
Jr = { Empty: "Tühjenda" };
var qr = {};
qr = { Empty: "Tyhjä" };
var Qr = {};
Qr = { Empty: "Vide" };
var Xr = {};
Xr = { Empty: "ריק" };
var en = {};
en = { Empty: "Prazno" };
var an = {};
an = { Empty: "Üres" };
var tn = {};
tn = { Empty: "Vuoto" };
var un = {};
un = { Empty: "空" };
var rn = {};
rn = { Empty: "비어 있음" };
var nn = {};
nn = { Empty: "Tuščias" };
var ln = {};
ln = { Empty: "Tukšs" };
var on = {};
on = { Empty: "Tom" };
var sn = {};
sn = { Empty: "Leeg" };
var dn = {};
dn = { Empty: "Pusty" };
var cn = {};
cn = { Empty: "Vazio" };
var fn = {};
fn = { Empty: "Vazio" };
var mn = {};
mn = { Empty: "Gol" };
var Dn = {};
Dn = { Empty: "Не заполнено" };
var $n = {};
$n = { Empty: "Prázdne" };
var hn = {};
hn = { Empty: "Prazen" };
var yn = {};
yn = { Empty: "Prazno" };
var bn = {};
bn = { Empty: "Tomt" };
var pn = {};
pn = { Empty: "Boş" };
var gn = {};
gn = { Empty: "Пусто" };
var xn = {};
xn = { Empty: "空" };
var vn = {};
vn = { Empty: "空白" };
var Cn = {};
Cn = {
	"ar-AE": Zr,
	"bg-BG": Lr,
	"cs-CZ": Kr,
	"da-DK": Yr,
	"de-DE": Gr,
	"el-GR": Hr,
	"en-US": Wr,
	"es-ES": _r,
	"et-EE": Jr,
	"fi-FI": qr,
	"fr-FR": Qr,
	"he-IL": Xr,
	"hr-HR": en,
	"hu-HU": an,
	"it-IT": tn,
	"ja-JP": un,
	"ko-KR": rn,
	"lt-LT": nn,
	"lv-LV": ln,
	"nb-NO": on,
	"nl-NL": sn,
	"pl-PL": dn,
	"pt-BR": cn,
	"pt-PT": fn,
	"ro-RO": mn,
	"ru-RU": Dn,
	"sk-SK": $n,
	"sl-SI": hn,
	"sr-SP": yn,
	"sv-SE": bn,
	"tr-TR": pn,
	"uk-UA": gn,
	"zh-CN": xn,
	"zh-TW": vn,
};
function Go(e) {
	return e && e.__esModule ? e.default : e;
}
const lu = () => {};
function Ho(e) {
	const a = d.useRef(void 0);
	const {
		value: t,
		textValue: u,
		minValue: n,
		maxValue: r,
		isDisabled: l,
		isReadOnly: i,
		isRequired: o,
		onIncrement: c,
		onIncrementPage: s,
		onDecrement: m,
		onDecrementPage: $,
		onDecrementToMin: D,
		onIncrementToMax: h,
	} = e;
	const f = Ae(Go(Cn), "@react-aria/spinbutton");
	const b = d.useRef(!1);
	const p = d.useCallback(() => {
			clearTimeout(a.current), (b.current = !1);
		}, []),
		S = pe(() => {
			p();
		});
	d.useEffect(() => () => S(), []);
	const A = (F) => {
			if (
				!(
					F.ctrlKey ||
					F.metaKey ||
					F.shiftKey ||
					F.altKey ||
					i ||
					F.nativeEvent.isComposing
				)
			)
				switch (F.key) {
					case "PageUp":
						if (s) {
							F.preventDefault(), s == null || s();
							break;
						}
					case "ArrowUp":
					case "Up":
						c && (F.preventDefault(), c == null || c());
						break;
					case "PageDown":
						if ($) {
							F.preventDefault(), $ == null || $();
							break;
						}
					case "ArrowDown":
					case "Down":
						m && (F.preventDefault(), m == null || m());
						break;
					case "Home":
						D && (F.preventDefault(), D == null || D());
						break;
					case "End":
						h && (F.preventDefault(), h == null || h());
						break;
				}
		},
		B = d.useRef(!1),
		x = () => {
			B.current = !0;
		},
		V = () => {
			B.current = !1;
		},
		I = u === "" ? f.format("Empty") : (u || `${t}`).replace("-", "−");
	d.useEffect(() => {
		B.current && (Ji("assertive"), Na(I, "assertive"));
	}, [I]);
	const T = d.useCallback(() => {
		p();
	}, [p]);
	const N = pe(c ?? lu),
		w = pe(m ?? lu),
		C = pe(() => {
			(r === void 0 || isNaN(r) || t === void 0 || isNaN(t) || t < r) &&
				(N(), E(60));
		}),
		E = pe((F) => {
			S(), (b.current = !0), (a.current = window.setTimeout(C, F));
		}),
		U = pe(() => {
			(n === void 0 || isNaN(n) || t === void 0 || isNaN(t) || t > n) &&
				(w(), z(60));
		}),
		z = pe((F) => {
			S(), (b.current = !0), (a.current = window.setTimeout(U, F));
		});
	const W = (F) => {
			F.preventDefault();
		},
		{ addGlobalListener: P, removeAllGlobalListeners: R } = ml(),
		k = d.useRef(!1),
		[L, y] = d.useState(null);
	d.useEffect(() => {
		L === "touch" ? E(600) : L ? E(400) : L || S();
	}, [L]);
	const [O, Z] = d.useState(null);
	return (
		d.useEffect(() => {
			O === "touch" ? z(600) : O ? z(400) : O || S();
		}, [O]),
		{
			spinButtonProps: {
				role: "spinbutton",
				"aria-valuenow": t !== void 0 && !isNaN(t) ? t : void 0,
				"aria-valuetext": I,
				"aria-valuemin": n,
				"aria-valuemax": r,
				"aria-disabled": l || void 0,
				"aria-readonly": i || void 0,
				"aria-required": o || void 0,
				onKeyDown: A,
				onFocus: x,
				onBlur: V,
			},
			incrementButtonProps: {
				onPressStart: (F) => {
					p(),
						F.pointerType !== "touch"
							? (c == null || c(), y("mouse"))
							: (P(window, "pointercancel", T, { capture: !0 }),
								(k.current = !1),
								y("touch")),
						P(window, "contextmenu", W);
				},
				onPressUp: (F) => {
					p(), F.pointerType === "touch" && (k.current = !0), R(), y(null);
				},
				onPressEnd: (F) => {
					p(),
						F.pointerType === "touch" &&
							!b.current &&
							k.current &&
							(c == null || c()),
						(k.current = !1),
						y(null);
				},
				onFocus: x,
				onBlur: V,
			},
			decrementButtonProps: {
				onPressStart: (F) => {
					p(),
						F.pointerType !== "touch"
							? (m == null || m(), Z("mouse"))
							: (P(window, "pointercancel", T, { capture: !0 }),
								(k.current = !1),
								Z("touch"));
				},
				onPressUp: (F) => {
					p(), F.pointerType === "touch" && (k.current = !0), R(), Z(null);
				},
				onPressEnd: (F) => {
					p(),
						F.pointerType === "touch" &&
							!b.current &&
							k.current &&
							(m == null || m()),
						(k.current = !1),
						Z(null);
				},
				onFocus: x,
				onBlur: V,
			},
		}
	);
}
var Bn = {};
Bn = {
	calendar: "التقويم",
	day: "يوم",
	dayPeriod: "ص/م",
	endDate: "تاريخ الانتهاء",
	era: "العصر",
	hour: "الساعات",
	minute: "الدقائق",
	month: "الشهر",
	second: "الثواني",
	selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
	selectedRangeDescription: (e) =>
		`المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,
	selectedTimeDescription: (e) => `الوقت المحدد: ${e.time}`,
	startDate: "تاريخ البدء",
	timeZoneName: "التوقيت",
	weekday: "اليوم",
	year: "السنة",
};
var En = {};
En = {
	calendar: "Календар",
	day: "ден",
	dayPeriod: "пр.об./сл.об.",
	endDate: "Крайна дата",
	era: "ера",
	hour: "час",
	minute: "минута",
	month: "месец",
	second: "секунда",
	selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Избран диапазон: ${e.startDate} до ${e.endDate}`,
	selectedTimeDescription: (e) => `Избрано време: ${e.time}`,
	startDate: "Начална дата",
	timeZoneName: "часова зона",
	weekday: "ден от седмицата",
	year: "година",
};
var Fn = {};
Fn = {
	calendar: "Kalendář",
	day: "den",
	dayPeriod: "část dne",
	endDate: "Konečné datum",
	era: "letopočet",
	hour: "hodina",
	minute: "minuta",
	month: "měsíc",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Vybrané období: ${e.startDate} až ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybraný čas: ${e.time}`,
	startDate: "Počáteční datum",
	timeZoneName: "časové pásmo",
	weekday: "den v týdnu",
	year: "rok",
};
var Pn = {};
Pn = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "AM/PM",
	endDate: "Slutdato",
	era: "æra",
	hour: "time",
	minute: "minut",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Valgt interval: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidszone",
	weekday: "ugedag",
	year: "år",
};
var An = {};
An = {
	calendar: "Kalender",
	day: "Tag",
	dayPeriod: "Tageshälfte",
	endDate: "Enddatum",
	era: "Epoche",
	hour: "Stunde",
	minute: "Minute",
	month: "Monat",
	second: "Sekunde",
	selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Ausgewählter Bereich: ${e.startDate} bis ${e.endDate}`,
	selectedTimeDescription: (e) => `Ausgewählte Zeit: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "Zeitzone",
	weekday: "Wochentag",
	year: "Jahr",
};
var wn = {};
wn = {
	calendar: "Ημερολόγιο",
	day: "ημέρα",
	dayPeriod: "π.μ./μ.μ.",
	endDate: "Ημερομηνία λήξης",
	era: "περίοδος",
	hour: "ώρα",
	minute: "λεπτό",
	month: "μήνας",
	second: "δευτερόλεπτο",
	selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,
	selectedTimeDescription: (e) => `Επιλεγμένη ώρα: ${e.time}`,
	startDate: "Ημερομηνία έναρξης",
	timeZoneName: "ζώνη ώρας",
	weekday: "καθημερινή",
	year: "έτος",
};
var Rn = {};
Rn = {
	era: "era",
	year: "year",
	month: "month",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	dayPeriod: "AM/PM",
	calendar: "Calendar",
	startDate: "Start Date",
	endDate: "End Date",
	weekday: "day of the week",
	timeZoneName: "time zone",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Selected Range: ${e.startDate} to ${e.endDate}`,
	selectedTimeDescription: (e) => `Selected Time: ${e.time}`,
};
var Sn = {};
Sn = {
	calendar: "Calendario",
	day: "día",
	dayPeriod: "a. m./p. m.",
	endDate: "Fecha final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mes",
	second: "segundo",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Rango seleccionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
	startDate: "Fecha de inicio",
	timeZoneName: "zona horaria",
	weekday: "día de la semana",
	year: "año",
};
var kn = {};
kn = {
	calendar: "Kalender",
	day: "päev",
	dayPeriod: "enne/pärast lõunat",
	endDate: "Lõppkuupäev",
	era: "ajastu",
	hour: "tund",
	minute: "minut",
	month: "kuu",
	second: "sekund",
	selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
	selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
	startDate: "Alguskuupäev",
	timeZoneName: "ajavöönd",
	weekday: "nädalapäev",
	year: "aasta",
};
var Mn = {};
Mn = {
	calendar: "Kalenteri",
	day: "päivä",
	dayPeriod: "vuorokaudenaika",
	endDate: "Päättymispäivä",
	era: "aikakausi",
	hour: "tunti",
	minute: "minuutti",
	month: "kuukausi",
	second: "sekunti",
	selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Valittu aikaväli: ${e.startDate} – ${e.endDate}`,
	selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
	startDate: "Alkamispäivä",
	timeZoneName: "aikavyöhyke",
	weekday: "viikonpäivä",
	year: "vuosi",
};
var Vn = {};
Vn = {
	calendar: "Calendrier",
	day: "jour",
	dayPeriod: "cadran",
	endDate: "Date de fin",
	era: "ère",
	hour: "heure",
	minute: "minute",
	month: "mois",
	second: "seconde",
	selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
	selectedRangeDescription: (e) =>
		`Plage sélectionnée : ${e.startDate} au ${e.endDate}`,
	selectedTimeDescription: (e) => `Heure choisie : ${e.time}`,
	startDate: "Date de début",
	timeZoneName: "fuseau horaire",
	weekday: "jour de la semaine",
	year: "année",
};
var In = {};
In = {
	calendar: "לוח שנה",
	day: "יום",
	dayPeriod: "לפנה״צ/אחה״צ",
	endDate: "תאריך סיום",
	era: "תקופה",
	hour: "שעה",
	minute: "דקה",
	month: "חודש",
	second: "שנייה",
	selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
	selectedRangeDescription: (e) => `טווח נבחר: ${e.startDate} עד ${e.endDate}`,
	selectedTimeDescription: (e) => `זמן נבחר: ${e.time}`,
	startDate: "תאריך התחלה",
	timeZoneName: "אזור זמן",
	weekday: "יום בשבוע",
	year: "שנה",
};
var Tn = {};
Tn = {
	calendar: "Kalendar",
	day: "dan",
	dayPeriod: "AM/PM",
	endDate: "Datum završetka",
	era: "era",
	hour: "sat",
	minute: "minuta",
	month: "mjesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Odabrani raspon: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "vremenska zona",
	weekday: "dan u tjednu",
	year: "godina",
};
var Nn = {};
Nn = {
	calendar: "Naptár",
	day: "nap",
	dayPeriod: "napszak",
	endDate: "Befejező dátum",
	era: "éra",
	hour: "óra",
	minute: "perc",
	month: "hónap",
	second: "másodperc",
	selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Kijelölt tartomány: ${e.startDate}–${e.endDate}`,
	selectedTimeDescription: (e) => `Kijelölt idő: ${e.time}`,
	startDate: "Kezdő dátum",
	timeZoneName: "időzóna",
	weekday: "hét napja",
	year: "év",
};
var On = {};
On = {
	calendar: "Calendario",
	day: "giorno",
	dayPeriod: "AM/PM",
	endDate: "Data finale",
	era: "era",
	hour: "ora",
	minute: "minuto",
	month: "mese",
	second: "secondo",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
	startDate: "Data iniziale",
	timeZoneName: "fuso orario",
	weekday: "giorno della settimana",
	year: "anno",
};
var jn = {};
jn = {
	calendar: "カレンダー",
	day: "日",
	dayPeriod: "午前/午後",
	endDate: "終了日",
	era: "時代",
	hour: "時",
	minute: "分",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
	selectedRangeDescription: (e) =>
		`選択範囲 : ${e.startDate} から ${e.endDate}`,
	selectedTimeDescription: (e) => `選択した時間 : ${e.time}`,
	startDate: "開始日",
	timeZoneName: "タイムゾーン",
	weekday: "曜日",
	year: "年",
};
var Un = {};
Un = {
	calendar: "달력",
	day: "일",
	dayPeriod: "오전/오후",
	endDate: "종료일",
	era: "연호",
	hour: "시",
	minute: "분",
	month: "월",
	second: "초",
	selectedDateDescription: (e) => `선택 일자: ${e.date}`,
	selectedRangeDescription: (e) => `선택 범위: ${e.startDate} ~ ${e.endDate}`,
	selectedTimeDescription: (e) => `선택 시간: ${e.time}`,
	startDate: "시작일",
	timeZoneName: "시간대",
	weekday: "요일",
	year: "년",
};
var zn = {};
zn = {
	calendar: "Kalendorius",
	day: "diena",
	dayPeriod: "iki pietų / po pietų",
	endDate: "Pabaigos data",
	era: "era",
	hour: "valanda",
	minute: "minutė",
	month: "mėnuo",
	second: "sekundė",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
	selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
	startDate: "Pradžios data",
	timeZoneName: "laiko juosta",
	weekday: "savaitės diena",
	year: "metai",
};
var Zn = {};
Zn = {
	calendar: "Kalendārs",
	day: "diena",
	dayPeriod: "priekšpusdienā/pēcpusdienā",
	endDate: "Beigu datums",
	era: "ēra",
	hour: "stundas",
	minute: "minūtes",
	month: "mēnesis",
	second: "sekundes",
	selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,
	selectedTimeDescription: (e) => `Atlasītais laiks: ${e.time}`,
	startDate: "Sākuma datums",
	timeZoneName: "laika josla",
	weekday: "nedēļas diena",
	year: "gads",
};
var Ln = {};
Ln = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Sluttdato",
	era: "tidsalder",
	hour: "time",
	minute: "minutt",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Valgt område: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidssone",
	weekday: "ukedag",
	year: "år",
};
var Kn = {};
Kn = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Einddatum",
	era: "tijdperk",
	hour: "uur",
	minute: "minuut",
	month: "maand",
	second: "seconde",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
	selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tijdzone",
	weekday: "dag van de week",
	year: "jaar",
};
var Yn = {};
Yn = {
	calendar: "Kalendarz",
	day: "dzień",
	dayPeriod: "rano / po południu / wieczorem",
	endDate: "Data końcowa",
	era: "era",
	hour: "godzina",
	minute: "minuta",
	month: "miesiąc",
	second: "sekunda",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Wybrany zakres: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
	startDate: "Data początkowa",
	timeZoneName: "strefa czasowa",
	weekday: "dzień tygodnia",
	year: "rok",
};
var Gn = {};
Gn = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "AM/PM",
	endDate: "Data final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data inicial",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano",
};
var Hn = {};
Hn = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "am/pm",
	endDate: "Data de Término",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data de Início",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano",
};
var Wn = {};
Wn = {
	calendar: "Calendar",
	day: "zi",
	dayPeriod: "a.m/p.m.",
	endDate: "Dată final",
	era: "eră",
	hour: "oră",
	minute: "minut",
	month: "lună",
	second: "secundă",
	selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Interval selectat: de la ${e.startDate} până la ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selectată: ${e.time}`,
	startDate: "Dată început",
	timeZoneName: "fus orar",
	weekday: "ziua din săptămână",
	year: "an",
};
var _n = {};
_n = {
	calendar: "Календарь",
	day: "день",
	dayPeriod: "AM/PM",
	endDate: "Дата окончания",
	era: "эра",
	hour: "час",
	minute: "минута",
	month: "месяц",
	second: "секунда",
	selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,
	selectedTimeDescription: (e) => `Выбранное время: ${e.time}`,
	startDate: "Дата начала",
	timeZoneName: "часовой пояс",
	weekday: "день недели",
	year: "год",
};
var Jn = {};
Jn = {
	calendar: "Kalendár",
	day: "deň",
	dayPeriod: "AM/PM",
	endDate: "Dátum ukončenia",
	era: "letopočet",
	hour: "hodina",
	minute: "minúta",
	month: "mesiac",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Vybratý rozsah: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybratý čas: ${e.time}`,
	startDate: "Dátum začatia",
	timeZoneName: "časové pásmo",
	weekday: "deň týždňa",
	year: "rok",
};
var qn = {};
qn = {
	calendar: "Koledar",
	day: "dan",
	dayPeriod: "dop/pop",
	endDate: "Datum konca",
	era: "doba",
	hour: "ura",
	minute: "minuta",
	month: "mesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Izbrano območje: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izbrani čas: ${e.time}`,
	startDate: "Datum začetka",
	timeZoneName: "časovni pas",
	weekday: "dan v tednu",
	year: "leto",
};
var Qn = {};
Qn = {
	calendar: "Kalendar",
	day: "дан",
	dayPeriod: "пре подне/по подне",
	endDate: "Datum završetka",
	era: "ера",
	hour: "сат",
	minute: "минут",
	month: "месец",
	second: "секунд",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "временска зона",
	weekday: "дан у недељи",
	year: "година",
};
var Xn = {};
Xn = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "fm/em",
	endDate: "Slutdatum",
	era: "era",
	hour: "timme",
	minute: "minut",
	month: "månad",
	second: "sekund",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Valt intervall: ${e.startDate} till ${e.endDate}`,
	selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tidszon",
	weekday: "veckodag",
	year: "år",
};
var ei = {};
ei = {
	calendar: "Takvim",
	day: "gün",
	dayPeriod: "ÖÖ/ÖS",
	endDate: "Bitiş Tarihi",
	era: "çağ",
	hour: "saat",
	minute: "dakika",
	month: "ay",
	second: "saniye",
	selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Seçilen Aralık: ${e.startDate} - ${e.endDate}`,
	selectedTimeDescription: (e) => `Seçilen Zaman: ${e.time}`,
	startDate: "Başlangıç Tarihi",
	timeZoneName: "saat dilimi",
	weekday: "haftanın günü",
	year: "yıl",
};
var ai = {};
ai = {
	calendar: "Календар",
	day: "день",
	dayPeriod: "дп/пп",
	endDate: "Дата завершення",
	era: "ера",
	hour: "година",
	minute: "хвилина",
	month: "місяць",
	second: "секунда",
	selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
	selectedRangeDescription: (e) =>
		`Вибраний діапазон: ${e.startDate} — ${e.endDate}`,
	selectedTimeDescription: (e) => `Вибраний час: ${e.time}`,
	startDate: "Дата початку",
	timeZoneName: "часовий пояс",
	weekday: "день тижня",
	year: "рік",
};
var ti = {};
ti = {
	calendar: "日历",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "结束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `选定的日期：${e.date}`,
	selectedRangeDescription: (e) => `选定的范围：${e.startDate} 至 ${e.endDate}`,
	selectedTimeDescription: (e) => `选定的时间：${e.time}`,
	startDate: "开始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年",
};
var ui = {};
ui = {
	calendar: "日曆",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "結束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `選定的日期：${e.date}`,
	selectedRangeDescription: (e) => `選定的範圍：${e.startDate} 至 ${e.endDate}`,
	selectedTimeDescription: (e) => `選定的時間：${e.time}`,
	startDate: "開始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年",
};
var va = {};
va = {
	"ar-AE": Bn,
	"bg-BG": En,
	"cs-CZ": Fn,
	"da-DK": Pn,
	"de-DE": An,
	"el-GR": wn,
	"en-US": Rn,
	"es-ES": Sn,
	"et-EE": kn,
	"fi-FI": Mn,
	"fr-FR": Vn,
	"he-IL": In,
	"hr-HR": Tn,
	"hu-HU": Nn,
	"it-IT": On,
	"ja-JP": jn,
	"ko-KR": Un,
	"lt-LT": zn,
	"lv-LV": Zn,
	"nb-NO": Ln,
	"nl-NL": Kn,
	"pl-PL": Yn,
	"pt-BR": Gn,
	"pt-PT": Hn,
	"ro-RO": Wn,
	"ru-RU": _n,
	"sk-SK": Jn,
	"sl-SI": qn,
	"sr-SP": Qn,
	"sv-SE": Xn,
	"tr-TR": ei,
	"uk-UA": ai,
	"zh-CN": ti,
	"zh-TW": ui,
};
function ri(e, a, t) {
	const { direction: u } = oe(),
		n = d.useMemo(() => ct(a), [a]),
		r = (o) => {
			if (
				Ze(o.currentTarget, Oe(o)) &&
				(o.altKey &&
					(o.key === "ArrowDown" || o.key === "ArrowUp") &&
					"setOpen" in e &&
					(o.preventDefault(), o.stopPropagation(), e.setOpen(!0)),
				!t)
			)
				switch (o.key) {
					case "ArrowLeft":
						if ((o.preventDefault(), o.stopPropagation(), u === "rtl")) {
							if (a.current) {
								const c = Oe(o),
									s = ou(a.current, c.getBoundingClientRect().left, -1);
								s && s.focus();
							}
						} else n.focusPrevious();
						break;
					case "ArrowRight":
						if ((o.preventDefault(), o.stopPropagation(), u === "rtl")) {
							if (a.current) {
								const c = Oe(o),
									s = ou(a.current, c.getBoundingClientRect().left, 1);
								s && s.focus();
							}
						} else n.focusNext();
						break;
				}
		},
		l = () => {
			if (!a.current) return;
			let o = window.event ? Oe(window.event) : null,
				c = bu(a.current, { tabbable: !0 });
			if ((o && ((c.currentNode = o), (o = c.previousNode())), !o)) {
				let s;
				do (s = c.lastChild()), s && (o = s);
				while (s);
			}
			for (; o != null && o.hasAttribute("data-placeholder"); ) {
				const s = c.previousNode();
				if (s && s.hasAttribute("data-placeholder")) o = s;
				else break;
			}
			o && o.focus();
		},
		{ pressProps: i } = $u({
			preventFocusOnPress: !0,
			allowTextSelectionOnPress: !0,
			onPressStart(o) {
				o.pointerType === "mouse" && l();
			},
			onPress(o) {
				(o.pointerType === "touch" || o.pointerType === "pen") && l();
			},
		});
	return ee(i, { onKeyDown: r });
}
function ou(e, a, t) {
	let u = bu(e, { tabbable: !0 }),
		n = u.nextNode(),
		r = null,
		l = 1 / 0;
	for (; n; ) {
		const o = n.getBoundingClientRect().left - a,
			c = Math.abs(o);
		Math.sign(o) === t && c < l && ((r = n), (l = c)), (n = u.nextNode());
	}
	return r;
}
function Wo(e) {
	return e && e.__esModule ? e.default : e;
}
const ni = new WeakMap(),
	ta = "__reactAriaDateFieldRole",
	ii = "__reactAriaDateFieldFocusManager";
function _o(e, a, t) {
	var N;
	const {
			isInvalid: u,
			validationErrors: n,
			validationDetails: r,
		} = a.displayValidation,
		{
			labelProps: l,
			fieldProps: i,
			descriptionProps: o,
			errorMessageProps: c,
		} = vu({
			...e,
			labelElementType: "span",
			isInvalid: u,
			errorMessage: e.errorMessage || n,
		}),
		s = d.useRef(null),
		{ focusWithinProps: m } = xu({
			...e,
			onFocusWithin(w) {
				var C;
				(s.current = a.value), (C = e.onFocus) == null || C.call(e, w);
			},
			onBlurWithin: (w) => {
				var C;
				a.confirmPlaceholder(),
					a.value !== s.current && a.commitValidation(),
					(C = e.onBlur) == null || C.call(e, w);
			},
			onFocusWithinChange: e.onFocusChange,
		}),
		$ = Ae(Wo(va), "@react-aria/datepicker"),
		D =
			a.maxGranularity === "hour"
				? "selectedTimeDescription"
				: "selectedDateDescription",
		h = a.maxGranularity === "hour" ? "time" : "date",
		f = a.value ? $.format(D, { [h]: a.formatValue({ month: "long" }) }) : "",
		b = dt(f),
		p =
			e[ta] === "presentation"
				? i["aria-describedby"]
				: [b["aria-describedby"], i["aria-describedby"]]
						.filter(Boolean)
						.join(" ") || void 0,
		S = e[ii],
		A = d.useMemo(() => S || ct(t), [S, t]),
		B = ri(a, t, e[ta] === "presentation");
	ni.set(a, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy:
			[l.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
		ariaDescribedBy: p,
		focusManager: A,
	});
	let x = d.useRef(e.autoFocus),
		V;
	e[ta] === "presentation"
		? (V = { role: "presentation" })
		: (V = ee(i, {
				role: "group",
				"aria-disabled": e.isDisabled || void 0,
				"aria-describedby": p,
			})),
		d.useEffect(() => {
			x.current && A.focusFirst(), (x.current = !1);
		}, [A]),
		hl(e.inputRef, a.defaultValue, a.setValue),
		yl(
			{
				...e,
				focus() {
					A.focusFirst();
				},
			},
			a,
			e.inputRef,
		);
	const I = {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: ((N = a.value) == null ? void 0 : N.toString()) || "",
		disabled: e.isDisabled,
	};
	e.validationBehavior === "native" &&
		((I.type = "text"),
		(I.hidden = !0),
		(I.required = e.isRequired),
		(I.onChange = () => {}));
	const T = ue(e);
	return {
		labelProps: {
			...l,
			onClick: () => {
				A.focusFirst();
			},
		},
		fieldProps: ee(T, V, B, m, {
			onKeyDown(w) {
				e.onKeyDown && e.onKeyDown(w);
			},
			onKeyUp(w) {
				e.onKeyUp && e.onKeyUp(w);
			},
			style: { unicodeBidi: "isolate" },
		}),
		inputProps: I,
		descriptionProps: o,
		errorMessageProps: c,
		isInvalid: u,
		validationErrors: n,
		validationDetails: r,
	};
}
function Jo(e) {
	return e && e.__esModule ? e.default : e;
}
function qo() {
	const { locale: e } = oe(),
		a = ol(Jo(va), "@react-aria/datepicker");
	return d.useMemo(() => {
		try {
			return new Intl.DisplayNames(e, { type: "dateTimeField" });
		} catch {
			return new Qo(e, a);
		}
	}, [e, a]);
}
class Qo {
	constructor(a, t) {
		(this.locale = a), (this.dictionary = t);
	}
	of(a) {
		return this.dictionary.getStringForLocale(a, this.locale);
	}
}
function Xo(e, a, t) {
	let u = d.useRef(""),
		{ locale: n, direction: r } = oe(),
		l = qo(),
		{
			ariaLabel: i,
			ariaLabelledBy: o,
			ariaDescribedBy: c,
			focusManager: s,
		} = ni.get(a),
		m = e.isPlaceholder ? "" : e.text,
		$ = d.useMemo(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
		D = le({ month: "long", timeZone: $.timeZone }),
		h = le({ hour: "numeric", hour12: $.hour12, timeZone: $.timeZone });
	if (e.type === "month" && !e.isPlaceholder) {
		const y = D.format(a.dateValue);
		m = y !== m ? `${m} – ${y}` : y;
	} else e.type === "hour" && !e.isPlaceholder && (m = h.format(a.dateValue));
	const { spinButtonProps: f } = Ho({
			value: e.value ?? void 0,
			textValue: m,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: a.isDisabled,
			isReadOnly: a.isReadOnly || !e.isEditable,
			isRequired: a.isRequired,
			onIncrement: () => {
				(u.current = ""), a.increment(e.type);
			},
			onDecrement: () => {
				(u.current = ""), a.decrement(e.type);
			},
			onIncrementPage: () => {
				(u.current = ""), a.incrementPage(e.type);
			},
			onDecrementPage: () => {
				(u.current = ""), a.decrementPage(e.type);
			},
			onIncrementToMax: () => {
				(u.current = ""), a.incrementToMax(e.type);
			},
			onDecrementToMin: () => {
				(u.current = ""), a.decrementToMin(e.type);
			},
		}),
		b = d.useMemo(() => new Pu(n, { maximumFractionDigits: 0 }), [n]),
		p = () => {
			if (
				(e.text === e.placeholder && s.focusPrevious(),
				b.isValidPartialNumber(e.text) && !a.isReadOnly && !e.isPlaceholder)
			) {
				let y = e.text.slice(0, -1),
					O = b.parse(y);
				(y = O === 0 ? "" : y),
					y.length === 0 || O === 0
						? a.clearSegment(e.type)
						: a.setSegment(e.type, O),
					(u.current = y);
			} else
				(e.type === "dayPeriod" || e.type === "era") && a.clearSegment(e.type);
		},
		S = (y) => {
			if (
				(y.key === "a" && ($l() ? y.metaKey : y.ctrlKey) && y.preventDefault(),
				!(y.ctrlKey || y.metaKey || y.shiftKey || y.altKey))
			)
				switch (y.key) {
					case "Backspace":
					case "Delete":
						y.preventDefault(), y.stopPropagation(), p();
						break;
				}
		},
		{ startsWith: A } = bl({ sensitivity: "base" }),
		B = le({ hour: "numeric", hour12: !0 }),
		x = d.useMemo(() => {
			const y = new Date();
			return (
				y.setHours(0),
				B.formatToParts(y).find((O) => O.type === "dayPeriod").value
			);
		}, [B]),
		V = d.useMemo(() => {
			const y = new Date();
			return (
				y.setHours(12),
				B.formatToParts(y).find((O) => O.type === "dayPeriod").value
			);
		}, [B]),
		I = le({ year: "numeric", era: "narrow", timeZone: "UTC" }),
		T = d.useMemo(() => {
			if (e.type !== "era") return [];
			const y = K(new J(1, 1, 1), a.calendar),
				O = a.calendar.getEras().map((F) => {
					const v = y.set({ year: 1, month: 1, day: 1, era: F }).toDate("UTC"),
						Y = I.formatToParts(v).find((g) => g.type === "era").value;
					return { era: F, formatted: Y };
				}),
				Z = es(O.map((F) => F.formatted));
			if (Z) for (const F of O) F.formatted = F.formatted.slice(Z);
			return O;
		}, [I, a.calendar, e.type]),
		N = (y) => {
			if (a.isDisabled || a.isReadOnly) return;
			const O = u.current + y;
			switch (e.type) {
				case "dayPeriod":
					if (A(x, y)) a.setSegment("dayPeriod", 0);
					else if (A(V, y)) a.setSegment("dayPeriod", 1);
					else break;
					s.focusNext();
					break;
				case "era": {
					const Z = T.find((F) => A(F.formatted, y));
					Z && (a.setSegment("era", Z.era), s.focusNext());
					break;
				}
				case "day":
				case "hour":
				case "minute":
				case "second":
				case "month":
				case "year": {
					if (!b.isValidPartialNumber(O)) return;
					let Z = b.parse(O),
						F = Z;
					if (
						(e.maxValue !== void 0 && Z > e.maxValue && (F = b.parse(y)),
						isNaN(Z))
					)
						return;
					a.setSegment(e.type, F),
						e.maxValue !== void 0 &&
						(+(Z + "0") > e.maxValue || O.length >= String(e.maxValue).length)
							? ((u.current = ""), s.focusNext())
							: (u.current = O);
					break;
				}
			}
		},
		w = () => {
			(u.current = ""),
				t.current && hu(t.current, { containingElement: yu(t.current) });
			const y = window.getSelection();
			y == null || y.collapse(t.current);
		},
		C = d.useRef(typeof document < "u" ? document : null);
	Se(C, "selectionchange", () => {
		const y = window.getSelection();
		y != null &&
			y.anchorNode &&
			Ze(t.current, y == null ? void 0 : y.anchorNode) &&
			y.collapse(t.current);
	});
	const E = d.useRef("");
	Se(t, "beforeinput", (y) => {
		if (t.current)
			switch ((y.preventDefault(), y.inputType)) {
				case "deleteContentBackward":
				case "deleteContentForward":
					b.isValidPartialNumber(e.text) && !a.isReadOnly && p();
					break;
				case "insertCompositionText":
					(E.current = t.current.textContent),
						(t.current.textContent = t.current.textContent);
					break;
				default:
					y.data != null && N(y.data);
					break;
			}
	}),
		Se(t, "input", (y) => {
			const { inputType: O, data: Z } = y;
			switch (O) {
				case "insertCompositionText":
					t.current && (t.current.textContent = E.current),
						Z != null && (A(x, Z) || A(V, Z)) && N(Z);
					break;
			}
		}),
		Qi(() => {
			const y = t.current;
			return () => {
				pu() === y && (s.focusPrevious() || s.focusNext());
			};
		}, [t, s]);
	const U =
			Dl() || e.type === "timeZoneName"
				? {
						role: "textbox",
						"aria-valuemax": null,
						"aria-valuemin": null,
						"aria-valuetext": null,
						"aria-valuenow": null,
					}
				: {},
		z = d.useMemo(() => a.segments.find((y) => y.isEditable), [a.segments]);
	e !== z && !a.isInvalid && (c = void 0);
	const W = ja(),
		P = !a.isDisabled && !a.isReadOnly && e.isEditable,
		R = e.type === "literal" ? "" : l.of(e.type),
		k = st({
			"aria-label": `${R}${i ? `, ${i}` : ""}${o ? ", " : ""}`,
			"aria-labelledby": o,
		});
	if (e.type === "literal") return { segmentProps: { "aria-hidden": !0 } };
	const L = { caretColor: "transparent" };
	if (r === "rtl") {
		L.unicodeBidi = "embed";
		const y = $[e.type];
		(y === "numeric" || y === "2-digit") && (L.direction = "ltr");
	}
	return {
		segmentProps: ee(f, k, {
			id: W,
			...U,
			"aria-invalid": a.isInvalid ? "true" : void 0,
			"aria-describedby": c,
			"aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
			"data-placeholder": e.isPlaceholder || void 0,
			contentEditable: P,
			suppressContentEditableWarning: P,
			spellCheck: P ? "false" : void 0,
			autoCorrect: P ? "off" : void 0,
			[parseInt(j.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: P
				? "next"
				: void 0,
			inputMode:
				a.isDisabled || e.type === "dayPeriod" || e.type === "era" || !P
					? void 0
					: "numeric",
			tabIndex: a.isDisabled ? void 0 : 0,
			onKeyDown: S,
			onFocus: w,
			style: L,
			onPointerDown(y) {
				y.stopPropagation();
			},
			onMouseDown(y) {
				y.stopPropagation();
			},
		}),
	};
}
function es(e) {
	e.sort();
	const a = e[0],
		t = e[e.length - 1];
	for (let u = 0; u < a.length; u++) if (a[u] !== t[u]) return u;
	return 0;
}
var li = {};
li = {
	rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
	rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
	rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
	unavailableDate: "البيانات المحددة غير متاحة.",
};
var oi = {};
oi = {
	rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
	rangeReversed: "Началната дата трябва да е преди крайната.",
	rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
	unavailableDate: "Избраната дата не е налична.",
};
var si = {};
si = {
	rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
	rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
	rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
	unavailableDate: "Vybrané datum není k dispozici.",
};
var di = {};
di = {
	rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen skal være før slutdatoen.",
	rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
	unavailableDate: "Den valgte dato er ikke tilgængelig.",
};
var ci = {};
ci = {
	rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
	rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
	rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
	unavailableDate: "Das ausgewählte Datum ist nicht verfügbar.",
};
var fi = {};
fi = {
	rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
	rangeReversed:
		"Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
	rangeUnderflow: (e) =>
		`Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
	unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.",
};
var mi = {};
mi = {
	rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
	rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
	rangeReversed: "Start date must be before end date.",
	unavailableDate: "Selected date unavailable.",
};
var Di = {};
Di = {
	rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
	rangeReversed:
		"La fecha de inicio debe ser anterior a la fecha de finalización.",
	rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
	unavailableDate: "Fecha seleccionada no disponible.",
};
var $i = {};
$i = {
	rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
	rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
	rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
	unavailableDate: "Valitud kuupäev pole saadaval.",
};
var hi = {};
hi = {
	rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
	rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
	rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
	unavailableDate: "Valittu päivämäärä ei ole käytettävissä.",
};
var yi = {};
yi = {
	rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
	rangeReversed: "La date de début doit être antérieure à la date de fin.",
	rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
	unavailableDate: "La date sélectionnée n’est pas disponible.",
};
var bi = {};
bi = {
	rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
	rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
	rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
	unavailableDate: "התאריך הנבחר אינו זמין.",
};
var pi = {};
pi = {
	rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
	rangeReversed: "Datum početka mora biti prije datuma završetka.",
	rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
	unavailableDate: "Odabrani datum nije dostupan.",
};
var gi = {};
gi = {
	rangeOverflow: (e) =>
		`Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
	rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
	rangeUnderflow: (e) =>
		`Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
	unavailableDate: "A kiválasztott dátum nem érhető el.",
};
var xi = {};
xi = {
	rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
	rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
	rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
	unavailableDate: "Data selezionata non disponibile.",
};
var vi = {};
vi = {
	rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
	rangeReversed: "開始日は終了日より前にする必要があります。",
	rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
	unavailableDate: "選択した日付は使用できません。",
};
var Ci = {};
Ci = {
	rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
	rangeReversed: "시작일은 종료일 이전이어야 합니다.",
	rangeUnderflow: (e) => `값은 ${e.minValue} 이후여야 합니다.`,
	unavailableDate: "선택한 날짜를 사용할 수 없습니다.",
};
var Bi = {};
Bi = {
	rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
	rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
	rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
	unavailableDate: "Pasirinkta data nepasiekiama.",
};
var Ei = {};
Ei = {
	rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
	rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
	rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
	unavailableDate: "Atlasītais datums nav pieejams.",
};
var Fi = {};
Fi = {
	rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen må være før sluttdatoen.",
	rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
	unavailableDate: "Valgt dato utilgjengelig.",
};
var Pi = {};
Pi = {
	rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
	rangeReversed: "De startdatum moet voor de einddatum liggen.",
	rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
	unavailableDate: "Geselecteerde datum niet beschikbaar.",
};
var Ai = {};
Ai = {
	rangeOverflow: (e) =>
		`Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
	rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
	rangeUnderflow: (e) =>
		`Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
	unavailableDate: "Wybrana data jest niedostępna.",
};
var wi = {};
wi = {
	rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data inicial deve ser anterior à data final.",
	rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível.",
};
var Ri = {};
Ri = {
	rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data de início deve ser anterior à data de fim.",
	rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível.",
};
var Si = {};
Si = {
	rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
	rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
	rangeUnderflow: (e) =>
		`Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
	unavailableDate: "Data selectată nu este disponibilă.",
};
var ki = {};
ki = {
	rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
	rangeReversed: "Дата начала должна предшествовать дате окончания.",
	rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
	unavailableDate: "Выбранная дата недоступна.",
};
var Mi = {};
Mi = {
	rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
	rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
	rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
	unavailableDate: "Vybratý dátum je nedostupný.",
};
var Vi = {};
Vi = {
	rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
	rangeReversed: "Začetni datum mora biti pred končnim datumom.",
	rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
	unavailableDate: "Izbrani datum ni na voljo.",
};
var Ii = {};
Ii = {
	rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
	rangeReversed: "Datum početka mora biti pre datuma završetka.",
	rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
	unavailableDate: "Izabrani datum nije dostupan.",
};
var Ti = {};
Ti = {
	rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
	rangeReversed: "Startdatumet måste vara före slutdatumet.",
	rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
	unavailableDate: "Det valda datumet är inte tillgängligt.",
};
var Ni = {};
Ni = {
	rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
	rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
	rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
	unavailableDate: "Seçilen tarih kullanılamıyor.",
};
var Oi = {};
Oi = {
	rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
	rangeReversed: "Дата початку має передувати даті завершення.",
	rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
	unavailableDate: "Вибрана дата недоступна.",
};
var ji = {};
ji = {
	rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
	rangeReversed: "开始日期必须早于结束日期。",
	rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
	unavailableDate: "所选日期不可用。",
};
var Ui = {};
Ui = {
	rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
	rangeReversed: "開始日期必須在結束日期之前。",
	rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
	unavailableDate: "所選日期無法使用。",
};
var zi = {};
zi = {
	"ar-AE": li,
	"bg-BG": oi,
	"cs-CZ": si,
	"da-DK": di,
	"de-DE": ci,
	"el-GR": fi,
	"en-US": mi,
	"es-ES": Di,
	"et-EE": $i,
	"fi-FI": hi,
	"fr-FR": yi,
	"he-IL": bi,
	"hr-HR": pi,
	"hu-HU": gi,
	"it-IT": xi,
	"ja-JP": vi,
	"ko-KR": Ci,
	"lt-LT": Bi,
	"lv-LV": Ei,
	"nb-NO": Fi,
	"nl-NL": Pi,
	"pl-PL": Ai,
	"pt-BR": wi,
	"pt-PT": Ri,
	"ro-RO": Si,
	"ru-RU": ki,
	"sk-SK": Mi,
	"sl-SI": Vi,
	"sr-SP": Ii,
	"sv-SE": Ti,
	"tr-TR": Ni,
	"uk-UA": Oi,
	"zh-CN": ji,
	"zh-TW": Ui,
};
function as(e) {
	return e && e.__esModule ? e.default : e;
}
const Zi = new ha(as(zi));
function Li() {
	let e =
		(typeof navigator < "u" &&
			(navigator.language || navigator.userLanguage)) ||
		"en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return e;
}
function et(e, a, t, u, n) {
	const r = e != null && t != null && e.compare(t) > 0,
		l = e != null && a != null && e.compare(a) < 0,
		i = (e != null && (u == null ? void 0 : u(e))) || !1,
		o = r || l || i,
		c = [];
	if (o) {
		const s = Li(),
			m = ha.getGlobalDictionaryForPackage("@react-stately/datepicker") || Zi,
			$ = new sl(s, m),
			D = new ie(s, Ee({}, n)),
			h = D.resolvedOptions().timeZone;
		l &&
			a != null &&
			c.push($.format("rangeUnderflow", { minValue: D.format(a.toDate(h)) })),
			r &&
				t != null &&
				c.push($.format("rangeOverflow", { maxValue: D.format(t.toDate(h)) })),
			i && c.push($.format("unavailableDate"));
	}
	return {
		isInvalid: o,
		validationErrors: c,
		validationDetails: {
			badInput: i,
			customError: !1,
			patternMismatch: !1,
			rangeOverflow: r,
			rangeUnderflow: l,
			stepMismatch: !1,
			tooLong: !1,
			tooShort: !1,
			typeMismatch: !1,
			valueMissing: !1,
			valid: !o,
		},
	};
}
function ts(e, a, t, u, n) {
	let r = et((e == null ? void 0 : e.start) ?? null, a, t, u, n),
		l = et((e == null ? void 0 : e.end) ?? null, a, t, u, n),
		i = ua(r, l);
	if (
		(e == null ? void 0 : e.end) != null &&
		e.start != null &&
		e.end.compare(e.start) < 0
	) {
		const o =
			ha.getGlobalDictionaryForPackage("@react-stately/datepicker") || Zi;
		i = ua(i, {
			isInvalid: !0,
			validationErrors: [o.getStringForLocale("rangeReversed", Li())],
			validationDetails: {
				...pl,
				rangeUnderflow: !0,
				rangeOverflow: !0,
				valid: !1,
			},
		});
	}
	return i;
}
const us = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	},
	rs = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	};
function Ee(e, a) {
	e = { ...(a.shouldForceLeadingZeros ? rs : us), ...e };
	let u = a.granularity || "minute",
		n = Object.keys(e),
		r = n.indexOf(a.maxGranularity ?? "year");
	r < 0 && (r = 0);
	let l = n.indexOf(u);
	if ((l < 0 && (l = 2), r > l))
		throw new Error("maxGranularity must be greater than granularity");
	const i = n.slice(r, l + 1).reduce((c, s) => ((c[s] = e[s]), c), {});
	return (
		a.hourCycle != null && (i.hour12 = a.hourCycle === 12),
		(i.timeZone = a.timeZone || "UTC"),
		(u === "hour" || u === "minute" || u === "second") &&
			a.timeZone &&
			!a.hideTimeZone &&
			(i.timeZoneName = "short"),
		a.showEra && r === 0 && (i.era = "short"),
		i
	);
}
function qe(e) {
	return e && "hour" in e ? e : new Ya();
}
function Ki(e, a) {
	if (e === null) return null;
	if (e) return K(e, a);
}
function ns(e, a, t, u) {
	if (e) return Ki(e, t);
	const n = K(
		cr(u ?? ht()).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
		t,
	);
	return a === "year" || a === "month" || a === "day" ? X(n) : u ? n : me(n);
}
function Yi(e, a) {
	const t = e && "timeZone" in e ? e.timeZone : void 0,
		u = e && "minute" in e ? "minute" : "day";
	if (e && a && !(a in e))
		throw new Error("Invalid granularity " + a + " for value " + e.toString());
	const [n, r] = d.useState([u, t]);
	e && (n[0] !== u || n[1] !== t) && r([u, t]), a || (a = e ? u : n[0]);
	const l = e ? t : n[1];
	return [a, l];
}
const is = new ha(
	{
		ach: { year: "mwaka", month: "dwe", day: "nino" },
		af: { year: "jjjj", month: "mm", day: "dd" },
		am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
		an: { year: "aaaa", month: "mm", day: "dd" },
		ar: { year: "سنة", month: "شهر", day: "يوم" },
		ast: { year: "aaaa", month: "mm", day: "dd" },
		az: { year: "iiii", month: "aa", day: "gg" },
		be: { year: "гггг", month: "мм", day: "дд" },
		bg: { year: "гггг", month: "мм", day: "дд" },
		bn: { year: "yyyy", month: "মিমি", day: "dd" },
		br: { year: "bbbb", month: "mm", day: "dd" },
		bs: { year: "gggg", month: "mm", day: "dd" },
		ca: { year: "aaaa", month: "mm", day: "dd" },
		cak: { year: "jjjj", month: "ii", day: "q'q'" },
		ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
		cs: { year: "rrrr", month: "mm", day: "dd" },
		cy: { year: "bbbb", month: "mm", day: "dd" },
		da: { year: "åååå", month: "mm", day: "dd" },
		de: { year: "jjjj", month: "mm", day: "tt" },
		dsb: { year: "llll", month: "mm", day: "źź" },
		el: { year: "εεεε", month: "μμ", day: "ηη" },
		en: { year: "yyyy", month: "mm", day: "dd" },
		eo: { year: "jjjj", month: "mm", day: "tt" },
		es: { year: "aaaa", month: "mm", day: "dd" },
		et: { year: "aaaa", month: "kk", day: "pp" },
		eu: { year: "uuuu", month: "hh", day: "ee" },
		fa: { year: "سال", month: "ماه", day: "روز" },
		ff: { year: "hhhh", month: "ll", day: "ññ" },
		fi: { year: "vvvv", month: "kk", day: "pp" },
		fr: { year: "aaaa", month: "mm", day: "jj" },
		fy: { year: "jjjj", month: "mm", day: "dd" },
		ga: { year: "bbbb", month: "mm", day: "ll" },
		gd: { year: "bbbb", month: "mm", day: "ll" },
		gl: { year: "aaaa", month: "mm", day: "dd" },
		he: { year: "שנה", month: "חודש", day: "יום" },
		hr: { year: "gggg", month: "mm", day: "dd" },
		hsb: { year: "llll", month: "mm", day: "dd" },
		hu: { year: "éééé", month: "hh", day: "nn" },
		ia: { year: "aaaa", month: "mm", day: "dd" },
		id: { year: "tttt", month: "bb", day: "hh" },
		is: { year: "áááá", month: "mm", day: "dd" },
		it: { year: "aaaa", month: "mm", day: "gg" },
		ja: { year: "年", month: "月", day: "日" },
		ka: { year: "წწწწ", month: "თთ", day: "რრ" },
		kk: { year: "жжжж", month: "аа", day: "кк" },
		kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
		ko: { year: "연도", month: "월", day: "일" },
		lb: { year: "jjjj", month: "mm", day: "dd" },
		lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
		lt: { year: "mmmm", month: "mm", day: "dd" },
		lv: { year: "gggg", month: "mm", day: "dd" },
		meh: { year: "aaaa", month: "mm", day: "dd" },
		ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
		ms: { year: "tttt", month: "mm", day: "hh" },
		nb: { year: "åååå", month: "mm", day: "dd" },
		nl: { year: "jjjj", month: "mm", day: "dd" },
		nn: { year: "åååå", month: "mm", day: "dd" },
		no: { year: "åååå", month: "mm", day: "dd" },
		oc: { year: "aaaa", month: "mm", day: "jj" },
		pl: { year: "rrrr", month: "mm", day: "dd" },
		pt: { year: "aaaa", month: "mm", day: "dd" },
		rm: { year: "oooo", month: "mm", day: "dd" },
		ro: { year: "aaaa", month: "ll", day: "zz" },
		ru: { year: "гггг", month: "мм", day: "дд" },
		sc: { year: "aaaa", month: "mm", day: "dd" },
		scn: { year: "aaaa", month: "mm", day: "jj" },
		sk: { year: "rrrr", month: "mm", day: "dd" },
		sl: { year: "llll", month: "mm", day: "dd" },
		sr: { year: "гггг", month: "мм", day: "дд" },
		"sr-Latn": { year: "gggg", month: "mm", day: "dd" },
		sv: { year: "åååå", month: "mm", day: "dd" },
		szl: { year: "rrrr", month: "mm", day: "dd" },
		tg: { year: "сссс", month: "мм", day: "рр" },
		th: { year: "ปปปป", month: "ดด", day: "วว" },
		tr: { year: "yyyy", month: "aa", day: "gg" },
		uk: { year: "рррр", month: "мм", day: "дд" },
		"zh-CN": { year: "年", month: "月", day: "日" },
		"zh-TW": { year: "年", month: "月", day: "日" },
	},
	"en",
);
function ls(e, a, t) {
	return e === "era" || e === "dayPeriod"
		? a
		: e === "year" || e === "month" || e === "day"
			? is.getStringForLocale(e, t)
			: "––";
}
class ne {
	constructor(a, t, u) {
		if (
			((this.era = (u == null ? void 0 : u.era) ?? null),
			(this.calendar = a),
			(this.year = (u == null ? void 0 : u.year) ?? null),
			(this.month = (u == null ? void 0 : u.month) ?? null),
			(this.day = (u == null ? void 0 : u.day) ?? null),
			(this.hour = (u == null ? void 0 : u.hour) ?? null),
			(this.hourCycle = t),
			(this.dayPeriod = null),
			(this.minute = (u == null ? void 0 : u.minute) ?? null),
			(this.second = (u == null ? void 0 : u.second) ?? null),
			(this.millisecond = (u == null ? void 0 : u.millisecond) ?? null),
			(this.offset = "offset" in (u ?? {}) ? u.offset : null),
			this.hour != null)
		) {
			const [n, r] = Re(this.hour, t);
			(this.dayPeriod = n), (this.hour = r);
		}
	}
	copy() {
		const a = new ne(this.calendar, this.hourCycle);
		return (
			(a.era = this.era),
			(a.year = this.year),
			(a.month = this.month),
			(a.day = this.day),
			(a.hour = this.hour),
			(a.dayPeriod = this.dayPeriod),
			(a.minute = this.minute),
			(a.second = this.second),
			(a.millisecond = this.millisecond),
			(a.offset = this.offset),
			a
		);
	}
	isComplete(a) {
		return a.every((t) => this[t] != null);
	}
	validate(a, t) {
		return t.every((u) => {
			if ((u === "hour" || u === "dayPeriod") && "hour" in a) {
				const [n, r] = Re(a.hour, this.hourCycle);
				return this.dayPeriod === n && this.hour === r;
			}
			return this[u] === a[u];
		});
	}
	isCleared(a) {
		return a.every((t) => this[t] === null);
	}
	set(a, t, u) {
		const n = this.copy();
		return (
			(n[a] = t),
			a === "hour" &&
				n.dayPeriod == null &&
				"hour" in u &&
				(n.dayPeriod = Re(u.hour, this.hourCycle)[0]),
			a === "year" && n.era == null && (n.era = u.era),
			a !== "second" &&
				a !== "literal" &&
				a !== "timeZoneName" &&
				(n.offset = null),
			n
		);
	}
	clear(a) {
		const t = this.copy();
		return (t[a] = null), a === "year" && (t.era = null), (t.offset = null), t;
	}
	cycle(a, t, u, n) {
		const r = this.copy();
		if (r[a] == null && a !== "dayPeriod" && a !== "era") {
			if (a === "hour" && "hour" in u) {
				const [l, i] = Re(u.hour, this.hourCycle);
				(r.dayPeriod = l), (r.hour = i);
			} else r[a] = u[a];
			return a === "year" && r.era == null && (r.era = u.era), r;
		}
		switch (a) {
			case "era": {
				let l = this.calendar.getEras(),
					i = l.indexOf(r.era);
				(i = ge(i, t, 0, l.length - 1)), (r.era = l[i]);
				break;
			}
			case "year": {
				let l = new J(
					this.calendar,
					this.era ?? u.era,
					this.year ?? u.year,
					this.month ?? 1,
					this.day ?? 1,
				);
				(l = l.cycle(a, t, { round: a === "year" })),
					(r.era = l.era),
					(r.year = l.year);
				break;
			}
			case "month":
				r.month = ge(
					r.month ?? 1,
					t,
					1,
					this.calendar.getMaximumMonthsInYear(),
				);
				break;
			case "day":
				r.day = ge(r.day ?? 1, t, 1, this.calendar.getMaximumDaysInMonth());
				break;
			case "hour": {
				const l = n.some((i) => ["year", "month", "day"].includes(i));
				if (
					"timeZone" in u &&
					(!l || (r.year != null && r.month != null && r.day != null))
				) {
					let i = this.toValue(u);
					i = i.cycle("hour", t, {
						hourCycle: this.hourCycle === "h12" ? 12 : 24,
						round: !1,
					});
					const [o, c] = Re(i.hour, this.hourCycle);
					(r.hour = c), (r.dayPeriod = o), (r.offset = i.offset);
				} else {
					const i = r.hour ?? 0,
						o = this.getSegmentLimits("hour");
					(r.hour = ge(i, t, o.minValue, o.maxValue)),
						r.dayPeriod == null &&
							"hour" in u &&
							(r.dayPeriod = Re(u.hour, this.hourCycle)[0]);
				}
				break;
			}
			case "dayPeriod":
				r.dayPeriod = ge(r.dayPeriod ?? 0, t, 0, 1);
				break;
			case "minute":
				r.minute = ge(r.minute ?? 0, t, 0, 59, !0);
				break;
			case "second":
				r.second = ge(r.second ?? 0, t, 0, 59, !0);
				break;
		}
		return r;
	}
	toValue(a) {
		if ("hour" in a) {
			let t = this.hour;
			t != null
				? (t = os(t, this.dayPeriod ?? 0, this.hourCycle))
				: (this.hourCycle === "h12" || this.hourCycle === "h11") &&
					(t = this.dayPeriod === 1 ? 12 : 0);
			let u = a.set({
				era: this.era ?? a.era,
				year: this.year ?? a.year,
				month: this.month ?? a.month,
				day: this.day ?? a.day,
				hour: t ?? a.hour,
				minute: this.minute ?? a.minute,
				second: this.second ?? a.second,
				millisecond: this.millisecond ?? a.millisecond,
			});
			return (
				"offset" in u &&
					this.offset != null &&
					u.offset !== this.offset &&
					(u = u.add({ milliseconds: u.offset - this.offset })),
				u
			);
		} else
			return a.set({
				era: this.era ?? a.era,
				year: this.year ?? a.year,
				month: this.month ?? a.month,
				day: this.day ?? a.day,
			});
	}
	getSegmentLimits(a) {
		switch (a) {
			case "era": {
				const t = this.calendar.getEras();
				return {
					value: this.era != null ? t.indexOf(this.era) : t.length - 1,
					minValue: 0,
					maxValue: t.length - 1,
				};
			}
			case "year":
				return { value: this.year, minValue: 1, maxValue: 9999 };
			case "month":
				return {
					value: this.month,
					minValue: 1,
					maxValue: this.calendar.getMaximumMonthsInYear(),
				};
			case "day":
				return {
					value: this.day,
					minValue: 1,
					maxValue: this.calendar.getMaximumDaysInMonth(),
				};
			case "dayPeriod":
				return { value: this.dayPeriod, minValue: 0, maxValue: 1 };
			case "hour": {
				let t = 0,
					u = 23;
				return (
					this.hourCycle === "h12"
						? ((t = 1), (u = 12))
						: this.hourCycle === "h11" && ((t = 0), (u = 11)),
					{ value: this.hour, minValue: t, maxValue: u }
				);
			}
			case "minute":
				return { value: this.minute, minValue: 0, maxValue: 59 };
			case "second":
				return { value: this.second, minValue: 0, maxValue: 59 };
		}
	}
}
function ge(e, a, t, u, n = !1) {
	if (n) {
		(e += Math.sign(a)), e < t && (e = u);
		const r = Math.abs(a);
		a > 0 ? (e = Math.ceil(e / r) * r) : (e = Math.floor(e / r) * r),
			e > u && (e = t);
	} else
		(e += a), e < t ? (e = u - (t - e - 1)) : e > u && (e = t + (e - u - 1));
	return e;
}
function Re(e, a) {
	let t = e >= 12 ? 1 : 0;
	switch (a) {
		case "h11":
			e >= 12 && (e -= 12);
			break;
		case "h12":
			e === 0 ? (e = 12) : e > 12 && (e -= 12);
			break;
		case "h23":
			t = null;
			break;
		case "h24":
			(e += 1), (t = null);
	}
	return [t, e];
}
function os(e, a, t) {
	switch (t) {
		case "h11":
			a === 1 && (e += 12);
			break;
		case "h12":
			e === 12 && (e = 0), a === 1 && (e += 12);
			break;
		case "h24":
			e -= 1;
			break;
	}
	return e;
}
const Ta = {
		year: !0,
		month: !0,
		day: !0,
		hour: !0,
		minute: !0,
		second: !0,
		dayPeriod: !0,
		era: !0,
	},
	su = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
	ss = {
		dayperiod: "dayPeriod",
		relatedYear: "year",
		yearName: "literal",
		unknown: "literal",
	};
function ds(e) {
	const {
			locale: a,
			createCalendar: t,
			hideTimeZone: u,
			isDisabled: n = !1,
			isReadOnly: r = !1,
			isRequired: l = !1,
			minValue: i,
			maxValue: o,
			isDateUnavailable: c,
		} = e,
		s = e.value || e.defaultValue || e.placeholderValue || null,
		[m, $] = Yi(s, e.granularity),
		D = $ || "UTC";
	if (s && !(m in s))
		throw new Error("Invalid granularity " + m + " for value " + s.toString());
	let [h, f] = d.useMemo(() => {
			const M = new ie(a, {
				dateStyle: "short",
				timeStyle: "short",
				hour12: e.hourCycle != null ? e.hourCycle === 12 : void 0,
			}).resolvedOptions();
			return [t(M.calendar), M.hourCycle];
		}, [a, e.hourCycle, t]),
		[b, p] = ze(e.value, e.defaultValue ?? null, e.onChange),
		[S] = d.useState(b),
		A = d.useMemo(() => Ki(b, h) ?? null, [b, h]),
		[B, x] = d.useState(() => new ne(h, f, A)),
		V = h.identifier === "gregory" && B.era === "BC",
		I = d.useMemo(
			() => ({
				granularity: m,
				maxGranularity: e.maxGranularity ?? "year",
				timeZone: $,
				hideTimeZone: u,
				hourCycle: e.hourCycle,
				showEra: V,
				shouldForceLeadingZeros: e.shouldForceLeadingZeros,
			}),
			[e.maxGranularity, m, e.hourCycle, e.shouldForceLeadingZeros, $, u, V],
		),
		T = d.useMemo(() => Ee({}, I), [I]),
		N = d.useMemo(() => new ie(a, T), [a, T]),
		w = d.useMemo(() => N.resolvedOptions(), [N]),
		C = d.useMemo(
			() => ns(e.placeholderValue, m, h, $),
			[e.placeholderValue, m, h, $],
		),
		E = d.useMemo(() => {
			const g = f === "h11" || f === "h12",
				M = [
					"era",
					"year",
					"month",
					"day",
					"hour",
					...(g ? ["dayPeriod"] : []),
					"minute",
					"second",
				],
				q = M.indexOf(e.maxGranularity || "era"),
				se = M.indexOf(m === "hour" && g ? "dayPeriod" : m);
			return M.slice(q, se + 1);
		}, [e.maxGranularity, m, f]),
		[U, z] = d.useState(A),
		[W, P] = d.useState(h),
		[R, k] = d.useState(f);
	(A !== U || f !== R || !ba(h, W)) &&
		((B = new ne(h, f, A)), z(A), P(h), k(f), x(B));
	const L = (g) => {
			if (!(e.isDisabled || e.isReadOnly))
				if (g == null || (g instanceof ne && g.isCleared(E)))
					x(new ne(h, f, A)), p(null);
				else if (!(g instanceof ne))
					(g = K(g, (s == null ? void 0 : s.calendar) || new Q())),
						x(new ne(h, f, A)),
						p(g);
				else {
					if (g.isComplete(E)) {
						const M = g.toValue(A ?? C);
						if (g.validate(M, E)) {
							const q = K(M, (s == null ? void 0 : s.calendar) || new Q());
							if (!b || q.compare(b) !== 0) {
								x(new ne(h, f, A)), p(q);
								return;
							}
						}
					}
					x(g);
				}
		},
		y = d.useMemo(() => B.toValue(A ?? C).toDate(D), [B, D, A, C]),
		O = d.useMemo(() => cs(y, B, N, w, h, a, m), [y, N, w, B, h, a, m]),
		Z = (g, M) => {
			L(B.cycle(g, M, C, E));
		},
		F = d.useMemo(() => et(b, i, o, c, I), [b, i, o, c, I]),
		v = Cu({ ...e, value: b, builtinValidation: F }),
		G = v.displayValidation.isInvalid,
		Y = e.validationState || (G ? "invalid" : null);
	return {
		...v,
		value: A,
		defaultValue: e.defaultValue ?? S,
		dateValue: y,
		calendar: h,
		setValue: L,
		segments: O,
		dateFormatter: N,
		validationState: Y,
		isInvalid: G,
		granularity: m,
		maxGranularity: e.maxGranularity ?? "year",
		isDisabled: n,
		isReadOnly: r,
		isRequired: l,
		increment(g) {
			Z(g, 1);
		},
		decrement(g) {
			Z(g, -1);
		},
		incrementPage(g) {
			Z(g, su[g] || 1);
		},
		decrementPage(g) {
			Z(g, -(su[g] || 1));
		},
		incrementToMax(g) {
			const M =
				g === "hour" && f === "h12" ? 11 : B.getSegmentLimits(g).maxValue;
			L(B.set(g, M, C));
		},
		decrementToMin(g) {
			const M =
				g === "hour" && f === "h12" ? 12 : B.getSegmentLimits(g).minValue;
			L(B.set(g, M, C));
		},
		setSegment(g, M) {
			L(B.set(g, M, C));
		},
		confirmPlaceholder() {
			if (!(e.isDisabled || e.isReadOnly) && B.isComplete(E)) {
				const g = B.toValue(A ?? C),
					M = K(g, (s == null ? void 0 : s.calendar) || new Q());
				(!b || M.compare(b) !== 0) && p(M), x(new ne(h, f, A));
			}
		},
		clearSegment(g) {
			let M = B;
			g !== "timeZoneName" && g !== "literal" && (M = B.clear(g)), L(M);
		},
		formatValue(g) {
			if (!A) return "";
			const M = Ee(g, I);
			return new ie(a, M).format(y);
		},
		getDateFormatter(g, M) {
			const q = { ...I, ...M },
				se = Ee({}, q);
			return new ie(g, se);
		},
	};
}
function cs(e, a, t, u, n, r, l) {
	const i = ["hour", "minute", "second"],
		o = t.formatToParts(e),
		c = new za(r, { useGrouping: !1 }),
		s = new za(r, { useGrouping: !1, minimumIntegerDigits: 2 });
	for (const $ of o)
		if (
			$.type === "year" ||
			$.type === "month" ||
			$.type === "day" ||
			$.type === "hour"
		) {
			const D = a[$.type] ?? 0;
			u[$.type] === "2-digit"
				? ($.value = s.format(D))
				: ($.value = c.format(D));
		}
	const m = [];
	for (const $ of o) {
		let D = ss[$.type] || $.type,
			h = Ta[D];
		D === "era" && n.getEras().length === 1 && (h = !1);
		const f = Ta[D] && a[$.type] == null,
			b = Ta[D] ? ls(D, $.value, r) : null,
			p = {
				type: D,
				text: f ? b : $.value,
				...a.getSegmentLimits(D),
				isPlaceholder: f,
				placeholder: b,
				isEditable: h,
			};
		D === "hour"
			? (m.push({
					type: "literal",
					text: "⁦",
					isPlaceholder: !1,
					placeholder: "",
					isEditable: !1,
				}),
				m.push(p),
				D === l &&
					m.push({
						type: "literal",
						text: "⁩",
						isPlaceholder: !1,
						placeholder: "",
						isEditable: !1,
					}))
			: i.includes(D) && D === l
				? (m.push(p),
					m.push({
						type: "literal",
						text: "⁩",
						isPlaceholder: !1,
						placeholder: "",
						isEditable: !1,
					}))
				: m.push(p);
	}
	return m;
}
const Gi = d.createContext(null),
	Ca = d.createContext(null),
	wt = d.createContext(null),
	du = d.forwardRef((a, t) => {
		const u = d.useContext(Ca),
			n = d.useContext(wt);
		return u || n
			? j.createElement(Hi, { ...a, ref: t })
			: j.createElement(fs, { ...a, ref: t });
	}),
	fs = d.forwardRef((e, a) => {
		const [t, u] = it({ slot: e.slot }, a, Gi),
			{ locale: n } = oe(),
			r = ds({ ...t, locale: n, createCalendar: Ir }),
			l = d.useRef(null),
			{ fieldProps: i, inputProps: o } = _o({ ...t, inputRef: l }, r, u);
		return j.createElement(
			lt,
			{
				values: [
					[Ca, r],
					[Fl, { ...o, ref: l }],
					[
						mt,
						{ ...i, ref: u, isInvalid: r.isInvalid, isDisabled: r.isDisabled },
					],
				],
			},
			j.createElement(Hi, e),
		);
	}),
	Hi = d.forwardRef((e, a) => {
		const { className: t, children: u } = e,
			n = d.useContext(Ca),
			r = d.useContext(wt),
			l = n ?? r;
		return j.createElement(
			j.Fragment,
			null,
			j.createElement(
				Bu,
				{
					...e,
					ref: a,
					slot: e.slot || void 0,
					className: t ?? "react-aria-DateInput",
					isReadOnly: l.isReadOnly,
					isInvalid: l.isInvalid,
					isDisabled: l.isDisabled,
				},
				l.segments.map((i, o) => d.cloneElement(u(i), { key: o })),
			),
			j.createElement(El, { className: "" }),
		);
	}),
	cu = d.forwardRef(({ segment: a, ...t }, u) => {
		const n = d.useContext(Ca),
			r = d.useContext(wt),
			l = n ?? r,
			i = Xi(u),
			{ segmentProps: o } = Xo(a, l, i),
			{ focusProps: c, isFocused: s, isFocusVisible: m } = ft(),
			{ hoverProps: $, isHovered: D } = gu({
				...t,
				isDisabled: l.isDisabled || a.type === "literal",
			}),
			h = $a({
				...t,
				values: {
					...a,
					isReadOnly: l.isReadOnly,
					isInvalid: l.isInvalid,
					isDisabled: l.isDisabled,
					isHovered: D,
					isFocused: s,
					isFocusVisible: m,
				},
				defaultChildren: a.text,
				defaultClassName: "react-aria-DateSegment",
			});
		return j.createElement(be.span, {
			...ee(ue(t, { global: !0 }), o, c, $),
			...h,
			style: o.style,
			ref: i,
			"data-placeholder": a.isPlaceholder || void 0,
			"data-invalid": l.isInvalid || void 0,
			"data-readonly": l.isReadOnly || void 0,
			"data-disabled": l.isDisabled || void 0,
			"data-type": a.type,
			"data-hovered": D || void 0,
			"data-focused": s || void 0,
			"data-focus-visible": m || void 0,
		});
	});
function ms(e) {
	return e && e.__esModule ? e.default : e;
}
function Ds(e, a, t) {
	var U, z, W, P, R;
	const u = Ae(ms(va), "@react-aria/datepicker"),
		{
			isInvalid: n,
			validationErrors: r,
			validationDetails: l,
		} = a.displayValidation,
		{
			labelProps: i,
			fieldProps: o,
			descriptionProps: c,
			errorMessageProps: s,
		} = vu({
			...e,
			labelElementType: "span",
			isInvalid: n,
			errorMessage: e.errorMessage || r,
		}),
		m = o["aria-labelledby"] || o.id,
		{ locale: $ } = oe(),
		D = a.formatValue($, { month: "long" }),
		h = D
			? u.format("selectedRangeDescription", {
					startDate: D.start,
					endDate: D.end,
				})
			: "",
		f = dt(h),
		b = { "aria-label": u.format("startDate"), "aria-labelledby": m },
		p = { "aria-label": u.format("endDate"), "aria-labelledby": m },
		S = ja(),
		A = ja(),
		B = ri(a, t),
		x =
			[f["aria-describedby"], o["aria-describedby"]]
				.filter(Boolean)
				.join(" ") || void 0,
		V = d.useMemo(() => ct(t, { accept: (k) => k.id !== S }), [t, S]),
		I = {
			[ii]: V,
			[ta]: "presentation",
			"aria-describedby": x,
			placeholderValue: e.placeholderValue,
			hideTimeZone: e.hideTimeZone,
			hourCycle: e.hourCycle,
			granularity: e.granularity,
			shouldForceLeadingZeros: e.shouldForceLeadingZeros,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isRequired: e.isRequired,
			validationBehavior: e.validationBehavior,
		},
		T = ue(e),
		N = d.useRef(!1),
		{ focusWithinProps: w } = xu({
			...e,
			isDisabled: a.isOpen,
			onBlurWithin: (k) => {
				var y, O;
				const L = document.getElementById(A);
				Ze(L, k.relatedTarget) ||
					((N.current = !1),
					(y = e.onBlur) == null || y.call(e, k),
					(O = e.onFocusChange) == null || O.call(e, !1));
			},
			onFocusWithin: (k) => {
				var L, y;
				N.current ||
					((N.current = !0),
					(L = e.onFocus) == null || L.call(e, k),
					(y = e.onFocusChange) == null || y.call(e, !0));
			},
		}),
		C = d.useRef(Vt),
		E = d.useRef(Vt);
	return {
		groupProps: ee(T, B, o, f, w, {
			role: "group",
			"aria-disabled": e.isDisabled || null,
			"aria-describedby": x,
			onKeyDown(k) {
				a.isOpen || (e.onKeyDown && e.onKeyDown(k));
			},
			onKeyUp(k) {
				a.isOpen || (e.onKeyUp && e.onKeyUp(k));
			},
		}),
		labelProps: {
			...i,
			onClick: () => {
				V.focusFirst();
			},
		},
		buttonProps: {
			...f,
			id: S,
			"aria-haspopup": "dialog",
			"aria-label": u.format("calendar"),
			"aria-labelledby": `${S} ${m}`,
			"aria-describedby": x,
			"aria-expanded": a.isOpen,
			isDisabled: e.isDisabled || e.isReadOnly,
			onPress: () => a.setOpen(!0),
		},
		dialogProps: { id: A, "aria-labelledby": `${S} ${m}` },
		startFieldProps: {
			...b,
			...I,
			value: ((U = a.value) == null ? void 0 : U.start) ?? null,
			defaultValue: (z = a.defaultValue) == null ? void 0 : z.start,
			onChange: (k) => a.setDateTime("start", k),
			autoFocus: e.autoFocus,
			name: e.startName,
			form: e.form,
			[It]: {
				realtimeValidation: a.realtimeValidation,
				displayValidation: a.displayValidation,
				updateValidation(k) {
					(C.current = k), a.updateValidation(ua(k, E.current));
				},
				resetValidation: a.resetValidation,
				commitValidation: a.commitValidation,
			},
		},
		endFieldProps: {
			...p,
			...I,
			value: ((W = a.value) == null ? void 0 : W.end) ?? null,
			defaultValue: (P = a.defaultValue) == null ? void 0 : P.end,
			onChange: (k) => a.setDateTime("end", k),
			name: e.endName,
			form: e.form,
			[It]: {
				realtimeValidation: a.realtimeValidation,
				displayValidation: a.displayValidation,
				updateValidation(k) {
					(E.current = k), a.updateValidation(ua(C.current, k));
				},
				resetValidation: a.resetValidation,
				commitValidation: a.commitValidation,
			},
		},
		descriptionProps: c,
		errorMessageProps: s,
		calendarProps: {
			autoFocus: !0,
			value:
				(R = a.dateRange) != null && R.start && a.dateRange.end
					? a.dateRange
					: null,
			onChange: a.setDateRange,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isDateUnavailable: e.isDateUnavailable,
			allowsNonContiguousRanges: e.allowsNonContiguousRanges,
			defaultFocusedValue: a.dateRange ? void 0 : e.placeholderValue,
			isInvalid: a.isInvalid,
			errorMessage:
				typeof e.errorMessage == "function"
					? e.errorMessage(a.displayValidation)
					: e.errorMessage || a.displayValidation.validationErrors.join(" "),
			firstDayOfWeek: e.firstDayOfWeek,
			pageBehavior: e.pageBehavior,
		},
		isInvalid: n,
		validationErrors: r,
		validationDetails: l,
	};
}
function $s(e) {
	var z, W;
	let a = Al(e),
		[t, u] = ze(e.value, e.defaultValue || null, e.onChange),
		[n] = d.useState(t),
		[r, l] = d.useState(() => t || { start: null, end: null });
	t == null && r.start && r.end && ((r = { start: null, end: null }), l(r));
	let i = t || r,
		o = (P) => {
			(i = P || { start: null, end: null }), l(i), xe(i) ? u(i) : u(null);
		},
		c =
			(i == null ? void 0 : i.start) ||
			(i == null ? void 0 : i.end) ||
			e.placeholderValue ||
			null,
		[s, m] = Yi(c, e.granularity),
		$ = s === "hour" || s === "minute" || s === "second",
		D = e.shouldCloseOnSelect ?? !0,
		[h, f] = d.useState(null),
		[b, p] = d.useState(null);
	i && xe(i) && ((h = i), "hour" in i.start && (b = i));
	const S = (P, R) => {
			o({
				start:
					"timeZone" in R.start
						? R.start.set(X(P.start))
						: me(P.start, R.start),
				end: "timeZone" in R.end ? R.end.set(X(P.end)) : me(P.end, R.end),
			}),
				f(null),
				p(null),
				C.commitValidation();
		},
		A = (P) => {
			const R = typeof D == "function" ? D() : D;
			$
				? xe(P) && (R || (b != null && b.start && b != null && b.end))
					? S(P, {
							start: (b == null ? void 0 : b.start) || qe(e.placeholderValue),
							end: (b == null ? void 0 : b.end) || qe(e.placeholderValue),
						})
					: f(P)
				: xe(P)
					? (o(P), C.commitValidation())
					: f(P),
				R && a.setOpen(!1);
		},
		B = (P) => {
			xe(h) && xe(P) ? S(h, P) : p(P);
		},
		x =
			(((z = i == null ? void 0 : i.start) == null
				? void 0
				: z.calendar.identifier) === "gregory" &&
				i.start.era === "BC") ||
			(((W = i == null ? void 0 : i.end) == null
				? void 0
				: W.calendar.identifier) === "gregory" &&
				i.end.era === "BC"),
		V = d.useMemo(
			() => ({
				granularity: s,
				timeZone: m,
				hideTimeZone: e.hideTimeZone,
				hourCycle: e.hourCycle,
				shouldForceLeadingZeros: e.shouldForceLeadingZeros,
				showEra: x,
			}),
			[s, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, x],
		),
		{ minValue: I, maxValue: T, isDateUnavailable: N } = e,
		w = d.useMemo(
			() => ts(i, I, T, N ? (P) => N(P, null) : void 0, V),
			[i, I, T, N, V],
		),
		C = Cu({
			...e,
			value: t,
			name: d.useMemo(
				() => [e.startName, e.endName].filter((P) => P != null),
				[e.startName, e.endName],
			),
			builtinValidation: w,
		}),
		E = C.displayValidation.isInvalid,
		U = e.validationState || (E ? "invalid" : null);
	return {
		...C,
		value: i,
		defaultValue: e.defaultValue ?? n,
		setValue: o,
		dateRange: h,
		timeRange: b,
		granularity: s,
		hasTime: $,
		setDate(P, R) {
			A(
				P === "start"
					? { start: R, end: (h == null ? void 0 : h.end) ?? null }
					: { start: (h == null ? void 0 : h.start) ?? null, end: R },
			);
		},
		setTime(P, R) {
			B(
				P === "start"
					? { start: R, end: (b == null ? void 0 : b.end) ?? null }
					: { start: (b == null ? void 0 : b.start) ?? null, end: R },
			);
		},
		setDateTime(P, R) {
			o(
				P === "start"
					? { start: R, end: (i == null ? void 0 : i.end) ?? null }
					: { start: (i == null ? void 0 : i.start) ?? null, end: R },
			);
		},
		setDateRange: A,
		setTimeRange: B,
		...a,
		setOpen(P) {
			!P &&
				!(i != null && i.start && i != null && i.end) &&
				xe(h) &&
				$ &&
				S(h, {
					start: (b == null ? void 0 : b.start) || qe(e.placeholderValue),
					end: (b == null ? void 0 : b.end) || qe(e.placeholderValue),
				}),
				a.setOpen(P);
		},
		validationState: U,
		isInvalid: E,
		formatValue(P, R) {
			if (!i || !i.start || !i.end) return null;
			let k = "timeZone" in i.start ? i.start.timeZone : void 0,
				L =
					e.granularity || (i.start && "minute" in i.start ? "minute" : "day"),
				y = "timeZone" in i.end ? i.end.timeZone : void 0,
				O = e.granularity || (i.end && "minute" in i.end ? "minute" : "day"),
				Z = Ee(R, {
					granularity: L,
					timeZone: k,
					hideTimeZone: e.hideTimeZone,
					hourCycle: e.hourCycle,
					showEra:
						(i.start.calendar.identifier === "gregory" &&
							i.start.era === "BC") ||
						(i.end.calendar.identifier === "gregory" && i.end.era === "BC"),
				}),
				F = i.start.toDate(k || "UTC"),
				v = i.end.toDate(y || "UTC"),
				G = new ie(P, Z),
				Y;
			if (k === y && L === O && i.start.compare(i.end) !== 0) {
				try {
					let g = G.formatRangeToParts(F, v),
						M = -1;
					for (let te = 0; te < g.length; te++) {
						const Ba = g[te];
						if (Ba.source === "shared" && Ba.type === "literal") M = te;
						else if (Ba.source === "endRange") break;
					}
					let q = "",
						se = "";
					for (let te = 0; te < g.length; te++)
						te < M ? (q += g[te].value) : te > M && (se += g[te].value);
					return { start: q, end: se };
				} catch {}
				Y = G;
			} else {
				const g = Ee(R, {
					granularity: O,
					timeZone: y,
					hideTimeZone: e.hideTimeZone,
					hourCycle: e.hourCycle,
				});
				Y = new ie(P, g);
			}
			return { start: G.format(F), end: Y.format(v) };
		},
		getDateFormatter(P, R) {
			const k = { ...V, ...R },
				L = Ee({}, k);
			return new ie(P, L);
		},
	};
}
function xe(e) {
	return (e == null ? void 0 : e.start) != null && e.end != null;
}
const hs = d.createContext(null),
	ys = d.createContext(null),
	bs = [mt, nt, Eu, ot],
	ps = d.forwardRef((a, t) => {
		[a, t] = it(a, t, hs);
		const { validationBehavior: u } = Oa(gl) || {},
			n = a.validationBehavior ?? u ?? "native",
			r = $s({ ...a, validationBehavior: n }),
			l = d.useRef(null),
			[i, o] = el(!a["aria-label"] && !a["aria-labelledby"]),
			{
				groupProps: c,
				labelProps: s,
				startFieldProps: m,
				endFieldProps: $,
				buttonProps: D,
				dialogProps: h,
				calendarProps: f,
				descriptionProps: b,
				errorMessageProps: p,
				...S
			} = Ds({ ...al(a), label: o, validationBehavior: n }, r, l),
			{ focusProps: A, isFocused: B, isFocusVisible: x } = ft({ within: !0 }),
			V = $a({
				...a,
				values: {
					state: r,
					isFocusWithin: B,
					isFocusVisible: x,
					isDisabled: a.isDisabled || !1,
					isInvalid: r.isInvalid,
					isOpen: r.isOpen,
					isReadOnly: a.isReadOnly || !1,
					isRequired: a.isRequired || !1,
				},
				defaultClassName: "react-aria-DateRangePicker",
			}),
			I = ue(a, { global: !0 });
		return (
			delete I.id,
			j.createElement(
				lt,
				{
					values: [
						[ys, r],
						[mt, { ...c, ref: l, isInvalid: r.isInvalid }],
						[nt, { ...D, isPressed: r.isOpen }],
						[Eu, { ...s, ref: i, elementType: "span" }],
						[ca, f],
						[ul, r],
						[
							xl,
							{
								trigger: "DateRangePicker",
								triggerRef: l,
								placement: "bottom start",
								clearContexts: bs,
							},
						],
						[rl, h],
						[Gi, { slots: { start: m, end: $ } }],
						[ot, { slots: { description: b, errorMessage: p } }],
						[vl, S],
					],
				},
				j.createElement(be.div, {
					...ee(I, V, A),
					ref: t,
					slot: a.slot || void 0,
					"data-focus-within": B || void 0,
					"data-invalid": r.isInvalid || void 0,
					"data-focus-visible": x || void 0,
					"data-disabled": a.isDisabled || void 0,
					"data-readonly": a.isReadOnly || void 0,
					"data-required": a.isRequired || void 0,
					"data-open": r.isOpen || void 0,
				}),
			)
		);
	}),
	Wi = ({ label: e, description: a, errorMessage: t, ...u }) =>
		_.jsxs(ps, {
			...u,
			className: "flex flex-col gap-1",
			children: [
				_.jsx(Pl, { children: e }),
				_.jsxs(Bu, {
					className:
						"flex border border-border rounded p-2 bg-background focus-within:ring-2 focus-within:ring-primary focus-within:outline-none",
					children: [
						_.jsx(du, {
							slot: "start",
							className: "flex",
							children: (n) =>
								_.jsx(cu, {
									segment: n,
									className:
										"px-1 tabular-nums focus:bg-primary focus:text-primary-foreground rounded outline-none caret-transparent",
								}),
						}),
						_.jsx("span", {
							"aria-hidden": "true",
							className: "mx-2 text-foreground",
							children: "-",
						}),
						_.jsx(du, {
							slot: "end",
							className: "flex",
							children: (n) =>
								_.jsx(cu, {
									segment: n,
									className:
										"px-1 tabular-nums focus:bg-primary focus:text-primary-foreground rounded outline-none caret-transparent",
								}),
						}),
					],
				}),
				a &&
					_.jsx(nl, {
						slot: "description",
						className: "text-xs text-foreground mt-1",
						children: a,
					}),
				_.jsx(Cl, { className: "text-xs text-danger mt-1", children: t }),
				_.jsx(Bl, {
					className:
						"z-50 bg-background shadow-popover overflow-auto rounded-lg border border-border mt-1",
					children: _.jsx(il, {
						"aria-label": "Date Picker",
						className: "p-4 outline-none",
						children: _.jsxs(Uo, {
							children: [
								_.jsxs("header", {
									className:
										"flex items-center w-full justify-between gap-1 pb-4",
									children: [
										_.jsx(St, {
											slot: "previous",
											className:
												"px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary",
											children: "◁",
										}),
										_.jsx(ll, { className: "text-sm font-bold m-0" }),
										_.jsx(St, {
											slot: "next",
											className:
												"px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary",
											children: "▷",
										}),
									],
								}),
								_.jsxs(zo, {
									children: [
										_.jsx(jr, {
											children: (n) =>
												_.jsx(Ur, {
													className:
														"text-xs font-semibold text-slate-500 pb-2",
													children: n,
												}),
										}),
										_.jsx(zr, {
											children: (n) =>
												_.jsx(Yo, {
													date: n,
													className:
														"w-9 h-9 outline-none cursor-default rounded flex items-center justify-center data-[outside-month]:text-slate-300 data-[selected]:bg-slate-100 data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[hovered]:bg-surface-hover data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary",
												}),
										}),
									],
								}),
							],
						}),
					}),
				}),
			],
		});
Wi.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "DateRangePicker",
	props: {
		label: { required: !0, tsType: { name: "string" }, description: "" },
		description: { required: !1, tsType: { name: "string" }, description: "" },
		errorMessage: { required: !1, tsType: { name: "string" }, description: "" },
	},
	composes: ["Omit"],
};
const Ts = {
		title: "UI/Form Controls/DateRangePicker",
		component: Wi,
		parameters: {
			layout: "centered",
			docs: { description: { component: "Handles DateValue generics." } },
		},
		tags: ["autodocs"],
	},
	Qe = {
		args: { label: "Event Date", description: "Select start and end dates" },
	};
var fu, mu, Du;
Qe.parameters = {
	...Qe.parameters,
	docs: {
		...((fu = Qe.parameters) == null ? void 0 : fu.docs),
		source: {
			originalSource: `{
  args: {
    label: "Event Date",
    description: "Select start and end dates"
  }
}`,
			...((Du = (mu = Qe.parameters) == null ? void 0 : mu.docs) == null
				? void 0
				: Du.source),
		},
	},
};
const Ns = ["Default"];
export { Ns as __namedExportsOrder, Qe as Default, Ts as default };
