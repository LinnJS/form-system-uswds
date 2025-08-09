import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj;

export const FontShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Inter Font Family</h2>
        <p className="text-muted-foreground mb-6">
          The Inter font family provides excellent readability across all sizes and weights.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Font Weights</h3>
        <p className="font-thin">Thin (100) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-extralight">Extra Light (200) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-light">Light (300) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-semibold">Semibold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-extrabold">Extra Bold (800) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-black">Black (900) - The quick brown fox jumps over the lazy dog</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Heading Styles</h3>
        <h1 className="text-4xl font-bold">Heading 1 - Page Title</h1>
        <h2 className="text-3xl font-semibold">Heading 2 - Section Title</h2>
        <h3 className="text-2xl font-semibold">Heading 3 - Subsection</h3>
        <h4 className="text-xl font-medium">Heading 4 - Card Title</h4>
        <h5 className="text-lg font-medium">Heading 5 - Label</h5>
        <h6 className="text-base font-medium">Heading 6 - Small Label</h6>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Text Sizes</h3>
        <p className="text-xs">Extra Small (xs) - 0.75rem - Micro text and labels</p>
        <p className="text-sm">Small (sm) - 0.875rem - Secondary text and captions</p>
        <p className="text-base">Base - 1rem - Body text and paragraphs</p>
        <p className="text-lg">Large (lg) - 1.125rem - Lead paragraphs</p>
        <p className="text-xl">Extra Large (xl) - 1.25rem - Small headings</p>
        <p className="text-2xl">2X Large (2xl) - 1.5rem - Section headings</p>
        <p className="text-3xl">3X Large (3xl) - 1.875rem - Page headings</p>
        <p className="text-4xl">4X Large (4xl) - 2.25rem - Hero text</p>
        <p className="text-5xl">5X Large (5xl) - 3rem - Display text</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Line Heights</h3>
        <p className="leading-none">
          Leading None (1) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="leading-tight mt-4">
          Leading Tight (1.25) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="leading-snug mt-4">
          Leading Snug (1.375) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="leading-normal mt-4">
          Leading Normal (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="leading-relaxed mt-4">
          Leading Relaxed (1.625) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="leading-loose mt-4">
          Leading Loose (2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Letter Spacing</h3>
        <p className="tracking-tighter">Tracking Tighter (-0.05em) - The quick brown fox jumps over the lazy dog</p>
        <p className="tracking-tight">Tracking Tight (-0.025em) - The quick brown fox jumps over the lazy dog</p>
        <p className="tracking-normal">Tracking Normal (0em) - The quick brown fox jumps over the lazy dog</p>
        <p className="tracking-wide">Tracking Wide (0.025em) - The quick brown fox jumps over the lazy dog</p>
        <p className="tracking-wider">Tracking Wider (0.05em) - The quick brown fox jumps over the lazy dog</p>
        <p className="tracking-widest">Tracking Widest (0.1em) - The quick brown fox jumps over the lazy dog</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Monospace Font</h3>
        <code className="block p-4 bg-muted rounded-md font-mono">
          const Button = (&#123; children &#125;) =&gt; &#123;<br />
          &nbsp;&nbsp;return &lt;button&gt;&#123;children&#125;&lt;/button&gt;;<br />
          &#125;;
        </code>
      </div>
    </div>
  ),
};

export const ColorSystem: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Color System</h2>
        <p className="text-muted-foreground mb-6">
          Semantic color tokens that adapt to light and dark themes.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="p-4 bg-background border rounded">
            <p className="font-medium">Background</p>
            <p className="text-sm text-muted-foreground">Default background color</p>
          </div>
          <div className="p-4 bg-card border rounded">
            <p className="font-medium">Card</p>
            <p className="text-sm text-muted-foreground">Card background color</p>
          </div>
          <div className="p-4 bg-muted rounded">
            <p className="font-medium">Muted</p>
            <p className="text-sm text-muted-foreground">Muted background color</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="p-4 bg-primary text-primary-foreground rounded">
            <p className="font-medium">Primary</p>
            <p className="text-sm">Primary brand color</p>
          </div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded">
            <p className="font-medium">Secondary</p>
            <p className="text-sm">Secondary brand color</p>
          </div>
          <div className="p-4 bg-destructive text-destructive-foreground rounded">
            <p className="font-medium">Destructive</p>
            <p className="text-sm">Destructive action color</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Text Colors</h3>
        <p className="text-foreground">Foreground - Primary text color</p>
        <p className="text-muted-foreground">Muted Foreground - Secondary text color</p>
        <p className="text-primary">Primary - Link and accent text</p>
        <p className="text-destructive">Destructive - Error and warning text</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Components with Typography</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="default">Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>
    </div>
  ),
};