import * as fs from "node:fs";
import * as path from "node:path";

const r2BucketName = process.env.R2_BUCKET_NAME;

if (!r2BucketName) {
	console.error(
		"Missing R2_BUCKET_NAME in environment. Using fallback or track 'wrangler.json' directly.",
	);
	process.exit(1);
}

// Read the tracked wrangler.json configuration
const sourcePath = path.resolve(__dirname, "../wrangler.json");
const targetPath = path.resolve(__dirname, "../.open-next/wrangler.ci.json");

if (!fs.existsSync(sourcePath)) {
	console.error("Source wrangler.json not found.");
	process.exit(1);
}

const config = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

// Update the R2 bucket binding securely
if (config.r2_buckets && config.r2_buckets.length > 0) {
	config.r2_buckets[0].bucket_name = r2BucketName;
} else {
	config.r2_buckets = [
		{
			binding: "NEXT_CACHE_BUCKET",
			bucket_name: r2BucketName,
		},
	];
}

// Ensure target directory exists
const targetDir = path.dirname(targetPath);
if (!fs.existsSync(targetDir)) {
	fs.mkdirSync(targetDir, { recursive: true });
}

// Write the derived config out
fs.writeFileSync(targetPath, JSON.stringify(config, null, 2));

console.log(
	`Generated wrangler.ci.json dynamically mapped to R2 bucket: ${r2BucketName}`,
);
