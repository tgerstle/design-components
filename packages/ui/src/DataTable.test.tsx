import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DataTable } from "./DataTable";

describe("DataTable", () => {
	it("renders correctly with data", () => {
		const columns = [{ id: "name", name: "Name", isRowHeader: true }];
		const rows = [{ id: 1, name: "TestItem" }];
		render(<DataTable columns={columns} rows={rows} />);
		screen.debug();
	});
});
