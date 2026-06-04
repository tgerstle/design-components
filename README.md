# 🎨 Design Components & Theming System

A modern, highly-scalable design system and component library built for robust Next.js applications. This monorepo demonstrates an advanced declarative CSS custom-property theme architecture that dynamically scales fonts, border radii, and colors.

## 🌟 Features

- **Dynamic Theme Architecture**: Deep CSS variable integration supporting light, dark, and system modes alongside real-time primary color hue scaling.
- **Tailwind CSS v4 Integration**: Leveraging the modern Tailwind engine tightly coupled with our `theme.css` token system.
- **Robust Component Library**: An independent, localized `packages/ui` featuring accessible primitives like `Button`, `Combobox`, `CommandPalette`, `DataTable`, `DateRangePicker`, `SmartPopover`, and `ToastManager`.
- **Composite Widgets**: Extensible high-level structural components (like a `Hero` section) included in `packages/widgets`.
- **Storybook Included**: Dedicated `apps/storybook` workspace to develop, test, and document UI primitives in complete isolation.
- **Next.js Implementation**: `apps/next-site` acts as the primary web consumer, showcasing layout patterns, Next.js `globals.css` import rules, and runtime interactions (`ColorPicker`, `ThemeToggle`).
- **Turborepo & pnpm**: Lightning-fast monorepo task orchestration and strict package linking.

## 🏗️ Project Architecture

```text
├── apps/
│   ├── next-site/           # The primary Next.js (App Router) application showcasing the theme
│   └── storybook/           # Interactive component environment for isolated UI development
├── packages/
│   ├── config/              # Shared base TypeScript & Biome configurations
│   ├── tokens/              # Foundation layer containing theme.css and Tailwind v4 definitions
│   ├── ui/                  # Core React components suite
│   └── widgets/             # Complex structural blocks (e.g. Hero layouts)
├── specs/                   # Architectural strategies, component docs, and roadmap
```

## 👩‍💻 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone <your-repo-url>
cd design-components
pnpm install
```

### 2. Run the Next.js Sandbox

Interact with the real-time runtime theme toggles and color pickers:

```bash
pnpm dev
# Spin up the main orchestrator (defaults to localhost:3000)
```

### 3. Run Storybook

Develop or interact with design primitives and components in a highly isolated browser environment:

```bash
pnpm run --filter storybook dev
```

---

## 🎨 Theme & Component Strategy

At the core of this system is `packages/tokens/theme.css`. We use structural `<html data-theme="...">` mapping across rendering primitives to prevent CSS compiler panics.

Instead of hardcoding Tailwind color utilities everywhere (`bg-blue-500`), the package library aggressively consumes context-aware variables. When the application needs to change its theme dynamically, state managers inject new hues at the `:root` level enabling everything to paint automatically with no JavaScript calculation overhead. 

For more details on the testing strategies, token strategies, or component logic, refer to the documentation inside the `/specs/design_components/` directory.
