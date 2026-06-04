# TypeScript Strategy & Best Practices

To maintain a robust, scalable, and developer-friendly architecture across the monorepo, TypeScript should be strictly governed. Here are the best practices and areas to focus on for improvement:

## 1. Centralized Configuration (`packages/config`)
Instead of duplicating `.tsconfig.json` settings across every app and package, create a central source of truth in `packages/config`.
- **`tsconfig.base.json`**: Core rules (e.g., `"strict": true`, `"skipLibCheck": true`, paths).
- **`tsconfig.react.json`**: Extends base, adds DOM/React specific compiler options (`"jsx": "preserve"`, DOM libraries).
- **`tsconfig.next.json`**: Extends react, tuned for Next.js expectations.

Each package/app only needs a tiny `tsconfig.json` that extends the appropriate base file. This prevents configuration drift over time.

## 2. Typing Wrapped Custom Components
When abstracting components inside `packages/ui`, use standard React HTML attributes to type base elements.

**Best Practice:**
```tsx
import React from 'react';

// 1. Inherit all standard button attributes
// 2. Extend it with your own custom props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Enforce a custom type constraint instead of standard strings
  customVariant?: 'hero' | 'standard'; 
}

export const Button: React.FC<ButtonProps> = ({ customVariant, variant, ...props }) => {
    // ...
};
```

## 3. Explicit Export Boundaries
Packages (`ui`, `widgets`) must have a very strict `index.ts` file. 
- You should explicitly export interfaces/types alongside the components. 
- *Why:* If the `next-site` app needs to pass a configuration object into a widget, the app shouldn't guess the type; it should import it directly from the package.

```typescript
// packages/widgets/src/index.ts
export { Hero } from './Hero';
export type { HeroProps } from './Hero'; // Explicitly export the type
```

## 4. Type-Safe Tailwind (Styling)
When overriding or composing Tailwind classes in `packages/ui` and `packages/widgets`, standardize on type-safe class combiners to prevent conflicting CSS rule outputs.
- **Tools:** Use `tailwind-merge` combined with `clsx` (often abstracted as a `cn()` utility function).
- This ensures that when a Widget applies `p-4` to a UI component that inherently has `p-2`, the `p-4` definitively wins without CSS specificity wars.

## 5. Next.js App Router Types
In `apps/next-site`, ensure you are using Next.js’s built-in types for page and server rendering:
- Type your `page.tsx` props to safely handle `params` and `searchParams`.
- Type your data fetching layers strictly (using Zod or simple interfaces) so that your server components pass fully typed data directly into your `widgets`.