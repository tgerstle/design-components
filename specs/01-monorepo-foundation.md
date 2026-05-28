## Phase 1: Monorepo Foundation

**Status**: [X] Completed

**Objective**: Establish the workspace root, global configurations, and folder structure.

### Instructions

1. Initialize a git repository and a clean `package.json` in the root folder.
2. Create `pnpm-workspace.yaml` to specify the workspace packages.
3. Create empty `packages/` and `apps/` directories.
4. Add a standard root `.gitignore` to prevent tracking of generated folders and environments.
5. **Formatting & Git Hooks**: Install `@biomejs/biome`, `lint-staged`, and `husky` at the root to orchestrate ultra-fast formatting and linting on commit.

### Code Examples & Types

**`pnpm-workspace.yaml`**

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

**`biome.json`**

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.0/schema.json",
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "always",
      "trailingCommas": "all"
    }
  }
}
```

**`package.json` (Root - Hooks & Lint Staged)**

```json
{
  "lint-staged": {
    "*.{js,ts,tsx,json}": ["biome check --write --no-errors-on-unmatched"]
  }
}
```

**`.gitignore` (Root level)**

```text
node_modules/
.next/
.open-next/
.env
.dev.vars
dist/
coverage/
```

### Verification / Tests

- [x] Run `git status` to confirm repository initialization.
- [x] Run `pnpm install` and verify it succeeds and generates a `pnpm-lock.yaml`.
- [x] Run `pnpm ls -r --depth -1` to verify workspace paths are read cleanly.
