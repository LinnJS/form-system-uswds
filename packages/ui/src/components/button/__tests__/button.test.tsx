import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../button";

describe("Button Component", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies default variant classes correctly", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("usa-button");
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole("button");
    expect(button.className).toContain("usa-button");

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--secondary");

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--outline");

    rerender(<Button variant="base">Base</Button>);
    button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--base");

    rerender(<Button variant="inverse">Inverse</Button>);
    button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--inverse");

    rerender(<Button variant="unstyled">Unstyled</Button>);
    button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--unstyled");
  });

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("usa-button--big");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLButtonElement | null = null;
    render(
      <Button ref={(el) => { ref = el; }}>Button with ref</Button>
    );
    expect(ref).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles onClick events", () => {
    let clicked = false;
    render(
      <Button onClick={() => (clicked = true)}>Click me</Button>
    );
    const button = screen.getByRole("button");
    button.click();
    expect(clicked).toBe(true);
  });

  it("supports type attribute", () => {
    const { rerender } = render(<Button type="submit">Submit</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");

    rerender(<Button type="reset">Reset</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "reset");

    rerender(<Button type="button">Button</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("handles loading state", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toBeDisabled();
    // Check for loading spinner
    const spinner = button.querySelector('svg.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it("renders icon elements", () => {
    const icon = <span data-testid="icon">Icon</span>;
    const iconEnd = <span data-testid="icon-end">End</span>;
    render(<Button icon={icon} iconEnd={iconEnd}>Text</Button>);
    
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon-end")).toBeInTheDocument();
  });
});