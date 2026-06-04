# Multi-Step Form Wizard Spec

## Overview
State preservation, validation context, stepper navigation logic.

## Types & Interfaces
```typescript
export interface WizardStep {
  id: string;
  title: string;
  validationSchema?: any;
  Component: React.FC;
}

export interface FormWizardProps {
  steps: WizardStep[];
  onComplete: (data: any) => Promise<void>;
}
```

## Architectural Code Sample
*Built using `react-aria-components` and our local UI library.*
```tsx
// Composed primarily using standard DOM & Button components
<div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
  {/* Stepper Header */}
  <div className="flex justify-between border-b border-border pb-4">
    {steps.map((step, idx) => (
      <div className={`text-sm font-semibold ${currentStep === idx ? 'text-primary' : 'text-slate-400'}`}>
        {idx + 1}. {step.title}
      </div>
    ))}
  </div>
  
  {/* Step Content */}
  <div className="min-h-[300px]">
    <CurrentStepComponent formData={formData} setFormData={updateFormData} />
  </div>

  {/* Footer Controls */}
  <div className="flex justify-between pt-4 border-t border-border">
    <Button onPress={goBack} isDisabled={isFirst}>Back</Button>
    <Button onPress={goNext_or_Submit} className="bg-primary text-white">{isLast ? 'Complete' : 'Next'}</Button>
  </div>
</div>
```

## Mock Data Strategy
```typescript
const mockSteps = [
  { id: 'contact', title: 'Contact Info' },
  { id: 'billing', title: 'Billing Details' },
  { id: 'review', title: 'Review & Confirm' }
];
```

## Storybook Implementation
1. **Scenarios**: Prev/Next flow, Preventing 'Next' if current view validation fails.
2. **Play Function**: Fill step 1 -> Next -> Attempt step 2 -> Assert validation error -> Fix -> Finish.

## Testing Strategy
State persistence tests when navigating forwards and backwards.

## Style & Tokens Integration
**Recommended New Tokens:**
`--step-active, --step-inactive`

*Action Note: Incorporate these tokens into `packages/tokens/theme.css` and `tailwind.config.ts`.*