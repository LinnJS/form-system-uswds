import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import {
  H1,
  H2,
  H3,
  Paragraph,
  Lead,
  Text,
} from './index';

const meta = {
  title: 'Components/Typography',
  component: H1,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive typography system with semantic HTML elements and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1 - The quick brown fox</H1>
      <H2>Heading 2 - The quick brown fox</H2>
      <H3>Heading 3 - The quick brown fox</H3>
    </div>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-4">
      <Lead>
        This is a lead paragraph that stands out from regular text.
        It's perfect for introductions and important callouts.
      </Lead>
      <Paragraph>
        This is a regular paragraph. The quick brown fox jumps over the lazy dog.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Paragraph>
        Another paragraph to show spacing. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </div>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Text className="text-lg font-semibold">Large Text</Text>
      </div>
      <div>
        <Text>Regular Text</Text>
      </div>
      <div>
        <Text className="text-sm">Small Text</Text>
      </div>
      <div>
        <Text className="text-gray-600 dark:text-gray-400">Muted Text</Text>
      </div>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <article className="prose dark:prose-invert">
      <H1>Form System USWDS</H1>
      <Lead>
        A modern, accessible form component library built on U.S. Web Design System standards.
      </Lead>
      <H2>Introduction</H2>
      <Paragraph>
        The Form System USWDS provides a comprehensive set of React components
        for building accessible, compliant web forms. Built with TypeScript and
        following WCAG 2.1 AA standards, it ensures your forms are usable by everyone.
      </Paragraph>
      <H3>Key Features</H3>
      <Paragraph>
        Our component library includes full TypeScript support, React Hook Form
        integration, Zod validation, and comprehensive accessibility features.
        Each component is thoroughly tested and documented.
      </Paragraph>
      <H3>Getting Started</H3>
      <Paragraph>
        Installation is simple with your preferred package manager. The library
        works seamlessly with Next.js, Remix, and standard React applications.
      </Paragraph>
    </article>
  ),
};

export const AccessibilityTest: Story = {
  name: 'Accessibility',
  render: () => (
    <div className="space-y-4">
      <H1 id="main-heading">Main Page Heading</H1>
      <Lead id="page-intro">Page introduction text with proper semantic markup.</Lead>
      <H2 id="section-1">Section Heading</H2>
      <Paragraph id="section-1-content">
        Section content with proper heading hierarchy for screen readers.
      </Paragraph>
      <H3 id="subsection-1">Subsection Heading</H3>
      <Paragraph id="subsection-1-content">
        Subsection content maintaining proper document structure.
      </Paragraph>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test heading hierarchy
    const h1 = canvas.getByRole('heading', { level: 1 });
    await expect(h1).toBeInTheDocument();
    await expect(h1).toHaveTextContent('Main Page Heading');
    
    const h2 = canvas.getByRole('heading', { level: 2 });
    await expect(h2).toBeInTheDocument();
    
    const h3 = canvas.getByRole('heading', { level: 3 });
    await expect(h3).toBeInTheDocument();
  },
};