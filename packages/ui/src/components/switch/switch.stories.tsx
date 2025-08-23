import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "The controlled checked state of the switch",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the switch is required",
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const DefaultExample = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };
    return <DefaultExample />;
  },
};

export const Checked: Story = {
  render: () => {
    const CheckedExample = () => {
      const [checked, setChecked] = useState(true);
      return (
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };
    return <CheckedExample />;
  },
};

export const Unchecked: Story = {
  render: () => {
    const UncheckedExample = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };
    return <UncheckedExample />;
  },
};

export const Disabled: Story = {
  render: () => {
    const DisabledExample = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          disabled
        />
      );
    };
    return <DisabledExample />;
  },
};

export const DisabledChecked: Story = {
  render: () => {
    const DisabledCheckedExample = () => {
      const [checked, setChecked] = useState(true);
      return (
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          disabled
        />
      );
    };
    return <DisabledCheckedExample />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const WithLabelExample = () => {
      const [checked, setChecked] = useState(false);
      return (
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="airplane-mode"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Airplane Mode
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
      const [checked, setChecked] = useState(false);
      return (
        <div className="flex items-center space-x-2">
          <Switch
            id="terms"
            checked={checked}
            onCheckedChange={setChecked}
            required
          />
          <label htmlFor="terms" className="text-sm font-medium leading-none">
            Accept terms and conditions <span className="text-red-500">*</span>
          </label>
        </div>
      );
    };
    return <RequiredExample />;
  },
};

export const Interactive: Story = {
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="controlled"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <label htmlFor="controlled" className="text-sm font-medium">
              Interactive switch
            </label>
          </div>
          <p className="text-sm text-gray-600">
            Switch is: <strong>{checked ? "On" : "Off"}</strong>
          </p>
          <div className="space-x-2">
            <button
              onClick={() => setChecked(true)}
              className="px-3 py-1 text-sm border rounded"
            >
              Turn On
            </button>
            <button
              onClick={() => setChecked(false)}
              className="px-3 py-1 text-sm border rounded"
            >
              Turn Off
            </button>
            <button
              onClick={() => setChecked(!checked)}
              className="px-3 py-1 text-sm border rounded"
            >
              Toggle
            </button>
          </div>
        </div>
      );
    };
    
    return <ControlledExample />;
  },
};

