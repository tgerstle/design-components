# High-Level Overview: OpenNext Monorepo Hello World Setup

This document serves as the source of truth for the initialization and configuration of a scalable multi-package monorepo. The goal is to build and deploy a Next.js application using **OpenNext** onto **Cloudflare Workers**, which is the most lightweight and standard OpenNext target.

## Target Architecture

- **Package Manager**: pnpm v9+
- **Workspace Strategy**: Multi-package Monorepo (`apps/*` and `packages/*`) orchestrated from a centralized root `package.json` with global test/build scripts.
- **Framework**: Next.js (App Router, TypeScript)
- **Compiler/Adapter**: OpenNext Cloudflare Adapter (`@opennextjs/cloudflare`)
- **Infrastructure**: Pulumi (TypeScript) backing Cloudflare R2 for caching
- **CI/CD**: GitHub Actions for prod deployments and ephemeral PR previews

## Progress Tracker

- [x] Phase 1: Monorepo Foundation ([01-monorepo-foundation.md](./01-monorepo-foundation.md))
- [x] Phase 2: Next.js + OpenNext Initialization via C3 ([02-nextjs-opennext-init.md](./02-nextjs-opennext-init.md))
- [x] Phase 3: Configure Caching & Environment Variables ([03-caching-and-env.md](./03-caching-and-env.md))
- [x] Phase 4: Map Scripts and Build Pipeline ([04-scripts-and-pipeline.md](./04-scripts-and-pipeline.md))
- [x] Phase 5: Secret Management & GitHub Sync ([05-secret-management.md](./05-secret-management.md))
- [x] Phase 6: Infrastructure as Code with Pulumi ([06-iac-pulumi.md](./06-iac-pulumi.md))
- [x] Phase 7: CI/CD Pipeline (GitHub Actions) ([07-cicd-github-actions.md](./07-cicd-github-actions.md))
