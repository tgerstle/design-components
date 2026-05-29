#!/usr/bin/env bash
set -e

# Load environment variables into the shell so Pulumi can authenticate
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

echo "=========================================="
echo "🧨 OpenNext Boilerplate Teardown"
echo "=========================================="

echo "⚠️  WARNING: This will permanently delete all production resources from Cloudflare (Workers, R2 buckets, KVnamespaces) tied to your 'prod' stack."
read -p "Are you sure you want to proceed? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

cd packages/infra

# Check and empty bucket if AWS CLI is installed
if command -v aws >/dev/null 2>&1; then
    echo "🧹 Emptying R2 Bucket contents..."
    export AWS_ACCESS_KEY_ID=$CLOUDFLARE_R2_ACCESS_KEY_ID
    export AWS_SECRET_ACCESS_KEY=$CLOUDFLARE_R2_SECRET_ACCESS_KEY
    BUCKET_NAME=$(pulumi stack output r2BucketName -s prod 2>/dev/null || true)
    
    if [ ! -z "$BUCKET_NAME" ]; then
        echo "Emptying bucket: $BUCKET_NAME"
        aws s3 rm s3://${BUCKET_NAME} --recursive --endpoint-url https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com || true
    else
        echo "No bucket output found, proceeding..."
    fi
else
    echo "⚠️  AWS CLI not installed locally. If your R2 bucket is not empty, Pulumi will fail to destroy it."
    echo "Please delete objects inside the bucket manually via the Cloudflare dashboard if the destruction fails."
fi

echo "🗑️  Destroying Cloudflare Worker via Wrangler..."
WORKER_NAME="${RESOURCE_NAMESPACE}-next-site"
npx wrangler delete "$WORKER_NAME" --force || echo "Worker $WORKER_NAME might not exist or failed to delete."

echo "🧨 Destroying Pulumi 'prod' stack..."
pulumi destroy -s prod --yes || echo "⚠️  Pulumi destroy skipped or failed (stack might not exist)."

echo "🗑️  Optionally removing Pulumi stack completely..."
read -p "Do you want to completely remove the 'prod' stack history from Pulumi? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    pulumi stack rm prod --yes || echo "⚠️  Stack 'prod' already removed."
fi

cd ../..
echo "✅ Teardown complete."
