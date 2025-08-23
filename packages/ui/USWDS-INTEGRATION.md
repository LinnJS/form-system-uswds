# USWDS Integration for shadcn/ui Components

## Overview

All components in `/src/components/ui/` have been updated to use actual USWDS CSS classes instead of just Tailwind utilities with USWDS color tokens. This ensures consistent styling between the shadcn/ui components and the USWDS components.

## Changes Made

### Core Components Updated

1. **Button** (`/src/components/ui/button.tsx`)
   - Now uses `usa-button` as base class
   - Variants use USWDS modifier classes: `usa-button--secondary`, `usa-button--outline`, `usa-button--big`, etc.
   - Maintains shadcn/ui API with USWDS styling

2. **Card** (`/src/components/ui/card.tsx`)
   - Uses `usa-card` and related classes: `usa-card__header`, `usa-card__body`, `usa-card__footer`
   - Added `CardMedia` and `CardImage` components for full USWDS card support
   - All card sections now use proper USWDS BEM classes

3. **Badge** (`/src/components/ui/badge.tsx`)
   - Changed from `<div>` to `<span>` element per USWDS spec
   - Uses `usa-tag` as base class
   - Added USWDS variants: `usa-tag--outline`, `usa-tag--big`, `usa-tag--new`

4. **Alert** (`/src/components/ui/alert.tsx`)
   - Uses `usa-alert` with proper structure
   - Wraps content in `usa-alert__body`
   - Variants use USWDS modifiers: `usa-alert--info`, `usa-alert--success`, `usa-alert--warning`, `usa-alert--error`
   - Added slim and no-icon variants

5. **Form Components**
   - **Input** (`/src/components/ui/input.tsx`): Uses `usa-input` class
   - **Textarea** (`/src/components/ui/textarea.tsx`): Uses `usa-textarea` class
   - **Select** (`/src/components/ui/select.tsx`): Uses `usa-select` class with Radix UI for enhanced accessibility
   - **Label** (`/src/components/ui/label.tsx`): Uses `usa-label` class

## Key Benefits

### Consistent Styling

- All components now render with the same styles whether using shadcn/ui API or direct USWDS components
- No visual discrepancies between `/components/ui/` and `/components/` directories

### Maintain shadcn/ui Benefits

- Still leverages Radix UI primitives for accessibility
- Keeps the composable component architecture
- TypeScript support and prop validation
- CVA for variant management where appropriate

### USWDS Compliance

- Components follow USWDS HTML structure and class naming conventions
- Proper BEM methodology for component parts
- Accessibility features from both USWDS and Radix UI

## CSS Import Structure

The USWDS CSS is imported through `/src/styles/index.css`:

```css
@import "@uswds/uswds/css/uswds.min.css";
```

This ensures:

- All USWDS utility classes are available
- Component styles are properly loaded
- Custom properties and tokens are defined

## Usage

Components can be used exactly as before, but now render with proper USWDS styling:

```tsx
// shadcn/ui style API
import { Button } from "@acme/ui/components/ui/button";
<Button variant="secondary">Click me</Button>;

// Direct USWDS component
import { Button } from "@acme/ui/components/button";
<Button variant="secondary">Click me</Button>;

// Both render with the same USWDS styles!
```

## Testing

- All unit tests pass ✅
- Lint checks pass ✅
- TypeScript compilation successful ✅
- Storybook renders components correctly with USWDS styles ✅

## Next Steps

1. Update Storybook stories to showcase USWDS styling
2. Add visual regression tests to ensure style consistency
3. Document USWDS token usage in component props
4. Consider adding more USWDS-specific variants to components
