import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    // Test that code element is rendered
    const codeElement = canvasElement.querySelector("code");
    await expect(codeElement).toBeInTheDocument();
    
    // Test that code has correct content
    const content = canvas.getByText("const greeting = 'Hello, World!';");
    await expect(content).toBeInTheDocument();
    
    // Test that code has correct styling classes
    await expect(codeElement).toHaveClass("relative");
    await expect(codeElement).toHaveClass("rounded");
    await expect(codeElement).toHaveClass("bg-muted");
    await expect(codeElement).toHaveClass("font-mono");
  },
};

export const InlineCode: Story = {
  args: {
    children: "npm install",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that code element is rendered
    const codeElement = canvasElement.querySelector("code");
    await expect(codeElement).toBeInTheDocument();
    
    // Test that code has correct content
    const content = canvas.getByText("npm install");
    await expect(content).toBeInTheDocument();
    
    // Test inline code styling
    await expect(codeElement).toHaveClass("font-mono");
    await expect(codeElement).toHaveClass("text-sm");
  },
};

export const MultiLine: Story = {
  args: {
    children: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that code element is rendered
    const codeElement = canvasElement.querySelector("code");
    await expect(codeElement).toBeInTheDocument();
    
    // Test that multiline code is displayed correctly
    const content = canvas.getByText(/function greet/);
    await expect(content).toBeInTheDocument();
    
    // Test code formatting is preserved
    await expect(codeElement).toHaveClass("font-mono");
    await expect(codeElement?.textContent).toContain("return");
  },
};

export const HTMLExample: Story = {
  args: {
    children: "<div className='container'>Content</div>",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that code element is rendered
    const codeElement = canvasElement.querySelector("code");
    await expect(codeElement).toBeInTheDocument();
    
    // Test that HTML code is displayed as text, not rendered
    const content = canvas.getByText(/<div className/);
    await expect(content).toBeInTheDocument();
    
    // Ensure HTML is escaped and not executed
    const divElements = canvasElement.querySelectorAll("div.container");
    await expect(divElements).toHaveLength(0);
  },
};

export const CSSExample: Story = {
  args: {
    children: ".button { padding: 0.5rem 1rem; }",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that code element is rendered
    const codeElement = canvasElement.querySelector("code");
    await expect(codeElement).toBeInTheDocument();
    
    // Test that CSS code is displayed correctly
    const content = canvas.getByText(/\.button.*padding/);
    await expect(content).toBeInTheDocument();
    
    // Test styling
    await expect(codeElement).toHaveClass("bg-muted");
    await expect(codeElement).toHaveClass("font-mono");
  },
};