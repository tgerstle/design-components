# Testing & Accessibility Strategy

A robust testing strategy ensures that as `packages/ui` and `packages/widgets` scale, they remain reliable and accessible without regressions.

## 1. Unit & Component Testing
**Tooling:** `vitest` + React Testing Library (`@testing-library/react`) + `@testing-library/user-event`.
**Why:** `vitest` is incredibly fast, integrates seamlessly with modern build tools, and shares an API with Jest, making migration and knowledge transfer easy.

### Best Practices:
- **Test at the Package Level:** Tests for UI components should live in `packages/ui/src/__tests__` and Widget tests in `packages/widgets/src/__tests__`.
- **Pure Functions:** UI components should be pure and stateless context wrappers around Liferay Clay. Test them by passing props and asserting rendered output and event handler callbacks.
- **User-Centric Assertions:** Use `@testing-library/user-event` to simulate real user interactions (clicking, typing) rather than manually firing DOM events. Focus assertions on what the user sees (e.g., `screen.getByRole('button', { name: /submit/i })`) instead of implementation details.

### Mocking Example (Vitest)
If a Widget relies on Next.js specific logic (like router hooks), use Vitest's mocking capabilities so the widget can be tested in isolation:

```typescript
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Hero } from '../Hero';

// Mocking Next.js router if needed inside a Widget
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

describe('Hero Widget', () => {
  it('renders primary CTA correctly', () => {
    const mockClick = vi.fn();
    render(<Hero title="Test" description="Test desc" primaryCtaText="Go" onPrimaryClick={mockClick} />);
    const btn = screen.getByRole('button', { name: /Go/i });
    btn.click();
    expect(mockClick).toHaveBeenCalled();
  });
});
```

## 2. Accessibility (a11y) Testing
By adopting `react-aria-components` natively in `packages/ui`, a significant portion of accessibility overhead (focus rings, state tracking, WAI-ARIA authoring practices, mouse/touch polyfills) is handled out of the box. However, as we compose widgets, we must ensure we don't introduce regressions (e.g., poor color contrast, missing structural ARIA properties for custom layouts).

### Handling React Aria States in Tests
Because React Aria heavily utilizes internal state that reflects as DOM `data-*` attributes (`data-hovered`, `data-pressed`, `data-focus-visible`), **don't assert against class names** when testing interactivity.

**Instead, test the underlying data attributes:**
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'ui';

it('should apply pressed state when interactively clicked', async () => {
    const user = userEvent.setup();
    render(<Button>Click Me</Button>);
    
    const btn = screen.getByRole('button', { name: "Click Me" });
    
    // Test behavior and aria outcomes, not classes
    await user.pointer({ keys: '[MouseLeft>]', target: btn });
    expect(btn).toHaveAttribute('data-pressed', 'true');
});
```

### Automated Testing (CI/CD / Terminal)
- **`jest-axe` (via Vitest):** Integrate `axe-core` into your Vitest test suites. This allows you to programmatically verify that a component produces valid, accessible HTML.
  ```typescript
  import { render } from '@testing-library/react';
  import { axe, toHaveNoViolations } from 'jest-axe';
  import { expect } from 'vitest';
  
  expect.extend(toHaveNoViolations);
  
  it('Hero should have no accessibility violations', async () => {
    const { container } = render(<Hero title="A11y Test" description="Desc" primaryCtaText="Go" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  ```
- **Linting:** Enforce `eslint-plugin-jsx-a11y` in the `packages/config` ESLint setup to catch missing `alt` tags and structural ARIA issues directly in the editor.

### Visual / Sandbox Accessibility
- **Storybook a11y Addon:** Install `@storybook/addon-a11y` in `apps/storybook`. This provides an interactive panel in Storybook that runs Axe checks on the live component, highlighting contrast issues, missing labels, and structural problems in real-time.

## 3. Monorepo Orchestration
- **Turborepo:** Configure a `"test": { "dependsOn": ["^test"] }` task in `turbo.json`. When you run `pnpm run test` from the root, Turborepo will orchestrate the Vitest suites across `packages/ui` and `packages/widgets` concurrently, caching passing tests to drastically speed up CI times.