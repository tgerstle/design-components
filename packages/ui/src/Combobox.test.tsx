/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Combobox } from "./Combobox";

describe("Combobox", () => {
	it("renders correctly", () => {
		const { container } = render(<Combobox label="Test" items={[]} />);
		expect(container).toBeInTheDocument();
	});
});
