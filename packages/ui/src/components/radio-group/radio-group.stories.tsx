import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The controlled selected value",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the radio group is required",
    },
    orientation: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      description: "The orientation of the radio group",
    },
    name: {
      control: "text",
      description: "The name attribute for form submission",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const DefaultExample = () => {
      const [value, setValue] = useState("option1");
      return (
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="r1" />
            <label htmlFor="r1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Option 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="r2" />
            <label htmlFor="r2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Option 2
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="r3" />
            <label htmlFor="r3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Option 3
            </label>
          </div>
        </RadioGroup>
      );
    };
    return <DefaultExample />;
  },
};

export const WithLabels: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="default" />
        <label htmlFor="default" className="text-sm font-medium">
          Default
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable" />
        <label htmlFor="comfortable" className="text-sm font-medium">
          Comfortable
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="compact" />
        <label htmlFor="compact" className="text-sm font-medium">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => {
    const DisabledExample = () => {
      const [value, setValue] = useState("option1");
      return (
        <RadioGroup disabled value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="d1" />
            <label htmlFor="d1" className="text-sm font-medium opacity-50">
              Disabled Option 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="d2" />
            <label htmlFor="d2" className="text-sm font-medium opacity-50">
              Disabled Option 2
            </label>
          </div>
        </RadioGroup>
      );
    };
    return <DisabledExample />;
  },
};

export const MixedDisabled: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="m1" />
        <label htmlFor="m1" className="text-sm font-medium">
          Enabled Option
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="m2" disabled />
        <label htmlFor="m2" className="text-sm font-medium opacity-50">
          Disabled Option
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="m3" />
        <label htmlFor="m3" className="text-sm font-medium">
          Another Enabled Option
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-4">
      <label className="text-sm font-medium">
        Select your preference <span className="text-red-500">*</span>
      </label>
      <RadioGroup required>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="req-yes" />
          <label htmlFor="req-yes" className="text-sm">Yes</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="req-no" />
          <label htmlFor="req-no" className="text-sm">No</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="maybe" id="req-maybe" />
          <label htmlFor="req-maybe" className="text-sm">Maybe</label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractiveExample = () => {
      const [value, setValue] = useState("option1");
      
      return (
        <div className="space-y-4">
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="c1" />
              <label htmlFor="c1" className="text-sm font-medium">
                Option 1
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="c2" />
              <label htmlFor="c2" className="text-sm font-medium">
                Option 2
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="c3" />
              <label htmlFor="c3" className="text-sm font-medium">
                Option 3
              </label>
            </div>
          </RadioGroup>
          <p className="text-sm text-gray-600">
            Selected value: <strong>{value}</strong>
          </p>
          <div className="space-x-2">
            <button
              onClick={() => setValue("option1")}
              className="px-3 py-1 text-sm border rounded"
            >
              Select Option 1
            </button>
            <button
              onClick={() => setValue("option2")}
              className="px-3 py-1 text-sm border rounded"
            >
              Select Option 2
            </button>
            <button
              onClick={() => setValue("option3")}
              className="px-3 py-1 text-sm border rounded"
            >
              Select Option 3
            </button>
          </div>
        </div>
      );
    };
    
    return <InteractiveExample />;
  },
};

export const Horizontal: Story = {
  render: () => {
    const HorizontalExample = () => {
      const [value, setValue] = useState("");
      return (
        <RadioGroup value={value} onValueChange={setValue} orientation="horizontal" className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="h1" />
            <label htmlFor="h1" className="text-sm font-medium">
              Option 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="h2" />
            <label htmlFor="h2" className="text-sm font-medium">
              Option 2
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="h3" />
            <label htmlFor="h3" className="text-sm font-medium">
              Option 3
            </label>
          </div>
        </RadioGroup>
      );
    };
    return <HorizontalExample />;
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const WithDescriptionsExample = () => {
      const [value, setValue] = useState("standard");
      return (
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="standard" id="standard-shipping" className="mt-1" />
              <div className="grid gap-1">
                <label htmlFor="standard-shipping" className="text-sm font-medium">
                  Standard Shipping
                </label>
                <p className="text-sm text-gray-600">
                  Delivered in 5-7 business days
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="express" id="express-shipping" className="mt-1" />
              <div className="grid gap-1">
                <label htmlFor="express-shipping" className="text-sm font-medium">
                  Express Shipping
                </label>
                <p className="text-sm text-gray-600">
                  Delivered in 2-3 business days
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="overnight" id="overnight-shipping" className="mt-1" />
              <div className="grid gap-1">
                <label htmlFor="overnight-shipping" className="text-sm font-medium">
                  Overnight Shipping
                </label>
                <p className="text-sm text-gray-600">
                  Delivered next business day
                </p>
              </div>
            </div>
          </div>
        </RadioGroup>
      );
    };
    return <WithDescriptionsExample />;
  },
};

