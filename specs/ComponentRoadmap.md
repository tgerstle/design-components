# Component Implementation Roadmap

This document outlines the strategic roadmap for the `@design_components` UI system. These components are specifically chosen to demonstrate high-level engineering capabilities, focusing on accessibility, composability, performance, and state management.

## Core Principles
1. **Accessibility-First**: All interactive primitives should be built on `react-aria-components` to ensure robust keyboard navigation, screen reader support, and cross-browser consistency.
2. **Compound Component APIs**: Avoid "prop drilling" on monolithic components. Use composable structures (e.g., `<Select>`, `<Select.Trigger>`, `<Select.Popover>`, `<Select.Item>`).
3. **Theming**: Native integration with Tailwind v4 and our CSS variable strategy, ensuring seamless Light/Dark mode transitions.
4. **Testing & Documentation**: Every component must be developed with a corresponding Storybook story for visual documentation, realistic mock data to demonstrate practical usage, and automated tests (unit/integration) to guarantee reliability.

---

## Architecture
We are utilizing a **Centralized Storybook** workspace (`apps/storybook`). 
- Story files (`*.stories.tsx`) are physically colocated next to their source components in `packages/ui` and `packages/widgets`.
- The centralized Storybook engine sweeps the monorepo to generate a single, easily deployable documentation site.
- This ensures hiring managers have a single URL to view the entire system, and developers only have to configure Tailwind v4 and CSS variables once.

## Testing Strategy
We employ a multi-tiered industry-standard testing strategy to guarantee our components maintain flawless accessibility and functionality:
1. **Component Testing (Vitest + React Testing Library)**: Located in `packages/ui` and `packages/widgets`. Uses `jsdom` to fast-render components. We use `@testing-library/user-event` to simulate real DOM events to verify `react-aria-components` states.
2. **Interaction Testing (Storybook)**: Deployed within `apps/storybook` using `play` functions on our `*.stories.tsx` files to visually demonstrate and assert interactions.
3. **End-to-End Testing (Playwright)**: Lives within `apps/next-site/e2e/` to test Next.js server/client component integration natively in real environments (Chromium/WebKit).

## Phase 1: Complex Form Controls
*Focus: Deep accessibility requirements, locale interactions, and complex keyboard navigation.*

- [x] **Button**: Atomic interactive element with `react-aria` hooks and states.
- [ ] **Combobox (Autocomplete)**: Async data filtering, complex focus routing, `aria-live` screen reader announcements, and visual popover placement.
- [ ] **Date/Time Range Picker**: Grid accessibility, calendar boundary logic, internationalization, and focus traps.

## Phase 2: Overlays, Portals, and Positioning
*Focus: Deep understanding of the DOM, z-index management, and layout geometry outside standard document flow.*

- [ ] **Smart Popover / Tooltip**: Floating layout geometry, viewport collision detection, delayed hover logic, and ARIA relationships.
- [ ] **Toast Notification Manager**: Global state management (queues), exit animations, and polite/assertive accessibility announcements without interrupting user workflow.

## Phase 3: Enterprise Data Display
*Focus: B2B/SaaS requirements, data manipulation, and DOM performance.*

- [ ] **Data Table**: Sortable column headers, pagination, sticky headers/columns, and bulk row selection states.
- [ ] **Virtual Scroll / Windowed List**: Handling massive datasets without janking the browser (rendering only what is in the viewport).

## Phase 4: Advanced Interaction Patterns
*Focus: Global UX paradigms and system-level composition.*

- [ ] **Command Palette (⌘K)**: Global event listeners, deep keyboard navigation, fuzzy search, and component composition.

## Phase 5: High-Level Widgets (Composition)
*Focus: Composing atomic pieces into fully-fledged application features.*

- [ ] **Multi-Step Form Wizard**: State preservation across views, validation context, and stepper navigation logic.
- [ ] **Dynamic Dashboard Layout Shell**: A responsive shell consisting of a collapsible sidebar, sticky top-nav, and main content area that correctly adapts to mobile.
