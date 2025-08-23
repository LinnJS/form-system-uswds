import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert, SiteAlert } from "../alert";

describe("Alert Component", () => {
  describe("Basic Rendering", () => {
    it("renders with default info variant", () => {
      render(<Alert>Information message</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("bg-info-lighter", "border-info");
      expect(alert).toHaveTextContent("Information message");
    });

    it("renders all variants correctly", () => {
      const { rerender } = render(<Alert variant="info">Test</Alert>);
      let alert = screen.getByRole("region");
      expect(alert).toHaveClass("bg-info-lighter", "border-info");
      
      rerender(<Alert variant="warning">Test</Alert>);
      alert = screen.getByRole("region");
      expect(alert).toHaveClass("bg-warning-lighter", "border-warning");
      
      rerender(<Alert variant="error">Test</Alert>);
      alert = screen.getByRole("alert");
      expect(alert).toHaveClass("bg-error-lighter", "border-error-dark");
      
      rerender(<Alert variant="success">Test</Alert>);
      alert = screen.getByRole("status");
      expect(alert).toHaveClass("bg-success-lighter", "border-success");
      
      rerender(<Alert variant="emergency">Test</Alert>);
      alert = screen.getByRole("region");
      expect(alert).toHaveClass("bg-emergency", "border-emergency-dark");
    });

    it("renders with heading", () => {
      render(<Alert heading="Important Notice">Content</Alert>);
      const heading = screen.getByRole("heading", { level: 3 });
      expect(heading).toHaveClass("font-bold", "text-lg");
      expect(heading).toHaveTextContent("Important Notice");
    });

    it("renders with slim modifier", () => {
      render(<Alert slim>Slim alert</Alert>);
      const alert = screen.getByRole("region");
      expect(alert).toHaveClass("p-2"); // Slim padding
    });

    it("renders with no-icon modifier", () => {
      render(<Alert noIcon>No icon alert</Alert>);
      const alert = screen.getByRole("region");
      // Icon should not be present
      const icon = alert.querySelector('span[aria-hidden="true"]');
      expect(icon).not.toBeInTheDocument();
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
    expect(section).toHaveClass("w-full", "font-sans");
  });

  it("renders all variants correctly", () => {
    const { rerender } = render(<SiteAlert variant="info">Test</SiteAlert>);
    let section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("bg-info-lighter", "text-gray-90");
    
    rerender(<SiteAlert variant="warning">Test</SiteAlert>);
    section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("bg-warning-lighter", "text-gray-90");
    
    rerender(<SiteAlert variant="error">Test</SiteAlert>);
    section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("bg-emergency", "text-white");
    
    rerender(<SiteAlert variant="emergency">Test</SiteAlert>);
    section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("bg-emergency", "text-white");
  });

  it("renders with slim modifier", () => {
    render(<SiteAlert slim>Slim site alert</SiteAlert>);
    const section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("py-2", "px-4"); // Slim padding
  });

  it("applies custom className", () => {
    render(
      <SiteAlert className="custom-site-alert">Custom</SiteAlert>
    );
    const section = screen.getByRole("region", { name: /site alert/i });
    expect(section).toHaveClass("custom-site-alert");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLDivElement | null = null;
    render(
      <SiteAlert ref={(el) => { ref = el; }}>Site alert with ref</SiteAlert>
    );
    expect(ref).toBeInstanceOf(HTMLElement);
  });
});