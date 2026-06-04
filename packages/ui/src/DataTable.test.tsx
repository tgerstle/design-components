/// <reference types="@testing-library/jest-dom" />

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DataTable } from "./DataTable";

describe("DataTable", () => {
	it("renders correctly", () => {
		const { container } = render(<DataTable columns={[]} rows={[]} />);
		expect(container).toBeInTheDocument();
	});
});
