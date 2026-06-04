/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DateRangePicker } from "./DateRangePicker";

describe("DateRangePicker", () => {
	it("renders correctly", () => {
		const { container } = render(<DateRangePicker label="Test" />);
		expect(container).toBeInTheDocument();
	});
});
