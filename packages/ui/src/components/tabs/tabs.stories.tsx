import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The active tab value",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const DefaultExample = () => {
      const [value, setValue] = useState("account");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Account</h3>
              <p className="text-sm text-gray-600">
                Make changes to your account here. Click save when you're done.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Password</h3>
              <p className="text-sm text-gray-600">
                Change your password here. After saving, you'll be logged out.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      );
    };
    
    return <DefaultExample />;
  },
};

export const ThreeTabs: Story = {
  render: () => {
    const ThreeTabsExample = () => {
      const [value, setValue] = useState("tab1");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Overview</h3>
              <p className="text-sm text-gray-600">
                Get a comprehensive overview of your account activity and recent updates.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Analytics</h3>
              <p className="text-sm text-gray-600">
                View detailed analytics and insights about your performance metrics.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Reports</h3>
              <p className="text-sm text-gray-600">
                Generate and download comprehensive reports for your records.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      );
    };
    
    return <ThreeTabsExample />;
  },
};

export const WithDisabled: Story = {
  render: () => {
    const WithDisabledExample = () => {
      const [value, setValue] = useState("active");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[400px]">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
            <TabsTrigger value="another">Another</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>This tab is active and can be selected.</p>
          </TabsContent>
          <TabsContent value="disabled">
            <p>This content is not accessible because the tab is disabled.</p>
          </TabsContent>
          <TabsContent value="another">
            <p>This is another active tab.</p>
          </TabsContent>
        </Tabs>
      );
    };
    
    return <WithDisabledExample />;
  },
};

export const Interactive: Story = {
  render: () => {
    const ControlledExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");
      
      return (
        <div className="space-y-4">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("tab1")}
            >
              Go to Tab 1
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("tab2")}
            >
              Go to Tab 2
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("tab3")}
            >
              Go to Tab 3
            </Button>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Tab 3</p>
            </TabsContent>
          </Tabs>
          <p className="text-sm text-gray-600">
            Active tab: <strong>{activeTab}</strong>
          </p>
        </div>
      );
    };
    
    return <ControlledExample />;
  },
};

export const WithForms: Story = {
  render: () => {
    const WithFormsExample = () => {
      const [value, setValue] = useState("general");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[500px]">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="space-y-4">
        <h3 className="text-lg font-medium">General Settings</h3>
        <div className="space-y-2">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="johndoe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <Button variant="primary">Save Changes</Button>
      </TabsContent>
      <TabsContent value="security" className="space-y-4">
        <h3 className="text-lg font-medium">Security Settings</h3>
        <div className="space-y-2">
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium mb-1">
              Current Password
            </label>
            <input
              id="current-password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium mb-1">
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <Button variant="primary">Update Password</Button>
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm">Email notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-sm">SMS notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm">Push notifications</span>
          </label>
        </div>
        <Button variant="primary">Save Preferences</Button>
      </TabsContent>
    </Tabs>
      );
    };
    
    return <WithFormsExample />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const WithIconsExample = () => {
      const [value, setValue] = useState("home");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="home">
          <span className="flex items-center gap-2">
            <span>🏠</span>
            Home
          </span>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <span className="flex items-center gap-2">
            <span>👤</span>
            Profile
          </span>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <span className="flex items-center gap-2">
            <span>⚙️</span>
            Settings
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <p>Welcome to your home dashboard.</p>
      </TabsContent>
      <TabsContent value="profile">
        <p>Manage your profile information here.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
      );
    };
    
    return <WithIconsExample />;
  },
};

