/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
	it("renders correctly", () => {
		const { container } = render(<Input />);
		expect(container).toBeInTheDocument();
	});
});
