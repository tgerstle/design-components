# Virtual Scroll / Windowed List Spec

## Overview
Handling massive datasets safely.

## Types & Interfaces
```typescript
export interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T) => React.ReactNode;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { useVirtualizer } from '@react-aria/virtualizer';
// Structural mock as true RAC virtualizer depends on Collection components

<div style={{height: containerHeight, overflow: 'auto'}} className="border border-border">
  <div style={{height: totalHeight, position: 'relative'}}>
    {visibleItems.map(item => (
      <div style={{position: 'absolute', top: item.top, height: itemHeight}} className="w-full px-4 py-2 data-[hovered]:bg-slate-100 dark:data-[hovered]:bg-slate-800">
        {renderItem(item.value)}
      </div>
    ))}
  </div>
</div>
```

## Mock Data Strategy
```typescript
const mockArray = Array.from({length: 10000}, (_, i) => ({ id: i, name: `Item ${i}` }));
```

## Storybook Implementation
1. **Scenarios**: 100k items list. Resize container boundaries dynamically.
2. **Play Function**: Scroll down 5000px -> Verify DOM node count remains constant (~15-20 nodes).

## Testing Strategy
Playwright performance assertions. Ensure tab indexing doesn't break virtualization context.

## Style & Tokens Integration
**Recommended New Tokens:**
`N/A - Layout dependent.`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*