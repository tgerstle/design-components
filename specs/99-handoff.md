# Agent Handoff & Gotchas

This spec identifies key architectural decisions, potential pitfalls, and context for AI agents or developers working in this repository. Ensure these rules are followed to prevent regressions.

## 1. PNPM Hoisting (create-cloudflare / Next.js)

**Gotcha**: pnpm v9 workspaces try to aggressively hoist dependencies. Sometimes this messes up OpenNext module resolving for Cloudflare internals.
**Action**: Keep an eye out for module resolution errors in CI or during local builds (`Phase 2` installation via C3). If `create-cloudflare` or OpenNext throws missing dependency errors, we might need to configure a root `.npmrc` with `shamefully-hoist=true` or use a carefully configured `public-hoist-pattern`.

## 2. Environment Variables (.dev.vars vs CI/CD / GitHub Actions Secrets)

**Gotcha**: Next.js on Cloudflare uses `.dev.vars` for local development via `wrangler dev`. However, GitHub Actions (CI/CD) and production deployments _do not_ use `.dev.vars`.
**Action**: Tests run in GitHub actions or production deployments will not look at `.dev.vars`. Instead, in CI/CD, we inject secrets directly into the worker environment using GitHub Action Secrets bounding to the `wrangler-action` deploy command (`--secrets` injection, see `07-cicd-github-actions.md`). The `.dev.vars` file should remain explicitly for local developer environments via `wrangler`, and securely untracked.

## 3. JSON Modification in CI

**Gotcha**: We dynamically map our preview R2 buckets during pull request ephemeral deployments to separate PR caches from Production caches.
**Action**: We use `jq` to parse and map values into the configuration rather than regex tools like `sed`. `jq` is inherently safer for structured JSON.
_Note:_ Because `jq` does not natively support JSONC (JSON with comments), ensure that the Cloudflare configuration file generated remains `wrangler.json` (vanilla JSON), not `wrangler.jsonc`, or ensure we strip comments before mapping if forced into JSONC.

## 4. Root Control & Pipeline Execution

**Gotcha**: Multiple disparate projects inside a monorepo can cause disjointed builds and orphaned tests.
**Action**: Keep the repo entirely controllable from the root directory. All tests, linting, formatting, and CI validations (`test:ci`, `typecheck`, etc.) should be run recursively via `pnpm -r <cmd>` from the root `package.json` so the entire pipeline can execute holistically.

## 5. Modern Frontend Testing Standards

**Gotcha**: While Next.js 13+ has built-in testing integrations, we want to ensure we align with Vite tooling since we are looking forward contextually.
**Action**: We strictly opt for `vitest` with `@testing-library/react` for unit/integration tests instead of `jest`. `vitest` integrates seamlessly with TypeScript and modern ESM module loading, matching the industry shift away from Jest overhead in modern meta-frameworks. End-to-end tests (when introduced) should leverage `playwright`.

## 6. Formatting and Linting (Biome)

**Gotcha**: Standard setups heavily rely on Prettier + ESLint, which can be slow and require complex interoperability plugins (`eslint-config-prettier`).
**Action**: We strictly opt for **Biome** (`@biomejs/biome`) at the repo root. Biome acts as a drop-in replacement for both Prettier and ESLint, written in Rust, providing massive speed advantages and removing the need for conflicting configuration files. All formatting and linting is unified under `biome check`. Next.js ESLint configs from `create-cloudflare` templates should be ignored or uninstalled in favor of root Biome validations.
