/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CommandPalette } from "./CommandPalette";

describe("CommandPalette", () => {
	it("renders correctly", () => {
		const { container } = render(
			<CommandPalette isOpen={true} setIsOpen={() => {}} actions={[]} />,
		);
		expect(container).toBeInTheDocument();
	});
});
