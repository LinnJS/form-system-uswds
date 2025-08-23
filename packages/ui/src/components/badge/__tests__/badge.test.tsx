import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag, Badge, Identifier } from "../badge";

describe("Tag Component", () => {
  it("renders with default variant", () => {
    render(<Tag>Default Tag</Tag>);
    const tag = screen.getByText("Default Tag");
    expect(tag).toHaveClass("bg-gray-60", "text-white");
  });

  it("renders with big size", () => {
    render(<Tag size="big">Big Tag</Tag>);
    const tag = screen.getByText("Big Tag");
    expect(tag).toHaveClass("px-2", "py-1", "text-sm");
  });

  it("supports legacy big prop", () => {
    render(<Tag big>Legacy Big</Tag>);
    const tag = screen.getByText("Legacy Big");
    expect(tag).toHaveClass("px-2", "py-1", "text-sm");
  });

  it("applies custom className", () => {
    render(<Tag className="custom-tag">Custom</Tag>);
    const tag = screen.getByText("Custom");
    expect(tag).toHaveClass("custom-tag");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLSpanElement | null = null;
    render(
      <Tag ref={(el) => { ref = el; }}>Tag with ref</Tag>
    );
    expect(ref).toBeInstanceOf(HTMLSpanElement);
  });

  it("spreads additional props", () => {
    render(<Tag data-testid="test-tag">Test Tag</Tag>);
    expect(screen.getByTestId("test-tag")).toBeInTheDocument();
  });

  it("renders all color variants correctly", () => {
    const { rerender } = render(<Tag variant="info">Info</Tag>);
    let tag = screen.getByText("Info");
    expect(tag).toHaveClass("bg-info");
    
    rerender(<Tag variant="warning">Warning</Tag>);
    tag = screen.getByText("Warning");
    expect(tag).toHaveClass("bg-warning", "text-gray-90");
    
    rerender(<Tag variant="error">Error</Tag>);
    tag = screen.getByText("Error");
    expect(tag).toHaveClass("bg-error");
    
    rerender(<Tag variant="success">Success</Tag>);
    tag = screen.getByText("Success");
    expect(tag).toHaveClass("bg-success");
    
    rerender(<Tag variant="emergency">Emergency</Tag>);
    tag = screen.getByText("Emergency");
    expect(tag).toHaveClass("bg-emergency-dark");
  });
});

describe("Badge Component", () => {
  it("renders as Tag alias", () => {
    render(<Badge>Badge Content</Badge>);
    const badge = screen.getByText("Badge Content");
    expect(badge).toHaveClass("bg-gray-60", "text-white");
  });

  it("accepts all Tag props", () => {
    render(<Badge size="big" className="custom">Badge</Badge>);
    const badge = screen.getByText("Badge");
    expect(badge).toHaveClass("px-2", "py-1", "text-sm", "custom");
  });
});

describe("Identifier Component", () => {
  it("renders with required props", () => {
    render(
      <Identifier agency="Test Agency">
        Test content
      </Identifier>
    );
    
    expect(screen.getByText(/An official website of the/)).toBeInTheDocument();
    expect(screen.getByText("Test Agency")).toBeInTheDocument();
  });

  it("renders parent agency when provided", () => {
    render(
      <Identifier 
        agency="Test Agency"
        parentAgency="Parent Department"
      >
        Content
      </Identifier>
    );
    
    expect(screen.getByText("Parent Department")).toBeInTheDocument();
  });

  it("renders logo when provided", () => {
    const logo = <img src="test.png" alt="Logo" data-testid="test-logo" />;
    render(
      <Identifier agency="Test Agency" logo={logo}>
        Content
      </Identifier>
    );
    
    expect(screen.getByTestId("test-logo")).toBeInTheDocument();
  });

  it("renders required links section", () => {
    const links = [
      { text: "About", href: "/about" },
      { text: "Privacy", href: "/privacy" }
    ];
    
    render(
      <Identifier agency="Test Agency" requiredLinks={links}>
        Content
      </Identifier>
    );
    
    const aboutLink = screen.getByRole("link", { name: "About" });
    const privacyLink = screen.getByRole("link", { name: "Privacy" });
    
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("applies base identifier styles", () => {
    const { container } = render(
      <Identifier agency="Test Agency">Content</Identifier>
    );
    
    const identifier = container.firstElementChild;
    expect(identifier).toHaveClass("bg-gray-10", "font-sans");
  });

  it("has correct structure with sections", () => {
    const { container } = render(
      <Identifier agency="Test Agency">Content</Identifier>
    );
    
    // Check for section structure
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
    
    // Check for container structure
    const containers = container.querySelectorAll(".container");
    expect(containers.length).toBeGreaterThan(0);
  });

  it("applies custom className", () => {
    const { container } = render(
      <Identifier agency="Test" className="custom-identifier">
        Content
      </Identifier>
    );
    
    const identifier = container.firstElementChild;
    expect(identifier).toHaveClass("custom-identifier");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLDivElement | null = null;
    render(
      <Identifier agency="Test" ref={(el) => { ref = el; }}>
        Content
      </Identifier>
    );
    expect(ref).toBeInstanceOf(HTMLDivElement);
  });

  it("renders children content", () => {
    render(
      <Identifier agency="Test">
        <div data-testid="custom-content">Custom Content</div>
      </Identifier>
    );
    
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });
});