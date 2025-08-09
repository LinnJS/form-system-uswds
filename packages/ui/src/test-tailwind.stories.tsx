import type { Meta, StoryObj } from "@storybook/react";

const TestComponent = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold text-primary-600">Tailwind Test</h1>
      <div className="bg-primary-500 text-white p-4 rounded-lg">
        Primary Color Box
      </div>
      <div className="bg-secondary-500 text-white p-4 rounded-lg">
        Secondary Color Box
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        Standard Blue Box
      </div>
      <div className="bg-gradient-to-r from-primary-400 to-secondary-400 text-white p-4 rounded-lg">
        Gradient Box
      </div>
    </div>
  );
};

const meta = {
  title: "Test/TailwindCSS",
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};