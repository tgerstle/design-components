# Data Table Spec

## Overview
Sortable headers, pagination, sticky elements, row selection.

## Types & Interfaces
```typescript
export interface DataTableColumn {
  id: string;
  isRowHeader?: boolean;
  name: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn[];
  rows: T[];
  selectionMode?: 'none' | 'single' | 'multiple';
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { Table, TableHeader, Column, TableBody, Row, Cell } from 'react-aria-components';

<Table aria-label="Users" selectionMode="multiple" className="w-full text-left border-collapse">
  <TableHeader columns={columns} className="bg-table-header-bg text-foreground border-b border-border">
    {column => <Column isRowHeader={column.isRowHeader} className="p-3">{column.name}</Column>}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
      <Row className="data-[hovered]:bg-table-row-hover border-b border-border/50 cursor-pointer">
        {columnKey => <Cell className="p-3">{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</Table>
```

## Mock Data Strategy
```typescript
const mockColumns = [{ id: 'name', name: 'Name', isRowHeader: true }, { id: 'status', name: 'Status' }];
const mockRows = [{ id: 1, name: 'Service A', status: 'Active' }];
```

## Storybook Implementation
1. **Scenarios**: 100 rows (virtualized preview), Empty data, Select All interactions.
2. **Play Function**: Click 'Select All' Checkbox -> Assert all rows selected -> Verify ARIA attributes.

## Testing Strategy
Keyboard navigation through Grid (ArrowUp/Down through rows, ArrowLeft/Right through cells).

## Style & Tokens Integration
**Recommended New Tokens:**
`--table-row-hover, --table-header-bg`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*