export const VerticalOrientation: Story = {
  render: () => {
    const VerticalExample = () => {
      const [value, setValue] = useState("overview");
      
      return (
        <Tabs value={value} onValueChange={setValue} orientation="vertical" className="flex gap-4 w-[600px]">
      <TabsList className="flex-col h-fit w-[200px]">
        <TabsTrigger value="overview" className="w-full justify-start">
          Overview
        </TabsTrigger>
        <TabsTrigger value="customers" className="w-full justify-start">
          Customers
        </TabsTrigger>
        <TabsTrigger value="products" className="w-full justify-start">
          Products
        </TabsTrigger>
        <TabsTrigger value="settings" className="w-full justify-start">
          Settings
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="overview">
          <h3 className="text-lg font-medium mb-2">Overview</h3>
          <p className="text-sm text-gray-600">
            View your business overview and key metrics here.
          </p>
        </TabsContent>
        <TabsContent value="customers">
          <h3 className="text-lg font-medium mb-2">Customers</h3>
          <p className="text-sm text-gray-600">
            Manage your customer relationships and data.
          </p>
        </TabsContent>
        <TabsContent value="products">
          <h3 className="text-lg font-medium mb-2">Products</h3>
          <p className="text-sm text-gray-600">
            View and manage your product catalog.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <h3 className="text-lg font-medium mb-2">Settings</h3>
          <p className="text-sm text-gray-600">
            Configure your business settings and preferences.
          </p>
        </TabsContent>
      </div>
    </Tabs>
      );
    };
    
    return <VerticalExample />;
  },
};

export const WithBadges: Story = {
  render: () => {
    const WithBadgesExample = () => {
      const [value, setValue] = useState("inbox");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="inbox">
          <span className="flex items-center gap-2">
            Inbox
            <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              3
            </span>
          </span>
        </TabsTrigger>
        <TabsTrigger value="sent">Sent</TabsTrigger>
        <TabsTrigger value="drafts">
          <span className="flex items-center gap-2">
            Drafts
            <span className="px-2 py-0.5 text-xs bg-gray-400 text-white rounded-full">
              1
            </span>
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">
        <p>You have 3 new messages in your inbox.</p>
      </TabsContent>
      <TabsContent value="sent">
        <p>Your sent messages appear here.</p>
      </TabsContent>
      <TabsContent value="drafts">
        <p>You have 1 draft message.</p>
      </TabsContent>
    </Tabs>
      );
    };
    
    return <WithBadgesExample />;
  },
};

export const LongContent: Story = {
  render: () => {
    const LongContentExample = () => {
      const [value, setValue] = useState("description");
      
      return (
        <Tabs value={value} onValueChange={setValue} className="w-[600px]">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="max-h-[300px] overflow-y-auto">
        <h3 className="text-lg font-medium mb-3">Product Description</h3>
        <div className="space-y-3 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="specifications">
        <h3 className="text-lg font-medium mb-3">Technical Specifications</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium">Dimensions</td>
              <td className="py-2 text-gray-600">10" x 8" x 2"</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Weight</td>
              <td className="py-2 text-gray-600">2.5 lbs</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Material</td>
              <td className="py-2 text-gray-600">Aluminum</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Warranty</td>
              <td className="py-2 text-gray-600">2 years</td>
            </tr>
          </tbody>
        </table>
      </TabsContent>
      <TabsContent value="reviews">
        <h3 className="text-lg font-medium mb-3">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="border-b pb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">John D.</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-sm text-gray-600">Great product! Exactly what I needed.</p>
          </div>
          <div className="border-b pb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">Sarah M.</span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
            <p className="text-sm text-gray-600">Good quality, but shipping was slow.</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
      );
    };
    
    return <LongContentExample />;
  },
};

export const Playground: Story = {
  render: () => {
    const PlaygroundExample = () => {
      const [value, setValue] = useState("tab1");
      const [orientation] = useState<"horizontal" | "vertical">("horizontal");
      
      return (
        <Tabs 
          value={value} 
          onValueChange={setValue} 
          orientation={orientation}
          className="w-[400px]"
        >
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p>Content for Tab 3</p>
          </TabsContent>
        </Tabs>
      );
    };
    
    return <PlaygroundExample />;
  },
};