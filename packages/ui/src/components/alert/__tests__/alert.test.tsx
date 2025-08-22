import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert, SiteAlert } from "../alert";

describe("Alert Component", () => {
  describe("Basic Rendering", () => {
    it("renders with default info variant", () => {
      render(<Alert>Information message</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("usa-alert", "usa-alert--info");
      expect(alert).toHaveTextContent("Information message");
    });

    it("renders all variants correctly", () => {
      const variants = ["info", "warning", "error", "success", "emergency"] as const;
      
      variants.forEach(variant => {
        const { container } = render(<Alert variant={variant}>Test</Alert>);
        const alert = container.querySelector(".usa-alert");
        expect(alert).toHaveClass(`usa-alert--${variant}`);
      });
    });

    it("renders with heading", () => {
      render(<Alert heading="Important Notice">Content</Alert>);
      const heading = screen.getByRole("heading", { level: 3 });
      expect(heading).toHaveClass("usa-alert__heading");
      expect(heading).toHaveTextContent("Important Notice");
    });

    it("renders with slim modifier", () => {
      render(<Alert slim>Slim alert</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("usa-alert--slim");
    });

    it("renders with no-icon modifier", () => {
      render(<Alert noIcon>No icon alert</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("usa-alert--no-icon");
    });
  });

  describe("Dismissible Functionality", () => {
    it("renders dismiss button when dismissible", () => {
      render(<Alert dismissible>Dismissible alert</Alert>);
      const dismissButton = screen.getByRole("button", { name: /close alert/i });
      expect(dismissButton).toBeInTheDocument();
    });

    it("calls onDismiss callback when dismissed", () => {
      const onDismiss = vi.fn();
      render(
        <Alert dismissible onDismiss={onDismiss}>
          Dismissible alert
        </Alert>
      );
      
      const dismissButton = screen.getByRole("button", { name: /close alert/i });
      fireEvent.click(dismissButton);
      
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("removes alert from DOM when dismissed", () => {
      render(<Alert dismissible>Dismissible alert</Alert>);
      
      const dismissButton = screen.getByRole("button", { name: /close alert/i });
      fireEvent.click(dismissButton);
      
      expect(screen.queryByRole("region")).not.toBeInTheDocument();
    });
  });

  describe("ARIA Attributes", () => {
    it("has correct role for error variant", () => {
      render(<Alert variant="error">Error message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("aria-live", "assertive");
    });

    it("has correct role for success variant", () => {
      render(<Alert variant="success">Success message</Alert>);
      const alert = screen.getByRole("status");
      expect(alert).toHaveAttribute("aria-live", "polite");
    });

    it("has correct role for emergency variant", () => {
      render(<Alert variant="emergency">Emergency message</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveAttribute("aria-live", "assertive");
    });

    it("has aria-atomic attribute", () => {
      render(<Alert>Test alert</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveAttribute("aria-atomic", "true");
    });
  });

  describe("Custom Props", () => {
    it("applies custom className", () => {
      render(<Alert className="custom-class">Custom alert</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
      let ref: HTMLDivElement | null = null;
      render(
        <Alert ref={(el) => { ref = el; }}>Alert with ref</Alert>
      );
      expect(ref).toBeInstanceOf(HTMLDivElement);
    });

    it("spreads additional props", () => {
      render(<Alert data-testid="test-alert">Test</Alert>);
      expect(screen.getByTestId("test-alert")).toBeInTheDocument();
    });
  });
});

describe("SiteAlert Component", () => {
  it("renders with correct structure", () => {
    render(<SiteAlert>Site-wide alert</SiteAlert>);
    const section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("usa-site-alert");
  });

  it("renders all variants correctly", () => {
    const variants = ["info", "warning", "error", "success", "emergency"] as const;
    
    variants.forEach(variant => {
      const { container } = render(<SiteAlert variant={variant}>Test</SiteAlert>);
      const alert = container.querySelector(".usa-site-alert");
      const expectedClass = variant === "error" || variant === "emergency" 
        ? "usa-site-alert--emergency" 
        : "usa-site-alert--info";
      expect(alert).toHaveClass(expectedClass);
    });
  });

  it("renders with slim modifier", () => {
    const { container } = render(<SiteAlert slim>Slim site alert</SiteAlert>);
    const alert = container.querySelector(".usa-site-alert");
    expect(alert).toHaveClass("usa-site-alert--slim");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SiteAlert className="custom-site-alert">Custom</SiteAlert>
    );
    const alert = container.querySelector(".usa-site-alert");
    expect(alert).toHaveClass("custom-site-alert");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLDivElement | null = null;
    render(
      <SiteAlert ref={(el) => { ref = el; }}>Site alert with ref</SiteAlert>
    );
    expect(ref).toBeInstanceOf(HTMLElement);
  });
});