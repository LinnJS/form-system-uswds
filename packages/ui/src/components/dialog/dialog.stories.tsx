import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save changes?</DialogTitle>
          <DialogDescription>
            You have unsaved changes. Would you like to save them before continuing?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">View Terms</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read and accept our terms and conditions to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <h3 className="font-semibold">1. Introduction</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="font-semibold">2. Terms of Use</h3>
          <p className="text-sm text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="font-semibold">3. Privacy Policy</h3>
          <p className="text-sm text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <h3 className="font-semibold">4. Data Protection</h3>
          <p className="text-sm text-gray-600">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button variant="primary">Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="John Doe"
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
          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </div>
        </form>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to delete your account?
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">
              <strong>Warning:</strong> This action cannot be undone. All of your data
              will be permanently deleted and you will be unable to recover your account.
            </p>
          </div>
          <div className="mt-4">
            <label htmlFor="confirm" className="block text-sm font-medium mb-1">
              Type "DELETE" to confirm
            </label>
            <input
              id="confirm"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Type DELETE to confirm"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="secondary" disabled>
            Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractiveExample = () => {
      const [open, setOpen] = useState(false);
      
      return (
        <div className="space-y-4">
          <div className="space-x-2">
            <Button variant="primary" onClick={() => setOpen(true)}>
              Open Dialog
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close Dialog
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Dialog is: {open ? "Open" : "Closed"}
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Controlled Dialog</DialogTitle>
                <DialogDescription>
                  This dialog is controlled by state. You can open and close it
                  programmatically.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Dialog content goes here...</p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button variant="primary">Action</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    };
    
    return <InteractiveExample />;
  },
};

export const CustomStyling: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Custom Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="bg-blue-50 -m-6 mb-4 p-6 rounded-t-lg">
          <DialogTitle className="text-blue-900">Custom Styled Dialog</DialogTitle>
          <DialogDescription className="text-blue-700">
            This dialog demonstrates custom styling capabilities.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold mb-2">Section 1</h3>
            <p className="text-sm text-gray-600">
              Custom background and padding applied to this section.
            </p>
          </div>
          <div className="p-4 border-2 border-dashed border-gray-300 rounded-md">
            <h3 className="font-semibold mb-2">Section 2</h3>
            <p className="text-sm text-gray-600">
              Custom border styling applied to this section.
            </p>
          </div>
        </div>
        <DialogFooter className="bg-gray-50 -m-6 mt-4 p-6 rounded-b-lg">
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const MultipleDialogs: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open First Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>First Dialog</DialogTitle>
          <DialogDescription>
            This is the first dialog. You can open another dialog from here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Second Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Second Dialog</DialogTitle>
                <DialogDescription>
                  This is a nested dialog opened from the first dialog.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="primary">Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <DialogFooter>
          <Button variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Playground: Story = {
  args: {
    open: false,
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Playground Dialog</DialogTitle>
          <DialogDescription>
            Use the controls to experiment with different dialog configurations.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content can be customized here.</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};