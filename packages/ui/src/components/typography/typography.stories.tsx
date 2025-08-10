import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import {
  Typography,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Paragraph,
  Lead,
  Small,
  Strong,
  Emphasis,
  Blockquote,
  InlineCode,
  Pre,
  Kbd,
  List,
  ListItem,
  UnorderedList,
  OrderedList,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from './index';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive typography system with semantic HTML elements and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'lead', 'large', 'small', 'muted', 'blockquote', 'code', 'pre', 'kbd'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    textColor: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'muted'],
    },
    weight: {
      control: 'select',
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p',
  },
};

export const Headings = () => (
  <div className="space-y-4">
    <H1>Heading 1 - The quick brown fox</H1>
    <H2>Heading 2 - The quick brown fox</H2>
    <H3>Heading 3 - The quick brown fox</H3>
    <H4>Heading 4 - The quick brown fox</H4>
    <H5>Heading 5 - The quick brown fox</H5>
    <H6>Heading 6 - The quick brown fox</H6>
  </div>
);

Headings.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // Test that all heading levels are rendered with correct semantic tags
  const h1 = canvas.getByRole('heading', { level: 1 });
  const h2 = canvas.getByRole('heading', { level: 2 });
  const h3 = canvas.getByRole('heading', { level: 3 });
  const h4 = canvas.getByRole('heading', { level: 4 });
  const h5 = canvas.getByRole('heading', { level: 5 });
  const h6 = canvas.getByRole('heading', { level: 6 });
  
  expect(h1).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(h3).toBeInTheDocument();
  expect(h4).toBeInTheDocument();
  expect(h5).toBeInTheDocument();
  expect(h6).toBeInTheDocument();
};

export const TextVariants = () => (
  <div className="space-y-4">
    <Paragraph>
      This is a paragraph with normal text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Paragraph>
    
    <Lead>
      This is lead text, typically used for introductory paragraphs that need more emphasis.
    </Lead>
    
    <Text size="lg" weight="semibold">
      Large semibold text for emphasis
    </Text>
    
    <Small>This is small text, useful for captions or footnotes</Small>
    
    <Text textColor="muted">This is muted text for less important information</Text>
    
    <div className="flex gap-4">
      <Text textColor="primary">Primary</Text>
      <Text textColor="secondary">Secondary</Text>
      <Text textColor="success">Success</Text>
      <Text textColor="warning">Warning</Text>
      <Text textColor="danger">Danger</Text>
    </div>
  </div>
);

export const TextFormatting = () => (
  <div className="space-y-4">
    <Paragraph>
      This paragraph contains <Strong>bold text</Strong> and <Emphasis>italic text</Emphasis> for emphasis.
    </Paragraph>
    
    <Paragraph>
      You can also use <Text as="mark" className="bg-yellow-200">highlighted text</Text> and{' '}
      <Text as="del" decoration="line-through">strikethrough text</Text> when needed.
    </Paragraph>
    
    <Paragraph>
      For keyboard shortcuts, use <Kbd>Cmd</Kbd> + <Kbd>K</Kbd> or <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>.
    </Paragraph>
    
    <Paragraph>
      Inline code looks like <InlineCode>const foo = "bar"</InlineCode> within text.
    </Paragraph>
  </div>
);

