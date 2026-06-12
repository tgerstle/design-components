"use client";

import {
	Button,
	Combobox,
	CommandPalette,
	DataTable,
	Toast,
	ToastRegion,
} from "@design_components/ui";
import { Hero } from "@design_components/widgets";
import { Activity, Copy, Cpu, HardDrive, Plus, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ColorPicker } from "../components/ColorPicker";
import { ThemeToggle } from "../components/ThemeToggle";

const tableData = [
	{
		id: "1",
		label: "Cluster-Alpha",
		status: "Active",
		resources: "4 CPU, 16GB",
	},
	{
		id: "2",
		label: "DB-Replica-01",
		status: "Syncing",
		resources: "2 CPU, 8GB",
	},
	{
		id: "3",
		label: "Cache-Node-1",
		status: "Offline",
		resources: "1 CPU, 4GB",
	},
	{
		id: "4",
		label: "Worker-Queue",
		status: "Active",
		resources: "8 CPU, 32GB",
	},
];

const tableColumns = [
	{ id: "label", name: "Name", isRowHeader: true },
	{ id: "status", name: "Status" },
	{ id: "resources", name: "Resources" },
];

export default function Home() {
	// Simple toast state for demo
	const [toast, setToast] = useState<{
		id: string;
		title: string;
		description: string;
		tone: "danger" | "success";
	} | null>(null);

	const [isCommandOpen, setIsCommandOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsCommandOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const triggerError = () => {
		const id = Math.random().toString();
		setToast({
			id,
			title: "Deployment Failed",
			description: "Worker-Queue could not be initialized.",
			tone: "danger",
		});
		setTimeout(() => setToast(null), 3000);
	};

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
			{toast && (
				<ToastRegion>
					<Toast toast={toast} onClose={() => setToast(null)} />
				</ToastRegion>
			)}
			{/* Navbar */}
			<header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2 font-bold text-lg tracking-tight">
						<Activity className="w-5 h-5 text-primary" />
						Design Components
					</div>
					<div className="flex items-center gap-4">
						<ColorPicker />
						<ThemeToggle />
					</div>
				</div>
			</header>
			{/* Main Content */}
			<main className="flex-1 container mx-auto px-4 py-8 lg:py-12 space-y-12">
				{/* Hero Section */}
				<section>
					<div className="bg-primary/10 border-l-4 border-primary p-4 mb-8 rounded-r-md flex justify-center">
						<p className="text-sm font-medium text-foreground">
							✨ <strong>Pro Tip:</strong> Try changing the Primary Color and
							toggling Dark Mode in the top right! Watch as every component
							instantly repaints via our native CSS token engine.
						</p>
					</div>
					<Hero
						title="Design Components"
						description="A robust, highly scalable UI library built on React Aria and Tailwind v4. Designed for strict monorepo architecture and dynamically tokenized by a native, JS-free CSS custom-property theme engine."
					/>
					<div className="flex justify-center gap-4 mt-8">
						<Button>
							<Terminal className="w-4 h-4 mr-2" />
							<a
								href="https://github.com/tgerstle/design-components"
								target="_blank"
								rel="noreferrer"
							>
								GitHub Repo
							</a>
						</Button>
						<Link href="/docs">
							<Button variant="outline">Documentation</Button>
						</Link>
					</div>
				</section>

				{/* Bento Grid layout */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Bento Box 1: Data Table */}
					<div className="col-span-1 lg:col-span-2 bg-surface border border-border rounded-xl p-6 shadow-sm flex flex-col">
						<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
							<HardDrive className="w-5 h-5 text-primary" />
							Active Resources
						</h3>
						<div className="flex-1 overflow-auto bg-background rounded-lg border border-border p-2">
							<DataTable rows={tableData} columns={tableColumns} />
						</div>
					</div>

					{/* Bento Box 2: Actions & Buttons */}
					<div className="bg-surface border border-border rounded-xl p-6 shadow-sm flex flex-col gap-6">
						<h3 className="text-lg font-semibold flex items-center gap-2">
							<Cpu className="w-5 h-5 text-primary" />
							Interactions
						</h3>
						<div className="space-y-4">
							<Button className="w-full justify-start">
								<Plus className="w-4 h-4 mr-2" />
								Create New Project
							</Button>
							<Button variant="outline" className="w-full justify-start">
								<Copy className="w-4 h-4 mr-2" />
								Copy ID configuration
							</Button>
							<Button variant="danger" className="w-full">
								Terminate Instance
							</Button>
						</div>
					</div>

					{/* Bento Box 3: Selectors / Forms */}
					<div className="bg-surface border border-border rounded-xl p-6 shadow-sm flex flex-col">
						<h3 className="text-lg font-semibold mb-4">Input Controls</h3>
						<div className="space-y-6 flex-1">
							<div className="space-y-2">
								<label
									htmlFor="deploy-region"
									className="text-sm font-medium text-foreground/80 block"
								>
									Deploy Region
								</label>
								<Combobox
									id="deploy-region"
									label="Select Region"
									items={[
										{ id: "us-east-1", label: "US East (N. Virginia)" },
										{ id: "us-west-2", label: "US West (Oregon)" },
										{ id: "eu-central-1", label: "EU (Frankfurt)" },
										{ id: "ap-northeast-1", label: "Asia Pacific (Tokyo)" },
									]}
								/>
							</div>

							<div className="bg-background/50 border border-border p-4 rounded-lg mt-auto flex flex-col gap-2">
								<p className="text-sm text-foreground/70 mb-1">
									Trigger notifications visually with the Toast system.
								</p>
								<Button
									variant="danger"
									onPress={triggerError}
									className="w-full"
								>
									Simulate Error
								</Button>
							</div>
						</div>
					</div>

					{/* Bento Box 4: Command Palette Hint */}
					<div className="col-span-1 lg:col-span-2 bg-surface text-surface-foreground border border-border rounded-xl p-6 shadow-sm flex items-center justify-between">
						<div>
							<h3 className="text-lg font-semibold mb-1">Command Menu</h3>
							<p className="text-sm text-foreground/70">
								Press{" "}
								<kbd className="px-2 py-1 bg-background border border-border rounded-md text-xs font-mono ml-1 shadow-sm">
									⌘K
								</kbd>{" "}
								to execute commands quickly across the dashboard.
							</p>
						</div>
						<div className="w-64 hidden xl:block relative h-32 overflow-hidden border border-border rounded shadow-sm opacity-80 pointer-events-none">
							<div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10"></div>
							<CommandPalette
								isOpen={false}
								setIsOpen={() => {}}
								actions={[{ id: "1", label: "Create", onSelect: () => {} }]}
							/>
						</div>
					</div>
				</section>
				<CommandPalette
					isOpen={isCommandOpen}
					setIsOpen={setIsCommandOpen}
					actions={[
						{
							id: "1",
							label: "Create new Project",
							onSelect: () => {
								alert("Created");
								setIsCommandOpen(false);
							},
						},
						{
							id: "2",
							label: "Manage Database",
							onSelect: () => {
								alert("Managing");
								setIsCommandOpen(false);
							},
						},
						{
							id: "3",
							label: "View Environments",
							onSelect: () => {
								alert("Viewing");
								setIsCommandOpen(false);
							},
						},
					]}
				/>
			</main>
		</div>
	);
}
