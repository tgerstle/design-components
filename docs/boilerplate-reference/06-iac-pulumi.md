## Phase 6: Infrastructure as Code with Pulumi

**Status**: [x] Completed

**Objective**: Dynamically provision Cloudflare UI environments (like R2 buckets) securely.

### Instructions

1. Scaffold inside `packages/infra`. Initialize a Pulumi TypeScript project.
2. Define Pulumi stacks to provision an R2 bucket prefixed by the specified workspace namespace (`RESOURCE_NAMESPACE`).
3. Ensure local `dotenv` parses the root `.env` for local operations while deploying.

### Code Examples & Types

**`packages/infra/index.ts`**

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!accountId) throw new Error("CLOUDFLARE_ACCOUNT_ID is required");

const namespace = process.env.RESOURCE_NAMESPACE;
if (!namespace) throw new Error("RESOURCE_NAMESPACE is required");

const stack = pulumi.getStack();
const bucketName = `${namespace}-nextjs-cache-bucket-${stack}`;

const cacheBucket = new cloudflare.R2Bucket("nextjs-cache-bucket", {
  accountId: accountId,
  name: bucketName,
  location: "enam",
});

export const r2BucketName = cacheBucket.name;
```

### Verification / Tests

- [x] Run `cd packages/infra && pnpm install` to setup the Pulumi CLI types (`@pulumi/pulumi`, `@pulumi/cloudflare`, `dotenv`).
- [x] Create a local Pulumi configuration (`pulumi stack init dev`) and run `pnpm provision`. Confirm Pulumi generates a preview list of resources that correctly includes an R2 cache bucket creation.