export const BlockElements = () => (
  <div className="space-y-6">
    <div>
      <H3 className="mb-4">Blockquote</H3>
      <Blockquote cite="https://example.com">
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
        Don't settle. As with all matters of the heart, you'll know when you find it."
        <footer className="mt-2 text-sm text-gray-600">— Steve Jobs</footer>
      </Blockquote>
    </div>
    
    <div>
      <H3 className="mb-4">Code Block</H3>
      <Pre>
        <code className="text-gray-100">{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return name;
}

greet("World");`}</code>
      </Pre>
    </div>
  </div>
);

export const Lists = () => (
  <div className="space-y-6">
    <div>
      <H3 className="mb-4">Unordered List</H3>
      <UnorderedList>
        <ListItem>First item in the list</ListItem>
        <ListItem>Second item with more text</ListItem>
        <ListItem>
          Third item with nested list
          <UnorderedList className="mt-2">
            <ListItem>Nested item one</ListItem>
            <ListItem>Nested item two</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Fourth item</ListItem>
      </UnorderedList>
    </div>
    
    <div>
      <H3 className="mb-4">Ordered List</H3>
      <OrderedList>
        <ListItem>First step in the process</ListItem>
        <ListItem>Second step with details</ListItem>
        <ListItem>Third step to complete</ListItem>
        <ListItem>Final step</ListItem>
      </OrderedList>
    </div>
    
    <div>
      <H3 className="mb-4">Description List</H3>
      <DescriptionList>
        <div>
          <DescriptionTerm>HTML</DescriptionTerm>
          <DescriptionDetails>HyperText Markup Language</DescriptionDetails>
        </div>
        <div>
          <DescriptionTerm>CSS</DescriptionTerm>
          <DescriptionDetails>Cascading Style Sheets</DescriptionDetails>
        </div>
        <div>
          <DescriptionTerm>JavaScript</DescriptionTerm>
          <DescriptionDetails>Programming language of the web</DescriptionDetails>
        </div>
      </DescriptionList>
    </div>
  </div>
);

Lists.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // Test that lists are rendered with correct semantic tags
  const unorderedList = canvas.getAllByRole('list')[0];
  const orderedList = canvas.getAllByRole('list')[2]; // Skip nested list
  
  expect(unorderedList.tagName).toBe('UL');
  expect(orderedList.tagName).toBe('OL');
  
  // Test list items
  const listItems = canvas.getAllByRole('listitem');
  expect(listItems.length).toBeGreaterThan(0);
};

export const Alignment = () => (
  <div className="space-y-4">
    <Text align="left">Left aligned text (default)</Text>
    <Text align="center">Center aligned text</Text>
    <Text align="right">Right aligned text</Text>
    <Text align="justify">
      Justified text that will stretch to fill the full width of its container. 
      This is useful for creating newspaper-style columns where text aligns to both edges.
    </Text>
  </div>
);

export const FontWeights = () => (
  <div className="space-y-2">
    <Text weight="thin">Thin weight (100)</Text>
    <Text weight="extralight">Extra Light weight (200)</Text>
    <Text weight="light">Light weight (300)</Text>
    <Text weight="normal">Normal weight (400)</Text>
    <Text weight="medium">Medium weight (500)</Text>
    <Text weight="semibold">Semibold weight (600)</Text>
    <Text weight="bold">Bold weight (700)</Text>
    <Text weight="extrabold">Extra Bold weight (800)</Text>
    <Text weight="black">Black weight (900)</Text>
  </div>
);

export const FontSizes = () => (
  <div className="space-y-2">
    <Text size="xs">Extra small text (xs)</Text>
    <Text size="sm">Small text (sm)</Text>
    <Text size="base">Base text size (base)</Text>
    <Text size="lg">Large text (lg)</Text>
    <Text size="xl">Extra large text (xl)</Text>
    <Text size="2xl">2X large text (2xl)</Text>
    <Text size="3xl">3X large text (3xl)</Text>
    <Text size="4xl">4X large text (4xl)</Text>
    <Text size="5xl">5X large text (5xl)</Text>
  </div>
);

export const LineHeight = () => (
  <div className="space-y-4">
    <div className="border-t border-b border-gray-200 py-2">
      <Text leading="none">
        Line height none - The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
    <div className="border-t border-b border-gray-200 py-2">
      <Text leading="tight">
        Line height tight - The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
    <div className="border-t border-b border-gray-200 py-2">
      <Text leading="normal">
        Line height normal - The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
    <div className="border-t border-b border-gray-200 py-2">
      <Text leading="relaxed">
        Line height relaxed - The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
    <div className="border-t border-b border-gray-200 py-2">
      <Text leading="loose">
        Line height loose - The quick brown fox jumps over the lazy dog. 
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  </div>
);

export const TextTransform = () => (
  <div className="space-y-2">
    <Text transform="uppercase">This text is uppercase</Text>
    <Text transform="lowercase">THIS TEXT IS LOWERCASE</Text>
    <Text transform="capitalize">this text is capitalized</Text>
    <Text transform="none">This Text Is Normal</Text>
  </div>
);

export const AccessibilityExample = () => (
  <article aria-labelledby="article-title">
    <header>
      <H1 id="article-title">Accessible Typography Example</H1>
      <Text as="p" textColor="muted" role="doc-subtitle">
        Demonstrating proper semantic HTML and ARIA attributes
      </Text>
    </header>
    
    <main className="mt-6 space-y-4">
      <section aria-labelledby="intro-heading">
        <H2 id="intro-heading">Introduction</H2>
        <Paragraph>
          This example demonstrates how our typography components maintain semantic HTML structure
          and include appropriate ARIA attributes for accessibility.
        </Paragraph>
      </section>
      
      <section aria-labelledby="features-heading">
        <H2 id="features-heading">Key Features</H2>
        <UnorderedList role="list">
          <ListItem role="listitem">Semantic HTML elements (h1-h6, p, ul, ol, etc.)</ListItem>
          <ListItem role="listitem">Proper heading hierarchy for screen readers</ListItem>
          <ListItem role="listitem">ARIA labels and roles where appropriate</ListItem>
          <ListItem role="listitem">High contrast text colors for readability</ListItem>
        </UnorderedList>
      </section>
      
      <aside aria-labelledby="note-heading">
        <H3 id="note-heading">Important Note</H3>
        <Blockquote>
          <Text>
            Always use semantic HTML elements and maintain a logical heading hierarchy
            for the best accessibility experience.
          </Text>
        </Blockquote>
      </aside>
    </main>
  </article>
);

AccessibilityExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // Test article structure
  const article = canvas.getByRole('article');
  expect(article).toBeInTheDocument();
  
  // Test heading hierarchy
  const mainHeading = canvas.getByRole('heading', { level: 1 });
  expect(mainHeading).toHaveAttribute('id', 'article-title');
  
  // Test ARIA labelledby
  expect(article).toHaveAttribute('aria-labelledby', 'article-title');
  
  // Test list accessibility
  const list = canvas.getByRole('list');
  expect(list).toBeInTheDocument();
  
  const listItems = canvas.getAllByRole('listitem');
  expect(listItems).toHaveLength(4);
};

export const CompleteExample = () => (
  <article className="max-w-prose mx-auto p-8 space-y-6">
    <header>
      <H1 textColor="primary">Building Accessible Web Applications</H1>
      <Lead>
        A comprehensive guide to creating inclusive digital experiences
      </Lead>
    </header>
    
    <Paragraph>
      Web accessibility is about creating websites and applications that can be used by everyone,
      regardless of their abilities or disabilities. This includes people with visual, auditory,
      physical, speech, cognitive, and neurological disabilities.
    </Paragraph>
    
    <section>
      <H2>Why Accessibility Matters</H2>
      <Paragraph>
        There are many reasons to prioritize accessibility in your web development:
      </Paragraph>
      <UnorderedList spacing="tight">
        <ListItem><Strong>Legal compliance:</Strong> Many countries have laws requiring digital accessibility</ListItem>
        <ListItem><Strong>Larger audience:</Strong> 15% of the world's population has some form of disability</ListItem>
        <ListItem><Strong>Better UX:</Strong> Accessible design benefits all users</ListItem>
        <ListItem><Strong>SEO benefits:</Strong> Semantic HTML improves search engine optimization</ListItem>
      </UnorderedList>
    </section>
    
    <section>
      <H2>Key Principles</H2>
      <OrderedList>
        <ListItem>
          <Strong>Perceivable:</Strong> Information must be presentable in ways users can perceive
        </ListItem>
        <ListItem>
          <Strong>Operable:</Strong> Interface components must be operable by all users
        </ListItem>
        <ListItem>
          <Strong>Understandable:</Strong> Information and UI operation must be understandable
        </ListItem>
        <ListItem>
          <Strong>Robust:</Strong> Content must be robust enough for various assistive technologies
        </ListItem>
      </OrderedList>
    </section>
    
    <section>
      <H2>Code Example</H2>
      <Paragraph>
        Here's how to create an accessible button with proper ARIA attributes:
      </Paragraph>
      <Pre>
        <code className="text-gray-100">{`<button
  aria-label="Close dialog"
  aria-pressed="false"
  onClick={handleClose}
>
  <Icon name="close" aria-hidden="true" />
  <span className="sr-only">Close</span>
</button>`}</code>
      </Pre>
    </section>
    
    <Blockquote cite="https://www.w3.org/WAI/">
      "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
      <footer className="mt-2">
        <cite>— Tim Berners-Lee, W3C Director</cite>
      </footer>
    </Blockquote>
    
    <footer>
      <Small textColor="muted">
        Last updated: {new Date().toLocaleDateString()} • 
        Press <Kbd>Cmd</Kbd> + <Kbd>K</Kbd> to search
      </Small>
    </footer>
  </article>
);