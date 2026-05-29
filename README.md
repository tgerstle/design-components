# 🚀 OpenNext + Pulumi + Cloudflare Boilerplate

A robust, production-ready boilerplate for deploying Next.js applications to Cloudflare using OpenNext. This repository uses Pulumi for Infrastructure as Code (IaC) and is fully automated via parameterized GitHub Actions.

## 🌟 Features

- **Next.js & OpenNext**: Run modern Next.js apps seamlessly on Cloudflare Workers and R2.
- **Pulumi IaC**: Infrastructure as Code to manage Cloudflare Workers, KV namespaces, and R2 buckets securely and repeatably.
- **GitHub Actions Auto-Deploy**: Automated isolated previews triggered on Pull Requests, and zero-downtime production deployments mapped to `main`.
- **Dynamic Configuration**: Fully automates Wrangler generation based on your Pulumi infrastructure IDs (bypassing strict path resolutions and Cloudflare mapping limits).
- **Environment Management**: Secure GitHub Variables & Secret syncing out of the box.

---

## 🛠️ Prerequisites

Before you start, ensure you have the following installed locally:

- **[Node.js](https://nodejs.org/)** (v18+ recommended)
- **[pnpm](https://pnpm.io/)** (`npm install -g pnpm`)
- **[GitHub CLI (`gh`)](https://cli.github.com/)** and currently authenticated (`gh auth login`).
- **[Pulumi CLI](https://www.pulumi.com/docs/install/)**

### Required External Service Accounts

1. **Cloudflare**: You'll need an active account ID, an API Token (with access to Workers, Domains,/Routes, and R2), and specific R2 S3-Compatible Credentials.
2. **Pulumi Cloud**: A free tier account and an Access Token to manage your state remotely. 

*(See `.env.example` in this repository for exact permission requirements).*

---

## 👩‍💻 Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd opennext_boilerplate
pnpm install
```

### 2. Run the Setup Wizard

This boilerplate includes a helpful setup script meant to initialize your Pulumi templates, set up your variables, and sync them immediately to your GitHub Repository to prime it for CI/CD operations.

```bash
pnpm run setup
```

**What this script does:**
1. Verifies prerequisites.
2. Prompts you for a **Project Name** (used as a global namespace).
3. Generates the `packages/infra/Pulumi.yaml` configuration specific to your instance without committing it structurally (via `Pulumi.yaml.template`).
4. Copies `.env.example` to `.env` locally.
5. Pauses and waits for you to insert all your actual tokens/keys into `.env`.
6. Instantiates your Pulumi `prod` stack.
7. Executes `bin/sync-secrets.sh` to securely create GitHub Repository Secrets and Variables using the `gh` CLI.

*(If you ever need to manually update your GitHub Actions secrets if they change locally, you can run `bash bin/sync-secrets.sh` at any time).*

---

## 🏎️ Local Development

To run the Next.js site locally:

```bash
pnpm dev
```

*(This leverages the standard Next.js development server running on `localhost:3000` context).*

To test building the OpenNext adapter locally:
```bash
pnpm build
pnpm build:open-next
```

---

## 🌐 CI/CD & Deployments

Deployments are entirely offloaded to **GitHub Actions**, preventing local state collisions and ensuring safe, verified releases.

### Preview Environments
When you open or synchronize a Pull Request, the `.github/workflows/deploy-preview.yml` action fires.
- Creates an **ephemeral** stack (e.g., `nxt-one-pr-14`).
- Automates Pulumi `up` to provision independent resources.
- Injects a PR Comment with your temporary Cloudflare URL.
- When the PR is merged or closed, the action automatically securely destroys the preview infrastructure.

### Production Environment
Pushing or merging directly to the `main` branch triggers `.github/workflows/deploy-prod.yml`.
- Provisions against the `prod` Pulumi Stack.
- Builds the app and assigns it standard live application identifiers.

### 🏗️ Project Architecture

```text
├── apps/
│   └── next-site/           # The Next.js Application
│       └── scripts/         # Auto-generators for Wrangler config (generate-wrangler.ts)
├── bin/
│   ├── setup.sh             # Interactive local repository bootstrapper
│   └── sync-secrets.sh      # Pushes `.env` contents securely into GitHub
├── packages/
│   └── infra/               # Pulumi TS source for Cloudflare integration
├── specs/                   # Historical tech specifications & documentation
└── .github/workflows/       # The CI/CD pipelines
```

---

## 🛡️ Important Notes on Secrets & State

- **`Pulumi.yaml` is intentionally ignored by git**: Because multiple forks/instantiations of a boilerplate must use different project names, `Pulumi.yaml` is not stored in history. It is generated from `Pulumi.yaml.template` locally by the `setup` script, and remotely inside the CI/CD pipeline immediately before taking action.
- **GitHub Secrets vs Variables**: We partition plain-text data (like `RESOURCE_NAMESPACE`) into GitHub Configuration Variables, while sensitive tokens are strictly stored as GitHub Secrets to avoid `***` log-masking issues when generating dynamic naming schemes in Cloudflare.
