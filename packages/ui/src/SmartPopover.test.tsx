/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SmartPopover } from "./SmartPopover";

describe("SmartPopover", () => {
	it("renders correctly", () => {
		const { container } = render(
			<SmartPopover content="test">
				<div>Trigger</div>
			</SmartPopover>,
		);
		expect(container).toBeInTheDocument();
	});
});
