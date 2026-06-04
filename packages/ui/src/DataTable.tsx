"use client";
import {
	Cell,
	Column,
	Row,
	Table,
	TableBody,
	TableHeader,
	type TableProps,
} from "react-aria-components";

export interface DataTableColumn {
	id: string;
	isRowHeader?: boolean;
	name: string;
}

export interface DataTableProps<T> extends Omit<TableProps, "children"> {
	columns: DataTableColumn[];
	rows: Iterable<T>;
	selectionMode?: "none" | "single" | "multiple";
}

export const DataTable = <T extends object>({
	columns,
	rows,
	...props
}: DataTableProps<T>) => {
	return (
		<Table
			aria-label="Data Table"
			{...props}
			className={`w-full text-left border-collapse  ${props.className || ""}`}
		>
			<TableHeader
				columns={columns}
				className="bg-table-header-bg text-foreground border-b border-border"
			>
				{(column: DataTableColumn) => (
					<Column
						isRowHeader={column.isRowHeader}
						className="p-3 font-semibold text-sm"
					>
						{column.name}
					</Column>
				)}
			</TableHeader>
			<TableBody items={rows}>
				{(item: T) => (
					<Row className="data-[hovered]:bg-table-row-hover data-[selected]:bg-surface-hover border-b border-border/50 cursor-pointer outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-primary data-[focus-visible]:-outline-offset-2">
						{(columnKey: string | number) => (
							<Cell className="p-3 text-sm">
								{String((item as Record<string | number, unknown>)[columnKey])}
							</Cell>
						)}
					</Row>
				)}
			</TableBody>
		</Table>
	);
};
