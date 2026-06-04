# Toast Notification Manager Spec

## Overview
Global state management, exit animations, and assertive announcements.

## Types & Interfaces
```typescript
export type ToastTone = 'success' | 'info' | 'warning' | 'danger';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  tone: ToastTone;
  duration?: number;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { ToastRegion, Toast } from 'react-aria-components';

<ToastRegion aria-label="Notifications" className="fixed bottom-4 right-4 z-[var(--z-index-toast)] flex flex-col gap-2">
  {toasts.map(toast => (
    <Toast key={toast.id} toast={toast} className={`bg-color-${toast.tone} text-white p-4 rounded shadow-lg`}>
      <div className="font-bold">{toast.title}</div>
      {toast.description && <div className="text-sm">{toast.description}</div>}
    </Toast>
  ))}
</ToastRegion>
```

## Mock Data Strategy
```typescript
const mockInfoToast = { id: 1, title: 'Network Restored', tone: 'success', duration: 5000 };
```

## Storybook Implementation
1. **Scenarios**: Stack limits (max 3), Slide-in/Slide-out animations, Focus management.
2. **Play Function**: Click "Trigger Toast" -> Check aria-live region -> Wait for dismissal.

## Testing Strategy
Verify screen reader announcements ('assertive' vs 'polite' based on urgency). Ensure pause-on-hover works.

## Style & Tokens Integration
**Recommended New Tokens:**
`--surface, --z-index-toast`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*