import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		fs: {
			strict: false,
			allow: ["../.."],
		},
	},
	optimizeDeps: {
		include: [
			"@design_components/ui",
			"@design_components/widgets",
			"@design_components/tokens",
		],
	},
	resolve: {
		alias: {
			"@design_components/ui": path.resolve(__dirname, "../../packages/ui/src"),
			"@design_components/widgets": path.resolve(
				__dirname,
				"../../packages/widgets/src",
			),
			"@design_components/tokens": path.resolve(
				__dirname,
				"../../packages/tokens",
			),
		},
	},
});
