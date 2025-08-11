import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge, Tag } from "./badge";

const meta = {
  title: "USWDS/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "USWDS-compliant Badge and Tag components for labeling and categorization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    big: {
      control: "boolean",
      description: "Whether to use the big variant",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
  },
};

export const New: Story = {
  args: {
    children: "NEW",
  },
};

export const BigVariant: Story = {
  args: {
    children: "5",
    big: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge>Default</Badge>
      <Badge big>Big Variant</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge>Primary</Badge>
      <Badge>Secondary</Badge>
      <Badge>Success</Badge>
      <Badge>Warning</Badge>
      <Badge>Error</Badge>
      <Badge>Info</Badge>
      <Badge>Outline</Badge>
      <Badge>NEW</Badge>
      <Badge big>Big Badge</Badge>
    </div>
  ),
};

export const Tags: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Status Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>Draft</Tag>
          <Tag>In Review</Tag>
          <Tag>Approved</Tag>
          <Tag>Pending</Tag>
          <Tag>Rejected</Tag>
          <Tag>Archived</Tag>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Category Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>Technology</Tag>
          <Tag>Healthcare</Tag>
          <Tag>Education</Tag>
          <Tag>Finance</Tag>
          <Tag>Government</Tag>
        </div>
      </div>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div className="border rounded-lg p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">Application Status</h3>
          <Badge>Approved</Badge>
        </div>
        <p className="text-gray-600">
          Your application has been reviewed and approved. You will receive further instructions via
          email.
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">Document Review</h3>
          <Badge>Pending</Badge>
        </div>
        <p className="text-gray-600">
          Your documents are currently under review. This process typically takes 3-5 business days.
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex items-start gap-2 mb-2">
          <h3 className="text-lg font-semibold">New Feature</h3>
          <Badge>
            NEW
          </Badge>
        </div>
        <p className="text-gray-600">
          Check out our latest feature that allows you to track your application in real-time.
        </p>
      </div>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="relative">
        <button className="px-4 py-2 border rounded-md">Messages</button>
        <Badge className="absolute -top-2 -right-2 rounded-full px-2">
          3
        </Badge>
      </div>

      <div className="relative">
        <button className="px-4 py-2 border rounded-md">Notifications</button>
        <Badge big className="absolute -top-2 -right-2">
          12
        </Badge>
      </div>

      <div className="relative">
        <button className="px-4 py-2 border rounded-md">Updates</button>
        <Badge className="absolute -top-2 -right-2">
          NEW
        </Badge>
      </div>
    </div>
  ),
};
