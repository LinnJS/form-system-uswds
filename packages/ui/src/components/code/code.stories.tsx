import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./code";

const meta = {
  title: "Components/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Code content to display",
    },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "const greeting = 'Hello, World!';",
  },
};

export const InlineCode: Story = {
  args: {
    children: "npm install",
  },
};

export const MultiLine: Story = {
  args: {
    children: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
  },
};

export const HTMLExample: Story = {
  args: {
    children: "<div className='container'>Content</div>",
  },
};

export const CSSExample: Story = {
  args: {
    children: ".button { padding: 0.5rem 1rem; }",
  },
};