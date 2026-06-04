# Theme & Styling Strategy

## 1. Unified Design Language (The "Shared Feel")
To ensure all components feel like they belong to the same cohesive design system, we will enforce the following patterns universally across the library:

- **Focus & Accessibility**: Every interactive element will use a standard focus ring to maintain a recognizable visual footprint: `focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary data-[focus-visible]:ring-offset-1 data-[focus-visible]:ring-offset-background`.
- **Interactive Surfaces**: Elements that can be clicked or selected (table rows, listbox items, palette options) will uniformly use `cursor-pointer data-[hovered]:bg-surface-hover data-[focused]:bg-surface-hover`.
- **Disabled States**: All disabled elements will use a standard `data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed` combination, removing hover state side-effects.
- **Overlays & Elevation**: Popovers, tooltips, dialogs, and toasts will standardly use `bg-popover border border-border shadow-lg rounded-md` to maintain depth consistency without hardcoding specific background shades.
- **Typography Scales**: Control text (inputs, buttons, select items) will default to `text-sm`. Auxiliary text (validation messages, descriptions, hints) will use `text-xs text-foreground/70` across all forms.

## 2. Global Themes & Tokens (Completed)
- **Surface & Popover Colors**: Formalized `--color-surface`, `--color-surface-hover`, and `--color-popover` in `theme.css` and `tailwind.config.ts`.
- **Danger & Status Mapping**: Replaced dynamic interpolation with strict class dictionaries to preserve JIT compilation.

## 3. Targeted Component Updates

### Already Updated
- **Button**: Expanded array to `primary`, `secondary`, `danger`, `outline`, `ghost` sharing the uniform focus offset model.
- **Input**: Added `data-[invalid]:border-danger data-[invalid]:ring-danger` for form state integration and error bubbling.
- **Label**: Automated required indicator (`*` via `group-data-[required]`).
- **ToastManager**: Formalized overlay animations and strict status dictionaries.

### Next Up: Collections & Inputs
- **Combobox & ListBox**: 
  - Enforce `bg-popover` on the dropdown container and integrate standard soft shadow definitions.
  - Apply the unified interactive hover state (`data-[hovered]:bg-surface-hover rounded-sm`) on individual `ListBoxItem` nodes so they identically match `Select` and `CommandPalette` items.
- **DateRangePicker**:
  - Style the interactive calendar grid to match standard button `ghost` variants on unselected dates.
  - Apply `bg-primary/20` or a similar connecting visual for the highlighted sequence between the selected date range.
  - Ensure the popup container matches the unified overlay spec (`bg-popover shadow-lg border`).
- **DataTable**:
  - Formalize table headers with `border-b border-border bg-surface font-medium text-sm`.
  - Map row interactions to the unified hover state `data-[hovered]:bg-surface-hover`.
  - Style the selection checkboxes and distinct row background if `data-[selected]` is active.

### Next Up: Overlays
- **SmartPopover / Tooltip**:
  - Migrate away from inverted colors towards strictly utilizing `bg-popover text-foreground border border-border shadow-md text-sm` with matching arrow shades.
- **CommandPalette (Dialog / Modal)**:
  - Add a consistent overlay backdrop for the modal `bg-slate-900/50 backdrop-blur-sm`.
  - Centralize the search input seamlessly into the palette header to eliminate standard distinct input borders and emphasize the search experience.
  - List items will share the exact same `ListBoxItem` style traits as the `Combobox` to create familiarity across context menus.
