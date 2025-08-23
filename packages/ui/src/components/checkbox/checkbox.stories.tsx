import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "radio" },
      options: [true, false, "indeterminate"],
      description: "The checked state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
    },
    name: {
      control: "text",
      description: "The name attribute for form submission",
    },
    value: {
      control: "text",
      description: "The value attribute for form submission",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const DefaultExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      
      const handleChange = (value: boolean | "indeterminate") => {
        console.log("[Default] onCheckedChange called with:", value, "type:", typeof value);
        setChecked(value);
      };
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={handleChange}
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)}</span>
        </div>
      );
    };
    return <DefaultExample />;
  },
};

export const Checked: Story = {
  render: () => {
    const CheckedExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(true);
      
      const handleChange = (value: boolean | "indeterminate") => {
        console.log("[Checked] onCheckedChange called with:", value, "type:", typeof value);
        setChecked(value);
      };
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={handleChange}
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)}</span>
        </div>
      );
    };
    return <CheckedExample />;
  },
};

export const Unchecked: Story = {
  render: () => {
    const UncheckedExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      
      const handleChange = (value: boolean | "indeterminate") => {
        console.log("[Unchecked] onCheckedChange called with:", value, "type:", typeof value);
        setChecked(value);
      };
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={handleChange}
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)}</span>
        </div>
      );
    };
    return <UncheckedExample />;
  },
};

export const Indeterminate: Story = {
  render: () => {
    const IndeterminateExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate");
      
      const handleChange = (value: boolean | "indeterminate") => {
        console.log("[Indeterminate] onCheckedChange called with:", value, "type:", typeof value);
        setChecked(value);
      };
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={handleChange}
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)}</span>
        </div>
      );
    };
    return <IndeterminateExample />;
  },
};

export const Disabled: Story = {
  render: () => {
    const DisabledExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            disabled
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)} (disabled)</span>
        </div>
      );
    };
    return <DisabledExample />;
  },
};

export const DisabledChecked: Story = {
  render: () => {
    const DisabledCheckedExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(true);
      
      return (
        <div>
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            disabled
          />
          <span style={{ marginLeft: "8px" }}>State: {String(checked)} (disabled)</span>
        </div>
      );
    };
    return <DisabledCheckedExample />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const WithLabelExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      );
    };
    return <WithLabelExample />;
  },
};

export const Required: Story = {
  render: () => {
    const RequiredExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id="required"
            checked={checked}
            onCheckedChange={setChecked}
            required
          />
          <label htmlFor="required" className="text-sm font-medium leading-none">
            Required field <span className="text-red-500">*</span>
          </label>
        </div>
      );
    };
    return <RequiredExample />;
  },
};

export const Interactive: Story = {
  render: () => {
    const InteractiveExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="interactive"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <label htmlFor="interactive" className="text-sm font-medium">
              Interactive checkbox
            </label>
          </div>
          <p className="text-sm text-gray-600">
            Current state: {String(checked)}
          </p>
          <div className="space-x-2">
            <button
              onClick={() => setChecked(true)}
              className="px-3 py-1 text-sm border rounded"
            >
              Check
            </button>
            <button
              onClick={() => setChecked(false)}
              className="px-3 py-1 text-sm border rounded"
            >
              Uncheck
            </button>
            <button
              onClick={() => setChecked("indeterminate")}
              className="px-3 py-1 text-sm border rounded"
            >
              Indeterminate
            </button>
          </div>
        </div>
      );
    };
    
    return <InteractiveExample />;
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const CheckboxGroupExample = () => {
      const [selectedItems, setSelectedItems] = useState<string[]>([]);
      
      const items = [
        { id: "option1", label: "Option 1" },
        { id: "option2", label: "Option 2" },
        { id: "option3", label: "Option 3" },
        { id: "option4", label: "Option 4" },
      ];
      
      const handleCheckedChange = (id: string, checked: boolean | "indeterminate") => {
        if (checked === true) {
          setSelectedItems([...selectedItems, id]);
        } else {
          setSelectedItems(selectedItems.filter(item => item !== id));
        }
      };
      
      return (
        <div className="space-y-4">
          <fieldset>
            <legend className="text-sm font-medium mb-3">Select options:</legend>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.id}
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={(checked) => handleCheckedChange(item.id, checked)}
                  />
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <p className="text-sm text-gray-600">
            Selected: {selectedItems.join(", ") || "None"}
          </p>
        </div>
      );
    };
    
    return <CheckboxGroupExample />;
  },
};

