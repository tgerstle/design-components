import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV === "production"
			? "https://design-components.workers.dev"
			: "http://localhost:3000",
	),
	title: {
		template: "%s | Design Components",
		default: "Design Components",
	},
	description:
		"A highly scalable, declarative CSS custom-property theme architecture and UI library.",
	keywords: [
		"Next.js",
		"Design System",
		"Tailwind CSS",
		"React Aria",
		"Turborepo",
		"Cloudflare",
		"OpenNext",
	],
	authors: [{ name: "T Gerstle" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		title: "Design Components & Config",
		description:
			"A modern, highly-scalable design system and component library built for robust Next.js applications.",
		siteName: "Design Components",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased min-h-screen bg-background text-foreground font-sans">
				{/* @ts-ignore next-themes mismatch */}
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
