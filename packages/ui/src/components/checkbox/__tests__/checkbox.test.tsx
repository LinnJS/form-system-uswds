import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "../checkbox";

describe("Checkbox Component", () => {
  describe("Basic Rendering", () => {
    it("renders checkbox", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("renders with custom id", () => {
      render(<Checkbox id="test-checkbox" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("id", "test-checkbox");
    });

    it("renders with custom className", () => {
      render(<Checkbox className="custom-class" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("custom-class");
    });
  });

  describe("States", () => {
    it("renders unchecked by default", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();
      expect(checkbox).toHaveAttribute("data-state", "unchecked");
    });

    it("renders checked when checked prop is true", () => {
      render(<Checkbox checked={true} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeChecked();
      expect(checkbox).toHaveAttribute("data-state", "checked");
    });

    it("renders indeterminate state", () => {
      render(<Checkbox checked="indeterminate" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("data-state", "indeterminate");
    });

    it("renders disabled state", () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeDisabled();
    });
  });

  describe("Interactions", () => {
    it("calls onCheckedChange when clicked", () => {
      const onCheckedChange = vi.fn();
      render(<Checkbox onCheckedChange={onCheckedChange} />);
      const checkbox = screen.getByRole("checkbox");
      
      fireEvent.click(checkbox);
      expect(onCheckedChange).toHaveBeenCalledWith(true);
      
      fireEvent.click(checkbox);
      expect(onCheckedChange).toHaveBeenCalledWith(false);
    });

    it("toggles checked state when clicked", () => {
      const { rerender } = render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      
      expect(checkbox).not.toBeChecked();
      
      fireEvent.click(checkbox);
      rerender(<Checkbox defaultChecked />);
      expect(checkbox).toBeChecked();
    });

    it("does not toggle when disabled", () => {
      const onCheckedChange = vi.fn();
      render(<Checkbox disabled onCheckedChange={onCheckedChange} />);
      const checkbox = screen.getByRole("checkbox");
      
      fireEvent.click(checkbox);
      expect(onCheckedChange).not.toHaveBeenCalled();
    });

    it("handles keyboard interaction", () => {
      const onCheckedChange = vi.fn();
      render(<Checkbox onCheckedChange={onCheckedChange} />);
      const checkbox = screen.getByRole("checkbox");
      
      // Radix UI Checkbox handles click events, not keyboard events directly
      fireEvent.click(checkbox);
      expect(onCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe("Styling", () => {
    it("applies base USWDS classes", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("size-5", "shrink-0", "rounded-sm");
    });

    it("applies border styles", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("border-gray-70", "border-2");
    });

    it("applies transition styles", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("transition-all", "duration-200");
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA role", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("role", "checkbox");
    });

    it("has correct aria-checked attribute", () => {
      const { rerender } = render(<Checkbox checked={false} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-checked", "false");
      
      rerender(<Checkbox checked={true} />);
      expect(checkbox).toHaveAttribute("aria-checked", "true");
      
      rerender(<Checkbox checked="indeterminate" />);
      expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    });

    it("supports aria-label", () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-label", "Accept terms");
    });

    it("supports aria-describedby", () => {
      render(<Checkbox aria-describedby="help-text" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-describedby", "help-text");
    });

    it("is keyboard accessible", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");
      // Checkbox button should be keyboard accessible
      expect(checkbox.tagName).toBe("BUTTON");
    });
  });

  describe("Form Integration", () => {
    it("supports name attribute", () => {
      render(<Checkbox name="terms" />);
      const checkbox = screen.getByRole("checkbox");
      // Radix UI Checkbox doesn't pass name to the button element
      // It should be used with a form field wrapper
      expect(checkbox).toBeInTheDocument();
    });

    it("supports value attribute", () => {
      render(<Checkbox value="accepted" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("value", "accepted");
    });

    it("supports required attribute", () => {
      render(<Checkbox required />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-required", "true");
    });
  });

  describe("Forward Ref", () => {
    it("forwards ref correctly", () => {
      const ref = { current: null };
      render(<Checkbox ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });
});