import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge, Identifier, Tag } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "USWDS-compliant Badge and Tag components for labeling and categorization with color variants matching alert types.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    big: {
      control: "boolean",
      description: "Whether to use the big variant",
    },
    variant: {
      control: "select",
      options: ["default", "info", "warning", "error", "success", "emergency"],
      description: "Color variant matching alert types",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const Emergency: Story = {
  args: {
    children: "Emergency",
    variant: "emergency",
  },
};

export const Big: Story = {
  args: {
    children: "Big Tag",
    big: true,
    variant: "default",
  },
};

export const BigSuccess: Story = {
  args: {
    children: "Approved",
    big: true,
    variant: "success",
  },
};

export const BigWarning: Story = {
  args: {
    children: "Pending",
    big: true,
    variant: "warning",
  },
};

export const BigError: Story = {
  args: {
    children: "Rejected",
    big: true,
    variant: "error",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="emergency">Emergency</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="default" big>
          Default Big
        </Badge>
        <Badge variant="info" big>
          Info Big
        </Badge>
        <Badge variant="success" big>
          Success Big
        </Badge>
        <Badge variant="warning" big>
          Warning Big
        </Badge>
        <Badge variant="error" big>
          Error Big
        </Badge>
        <Badge variant="emergency" big>
          Emergency Big
        </Badge>
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-gray-70">Order Status:</span>
        <Badge variant="success">Completed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-70">Payment:</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-70">Verification:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-70">Priority:</span>
        <Badge variant="emergency">Urgent</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-70">Notice:</span>
        <Badge variant="info">New Feature</Badge>
      </div>
    </div>
  ),
};

export const CategoryTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Technology</Tag>
      <Tag>Healthcare</Tag>
      <Tag>Education</Tag>
      <Tag>Finance</Tag>
      <Tag big>Featured</Tag>
      <Tag variant="success" big>
        Active
      </Tag>
      <Tag variant="error" big>
        Expired
      </Tag>
    </div>
  ),
};

const IdentifierStory: Story = {
  render: () => (
    <Identifier
      agency="General Services Administration"
      parentAgency="U.S. Government"
      requiredLinks={[
        { href: "#", text: "About" },
        { href: "#", text: "Accessibility" },
        { href: "#", text: "FOIA requests" },
        { href: "#", text: "Privacy policy" },
      ]}
    />
  ),
};

export { IdentifierStory as Identifier };
