# OpenNext Boilerplate Custom Agent Instructions

You are assisting a developer in a Next.js + OpenNext Cloudflare deployment repository.

Before suggesting architectural changes, modifying deployment scripts, or making infrastructure (Pulumi) adjustments, you **must**:
1. Review the historical context laid out in `docs/boilerplate-reference/`. Use the `docs/boilerplate-reference/README.md` index to find relevant specs (e.g., if asked about caching, read `03-caching-and-env.md`).
2. Prioritize reading `docs/boilerplate-reference/99-handoff.md` (or the equivalent ACTIVE/HANDOFF state file) if the user is asking you to continue a previously started feature or debug session.

### Domain Rules:
- **Cloudflare Wrangler**: Configuration generation is heavily customized. Do NOT hardcode `--name` flags in terminal commands for deployments. The setup uses `apps/next-site/scripts/generate-wrangler.ts` to dynamically resolve paths based on environment contexts to satisfy strict Cloudflare asset relative-path limitations.
- **Pulumi & State**: Infrastructure logic is partitioned strictly under `packages/infra/`. Do NOT write secrets manually into code; direct the user to `.env` and `bin/sync-secrets.sh`.
- **User Specs**: The `/specs/` directory at the root of the project is strictly reserved for the end-user's custom application specifications. Do not alter the boilerplate-reference docs when generating application logic specs.
