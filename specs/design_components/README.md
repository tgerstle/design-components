# Design Components Architecture

This document outlines the architecture for the Design Components component showcase app within the monorepo.

## 1. Monorepo Orchestration
- **Package Manager:** `pnpm` workspaces (already initialized).
- **Orchestration:** **Turborepo** will be introduced (`turbo.json`) to manage build pipelines, linting, testing, and dev servers with task parallelization and aggressive caching.

## 2. Package Architecture
The monorepo is divided into `apps` and `packages` to enforce a strict separation of concerns and a clear dependency graph:

### Apps
- **`apps/next-site`**: The main Next.js (App Router) showcase application. It consumes widgets and UI components to construct pages, handling routing and layout integration.
- **`apps/storybook`**: A dedicated Storybook application acting as a standalone, isolated component catalog and sandbox for elements inside `packages/ui` and `packages/widgets`.

### Packages
- **`packages/config`**: Shared build and lint configurations (ESLint, Prettier, TypeScript, base Tailwind config) to maintain consistency across the workspace.
- **`packages/tokens`**: The foundation layer defining design tokens. It configures Tailwind to align with the design system.
- **`packages/ui`**: (Atoms/Molecules) Pure, stateless presentational components. These act as specific wrappers around Liferay Clay (`@clayui/*`) React components to establish desired defaults, enforce design constraints, and simplify the API for the application layer.
- **`packages/widgets`**: (Organisms) Larger composite UI blocks built exclusively by orchestrating elements from `packages/ui` (e.g., `AuthForm`, `FeatureCard`, `DashboardSidebar`). They manage the local structural layout of their sub-components.

## 3. Styling Strategy: Tailwind
- **Tailwind** will be utilized for styling, interactive states, layout coordination (Flexbox, CSS Grid, spacing margins/padding, layout sizing) within custom components, widgets and page structures out of the box.
- **Prefixing**: Utility prefixing will be **disabled** initially to keep syntax clean.

## 4. Token Strategy & Semantic Mapping
For details on how design tokens are managed centrally, please see [TokenStrategy.md](TokenStrategy.md).

## 5. TypeScript Best Practices
To ensure strict typing and avoid configuration drift across the monorepo workspaces, see the [TypeScript Strategy](TypeScriptStrategy.md) guide.

## 6. Testing & Accessibility Strategy
For automated unit testing (`vitest`), mocking, and strict accessibility checks (`axe-core`, Storybook), see the [Testing & Accessibility Strategy](TestingStrategy.md).

## 7. End-to-End Implementation Example
To trace how an element moves from a base component up to a composed widget and finally mounts in the core Next.js application, review the [Hero Widget Example](HeroWidgetExample.md).

