import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag, Badge, Identifier } from "../badge";

describe("Tag Component", () => {
  it("renders with default variant", () => {
    render(<Tag>Default Tag</Tag>);
    const tag = screen.getByText("Default Tag");
    expect(tag).toHaveClass("usa-tag");
  });

  it("renders with big size", () => {
    render(<Tag size="big">Big Tag</Tag>);
    const tag = screen.getByText("Big Tag");
    expect(tag).toHaveClass("usa-tag--big");
  });

  it("supports legacy big prop", () => {
    render(<Tag big>Legacy Big</Tag>);
    const tag = screen.getByText("Legacy Big");
    expect(tag).toHaveClass("usa-tag--big");
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
});

describe("Badge Component", () => {
  it("renders as Tag alias", () => {
    render(<Badge>Badge Content</Badge>);
    const badge = screen.getByText("Badge Content");
    expect(badge).toHaveClass("usa-tag");
  });

  it("accepts all Tag props", () => {
    render(<Badge size="big" className="custom">Badge</Badge>);
    const badge = screen.getByText("Badge");
    expect(badge).toHaveClass("usa-tag--big", "custom");
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

  it("applies usa-identifier class", () => {
    const { container } = render(
      <Identifier agency="Test Agency">Content</Identifier>
    );
    
    const identifier = container.querySelector(".usa-identifier");
    expect(identifier).toBeInTheDocument();
  });

  it("has correct structure with sections", () => {
    const { container } = render(
      <Identifier agency="Test Agency">Content</Identifier>
    );
    
    expect(container.querySelector(".usa-identifier__section--masthead")).toBeInTheDocument();
    expect(container.querySelector(".usa-identifier__container")).toBeInTheDocument();
    expect(container.querySelector(".usa-identifier__identity")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Identifier agency="Test" className="custom-identifier">
        Content
      </Identifier>
    );
    
    const identifier = container.querySelector(".usa-identifier");
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