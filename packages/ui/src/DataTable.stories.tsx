import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta = {
	title: "UI/Data/DataTable",
	component: DataTable,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;
export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
	{ name: "Name", id: "name", isRowHeader: true },
	{ name: "Type", id: "type" },
	{ name: "Date Modified", id: "date" },
];

const rows = [
	{ id: 1, name: "Games", type: "File folder", date: "6/7/2020" },
	{ id: 2, name: "Program Files", type: "File folder", date: "4/7/2021" },
	{ id: 3, name: "bootmgr", type: "System file", date: "11/20/2010" },
];

export const Default: Story = {
	args: {
		columns,
		rows,
		selectionMode: "multiple",
	},
};
