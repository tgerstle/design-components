## Phase 3: Configure Caching & Environment Variables

**Status**: [x] Completed

**Objective**: Enforce R2 caching layer and environment variables to match Infrastructure-as-Code.

### Instructions

1. Configure standalone output in `next.config.ts`.
2. Append `r2_buckets` caching configuration in `wrangler.json` (Note: we strongly suggest using strict JSON so it can be parsed by `jq` in CI).
3. Verify `open-next.config.ts` utilizes the R2 cache override.
4. Set up a `.dev.vars` file for local development testing inside `apps/next-site/`.

### Code Examples & Types

**`apps/next-site/next.config.ts`**

```typescript
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
};
export default nextConfig;
```

**`apps/next-site/wrangler.json` (Addition)**

```json
  "r2_buckets": [
    {
      "binding": "NEXT_CACHE_BUCKET",
      "bucket_name": "my-nextjs-cache-bucket"
    }
  ]
```

**`apps/next-site/open-next.config.ts`**

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

**`apps/next-site/.dev.vars`**

```env
NEXTJS_ENV=development
DEMO_SECRET_KEY=local_development_secret
```

### Verification / Tests

- [x] Verify local Next.js runs without console errors pertaining to caching overrides.
- [x] Test the `output: standalone` build by running `pnpm --filter next-site run build`. The `.next/standalone` folder should generate successfully.