export const SwitchGroup: Story = {
  render: () => {
    const SwitchGroupExample = () => {
      const [settings, setSettings] = useState({
        notifications: true,
        marketing: false,
        analytics: true,
        performance: true,
      });
      
      const handleChange = (key: keyof typeof settings) => (checked: boolean) => {
        setSettings(prev => ({ ...prev, [key]: checked }));
      };
      
      return (
        <div className="space-y-4">
          <h3 className="text-sm font-medium mb-3">Privacy Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="notifications" className="text-sm font-medium">
                Push Notifications
              </label>
              <Switch
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={handleChange("notifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="marketing" className="text-sm font-medium">
                Marketing Emails
              </label>
              <Switch
                id="marketing"
                checked={settings.marketing}
                onCheckedChange={handleChange("marketing")}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="analytics" className="text-sm font-medium">
                Analytics Cookies
              </label>
              <Switch
                id="analytics"
                checked={settings.analytics}
                onCheckedChange={handleChange("analytics")}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="performance" className="text-sm font-medium">
                Performance Cookies
              </label>
              <Switch
                id="performance"
                checked={settings.performance}
                onCheckedChange={handleChange("performance")}
              />
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600">
              Current settings: {JSON.stringify(settings, null, 2)}
            </p>
          </div>
        </div>
      );
    };
    
    return <SwitchGroupExample />;
  },
};

export const WithDescription: Story = {
  render: () => {
    const WithDescriptionExample = () => {
      const [autoSave, setAutoSave] = useState(true);
      const [darkMode, setDarkMode] = useState(false);
      const [twoFactor, setTwoFactor] = useState(true);
      
      return (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Switch
              id="auto-save"
              className="mt-1"
              checked={autoSave}
              onCheckedChange={setAutoSave}
            />
            <div className="space-y-1">
              <label htmlFor="auto-save" className="text-sm font-medium">
                Auto-save
              </label>
              <p className="text-sm text-gray-600">
                Automatically save your changes as you work
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Switch
              id="dark-mode"
              className="mt-1"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
            <div className="space-y-1">
              <label htmlFor="dark-mode" className="text-sm font-medium">
                Dark mode
              </label>
              <p className="text-sm text-gray-600">
                Enable dark theme for better viewing in low light
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Switch
              id="2fa"
              className="mt-1"
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
            />
            <div className="space-y-1">
              <label htmlFor="2fa" className="text-sm font-medium">
                Two-factor authentication
              </label>
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
        </div>
      );
    };
    return <WithDescriptionExample />;
  },
};

export const FormIntegration: Story = {
  render: () => {
    const FormExample = () => {
      const [newsletter, setNewsletter] = useState(false);
      const [updates, setUpdates] = useState(true);
      const [tips, setTips] = useState(false);
      
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted:", { newsletter, updates, tips });
          }}
          className="space-y-4"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="newsletter" className="text-sm font-medium">
                Subscribe to newsletter
              </label>
              <Switch
                id="newsletter"
                name="newsletter"
                value="yes"
                checked={newsletter}
                onCheckedChange={setNewsletter}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="updates" className="text-sm font-medium">
                Product updates
              </label>
              <Switch
                id="updates"
                name="updates"
                value="yes"
                checked={updates}
                onCheckedChange={setUpdates}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="tips" className="text-sm font-medium">
                Tips and tutorials
              </label>
              <Switch
                id="tips"
                name="tips"
                value="yes"
                checked={tips}
                onCheckedChange={setTips}
              />
            </div>
          </div>
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

export const CustomStyling: Story = {
  render: () => {
    const CustomStylingExample = () => {
      const [premium, setPremium] = useState(false);
      const [eco, setEco] = useState(true);
      const [beta, setBeta] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-blue-900">Premium Feature</h4>
                <p className="text-sm text-blue-700">Enable advanced analytics</p>
              </div>
              <Switch
                className="data-[state=checked]:bg-blue-600"
                checked={premium}
                onCheckedChange={setPremium}
              />
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-green-900">Eco Mode</h4>
                <p className="text-sm text-green-700">Reduce energy consumption</p>
              </div>
              <Switch
                className="data-[state=checked]:bg-green-600"
                checked={eco}
                onCheckedChange={setEco}
              />
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-purple-900">Beta Features</h4>
                <p className="text-sm text-purple-700">Try experimental features</p>
              </div>
              <Switch
                className="data-[state=checked]:bg-purple-600"
                checked={beta}
                onCheckedChange={setBeta}
              />
            </div>
          </div>
        </div>
      );
    };
    return <CustomStylingExample />;
  },
};

export const States: Story = {
  render: () => {
    const StatesExample = () => {
      const [off, setOff] = useState(false);
      const [on, setOn] = useState(true);
      const [disabledOff, setDisabledOff] = useState(false);
      const [disabledOn, setDisabledOn] = useState(true);
      const [required, setRequired] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Off</span>
            <Switch checked={off} onCheckedChange={setOff} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">On</span>
            <Switch checked={on} onCheckedChange={setOn} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Disabled Off</span>
            <Switch checked={disabledOff} onCheckedChange={setDisabledOff} disabled />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Disabled On</span>
            <Switch checked={disabledOn} onCheckedChange={setDisabledOn} disabled />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Required</span>
            <Switch checked={required} onCheckedChange={setRequired} required />
          </div>
        </div>
      );
    };
    return <StatesExample />;
  },
};

export const Playground: Story = {
  render: () => {
    const PlaygroundExample = () => {
      const [checked, setChecked] = useState(false);
      const [disabled, setDisabled] = useState(false);
      const [required, setRequired] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Switch
              checked={checked}
              onCheckedChange={setChecked}
              disabled={disabled}
              required={required}
              name="playground"
              value="on"
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