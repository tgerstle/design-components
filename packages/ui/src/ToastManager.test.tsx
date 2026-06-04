/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ToastRegion } from "./ToastManager";

describe("ToastManager", () => {
	it("renders correctly", () => {
		const { container } = render(<ToastRegion />);
		expect(container).toBeInTheDocument();
	});
});
