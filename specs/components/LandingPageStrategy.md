# Landing Page Demo Strategy

## 1. Architectural Approach
A modern, single-page "Bento Box" style landing page built entirely out of the `packages/ui` and `packages/widgets` libraries to serve as a living demonstration of the design system.

## 2. Theming & Customization Showcase
- **Dark Mode Toggle**: A header button that swaps the site between Light and Dark mode using the `.dark` class in addition to automatic system preference.
- **Primary Color Picker**: A row of color swatches that dynamically inject a new `--color-primary` CSS variable onto the root document.

## 3. Page Structure
- **Navbar**: `SmartPopover` info icon, Theme Toggle, Color Swatches, and a `CommandPalette` trigger.
- **Hero Section**: Utilizing the top of the Golden Ratio scale for typography and CTA buttons.
- **Component Bento Grid**:
  - *Data Heavy*: Miniaturized `DataTable`.
  - *Scheduling*: Expanded `DateRangePicker`.
  - *Forms*: `Combobox` and standard `Input` & `Label` setups.
  - *Action*: Trigger for `ToastManager`.
- **Typography & Token Map**: A minimalist printout of the Golden Ratio scale and semantic colors.

## 4. Implementation Plan
1. Prepare `theme.css` and `tailwind.config.ts` for `.dark` class selector.
2. Build the Theme toggle and Color picker utilities.
3. Update `apps/next-site/src/app/page.tsx` with the Bento grid layout.
4. Integrate the components and wire up interactive states.
