#!/usr/bin/env bash
set -e

if [ ! -f .env ]; then
    echo "❌ No .env file found!"
    exit 1
fi

echo "⬆️  Pushing GitHub Variables..."
# Extract RESOURCE_NAMESPACE and set it as a Variable (non-secret)
RESOURCE_NAMESPACE=$(grep "^RESOURCE_NAMESPACE=" .env | cut -d '=' -f2)
if [ -n "$RESOURCE_NAMESPACE" ]; then
    gh variable set RESOURCE_NAMESPACE --body "$RESOURCE_NAMESPACE"
else
    echo "⚠️  RESOURCE_NAMESPACE not found in .env, skipping variable upload."
fi

echo "⬆️  Pushing GitHub Secrets..."
# Push everything else as a secret (excluding RESOURCE_NAMESPACE)
grep -v "^RESOURCE_NAMESPACE=" .env > .env.secrets
gh secret set -f .env.secrets
rm .env.secrets

echo "✅ Sync complete!"
