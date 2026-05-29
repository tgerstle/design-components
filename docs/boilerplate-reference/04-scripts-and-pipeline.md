## Phase 4: Map Scripts and Build Pipeline

**Status**: [x] Completed

**Objective**: Wire workspace scripts together so root commands orchestrate apps and packages appropriately.

### Instructions

1. Add OpenNext build and test scripts to the Next.js `package.json`.
2. Mock an `up` script for the Pulumi application inside `packages/infra/package.json`.
3. Create aggregate scripts at the monorepo root to trigger builds, IaC synchronization, tests, linting, and simulated dry-run capabilities (to keep the repo fully controllable from the root).

### Code Examples & Types

**`apps/next-site/package.json` scripts**

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "build:open-next": "opennextjs-cloudflare build",
  "preview": "wrangler dev",
  "start": "next start",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

**`packages/infra/package.json` scripts**

```json
"scripts": {
  "up": "pulumi up --yes",
  "destroy": "pulumi destroy --yes"
}
```

**Root `package.json` scripts**

```json
"scripts": {
  "prepare": "husky",
  "dev": "pnpm --filter next-site dev",
  "build": "pnpm -r build",
  "build:open-next": "pnpm --filter next-site build:open-next",
  "test": "pnpm -r test",
  "test:ci": "CI=true pnpm -r test",
  "lint": "biome check .",
  "format": "biome check --write .",
  "typecheck": "pnpm -r exec tsc --noEmit",
  "sync-secrets": "gh secret set -f .env",
  "provision": "dotenv -- pnpm --filter infra up",
  "ci:deploy-preview-dry-run": "pnpm build && pnpm build:open-next && echo 'Dry run preview build succeeded'"
}
```

### Verification / Tests

- [x] Run `pnpm run build:open-next` from the root and verify an `.open-next` directory correctly emits within `apps/next-site`.
- [x] Run `pnpm run dev` from the root and verify the dev server proxy routes to `apps/next-site`.
- [x] Run `pnpm run test` and `pnpm run lint` from the root and verify it recursively executes across the workspace apps.
- [x] Run `pnpm run format` from the root and verify Biome checks and applies formatting globally.