export const FormIntegration: Story = {
  render: () => {
    const FormExample = () => {
      const [notifications, setNotifications] = useState("all");
      
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted:", { notifications });
          }}
          className="space-y-4"
        >
          <fieldset>
            <legend className="text-sm font-medium mb-3">Notification Preferences</legend>
            <RadioGroup
              name="notifications"
              value={notifications}
              onValueChange={setNotifications}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="notify-all" />
                <label htmlFor="notify-all" className="text-sm">
                  All notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="important" id="notify-important" />
                <label htmlFor="notify-important" className="text-sm">
                  Important only
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="notify-none" />
                <label htmlFor="notify-none" className="text-sm">
                  No notifications
                </label>
              </div>
            </RadioGroup>
          </fieldset>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Preferences
          </button>
        </form>
      );
    };
    return <FormExample />;
  },
};

export const TileCards: Story = {
  render: () => {
    const TileCardsExample = () => {
      const [selectedFigure, setSelectedFigure] = useState("sojourner");
      
      const historicalFigures = [
        { 
          id: "sojourner", 
          name: "Sojourner Truth",
          description: "This is optional text that can be used to describe the label in more detail."
        },
        { 
          id: "frederick", 
          name: "Frederick Douglass",
          description: "This is optional text that can be used to describe the label in more detail."
        },
        { 
          id: "booker", 
          name: "Booker T. Washington",
          description: null
        },
        { 
          id: "george", 
          name: "George Washington Carver",
          description: null
        }
      ];
      
      return (
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-900">Select one historical figure</h3>
          <RadioGroup value={selectedFigure} onValueChange={setSelectedFigure}>
            <div className="space-y-2">
              {historicalFigures.map((figure) => (
                <label
                  key={figure.id}
                  htmlFor={`tile-${figure.id}`}
                  className={cn(
                    "relative flex items-start p-4 border-2 rounded cursor-pointer transition-all",
                    selectedFigure === figure.id
                      ? "border-primary bg-primary-lightest"
                      : "border-gray-30 bg-white hover:border-gray-50 hover:bg-gray-5"
                  )}
                >
                  <RadioGroupItem 
                    value={figure.id} 
                    id={`tile-${figure.id}`}
                    className="mt-0.5"
                  />
                  <div className="ml-3 flex-1">
                    <span className="block text-base font-medium text-gray-90">
                      {figure.name}
                    </span>
                    {figure.description && (
                      <span className="block mt-1 text-sm text-gray-60">
                        {figure.description}
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>
      );
    };
    return <TileCardsExample />;
  },
};

export const WithCards: Story = {
  render: () => {
    const WithCardsExample = () => {
      const [plan, setPlan] = useState("free");
      
      return (
        <RadioGroup value={plan} onValueChange={setPlan}>
          <div className="space-y-2">
            <label
              htmlFor="plan-free"
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="free" id="plan-free" />
                <div>
                  <p className="text-sm font-medium">Free Plan</p>
                  <p className="text-sm text-gray-600">Basic features for individuals</p>
                </div>
              </div>
              <span className="text-sm font-medium">$0/mo</span>
            </label>
            <label
              htmlFor="plan-pro"
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="pro" id="plan-pro" />
                <div>
                  <p className="text-sm font-medium">Pro Plan</p>
                  <p className="text-sm text-gray-600">Advanced features for professionals</p>
                </div>
              </div>
              <span className="text-sm font-medium">$19/mo</span>
            </label>
            <label
              htmlFor="plan-enterprise"
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="enterprise" id="plan-enterprise" />
                <div>
                  <p className="text-sm font-medium">Enterprise Plan</p>
                  <p className="text-sm text-gray-600">Custom solutions for teams</p>
                </div>
              </div>
              <span className="text-sm font-medium">Custom</span>
            </label>
          </div>
        </RadioGroup>
      );
    };
    return <WithCardsExample />;
  },
};

export const Playground: Story = {
  render: () => {
    const PlaygroundExample = () => {
      const [value, setValue] = useState("option1");
      const [disabled, setDisabled] = useState(false);
      const [required, setRequired] = useState(false);
      const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");
      
      return (
        <div className="space-y-4">
          <RadioGroup
            value={value}
            onValueChange={setValue}
            disabled={disabled}
            required={required}
            orientation={orientation}
            name="playground"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="p1" />
              <label htmlFor="p1" className="text-sm font-medium">
                Option 1
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="p2" />
              <label htmlFor="p2" className="text-sm font-medium">
                Option 2
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="p3" />
              <label htmlFor="p3" className="text-sm font-medium">
                Option 3
              </label>
            </div>
          </RadioGroup>
          <div className="space-y-2 p-4 border rounded">
            <h3 className="font-medium">Controls</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              <span>Disabled</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={required}
                onChange={(e) => setRequired(e.target.checked)}
              />
              <span>Required</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={orientation === "horizontal"}
                onChange={(e) => setOrientation(e.target.checked ? "horizontal" : "vertical")}
              />
              <span>Horizontal</span>
            </label>
          </div>
        </div>
      );
    };
    return <PlaygroundExample />;
  },
};