## Phase 5: Secret Management & GitHub Sync

**Status**: [x] Completed

**Objective**: Centralize infrastructure and deploy secrets locally and securely push to GitHub Actions environments.

### Instructions

1. Create a root `.env` file (ignored by `git`).
2. Store required Cloudflare, Pulumi, and runtime secrets, along with a dynamic `RESOURCE_NAMESPACE`.

### Code Examples & Types

**Root `.env` format**

```env
CLOUDFLARE_API_TOKEN=your_cloudflare_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_R2_ACCESS_KEY_ID=your_r2_access_key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_r2_secret_key
PULUMI_ACCESS_TOKEN=your_pulumi_token_here
DEMO_SECRET_KEY=my_production_secret
RESOURCE_NAMESPACE=nxt-one
```

### Verification / Tests

- [x] Ensure `.env` is listed in your root `.gitignore`.
- [x] Run `pnpm sync-secrets` (requires `gh` CLI logged in) to assert it cleanly attempts to map values to the GitHub Repository.
