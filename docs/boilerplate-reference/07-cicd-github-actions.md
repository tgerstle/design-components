## Phase 7: CI/CD Pipeline (GitHub Actions)

**Status**: [x] Completed

**Objective**: Automate production and ephemeral (PR) infrastructure deployments, and bind OpenNext cache dynamically to Cloudflare.

### Instructions

1. Create `.github/workflows/deploy-preview.yml` to trigger on pull requests for isolated deployments (and cleanup upon closure).
2. Create `.github/workflows/deploy-prod.yml` to trigger on pushes to `main` for permanent production targets.
3. Use `jq` instead of `sed` inside the action to inject bucket name maps safely without regex brittleness. Note: target must be `wrangler.json` (not JSONC) for `jq` to operate natively.

### Code Examples & Types

**`.github/workflows/deploy-preview.yml`**

```yaml
name: Deploy Ephemeral Preview

on:
  pull_request:
    types: [opened, synchronize, reopened, closed]

jobs:
  teardown:
    if: github.event.action == 'closed'
    runs-on: ubuntu-latest
    env:
      STACK_NAME: pr-${{ github.event.pull_request.number }}
    steps:
      - uses: actions/checkout@v4

      - name: Empty Ephemeral R2 Bucket (Required for Pulumi Destroy)
        run: aws s3 rm s3://${{ secrets.RESOURCE_NAMESPACE }}-nextjs-cache-bucket-${{ env.STACK_NAME }} --recursive --endpoint-url https://${{ secrets.CLOUDFLARE_ACCOUNT_ID }}.r2.cloudflarestorage.com
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.CLOUDFLARE_R2_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.CLOUDFLARE_R2_SECRET_ACCESS_KEY }}

      - name: Destroy Infrastructure (Pulumi)
        uses: pulumi/actions@v5
        with:
          command: destroy
          stack-name: ${{ env.STACK_NAME }}
          work-dir: packages/infra
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          RESOURCE_NAMESPACE: ${{ secrets.RESOURCE_NAMESPACE }}

      - name: Destroy Worker (Wrangler)
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: delete ${{ secrets.RESOURCE_NAMESPACE }}-next-site-${{ env.STACK_NAME }}

  deploy:
    if: github.event.action != 'closed'
    runs-on: ubuntu-latest
    env:
      STACK_NAME: pr-${{ github.event.pull_request.number }}
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "pnpm"

      - run: pnpm install

      - name: Code Quality Checks (Lint, Format, Typecheck, Test)
        run: |
          pnpm lint
          pnpm typecheck
          pnpm test:ci

      - name: Provision Ephemeral Infrastructure via Pulumi
        uses: pulumi/actions@v5
        with:
          command: up
          stack-name: ${{ env.STACK_NAME }}
          work-dir: packages/infra
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          RESOURCE_NAMESPACE: ${{ secrets.RESOURCE_NAMESPACE }}

      - name: Map dynamic R2 bucket using jq
        working-directory: apps/next-site
        run: |
          jq '.r2_buckets[0].bucket_name = "${{ secrets.RESOURCE_NAMESPACE }}-nextjs-cache-bucket-${{ env.STACK_NAME }}"' wrangler.json > temp.json && mv temp.json wrangler.json

      - run: pnpm build:all

      - name: Deploy Ephemeral Worker to Cloudflare
        id: deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          workingDirectory: apps/next-site
          command: deploy .open-next/worker.js --name ${{ secrets.RESOURCE_NAMESPACE }}-next-site-${{ env.STACK_NAME }} --compatibility-date 2024-12-30
          secrets: |
            DEMO_SECRET_KEY
        env:
          DEMO_SECRET_KEY: ${{ secrets.DEMO_SECRET_KEY }}

      - name: Report Deployment URL to PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: "### 🚀 Preview Deployment Ready\n**URL:** ${{ steps.deploy.outputs.deployment-url }}"
            })
```

**`.github/workflows/deploy-prod.yml`**

```yaml
name: Deploy OpenNext to Production

on:
  push:
    branches: ["main"]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "pnpm"

      - run: pnpm install

      - name: Code Quality Checks (Lint, Format, Typecheck, Test)
        run: |
          pnpm lint
          pnpm typecheck
          pnpm test:ci

      - name: Provision Production Infrastructure via Pulumi
        uses: pulumi/actions@v5
        with:
          command: up
          stack-name: prod
          work-dir: packages/infra
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          RESOURCE_NAMESPACE: ${{ secrets.RESOURCE_NAMESPACE }}

      - name: Map production R2 bucket using jq
        working-directory: apps/next-site
        run: |
          jq '.r2_buckets[0].bucket_name = "${{ secrets.RESOURCE_NAMESPACE }}-nextjs-cache-bucket-prod"' wrangler.json > temp.json && mv temp.json wrangler.json

      - run: pnpm build:all

      - name: Deploy Production Worker to Cloudflare
        id: deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          workingDirectory: apps/next-site
          command: deploy .open-next/worker.js --name ${{ secrets.RESOURCE_NAMESPACE }}-next-site --compatibility-date 2024-12-30
          secrets: |
            DEMO_SECRET_KEY
        env:
          DEMO_SECRET_KEY: ${{ secrets.DEMO_SECRET_KEY }}

      - name: Report Deployment URL
        run: |
          echo "### 🚀 Production Deployment Successful" >> $GITHUB_STEP_SUMMARY
          echo "URL: **${{ steps.deploy.outputs.deployment-url }}**" >> $GITHUB_STEP_SUMMARY
```

### Verification / Tests

- [x] Commit workflows to branch. Open a PR to trigger the `deploy-preview` actions.
- [x] Monitor GitHub Actions UI to verify logs complete `Provision > Cache Mapping > Build OpenNext > Wrangler Deploy`.
- [x] Verify the bot posts a deployment URL to the PR on success.
