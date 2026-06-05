import { a as Nn } from "./animation-D9hJgx2r.js";
import { e as Ae, f as ie, b as ve, i as Yu } from "./Button-DMaXDISd.js";
import { k as Fe, j as Fn, n as Pn, f as Tn } from "./Dialog-BF34q9A4.js";
import {
	d as an,
	b as ce,
	p as en,
	f as ln,
	k as nn,
	g as on,
	l as Qu,
	m as se,
	i as sn,
	j as tn,
	e as un,
} from "./Hidden-DxJAwdyU.js";
import { $ as ye } from "./Input-CvFvoqvw.js";
import { I as qn } from "./Input-CZQj5NRG.js";
import { r as n, R as X } from "./index-BGsE_GxY.js";
import { j as V } from "./jsx-runtime-BjG_zV1W.js";
import { L as mn, $ as Te } from "./Label-DOdb3z-o.js";
import {
	g as An,
	b as Bn,
	a as Dn,
	h as En,
	$ as gn,
	f as hn,
	c as Pe,
	e as vn,
	d as yn,
} from "./ListBox-CTwCpOYP.js";
import { r as Ce, h as Kn, q as Me } from "./useCollator-DduXULBj.js";
import { a as re } from "./useControlledState-DNChzxNu.js";
import {
	j as $n,
	c as Be,
	g as bn,
	a as Cn,
	h as cn,
	e as De,
	l as dn,
	o as Ee,
	b as fn,
	i as pn,
	$ as rn,
	f as xn,
} from "./useFilter-49-kAJKm.js";
import {
	k as ae,
	a as fe,
	e as In,
	c as jn,
	f as ke,
	C as On,
	E as Vn,
} from "./useHover-qyAt-50Y.js";
import {
	v as kn,
	x as Ln,
	D as Mn,
	e as Rn,
	y as Se,
	r as Sn,
} from "./useLoadMoreSentinel-Dio_d_Bw.js";
import { c as wn, $ as zn } from "./useOverlayPosition-D0MI8dT9.js";
import { $ as Gn } from "./useUpdateEffect-DPtzyKNG.js";
import "./index-B9nXkq7N.js";
function Un(e, u) {
	const {
			inputElementType: l = "input",
			isDisabled: c = !1,
			isRequired: t = !1,
			isReadOnly: a = !1,
			type: s = "text",
			validationBehavior: C = "aria",
		} = e,
		[D, p] = re(e.value, e.defaultValue || "", e.onChange),
		{ focusableProps: y } = Yu(e, u),
		E = Ee({ ...e, value: D }),
		{
			isInvalid: g,
			validationErrors: d,
			validationDetails: T,
		} = E.displayValidation,
		{
			labelProps: L,
			fieldProps: O,
			descriptionProps: f,
			errorMessageProps: M,
		} = rn({ ...e, isInvalid: g, errorMessage: e.errorMessage || d }),
		A = Ae(e, { labelable: !0 });
	const v = { type: s, pattern: e.pattern };
	const [G] = n.useState(D);
	return (
		Be(u, e.defaultValue ?? G, p),
		cn(e, E, u),
		{
			labelProps: L,
			inputProps: se(A, l === "input" ? v : void 0, {
				disabled: c,
				readOnly: a,
				required: t && C === "native",
				"aria-required": (t && C === "aria") || void 0,
				"aria-invalid": g || void 0,
				"aria-errormessage": e["aria-errormessage"],
				"aria-activedescendant": e["aria-activedescendant"],
				"aria-autocomplete": e["aria-autocomplete"],
				"aria-haspopup": e["aria-haspopup"],
				"aria-controls": e["aria-controls"],
				value: D,
				onChange: (x) => p(ke(x).value),
				autoComplete: e.autoComplete,
				autoCapitalize: e.autoCapitalize,
				maxLength: e.maxLength,
				minLength: e.minLength,
				name: e.name,
				form: e.form,
				placeholder: e.placeholder,
				inputMode: e.inputMode,
				autoCorrect: e.autoCorrect,
				spellCheck: e.spellCheck,
				[parseInt(X.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]:
					e.enterKeyHint,
				onCopy: e.onCopy,
				onCut: e.onCut,
				onPaste: e.onPaste,
				onCompositionEnd: e.onCompositionEnd,
				onCompositionStart: e.onCompositionStart,
				onCompositionUpdate: e.onCompositionUpdate,
				onSelect: e.onSelect,
				onBeforeInput: e.onBeforeInput,
				onInput: e.onInput,
				...y,
				...O,
			}),
			descriptionProps: f,
			errorMessageProps: M,
			isInvalid: g,
			validationErrors: d,
			validationDetails: T,
		}
	);
}
var Le = {};
Le = {
	longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة",
};
var Re = {};
Re = {
	longPressMessage:
		"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто",
};
var Oe = {};
Oe = {
	longPressMessage:
		"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku",
};
var Ie = {};
Ie = {
	longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen",
};
var Ve = {};
Ve = {
	longPressMessage:
		"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen",
};
var je = {};
je = {
	longPressMessage:
		"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού",
};
var Ke = {};
Ke = { longPressMessage: "Long press or press Alt + ArrowDown to open menu" };
var ze = {};
ze = {
	longPressMessage:
		"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú",
};
var we = {};
we = {
	longPressMessage:
		"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool",
};
var Ge = {};
Ge = {
	longPressMessage:
		"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli",
};
var Ne = {};
Ne = {
	longPressMessage:
		"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.",
};
var qe = {};
qe = {
	longPressMessage:
		"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט",
};
var Ue = {};
Ue = {
	longPressMessage:
		"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika",
};
var He = {};
He = {
	longPressMessage:
		"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához",
};
var _e = {};
_e = {
	longPressMessage:
		"Premi a lungo o premi Alt + Freccia giù per aprire il menu",
};
var We = {};
We = { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" };
var Ze = {};
Ze = { longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기" };
var Xe = {};
Xe = {
	longPressMessage:
		"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.",
};
var Je = {};
Je = {
	longPressMessage:
		"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa",
};
var Ye = {};
Ye = {
	longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen",
};
var Qe = {};
Qe = {
	longPressMessage:
		"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen",
};
var eu = {};
eu = {
	longPressMessage:
		"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu",
};
var uu = {};
uu = {
	longPressMessage:
		"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu",
};
var nu = {};
nu = {
	longPressMessage:
		"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu",
};
var ou = {};
ou = {
	longPressMessage:
		"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul",
};
var tu = {};
tu = {
	longPressMessage:
		"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню",
};
var lu = {};
lu = {
	longPressMessage:
		"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol",
};
var iu = {};
iu = {
	longPressMessage:
		"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol",
};
var au = {};
au = {
	longPressMessage:
		"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni",
};
var su = {};
su = {
	longPressMessage:
		"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn",
};
var ru = {};
ru = {
	longPressMessage:
		"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın",
};
var cu = {};
cu = {
	longPressMessage:
		"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню",
};
var du = {};
du = { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" };
var pu = {};
pu = { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" };
var $u = {};
$u = {
	"ar-AE": Le,
	"bg-BG": Re,
	"cs-CZ": Oe,
	"da-DK": Ie,
	"de-DE": Ve,
	"el-GR": je,
	"en-US": Ke,
	"es-ES": ze,
	"et-EE": we,
	"fi-FI": Ge,
	"fr-FR": Ne,
	"he-IL": qe,
	"hr-HR": Ue,
	"hu-HU": He,
	"it-IT": _e,
	"ja-JP": We,
	"ko-KR": Ze,
	"lt-LT": Xe,
	"lv-LV": Je,
	"nb-NO": Ye,
	"nl-NL": Qe,
	"pl-PL": eu,
	"pt-BR": uu,
	"pt-PT": nu,
	"ro-RO": ou,
	"ru-RU": tu,
	"sk-SK": lu,
	"sl-SI": iu,
	"sr-SP": au,
	"sv-SE": su,
	"tr-TR": ru,
	"uk-UA": cu,
	"zh-CN": du,
	"zh-TW": pu,
};
function Hn(e, u, l) {
	const { type: c } = e,
		{ isOpen: t } = u;
	n.useEffect(() => {
		l && l.current && zn.set(l.current, u.close);
	});
	let a;
	c === "menu" ? (a = !0) : c === "listbox" && (a = "listbox");
	const s = ce();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": t,
			"aria-controls": t ? s : void 0,
			onPress: u.toggle,
		},
		overlayProps: { id: s },
	};
}
function _n(e) {
	return e && e.__esModule ? e.default : e;
}
function Wn(e, u, l) {
	const { type: c = "menu", isDisabled: t, trigger: a = "press" } = e,
		s = ce(),
		{ triggerProps: C, overlayProps: D } = Hn({ type: c }, u, l),
		p = (d) => {
			if (!t && !(a === "longPress" && !d.altKey) && l && l.current)
				switch (d.key) {
					case "Enter":
					case " ":
						if (a === "longPress" || d.isDefaultPrevented()) return;
					case "ArrowDown":
						"continuePropagation" in d || d.stopPropagation(),
							d.preventDefault(),
							u.toggle("first");
						break;
					case "ArrowUp":
						"continuePropagation" in d || d.stopPropagation(),
							d.preventDefault(),
							u.toggle("last");
						break;
					default:
						"continuePropagation" in d && d.continuePropagation();
				}
		},
		y = Me(_n($u), "@react-aria/menu"),
		{ longPressProps: E } = Sn({
			isDisabled: t || a !== "longPress",
			accessibilityDescription: y.format("longPressMessage"),
			onLongPressStart() {
				u.close();
			},
			onLongPress() {
				u.open("first");
			},
		}),
		g = {
			preventFocusOnPress: !0,
			onPressStart(d) {
				d.pointerType !== "touch" &&
					d.pointerType !== "keyboard" &&
					!t &&
					(fe(d.target), u.open(d.pointerType === "virtual" ? "first" : null));
			},
			onPress(d) {
				d.pointerType === "touch" && !t && (fe(d.target), u.toggle());
			},
		};
	return (
		delete C.onPress,
		{
			menuTriggerProps: {
				...C,
				...(a === "press" ? g : E),
				id: s,
				onKeyDown: p,
			},
			menuProps: {
				...D,
				"aria-labelledby": s,
				autoFocus: u.focusStrategy || !0,
				onClose: u.close,
			},
		}
	);
}
var bu = {};
bu = {
	buttonLabel: "عرض المقترحات",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} خيار`, other: () => `${u.number(e.optionCount)} خيارات` })} متاحة.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} خيار`, other: () => `${u.number(e.groupCount)} خيارات` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", محدد", other: "" }, e.isSelected)}`,
	listboxLabel: "مقترحات",
	selectedAnnouncement: (e) => `${e.optionText}، محدد`,
};
var fu = {};
fu = {
	buttonLabel: "Покажи предложения",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} опция`, other: () => `${u.number(e.optionCount)} опции` })} на разположение.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Въведена група ${e.groupTitle}, с ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} опция`, other: () => `${u.number(e.groupCount)} опции` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", избрани", other: "" }, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, избрани`,
};
var Cu = {};
Cu = {
	buttonLabel: "Zobrazit doporučení",
	countAnnouncement: (e, u) =>
		`K dispozici ${u.plural(e.optionCount, { one: () => `je ${u.number(e.optionCount)} možnost`, other: () => `jsou/je ${u.number(e.optionCount)} možnosti/-í` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Zadaná skupina „${e.groupTitle}“ ${u.plural(e.groupCount, { one: () => `s ${u.number(e.groupCount)} možností`, other: () => `se ${u.number(e.groupCount)} možnostmi` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: " (vybráno)", other: "" }, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybráno`,
};
var xu = {};
xu = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} mulighed tilgængelig`, other: () => `${u.number(e.optionCount)} muligheder tilgængelige` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Angivet gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} mulighed`, other: () => `${u.number(e.groupCount)} muligheder` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", valgt", other: "" }, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`,
};
var mu = {};
mu = {
	buttonLabel: "Empfehlungen anzeigen",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} Option`, other: () => `${u.number(e.optionCount)} Optionen` })} verfügbar.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} Option`, other: () => `${u.number(e.groupCount)} Optionen` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", ausgewählt", other: "" }, e.isSelected)}`,
	listboxLabel: "Empfehlungen",
	selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`,
};
var hu = {};
hu = {
	buttonLabel: "Προβολή προτάσεων",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} επιλογή`, other: () => `${u.number(e.optionCount)} επιλογές ` })} διαθέσιμες.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} επιλογή`, other: () => `${u.number(e.groupCount)} επιλογές` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", επιλεγμένο", other: "" }, e.isSelected)}`,
	listboxLabel: "Προτάσεις",
	selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`,
};
var gu = {};
gu = {
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Entered group ${e.groupTitle}, with ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} option`, other: () => `${u.number(e.groupCount)} options` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", selected", other: "" }, e.isSelected)}`,
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} option`, other: () => `${u.number(e.optionCount)} options` })} available.`,
	selectedAnnouncement: (e) => `${e.optionText}, selected`,
	buttonLabel: "Show suggestions",
	listboxLabel: "Suggestions",
};
var Au = {};
Au = {
	buttonLabel: "Mostrar sugerencias",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opción`, other: () => `${u.number(e.optionCount)} opciones` })} disponible(s).`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Se ha unido al grupo ${e.groupTitle}, con ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opción`, other: () => `${u.number(e.groupCount)} opciones` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", seleccionado", other: "" }, e.isSelected)}`,
	listboxLabel: "Sugerencias",
	selectedAnnouncement: (e) => `${e.optionText}, seleccionado`,
};
var vu = {};
vu = {
	buttonLabel: "Kuva soovitused",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} valik`, other: () => `${u.number(e.optionCount)} valikud` })} saadaval.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} valik`, other: () => `${u.number(e.groupCount)} valikud` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", valitud", other: "" }, e.isSelected)}`,
	listboxLabel: "Soovitused",
	selectedAnnouncement: (e) => `${e.optionText}, valitud`,
};
var Eu = {};
Eu = {
	buttonLabel: "Näytä ehdotukset",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} vaihtoehto`, other: () => `${u.number(e.optionCount)} vaihtoehdot` })} saatavilla.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Mentiin ryhmään ${e.groupTitle}, ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} vaihtoehdon`, other: () => `${u.number(e.groupCount)} vaihtoehdon` })} kanssa.`, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", valittu", other: "" }, e.isSelected)}`,
	listboxLabel: "Ehdotukset",
	selectedAnnouncement: (e) => `${e.optionText}, valittu`,
};
var Bu = {};
Bu = {
	buttonLabel: "Afficher les suggestions",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} option`, other: () => `${u.number(e.optionCount)} options` })} disponible(s).`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Groupe ${e.groupTitle} rejoint, avec ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} option`, other: () => `${u.number(e.groupCount)} options` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", sélectionné(s)", other: "" }, e.isSelected)}`,
	listboxLabel: "Suggestions",
	selectedAnnouncement: (e) => `${e.optionText}, sélectionné`,
};
var Du = {};
Du = {
	buttonLabel: "הצג הצעות",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `אפשרות ${u.number(e.optionCount)}`, other: () => `${u.number(e.optionCount)} אפשרויות` })} במצב זמין.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${u.plural(e.groupCount, { one: () => `אפשרות ${u.number(e.groupCount)}`, other: () => `${u.number(e.groupCount)} אפשרויות` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", נבחר", other: "" }, e.isSelected)}`,
	listboxLabel: "הצעות",
	selectedAnnouncement: (e) => `${e.optionText}, נבחר`,
};
var yu = {};
yu = {
	buttonLabel: "Prikaži prijedloge",
	countAnnouncement: (e, u) =>
		`Dostupno još: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije/a` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Unesena skupina ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcijom`, other: () => `${u.number(e.groupCount)} opcije/a` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", odabranih", other: "" }, e.isSelected)}`,
	listboxLabel: "Prijedlozi",
	selectedAnnouncement: (e) => `${e.optionText}, odabrano`,
};
var Tu = {};
Tu = {
	buttonLabel: "Javaslatok megjelenítése",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} lehetőség`, other: () => `${u.number(e.optionCount)} lehetőség` })} áll rendelkezésre.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} lehetőséget`, other: () => `${u.number(e.groupCount)} lehetőséget` })} tartalmaz. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", kijelölve", other: "" }, e.isSelected)}`,
	listboxLabel: "Javaslatok",
	selectedAnnouncement: (e) => `${e.optionText}, kijelölve`,
};
var Pu = {};
Pu = {
	buttonLabel: "Mostra suggerimenti",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opzione disponibile`, other: () => `${u.number(e.optionCount)} opzioni disponibili` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opzione`, other: () => `${u.number(e.groupCount)} opzioni` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", selezionato", other: "" }, e.isSelected)}`,
	listboxLabel: "Suggerimenti",
	selectedAnnouncement: (e) => `${e.optionText}, selezionato`,
};
var Fu = {};
Fu = {
	buttonLabel: "候補を表示",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 個のオプション`, other: () => `${u.number(e.optionCount)} 個のオプション` })}を利用できます。`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `入力されたグループ ${e.groupTitle}、${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 個のオプション`, other: () => `${u.number(e.groupCount)} 個のオプション` })}を含む。`, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: "、選択済み", other: "" }, e.isSelected)}`,
	listboxLabel: "候補",
	selectedAnnouncement: (e) => `${e.optionText}、選択済み`,
};
var Su = {};
Su = {
	buttonLabel: "제안 사항 표시",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)}개 옵션`, other: () => `${u.number(e.optionCount)}개 옵션` })}을 사용할 수 있습니다.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `입력한 그룹 ${e.groupTitle}, ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)}개 옵션`, other: () => `${u.number(e.groupCount)}개 옵션` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", 선택됨", other: "" }, e.isSelected)}`,
	listboxLabel: "제안",
	selectedAnnouncement: (e) => `${e.optionText}, 선택됨`,
};
var ku = {};
ku = {
	buttonLabel: "Rodyti pasiūlymus",
	countAnnouncement: (e, u) =>
		`Yra ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} parinktis`, other: () => `${u.number(e.optionCount)} parinktys (-ių)` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Įvesta grupė ${e.groupTitle}, su ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} parinktimi`, other: () => `${u.number(e.groupCount)} parinktimis (-ių)` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", pasirinkta", other: "" }, e.isSelected)}`,
	listboxLabel: "Pasiūlymai",
	selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`,
};
var Mu = {};
Mu = {
	buttonLabel: "Rādīt ieteikumus",
	countAnnouncement: (e, u) =>
		`Pieejamo opciju skaits: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcijas` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Ievadīta grupa ${e.groupTitle}, ar ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opciju`, other: () => `${u.number(e.groupCount)} opcijām` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", atlasīta", other: "" }, e.isSelected)}`,
	listboxLabel: "Ieteikumi",
	selectedAnnouncement: (e) => `${e.optionText}, atlasīta`,
};
var Lu = {};
Lu = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} alternativ`, other: () => `${u.number(e.optionCount)} alternativer` })} finnes.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Angitt gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} alternativ`, other: () => `${u.number(e.groupCount)} alternativer` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", valgt", other: "" }, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`,
};
var Ru = {};
Ru = {
	buttonLabel: "Suggesties weergeven",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} optie`, other: () => `${u.number(e.optionCount)} opties` })} beschikbaar.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Groep ${e.groupTitle} ingevoerd met ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} optie`, other: () => `${u.number(e.groupCount)} opties` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", geselecteerd", other: "" }, e.isSelected)}`,
	listboxLabel: "Suggesties",
	selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`,
};
var Ou = {};
Ou = {
	buttonLabel: "Wyświetlaj sugestie",
	countAnnouncement: (e, u) =>
		`dostępna/dostępne(-nych) ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcja`, other: () => `${u.number(e.optionCount)} opcje(-i)` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Dołączono do grupy ${e.groupTitle}, z ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcją`, other: () => `${u.number(e.groupCount)} opcjami` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", wybrano", other: "" }, e.isSelected)}`,
	listboxLabel: "Sugestie",
	selectedAnnouncement: (e) => `${e.optionText}, wybrano`,
};
var Iu = {};
Iu = {
	buttonLabel: "Mostrar sugestões",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opção`, other: () => `${u.number(e.optionCount)} opções` })} disponível.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Grupo inserido ${e.groupTitle}, com ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opção`, other: () => `${u.number(e.groupCount)} opções` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", selecionado", other: "" }, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`,
};
var Vu = {};
Vu = {
	buttonLabel: "Apresentar sugestões",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opção`, other: () => `${u.number(e.optionCount)} opções` })} disponível.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Grupo introduzido ${e.groupTitle}, com ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opção`, other: () => `${u.number(e.groupCount)} opções` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", selecionado", other: "" }, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`,
};
var ju = {};
ju = {
	buttonLabel: "Afișare sugestii",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opțiune`, other: () => `${u.number(e.optionCount)} opțiuni` })} disponibile.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Grup ${e.groupTitle} introdus, cu ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opțiune`, other: () => `${u.number(e.groupCount)} opțiuni` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", selectat", other: "" }, e.isSelected)}`,
	listboxLabel: "Sugestii",
	selectedAnnouncement: (e) => `${e.optionText}, selectat`,
};
var Ku = {};
Ku = {
	buttonLabel: "Показать предложения",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} параметр`, other: () => `${u.number(e.optionCount)} параметров` })} доступно.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Введенная группа ${e.groupTitle}, с ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} параметром`, other: () => `${u.number(e.groupCount)} параметрами` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", выбранными", other: "" }, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, выбрано`,
};
var zu = {};
zu = {
	buttonLabel: "Zobraziť návrhy",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} možnosť`, other: () => `${u.number(e.optionCount)} možnosti/-í` })} k dispozícii.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Zadaná skupina ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} možnosťou`, other: () => `${u.number(e.groupCount)} možnosťami` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", vybraté", other: "" }, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybraté`,
};
var wu = {};
wu = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, u) =>
		`Na voljo je ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Vnesena skupina ${e.groupTitle}, z ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcija`, other: () => `${u.number(e.groupCount)} opcije` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", izbrano", other: "" }, e.isSelected)}`,
	listboxLabel: "Predlogi",
	selectedAnnouncement: (e) => `${e.optionText}, izbrano`,
};
var Gu = {};
Gu = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, u) =>
		`Dostupno još: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije/a` })}.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Unesena grupa ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcijom`, other: () => `${u.number(e.groupCount)} optione/a` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", izabranih", other: "" }, e.isSelected)}`,
	listboxLabel: "Predlozi",
	selectedAnnouncement: (e) => `${e.optionText}, izabrano`,
};
var Nu = {};
Nu = {
	buttonLabel: "Visa förslag",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} alternativ`, other: () => `${u.number(e.optionCount)} alternativ` })} tillgängliga.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Ingick i gruppen ${e.groupTitle} med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} alternativ`, other: () => `${u.number(e.groupCount)} alternativ` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", valda", other: "" }, e.isSelected)}`,
	listboxLabel: "Förslag",
	selectedAnnouncement: (e) => `${e.optionText}, valda`,
};
var qu = {};
qu = {
	buttonLabel: "Önerileri göster",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} seçenek`, other: () => `${u.number(e.optionCount)} seçenekler` })} kullanılabilir.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Girilen grup ${e.groupTitle}, ile ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} seçenek`, other: () => `${u.number(e.groupCount)} seçenekler` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", seçildi", other: "" }, e.isSelected)}`,
	listboxLabel: "Öneriler",
	selectedAnnouncement: (e) => `${e.optionText}, seçildi`,
};
var Uu = {};
Uu = {
	buttonLabel: "Показати пропозиції",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} параметр`, other: () => `${u.number(e.optionCount)} параметри(-ів)` })} доступно.`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `Введена група ${e.groupTitle}, з ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} параметр`, other: () => `${u.number(e.groupCount)} параметри(-ів)` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", вибрано", other: "" }, e.isSelected)}`,
	listboxLabel: "Пропозиції",
	selectedAnnouncement: (e) => `${e.optionText}, вибрано`,
};
var Hu = {};
Hu = {
	buttonLabel: "显示建议",
	countAnnouncement: (e, u) =>
		`有 ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 个选项`, other: () => `${u.number(e.optionCount)} 个选项` })}可用。`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `进入了 ${e.groupTitle} 组，其中有 ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 个选项`, other: () => `${u.number(e.groupCount)} 个选项` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", 已选择", other: "" }, e.isSelected)}`,
	listboxLabel: "建议",
	selectedAnnouncement: (e) => `${e.optionText}, 已选择`,
};
var _u = {};
_u = {
	buttonLabel: "顯示建議",
	countAnnouncement: (e, u) =>
		`${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 選項`, other: () => `${u.number(e.optionCount)} 選項` })} 可用。`,
	focusAnnouncement: (e, u) =>
		`${u.select({ true: () => `輸入的群組 ${e.groupTitle}, 有 ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 選項`, other: () => `${u.number(e.groupCount)} 選項` })}. `, other: "" }, e.isGroupChange)}${e.optionText}${u.select({ true: ", 已選取", other: "" }, e.isSelected)}`,
	listboxLabel: "建議",
	selectedAnnouncement: (e) => `${e.optionText}, 已選取`,
};
var Wu = {};
Wu = {
	"ar-AE": bu,
	"bg-BG": fu,
	"cs-CZ": Cu,
	"da-DK": xu,
	"de-DE": mu,
	"el-GR": hu,
	"en-US": gu,
	"es-ES": Au,
	"et-EE": vu,
	"fi-FI": Eu,
	"fr-FR": Bu,
	"he-IL": Du,
	"hr-HR": yu,
	"hu-HU": Tu,
	"it-IT": Pu,
	"ja-JP": Fu,
	"ko-KR": Su,
	"lt-LT": ku,
	"lv-LV": Mu,
	"nb-NO": Lu,
	"nl-NL": Ru,
	"pl-PL": Ou,
	"pt-BR": Iu,
	"pt-PT": Vu,
	"ro-RO": ju,
	"ru-RU": Ku,
	"sk-SK": zu,
	"sl-SI": wu,
	"sr-SP": Gu,
	"sv-SE": Nu,
	"tr-TR": qu,
	"uk-UA": Uu,
	"zh-CN": Hu,
	"zh-TW": _u,
};
function Zn(e) {
	return e && e.__esModule ? e.default : e;
}
function Xn(e, u) {
	let {
			buttonRef: l,
			popoverRef: c,
			inputRef: t,
			listBoxRef: a,
			keyboardDelegate: s,
			layoutDelegate: C,
			shouldFocusWrap: D,
			isReadOnly: p,
			isDisabled: y,
		} = e,
		E = n.useRef(null);
	l = l ?? E;
	const g = Me(Zn(Wu), "@react-aria/combobox"),
		{ menuTriggerProps: d, menuProps: T } = Wn(
			{ type: "listbox", isDisabled: y || p },
			u,
			l,
		);
	hn.set(u, { id: T.id });
	const { collection: L } = u,
		{ disabledKeys: O } = u.selectionManager,
		f = n.useMemo(
			() =>
				s ||
				new kn({ collection: L, disabledKeys: O, ref: a, layoutDelegate: C }),
			[s, C, L, O, a],
		),
		{ collectionProps: M } = Mn({
			selectionManager: u.selectionManager,
			keyboardDelegate: f,
			disallowTypeAhead: !0,
			disallowEmptySelection: !0,
			shouldFocusWrap: D,
			ref: t,
			isVirtualized: !0,
		}),
		A = On(),
		v = (r) => {
			if (!r.nativeEvent.isComposing)
				switch (r.key) {
					case "Enter":
					case "Tab":
						if (
							(u.isOpen && r.key === "Enter" && r.preventDefault(),
							u.isOpen && a.current && u.selectionManager.focusedKey != null)
						) {
							const i = u.collection.getItem(u.selectionManager.focusedKey);
							if (i != null && i.props.href) {
								const P = a.current.querySelector(
									`[data-key="${CSS.escape(u.selectionManager.focusedKey.toString())}"]`,
								);
								r.key === "Enter" &&
									P instanceof HTMLAnchorElement &&
									A.open(P, r, i.props.href, i.props.routerOptions),
									u.close();
								break;
							} else if (i != null && i.props.onAction) {
								i.props.onAction(), u.close();
								break;
							}
						}
						(r.key === "Enter" || u.isOpen) && u.commit();
						break;
					case "Escape":
						(!u.selectionManager.isEmpty ||
							u.inputValue === "" ||
							e.allowsCustomValue) &&
							r.continuePropagation(),
							u.revert();
						break;
					case "ArrowDown":
						u.open("first", "manual");
						break;
					case "ArrowUp":
						u.open("last", "manual");
						break;
					case "ArrowLeft":
					case "ArrowRight":
						u.selectionManager.setFocusedKey(null);
						break;
				}
		},
		G = (r) => {
			const i =
					(l == null ? void 0 : l.current) && l.current === r.relatedTarget,
				P = jn(c.current, r.relatedTarget);
			i || P || (e.onBlur && e.onBlur(r), u.setFocused(!1));
		},
		x = (r) => {
			u.isFocused || (e.onFocus && e.onFocus(r), u.setFocused(!0));
		},
		N = Jn([u.selectionManager.selectedKeys, u.selectionManager.selectionMode]),
		{
			isInvalid: $,
			validationErrors: q,
			validationDetails: U,
		} = u.displayValidation,
		{
			labelProps: H,
			inputProps: R,
			descriptionProps: F,
			errorMessageProps: _,
		} = Un(
			{
				...e,
				isRequired:
					e.selectionMode === "multiple"
						? e.isRequired && u.selectionManager.isEmpty
						: e.isRequired,
				onChange: u.setInputValue,
				onKeyDown: p
					? e.onKeyDown
					: Qu(u.isOpen && M.onKeyDown, v, e.onKeyDown),
				onBlur: G,
				value: u.inputValue,
				defaultValue: u.defaultInputValue,
				onFocus: x,
				autoComplete: "off",
				validate: void 0,
				[dn]: u,
				"aria-describedby":
					[N, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
			},
			t,
		);
	Be(t, u.defaultValue, u.setValue);
	const J = (r) => {
			var i;
			r.pointerType === "touch" &&
				((i = t.current) == null || i.focus(), u.toggle(null, "manual"));
		},
		j = (r) => {
			var i;
			r.pointerType !== "touch" &&
				((i = t.current) == null || i.focus(),
				u.toggle(
					r.pointerType === "keyboard" || r.pointerType === "virtual"
						? "first"
						: null,
					"manual",
				));
		},
		I = Ce({
			id: d.id,
			"aria-label": g.format("buttonLabel"),
			"aria-labelledby": e["aria-labelledby"] || H.id,
		}),
		b = Ce({
			id: T.id,
			"aria-label": g.format("listboxLabel"),
			"aria-labelledby": e["aria-labelledby"] || H.id,
		}),
		S = n.useRef(0),
		ee = (r) => {
			var Q, oe;
			if (y || p) return;
			if (r.timeStamp - S.current < 500) {
				r.preventDefault(), (Q = t.current) == null || Q.focus();
				return;
			}
			const i = ke(r).getBoundingClientRect(),
				P = r.changedTouches[0],
				Z = Math.ceil(i.left + 0.5 * i.width),
				le = Math.ceil(i.top + 0.5 * i.height);
			P.clientX === Z &&
				P.clientY === le &&
				(r.preventDefault(),
				(oe = t.current) == null || oe.focus(),
				u.toggle(null, "manual"),
				(S.current = r.timeStamp));
		},
		B =
			u.selectionManager.focusedKey != null && u.isOpen
				? u.collection.getItem(u.selectionManager.focusedKey)
				: void 0,
		W = (B == null ? void 0 : B.parentKey) ?? null,
		k = u.selectionManager.focusedKey ?? null,
		Y = n.useRef(W),
		K = n.useRef(k);
	n.useEffect(() => {
		if (ae() && B != null && k != null && k !== K.current) {
			const r = u.selectionManager.isSelected(k),
				i = W != null ? u.collection.getItem(W) : null,
				P =
					(i == null ? void 0 : i["aria-label"]) ||
					(typeof (i == null ? void 0 : i.rendered) == "string"
						? i.rendered
						: "") ||
					"",
				Z = g.format("focusAnnouncement", {
					isGroupChange: (i && W !== Y.current) ?? !1,
					groupTitle: P,
					groupCount: i ? [...Se(i, u.collection)].length : 0,
					optionText: B["aria-label"] || B.textValue || "",
					isSelected: r,
				});
			ie(Z);
		}
		(Y.current = W), (K.current = k);
	});
	const z = gn(u.collection),
		w = n.useRef(z),
		ue = n.useRef(u.isOpen);
	n.useEffect(() => {
		const r =
			u.isOpen !== ue.current &&
			(u.selectionManager.focusedKey == null || ae());
		if (u.isOpen && (r || z !== w.current)) {
			const i = g.format("countAnnouncement", { optionCount: z });
			ie(i);
		}
		(w.current = z), (ue.current = u.isOpen);
	});
	const ne = n.useRef(u.selectedKey);
	return (
		n.useEffect(() => {
			if (
				ae() &&
				u.isFocused &&
				u.selectedItem &&
				u.selectedKey !== ne.current
			) {
				const r =
						u.selectedItem["aria-label"] || u.selectedItem.textValue || "",
					i = g.format("selectedAnnouncement", { optionText: r });
				ie(i);
			}
			ne.current = u.selectedKey;
		}),
		n.useEffect(() => {
			if (u.isOpen) return Tn([t.current, c.current].filter((r) => r != null));
		}, [u.isOpen, t, c]),
		Gn(() => {
			!B && t.current && In(Vn(t.current)) === t.current && Ln(t.current, null);
		}, [B]),
		Kn(
			a,
			"react-aria-item-action",
			u.isOpen
				? () => {
						u.close();
					}
				: void 0,
		),
		{
			labelProps: H,
			buttonProps: {
				...d,
				...I,
				excludeFromTabOrder: !0,
				preventFocusOnPress: !0,
				onPress: J,
				onPressStart: j,
				isDisabled: y || p,
			},
			inputProps: se(R, {
				role: "combobox",
				"aria-expanded": d["aria-expanded"],
				"aria-controls": u.isOpen ? T.id : void 0,
				"aria-autocomplete": "list",
				"aria-activedescendant": B ? An(u, B.key) : void 0,
				onTouchEnd: ee,
				autoCorrect: "off",
				spellCheck: "false",
			}),
			listBoxProps: se(T, b, {
				autoFocus: u.focusStrategy || !0,
				shouldUseVirtualFocus: !0,
				shouldSelectOnPressUp: !0,
				shouldFocusOnHover: !0,
				linkBehavior: "selection",
				UNSTABLE_itemBehavior: "action",
			}),
			valueProps: { id: N },
			descriptionProps: F,
			errorMessageProps: _,
			isInvalid: $,
			validationErrors: q,
			validationDetails: U,
		}
	);
}
function Jn(e = []) {
	const u = ce(),
		[l, c] = n.useState(!0),
		[t, a] = n.useState(e);
	return (
		t.some((s, C) => !Object.is(s, e[C])) && (c(!0), a(e)),
		n.useEffect(() => {
			l && !document.getElementById(u) && c(!1);
		}, [u, l, t]),
		l ? u : void 0
	);
}
function Yn(e) {
	var pe;
	const {
			defaultFilter: u,
			menuTrigger: l = "input",
			allowsEmptyCollection: c = !1,
			allowsCustomValue: t,
			shouldCloseOnBlur: a = !0,
			selectionMode: s = "single",
		} = e,
		[C, D] = n.useState(!1),
		[p, y] = n.useState(!1),
		[E, g] = n.useState(null),
		d = n.useMemo(
			() =>
				e.defaultValue !== void 0
					? e.defaultValue
					: s === "single"
						? (e.defaultSelectedKey ?? null)
						: [],
			[e.defaultValue, e.defaultSelectedKey, s],
		),
		T = n.useMemo(
			() =>
				e.value !== void 0 ? e.value : s === "single" ? e.selectedKey : void 0,
			[e.value, e.selectedKey, s],
		),
		[L, O] = re(T, d, e.onChange),
		f = s === "single" && Array.isArray(L) ? L[0] : L,
		M = (o) => {
			var m;
			if (s === "single") {
				const h = Array.isArray(o) ? (o[0] ?? null) : o;
				O(h), h !== f && ((m = e.onSelectionChange) == null || m.call(e, h));
			} else {
				let h = [];
				Array.isArray(o) ? (h = o) : o != null && (h = [o]), O(h);
			}
		},
		{
			collection: A,
			selectionManager: v,
			disabledKeys: G,
		} = vn({
			...e,
			items: e.items ?? e.defaultItems,
			selectionMode: s,
			disallowEmptySelection: s === "single",
			allowDuplicateSelectionEvents: !0,
			selectedKeys: n.useMemo(() => eo(f), [f]),
			onSelectionChange: (o) => {
				var m;
				if (o !== "all")
					if (s === "single") {
						const h = o.values().next().value ?? null;
						h === f
							? ((m = e.onSelectionChange) == null || m.call(e, h), z(), k())
							: M(h);
					} else M([...o]);
			},
		}),
		x = s === "single" ? v.firstSelectedKey : null,
		N = n.useMemo(
			() =>
				[...v.selectedKeys].map((o) => A.getItem(o)).filter((o) => o != null),
			[v.selectedKeys, A],
		),
		[$, q] = re(
			e.inputValue,
			xe(e.defaultInputValue, x, A) || "",
			e.onInputChange,
		),
		[U] = n.useState(f),
		[H] = n.useState($),
		R = A,
		F = n.useMemo(
			() => (e.items != null || !u ? A : Qn(A, $, u)),
			[A, $, u, e.items],
		),
		[_, J] = n.useState(F),
		j = n.useRef("focus"),
		b = Nn({
			...e,
			onOpenChange: (o) => {
				e.onOpenChange && e.onOpenChange(o, o ? j.current : void 0),
					v.setFocused(o),
					o || v.setFocusedKey(null);
			},
			isOpen: void 0,
			defaultOpen: void 0,
		}),
		S = (o = null, m) => {
			const h = m === "manual" || (m === "focus" && l === "focus");
			(c || F.size > 0 || (h && R.size > 0) || e.items) &&
				(h && !b.isOpen && e.items === void 0 && D(!0),
				(j.current = m),
				g(o),
				b.open());
		},
		ee = (o = null, m) => {
			const h = m === "manual" || (m === "focus" && l === "focus");
			(!(c || F.size > 0 || (h && R.size > 0) || e.items) && !b.isOpen) ||
				(h && !b.isOpen && e.items === void 0 && D(!0),
				b.isOpen || (j.current = m),
				W(o));
		},
		B = n.useCallback(() => {
			J(C ? R : F);
		}, [C, R, F]),
		W = n.useCallback(
			(o = null) => {
				b.isOpen && B(), g(o), b.toggle();
			},
			[b, B],
		),
		k = n.useCallback(() => {
			b.isOpen && (B(), b.close());
		}, [b, B]),
		[Y, K] = n.useState($),
		z = () => {
			var m;
			const o =
				x != null
					? (((m = A.getItem(x)) == null ? void 0 : m.textValue) ?? "")
					: "";
			K(o), q(o);
		},
		w = n.useRef(f),
		ue = n.useRef(
			x != null
				? (((pe = A.getItem(x)) == null ? void 0 : pe.textValue) ?? "")
				: "",
		);
	n.useEffect(() => {
		var m;
		p &&
			(F.size > 0 || c) &&
			!b.isOpen &&
			$ !== Y &&
			l !== "manual" &&
			S(null, "input"),
			!C && !c && b.isOpen && F.size === 0 && k(),
			f != null && f !== w.current && s === "single" && k(),
			$ !== Y &&
				(v.setFocusedKey(null),
				D(!1),
				s === "single" &&
					$ === "" &&
					(e.inputValue === void 0 || T === void 0) &&
					M(null)),
			f !== w.current && (e.inputValue === void 0 || T === void 0)
				? z()
				: Y !== $ && K($);
		const o =
			x != null
				? (((m = A.getItem(x)) == null ? void 0 : m.textValue) ?? "")
				: "";
		!p &&
			x != null &&
			e.inputValue === void 0 &&
			x === w.current &&
			ue.current !== o &&
			(K(o), q(o)),
			(w.current = f),
			(ue.current = o);
	});
	const ne = Ee({
			...e,
			value: n.useMemo(
				() =>
					Array.isArray(f) && f.length === 0
						? null
						: { inputValue: $, value: f, selectedKey: x },
				[$, x, f],
			),
		}),
		r = () => {
			t && x == null ? i() : P();
		},
		i = () => {
			if (s === "multiple") {
				K($), k();
				return;
			}
			const o = null;
			(w.current = o), M(o), k();
		},
		P = (o = !1) => {
			var m, h, $e;
			if (T !== void 0 && e.inputValue !== void 0) {
				const be =
					x != null
						? (((m = A.getItem(x)) == null ? void 0 : m.textValue) ?? "")
						: "";
				(o || s === "multiple" || $ !== be) &&
					((h = e.onSelectionChange) == null || h.call(e, x),
					($e = e.onChange) == null || $e.call(e, f)),
					K(be),
					k();
			} else z(), k();
		};
	const Z = () => {
		var o;
		if (t) {
			const m =
				x != null
					? (((o = A.getItem(x)) == null ? void 0 : o.textValue) ?? "")
					: "";
			$ === m ? P() : i();
		} else P();
	};
	const le = () => {
			b.isOpen && v.focusedKey != null
				? v.isSelected(v.focusedKey) && s === "single"
					? P(!0)
					: v.select(v.focusedKey)
				: Z();
		},
		Q = n.useRef([$, f]),
		oe = (o) => {
			o
				? ((Q.current = [$, f]),
					l === "focus" && !e.isReadOnly && S(null, "focus"))
				: (a && Z(),
					($ !== Q.current[0] || f !== Q.current[1]) && ne.commitValidation()),
				y(o);
		},
		Ju = n.useMemo(() => (b.isOpen ? (C ? R : F) : _), [b.isOpen, R, F, C, _]),
		de = e.defaultSelectedKey ?? (s === "single" ? U : null);
	return {
		...ne,
		...b,
		focusStrategy: E,
		toggle: ee,
		open: S,
		close: Z,
		selectionManager: v,
		value: f,
		defaultValue: d ?? U,
		setValue: M,
		selectedKey: x,
		selectedItems: N,
		defaultSelectedKey: de,
		setSelectedKey: M,
		disabledKeys: G,
		isFocused: p,
		setFocused: oe,
		selectedItem: N[0] ?? null,
		collection: Ju,
		inputValue: $,
		defaultInputValue: xe(e.defaultInputValue, de, A) ?? H,
		setInputValue: q,
		commit: le,
		revert: r,
	};
}
function Qn(e, u, l) {
	return new En(Zu(e, e, u, l));
}
function Zu(e, u, l, c) {
	const t = [];
	for (const a of u)
		if (a.type === "section" && a.hasChildNodes) {
			const s = Zu(e, Se(a, e), l, c);
			[...s].some((C) => C.type === "item") && t.push({ ...a, childNodes: s });
		} else
			a.type === "item" && c(a.textValue, l)
				? t.push({ ...a })
				: a.type !== "item" && t.push({ ...a });
	return t;
}
function xe(e, u, l) {
	var c;
	return e == null && u != null
		? (((c = l.getItem(u)) == null ? void 0 : c.textValue) ?? "")
		: e;
}
function eo(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
const uo = n.createContext(null),
	no = n.createContext(null),
	oo = en((u, l) => {
		[u, l] = un(u, l, uo);
		const {
				children: c,
				isDisabled: t = !1,
				isInvalid: a = !1,
				isRequired: s = !1,
				isReadOnly: C = !1,
			} = u,
			D = n.useMemo(
				() =>
					X.createElement(
						Pe.Provider,
						{ value: { items: u.items ?? u.defaultItems } },
						typeof c == "function"
							? c({
									isOpen: !1,
									isDisabled: t,
									isInvalid: a,
									isRequired: s,
									defaultChildren: null,
									isReadOnly: C,
								})
							: c,
					),
				[c, t, a, s, C, u.items, u.defaultItems],
			);
		return X.createElement(Rn, { content: D }, (p) =>
			X.createElement(lo, { props: u, collection: p, comboBoxRef: l }),
		);
	}),
	to = [Te, ve, ye, De, Fe];
function lo({ props: e, collection: u, comboBoxRef: l }) {
	let { name: c, formValue: t = "key", allowsCustomValue: a } = e;
	a && (t = "text");
	const { validationBehavior: s } = nn(pn) || {},
		C = e.validationBehavior ?? s ?? "native",
		{ contains: D } = $n({ sensitivity: "base" }),
		p = Yn({
			...e,
			defaultFilter: e.defaultFilter || D,
			items: e.items,
			children: void 0,
			collection: u,
			validationBehavior: C,
		}),
		y = n.useRef(null),
		E = n.useRef(null),
		g = n.useRef(null),
		d = n.useRef(null),
		T = n.useRef(null),
		[L, O] = on(!e["aria-label"] && !e["aria-labelledby"]),
		{
			buttonProps: f,
			inputProps: M,
			listBoxProps: A,
			labelProps: v,
			descriptionProps: G,
			errorMessageProps: x,
			valueProps: N,
			...$
		} = Xn(
			{
				...tn(e),
				label: O,
				inputRef: E,
				buttonRef: y,
				listBoxRef: d,
				popoverRef: T,
				name: t === "text" ? c : void 0,
				validationBehavior: C,
			},
			p,
		),
		[q, U] = n.useState(null),
		H = n.useCallback(() => {
			var I;
			if (E.current && !g.current) {
				const b = (I = y.current) == null ? void 0 : I.getBoundingClientRect(),
					S = E.current.getBoundingClientRect(),
					ee = b ? Math.min(b.left, S.left) : S.left,
					B = b ? Math.max(b.right, S.right) : S.right;
				U(B - ee + "px");
			}
		}, [y, E, U]);
	wn({ ref: E, onResize: H });
	const R = n.useMemo(
			() => ({
				get current() {
					return g.current || E.current;
				},
			}),
			[g, E],
		),
		F = n.useMemo(
			() => ({
				isOpen: p.isOpen,
				isDisabled: e.isDisabled || !1,
				isInvalid: $.isInvalid || !1,
				isRequired: e.isRequired || !1,
				isReadOnly: e.isReadOnly || !1,
			}),
			[p.isOpen, e.isDisabled, $.isInvalid, e.isRequired, e.isReadOnly],
		),
		_ = ln({ ...e, values: F, defaultClassName: "react-aria-ComboBox" }),
		J = Ae(e, { global: !0 });
	delete J.id;
	let j = [];
	if (c && t === "key") {
		let I = Array.isArray(p.value) ? p.value : [p.value];
		I.length === 0 && (I = [null]),
			(j = I.map((b, S) =>
				X.createElement("input", {
					key: S,
					type: "hidden",
					name: c,
					form: e.form,
					value: b ?? "",
				}),
			));
	}
	return X.createElement(
		an,
		{
			values: [
				[no, p],
				[Te, { ...v, ref: L }],
				[ve, { ...f, ref: y, isPressed: p.isOpen }],
				[ye, { ...M, ref: E }],
				[Pn, p],
				[
					bn,
					{
						ref: T,
						triggerRef: R,
						scrollRef: d,
						placement: "bottom start",
						isNonModal: !0,
						trigger: "ComboBox",
						style: { "--trigger-width": q },
						clearContexts: to,
					},
				],
				[Pe, { ...A, ref: d }],
				[Bn, p],
				[Fe, { slots: { description: G, errorMessage: x } }],
				[
					De,
					{ ref: g, isInvalid: $.isInvalid, isDisabled: e.isDisabled || !1 },
				],
				[fn, $],
				[io, N],
			],
		},
		X.createElement(
			sn.div,
			{
				...J,
				..._,
				ref: l,
				slot: e.slot || void 0,
				"data-focused": p.isFocused || void 0,
				"data-open": p.isOpen || void 0,
				"data-disabled": e.isDisabled || void 0,
				"data-readonly": e.isReadOnly || void 0,
				"data-invalid": $.isInvalid || void 0,
				"data-required": e.isRequired || void 0,
			},
			_.children,
			j,
		),
	);
}
const io = n.createContext(null),
	Xu = ({ label: e, items: u, description: l, errorMessage: c, ...t }) =>
		V.jsxs(oo, {
			items: u,
			...t,
			className: "flex flex-col gap-1",
			children: [
				V.jsx(mn, { children: e }),
				V.jsx("div", { className: "relative", children: V.jsx(qn, {}) }),
				l &&
					V.jsx(Fn, {
						slot: "description",
						className: "text-xs text-foreground mt-1",
						children: l,
					}),
				V.jsx(Cn, { className: "text-xs text-danger mt-1", children: c }),
				V.jsx(xn, {
					className:
						"z-50 bg-popover border border-border shadow-lg rounded-md mt-1 overflow-hidden",
					children: V.jsx(Dn, {
						className: "p-1 outline-none",
						children: (a) =>
							V.jsx(yn, {
								id: a.id,
								className:
									"cursor-pointer px-3 py-2 text-sm text-foreground data-[hovered]:bg-surface-hover data-[focused]:bg-surface-hover rounded-sm outline-none",
								children: a.label,
							}),
					}),
				}),
			],
		});
Xu.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "Combobox",
	props: {
		label: { required: !0, tsType: { name: "string" }, description: "" },
		items: {
			required: !0,
			tsType: { name: "Array", elements: [{ name: "T" }], raw: "T[]" },
			description: "",
		},
		description: { required: !1, tsType: { name: "string" }, description: "" },
		errorMessage: { required: !1, tsType: { name: "string" }, description: "" },
	},
	composes: ["Omit"],
};
const To = {
		title: "UI/Form Controls/Combobox",
		component: Xu,
		parameters: { layout: "centered" },
		tags: ["autodocs"],
	},
	ao = [
		{ id: "1", label: "Cat" },
		{ id: "2", label: "Dog" },
		{ id: "3", label: "Kangaroo" },
	],
	te = {
		args: {
			label: "Favorite Animal",
			items: ao,
			description: "Choose your favorite animal from the list",
		},
	};
var me, he, ge;
te.parameters = {
	...te.parameters,
	docs: {
		...((me = te.parameters) == null ? void 0 : me.docs),
		source: {
			originalSource: `{
  args: {
    label: "Favorite Animal",
    items,
    description: "Choose your favorite animal from the list"
  }
}`,
			...((ge = (he = te.parameters) == null ? void 0 : he.docs) == null
				? void 0
				: ge.source),
		},
	},
};
const Po = ["Default"];
export { Po as __namedExportsOrder, To as default, te as Default };
