# Combobox (Autocomplete) Spec

## Overview
Async data filtering, complex focus routing, aria-live screen reader announcements, and visual popover placement.

## Types & Interfaces
```typescript
export interface ComboboxProps<T extends object> {
  items: T[];
  onSelectionChange: (item: T) => void;
  isLoading?: boolean;
  emptyStateMessage?: string;
}

export interface ComboboxItemProps {
  id: string;
  label: string;
  description?: string;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { ComboBox, Popover, ListBox, ListBoxItem, FieldError, Text } from 'react-aria-components';
import { Label, Input } from '@design_components/ui';

<ComboBox onSelectionChange={onSelectionChange} items={items}>
  <Label className="text-sm font-medium text-foreground">Assignee</Label>
  <div className="relative">
    <Input className="w-full border border-border bg-background px-3 py-2 text-foreground rounded focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary" />
  </div>
  <Popover className="border border-border bg-surface shadow-popover rounded mt-1">
    <ListBox className="p-1 outline-none">
      {item => (
        <ListBoxItem id={item.id} className="cursor-pointer px-3 py-2 text-sm text-foreground data-[hovered]:bg-surface-hover rounded">
          {item.label}
        </ListBoxItem>
      )}
    </ListBox>
  </Popover>
  <Text slot="description" className="text-xs text-foreground mt-1">Select a user to assign.</Text>
  <FieldError className="text-xs text-danger mt-1" />
</ComboBox>
```

## Mock Data Strategy
```typescript
export const mockUsers = [
  { id: '1', label: 'Alice Smith', description: 'Product Designer' },
  { id: '2', label: 'Bob Jones', description: 'Software Engineer' }
];
```

## Storybook Implementation
1. **Scenarios**: Loading State, Empty State, Filled State, Validated/Error State.
2. **Play Function**: Focus input -> Type "Ali" -> Verify "Alice Smith" appears -> Press ArrowDown -> Press Enter -> Verify Select.

## Testing Strategy
1. **Unit tests**: Renders without crashing, handles empty states correctly.
2. **Interaction**: Trigger 'Enter' and 'Escape' keyboard bindings correctly, confirm 'aria-expanded' flips.

## Style & Tokens Integration
**Recommended New Tokens:**
`--surface, --surface-hover, --shadow-popover`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*