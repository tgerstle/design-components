import {
	k as Hu,
	i as Lu,
	l as M,
	e as N,
	f as nt,
	b as Ou,
} from "./Button-DMaXDISd.js";
import {
	l as _u,
	i as A,
	b as Ae,
	d as fe,
	m as I,
	f as j,
	e as ot,
	$ as te,
	n as Uu,
	c as Wu,
	h as ye,
} from "./Hidden-DxJAwdyU.js";
import { R as $, r as p } from "./index-BGsE_GxY.js";
import { j as O } from "./jsx-runtime-BjG_zV1W.js";
import {
	a as _,
	f as Ce,
	r as cl,
	j as ct,
	e as dl,
	$ as Fe,
	q as H,
	t as Pe,
	c as U,
} from "./useCollator-DduXULBj.js";
import {
	j as _e,
	z as ae,
	$ as al,
	b as at,
	s as el,
	h as Gu,
	d as Ie,
	H as il,
	k as it,
	t as Ju,
	g as Ke,
	a as k,
	I as ll,
	i as nl,
	q as ol,
	o as pe,
	F as Qu,
	D as qu,
	B as R,
	m as rl,
	E as rt,
	y as S,
	w as sl,
	n as st,
	l as tl,
	v as ul,
	A as W,
	G as X,
	u as Xu,
	C as Yu,
	e as Zu,
	f as ze,
} from "./useLoadMoreSentinel-Dio_d_Bw.js";
import "./index-B9nXkq7N.js";
import { a as dt, $ as ue } from "./useControlledState-DNChzxNu.js";
import {
	c as ce,
	$ as ee,
	u as fl,
	j as Ge,
	G as he,
	t as ml,
	D as pl,
	f as Q,
	d as We,
	e as xe,
} from "./useHover-qyAt-50Y.js";
import { $ as mt } from "./useUpdateEffect-DPtzyKNG.js";
const ft = p.createContext(null),
	pt = p.createContext(null);
