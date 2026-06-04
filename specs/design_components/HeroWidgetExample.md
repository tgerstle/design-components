# Hero Widget Architecture Example

This document traces the end-to-end creation of a `Hero` widget, moving from the foundational UI abstraction to widget composition, and finally mounting into the Next.js application. It demonstrates the strict separation of concerns we discussed.

## 1. The UI Component (Atom)
**Path:** `packages/ui/src/Button.tsx`

Here, we make a generic Button. This prevents our Next.js app or specific widgets from directly redefining duplicate buttons, giving us a central place to enforce defaults.

```tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', // Enforcing a default 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-sans font-medium transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
```

## 2. The Widget (Organism)
**Path:** `packages/widgets/src/Hero.tsx`

The widget orchestrates layout. It imports the strict `Button` from our `ui` package and relies on Tailwind CSS for layout coordination and semantic token application.

```tsx
import { Button } from 'ui';
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  description, 
  primaryCtaText, 
  secondaryCtaText,
  onPrimaryClick 
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 bg-background text-center">
      {/* 
        Tailwind is handling layout (flex, py-24).
        'bg-background' and 'text-foreground' map directly to tokens 
        defined in packages/tokens which map to --clay-body-bg etc.
      */}
      <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-foreground opacity-80 max-w-2xl mb-8">
        {description}
      </p>
      
      <div className="flex gap-4">
        {/* Consuming our wrapped UI components */}
        <Button displayType="primary" onClick={onPrimaryClick}>
          {primaryCtaText}
        </Button>
        {secondaryCtaText && (
          <Button displayType="secondary">
            {secondaryCtaText}
          </Button>
        )}
      </div>
    </section>
  );
};
```

## 3. The App Integration (Page)
**Path:** `apps/next-site/src/app/page.tsx`

The consuming application simply imports the composite widget. The App is responsible for data fetching, view routing, and content, completely decoupled from Liferay Clay syntax or low-level CSS logic.

```tsx
import { Hero } from 'widgets';

export default function HomePage() {
  return (
    <main>
      <Hero 
        title="Scaling UI with Design System" 
        description="Our component-driven architecture separates concerns, speeds up development, and maintains a single source of truth for design tokens."
        primaryCtaText="Get Started"
        secondaryCtaText="View Components"
      />
      {/* Additional composite widgets (e.g., FeatureGrid, Testimonials) would follow here */}
    </main>
  );
}
```