export const FormIntegration: Story = {
  render: () => {
    const FormExample = () => {
      const [newsletter, setNewsletter] = useState(false);
      const [terms, setTerms] = useState(false);
      const [privacy, setPrivacy] = useState(false);
      
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted:", { newsletter, terms, privacy });
          }}
          className="space-y-4"
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                name="newsletter"
                value="yes"
                checked={newsletter}
                onCheckedChange={(checked) => setNewsletter(checked === true)}
              />
              <label htmlFor="newsletter" className="text-sm font-medium">
                Subscribe to newsletter
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                name="terms"
                value="accepted"
                checked={terms}
                onCheckedChange={(checked) => setTerms(checked === true)}
                required
              />
              <label htmlFor="terms" className="text-sm font-medium">
                I accept the terms and conditions <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                name="privacy"
                value="accepted"
                checked={privacy}
                onCheckedChange={(checked) => setPrivacy(checked === true)}
              />
              <label htmlFor="privacy" className="text-sm font-medium">
                I have read the privacy policy
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={!terms}
          >
            Submit
          </button>
        </form>
      );
    };
    return <FormExample />;
  },
};

export const Sizes: Story = {
  render: () => {
    const SizesExample = () => {
      const [small, setSmall] = useState<boolean | "indeterminate">(false);
      const [medium, setMedium] = useState<boolean | "indeterminate">(false);
      const [large, setLarge] = useState<boolean | "indeterminate">(false);
      
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="small"
              className="size-4"
              checked={small}
              onCheckedChange={setSmall}
            />
            <label htmlFor="small" className="text-sm">Small checkbox</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="medium"
              checked={medium}
              onCheckedChange={setMedium}
            />
            <label htmlFor="medium" className="text-sm">Default checkbox</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="large"
              className="size-6"
              checked={large}
              onCheckedChange={setLarge}
            />
            <label htmlFor="large" className="text-sm">Large checkbox</label>
          </div>
        </div>
      );
    };
    return <SizesExample />;
  },
};

export const DebugTest: Story = {
  render: () => {
    const DebugTestExample = () => {
      const [checked1, setChecked1] = useState<boolean | "indeterminate">(false);
      const [checked2, setChecked2] = useState<boolean | "indeterminate">(true);
      const [checked3, setChecked3] = useState<boolean | "indeterminate">("indeterminate");
      
      return (
        <div style={{ padding: "20px" }}>
          <h3>Debug Test - Check Console</h3>
          
          <div style={{ marginBottom: "16px" }}>
            <Checkbox
              checked={checked1}
              onCheckedChange={(value) => {
                console.log("[Debug] Checkbox 1:", value);
                setChecked1(value);
              }}
            />
            <span style={{ marginLeft: "8px" }}>Initially false - State: {String(checked1)}</span>
          </div>
          
          <div style={{ marginBottom: "16px" }}>
            <Checkbox
              checked={checked2}
              onCheckedChange={(value) => {
                console.log("[Debug] Checkbox 2:", value);
                setChecked2(value);
              }}
            />
            <span style={{ marginLeft: "8px" }}>Initially true - State: {String(checked2)}</span>
          </div>
          
          <div style={{ marginBottom: "16px" }}>
            <Checkbox
              checked={checked3}
              onCheckedChange={(value) => {
                console.log("[Debug] Checkbox 3:", value);
                setChecked3(value);
              }}
            />
            <span style={{ marginLeft: "8px" }}>Initially indeterminate - State: {String(checked3)}</span>
          </div>
        </div>
      );
    };
    return <DebugTestExample />;
  },
};

export const Playground: Story = {
  render: () => {
    const PlaygroundExample = () => {
      const [checked, setChecked] = useState<boolean | "indeterminate">(false);
      const [disabled, setDisabled] = useState(false);
      const [required, setRequired] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Checkbox
              checked={checked}
              onCheckedChange={setChecked}
              disabled={disabled}
              required={required}
              name="playground"
              value="test"
            />
          </div>
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
          </div>
        </div>
      );
    };
    return <PlaygroundExample />;
  },
};