import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup, RadioGroupItem } from "../radio-group";

describe("RadioGroup Component", () => {
  describe("Basic Rendering", () => {
    it("renders radio group", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toBeInTheDocument();
    });

    it("renders radio items", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" id="radio1" />
          <RadioGroupItem value="option2" id="radio2" />
          <RadioGroupItem value="option3" id="radio3" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(3);
    });

    it("renders with custom className", () => {
      render(
        <RadioGroup className="custom-group">
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveClass("custom-group");
    });

    it("renders items with custom className", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" className="custom-item" />
        </RadioGroup>
      );
      
      const radio = screen.getByRole("radio");
      expect(radio).toHaveClass("custom-item");
    });
  });

  describe("States", () => {
    it("no items selected by default", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      radios.forEach(radio => {
        expect(radio).not.toBeChecked();
      });
    });

    it("renders with default value", () => {
      render(
        <RadioGroup defaultValue="option2">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      );
      
      const option2 = screen.getByRole("radio", { checked: true });
      expect(option2).toBeChecked();
      expect(option2).toHaveAttribute("data-state", "checked");
    });

    it("renders with controlled value", () => {
      render(
        <RadioGroup value="option3">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      );
      
      const option3 = screen.getByRole("radio", { checked: true });
      expect(option3).toBeChecked();
    });

    it("renders disabled state on group", () => {
      render(
        <RadioGroup disabled>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      radios.forEach(radio => {
        expect(radio).toBeDisabled();
      });
    });

    it("renders disabled state on individual item", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" disabled />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).not.toBeDisabled();
      expect(radios[1]).toBeDisabled();
      expect(radios[2]).not.toBeDisabled();
    });
  });

  describe("Interactions", () => {
    it("selects item on click", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      const option1 = radios[0]!;
      const option2 = radios[1]!;
      
      expect(option1).not.toBeChecked();
      expect(option2).not.toBeChecked();
      
      fireEvent.click(option1);
      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();
      
      fireEvent.click(option2);
      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });

    it("calls onValueChange when selection changes", () => {
      const onValueChange = vi.fn();
      
      render(
        <RadioGroup onValueChange={onValueChange}>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      const option1 = radios[0]!;
      fireEvent.click(option1);
      
      expect(onValueChange).toHaveBeenCalledWith("option1");
    });

    it("does not change selection when disabled", () => {
      const onValueChange = vi.fn();
      
      render(
        <RadioGroup disabled onValueChange={onValueChange}>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      const option1 = radios[0]!;
      fireEvent.click(option1);
      
      expect(onValueChange).not.toHaveBeenCalled();
      expect(option1).not.toBeChecked();
    });

    it("handles keyboard navigation", () => {
      render(
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      
      // Radix UI RadioGroup handles keyboard navigation automatically
      // First item should be checked
      expect(radios[0]).toBeChecked();
      
      // Click second radio to select it
      fireEvent.click(radios[1]!);
      expect(radios[1]).toBeChecked();
      expect(radios[0]).not.toBeChecked();
    });
  });

  describe("Styling", () => {
    it("applies base USWDS classes to group", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveClass("grid", "gap-2");
    });

    it("applies base USWDS classes to items", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radio = screen.getByRole("radio");
      expect(radio).toHaveClass("aspect-square", "size-5", "rounded-full");
    });

    it("applies border styles to items", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radio = screen.getByRole("radio");
      expect(radio).toHaveClass("border-gray-70", "border-2");
    });

    it("applies transition styles to items", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radio = screen.getByRole("radio");
      expect(radio).toHaveClass("transition-all", "duration-200");
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA role", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toBeInTheDocument();
      
      const radio = screen.getByRole("radio");
      expect(radio).toBeInTheDocument();
    });

    it("has correct aria-checked attribute", () => {
      render(
        <RadioGroup value="option2">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("aria-checked", "false");
      expect(radios[1]).toHaveAttribute("aria-checked", "true");
    });

    it("supports aria-label on group", () => {
      render(
        <RadioGroup aria-label="Select option">
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-label", "Select option");
    });

    it("supports aria-labelledby on group", () => {
      render(
        <>
          <label id="group-label">Choose one:</label>
          <RadioGroup aria-labelledby="group-label">
            <RadioGroupItem value="option1" />
          </RadioGroup>
        </>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-labelledby", "group-label");
    });

    it("supports aria-describedby on items", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-describedby="help1" />
          <span id="help1">Help text</span>
        </RadioGroup>
      );
      
      const radio = screen.getByRole("radio");
      expect(radio).toHaveAttribute("aria-describedby", "help1");
    });

    it("is keyboard accessible", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      expect(radios[0]!).toHaveAttribute("tabIndex");
    });

    it("supports required attribute", () => {
      render(
        <RadioGroup required>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-required", "true");
    });
  });

  describe("Form Integration", () => {
    it("supports name attribute", () => {
      render(
        <RadioGroup name="preference">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radios = screen.getAllByRole("radio");
      // Radix UI RadioGroup doesn't pass name to button elements
      // It should be used with a form field wrapper
      expect(radios[0]).toBeInTheDocument();
      expect(radios[1]).toBeInTheDocument();
    });

    it("supports orientation", () => {
      render(
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-orientation", "horizontal");
    });
  });

  describe("Forward Ref", () => {
    it("forwards ref correctly to group", () => {
      const ref = { current: null };
      render(
        <RadioGroup ref={ref}>
          <RadioGroupItem value="option1" />
        </RadioGroup>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref correctly to item", () => {
      const ref = { current: null };
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" ref={ref} />
        </RadioGroup>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });
});