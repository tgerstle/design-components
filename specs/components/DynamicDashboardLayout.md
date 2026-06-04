# Dynamic Dashboard Layout Shell Spec

## Overview
Collapsible sidebar, sticky top-nav, and scalable CSS grids.

## Types & Interfaces
```typescript
export interface DashboardProps {
  sidebarContent: React.ReactNode;
  headerContent: React.ReactNode;
  children: React.ReactNode;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
<div className="flex h-screen overflow-hidden bg-secondary">
  {/* Sidebar */}
  <aside className="w-[var(--sidebar-width,250px)] flex-shrink-0 bg-background border-r border-border hidden md:flex flex-col overflow-y-auto">
    {sidebarContent}
  </aside>
  
  <div className="flex-1 flex flex-col min-w-0">
    {/* Topbar */}
    <header className="h-[var(--topbar-height,60px)] flex-shrink-0 bg-background border-b border-border flex items-center px-6">
      {/* Mobile Menu Trigger & Header */}
      {headerContent}
    </header>
    
    {/* Main Content Area */}
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  </div>
</div>
```

## Mock Data Strategy
```typescript
const mockSidebar = <nav><a href="#1">Home</a><a href="#2">Analytics</a></nav>;
```

## Storybook Implementation
1. **Scenarios**: Desktop View, Mobile View (hamburger menu).
2. **Play Function**: Switch viewport to mobile -> Assert sidebar hidden -> Click Hamburger -> Assert sidebar shows as overlay.

## Testing Strategy
Playwright exclusively for viewport mapping and responsive breakpoint testing.

## Style & Tokens Integration
**Recommended New Tokens:**
`--sidebar-width, --topbar-height`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*