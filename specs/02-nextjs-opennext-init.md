## Phase 2: Next.js + OpenNext Initialization via C3

**Status**: [x] Completed

**Objective**: Scaffold the Next.js application natively configured with OpenNext Cloudflare adapters using C3.

### Instructions

1. Navigate to the `apps/` directory and use the Cloudflare CLI (C3) to scaffold the Next.js app (`next-site`).
2. Follow prompts to include: TypeScript, ESLint, Tailwind CSS, App Router, `src/` directory, and `@/*` custom alias.
3. Modify `apps/next-site/src/app/page.tsx` for a clean "Hello World from OpenNext Monorepo" semantic HTML layout.

### Code Examples & Types

**CLI Command:**

```bash
cd apps && npx create-cloudflare@latest next-site --framework=next --platform=workers
```

**`apps/next-site/src/app/page.tsx`:**

```tsx
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello World from OpenNext Monorepo</h1>
      <p className="mt-4 text-lg">Running on Cloudflare Workers</p>
    </main>
  );
}
```

### Verification / Tests

- [x] Ensure `apps/next-site/package.json` is generated with `next` and `@opennextjs/cloudflare` dependencies.
- [x] Run `pnpm --filter next-site run dev` and navigate to `http://localhost:3000` to valid page renders.
