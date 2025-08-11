import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from "./alert";

const meta = {
  title: "USWDS/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "USWDS-compliant Alert component for displaying important messages to users.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error", "emergency"],
      description: "The visual style variant of the alert",
    },
    slim: {
      control: "boolean",
      description: "Use slim variant with less padding",
    },
    noIcon: {
      control: "boolean",
      description: "Hide the icon",
    },
    heading: {
      control: "text",
      description: "Optional heading for the alert",
    },
    headingLevel: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Semantic heading level",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    variant: "info",
  },
};

export const Informational: Story = {
  args: {
    variant: "info",
    heading: "Status Information",
    children: "This is an informational alert to provide neutral updates or messages to users.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    heading: "Success Status",
    children: "This is a success alert to indicate that an action was completed successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    heading: "Warning Status",
    children: "This is a warning alert to indicate potential issues that users should be aware of.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    heading: "Error Status",
    children: "This is an error alert to indicate that something went wrong and needs attention.",
  },
};

export const Emergency: Story = {
  args: {
    variant: "emergency",
    heading: "Emergency",
    children: "This is an emergency alert for critical system-wide issues.",
  },
};

export const SlimVariant: Story = {
  args: {
    variant: "info",
    slim: true,
    children: "This is a slim alert with reduced padding.",
  },
};

export const NoIcon: Story = {
  args: {
    variant: "success",
    noIcon: true,
    heading: "Success",
    children: "This alert is displayed without an icon.",
  },
};

export const ValidationError: Story = {
  args: {
    variant: "error",
    validation: true,
    heading: "There were errors in your submission",
    children: (
      <ul className="list-disc pl-5 mt-2">
        <li>Please enter a valid email address</li>
        <li>Password must be at least 8 characters</li>
        <li>Please accept the terms and conditions</li>
      </ul>
    ),
  },
};

export const LongContent: Story = {
  args: {
    variant: "info",
    heading: "Important Information",
    children: (
      <>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p className="mb-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          <a href="#" className="underline font-semibold">
            Learn more about this topic
          </a>
        </p>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" heading="Informational">
        This is an informational alert.
      </Alert>
      <Alert variant="success" heading="Success">
        This is a success alert.
      </Alert>
      <Alert variant="warning" heading="Warning">
        This is a warning alert.
      </Alert>
      <Alert variant="error" heading="Error">
        This is an error alert.
      </Alert>
      <Alert variant="emergency" heading="Emergency">
        This is an emergency alert.
      </Alert>
    </div>
  ),
};
