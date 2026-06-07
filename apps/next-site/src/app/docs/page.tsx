import { Button } from "@design_components/ui";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans">
			<header className="border-b border-border bg-surface/50 backdrop-blur sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/">
							<Button variant="outline">
								<ChevronLeft className="w-4 h-4 mr-2" /> Back to Home
							</Button>
						</Link>
						<h1 className="text-xl font-bold tracking-tight">
							System Documentation
						</h1>
					</div>
				</div>
			</header>
			<div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
				<aside className="w-full md:w-64 flex-shrink-0">
					<nav className="sticky top-24 space-y-8">
						<div>
							<h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/70 mb-3">
								Architecture
							</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="#monorepo"
										className="text-foreground hover:text-primary transition-colors"
									>
										The Monorepo
									</a>
								</li>
								<li>
									<a
										href="#theme-engine"
										className="text-foreground hover:text-primary transition-colors"
									>
										Global Theme Engine
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/70 mb-3">
								Components
							</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="#button"
										className="text-foreground hover:text-primary transition-colors"
									>
										Button
									</a>
								</li>
								<li>
									<a
										href="#combobox"
										className="text-foreground hover:text-primary transition-colors"
									>
										Combobox & Palette
									</a>
								</li>
								<li>
									<a
										href="#datatable"
										className="text-foreground hover:text-primary transition-colors"
									>
										DataTable
									</a>
								</li>
								<li>
									<a
										href="#smartpopover"
										className="text-foreground hover:text-primary transition-colors"
									>
										SmartPopover
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</aside>

				<main className="flex-1 max-w-4xl prose prose-slate dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-strong:text-foreground">
					<section id="monorepo" className="mb-16">
						<h2 className="text-3xl font-bold mb-4">
							The Monorepo (Turborepo)
						</h2>
						<p className="mb-4">
							Our architecture relies on strict boundaries to keep styling
							independent from application logic. Packages are separated into{" "}
							<code>packages/ui</code>, <code>packages/tokens</code>, and{" "}
							<code>packages/widgets</code>. By relying on pure CSS file imports
							rather than CSS-in-JS, we guarantee that the Next.js compiler
							running in Edge mode does not panic or de-optimize.
						</p>
					</section>

					<section id="theme-engine" className="mb-16">
						<h2 className="text-3xl font-bold mb-4">The Global Theme Engine</h2>
						<p className="mb-4">
							We map structural <code>&lt;html data-theme="..."&gt;</code> tags
							directly across our rendering primitives. We use advanced CSS
							custom properties dynamically updated alongside Tailwind v4 to
							handle complex light, dark, and system mode repaints entirely
							outside of React's render lifecycle. As you select different
							primary hex colors on the homepage, JavaScript simply updates{" "}
							<code>:root</code> variables, allowing the CSS layout to scale
							everything instantly with zero overhead.
						</p>
					</section>

					<hr className="border-border my-12" />

					<h2 className="text-3xl font-bold mb-8">Component Reference</h2>

					<section id="button" className="mb-12">
						<h3 className="text-2xl font-bold mb-2">Button</h3>
						<p className="mb-4">
							Provides accessible, WAI-ARIA compliant interactions using{" "}
							<code>react-aria-components</code>. Demonstrates three variants
							(default, outline, danger) while safely handling focus outlines
							and automated loading states.
						</p>
					</section>

					<section id="combobox" className="mb-12">
						<h3 className="text-2xl font-bold mb-2">
							Combobox & CommandPalette
						</h3>
						<p className="mb-4">
							Designed for high-density navigation. Users can trigger the
							palette globally using the <code>⌘K</code> shortcut. It properly
							traps focus within its portal and handles complex nested array
							mappings via React Aria collections.
						</p>
					</section>

					<section id="datatable" className="mb-12">
						<h3 className="text-2xl font-bold mb-2">DataTable</h3>
						<p className="mb-4">
							A completely responsive grid capable of displaying complex data.
							It incorporates smart column widths and respects localized
							accessible row headers.
						</p>
					</section>

					<section id="smartpopover" className="mb-12">
						<h3 className="text-2xl font-bold mb-2">SmartPopover</h3>
						<p className="mb-4">
							Enforces strict <code>z-50</code> indexing rules. Smart boundaries
							ensure that the floating interface never improperly overlays on
							adjacent portals or triggers unhandled dialog exceptions in
							automated React Aria testing arrays.
						</p>
					</section>

					<hr className="border-border my-12" />

					<section id="development" className="mb-16">
						<h2 className="text-3xl font-bold mb-4">
							Local Development & Sandbox
						</h2>
						<p className="mb-4">
							To interact with these primitives in total isolation, you can spin
							up our dedicated workspace environment:
						</p>
						<pre className="bg-surface border border-border p-4 rounded-md overflow-x-auto text-sm">
							<code className="text-foreground">
								pnpm run --filter storybook dev
							</code>
						</pre>
						<p className="mt-4">
							This launches the Storybook interactive playground. Additionally,
							tests are powered by Vitest locally to ensure robust CI pipelines
							that skip Playwright browser downloads for instant OpenNext
							Cloudflare deployments.
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}
