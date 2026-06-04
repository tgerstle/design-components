# Smart Popover / Tooltip Spec

## Overview
Floating layout geometry, viewport collision detection, delayed hover logic.

## Types & Interfaces
```typescript
export interface SmartTooltipProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  content: React.ReactNode;
  children: React.ReactElement;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { TooltipTrigger, Tooltip, OverlayArrow } from 'react-aria-components';
import { Button } from '@design_components/ui';

<TooltipTrigger delay={300}>
  <Button className="px-4 py-2 border rounded">Hover me</Button>
  <Tooltip placement="top" className="bg-secondary-foreground text-background px-2 py-1 rounded text-sm shadow-floating z-[var(--z-index-popover)]">
    <OverlayArrow>
      <svg width={8} height={8}><path d="M0 0 L4 4 L8 0" fill="currentColor" /></svg>
    </OverlayArrow>
    I am a smart tooltip!
  </Tooltip>
</TooltipTrigger>
```

## Mock Data Strategy
```typescript
N/A - Context driven.
```

## Storybook Implementation
1. **Scenarios**: Edge collisions (force tooltip to flip sides), Multi-line text tooltips.
2. **Play Function**: Hover button -> Advance mock timers by 300ms -> Assert tooltip is in document -> Unhover -> Assert removed.

## Testing Strategy
Unit test exact timings. Playwright for precise layout/collision geometries mapping checking.

## Style & Tokens Integration
**Recommended New Tokens:**
`--shadow-floating, --z-index-popover`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*