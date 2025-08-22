import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import React from "react";
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
      options: [
        "default",
        "secondary",
        "accent-cool",
        "accent-warm",
        "base",
        "outline",
        "inverse",
        "unstyled",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "big", "lg"],
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
  play: async ({ canvasElement }) => {
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

export const AccentCool: Story = {
  args: {
    children: "Accent Cool",
    variant: "accent-cool",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /destructive/i });

    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("usa-button--accent-cool");

    // Test that accent-cool variant has appropriate styling
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

export const AccentWarm: Story = {
  args: {
    children: "Accent Warm",
    variant: "accent-warm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /accent warm/i });

    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Accent Warm variant should have appropriate styling
    await expect(button).toHaveClass("usa-button--accent-warm");

    // Test interaction
    await userEvent.hover(button);
    await userEvent.click(button);
  },
};

export const Inverse: Story = {
  args: {
    children: "Inverse",
    variant: "inverse",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /inverse/i });

    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveClass("usa-button--inverse");

    // Test inverse variant styling
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

export const Big: Story = {
  args: {
    children: "Big Button",
    size: "big",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /big button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
    // Big size should have appropriate styling
    await expect(button).toHaveClass("usa-button--big");

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
        <Button variant="accent-cool">Accent Cool</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="accent-warm">Accent Warm</Button>
        <Button variant="inverse">Inverse</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="big">Big</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button disabled>Disabled Default</Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that all variants are rendered - there are two "Default" buttons so we use getAllByRole
    const defaultBtns = canvas.getAllByRole("button", { name: /^Default$/i });
    const secondaryBtn = canvas.getByRole("button", { name: /^Secondary$/i });
    const accentCoolBtn = canvas.getByRole("button", { name: /^Accent Cool$/i });
    const outlineBtn = canvas.getByRole("button", { name: /^Outline$/i });
    const accentWarmBtn = canvas.getByRole("button", { name: /^Accent Warm$/i });
    const inverseBtn = canvas.getByRole("button", { name: /^Inverse$/i });

    await expect(defaultBtns).toHaveLength(2); // One for variant, one for size
    await expect(secondaryBtn).toBeInTheDocument();
    await expect(accentCoolBtn).toBeInTheDocument();
    await expect(outlineBtn).toBeInTheDocument();
    await expect(accentWarmBtn).toBeInTheDocument();
    await expect(inverseBtn).toBeInTheDocument();

    // Test that all sizes are rendered
    const smallBtn = canvas.getByRole("button", { name: /^Small$/i });
    const largeBtn = canvas.getByRole("button", { name: /^Large$/i });
    const bigBtn = canvas.getByRole("button", { name: /^Big$/i });

    await expect(smallBtn).toBeInTheDocument();
    await expect(largeBtn).toBeInTheDocument();
    await expect(bigBtn).toBeInTheDocument();

    // Test that disabled buttons are actually disabled
    const disabledButtons = canvas.getAllByRole("button", { name: /disabled/i });
    for (const btn of disabledButtons) {
      await expect(btn).toBeDisabled();
    }
  },
};
