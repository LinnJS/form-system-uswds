import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /button/i });
    
    // Test that button is rendered
    await expect(button).toBeInTheDocument();
    
    // Test that button is not disabled by default
    await expect(button).not.toBeDisabled();
    
    // Test that button has correct classes for default variant
    await expect(button).toHaveClass("bg-primary");
    
    // Test click interaction
    await userEvent.click(button);
    
    // Test keyboard interaction (Enter key)
    button.focus();
    await userEvent.keyboard("{Enter}");
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /primary button/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("bg-primary");
    
    // Test click interaction
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /secondary/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("bg-secondary");
    
    // Test hover interaction
    await userEvent.hover(button);
    await userEvent.click(button);
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /destructive/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("bg-destructive");
    
    // Test that destructive variant has appropriate styling
    await userEvent.click(button);
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /outline/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("border");
    await expect(button).toHaveClass("border-input");
    
    // Test focus state
    button.focus();
    await userEvent.keyboard("{Enter}");
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /ghost/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Ghost variant should not have background by default
    await expect(button).not.toHaveClass("bg-primary");
    
    // Test hover adds background
    await userEvent.hover(button);
    await userEvent.click(button);
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /link/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("underline-offset-4");
    
    // Test hover underline behavior
    await userEvent.hover(button);
    await userEvent.click(button);
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /small/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Small size should have specific height and padding
    await expect(button).toHaveClass("h-9");
    await expect(button).toHaveClass("px-3");
    
    await userEvent.click(button);
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /large/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Large size should have specific height and padding
    await expect(button).toHaveClass("h-11");
    await expect(button).toHaveClass("px-8");
    
    await userEvent.click(button);
  },
};

export const Icon: Story = {
  args: {
    children: "🚀",
    size: "icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /🚀/i });
    
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Icon size should be square (size-10 sets both height and width)
    await expect(button).toHaveClass("size-10");
    
    await userEvent.click(button);
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /disabled/i });
    
    // Test that button is rendered
    await expect(button).toBeInTheDocument();
    
    // Test that button is disabled
    await expect(button).toBeDisabled();
    
    // Test that disabled button has correct styles
    await expect(button).toHaveClass("disabled:pointer-events-none");
    await expect(button).toHaveClass("disabled:opacity-50");
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">📱</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button disabled>Disabled Default</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that all variants are rendered - there are two "Default" buttons so we use getAllByRole
    const defaultBtns = canvas.getAllByRole("button", { name: /^Default$/i });
    const secondaryBtn = canvas.getByRole("button", { name: /^Secondary$/i });
    const destructiveBtn = canvas.getByRole("button", { name: /^Destructive$/i });
    const outlineBtn = canvas.getByRole("button", { name: /^Outline$/i });
    const ghostBtn = canvas.getByRole("button", { name: /^Ghost$/i });
    const linkBtn = canvas.getByRole("button", { name: /^Link$/i });
    
    await expect(defaultBtns).toHaveLength(2); // One for variant, one for size
    await expect(secondaryBtn).toBeInTheDocument();
    await expect(destructiveBtn).toBeInTheDocument();
    await expect(outlineBtn).toBeInTheDocument();
    await expect(ghostBtn).toBeInTheDocument();
    await expect(linkBtn).toBeInTheDocument();
    
    // Test that all sizes are rendered
    const smallBtn = canvas.getByRole("button", { name: /^Small$/i });
    const largeBtn = canvas.getByRole("button", { name: /^Large$/i });
    const iconBtn = canvas.getByRole("button", { name: /📱/i });
    
    await expect(smallBtn).toBeInTheDocument();
    await expect(largeBtn).toBeInTheDocument();
    await expect(iconBtn).toBeInTheDocument();
    
    // Test that disabled buttons are actually disabled
    const disabledButtons = canvas.getAllByRole("button", { name: /disabled/i });
    for (const btn of disabledButtons) {
      await expect(btn).toBeDisabled();
    }
  },
};