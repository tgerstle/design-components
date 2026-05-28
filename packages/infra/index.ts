import * as cloudflare from "@pulumi/cloudflare";
import * as pulumi from "@pulumi/pulumi";
import * as crypto from "crypto";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!accountId) throw new Error("CLOUDFLARE_ACCOUNT_ID is required");

const namespace = process.env.RESOURCE_NAMESPACE;
if (!namespace) throw new Error("RESOURCE_NAMESPACE is required");

const stack = pulumi.getStack();

// Cloudflare R2 bucket max length is 63 characters
// Format: namespace-stack-resource
function generateSafeBucketName(
	resourceName: string,
	maxLen: number = 63,
): string {
	const rawName = `${namespace}-${stack}-${resourceName}`;
	if (rawName.length <= maxLen) return rawName;

	// If it's too long, hash the stack name deterministically for a unique trailing ID
	const hash = crypto.createHash("md5").update(stack).digest("hex").slice(0, 5);
	// Determine how much of the raw string we can keep:
	// length = maxLen - (hash length) - 1 (for hyphen)
	const allowedLength = maxLen - hash.length - 1;
	const truncated = rawName.slice(0, allowedLength);
	return `${truncated}-${hash}`;
}

const finalBucketName = generateSafeBucketName("nextjs-cache");

const cacheBucket = new cloudflare.R2Bucket("nextjs-cache-bucket", {
	accountId: accountId,
	name: finalBucketName,
	location: "enam",
});

export const r2BucketName = cacheBucket.name;
