#!/usr/bin/env bash
set -e

echo "=========================================="
echo "🚀 OpenNext Boilerplate Setup"
echo "=========================================="

# 1. Check Dependencies
command -v gh >/dev/null 2>&1 || { echo >&2 "gh CLI is required. Please install it. Aborting."; exit 1; }
command -v pulumi >/dev/null 2>&1 || { echo >&2 "pulumi CLI is required. Please install it. Aborting."; exit 1; }

# 2. Get Project Name
while true; do
    read -p "Enter a unique project name (letters, numbers, hyphens only): " RAW_PROJECT_NAME
    if [[ -n "$RAW_PROJECT_NAME" ]]; then
        break
    fi
done

# Sanitize input: lowercase, replace non-alphanumeric with hyphens
PROJECT_NAME=$(echo "$RAW_PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g')
echo "✅ Using sanitized project name: $PROJECT_NAME"

# 3. Update Pulumi.yaml
echo "📝 Updating Pulumi project name..."
sed "s/^name: .*/name: ${PROJECT_NAME}-infra/" packages/infra/Pulumi.yaml > packages/infra/tmp_pulumi.yaml
mv packages/infra/tmp_pulumi.yaml packages/infra/Pulumi.yaml

# 4. Handle .env setup
if [ ! -f .env ]; then
    echo "📄 No .env found. Copying from .env.example..."
    cp .env.example .env
fi

echo "📝 Updating RESOURCE_NAMESPACE in .env..."
if grep -q "^RESOURCE_NAMESPACE=" .env; then
    sed "s/^RESOURCE_NAMESPACE=.*/RESOURCE_NAMESPACE=${PROJECT_NAME}/" .env > tmp_env
    mv tmp_env .env
else
    echo "RESOURCE_NAMESPACE=${PROJECT_NAME}" >> .env
fi

echo "================================================================"
echo "⚠️  ACTION REQUIRED: Edit your .env file now!"
echo "Ensure CLOUDFLARE_API_TOKEN, PULUMI_ACCESS_TOKEN, etc., are set."
echo "================================================================"
read -p "Press [Enter] when your .env file is updated, saved, and ready to upload..."

# 5. Initialize Pulumi Stacks locally
echo "🏗️  Initializing Pulumi stack (prod)..."
cd packages/infra
pulumi stack init prod --non-interactive 2>/dev/null || echo "Stack 'prod' already exists or other error (ignored)."
cd ../..

# 6. Verify gh CLI and Push Secrets
echo "🔐 Verifying GitHub CLI auth..."
if ! gh auth status > /dev/null 2>&1; then
    echo "❌ GitHub CLI is not authenticated or your token lacks permissions."
    echo "Please cancel this script, adjust your GH_TOKEN or run 'gh auth login', and run 'pnpm run setup' again."
    exit 1
fi

echo "⬆️  Pushing secrets to GitHub Actions..."
gh secret set -f .env

echo "🎉 Setup complete! You are ready to deploy."
