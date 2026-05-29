# Boilerplate Reference Docs

This directory contains the original historical specification and architecture decisions used to build this OpenNext + Pulumi boilerplate. 

If you are maintaining the CI/CD pipeline, the infrastructure as code (IaC), or secret management flow, reference these files:

- **[00-overview.md](./00-overview.md)**: General architecture overview and technology choices.
- **[01-monorepo-foundation.md](./01-monorepo-foundation.md)**: Breakdown of the pnpm workspace monorepo structure.
- **[02-nextjs-opennext-init.md](./02-nextjs-opennext-init.md)**: OpenNext adapter configurations.
- **[03-caching-and-env.md](./03-caching-and-env.md)**: How KV caching and environment bindings are implemented.
- **[04-scripts-and-pipeline.md](./04-scripts-and-pipeline.md)**: Local utility scripts, Wrangler generation, and build lifecycle.
- **[05-secret-management.md](./05-secret-management.md)**: How secrets and configuration variables are partitioned and securely loaded.
- **[06-iac-pulumi.md](./06-iac-pulumi.md)**: Pulumi structure, R2 bucket generation, and remote state logic.
- **[07-cicd-github-actions.md](./07-cicd-github-actions.md)**: Ephemeral PR deployment and Production deployment orchestration.
- **[99-handoff.md](./99-handoff.md)**: System AI handoff state for picking up development without losing context.
