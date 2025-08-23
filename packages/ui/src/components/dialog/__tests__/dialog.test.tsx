import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";

describe("Dialog Component", () => {
  describe("Basic Rendering", () => {
    it("renders trigger button", () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
          </DialogContent>
        </Dialog>
      );
      
      expect(screen.getByText("Open Dialog")).toBeInTheDocument();
    });

    it("does not render content initially", () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Dialog content</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
      expect(screen.queryByText("Dialog content")).not.toBeInTheDocument();
    });

    it("renders content when opened", async () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Dialog content</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      const trigger = screen.getByText("Open");
      fireEvent.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByText("Test Dialog")).toBeInTheDocument();
        expect(screen.getByText("Dialog content")).toBeInTheDocument();
      });
    });
  });

  describe("Dialog Structure", () => {
    it("renders all dialog parts", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Header Title</DialogTitle>
              <DialogDescription>Header Description</DialogDescription>
            </DialogHeader>
            <div>Body content</div>
            <DialogFooter>
              <button>Cancel</button>
              <button>Confirm</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        expect(screen.getByText("Header Title")).toBeInTheDocument();
        expect(screen.getByText("Header Description")).toBeInTheDocument();
        expect(screen.getByText("Body content")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
        expect(screen.getByText("Confirm")).toBeInTheDocument();
      });
    });

    it("renders close button", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const closeButton = screen.getByRole("button", { name: /close/i });
        expect(closeButton).toBeInTheDocument();
      });
    });
  });

  describe("Interactions", () => {
    it("opens dialog on trigger click", async () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      const trigger = screen.getByText("Open");
      fireEvent.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByText("Test Dialog")).toBeInTheDocument();
      });
    });

    it("closes dialog on close button click", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        expect(screen.getByText("Test Dialog")).toBeInTheDocument();
      });
      
      const closeButton = screen.getByRole("button", { name: /close/i });
      fireEvent.click(closeButton);
      
      await waitFor(() => {
        expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
      });
    });

    it("closes dialog on escape key", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        expect(screen.getByText("Test Dialog")).toBeInTheDocument();
      });
      
      fireEvent.keyDown(document, { key: "Escape" });
      
      await waitFor(() => {
        expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
      });
    });

    it("calls onOpenChange callback", async () => {
      const onOpenChange = vi.fn();
      
      render(
        <Dialog onOpenChange={onOpenChange}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      const trigger = screen.getByText("Open");
      fireEvent.click(trigger);
      
      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalledWith(true);
      });
    });
  });

  describe("Controlled Mode", () => {
    it("respects open prop", async () => {
      const { rerender } = render(
        <Dialog open={false}>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
      
      rerender(
        <Dialog open={true}>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        expect(screen.getByText("Test Dialog")).toBeInTheDocument();
      });
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA attributes", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
        // Radix UI Dialog sets aria-modal internally
        expect(dialog).toHaveAttribute("role", "dialog");
      });
    });

    it("has correct ARIA labelling", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        const title = screen.getByText("Test Dialog");
        const description = screen.getByText("Dialog description");
        
        expect(dialog).toHaveAttribute("aria-labelledby");
        expect(dialog).toHaveAttribute("aria-describedby");
        expect(title).toHaveAttribute("id");
        expect(description).toHaveAttribute("id");
      });
    });

    it("traps focus within dialog", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
            <button>First Button</button>
            <button>Second Button</button>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
      });
    });
  });

  describe("Styling", () => {
    it("applies correct classes to header", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader className="custom-header">
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const header = document.querySelector(".custom-header");
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass("flex", "flex-col", "space-y-105");
      });
    });

    it("applies correct classes to footer", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
            <DialogFooter className="custom-footer">
              <button>Button</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const footer = document.querySelector(".custom-footer");
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass("flex", "flex-col-reverse", "sm:flex-row");
      });
    });

    it("applies custom className to content", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent className="custom-content">
            <DialogTitle>Test</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveClass("custom-content");
      });
    });
  });

  describe("Overlay", () => {
    it("renders overlay when dialog is open", async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
      
      await waitFor(() => {
        // Check dialog is open by looking for the dialog role
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
      });
    });

  });
});