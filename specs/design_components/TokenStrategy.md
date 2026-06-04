## 5. Token Management Strategy (Tailwind)

To ensure a single source of truth for design tokens, the token architecture relies on mapping foundational CSS variables into Tailwind.

### Single Source of Truth
The project establishes its own CSS variables to govern its theme out of the box (e.g., `--color-primary`, `--color-background`, `--font-sans`). We will use **these standard CSS variables as the absolute source of truth** for all design token values.

### The Flow of Tokens
1.  **Token Definition (`packages/tokens`):** Custom standard definitions overriding our overarching brand (e.g., custom primary color hex codes, specific typography choices) are defined in a central `theme.css` file located inside `packages/tokens`.
2.  **App Consumption:** The application (`apps/next-site` and `apps/storybook`) imports this single `theme.css` from the `packages/tokens` workspace, applying it globally.
3.  **Tailwind Interception (`packages/tokens`):** Tailwind does not create new colors or spacing units. Instead, the `tailwind.config.ts` (managed inside `packages/tokens`) maps standard Tailwind utility names directly to the CSS variables loaded by the theme.
4.  **Consumption:** Developers use standard Tailwind classes (`bg-primary`, `p-3`, `text-background`), which compile to styling that pulls from the live CSS variables.

### Where are colors and fonts physically set?
All token values (colors, fonts, spacing) are physically set within **`packages/tokens`**. 
- The `packages/tokens` workspace acts as the sole API for the design system. 
- It exports the Tailwind configuration object (`tailwind.config.ts`).
- It exports a global CSS file (`theme.css`) containing the `:root` pseudo-class that establishes the project's variables with custom brand values.
- **Apps** (`apps/next-site`, `apps/storybook`) simply import both the Tailwind config and the CSS file, ensuring consistency without repeating token definitions.

### Semantic Mapping Example
In `packages/tokens/tailwind.config.ts`, you map the variables to create semantic meaning without fighting the framework:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Map Tailwind's "primary" utility directly to the primary CSS variable. 
        primary: 'var(--color-primary)',      
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        // Semantic overrides
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      spacing: {
        // Map Tailwind spacing (p-1, m-2) to spacer variables
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '1rem',
        '4': '1.5rem',
      },
      fontFamily: {
        // Custom font stacks
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        // Map rounding
        sm: 'var(--clay-border-radius-sm)',
        md: 'var(--clay-border-radius)',
        lg: 'var(--clay-border-radius-lg)',
      }
    }
  }
}
```

### Why this is best practice:
- **No Fighting:** You are fully adopting Clay’s built-in scaling and token generation. Clay components remain native and styles won't break.
- **Improved DX (Tailwind):** Developers get the rapid development speed of Tailwind utilities for bespoke widget layouts, while remaining perfectly on-brand with Clay tokens.
- **One Place to Control:** To theme the entire application (both Clay components and custom Tailwind UI), you only update the `:root` CSS variables in the global stylesheet.
