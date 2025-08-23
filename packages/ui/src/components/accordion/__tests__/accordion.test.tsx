import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion, AccordionItem } from "../accordion";

describe("Accordion Component", () => {
  describe("Basic Rendering", () => {
    it("renders accordion with items", () => {
      render(
        <Accordion>
          <AccordionItem heading="First Item">Content 1</AccordionItem>
          <AccordionItem heading="Second Item">Content 2</AccordionItem>
        </Accordion>
      );
      
      expect(screen.getByText("First Item")).toBeInTheDocument();
      expect(screen.getByText("Second Item")).toBeInTheDocument();
    });

    it("applies base classes", () => {
      const { container } = render(
        <Accordion>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const accordion = container.firstElementChild;
      expect(accordion).toHaveClass("font-sans", "divide-y", "divide-gray-30");
    });

    it("applies bordered variant", () => {
      const { container } = render(
        <Accordion bordered>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const accordion = container.firstElementChild;
      expect(accordion).toHaveClass("border", "border-gray-30", "rounded");
    });

    it("applies custom className", () => {
      const { container } = render(
        <Accordion className="custom-accordion">
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const accordion = container.firstElementChild;
      expect(accordion).toHaveClass("custom-accordion");
    });
  });

  describe("Accordion Item", () => {
    it("renders with correct heading level", () => {
      render(
        <Accordion>
          <AccordionItem heading="H2 Item" headingLevel={2}>Content</AccordionItem>
          <AccordionItem heading="H3 Item" headingLevel={3}>Content</AccordionItem>
        </Accordion>
      );
      
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("H2 Item");
      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("H3 Item");
    });

    it("renders button with correct classes", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      expect(button).toHaveClass("flex", "w-full", "items-center", "justify-between");
    });

    it("renders content with correct classes", () => {
      render(
        <Accordion defaultExpanded={["item1"]}>
          <AccordionItem heading="Item" itemId="item1">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const content = screen.getByTestId("content").parentElement;
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass("p-3", "text-gray-90");
    });
  });

  describe("Expand/Collapse Behavior", () => {
    it("starts with items collapsed by default", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const content = screen.getByTestId("content").parentElement;
      expect(content).toHaveAttribute("hidden");
    });

    it("expands item when clicked", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      const content = screen.getByTestId("content").parentElement;
      
      fireEvent.click(button);
      expect(content).not.toHaveAttribute("hidden");
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    it("collapses expanded item when clicked again", () => {
      render(
        <Accordion defaultExpanded={["Item"]}>
          <AccordionItem heading="Item">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      const content = screen.getByTestId("content").parentElement;
      
      // Initially expanded
      expect(content).not.toHaveAttribute("hidden");
      expect(button).toHaveAttribute("aria-expanded", "true");
      
      // Click to collapse
      fireEvent.click(button);
      expect(content).toHaveAttribute("hidden");
      expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("respects defaultExpanded prop", () => {
      render(
        <Accordion defaultExpanded={["item1", "item2"]}>
          <AccordionItem heading="Item 1" itemId="item1">
            <div data-testid="content1">Content 1</div>
          </AccordionItem>
          <AccordionItem heading="Item 2" itemId="item2">
            <div data-testid="content2">Content 2</div>
          </AccordionItem>
          <AccordionItem heading="Item 3" itemId="item3">
            <div data-testid="content3">Content 3</div>
          </AccordionItem>
        </Accordion>
      );
      
      const content1 = screen.getByTestId("content1").parentElement;
      const content2 = screen.getByTestId("content2").parentElement;
      const content3 = screen.getByTestId("content3").parentElement;
      
      expect(content1).not.toHaveAttribute("hidden");
      expect(content2).not.toHaveAttribute("hidden");
      expect(content3).toHaveAttribute("hidden");
    });
  });

  describe("Multiselectable Behavior", () => {
    it("allows only one item expanded when not multiselectable", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item 1">
            <div data-testid="content1">Content 1</div>
          </AccordionItem>
          <AccordionItem heading="Item 2">
            <div data-testid="content2">Content 2</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button1 = screen.getByRole("button", { name: "Item 1" });
      const button2 = screen.getByRole("button", { name: "Item 2" });
      const content1 = screen.getByTestId("content1").parentElement;
      const content2 = screen.getByTestId("content2").parentElement;
      
      // Expand first item
      fireEvent.click(button1);
      expect(content1).not.toHaveAttribute("hidden");
      expect(content2).toHaveAttribute("hidden");
      
      // Expand second item (should collapse first)
      fireEvent.click(button2);
      expect(content1).toHaveAttribute("hidden");
      expect(content2).not.toHaveAttribute("hidden");
    });

    it("allows multiple items expanded when multiselectable", () => {
      render(
        <Accordion multiselectable>
          <AccordionItem heading="Item 1">
            <div data-testid="content1">Content 1</div>
          </AccordionItem>
          <AccordionItem heading="Item 2">
            <div data-testid="content2">Content 2</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button1 = screen.getByRole("button", { name: "Item 1" });
      const button2 = screen.getByRole("button", { name: "Item 2" });
      const content1 = screen.getByTestId("content1").parentElement;
      const content2 = screen.getByTestId("content2").parentElement;
      
      // Expand first item
      fireEvent.click(button1);
      expect(content1).not.toHaveAttribute("hidden");
      
      // Expand second item (should not collapse first)
      fireEvent.click(button2);
      expect(content1).not.toHaveAttribute("hidden");
      expect(content2).not.toHaveAttribute("hidden");
    });

    it("sets data-allow-multiple attribute when multiselectable", () => {
      const { container } = render(
        <Accordion multiselectable>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const accordion = container.firstElementChild;
      expect(accordion).toHaveAttribute("data-allow-multiple");
    });
  });

  describe("ARIA Attributes", () => {
    it("has correct aria-expanded attribute", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      expect(button).toHaveAttribute("aria-expanded", "false");
      
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    it("has correct aria-controls attribute", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item" itemId="test-item">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      const content = screen.getByTestId("content").parentElement;
      const contentId = content?.getAttribute("id");
      
      expect(button).toHaveAttribute("aria-controls", contentId);
    });

    it("has correct aria-labelledby attribute on content", () => {
      render(
        <Accordion>
          <AccordionItem heading="Item" itemId="test-item">
            <div data-testid="content">Content</div>
          </AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole("button", { name: "Item" });
      const content = screen.getByTestId("content").parentElement;
      const buttonId = button.getAttribute("id");
      
      expect(content).toHaveAttribute("aria-labelledby", buttonId);
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref to accordion container", () => {
      let ref: HTMLDivElement | null = null;
      render(
        <Accordion ref={(el) => { ref = el; }}>
          <AccordionItem heading="Item">Content</AccordionItem>
        </Accordion>
      );
      
      expect(ref).toBeInstanceOf(HTMLDivElement);
      expect(ref).toHaveClass("font-sans");
    });

    it("forwards ref to accordion item button", () => {
      let ref: HTMLButtonElement | null = null;
      render(
        <Accordion>
          <AccordionItem ref={(el) => { ref = el; }} heading="Item">
            Content
          </AccordionItem>
        </Accordion>
      );
      
      expect(ref).toBeInstanceOf(HTMLButtonElement);
      expect(ref).toHaveClass("flex", "w-full");
    });
  });
});