var ht = {};
ht = {
	deselectedItem: (e) => `${e.item} غير المحدد`,
	longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
	select: "تحديد",
	selectedAll: "جميع العناصر المحددة.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "لم يتم تحديد عناصر", one: () => `${t.number(e.count)} عنصر محدد`, other: () => `${t.number(e.count)} عنصر محدد` })}.`,
	selectedItem: (e) => `${e.item} المحدد`,
};
var bt = {};
bt = {
	deselectedItem: (e) => `${e.item} не е избран.`,
	longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
	select: "Изберете",
	selectedAll: "Всички елементи са избрани.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Няма избрани елементи", one: () => `${t.number(e.count)} избран елемент`, other: () => `${t.number(e.count)} избрани елементи` })}.`,
	selectedItem: (e) => `${e.item} избран.`,
};
var $t = {};
$t = {
	deselectedItem: (e) => `Položka ${e.item} není vybrána.`,
	longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
	select: "Vybrat",
	selectedAll: "Vybrány všechny položky.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nevybrány žádné položky", one: () => `Vybrána ${t.number(e.count)} položka`, other: () => `Vybráno ${t.number(e.count)} položek` })}.`,
	selectedItem: (e) => `Vybrána položka ${e.item}.`,
};
var gt = {};
gt = {
	deselectedItem: (e) => `${e.item} ikke valgt.`,
	longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
	select: "Vælg",
	selectedAll: "Alle elementer valgt.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Ingen elementer valgt", one: () => `${t.number(e.count)} element valgt`, other: () => `${t.number(e.count)} elementer valgt` })}.`,
	selectedItem: (e) => `${e.item} valgt.`,
};
var yt = {};
yt = {
	deselectedItem: (e) => `${e.item} nicht ausgewählt.`,
	longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
	select: "Auswählen",
	selectedAll: "Alle Elemente ausgewählt.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Keine Elemente ausgewählt", one: () => `${t.number(e.count)} Element ausgewählt`, other: () => `${t.number(e.count)} Elemente ausgewählt` })}.`,
	selectedItem: (e) => `${e.item} ausgewählt.`,
};
var xt = {};
xt = {
	deselectedItem: (e) => `Δεν επιλέχθηκε το στοιχείο ${e.item}.`,
	longPressToSelect:
		"Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
	select: "Επιλογή",
	selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Δεν επιλέχθηκαν στοιχεία", one: () => `Επιλέχθηκε ${t.number(e.count)} στοιχείο`, other: () => `Επιλέχθηκαν ${t.number(e.count)} στοιχεία` })}.`,
	selectedItem: (e) => `Επιλέχθηκε το στοιχείο ${e.item}.`,
};
var Dt = {};
Dt = {
	deselectedItem: (e) => `${e.item} not selected.`,
	select: "Select",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "No items selected", one: () => `${t.number(e.count)} item selected`, other: () => `${t.number(e.count)} items selected` })}.`,
	selectedAll: "All items selected.",
	selectedItem: (e) => `${e.item} selected.`,
	longPressToSelect: "Long press to enter selection mode.",
};
var Ct = {};
Ct = {
	deselectedItem: (e) => `${e.item} no seleccionado.`,
	longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
	select: "Seleccionar",
	selectedAll: "Todos los elementos seleccionados.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Ningún elemento seleccionado", one: () => `${t.number(e.count)} elemento seleccionado`, other: () => `${t.number(e.count)} elementos seleccionados` })}.`,
	selectedItem: (e) => `${e.item} seleccionado.`,
};
var vt = {};
vt = {
	deselectedItem: (e) => `${e.item} pole valitud.`,
	longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
	select: "Vali",
	selectedAll: "Kõik üksused valitud.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Üksusi pole valitud", one: () => `${t.number(e.count)} üksus valitud`, other: () => `${t.number(e.count)} üksust valitud` })}.`,
	selectedItem: (e) => `${e.item} valitud.`,
};
var Et = {};
Et = {
	deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
	longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
	select: "Valitse",
	selectedAll: "Kaikki kohteet valittu.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Ei yhtään kohdetta valittu", one: () => `${t.number(e.count)} kohde valittu`, other: () => `${t.number(e.count)} kohdetta valittu` })}.`,
	selectedItem: (e) => `${e.item} valittu.`,
};
var Bt = {};
Bt = {
	deselectedItem: (e) => `${e.item} non sélectionné.`,
	longPressToSelect:
		"Appuyez de manière prolongée pour passer en mode de sélection.",
	select: "Sélectionner",
	selectedAll: "Tous les éléments sélectionnés.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Aucun élément sélectionné", one: () => `${t.number(e.count)} élément sélectionné`, other: () => `${t.number(e.count)} éléments sélectionnés` })}.`,
	selectedItem: (e) => `${e.item} sélectionné.`,
};
var kt = {};
kt = {
	deselectedItem: (e) => `${e.item} לא נבחר.`,
	longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
	select: "בחר",
	selectedAll: "כל הפריטים נבחרו.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "לא נבחרו פריטים", one: () => `פריט ${t.number(e.count)} נבחר`, other: () => `${t.number(e.count)} פריטים נבחרו` })}.`,
	selectedItem: (e) => `${e.item} נבחר.`,
};
var wt = {};
wt = {
	deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
	longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
	select: "Odaberite",
	selectedAll: "Odabrane su sve stavke.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nije odabrana nijedna stavka", one: () => `Odabrana je ${t.number(e.count)} stavka`, other: () => `Odabrano je ${t.number(e.count)} stavki` })}.`,
	selectedItem: (e) => `Stavka ${e.item} je odabrana.`,
};
var St = {};
St = {
	deselectedItem: (e) => `${e.item} nincs kijelölve.`,
	longPressToSelect: "Nyomja hosszan a kijelöléshez.",
	select: "Kijelölés",
	selectedAll: "Az összes elem kijelölve.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Egy elem sincs kijelölve", one: () => `${t.number(e.count)} elem kijelölve`, other: () => `${t.number(e.count)} elem kijelölve` })}.`,
	selectedItem: (e) => `${e.item} kijelölve.`,
};
var At = {};
At = {
	deselectedItem: (e) => `${e.item} non selezionato.`,
	longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
	select: "Seleziona",
	selectedAll: "Tutti gli elementi selezionati.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nessun elemento selezionato", one: () => `${t.number(e.count)} elemento selezionato`, other: () => `${t.number(e.count)} elementi selezionati` })}.`,
	selectedItem: (e) => `${e.item} selezionato.`,
};
var Kt = {};
Kt = {
	deselectedItem: (e) => `${e.item} が選択されていません。`,
	longPressToSelect: "長押しして選択モードを開きます。",
	select: "選択",
	selectedAll: "すべての項目を選択しました。",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "項目が選択されていません", one: () => `${t.number(e.count)} 項目を選択しました`, other: () => `${t.number(e.count)} 項目を選択しました` })}。`,
	selectedItem: (e) => `${e.item} を選択しました。`,
};
var zt = {};
zt = {
	deselectedItem: (e) => `${e.item}이(가) 선택되지 않았습니다.`,
	longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
	select: "선택",
	selectedAll: "모든 항목이 선택되었습니다.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "선택된 항목이 없습니다", one: () => `${t.number(e.count)}개 항목이 선택되었습니다`, other: () => `${t.number(e.count)}개 항목이 선택되었습니다` })}.`,
	selectedItem: (e) => `${e.item}이(가) 선택되었습니다.`,
};
var It = {};
It = {
	deselectedItem: (e) => `${e.item} nepasirinkta.`,
	longPressToSelect:
		"Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
	select: "Pasirinkti",
	selectedAll: "Pasirinkti visi elementai.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nepasirinktas nė vienas elementas", one: () => `Pasirinktas ${t.number(e.count)} elementas`, other: () => `Pasirinkta elementų: ${t.number(e.count)}` })}.`,
	selectedItem: (e) => `Pasirinkta: ${e.item}.`,
};
var Ft = {};
Ft = {
	deselectedItem: (e) => `Vienums ${e.item} nav atlasīts.`,
	longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
	select: "Atlasīt",
	selectedAll: "Atlasīti visi vienumi.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nav atlasīts neviens vienums", one: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`, other: () => `Atlasīto vienumu skaits: ${t.number(e.count)}` })}.`,
	selectedItem: (e) => `Atlasīts vienums ${e.item}.`,
};
var Pt = {};
Pt = {
	deselectedItem: (e) => `${e.item} er ikke valgt.`,
	longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
	select: "Velg",
	selectedAll: "Alle elementer er valgt.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Ingen elementer er valgt", one: () => `${t.number(e.count)} element er valgt`, other: () => `${t.number(e.count)} elementer er valgt` })}.`,
	selectedItem: (e) => `${e.item} er valgt.`,
};
var Tt = {};
Tt = {
	deselectedItem: (e) => `${e.item} niet geselecteerd.`,
	longPressToSelect: "Druk lang om de selectiemodus te openen.",
	select: "Selecteren",
	selectedAll: "Alle items geselecteerd.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Geen items geselecteerd", one: () => `${t.number(e.count)} item geselecteerd`, other: () => `${t.number(e.count)} items geselecteerd` })}.`,
	selectedItem: (e) => `${e.item} geselecteerd.`,
};
var Nt = {};
Nt = {
	deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
	longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
	select: "Zaznacz",
	selectedAll: "Wszystkie zaznaczone elementy.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nie zaznaczono żadnych elementów", one: () => `${t.number(e.count)} zaznaczony element`, other: () => `${t.number(e.count)} zaznaczonych elementów` })}.`,
	selectedItem: (e) => `Zaznaczono ${e.item}.`,
};
var Mt = {};
Mt = {
	deselectedItem: (e) => `${e.item} não selecionado.`,
	longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nenhum item selecionado", one: () => `${t.number(e.count)} item selecionado`, other: () => `${t.number(e.count)} itens selecionados` })}.`,
	selectedItem: (e) => `${e.item} selecionado.`,
};
var Rt = {};
Rt = {
	deselectedItem: (e) => `${e.item} não selecionado.`,
	longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nenhum item selecionado", one: () => `${t.number(e.count)} item selecionado`, other: () => `${t.number(e.count)} itens selecionados` })}.`,
	selectedItem: (e) => `${e.item} selecionado.`,
};
var jt = {};
jt = {
	deselectedItem: (e) => `${e.item} neselectat.`,
	longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
	select: "Selectare",
	selectedAll: "Toate elementele selectate.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Niciun element selectat", one: () => `${t.number(e.count)} element selectat`, other: () => `${t.number(e.count)} elemente selectate` })}.`,
	selectedItem: (e) => `${e.item} selectat.`,
};
var Vt = {};
Vt = {
	deselectedItem: (e) => `${e.item} не выбрано.`,
	longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
	select: "Выбрать",
	selectedAll: "Выбраны все элементы.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Нет выбранных элементов", one: () => `${t.number(e.count)} элемент выбран`, other: () => `${t.number(e.count)} элементов выбрано` })}.`,
	selectedItem: (e) => `${e.item} выбрано.`,
};
var Ht = {};
Ht = {
	deselectedItem: (e) => `Nevybraté položky: ${e.item}.`,
	longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
	select: "Vybrať",
	selectedAll: "Všetky vybraté položky.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Žiadne vybraté položky", one: () => `${t.number(e.count)} vybratá položka`, other: () => `Počet vybratých položiek:${t.number(e.count)}` })}.`,
	selectedItem: (e) => `Vybraté položky: ${e.item}.`,
};
var Lt = {};
Lt = {
	deselectedItem: (e) => `Element ${e.item} ni izbran.`,
	longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
	select: "Izberite",
	selectedAll: "Vsi elementi so izbrani.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Noben element ni izbran", one: () => `${t.number(e.count)} element je izbran`, other: () => `${t.number(e.count)} elementov je izbranih` })}.`,
	selectedItem: (e) => `Element ${e.item} je izbran.`,
};
var Ot = {};
Ot = {
	deselectedItem: (e) => `${e.item} nije izabrano.`,
	longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
	select: "Izaberite",
	selectedAll: "Izabrane su sve stavke.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Nije izabrana nijedna stavka", one: () => `Izabrana je ${t.number(e.count)} stavka`, other: () => `Izabrano je ${t.number(e.count)} stavki` })}.`,
	selectedItem: (e) => `${e.item} je izabrano.`,
};
var Ut = {};
Ut = {
	deselectedItem: (e) => `${e.item} ej markerat.`,
	longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
	select: "Markera",
	selectedAll: "Alla markerade objekt.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Inga markerade objekt", one: () => `${t.number(e.count)} markerat objekt`, other: () => `${t.number(e.count)} markerade objekt` })}.`,
	selectedItem: (e) => `${e.item} markerat.`,
};
var _t = {};
_t = {
	deselectedItem: (e) => `${e.item} seçilmedi.`,
	longPressToSelect: "Seçim moduna girmek için uzun basın.",
	select: "Seç",
	selectedAll: "Tüm ögeler seçildi.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Hiçbir öge seçilmedi", one: () => `${t.number(e.count)} öge seçildi`, other: () => `${t.number(e.count)} öge seçildi` })}.`,
	selectedItem: (e) => `${e.item} seçildi.`,
};
var Wt = {};
Wt = {
	deselectedItem: (e) => `${e.item} не вибрано.`,
	longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
	select: "Вибрати",
	selectedAll: "Усі елементи вибрано.",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "Жодних елементів не вибрано", one: () => `${t.number(e.count)} елемент вибрано`, other: () => `Вибрано елементів: ${t.number(e.count)}` })}.`,
	selectedItem: (e) => `${e.item} вибрано.`,
};
var Gt = {};
Gt = {
	deselectedItem: (e) => `未选择 ${e.item}。`,
	longPressToSelect: "长按以进入选择模式。",
	select: "选择",
	selectedAll: "已选择所有项目。",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "未选择项目", one: () => `已选择 ${t.number(e.count)} 个项目`, other: () => `已选择 ${t.number(e.count)} 个项目` })}。`,
	selectedItem: (e) => `已选择 ${e.item}。`,
};
var Yt = {};
Yt = {
	deselectedItem: (e) => `未選取「${e.item}」。`,
	longPressToSelect: "長按以進入選擇模式。",
	select: "選取",
	selectedAll: "已選取所有項目。",
	selectedCount: (e, t) =>
		`${t.plural(e.count, { "=0": "未選取任何項目", one: () => `已選取 ${t.number(e.count)} 個項目`, other: () => `已選取 ${t.number(e.count)} 個項目` })}。`,
	selectedItem: (e) => `已選取「${e.item}」。`,
};
var be = {};
be = {
	"ar-AE": ht,
	"bg-BG": bt,
	"cs-CZ": $t,
	"da-DK": gt,
	"de-DE": yt,
	"el-GR": xt,
	"en-US": Dt,
	"es-ES": Ct,
	"et-EE": vt,
	"fi-FI": Et,
	"fr-FR": Bt,
	"he-IL": kt,
	"hr-HR": wt,
	"hu-HU": St,
	"it-IT": At,
	"ja-JP": Kt,
	"ko-KR": zt,
	"lt-LT": It,
	"lv-LV": Ft,
	"nb-NO": Pt,
	"nl-NL": Tt,
	"pl-PL": Nt,
	"pt-BR": Mt,
	"pt-PT": Rt,
	"ro-RO": jt,
	"ru-RU": Vt,
	"sk-SK": Ht,
	"sl-SI": Lt,
	"sr-SP": Ot,
	"sv-SE": Ut,
	"tr-TR": _t,
	"uk-UA": Wt,
	"zh-CN": Gt,
	"zh-TW": Yt,
};
function hl(e) {
	return e && e.__esModule ? e.default : e;
}
function bl(e, t) {
	const {
			getRowText: u = (a) => {
				var r, c, m;
				return (
					((c = (r = t.collection).getTextValue) == null
						? void 0
						: c.call(r, a)) ??
					((m = t.collection.getItem(a)) == null ? void 0 : m.textValue)
				);
			},
		} = e,
		l = H(hl(be), "@react-aria/grid"),
		n = t.selectionManager.rawSelection,
		o = p.useRef(n),
		i = p.useCallback(() => {
			var s;
			if (!t.selectionManager.isFocused || n === o.current) {
				o.current = n;
				return;
			}
			const a = Ye(n, o.current),
				r = Ye(o.current, n),
				c = t.selectionManager.selectionBehavior === "replace",
				m = [];
			if (t.selectionManager.selectedKeys.size === 1 && c) {
				const f = t.selectionManager.selectedKeys.keys().next().value;
				if (f != null && t.collection.getItem(f)) {
					const d = u(f);
					d && m.push(l.format("selectedItem", { item: d }));
				}
			} else if (a.size === 1 && r.size === 0) {
				const f = a.keys().next().value;
				if (f != null) {
					const d = u(f);
					d && m.push(l.format("selectedItem", { item: d }));
				}
			} else if (r.size === 1 && a.size === 0) {
				const f = r.keys().next().value;
				if (f != null && t.collection.getItem(f)) {
					const d = u(f);
					d && m.push(l.format("deselectedItem", { item: d }));
				}
			}
			t.selectionManager.selectionMode === "multiple" &&
				(m.length === 0 ||
					n === "all" ||
					n.size > 1 ||
					o.current === "all" ||
					((s = o.current) == null ? void 0 : s.size) > 1) &&
				m.push(
					n === "all"
						? l.format("selectedAll")
						: l.format("selectedCount", { count: n.size }),
				),
				m.length > 0 && nt(m.join(" ")),
				(o.current = n);
		}, [
			n,
			t.selectionManager.selectedKeys,
			t.selectionManager.isFocused,
			t.selectionManager.selectionBehavior,
			t.selectionManager.selectionMode,
			t.collection,
			u,
			l,
		]);
	mt(() => {
		if (t.selectionManager.isFocused) i();
		else {
			const a = requestAnimationFrame(i);
			return () => cancelAnimationFrame(a);
		}
	}, [n, t.selectionManager.isFocused]);
}
function Ye(e, t) {
	const u = new Set();
	if (e === "all" || t === "all") return u;
	for (const l of e.keys()) t.has(l) || u.add(l);
	return u;
}
function $l(e, t) {
	const u = t == null ? void 0 : t.isDisabled,
		[l, n] = p.useState(!1);
	return (
		Uu(() => {
			if (e != null && e.current && !u) {
				const o = () => {
					if (e.current) {
						const a = Ce(e.current, { tabbable: !0 });
						n(!!a.nextNode());
					}
				};
				o();
				const i = new MutationObserver(o);
				return (
					i.observe(e.current, {
						subtree: !0,
						childList: !0,
						attributes: !0,
						attributeFilter: ["tabIndex", "disabled"],
					}),
					() => {
						i.disconnect();
					}
				);
			}
		}),
		u ? !1 : l
	);
}
function gl(e) {
	return e && e.__esModule ? e.default : e;
}
function yl(e) {
	const t = H(gl(be), "@react-aria/grid"),
		u = ml(),
		l =
			(u === "pointer" || u === "virtual" || u == null) &&
			typeof window < "u" &&
			"ontouchstart" in window,
		n = p.useMemo(() => {
			let i = e.selectionManager.selectionMode,
				a = e.selectionManager.selectionBehavior,
				r;
			return (
				l && (r = t.format("longPressToSelect")),
				a === "replace" && i !== "none" && e.hasItemActions ? r : void 0
			);
		}, [
			e.selectionManager.selectionMode,
			e.selectionManager.selectionBehavior,
			e.hasItemActions,
			t,
			l,
		]);
	return Fe(n);
}
function xl(e) {
	return e && e.__esModule ? e.default : e;
}
function Dl(e, t) {
	const { key: u } = e,
		l = t.selectionManager,
		n = Ae(),
		o = !t.selectionManager.canSelectItem(u),
		i = t.selectionManager.isSelected(u),
		a = () => l.toggleSelection(u);
	const r = H(xl(be), "@react-aria/grid");
	return {
		checkboxProps: {
			id: n,
			"aria-label": r.format("select"),
			isSelected: i,
			isDisabled: o,
			onChange: a,
		},
	};
}
const Xe = 10,
	qe = 5;
class Cl {
	setup(t, u, l) {
		(this.delegate = t), (this.state = u), (this.direction = l);
	}
	getDropTargetFromPoint(t, u, l) {
		const n = this.delegate.getDropTargetFromPoint(t, u, l);
		return !n || n.type === "root" ? n : this.resolveDropTarget(n, t, u, l);
	}
	resolveDropTarget(t, u, l, n) {
		let o = this.pointerTracking,
			i = l - o.lastY,
			a = u - o.lastX,
			r = o.yDirection,
			c = o.xDirection;
		if (
			(Math.abs(i) > qe &&
				((r = i > 0 ? "down" : "up"), (o.yDirection = r), (o.lastY = l)),
			Math.abs(a) > Xe &&
				((c = a > 0 ? "right" : "left"), (o.xDirection = c), (o.lastX = u)),
			t.dropPosition === "before")
		) {
			let f = this.state.collection.getKeyBefore(t.key);
			for (; f != null; ) {
				const d = this.state.collection.getItem(f);
				if ((d == null ? void 0 : d.type) === "item") break;
				f = (d == null ? void 0 : d.parentKey) ?? null;
			}
			if (f != null) {
				const d = { type: "item", key: f, dropPosition: "after" };
				n(d) && (t = d);
			}
		}
		const m = this.getPotentialTargets(t, n);
		if (m.length === 0) return { type: "root" };
		let s;
		return (
			m.length > 1
				? (s = this.selectTarget(m, t, u, l, r, c))
				: ((s = m[0]), (o.boundaryContext = null)),
			s
		);
	}
	getPotentialTargets(t, u) {
		if (t.dropPosition === "on") return [t];
		let l = t,
			n = this.state.collection,
			o = n.getItem(l.key);
		for (; o && (o == null ? void 0 : o.type) !== "item" && o.nextKey != null; )
			(l.key = o.nextKey), (o = n.getItem(o.nextKey));
		const i = [l];
		if (
			o &&
			o.hasChildNodes &&
			this.state.expandedKeys.has(o.key) &&
			n.getChildren &&
			l.dropPosition === "after"
		) {
			let c = o.firstChildKey != null ? n.getItem(o.firstChildKey) : null;
			for (; c && c.type !== "item"; )
				c = c.nextKey != null ? n.getItem(c.nextKey) : null;
			if ((c == null ? void 0 : c.type) === "item") {
				const m = { type: "item", key: c.key, dropPosition: "before" };
				return u(m) ? [m] : [];
			}
		}
		if ((o == null ? void 0 : o.nextKey) != null) return [t];
		let a = o == null ? void 0 : o.parentKey,
			r = [];
		for (; a != null; ) {
			const c = n.getItem(a),
				m =
					(c == null ? void 0 : c.nextKey) != null
						? n.getItem(c.nextKey)
						: null;
			if (!m || m.parentKey !== a) {
				const f = { type: "item", key: a, dropPosition: "after" };
				if ((u(f) && r.push(f), m)) break;
			}
			a = c == null ? void 0 : c.parentKey;
		}
		if ((r.length > 0 && i.push(...r), i.length === 1)) {
			const c = n.getKeyAfter(l.key),
				m = c != null ? n.getItem(c) : null;
			if (
				c != null &&
				m &&
				o &&
				m.level != null &&
				o.level != null &&
				m.level > o.level
			) {
				const s = { type: "item", key: c, dropPosition: "before" };
				if (u(s)) return [s];
			}
		}
		return i.filter(u);
	}
	selectTarget(t, u, l, n, o, i) {
		if (t.length < 2) return t[0];
		const a = this.pointerTracking,
			r = this.state.collection.getItem(u.key),
			c = r == null ? void 0 : r.parentKey;
		if (c == null) return t[0];
		if (!a.boundaryContext || a.boundaryContext.parentKey !== c) {
			const h = a.yDirection === "up" ? t.length - 1 : 0;
			a.boundaryContext = {
				parentKey: c,
				preferredTargetIndex: h,
				lastSwitchY: n,
				lastSwitchX: l,
			};
		}
		const m = a.boundaryContext,
			s = Math.abs(l - m.lastSwitchX);
		if (Math.abs(n - m.lastSwitchY) > qe && o) {
			const h = m.preferredTargetIndex || 0;
			o === "down" && h === 0
				? (m.preferredTargetIndex = t.length - 1)
				: o === "up" && h === t.length - 1 && (m.preferredTargetIndex = 0),
				(a.xDirection = null);
		}
		if (s > Xe && i) {
			const h = m.preferredTargetIndex || 0;
			i === "left"
				? this.direction === "ltr"
					? h < t.length - 1 &&
						((m.preferredTargetIndex = h + 1), (m.lastSwitchX = l))
					: h > 0 && ((m.preferredTargetIndex = h - 1), (m.lastSwitchX = l))
				: i === "right" &&
					(this.direction === "ltr"
						? h > 0 && ((m.preferredTargetIndex = h - 1), (m.lastSwitchX = l))
						: h < t.length - 1 &&
							((m.preferredTargetIndex = h + 1), (m.lastSwitchX = l))),
				(a.yDirection = null);
		}
		const d = Math.max(0, Math.min(m.preferredTargetIndex || 0, t.length - 1));
		return t[d];
	}
	constructor() {
		(this.delegate = null),
			(this.state = null),
			(this.direction = "ltr"),
			(this.pointerTracking = {
				lastY: 0,
				lastX: 0,
				yDirection: null,
				xDirection: null,
				boundaryContext: null,
			});
	}
}
class vl {
	constructor(t) {
		(this.keyMap = new Map()),
			(this.keyMap = new Map()),
			(this.columnCount = t == null ? void 0 : t.columnCount),
			(this.rows = []);
		let u = (o) => {
				var m, s, f;
				const i = this.keyMap.get(o.key);
				t.visitNode && (o = t.visitNode(o)), this.keyMap.set(o.key, o);
				let a = new Set(),
					r = null,
					c = !1;
				if (o.type === "item") {
					for (const d of o.childNodes)
						if (((m = d.props) == null ? void 0 : m.colSpan) !== void 0) {
							c = !0;
							break;
						}
				}
				for (const d of o.childNodes)
					d.type === "cell" &&
						c &&
						((d.colspan = (s = d.props) == null ? void 0 : s.colSpan),
						(d.colSpan = (f = d.props) == null ? void 0 : f.colSpan),
						(d.colIndex = r
							? (r.colIndex ?? r.index) + (r.colSpan ?? 1)
							: d.index)),
						d.type === "cell" && d.parentKey == null && (d.parentKey = o.key),
						a.add(d.key),
						r ? ((r.nextKey = d.key), (d.prevKey = r.key)) : (d.prevKey = null),
						u(d),
						(r = d);
				if ((r && (r.nextKey = null), i))
					for (const d of i.childNodes) a.has(d.key) || l(d);
			},
			l = (o) => {
				this.keyMap.delete(o.key);
				for (const i of o.childNodes) this.keyMap.get(i.key) === i && l(i);
			},
			n = null;
		for (const [o, i] of t.items.entries()) {
			const a = {
				...i,
				level: i.level ?? 0,
				key: i.key ?? "row-" + o,
				type: i.type ?? "row",
				value: i.value ?? null,
				hasChildNodes: !0,
				childNodes: [...i.childNodes],
				rendered: i.rendered,
				textValue: i.textValue ?? "",
				index: i.index ?? o,
			};
			n ? ((n.nextKey = a.key), (a.prevKey = n.key)) : (a.prevKey = null),
				this.rows.push(a),
				u(a),
				(n = a);
		}
		n && (n.nextKey = null);
	}
	*[Symbol.iterator]() {
		yield* [...this.rows];
	}
	get size() {
		return [...this.rows].length;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(t) {
		const u = this.keyMap.get(t);
		return u ? (u.prevKey ?? null) : null;
	}
	getKeyAfter(t) {
		const u = this.keyMap.get(t);
		return u ? (u.nextKey ?? null) : null;
	}
	getFirstKey() {
		var t;
		return (t = [...this.rows][0]) == null ? void 0 : t.key;
	}
	getLastKey() {
		var u;
		const t = [...this.rows];
		return (u = t[t.length - 1]) == null ? void 0 : u.key;
	}
	getItem(t) {
		return this.keyMap.get(t) ?? null;
	}
	at(t) {
		const u = [...this.getKeys()];
		return this.getItem(u[t]);
	}
	getChildren(t) {
		const u = this.keyMap.get(t);
		return (u == null ? void 0 : u.childNodes) || [];
	}
}
const Xt = "row-header-column-" + Math.random().toString(36).slice(2);
let ve = "row-header-column-" + Math.random().toString(36).slice(2);
for (; Xt === ve; )
	ve = "row-header-column-" + Math.random().toString(36).slice(2);
function qt(e, t) {
	if (t.length === 0) return [];
	const u = [],
		l = new Map();
	for (const r of t) {
		let c = r.parentKey,
			m = [r];
		for (; c != null; ) {
			const s = e.get(c);
			if (!s) break;
			if (l.has(s)) {
				s.colSpan ?? (s.colSpan = 0), s.colSpan++, (s.colspan = s.colSpan);
				const { column: f, index: d } = l.get(s);
				if (d > m.length) break;
				for (let h = d; h < m.length; h++) f.splice(h, 0, null);
				for (let h = m.length; h < f.length; h++)
					f[h] && l.has(f[h]) && (l.get(f[h]).index = h);
			} else
				(s.colSpan = 1),
					(s.colspan = 1),
					m.push(s),
					l.set(s, { column: m, index: m.length - 1 });
			c = s.parentKey;
		}
		u.push(m), (r.index = u.length - 1);
	}
	let n = Math.max(...u.map((r) => r.length)),
		o = Array(n)
			.fill(0)
			.map(() => []),
		i = 0;
	for (const r of u) {
		let c = n - 1;
		for (const m of r) {
			if (m) {
				const s = o[c],
					f = s.reduce((d, h) => d + (h.colSpan ?? 1), 0);
				if (f < i) {
					const d = {
						type: "placeholder",
						key: "placeholder-" + m.key,
						colspan: i - f,
						colSpan: i - f,
						index: f,
						value: null,
						rendered: null,
						level: c,
						hasChildNodes: !1,
						childNodes: [],
						textValue: "",
					};
					s.length > 0 &&
						((s[s.length - 1].nextKey = d.key),
						(d.prevKey = s[s.length - 1].key)),
						s.push(d);
				}
				s.length > 0 &&
					((s[s.length - 1].nextKey = m.key),
					(m.prevKey = s[s.length - 1].key)),
					(m.level = c),
					(m.colIndex = i),
					s.push(m);
			}
			c--;
		}
		i++;
	}
	let a = 0;
	for (const r of o) {
		const c = r.reduce((m, s) => m + (s.colSpan ?? 1), 0);
		if (c < t.length) {
			const m = {
				type: "placeholder",
				key: "placeholder-" + r[r.length - 1].key,
				colSpan: t.length - c,
				colspan: t.length - c,
				index: c,
				value: null,
				rendered: null,
				level: a,
				hasChildNodes: !1,
				childNodes: [],
				textValue: "",
				prevKey: r[r.length - 1].key,
			};
			r.push(m);
		}
		a++;
	}
	return o.map((r, c) => ({
		type: "headerrow",
		key: "headerrow-" + c,
		index: c,
		value: null,
		rendered: null,
		level: 0,
		hasChildNodes: !0,
		childNodes: r,
		textValue: "",
	}));
}
class El extends vl {
	constructor(t, u, l) {
		let n = new Set(),
			o = null,
			i = [];
		if (l != null && l.showSelectionCheckboxes) {
			const s = {
				type: "column",
				key: Xt,
				value: null,
				textValue: "",
				level: 0,
				index: l != null && l.showDragButtons ? 1 : 0,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isSelectionCell: !0 },
			};
			i.unshift(s);
		}
		if (l != null && l.showDragButtons) {
			const s = {
				type: "column",
				key: ve,
				value: null,
				textValue: "",
				level: 0,
				index: 0,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isDragButtonCell: !0 },
			};
			i.unshift(s);
		}
		const a = [],
			r = new Map(),
			c = (s) => {
				switch (s.type) {
					case "body":
						o = s;
						break;
					case "column":
						r.set(s.key, s),
							s.hasChildNodes ||
								(i.push(s), s.props.isRowHeader && n.add(s.key));
						break;
					case "item":
						a.push(s);
						return;
				}
				for (const f of s.childNodes) c(f);
			};
		for (const s of t) c(s);
		const m = qt(r, i);
		if (
			(m.forEach((s, f) => a.splice(f, 0, s)),
			super({
				columnCount: i.length,
				items: a,
				visitNode: (s) => ((s.column = i[s.index]), s),
			}),
			(this._size = 0),
			(this.columns = i),
			(this.rowHeaderColumnKeys = n),
			(this.body = o),
			(this.headerRows = m),
			(this._size = [...o.childNodes].length),
			this.rowHeaderColumnKeys.size === 0)
		) {
			const s = this.columns.find((f) => {
				var d, h;
				return (
					!((d = f.props) != null && d.isDragButtonCell) &&
					!((h = f.props) != null && h.isSelectionCell)
				);
			});
			s && this.rowHeaderColumnKeys.add(s.key);
		}
	}
	*[Symbol.iterator]() {
		yield* this.body.childNodes;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(t) {
		const u = this.keyMap.get(t);
		return (u == null ? void 0 : u.prevKey) ?? null;
	}
	getKeyAfter(t) {
		const u = this.keyMap.get(t);
		return (u == null ? void 0 : u.nextKey) ?? null;
	}
	getFirstKey() {
		var t;
		return ((t = R(this.body.childNodes)) == null ? void 0 : t.key) ?? null;
	}
	getLastKey() {
		var t;
		return ((t = W(this.body.childNodes)) == null ? void 0 : t.key) ?? null;
	}
	getItem(t) {
		return t === this.body.key ? this.body : (this.keyMap.get(t) ?? null);
	}
	at(t) {
		const u = [...this.getKeys()];
		return this.getItem(u[t]);
	}
	getChildren(t) {
		if (t === this.body.key) return this.body.childNodes;
		const u = this.getItem(t);
		return (u == null ? void 0 : u.type) === "item"
			? [...u.childNodes].filter((l) => l.type === "cell")
			: super.getChildren(t);
	}
	getTextValue(t) {
		const u = this.getItem(t);
		if (!u) return "";
		if (u.textValue) return u.textValue;
		const l = this.rowHeaderColumnKeys;
		if (l) {
			const n = [];
			for (const o of u.childNodes) {
				const i = this.columns[o.index];
				if (
					(l.has(i.key) && o.textValue && n.push(o.textValue),
					n.length === l.size)
				)
					break;
			}
			return n.join(" ");
		}
		return "";
	}
}
function Bl(e) {
	const { collection: t, focusMode: u } = e,
		l = e.UNSAFE_selectionState || it(e),
		n = p.useMemo(
			() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
			[e.disabledKeys],
		),
		o = l.setFocusedKey;
	l.setFocusedKey = (r, c) => {
		var m, s;
		if (u === "cell" && r != null) {
			const f = t.getItem(r);
			if ((f == null ? void 0 : f.type) === "item") {
				const d = S(f, t);
				c === "last"
					? (r = ((m = W(d)) == null ? void 0 : m.key) ?? null)
					: (r = ((s = R(d)) == null ? void 0 : s.key) ?? null);
			}
		}
		o(r, c);
	};
	const i = p.useMemo(() => new Gu(t, l), [t, l]);
	const a = p.useRef(null);
	return (
		p.useEffect(() => {
			if (l.focusedKey != null && a.current && !t.getItem(l.focusedKey)) {
				const r = a.current.getItem(l.focusedKey),
					c =
						(r == null ? void 0 : r.parentKey) != null &&
						(r.type === "cell" || r.type === "rowheader" || r.type === "column")
							? a.current.getItem(r.parentKey)
							: r;
				if (!c) {
					l.setFocusedKey(null);
					return;
				}
				const m = a.current.rows,
					s = t.rows,
					f = m.length - s.length;
				let d = Math.min(
						f > 1 ? Math.max(c.index - f + 1, 0) : c.index,
						s.length - 1,
					),
					h = null;
				for (; d >= 0; ) {
					if (!i.isDisabled(s[d].key) && s[d].type !== "headerrow") {
						h = s[d];
						break;
					}
					d < s.length - 1 ? d++ : (d > c.index && (d = c.index), d--);
				}
				if (h) {
					const y = h.hasChildNodes ? [...S(h, t)] : [],
						x =
							h.hasChildNodes && c !== r && r && r.index < y.length
								? y[r.index].key
								: h.key;
					l.setFocusedKey(x);
				} else l.setFocusedKey(null);
			}
			a.current = t;
		}, [t, i, l, l.focusedKey]),
		{
			collection: t,
			disabledKeys: n,
			isKeyboardNavigationDisabled: !1,
			selectionManager: i,
		}
	);
}
const kl = { ascending: "descending", descending: "ascending" };
function wl(e) {
	const [t, u] = p.useState(!1),
		{
			selectionMode: l = "none",
			showSelectionCheckboxes: n,
			showDragButtons: o,
			treeColumn: i = null,
		} = e,
		a = p.useMemo(
			() => ({
				showSelectionCheckboxes: n && l !== "none",
				showDragButtons: o,
				selectionMode: l,
				columns: [],
			}),
			[e.children, n, l, o],
		),
		r = Yu(
			e,
			p.useCallback((d) => new El(d, null, a), [a]),
			a,
		),
		{ disabledKeys: c, selectionManager: m } = Bl({
			...e,
			collection: r,
			disabledBehavior: e.disabledBehavior || "selection",
		}),
		[s, f] = dt(
			e.expandedKeys ? new Set(e.expandedKeys) : void 0,
			e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
			e.onExpandedChange,
		);
	return {
		collection: r,
		disabledKeys: c,
		selectionManager: m,
		showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
		sortDescriptor: e.sortDescriptor ?? null,
		isKeyboardNavigationDisabled: r.size === 0 || t,
		setKeyboardNavigationDisabled: u,
		sort(d, h) {
			var y, x;
			(x = e.onSortChange) == null ||
				x.call(e, {
					column: d,
					direction:
						h ??
						(((y = e.sortDescriptor) == null ? void 0 : y.column) === d
							? kl[e.sortDescriptor.direction]
							: "ascending"),
				});
		},
		expandedKeys: s,
		toggleKey(d) {
			f((h) => {
				const y = new Set(h);
				return y.has(d) ? y.delete(d) : y.add(d), y;
			});
		},
		treeColumn: i,
	};
}
function Sl(e, t) {
	const u = p.useMemo(
			() => (t ? e.collection.filter(t) : e.collection),
			[e.collection, t],
		),
		l = e.selectionManager.withCollection(u);
	return { ...e, collection: u, selectionManager: l };
}
class Zt {
	constructor(t) {
		if (
			((this.collection = t.collection),
			(this.disabledKeys = t.disabledKeys),
			(this.disabledBehavior = t.disabledBehavior || "all"),
			(this.direction = t.direction),
			(this.collator = t.collator),
			!t.layout && !t.ref)
		)
			throw new Error("Either a layout or a ref must be specified.");
		(this.layoutDelegate =
			t.layoutDelegate || (t.layout ? new Al(t.layout) : new Xu(t.ref))),
			(this.focusMode = t.focusMode ?? "row");
	}
	isCell(t) {
		return t.type === "cell";
	}
	isRow(t) {
		return t.type === "row" || t.type === "item";
	}
	isDisabled(t) {
		var u, l;
		return (
			this.disabledBehavior === "all" &&
			(((u = t.props) == null ? void 0 : u.isDisabled) ||
				this.disabledKeys.has(t.key)) &&
			((l = t.props) == null ? void 0 : l.disabledBehavior) !== "selection"
		);
	}
	findPreviousKey(t, u, l = !1) {
		let n =
			t != null
				? this.collection.getKeyBefore(t)
				: this.collection.getLastKey();
		for (; n != null; ) {
			const o = this.collection.getItem(n);
			if (!o) return null;
			if ((l || !this.isDisabled(o)) && (!u || u(o))) return n;
			n = this.collection.getKeyBefore(n);
		}
		return null;
	}
	findNextKey(t, u, l = !1) {
		let n =
			t != null
				? this.collection.getKeyAfter(t)
				: this.collection.getFirstKey();
		for (; n != null; ) {
			const o = this.collection.getItem(n);
			if (!o) return null;
			if ((l || !this.isDisabled(o)) && (!u || u(o))) return n;
			if (((n = this.collection.getKeyAfter(n)), n == null)) return null;
		}
		return null;
	}
	getKeyForItemInRowByIndex(t, u = 0) {
		if (u < 0) return null;
		const l = this.collection.getItem(t);
		if (!l) return null;
		let n = 0;
		for (const o of S(l, this.collection)) {
			if (
				(o.colSpan && o.colSpan + n > u) ||
				(o.colSpan && (n = n + o.colSpan - 1), n === u)
			)
				return o.key ?? null;
			n++;
		}
		return null;
	}
	getKeyBelow(t, u) {
		let l = t,
			n = this.collection.getItem(l);
		if (!n || (this.isCell(n) && (l = n.parentKey ?? null), l == null))
			return null;
		if (
			((l = this.findNextKey(
				l,
				(o) => o.type === "item",
				u == null ? void 0 : u.includeDisabled,
			)),
			l != null)
		) {
			if (this.isCell(n)) {
				const o = n.colIndex ? n.colIndex : n.index;
				return this.getKeyForItemInRowByIndex(l, o);
			}
			if (this.focusMode === "row") return l;
		}
		return null;
	}
	getKeyAbove(t, u) {
		let l = t,
			n = this.collection.getItem(l);
		if (!n || (this.isCell(n) && (l = n.parentKey ?? null), l == null))
			return null;
		if (
			((l = this.findPreviousKey(
				l,
				(o) => o.type === "item",
				u == null ? void 0 : u.includeDisabled,
			)),
			l != null)
		) {
			if (this.isCell(n)) {
				const o = n.colIndex ? n.colIndex : n.index;
				return this.getKeyForItemInRowByIndex(l, o);
			}
			if (this.focusMode === "row") return l;
		}
		return null;
	}
	getKeyRightOf(t) {
		var l, n;
		const u = this.collection.getItem(t);
		if (!u) return null;
		if (this.isRow(u)) {
			const o = S(u, this.collection);
			return (
				(this.direction === "rtl"
					? (l = W(o)) == null
						? void 0
						: l.key
					: (n = R(o)) == null
						? void 0
						: n.key) ?? null
			);
		}
		if (this.isCell(u) && u.parentKey != null) {
			const o = this.collection.getItem(u.parentKey);
			if (!o) return null;
			const i = S(o, this.collection),
				a =
					(this.direction === "rtl"
						? ae(i, u.index - 1)
						: ae(i, u.index + 1)) ?? null;
			return a
				? (a.key ?? null)
				: this.focusMode === "row"
					? (u.parentKey ?? null)
					: ((this.direction === "rtl"
							? this.getFirstKey(t)
							: this.getLastKey(t)) ?? null);
		}
		return null;
	}
	getKeyLeftOf(t) {
		var l, n;
		const u = this.collection.getItem(t);
		if (!u) return null;
		if (this.isRow(u)) {
			const o = S(u, this.collection);
			return (
				(this.direction === "rtl"
					? (l = R(o)) == null
						? void 0
						: l.key
					: (n = W(o)) == null
						? void 0
						: n.key) ?? null
			);
		}
		if (this.isCell(u) && u.parentKey != null) {
			const o = this.collection.getItem(u.parentKey);
			if (!o) return null;
			const i = S(o, this.collection),
				a =
					(this.direction === "rtl"
						? ae(i, u.index + 1)
						: ae(i, u.index - 1)) ?? null;
			return a
				? (a.key ?? null)
				: this.focusMode === "row"
					? (u.parentKey ?? null)
					: ((this.direction === "rtl"
							? this.getLastKey(t)
							: this.getFirstKey(t)) ?? null);
		}
		return null;
	}
	getFirstKey(t, u) {
		var o, i;
		let l = t ?? null,
			n;
		if (l != null) {
			if (((n = this.collection.getItem(l)), !n)) return null;
			if (this.isCell(n) && !u && n.parentKey != null) {
				const a = this.collection.getItem(n.parentKey);
				return a
					? (((o = R(S(a, this.collection))) == null ? void 0 : o.key) ?? null)
					: null;
			}
		}
		if (
			((l = this.findNextKey(void 0, (a) => a.type === "item")),
			l != null && ((n && this.isCell(n) && u) || this.focusMode === "cell"))
		) {
			const a = this.collection.getItem(l);
			if (!a) return null;
			l = ((i = R(S(a, this.collection))) == null ? void 0 : i.key) ?? null;
		}
		return l;
	}
	getLastKey(t, u) {
		var o, i;
		let l = t ?? null,
			n;
		if (l != null) {
			if (((n = this.collection.getItem(l)), !n)) return null;
			if (this.isCell(n) && !u && n.parentKey != null) {
				const a = this.collection.getItem(n.parentKey);
				if (!a) return null;
				const r = S(a, this.collection);
				return ((o = W(r)) == null ? void 0 : o.key) ?? null;
			}
		}
		if (
			((l = this.findPreviousKey(void 0, (a) => a.type === "item")),
			l != null && ((n && this.isCell(n) && u) || this.focusMode === "cell"))
		) {
			const a = this.collection.getItem(l);
			if (!a) return null;
			const r = S(a, this.collection);
			l = ((i = W(r)) == null ? void 0 : i.key) ?? null;
		}
		return l;
	}
	getKeyPageAbove(t) {
		let u = t,
			l = this.layoutDelegate.getItemRect(u);
		if (!l) return null;
		const n = Math.max(
			0,
			l.y + l.height - this.layoutDelegate.getVisibleRect().height,
		);
		for (
			;
			l &&
			l.y > n &&
			u != null &&
			((u = this.getKeyAbove(u) ?? null), u != null);
		)
			l = this.layoutDelegate.getItemRect(u);
		return u;
	}
	getKeyPageBelow(t) {
		let u = t,
			l = this.layoutDelegate.getItemRect(u);
		if (!l) return null;
		const n = this.layoutDelegate.getVisibleRect().height,
			o = Math.min(this.layoutDelegate.getContentSize().height, l.y + n);
		for (; l && l.y + l.height < o; ) {
			const i = this.getKeyBelow(u);
			if (i == null) break;
			(l = this.layoutDelegate.getItemRect(i)), (u = i);
		}
		return u;
	}
	getKeyForSearch(t, u) {
		var a;
		let l = u ?? null;
		if (!this.collator) return null;
		const n = this.collection;
		if (((l = u ?? this.getFirstKey()), l == null)) return null;
		const o = n.getItem(l);
		if (!o) return null;
		o.type === "cell" && (l = o.parentKey ?? null);
		let i = !1;
		for (; l != null; ) {
			const r = n.getItem(l);
			if (!r) return null;
			if (r.textValue) {
				const c = r.textValue.slice(0, t.length);
				if (this.collator.compare(c, t) === 0)
					return this.isRow(r) && this.focusMode === "cell"
						? (((a = R(S(r, this.collection))) == null ? void 0 : a.key) ??
								null)
						: r.key;
			}
			(l = this.findNextKey(l, (c) => c.type === "item")),
				l == null && !i && ((l = this.getFirstKey()), (i = !0));
		}
		return null;
	}
}
class Al {
	constructor(t) {
		this.layout = t;
	}
	getContentSize() {
		return this.layout.getContentSize();
	}
	getItemRect(t) {
		var u;
		return (
			((u = this.layout.getLayoutInfo(t)) == null ? void 0 : u.rect) || null
		);
	}
	getVisibleRect() {
		return this.layout.virtualizer.visibleRect;
	}
}
const Te = new WeakMap();
function Kl(e, t, u) {
	const {
			isVirtualized: l,
			disallowTypeAhead: n,
			keyboardDelegate: o,
			focusMode: i,
			scrollRef: a,
			getRowText: r,
			onRowAction: c,
			onCellAction: m,
			escapeKeyBehavior: s = "clearSelection",
			shouldSelectOnPressUp: f,
		} = e,
		{ selectionManager: d } = t;
	!e["aria-label"] &&
		!e["aria-labelledby"] &&
		console.warn(
			"An aria-label or aria-labelledby prop is required for accessibility.",
		);
	const h = ct({ usage: "search", sensitivity: "base" }),
		{ direction: y } = ue(),
		x = t.selectionManager.disabledBehavior,
		b = p.useMemo(
			() =>
				o ||
				new Zt({
					collection: t.collection,
					disabledKeys: t.disabledKeys,
					disabledBehavior: x,
					ref: u,
					direction: y,
					collator: h,
					focusMode: i,
				}),
			[o, t.collection, t.disabledKeys, x, u, y, h, i],
		),
		{ collectionProps: g } = qu({
			ref: u,
			selectionManager: d,
			keyboardDelegate: b,
			isVirtualized: l,
			scrollRef: a,
			disallowTypeAhead: n,
			escapeKeyBehavior: s,
		}),
		C = Ae(e.id);
	Te.set(t, {
		keyboardDelegate: b,
		actions: { onRowAction: c, onCellAction: m },
		shouldSelectOnPressUp: f,
	});
	const D = yl({ selectionManager: d, hasItemActions: !!(c || m) }),
		w = N(e, { labelable: !0 }),
		E = p.useCallback(
			(B) => {
				if (d.isFocused) {
					ce(B.currentTarget, Q(B)) || d.setFocused(!1);
					return;
				}
				ce(B.currentTarget, Q(B)) && d.setFocused(!0);
			},
			[d],
		),
		v = p.useMemo(() => ({ onBlur: g.onBlur, onFocus: E }), [E, g.onBlur]),
		K = $l(u, { isDisabled: t.collection.size !== 0 }),
		z = I(
			w,
			{
				role: "grid",
				id: C,
				"aria-multiselectable":
					d.selectionMode === "multiple" ? "true" : void 0,
			},
			t.isKeyboardNavigationDisabled ? v : g,
			(t.collection.size === 0 && { tabIndex: K ? -1 : 0 }) || void 0,
			D,
		);
	return (
		l &&
			((z["aria-rowcount"] = t.collection.size),
			(z["aria-colcount"] = t.collection.columnCount)),
		bl({ getRowText: r }, t),
		{ gridProps: z }
	);
}
const Ne = new WeakMap();
function Ee(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function zl(e, t) {
	const u = Ne.get(e);
	if (!u) throw new Error("Unknown grid");
	return `${u}-${Ee(t)}`;
}
function Jt(e, t, u) {
	const l = Ne.get(e);
	if (!l) throw new Error("Unknown grid");
	return `${l}-${Ee(t)}-${Ee(u)}`;
}
function Be(e, t) {
	return [...e.collection.rowHeaderColumnKeys]
		.map((u) => Jt(e, t, u))
		.join(" ");
}
var Qt = {};
Qt = {
	ascending: "تصاعدي",
	ascendingSort: (e) => `ترتيب حسب العمود ${e.columnName} بترتيب تصاعدي`,
	columnSize: (e) => `${e.value} بالبكسل`,
	descending: "تنازلي",
	descendingSort: (e) => `ترتيب حسب العمود ${e.columnName} بترتيب تنازلي`,
	resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
	select: "تحديد",
	selectAll: "تحديد الكل",
	sortable: "عمود قابل للترتيب",
	collapse: "طي",
	expand: "تمديد",
};
var eu = {};
eu = {
	ascending: "възходящ",
	ascendingSort: (e) => `сортирано по колона ${e.columnName} във възходящ ред`,
	columnSize: (e) => `${e.value} пиксела`,
	descending: "низходящ",
	descendingSort: (e) => `сортирано по колона ${e.columnName} в низходящ ред`,
	resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
	select: "Изберете",
	selectAll: "Изберете всичко",
	sortable: "сортираща колона",
	collapse: "Свиване",
	expand: "Разширяване",
};
var tu = {};
tu = {
	ascending: "vzestupně",
	ascendingSort: (e) => `řazeno vzestupně podle sloupce ${e.columnName}`,
	columnSize: (e) => `${e.value} pixelů`,
	descending: "sestupně",
	descendingSort: (e) => `řazeno sestupně podle sloupce ${e.columnName}`,
	resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
	select: "Vybrat",
	selectAll: "Vybrat vše",
	sortable: "sloupec s možností řazení",
	collapse: "Sbalit",
	expand: "Roztáhnout",
};
var uu = {};
uu = {
	ascending: "stigende",
	ascendingSort: (e) =>
		`sorteret efter kolonne ${e.columnName} i stigende rækkefølge`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "faldende",
	descendingSort: (e) =>
		`sorteret efter kolonne ${e.columnName} i faldende rækkefølge`,
	resizerDescription: "Tryk på Enter for at ændre størrelse",
	select: "Vælg",
	selectAll: "Vælg alle",
	sortable: "sorterbar kolonne",
	collapse: "Skjul",
	expand: "Udvid",
};
var lu = {};
lu = {
	ascending: "aufsteigend",
	ascendingSort: (e) =>
		`sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
	columnSize: (e) => `${e.value} Pixel`,
	descending: "absteigend",
	descendingSort: (e) =>
		`sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
	resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
	select: "Auswählen",
	selectAll: "Alles auswählen",
	sortable: "sortierbare Spalte",
	collapse: "Reduzieren",
	expand: "Erweitern",
};
var nu = {};
nu = {
	ascending: "αύξουσα",
	ascendingSort: (e) => `διαλογή ανά στήλη ${e.columnName} σε αύξουσα σειρά`,
	columnSize: (e) => `${e.value} pixel`,
	descending: "φθίνουσα",
	descendingSort: (e) => `διαλογή ανά στήλη ${e.columnName} σε φθίνουσα σειρά`,
	resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
	select: "Επιλογή",
	selectAll: "Επιλογή όλων",
	sortable: "Στήλη διαλογής",
	collapse: "Σύμπτυξη",
	expand: "Ανάπτυξη",
};
var ou = {};
ou = {
	select: "Select",
	selectAll: "Select All",
	sortable: "sortable column",
	ascending: "ascending",
	descending: "descending",
	ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
	descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
	columnSize: (e) => `${e.value} pixels`,
	resizerDescription: "Press Enter to start resizing",
	expand: "Expand",
	collapse: "Collapse",
};
var iu = {};
iu = {
	ascending: "ascendente",
	ascendingSort: (e) =>
		`ordenado por columna ${e.columnName} en sentido ascendente`,
	columnSize: (e) => `${e.value} píxeles`,
	descending: "descendente",
	descendingSort: (e) =>
		`ordenado por columna ${e.columnName} en orden descendente`,
	resizerDescription: "Pulse Intro para empezar a redimensionar",
	select: "Seleccionar",
	selectAll: "Seleccionar todos",
	sortable: "columna ordenable",
	collapse: "Contraer",
	expand: "Ampliar",
};
var ru = {};
ru = {
	ascending: "tõusev järjestus",
	ascendingSort: (e) =>
		`sorditud veeru järgi ${e.columnName} tõusvas järjestuses`,
	columnSize: (e) => `${e.value} pikslit`,
	descending: "laskuv järjestus",
	descendingSort: (e) =>
		`sorditud veeru järgi ${e.columnName} laskuvas järjestuses`,
	resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
	select: "Vali",
	selectAll: "Vali kõik",
	sortable: "sorditav veerg",
	collapse: "Ahenda",
	expand: "Laienda",
};
var au = {};
au = {
	ascending: "nouseva",
	ascendingSort: (e) =>
		`lajiteltu sarakkeen ${e.columnName} mukaan nousevassa järjestyksessä`,
	columnSize: (e) => `${e.value} pikseliä`,
	descending: "laskeva",
	descendingSort: (e) =>
		`lajiteltu sarakkeen ${e.columnName} mukaan laskevassa järjestyksessä`,
	resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
	select: "Valitse",
	selectAll: "Valitse kaikki",
	sortable: "lajiteltava sarake",
	collapse: "Pienennä",
	expand: "Laajenna",
};
var su = {};
su = {
	ascending: "croissant",
	ascendingSort: (e) =>
		`trié en fonction de la colonne ${e.columnName} par ordre croissant`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "décroissant",
	descendingSort: (e) =>
		`trié en fonction de la colonne ${e.columnName} par ordre décroissant`,
	resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
	select: "Sélectionner",
	selectAll: "Sélectionner tout",
	sortable: "colonne triable",
	collapse: "Réduire",
	expand: "Développer",
};
var cu = {};
cu = {
	ascending: "עולה",
	ascendingSort: (e) => `מוין לפי עמודה ${e.columnName} בסדר עולה`,
	columnSize: (e) => `${e.value} פיקסלים`,
	descending: "יורד",
	descendingSort: (e) => `מוין לפי עמודה ${e.columnName} בסדר יורד`,
	resizerDescription: "הקש Enter כדי לשנות את הגודל",
	select: "בחר",
	selectAll: "בחר הכול",
	sortable: "עמודה שניתן למיין",
	collapse: "כווץ",
	expand: "הרחב",
};
var du = {};
du = {
	ascending: "rastući",
	ascendingSort: (e) =>
		`razvrstano po stupcima ${e.columnName} rastućem redoslijedom`,
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) =>
		`razvrstano po stupcima ${e.columnName} padajućim redoslijedom`,
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Odaberite",
	selectAll: "Odaberite sve",
	sortable: "stupac koji se može razvrstati",
	collapse: "Sažmi",
	expand: "Proširi",
};
var mu = {};
mu = {
	ascending: "növekvő",
	ascendingSort: (e) =>
		`rendezve a(z) ${e.columnName} oszlop szerint, növekvő sorrendben`,
	columnSize: (e) => `${e.value} képpont`,
	descending: "csökkenő",
	descendingSort: (e) =>
		`rendezve a(z) ${e.columnName} oszlop szerint, csökkenő sorrendben`,
	resizerDescription:
		"Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
	select: "Kijelölés",
	selectAll: "Összes kijelölése",
	sortable: "rendezendő oszlop",
	collapse: "Összecsukás",
	expand: "Kibontás",
};
var fu = {};
fu = {
	ascending: "crescente",
	ascendingSort: (e) =>
		`in ordine crescente in base alla colonna ${e.columnName}`,
	columnSize: (e) => `${e.value} pixel`,
	descending: "decrescente",
	descendingSort: (e) =>
		`in ordine decrescente in base alla colonna ${e.columnName}`,
	resizerDescription: "Premi Invio per iniziare a ridimensionare",
	select: "Seleziona",
	selectAll: "Seleziona tutto",
	sortable: "colonna ordinabile",
	collapse: "Comprimi",
	expand: "Espandi",
};
var pu = {};
pu = {
	ascending: "昇順",
	ascendingSort: (e) => `列 ${e.columnName} を昇順で並べ替え`,
	columnSize: (e) => `${e.value} ピクセル`,
	descending: "降順",
	descendingSort: (e) => `列 ${e.columnName} を降順で並べ替え`,
	resizerDescription: "Enter キーを押してサイズ変更を開始",
	select: "選択",
	selectAll: "すべて選択",
	sortable: "並べ替え可能な列",
	collapse: "折りたたむ",
	expand: "展開",
};
var hu = {};
hu = {
	ascending: "오름차순",
	ascendingSort: (e) => `${e.columnName} 열을 기준으로 오름차순으로 정렬됨`,
	columnSize: (e) => `${e.value} 픽셀`,
	descending: "내림차순",
	descendingSort: (e) => `${e.columnName} 열을 기준으로 내림차순으로 정렬됨`,
	resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
	select: "선택",
	selectAll: "모두 선택",
	sortable: "정렬 가능한 열",
	collapse: "접기",
	expand: "펼치기",
};
var bu = {};
bu = {
	ascending: "didėjančia tvarka",
	ascendingSort: (e) =>
		`surikiuota pagal stulpelį ${e.columnName} didėjančia tvarka`,
	columnSize: (e) => `${e.value} piks.`,
	descending: "mažėjančia tvarka",
	descendingSort: (e) =>
		`surikiuota pagal stulpelį ${e.columnName} mažėjančia tvarka`,
	resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
	select: "Pasirinkti",
	selectAll: "Pasirinkti viską",
	sortable: "rikiuojamas stulpelis",
	collapse: "Sutraukti",
	expand: "Išskleisti",
};
var $u = {};
$u = {
	ascending: "augošā secībā",
	ascendingSort: (e) => `kārtots pēc kolonnas ${e.columnName} augošā secībā`,
	columnSize: (e) => `${e.value} pikseļi`,
	descending: "dilstošā secībā",
	descendingSort: (e) => `kārtots pēc kolonnas ${e.columnName} dilstošā secībā`,
	resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
	select: "Atlasīt",
	selectAll: "Atlasīt visu",
	sortable: "kārtojamā kolonna",
	collapse: "Sakļaut",
	expand: "Izvērst",
};
var gu = {};
gu = {
	ascending: "stigende",
	ascendingSort: (e) =>
		`sortert etter kolonne ${e.columnName} i stigende rekkefølge`,
	columnSize: (e) => `${e.value} piksler`,
	descending: "synkende",
	descendingSort: (e) =>
		`sortert etter kolonne ${e.columnName} i synkende rekkefølge`,
	resizerDescription: "Trykk på Enter for å starte størrelsesendring",
	select: "Velg",
	selectAll: "Velg alle",
	sortable: "kolonne som kan sorteres",
	collapse: "Skjul",
	expand: "Utvid",
};
var yu = {};
yu = {
	ascending: "oplopend",
	ascendingSort: (e) =>
		`gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "aflopend",
	descendingSort: (e) =>
		`gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
	resizerDescription: "Druk op Enter om het formaat te wijzigen",
	select: "Selecteren",
	selectAll: "Alles selecteren",
	sortable: "sorteerbare kolom",
	collapse: "Samenvouwen",
	expand: "Uitvouwen",
};
var xu = {};
xu = {
	ascending: "rosnąco",
	ascendingSort: (e) =>
		`posortowano według kolumny ${e.columnName} w porządku rosnącym`,
	columnSize: (e) => `Liczba pikseli: ${e.value}`,
	descending: "malejąco",
	descendingSort: (e) =>
		`posortowano według kolumny ${e.columnName} w porządku malejącym`,
	resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
	select: "Zaznacz",
	selectAll: "Zaznacz wszystko",
	sortable: "kolumna z możliwością sortowania",
	collapse: "Zwiń",
	expand: "Rozwiń",
};
var Du = {};
Du = {
	ascending: "crescente",
	ascendingSort: (e) =>
		`classificado pela coluna ${e.columnName} em ordem crescente`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "decrescente",
	descendingSort: (e) =>
		`classificado pela coluna ${e.columnName} em ordem decrescente`,
	resizerDescription: "Pressione Enter para começar a redimensionar",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "coluna classificável",
	collapse: "Recolher",
	expand: "Expandir",
};
var Cu = {};
Cu = {
	ascending: "ascendente",
	ascendingSort: (e) =>
		`Ordenar por coluna ${e.columnName} em ordem ascendente`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "descendente",
	descendingSort: (e) =>
		`Ordenar por coluna ${e.columnName} em ordem descendente`,
	resizerDescription: "Prima Enter para iniciar o redimensionamento",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "Coluna ordenável",
	collapse: "Colapsar",
	expand: "Expandir",
};
var vu = {};
vu = {
	ascending: "crescătoare",
	ascendingSort: (e) =>
		`sortate după coloana ${e.columnName} în ordine crescătoare`,
	columnSize: (e) => `${e.value} pixeli`,
	descending: "descrescătoare",
	descendingSort: (e) =>
		`sortate după coloana ${e.columnName} în ordine descrescătoare`,
	resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
	select: "Selectare",
	selectAll: "Selectare totală",
	sortable: "coloană sortabilă",
	collapse: "Restrângeți",
	expand: "Extindeți",
};
var Eu = {};
Eu = {
	ascending: "возрастание",
	ascendingSort: (e) =>
		`сортировать столбец ${e.columnName} в порядке возрастания`,
	columnSize: (e) => `${e.value} пикс.`,
	descending: "убывание",
	descendingSort: (e) =>
		`сортировать столбец ${e.columnName} в порядке убывания`,
	resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
	select: "Выбрать",
	selectAll: "Выбрать все",
	sortable: "сортируемый столбец",
	collapse: "Свернуть",
	expand: "Развернуть",
};
var Bu = {};
Bu = {
	ascending: "vzostupne",
	ascendingSort: (e) => `zoradené zostupne podľa stĺpca ${e.columnName}`,
	columnSize: (e) => `Počet pixelov: ${e.value}`,
	descending: "zostupne",
	descendingSort: (e) => `zoradené zostupne podľa stĺpca ${e.columnName}`,
	resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
	select: "Vybrať",
	selectAll: "Vybrať všetko",
	sortable: "zoraditeľný stĺpec",
	collapse: "Zbaliť",
	expand: "Rozbaliť",
};
var ku = {};
ku = {
	ascending: "naraščajoče",
	ascendingSort: (e) =>
		`razvrščeno po stolpcu ${e.columnName} v naraščajočem vrstnem redu`,
	columnSize: (e) => `${e.value} slikovnih pik`,
	descending: "padajoče",
	descendingSort: (e) =>
		`razvrščeno po stolpcu ${e.columnName} v padajočem vrstnem redu`,
	resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
	select: "Izberite",
	selectAll: "Izberite vse",
	sortable: "razvrstljivi stolpec",
	collapse: "Strni",
	expand: "Razširi",
};
var wu = {};
wu = {
	ascending: "rastući",
	ascendingSort: (e) =>
		`sortirano po kolonama ${e.columnName} rastućim redosledom`,
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) =>
		`sortirano po kolonama ${e.columnName} padajućim redosledom`,
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Izaberite",
	selectAll: "Izaberite sve",
	sortable: "kolona koja se može sortirati",
	collapse: " Skupi",
	expand: "Proširi",
};
var Su = {};
Su = {
	ascending: "stigande",
	ascendingSort: (e) => `sorterat på kolumn ${e.columnName} i stigande ordning`,
	columnSize: (e) => `${e.value} pixlar`,
	descending: "fallande",
	descendingSort: (e) =>
		`sorterat på kolumn ${e.columnName} i fallande ordning`,
	resizerDescription: "Tryck på Retur för att börja ändra storlek",
	select: "Markera",
	selectAll: "Markera allt",
	sortable: "sorterbar kolumn",
	collapse: "Dölj",
	expand: "Expandera",
};
var Au = {};
Au = {
	ascending: "artan sırada",
	ascendingSort: (e) => `${e.columnName} sütuna göre artan düzende sırala`,
	columnSize: (e) => `${e.value} piksel`,
	descending: "azalan sırada",
	descendingSort: (e) => `${e.columnName} sütuna göre azalan düzende sırala`,
	resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
	select: "Seç",
	selectAll: "Tümünü Seç",
	sortable: "Sıralanabilir sütun",
	collapse: "Daralt",
	expand: "Genişlet",
};
var Ku = {};
Ku = {
	ascending: "висхідний",
	ascendingSort: (e) =>
		`відсортовано за стовпцем ${e.columnName} у висхідному порядку`,
	columnSize: (e) => `${e.value} пікс.`,
	descending: "низхідний",
	descendingSort: (e) =>
		`відсортовано за стовпцем ${e.columnName} у низхідному порядку`,
	resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
	select: "Вибрати",
	selectAll: "Вибрати все",
	sortable: "сортувальний стовпець",
	collapse: "Згорнути",
	expand: "Розгорнути",
};
var zu = {};
zu = {
	ascending: "升序",
	ascendingSort: (e) => `按列 ${e.columnName} 升序排序`,
	columnSize: (e) => `${e.value} 像素`,
	descending: "降序",
	descendingSort: (e) => `按列 ${e.columnName} 降序排序`,
	resizerDescription: "按“输入”键开始调整大小。",
	select: "选择",
	selectAll: "全选",
	sortable: "可排序的列",
	collapse: "折叠",
	expand: "扩展",
};
var Iu = {};
Iu = {
	ascending: "遞增",
	ascendingSort: (e) => `已依據「${e.columnName}」欄遞增排序`,
	columnSize: (e) => `${e.value} 像素`,
	descending: "遞減",
	descendingSort: (e) => `已依據「${e.columnName}」欄遞減排序`,
	resizerDescription: "按 Enter 鍵以開始調整大小",
	select: "選取",
	selectAll: "全選",
	sortable: "可排序的欄",
	collapse: "收合",
	expand: "展開",
};
var le = {};
le = {
	"ar-AE": Qt,
	"bg-BG": eu,
	"cs-CZ": tu,
	"da-DK": uu,
	"de-DE": lu,
	"el-GR": nu,
	"en-US": ou,
	"es-ES": iu,
	"et-EE": ru,
	"fi-FI": au,
	"fr-FR": su,
	"he-IL": cu,
	"hr-HR": du,
	"hu-HU": mu,
	"it-IT": fu,
	"ja-JP": pu,
	"ko-KR": hu,
	"lt-LT": bu,
	"lv-LV": $u,
	"nb-NO": gu,
	"nl-NL": yu,
	"pl-PL": xu,
	"pt-BR": Du,
	"pt-PT": Cu,
	"ro-RO": vu,
	"ru-RU": Eu,
	"sk-SK": Bu,
	"sl-SI": ku,
	"sr-SP": wu,
	"sv-SE": Su,
	"tr-TR": Au,
	"uk-UA": Ku,
	"zh-CN": zu,
	"zh-TW": Iu,
};
class Il extends Zt {
	isCell(t) {
		return t.type === "cell" || t.type === "rowheader" || t.type === "column";
	}
	getKeyBelow(t, u) {
		const l = this.collection.getItem(t);
		if (!l) return null;
		if (l.type === "column") {
			const n = R(S(l, this.collection));
			if (n) return n.key;
			const o = this.getFirstKey();
			return o == null || !this.collection.getItem(o)
				? null
				: super.getKeyForItemInRowByIndex(o, l.index);
		}
		return super.getKeyBelow(t, u);
	}
	getKeyAbove(t, u) {
		const l = this.collection.getItem(t);
		if (!l) return null;
		if (l.type === "column") {
			const i =
				l.parentKey != null ? this.collection.getItem(l.parentKey) : null;
			return i && i.type === "column" ? i.key : null;
		}
		const n = super.getKeyAbove(t, u),
			o = n != null ? this.collection.getItem(n) : null;
		return o && o.type !== "headerrow"
			? n
			: this.isCell(l)
				? this.collection.columns[l.index].key
				: this.collection.columns[0].key;
	}
	findNextColumnKey(t) {
		const u = this.findNextKey(t.key, (n) => n.type === "column");
		if (u != null) return u;
		const l = this.collection.headerRows[t.level];
		for (const n of S(l, this.collection))
			if (n.type === "column") return n.key;
		return null;
	}
	findPreviousColumnKey(t) {
		const u = this.findPreviousKey(t.key, (o) => o.type === "column");
		if (u != null) return u;
		const l = this.collection.headerRows[t.level],
			n = [...S(l, this.collection)];
		for (let o = n.length - 1; o >= 0; o--) {
			const i = n[o];
			if (i.type === "column") return i.key;
		}
		return null;
	}
	getKeyRightOf(t) {
		const u = this.collection.getItem(t);
		return u
			? u.type === "column"
				? this.direction === "rtl"
					? this.findPreviousColumnKey(u)
					: this.findNextColumnKey(u)
				: super.getKeyRightOf(t)
			: null;
	}
	getKeyLeftOf(t) {
		const u = this.collection.getItem(t);
		return u
			? u.type === "column"
				? this.direction === "rtl"
					? this.findNextColumnKey(u)
					: this.findPreviousColumnKey(u)
				: super.getKeyLeftOf(t)
			: null;
	}
	getKeyForSearch(t, u) {
		if (!this.collator) return null;
		let l = this.collection,
			n = u ?? this.getFirstKey();
		if (n == null) return null;
		const o = l.getItem(n);
		(o == null ? void 0 : o.type) === "cell" && (n = o.parentKey ?? null);
		let i = !1;
		for (; n != null; ) {
			const a = l.getItem(n);
			if (!a) return null;
			if (a.textValue) {
				const r = a.textValue.slice(0, t.length);
				if (this.collator.compare(r, t) === 0) return a.key;
			}
			for (const r of S(a, this.collection)) {
				const c = l.columns[r.index];
				if (l.rowHeaderColumnKeys.has(c.key) && r.textValue) {
					const m = r.textValue.slice(0, t.length);
					if (this.collator.compare(m, t) === 0) {
						const s = u != null ? l.getItem(u) : o;
						return (s == null ? void 0 : s.type) === "cell" ? r.key : a.key;
					}
				}
			}
			(n = this.getKeyBelow(n)),
				n == null && !i && ((n = this.getFirstKey()), (i = !0));
		}
		return null;
	}
}
function Fl(e) {
	return e && e.__esModule ? e.default : e;
}
function Pl(e, t, u) {
	const {
			keyboardDelegate: l,
			isVirtualized: n,
			layoutDelegate: o,
			layout: i,
		} = e,
		a = ct({ usage: "search", sensitivity: "base" }),
		{ direction: r } = ue(),
		c = t.selectionManager.disabledBehavior,
		m = p.useMemo(
			() =>
				l ||
				new Il({
					collection: t.collection,
					disabledKeys: t.disabledKeys,
					disabledBehavior: c,
					ref: u,
					direction: r,
					collator: a,
					layoutDelegate: o,
					layout: i,
				}),
			[l, t.collection, t.disabledKeys, c, u, r, a, o, i],
		),
		s = Ae(e.id);
	Ne.set(t, s);
	const { gridProps: f } = Kl({ ...e, id: s, keyboardDelegate: m }, t, u);
	n &&
		(f["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
		t.treeColumn != null && (f.role = "treegrid");
	const { column: d, direction: h } = t.sortDescriptor || {},
		y = H(Fl(le), "@react-aria/table"),
		x = p.useMemo(() => {
			var C;
			const g =
				((C = t.collection.columns.find((D) => D.key === d)) == null
					? void 0
					: C.textValue) ?? "";
			return h && d ? y.format(`${h}Sort`, { columnName: g }) : void 0;
		}, [h, d, t.collection.columns]),
		b = Fe(x);
	return (
		mt(() => {
			x && nt(x, "assertive", 500);
		}, [x]),
		{
			gridProps: I(f, b, {
				"aria-describedby": [b["aria-describedby"], f["aria-describedby"]]
					.filter(Boolean)
					.join(" "),
			}),
		}
	);
}
function Fu(e, t, u) {
	const {
			node: l,
			isVirtualized: n,
			focusMode: o = "child",
			shouldSelectOnPressUp: i,
			onAction: a,
		} = e,
		{ direction: r } = ue(),
		{
			keyboardDelegate: c,
			actions: { onCellAction: m },
		} = Te.get(t),
		s = p.useRef(null),
		f = () => {
			if (u.current) {
				const g = Ce(u.current);
				if (o === "child") {
					if (We(u.current) && u.current !== xe()) return;
					const C =
						t.selectionManager.childFocusStrategy === "last"
							? De(g)
							: g.firstChild();
					if (C) {
						M(C);
						return;
					}
				}
				((s.current != null && l.key !== s.current) || !We(u.current)) &&
					M(u.current);
			}
		},
		{ itemProps: d, isPressed: h } = rt({
			selectionManager: t.selectionManager,
			key: l.key,
			ref: u,
			isVirtualized: n,
			focus: f,
			shouldSelectOnPressUp: i,
			onAction: m ? () => m(l.key) : a,
			isDisabled: t.collection.size === 0,
		}),
		y = (g) => {
			var w, E, v, K, z;
			const C = xe();
			if (
				!ce(g.currentTarget, Q(g)) ||
				t.isKeyboardNavigationDisabled ||
				!u.current ||
				!C
			)
				return;
			const D = Ce(u.current);
			switch (((D.currentNode = C), g.key)) {
				case "ArrowLeft": {
					let B = r === "rtl" ? D.nextNode() : D.previousNode();
					if (
						(o === "child" && B === u.current && (B = null),
						g.preventDefault(),
						g.stopPropagation(),
						B)
					)
						M(B), U(B, { containingElement: _(u.current) });
					else {
						if (
							((w = c.getKeyLeftOf) == null ? void 0 : w.call(c, l.key)) !==
							l.key
						) {
							(E = u.current.parentElement) == null ||
								E.dispatchEvent(
									new KeyboardEvent(g.nativeEvent.type, g.nativeEvent),
								);
							break;
						}
						o === "cell" && r === "rtl"
							? (M(u.current),
								U(u.current, { containingElement: _(u.current) }))
							: ((D.currentNode = u.current),
								(B = r === "rtl" ? D.firstChild() : De(D)),
								B && (M(B), U(B, { containingElement: _(u.current) })));
					}
					break;
				}
				case "ArrowRight": {
					let B = r === "rtl" ? D.previousNode() : D.nextNode();
					if (
						(o === "child" && B === u.current && (B = null),
						g.preventDefault(),
						g.stopPropagation(),
						B)
					)
						M(B), U(B, { containingElement: _(u.current) });
					else {
						if (
							((v = c.getKeyRightOf) == null ? void 0 : v.call(c, l.key)) !==
							l.key
						) {
							(K = u.current.parentElement) == null ||
								K.dispatchEvent(
									new KeyboardEvent(g.nativeEvent.type, g.nativeEvent),
								);
							break;
						}
						o === "cell" && r === "ltr"
							? (M(u.current),
								U(u.current, { containingElement: _(u.current) }))
							: ((D.currentNode = u.current),
								(B = r === "rtl" ? De(D) : D.firstChild()),
								B && (M(B), U(B, { containingElement: _(u.current) })));
					}
					break;
				}
				case "ArrowUp":
				case "ArrowDown":
					!g.altKey &&
						ce(u.current, Q(g)) &&
						(g.stopPropagation(),
						g.preventDefault(),
						(z = u.current.parentElement) == null ||
							z.dispatchEvent(
								new KeyboardEvent(g.nativeEvent.type, g.nativeEvent),
							));
					break;
			}
		},
		x = (g) => {
			if (((s.current = l.key), Q(g) !== u.current)) {
				fl() || t.selectionManager.setFocusedKey(l.key);
				return;
			}
			requestAnimationFrame(() => {
				o === "child" && xe() === u.current && f();
			});
		},
		b = I(d, {
			role: "gridcell",
			onKeyDownCapture: y,
			"aria-colspan": l.colSpan,
			"aria-colindex": l.colIndex != null ? l.colIndex + 1 : void 0,
			colSpan: n ? void 0 : l.colSpan,
			onFocus: x,
		});
	return (
		n && (b["aria-colindex"] = (l.colIndex ?? l.index) + 1),
		i &&
			b.tabIndex != null &&
			b.onPointerDown == null &&
			(b.onPointerDown = (g) => {
				const C = g.currentTarget,
					D = C.getAttribute("tabindex");
				C.removeAttribute("tabindex"),
					requestAnimationFrame(() => {
						D != null && C.setAttribute("tabindex", D);
					});
			}),
		{ gridCellProps: b, isPressed: h }
	);
}
function De(e) {
	let t = null,
		u = null;
	do (u = e.lastChild()), u && (t = u);
	while (u);
	return t;
}
function Tl(e) {
	return e && e.__esModule ? e.default : e;
}
function Nl(e, t, u) {
	var b, g;
	let { node: l } = e,
		n = l.props.allowsSorting,
		{ gridCellProps: o } = Fu({ ...e, focusMode: "child" }, t, u),
		i =
			l.props.isSelectionCell && t.selectionManager.selectionMode === "single",
		{ pressProps: a, isPressed: r } = Hu({
			isDisabled: !n || i,
			onPress() {
				t.sort(l.key);
			},
			ref: u,
		}),
		{ focusableProps: c } = Lu({}, u),
		m,
		s = ((b = t.sortDescriptor) == null ? void 0 : b.column) === l.key,
		f = (g = t.sortDescriptor) == null ? void 0 : g.direction;
	l.props.allowsSorting && !Ge() && (m = s ? f : "none");
	let d = H(Tl(le), "@react-aria/table"),
		h;
	n &&
		((h = `${d.format("sortable")}`),
		s && f && Ge() && (h = `${h}, ${d.format(f)}`));
	const y = Fe(h),
		x = t.collection.size === 0;
	return (
		p.useEffect(() => {
			x &&
				t.selectionManager.focusedKey === l.key &&
				t.selectionManager.setFocusedKey(null);
		}, [x, t.selectionManager, l.key]),
		{
			columnHeaderProps: {
				...I(c, o, a, y, x ? { tabIndex: -1 } : null),
				role: "columnheader",
				id: zl(t, l.key),
				"aria-colspan": l.colSpan && l.colSpan > 1 ? l.colSpan : void 0,
				"aria-sort": m,
			},
			isPressed: r,
		}
	);
}
function Ml(e, t, u) {
	var h, y;
	const {
			node: l,
			isVirtualized: n,
			shouldSelectOnPressUp: o,
			onAction: i,
		} = e,
		{ actions: a, shouldSelectOnPressUp: r } = Te.get(t),
		c = a.onRowAction
			? () => {
					var x;
					return (x = a.onRowAction) == null ? void 0 : x.call(a, l.key);
				}
			: i,
		{ itemProps: m, ...s } = rt({
			selectionManager: t.selectionManager,
			key: l.key,
			ref: u,
			isVirtualized: n,
			shouldSelectOnPressUp: r || o,
			onAction:
				c || ((h = l == null ? void 0 : l.props) != null && h.onAction)
					? _u(
							(y = l == null ? void 0 : l.props) == null ? void 0 : y.onAction,
							c,
						)
					: void 0,
			isDisabled: t.collection.size === 0,
		}),
		f = t.selectionManager.isSelected(l.key),
		d = {
			role: "row",
			"aria-selected": t.selectionManager.selectionMode !== "none" ? f : void 0,
			"aria-disabled": s.isDisabled || void 0,
			...m,
		};
	return n && (d["aria-rowindex"] = l.index + 1), { rowProps: d, ...s };
}
function Rl(e) {
	return e && e.__esModule ? e.default : e;
}
const Ze = {
	expand: { ltr: "ArrowRight", rtl: "ArrowLeft" },
	collapse: { ltr: "ArrowLeft", rtl: "ArrowRight" },
};
function jl(e, t, u) {
	var y, x;
	const { node: l, isVirtualized: n } = e,
		{ rowProps: o, ...i } = Ml(e, t, u),
		{ direction: a } = ue();
	n && t.treeColumn == null
		? (o["aria-rowindex"] = l.index + 1 + t.collection.headerRows.length)
		: delete o["aria-rowindex"];
	let r =
			t.treeColumn != null &&
			(t.expandedKeys === "all" || t.expandedKeys.has(l.key)),
		c = H(Rl(le), "@react-aria/table"),
		m = cl({
			"aria-label": r ? c.format("collapse") : c.format("expand"),
			"aria-labelledby": Be(t, l.key),
		}),
		s = {},
		f = {};
	if (t.treeColumn != null) {
		const b = t.collection.getItem(l.key);
		if (b != null) {
			let g = Je(t.collection, l),
				C =
					((y = b.props) == null ? void 0 : y.hasChildRows) ||
					((x = b.props) == null ? void 0 : x.UNSTABLE_childItems) ||
					(g == null ? void 0 : g.type) !== "cell",
				D = t.collection.getItem(l.parentKey),
				w = D.type === "tablebody" || D.type === "body",
				E = Je(t.collection, D);
			for (; E && E.type !== "item" && E.prevKey != null; )
				E = t.collection.getItem(E.prevKey);
			(s = {
				onKeyDown: (v) => {
					v.key === Ze.expand[a] &&
					t.selectionManager.focusedKey === b.key &&
					C &&
					t.expandedKeys !== "all" &&
					!t.expandedKeys.has(b.key)
						? (t.toggleKey(b.key), v.stopPropagation())
						: v.key === Ze.collapse[a] &&
							t.selectionManager.focusedKey === b.key &&
							(t.expandedKeys !== "all"
								? C && t.expandedKeys.has(b.key)
									? (t.toggleKey(b.key), v.stopPropagation())
									: !t.expandedKeys.has(b.key) &&
										b.parentKey != null &&
										b.level > 0 &&
										(t.selectionManager.setFocusedKey(b.parentKey),
										v.stopPropagation())
								: t.expandedKeys === "all" &&
									(t.toggleKey(b.key), v.stopPropagation()));
				},
				"aria-expanded": C
					? t.expandedKeys === "all" || t.expandedKeys.has(l.key)
					: void 0,
				"aria-level": b.level + 1,
				"aria-posinset": b.index - (w ? 0 : t.collection.columnCount) + 1,
				"aria-setsize": E.index - (w ? 0 : t.collection.columnCount) + 1,
			}),
				(f = {
					isDisabled: i.isDisabled,
					onPress: () => {
						i.isDisabled ||
							(t.toggleKey(l.key),
							t.selectionManager.setFocused(!0),
							t.selectionManager.setFocusedKey(l.key));
					},
					excludeFromTabOrder: !0,
					preventFocusOnPress: !0,
					"data-react-aria-prevent-focus": !0,
					...m,
				});
		}
	}
	const d = pl(l.props),
		h = i.hasAction ? d : {};
	return {
		rowProps: { ...I(o, s, h), "aria-labelledby": Be(t, l.key) },
		expandButtonProps: f,
		...i,
	};
}
function Je(e, t) {
	return "lastChildKey" in t
		? t.lastChildKey != null
			? e.getItem(t.lastChildKey)
			: null
		: Array.from(t.childNodes).findLast((u) => u.parentKey === t.key);
}
function Vl(e, t, u) {
	const { node: l, isVirtualized: n } = e,
		o = { role: "row" };
	return (
		n && t.treeColumn == null && (o["aria-rowindex"] = l.index + 1),
		{ rowProps: o }
	);
}
function Hl(e, t, u) {
	var i;
	const { gridCellProps: l, isPressed: n } = Fu(e, t, u),
		o = (i = e.node.column) == null ? void 0 : i.key;
	return (
		o != null &&
			t.collection.rowHeaderColumnKeys.has(o) &&
			((l.role = "rowheader"), (l.id = Jt(t, e.node.parentKey, o))),
		{ gridCellProps: l, isPressed: n }
	);
}
function Ll(e) {
	return e && e.__esModule ? e.default : e;
}
function Ol(e, t) {
	const { key: u } = e;
	const { checkboxProps: l } = Dl(e, t);
	return { checkboxProps: { ...l, "aria-labelledby": `${l.id} ${Be(t, u)}` } };
}
function Ul(e) {
	const { isEmpty: t, isSelectAll: u, selectionMode: l } = e.selectionManager;
	return {
		checkboxProps: {
			"aria-label": H(Ll(le), "@react-aria/table").format(
				l === "single" ? "select" : "selectAll",
			),
			isSelected: u,
			isDisabled:
				l !== "multiple" ||
				e.collection.size === 0 ||
				(e.collection.rows.length === 1 &&
					e.collection.rows[0].type === "loader"),
			isIndeterminate: !t && !u,
			onChange: () => e.selectionManager.toggleSelectAll(),
		},
	};
}
function _l() {
	return { rowGroupProps: { role: "rowgroup" } };
}
function Pu() {
	return _l();
}
class Wl extends tl {
	withExpandedKeys(t) {
		const u = this.clone();
		return (
			(u.expandedKeys = t),
			(u.frozen = this.frozen),
			(u.rows = Array.from(u.getRows())),
			u
		);
	}
	addNode(t) {
		super.addNode(t),
			this.columnsDirty || (this.columnsDirty = t.type === "column"),
			t.type === "tableheader" && (this.head = t);
	}
	getRows() {
		const t = [];
		for (const u of this)
			(u.type === "tablebody" || u.type === "tablefooter") &&
				t.push(...this.getChildren(u.key));
		return t;
	}
	get body() {
		for (const t of this) if (t.type === "tablebody") return t;
		return new me(-2);
	}
	commit(t, u, l = !1) {
		this.updateColumns(l),
			(this.firstKey = t),
			(this.lastKey = u),
			(this.rows = []);
		for (const n of this.getRows()) {
			const o = n.lastChildKey;
			if (o != null) {
				let i = this.getItem(o);
				for (; i && i.type !== "cell"; )
					i = i.prevKey != null ? this.getItem(i.prevKey) : null;
				if (i) {
					const a = (i.colIndex ?? i.index) + (i.colSpan ?? 1);
					if (a !== this.columns.length && !l)
						throw new Error(
							`Cell count must match column count. Found ${a} cells and ${this.columns.length} columns.`,
						);
				}
			}
			this.rows.push(n);
		}
		super.commit(t, u, l);
	}
	updateColumns(t) {
		if (!this.columnsDirty) return;
		(this.rowHeaderColumnKeys = new Set()), (this.columns = []);
		const u = new Map(),
			l = (n) => {
				switch (n.type) {
					case "column":
						u.set(n.key, n),
							n.hasChildNodes ||
								((n.index = this.columns.length),
								this.columns.push(n),
								n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
						break;
				}
				for (const o of this.getChildren(n.key)) l(o);
			};
		for (const n of this.getChildren(this.head.key)) l(n);
		if (
			((this.headerRows = qt(u, this.columns)),
			(this.columnsDirty = !1),
			this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !t)
		)
			throw new Error(
				"A table must have at least one Column with the isRowHeader prop set to true",
			);
	}
	get columnCount() {
		return this.columns.length;
	}
	*[Symbol.iterator]() {
		let t = this.firstKey;
		for (; t != null; ) {
			const u = this.getItem(t);
			u && (yield u), (t = (u == null ? void 0 : u.nextKey) ?? null);
		}
	}
	getFirstKey() {
		for (const t of this)
			if (t.type === "tablebody") return t.firstChildKey ?? null;
		return null;
	}
	getLastKey() {
		const t = this.lastKey;
		if (t == null) return null;
		let u = this.getItem(t);
		for (
			;
			(u == null ? void 0 : u.lastChildKey) != null &&
			(u.type !== "item" || this.expandedKeys.has(u.key));
		)
			u = this.getItem(u.lastChildKey);
		return u == null ? void 0 : u.key;
	}
	getKeyAfter(t) {
		const u = this.getItem(t);
		if ((u == null ? void 0 : u.type) === "column") return u.nextKey ?? null;
		if (!u) return null;
		if (
			u.type === "item" &&
			u.firstChildKey != null &&
			this.expandedKeys.has(u.key)
		) {
			let l = this.getItem(u.firstChildKey);
			for (; l; ) {
				if (l.type === "item") return l.key;
				l = l.nextKey != null ? this.getItem(l.nextKey) : null;
			}
		}
		return super.getKeyAfter(t);
	}
	getKeyBefore(t) {
		var n;
		let u = this.getItem(t);
		if ((u == null ? void 0 : u.type) === "column") return u.prevKey ?? null;
		if (!u) return null;
		let l = null;
		if (u.prevKey != null) {
			for (
				u = this.getItem(u.prevKey);
				u &&
				(u.type !== "item" || this.expandedKeys.has(u.key)) &&
				u.lastChildKey != null;
			)
				u = this.getItem(u.lastChildKey);
			l = (u == null ? void 0 : u.key) ?? null;
		}
		return (
			l == null && (l = u.parentKey),
			l != null &&
			((n = this.getItem(l)) == null ? void 0 : n.type) === "tableheader"
				? null
				: l
		);
	}
	getChildren(t) {
		const u = this.getItem(t);
		if (!u) {
			for (const n of this.headerRows) if (n.key === t) return n.childNodes;
		}
		const l = this;
		return (u == null ? void 0 : u.type) === "tablebody" ||
			(u == null ? void 0 : u.type) === "tablefooter"
			? {
					*[Symbol.iterator]() {
						let n = u.firstChildKey,
							o = n != null ? l.getItem(n) : null;
						for (; o; ) {
							yield o;
							const i = l.getKeyAfter(o.key);
							if (
								((o = i != null ? l.getItem(i) : null),
								o && o.parentKey === u.parentKey)
							)
								break;
						}
					},
				}
			: {
					*[Symbol.iterator]() {
						let n = l.getItem(t),
							o =
								(n == null ? void 0 : n.firstChildKey) != null
									? l.getItem(n.firstChildKey)
									: null;
						for (
							;
							o &&
							(yield o,
							(o = o.nextKey != null ? l.getItem(o.nextKey) : null),
							!(
								(n == null ? void 0 : n.type) === "item" &&
								(o == null ? void 0 : o.type) !== "cell"
							));
						);
					},
				};
	}
	clone() {
		const t = super.clone();
		return (
			(t.headerRows = this.headerRows),
			(t.columns = this.columns),
			(t.rows = this.rows),
			(t.rowHeaderColumnKeys = this.rowHeaderColumnKeys),
			(t.head = this.head),
			t
		);
	}
	getTextValue(t) {
		const u = this.getItem(t);
		if (!u) return "";
		if (u.textValue) return u.textValue;
		const l = this.rowHeaderColumnKeys,
			n = [];
		for (const o of this.getChildren(t)) {
			const i = this.columns[o.index];
			if (
				(l.has(i.key) && o.textValue && n.push(o.textValue),
				n.length === l.size)
			)
				break;
		}
		return n.join(" ");
	}
	constructor(...t) {
		super(...t),
			(this.headerRows = []),
			(this.columns = []),
			(this.rows = []),
			(this.rowHeaderColumnKeys = new Set()),
			(this.head = new de(-1)),
			(this.columnsDirty = !0),
			(this.expandedKeys = new Set());
	}
}
const Gl = p.createContext(null),
	Yl = p.createContext(null),
	T = p.createContext(null),
	Tu = p.createContext(null),
	Xl = p.forwardRef((t, u) => {
		var m;
		[t, u] = ot(t, u, Yl);
		const l = it(t),
			{ selectionBehavior: n, selectionMode: o, disallowEmptySelection: i } = l,
			a = !!((m = t.dragAndDropHooks) != null && m.useDraggableCollectionState),
			r = p.useMemo(
				() => ({
					selectionBehavior: o === "none" ? null : n,
					selectionMode: o,
					disallowEmptySelection: i,
					allowsDragging: a,
				}),
				[n, o, i, a],
			),
			c = $.createElement(Jl.Provider, { value: r }, $.createElement(Ke, t));
		return $.createElement(
			Zu,
			{ content: c, createCollection: () => new Wl() },
			(s) =>
				$.createElement(Zl, {
					props: t,
					forwardedRef: u,
					selectionState: l,
					collection: s,
				}),
		);
	});
const ql = p.forwardRef((t, u) => {
	const { isVirtualized: l } = p.useContext(k);
	return l
		? $.createElement(A.div, { ...t, ref: u })
		: $.createElement(A.table, { ...t, ref: u });
});
const Qe = {
	expand: { ltr: "ArrowRight", rtl: "ArrowLeft" },
	collapse: { ltr: "ArrowLeft", rtl: "ArrowRight" },
};
function Zl({ props: e, forwardedRef: t, selectionState: u, collection: l }) {
	[e, t] = ot(e, t, _e);
	const { shouldUseVirtualFocus: n, disallowTypeAhead: o, filter: i, ...a } = e,
		r = p.useContext(Gl);
	t = te(
		p.useMemo(
			() => Wu(t, r == null ? void 0 : r.tableRef),
			[t, r == null ? void 0 : r.tableRef],
		),
	);
	const [c, m] = dt(
		e.expandedKeys ? new Set(e.expandedKeys) : void 0,
		e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
		e.onExpandedChange,
	);
	l = p.useMemo(() => l.withExpandedKeys(c), [l, c]);
	const s = wl({
			...a,
			collection: l,
			children: void 0,
			UNSAFE_selectionState: u,
			expandedKeys: c,
			onExpandedChange: m,
		}),
		f = Sl(s, i),
		{
			isVirtualized: d,
			layoutDelegate: h,
			dropTargetDelegate: y,
			CollectionRoot: x,
		} = p.useContext(k),
		{ dragAndDropHooks: b } = e,
		{ gridProps: g } = Pl({ ...a, layoutDelegate: h, isVirtualized: d }, f, t),
		C = f.selectionManager,
		D = !!(b != null && b.useDraggableCollectionState),
		w = !!(b != null && b.useDroppableCollectionState);
	p.useRef(D), p.useRef(w), p.useEffect(() => {}, [D, w]);
	let E,
		v,
		K,
		z = !1,
		B = null,
		V = p.useRef(null),
		{ direction: ne } = ue(),
		[oe] = p.useState(() => new Cl());
	if (D && b) {
		(E = b.useDraggableCollectionState({
			collection: f.collection,
			selectionManager: C,
			preview: b.renderDragPreview ? V : void 0,
		})),
			b.useDraggableCollection({}, E, t);
		const ge = b.DragPreview;
		B = b.renderDragPreview
			? $.createElement(ge, { ref: V }, b.renderDragPreview)
			: null;
	}
	if (w && b) {
		v = b.useDroppableCollectionState({
			collection: f.collection,
			selectionManager: C,
		});
		const ge = new ul({
				collection: f.collection,
				disabledKeys: C.disabledKeys,
				disabledBehavior: C.disabledBehavior,
				ref: t,
				layoutDelegate: h,
			}),
			ju = b.dropTargetDelegate || y || new b.ListDropTargetDelegate(l.rows, t);
		oe.setup(ju, s, ne),
			(K = b.useDroppableCollection(
				{
					keyboardDelegate: ge,
					dropTargetDelegate: oe,
					onDropActivate: (J) => {
						var F;
						if (J.target.type === "item") {
							const P = J.target.key,
								Ue = s.collection.getItem(P),
								Vu = c.has(P);
							Ue &&
								Ue.hasChildNodes &&
								(!Vu ||
									((F = b == null ? void 0 : b.isVirtualDragging) != null &&
										F.call(b))) &&
								s.toggleKey(P);
						}
					},
					onKeyDown: (J) => {
						const F = v == null ? void 0 : v.target;
						if (F && F.type === "item" && F.dropPosition === "on") {
							const P = s.collection.getItem(F.key);
							((J.key === Qe.expand[ne] &&
								P != null &&
								P.hasChildNodes &&
								!s.expandedKeys.has(F.key)) ||
								(J.key === Qe.collapse[ne] &&
									P != null &&
									P.hasChildNodes &&
									s.expandedKeys.has(F.key))) &&
								s.toggleKey(F.key);
						}
					},
				},
				v,
				t,
			)),
			(z = v.isDropTarget({ type: "root" }));
	}
	let { focusProps: q, isFocused: Z, isFocusVisible: ie } = ee(),
		L = j({
			...e,
			children: void 0,
			defaultClassName: "react-aria-Table",
			values: { isDropTarget: z, isFocused: Z, isFocusVisible: ie, state: f },
		}),
		re = !!(D && !(E != null && E.isDisabled)),
		$e = L.style,
		Oe = null;
	r &&
		((Oe = r.useTableColumnResizeState({ tableWidth: r.tableWidth }, f)),
		d || ($e = { ...$e, tableLayout: "fixed", width: "min-content" }));
	const Ru = N(e, { global: !0 });
	return $.createElement(
		fe,
		{
			values: [
				[T, f],
				[Tu, Oe],
				[X, { dragAndDropHooks: b, dragState: E, dropState: v }],
				[ll, { render: dn }],
				[_e, null],
				[nl, null],
			],
		},
		$.createElement(
			dl,
			null,
			$.createElement(
				ql,
				{
					...I(Ru, L, g, q, K == null ? void 0 : K.collectionProps),
					style: $e,
					ref: t,
					slot: e.slot || void 0,
					onScroll: e.onScroll,
					"data-allows-dragging": re || void 0,
					"data-drop-target": z || void 0,
					"data-focused": Z || void 0,
					"data-focus-visible": ie || void 0,
				},
				$.createElement(
					ol,
					null,
					$.createElement(x, {
						collection: f.collection,
						scrollRef: (r == null ? void 0 : r.scrollRef) ?? t,
						persistedKeys: il(C, b, v),
					}),
				),
			),
		),
		B,
	);
}
const Jl = p.createContext(null),
	Me = class Me extends pe {};
Me.type = "tableheader";
const de = Me,
	Ql = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.thead, { ...t, ref: u });
	});
const en = ze(
	de,
	(e, t) => {
		const u = p.useContext(T).collection,
			l = Ju({
				items: u.headerRows,
				children: p.useCallback((r) => {
					switch (r.type) {
						case "headerrow":
							return $.createElement(un, { item: r });
						default:
							throw new Error(
								"Unsupported node type in TableHeader: " + r.type,
							);
					}
				}, []),
			}),
			{ rowGroupProps: n } = Pu(),
			{ hoverProps: o, isHovered: i } = he({
				onHoverStart: e.onHoverStart,
				onHoverChange: e.onHoverChange,
				onHoverEnd: e.onHoverEnd,
			}),
			a = j({
				...e,
				children: void 0,
				defaultClassName: "react-aria-TableHeader",
				values: { isHovered: i },
			});
		return $.createElement(
			Ql,
			{
				...I(N(e, { global: !0 }), n, o),
				...a,
				ref: t,
				"data-hovered": i || void 0,
			},
			l,
		);
	},
	(e) =>
		$.createElement(
			Ke,
			{ dependencies: e.dependencies, items: e.columns },
			e.children,
		),
);
const tn = p.forwardRef((t, u) => {
	const { isVirtualized: l } = p.useContext(k);
	return l
		? $.createElement("div", { ...t, ref: u })
		: $.createElement("tr", { ...t, ref: u });
});
function un({ item: e }) {
	const t = p.useRef(null),
		u = p.useContext(T),
		{ isVirtualized: l, CollectionBranch: n } = p.useContext(k),
		{ rowProps: o } = Vl({ node: e, isVirtualized: l }, u, t),
		{ checkboxProps: i } = Ul(u);
	return $.createElement(
		tn,
		{ ...o, ref: t },
		$.createElement(
			fe,
			{
				values: [
					[ft, { slots: { selection: i } }],
					[pt, { slots: { selection: i } }],
				],
			},
			$.createElement(n, { collection: u.collection, parent: e }),
		),
	);
}
const Re = class Re extends pe {};
Re.type = "column";
const ke = Re,
	ln = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.th, { ...t, ref: u });
	});
const nn = Ie(ke, (e, t, u) => {
		var g, C;
		let l = te(t),
			n = p.useContext(T),
			{ isVirtualized: o } = p.useContext(k),
			{ columnHeaderProps: i, isPressed: a } = Nl(
				{ node: u, isVirtualized: o },
				n,
				l,
			),
			{ isFocused: r, isFocusVisible: c, focusProps: m } = ee(),
			s = p.useContext(Tu),
			f = !1;
		s && (f = s.resizingColumn === u.key);
		let { hoverProps: d, isHovered: h } = he({ isDisabled: !e.allowsSorting }),
			y = j({
				...e,
				id: void 0,
				children: u.rendered,
				defaultClassName: "react-aria-Column",
				values: {
					isHovered: h,
					isPressed: a,
					isFocused: r,
					isFocusVisible: c,
					allowsSorting: u.props.allowsSorting,
					sortDirection:
						((g = n.sortDescriptor) == null ? void 0 : g.column) === u.key
							? n.sortDescriptor.direction
							: void 0,
					isResizing: f,
					startResize: () => {
						if (s) s.startResize(u.key), n.setKeyboardNavigationDisabled(!0);
						else
							throw new Error(
								"Wrap your <Table> in a <ResizableTableContainer> to enable column resizing",
							);
					},
					sort: (D) => {
						n.sort(u.key, D);
					},
				},
			}),
			x = y.style;
		s && (x = { ...x, width: s.getColumnWidth(u.key) });
		const b = N(e, { global: !0 });
		return (
			delete b.id,
			$.createElement(
				ln,
				{
					...I(b, i, m, d),
					...y,
					style: x,
					ref: l,
					"data-hovered": h || void 0,
					"data-pressed": a || void 0,
					"data-focused": r || void 0,
					"data-focus-visible": c || void 0,
					"data-resizing": f || void 0,
					"data-allows-sorting": u.props.allowsSorting || void 0,
					"data-sort-direction":
						((C = n.sortDescriptor) == null ? void 0 : C.column) === u.key
							? n.sortDescriptor.direction
							: void 0,
				},
				$.createElement(
					fe,
					{
						values: [
							[on, { column: u, triggerRef: l }],
							[k, at],
						],
					},
					y.children,
				),
			)
		);
	}),
	on = p.createContext(null),
	je = class je extends st {};
je.type = "tablebody";
const me = je,
	rn = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.tbody, { ...t, ref: u });
	});
const an = ze(me, (e, t, u) => {
		let l = p.useContext(T),
			{ isVirtualized: n } = p.useContext(k),
			o = l.collection,
			{ CollectionBranch: i } = p.useContext(k),
			{ dragAndDropHooks: a, dropState: r } = p.useContext(X),
			c =
				!!(a != null && a.useDroppableCollectionState) &&
				!(r != null && r.isDisabled),
			m = c && !!r && (r.isDropTarget({ type: "root" }) ?? !1),
			s = o.size === 0,
			f = { isDropTarget: m, isEmpty: s },
			d = j({
				...e,
				id: void 0,
				children: void 0,
				defaultClassName: "react-aria-TableBody",
				values: f,
			}),
			h,
			y = o.columnCount;
		if (s && e.renderEmptyState && l) {
			let g = {},
				C = {},
				D = {};
			n
				? ((C["aria-colspan"] = y), (D = { display: "contents" }))
				: (C.colSpan = y),
				(h = $.createElement(
					G,
					{ role: "row", ...g, style: D },
					$.createElement(
						Y,
						{ role: "rowheader", ...C, style: D },
						e.renderEmptyState(f),
					),
				));
		}
		const { rowGroupProps: x } = Pu(),
			b = N(e, { global: !0 });
		return $.createElement(
			rn,
			{ ...I(b, d, x), ref: t, "data-empty": s || void 0 },
			c && $.createElement(bn, null),
			$.createElement(i, {
				collection: o,
				parent: u,
				renderDropIndicator: Qu(a, r),
			}),
			h,
		);
	}),
	Ve = class Ve extends st {};
Ve.type = "tablefooter";
const et = Ve;
const Nu = p.createContext({ isFocusVisibleWithinRow: !1 }),
	He = class He extends pe {
		filter(t, u, l) {
			const n = t.getChildren(this.key);
			for (const o of n)
				if (l(o.textValue, o)) {
					const i = this.clone();
					return u.addDescendants(i, t), i;
				}
			return null;
		}
	};
He.type = "item";
const we = He,
	G = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.tr, { ...t, ref: u });
	});
const sn = ze(
		we,
		(e, t, u) => {
			var re;
			let l = te(t),
				n = p.useContext(T),
				{ dragAndDropHooks: o, dragState: i, dropState: a } = p.useContext(X),
				{ isVirtualized: r, CollectionBranch: c } = p.useContext(k),
				m = i && !(i.isDisabled || i.selectionManager.isDisabled(u.key)),
				{
					rowProps: s,
					expandButtonProps: f,
					...d
				} = jl({ node: u, shouldSelectOnPressUp: !!i, isVirtualized: r }, n, l),
				{ isFocused: h, isFocusVisible: y, focusProps: x } = ee(),
				{ isFocusVisible: b, focusProps: g } = ee({ within: !0 }),
				{ hoverProps: C, isHovered: D } = he({
					isDisabled: !d.allowsSelection && !d.hasAction && !m,
					onHoverStart: e.onHoverStart,
					onHoverChange: e.onHoverChange,
					onHoverEnd: e.onHoverEnd,
				}),
				{ checkboxProps: w } = Ol({ key: u.key }, n),
				E;
			i && o && (E = o.useDraggableItem({ key: u.key, hasDragButton: !0 }, i));
			let v,
				K = p.useRef(null),
				{ visuallyHiddenProps: z } = Pe();
			a &&
				o &&
				(v = o.useDropIndicator(
					{ target: { type: "item", key: u.key, dropPosition: "on" } },
					a,
					K,
				));
			const B = p.useRef(null);
			p.useEffect(() => {
				i && B.current;
			}, []);
			const V = i && i.isDragging(u.key),
				{ children: ne, ...oe } = e,
				q =
					e.hasChildItems ||
					((re = n.collection.getItem(u.lastChildKey)) == null
						? void 0
						: re.type) !== "cell",
				Z = q && n.expandedKeys.has(u.key),
				ie = j({
					...oe,
					id: void 0,
					defaultClassName: "react-aria-Row",
					defaultStyle: { "--table-row-level": u.level + 1 },
					values: {
						...d,
						state: n,
						isHovered: D,
						isFocused: h,
						isFocusVisible: y,
						selectionMode: n.selectionManager.selectionMode,
						selectionBehavior: n.selectionManager.selectionBehavior,
						isDragging: V,
						isDropTarget: v == null ? void 0 : v.isDropTarget,
						isFocusVisibleWithin: b,
						id: u.key,
						hasChildItems: q,
						isExpanded: Z,
						level: u.level + 1,
					},
				}),
				L = N(e, { global: !0 });
			return (
				delete L.id,
				delete L.onClick,
				$.createElement(
					$.Fragment,
					null,
					v &&
						!v.isHidden &&
						$.createElement(
							G,
							{ role: "row", style: { height: 0 } },
							$.createElement(
								Y,
								{
									role: "gridcell",
									colSpan: n.collection.columnCount,
									style: { padding: 0 },
								},
								$.createElement("div", {
									role: "button",
									...z,
									...v.dropIndicatorProps,
									ref: K,
								}),
							),
						),
					$.createElement(
						G,
						{
							...I(L, ie, s, x, C, E == null ? void 0 : E.dragProps, g),
							ref: l,
							"data-disabled": d.isDisabled || void 0,
							"data-selected": d.isSelected || void 0,
							"data-hovered": D || void 0,
							"data-focused": d.isFocused || void 0,
							"data-focus-visible": y || void 0,
							"data-pressed": d.isPressed || void 0,
							"data-dragging": V || void 0,
							"data-drop-target":
								(v == null ? void 0 : v.isDropTarget) || void 0,
							"data-selection-mode":
								n.selectionManager.selectionMode === "none"
									? void 0
									: n.selectionManager.selectionMode,
							"data-focus-visible-within": b || void 0,
							"data-expanded": Z || void 0,
							"data-has-child-items": q || void 0,
							"data-level": u.level + 1,
						},
						$.createElement(
							fe,
							{
								values: [
									[ft, { slots: { [ye]: {}, selection: w } }],
									[pt, { slots: { [ye]: {}, selection: w } }],
									[
										Ou,
										{
											slots: {
												[ye]: {},
												chevron: f,
												drag: {
													...(E == null ? void 0 : E.dragButtonProps),
													ref: B,
													style: { pointerEvents: "none" },
												},
											},
										},
									],
									[el, { isSelected: d.isSelected }],
									[Nu, { isFocusVisibleWithinRow: b }],
								],
							},
							$.createElement(c, { collection: n.collection, parent: u }),
						),
					),
				)
			);
		},
		(e) => {
			if (e.id == null && typeof e.children == "function")
				throw new Error(
					"No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.",
				);
			const t = [e.value].concat(e.dependencies);
			return $.createElement(
				Ke,
				{ dependencies: t, items: e.columns, idScope: e.id },
				e.children,
			);
		},
	),
	Le = class Le extends pe {};
Le.type = "cell";
const Se = Le,
	Y = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.td, { ...t, ref: u });
	});
const cn = Ie(Se, (e, t, u) => {
	var v;
	const l = te(t),
		n = p.useContext(T),
		{ dragState: o } = p.useContext(X),
		{ isVirtualized: i } = p.useContext(k);
	u.column = n.collection.columns[u.index];
	const { gridCellProps: a, isPressed: r } = Hl(
			{ node: u, shouldSelectOnPressUp: !!o, isVirtualized: i },
			n,
			l,
		),
		{ isFocused: c, isFocusVisible: m, focusProps: s } = ee(),
		{ hoverProps: f, isHovered: d } = he({}),
		{ isFocusVisibleWithinRow: h } = p.useContext(Nu),
		y = u.parentKey != null ? n.selectionManager.isSelected(u.parentKey) : !1,
		x = u.colIndex || u.index,
		b = n.collection.getItem(u.parentKey),
		g =
			b.props.hasChildItems ||
			((v = n.collection.getItem(b.lastChildKey)) == null ? void 0 : v.type) !==
				"cell",
		C = g && n.expandedKeys.has(u.parentKey),
		D = n.selectionManager.isDisabled(u.parentKey),
		w = j({
			...e,
			id: void 0,
			defaultClassName: "react-aria-Cell",
			values: {
				isFocused: c,
				isFocusVisible: m,
				isFocusVisibleWithinRow: h,
				isPressed: r,
				isHovered: d,
				isSelected: y,
				id: u.key,
				columnIndex: x,
				hasChildItems: g,
				isExpanded: C,
				isDisabled: D,
				level: b.level + 1,
				isTreeColumn: u.column.key === n.treeColumn,
			},
		}),
		E = N(e, { global: !0 });
	return (
		delete E.id,
		$.createElement(
			Y,
			{
				...I(E, w, a, s, f),
				ref: l,
				"data-focused": c || void 0,
				"data-focus-visible": m || void 0,
				"data-focus-visible-within-row": h || void 0,
				"data-pressed": r || void 0,
				"data-selected": y || void 0,
				"data-column-index": x,
				"data-expanded": C || void 0,
				"data-has-child-items": g || void 0,
				"data-level": b.level + 1,
				"data-tree-column": u.column.key === n.treeColumn || void 0,
				"data-disabled": D || void 0,
			},
			$.createElement(k.Provider, { value: at }, w.children),
		)
	);
});
function dn(e, t) {
	var c;
	t = te(t);
	const { dragAndDropHooks: u, dropState: l } = p.useContext(X),
		n = p.useRef(null),
		{
			dropIndicatorProps: o,
			isHidden: i,
			isDropTarget: a,
		} = u.useDropIndicator(e, l, n);
	if (i) return null;
	const r =
		l && e.target.type === "item"
			? (((c = l.collection.getItem(e.target.key)) == null
					? void 0
					: c.level) || 0) + 1
			: 1;
	return $.createElement(hn, {
		...e,
		dropIndicatorProps: o,
		isDropTarget: a,
		buttonRef: n,
		level: r,
		ref: t,
	});
}
const mn = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.tr, { ...t, ref: u });
	}),
	fn = p.forwardRef((t, u) => {
		const { isVirtualized: l } = p.useContext(k);
		return l
			? $.createElement(A.div, { ...t, ref: u })
			: $.createElement(A.td, { ...t, ref: u });
	});
function pn(e, t) {
	const {
			dropIndicatorProps: u,
			isDropTarget: l,
			buttonRef: n,
			level: o,
			...i
		} = e,
		a = p.useContext(T),
		{ visuallyHiddenProps: r } = Pe(),
		c = j({
			...i,
			defaultClassName: "react-aria-DropIndicator",
			defaultStyle: { "--table-row-level": o + 1 },
			values: { isDropTarget: l },
		});
	return $.createElement(
		mn,
		{
			...N(e, { global: !0 }),
			...c,
			role: "row",
			ref: t,
			"data-drop-target": l || void 0,
			"aria-level": o,
		},
		$.createElement(
			fn,
			{
				role: "gridcell",
				colSpan: a.collection.columnCount,
				style: { padding: 0 },
			},
			$.createElement("div", { ...r, role: "button", ...u, ref: n }),
			c.children,
		),
	);
}
const hn = p.forwardRef(pn);
function bn() {
	const e = p.useContext(T),
		{ dragAndDropHooks: t, dropState: u } = p.useContext(X),
		l = p.useRef(null),
		{ dropIndicatorProps: n } = t.useDropIndicator(
			{ target: { type: "root" } },
			u,
			l,
		),
		o = u.isDropTarget({ type: "root" }),
		{ visuallyHiddenProps: i } = Pe();
	return !o && n["aria-hidden"]
		? null
		: $.createElement(
				G,
				{ role: "row", "aria-hidden": n["aria-hidden"], style: { height: 0 } },
				$.createElement(
					Y,
					{
						role: "gridcell",
						colSpan: e.collection.columnCount,
						style: { padding: 0 },
					},
					$.createElement("div", { role: "button", ...i, ...n, ref: l }),
				),
			);
}
Ie(rl, (t, u, l) => {
	const n = p.useContext(T),
		{ isVirtualized: o } = p.useContext(k),
		{ isLoading: i, onLoadMore: a, scrollOffset: r, ...c } = t,
		m = n.collection.columns.length,
		s = p.useRef(null),
		f = p.useMemo(
			() => ({
				onLoadMore: a,
				collection: n == null ? void 0 : n.collection,
				sentinelRef: s,
				scrollOffset: r,
			}),
			[a, r, n == null ? void 0 : n.collection],
		);
	al(f, s);
	let d = j({
			...c,
			id: void 0,
			children: l.rendered,
			defaultClassName: "react-aria-TableLoadingIndicator",
			defaultStyle: { "--table-row-level": l.level + 1 },
			values: void 0,
		}),
		h = {},
		y = {},
		x = {};
	return (
		o
			? ((y["aria-colspan"] = m), (x = { display: "contents" }))
			: (y.colSpan = m),
		$.createElement(
			$.Fragment,
			null,
			$.createElement(
				G,
				{ style: { height: 0 }, inert: sl(!0) },
				$.createElement(
					Y,
					{ style: { padding: 0, border: 0 } },
					$.createElement("div", {
						"data-testid": "loadMoreSentinel",
						ref: s,
						style: { position: "relative", height: 1, width: 1 },
					}),
				),
			),
			i &&
				d.children &&
				$.createElement(
					G,
					{
						...I(N(t, { global: !0 }), h),
						...d,
						role: "row",
						ref: u,
						"aria-level": l.level + 1,
						"data-level": l.level + 1,
					},
					$.createElement(Y, { role: "rowheader", ...y, style: x }, d.children),
				),
		)
	);
});
const Mu = ({ columns: e, rows: t, ...u }) =>
	O.jsxs(Xl, {
		"aria-label": "Data Table",
		...u,
		className: `w-full text-left border-collapse  ${u.className || ""}`,
		children: [
			O.jsx(en, {
				columns: e,
				className: "bg-table-header-bg text-foreground border-b border-border",
				children: (l) =>
					O.jsx(nn, {
						isRowHeader: l.isRowHeader,
						className: "p-3 font-semibold text-sm",
						children: l.name,
					}),
			}),
			O.jsx(an, {
				items: t,
				children: (l) =>
					O.jsx(sn, {
						className:
							"data-[hovered]:bg-table-row-hover data-[selected]:bg-surface-hover border-b border-border/50 cursor-pointer outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-primary data-[focus-visible]:-outline-offset-2",
						children: (n) =>
							O.jsx(cn, { className: "p-3 text-sm", children: String(l[n]) }),
					}),
			}),
		],
	});
Mu.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "DataTable",
	props: {
		columns: {
			required: !0,
			tsType: {
				name: "Array",
				elements: [{ name: "DataTableColumn" }],
				raw: "DataTableColumn[]",
			},
			description: "",
		},
		rows: {
			required: !0,
			tsType: {
				name: "Iterable",
				elements: [{ name: "T" }],
				raw: "Iterable<T>",
			},
			description: "",
		},
		selectionMode: {
			required: !1,
			tsType: {
				name: "union",
				raw: '"none" | "single" | "multiple"',
				elements: [
					{ name: "literal", value: '"none"' },
					{ name: "literal", value: '"single"' },
					{ name: "literal", value: '"multiple"' },
				],
			},
			description: "",
		},
	},
	composes: ["Omit"],
};
const An = {
		title: "UI/Data/DataTable",
		component: Mu,
		parameters: { layout: "padded" },
		tags: ["autodocs"],
	},
	$n = [
		{ name: "Name", id: "name", isRowHeader: !0 },
		{ name: "Type", id: "type" },
		{ name: "Date Modified", id: "date" },
	],
	gn = [
		{ id: 1, name: "Games", type: "File folder", date: "6/7/2020" },
		{ id: 2, name: "Program Files", type: "File folder", date: "4/7/2021" },
		{ id: 3, name: "bootmgr", type: "System file", date: "11/20/2010" },
	],
	se = { args: { columns: $n, rows: gn, selectionMode: "multiple" } };
var tt, ut, lt;
se.parameters = {
	...se.parameters,
	docs: {
		...((tt = se.parameters) == null ? void 0 : tt.docs),
		source: {
			originalSource: `{
  args: {
    columns,
    rows,
    selectionMode: "multiple"
  }
}`,
			...((lt = (ut = se.parameters) == null ? void 0 : ut.docs) == null
				? void 0
				: lt.source),
		},
	},
};
const Kn = ["Default"];
export { An as default, Kn as __namedExportsOrder, se as Default };
