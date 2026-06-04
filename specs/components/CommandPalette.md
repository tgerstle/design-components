# Command Palette (⌘K) Spec

## Overview
Global event listeners, deep keyboard navigation, fuzzy search.

## Types & Interfaces
```typescript
export interface CommandAction {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  actions: CommandAction[];
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
import { Modal, Dialog, ListBox, ListBoxItem } from 'react-aria-components';
import { Input } from '@design_components/ui';
import { Search } from 'lucide-react';

<Modal isOpen={isOpen} onOpenChange={setIsOpen} className="fixed inset-0 bg-overlay flex items-center justify-center p-4">
  <Dialog className="bg-background shadow-modal rounded-lg w-full max-w-lg overflow-hidden border border-border">
    <div className="border-b border-border px-4 py-3 flex items-center gap-2">
      <Search className="w-5 h-5 text-slate-400" />
      <Input placeholder="Search commands..." className="flex-1 bg-transparent outline-none text-foreground" />
    </div>
    <ListBox items={actions} className="max-h-60 overflow-y-auto p-2 outline-none">
      {action => (
        <ListBoxItem className="px-3 py-2 text-sm text-foreground data-[hovered]:bg-secondary rounded cursor-pointer flex items-center gap-2">
          {action.icon} {action.label}
        </ListBoxItem>
      )}
    </ListBox>
  </Dialog>
</Modal>
```

## Mock Data Strategy
```typescript
const mockActions = [{ id: 'profile', label: 'Go to Profile' }, { id: 'settings', label: 'Preferences' }];
```

## Storybook Implementation
1. **Scenarios**: Triggers automatically on 'Cmd+K'. Has section groups.
2. **Play Function**: Sim keyboard press 'Cmd+K' -> Type 'set' -> Verify Preferences is highlighted -> Hit enter.

## Testing Strategy
Focus trap inside the Modal. Global document listener cleanup.

## Style & Tokens Integration
**Recommended New Tokens:**
`--shadow-modal, --overlay`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*