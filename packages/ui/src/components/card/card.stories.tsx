import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "../button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "elevated"],
      description: "The visual style variant of the card",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content goes here. You can add any content you want.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that Card components are rendered
    const card = canvasElement.querySelector('[class*="rounded-lg"]');
    await expect(card).toBeInTheDocument();
    
    // Test Card Title
    const title = canvas.getByText("Card Title");
    await expect(title).toBeInTheDocument();
    await expect(title.tagName).toBe("H3");
    
    // Test Card Description
    const description = canvas.getByText("Card Description");
    await expect(description).toBeInTheDocument();
    
    // Test Card Content
    const content = canvas.getByText(/Card Content goes here/);
    await expect(content).toBeInTheDocument();
    
    // Test Card Footer with button
    const button = canvas.getByRole("button", { name: /action/i });
    await expect(button).toBeInTheDocument();
  },
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium">Push Notifications</p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test title and description
    const title = canvas.getByText("Notifications");
    await expect(title).toBeInTheDocument();
    
    const description = canvas.getByText("You have 3 unread messages.");
    await expect(description).toBeInTheDocument();
    
    // Test content
    const pushNotifications = canvas.getByText("Push Notifications");
    await expect(pushNotifications).toBeInTheDocument();
    
    const deviceText = canvas.getByText("Send notifications to device.");
    await expect(deviceText).toBeInTheDocument();
  },
};

export const OutlineCard: Story = {
  render: () => (
    <Card variant="outline" className="w-[350px]">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>This card has an outline variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>The outline variant provides a more subtle appearance with a colored border.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that outline variant is applied
    const card = canvasElement.querySelector('[class*="rounded-lg"]');
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("border-primary/20");
    
    // Test content
    const title = canvas.getByText("Outline Card");
    await expect(title).toBeInTheDocument();
    
    const content = canvas.getByText(/outline variant provides/);
    await expect(content).toBeInTheDocument();
  },
};

export const ElevatedCard: Story = {
  render: () => (
    <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card appears elevated with a shadow</CardDescription>
      </CardHeader>
      <CardContent>
        <p>The elevated variant removes the border and adds a prominent shadow effect.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that elevated variant is applied
    const card = canvasElement.querySelector('[class*="rounded-lg"]');
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("shadow-lg");
    await expect(card).not.toHaveClass("border");
    
    // Test content
    const title = canvas.getByText("Elevated Card");
    await expect(title).toBeInTheDocument();
    
    const content = canvas.getByText(/elevated variant removes/);
    await expect(content).toBeInTheDocument();
  },
};

export const CardWithForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                placeholder="Name of your project"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework" className="text-sm font-medium">
                Framework
              </label>
              <select
                id="framework"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a framework</option>
                <option value="next">Next.js</option>
                <option value="sveltekit">SvelteKit</option>
                <option value="astro">Astro</option>
                <option value="nuxt">Nuxt.js</option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test form elements
    const nameInput = canvas.getByPlaceholderText("Name of your project");
    await expect(nameInput).toBeInTheDocument();
    await expect(nameInput).toHaveAttribute("id", "name");
    
    const frameworkSelect = canvas.getByRole("combobox");
    await expect(frameworkSelect).toBeInTheDocument();
    await expect(frameworkSelect).toHaveAttribute("id", "framework");
    
    // Test labels
    const nameLabel = canvas.getByText("Name");
    await expect(nameLabel).toBeInTheDocument();
    await expect(nameLabel).toHaveAttribute("for", "name");
    
    // Test buttons
    const cancelButton = canvas.getByRole("button", { name: /cancel/i });
    const deployButton = canvas.getByRole("button", { name: /deploy/i });
    await expect(cancelButton).toBeInTheDocument();
    await expect(deployButton).toBeInTheDocument();
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard card appearance</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the default card variant with a subtle border.</p>
        </CardContent>
      </Card>
      
      <Card variant="outline" className="w-[350px]">
        <CardHeader>
          <CardTitle>Outline Card</CardTitle>
          <CardDescription>Emphasized border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a more prominent colored border.</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated" className="w-[350px]">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Shadow effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card appears elevated with a shadow and no border.</p>
        </CardContent>
      </Card>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test all three card variants are rendered
    const defaultCard = canvas.getByText("Default Card");
    const outlineCard = canvas.getByText("Outline Card");
    const elevatedCard = canvas.getByText("Elevated Card");
    
    await expect(defaultCard).toBeInTheDocument();
    await expect(outlineCard).toBeInTheDocument();
    await expect(elevatedCard).toBeInTheDocument();
    
    // Test descriptions
    await expect(canvas.getByText("Standard card appearance")).toBeInTheDocument();
    await expect(canvas.getByText("Emphasized border")).toBeInTheDocument();
    await expect(canvas.getByText("Shadow effect")).toBeInTheDocument();
    
    // Test all cards have content
    const cards = canvasElement.querySelectorAll('[class*="rounded-lg"]');
    await expect(cards).toHaveLength(3);
  },
};