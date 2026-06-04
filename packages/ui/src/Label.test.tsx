/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
	it("renders correctly", () => {
		const { container } = render(<Label />);
		expect(container).toBeInTheDocument();
	});
});
