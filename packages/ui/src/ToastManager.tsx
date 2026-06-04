"use client";

import { X } from "lucide-react";
import type React from "react";
import { Button } from "./Button";

export type ToastTone = "success" | "info" | "warning" | "danger";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
	toast: {
		id: string;
		title: string;
		description?: string;
		tone: ToastTone;
		duration?: number;
	};
	onClose?: () => void;
}

export const Toast = ({
	toast,
	onClose,
	className = "",
	...props
}: ToastProps) => {
	return (
		<div
			{...props}
			className={`${
				{
					success: "bg-success text-white",
					info: "bg-info text-white",
					warning: "bg-warning text-primary-foreground",
					danger: "bg-danger text-white",
				}[toast.tone] || "bg-info text-white"
			} p-4 rounded-md shadow-lg data-[animation=entering]:animate-in data-[animation=entering]:slide-in-from-right data-[animation=exiting]:animate-out data-[animation=exiting]:slide-out-to-right fade-out relative ${className}`}
		>
			<div className="pr-6">
				<div className="font-bold text-sm">{toast.title}</div>
				{toast.description && (
					<div className="text-xs opacity-90 mt-1">{toast.description}</div>
				)}
			</div>
			{onClose && (
				<Button
					customVariant="standard"
					variant="ghost"
					onPress={onClose}
					className="absolute top-2 right-2 !p-1 !text-current mix-blend-luminosity hover:opacity-80"
					aria-label="Close"
				>
					<X className="w-4 h-4" />
				</Button>
			)}
		</div>
	);
};

export const ToastRegion = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	return (
		<section
			{...props}
			aria-live="polite"
			aria-label="Notifications"
			className={
				className !== undefined
					? className
					: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-96 outline-none"
			}
		/>
	);
};
