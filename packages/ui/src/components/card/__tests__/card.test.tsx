import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";

describe("Card Components", () => {
  it("renders card with all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Test Footer")).toBeInTheDocument();
  });

  it("applies card styling classes", () => {
    const { container } = render(<Card>Card content</Card>);
    const card = container.firstChild;
    expect(card).toBeInstanceOf(HTMLElement);
    if (card instanceof HTMLElement) {
      expect(card.className).toContain("usa-card");
    }
  });

  it("applies CardHeader styling classes", () => {
    const { container } = render(
      <Card>
        <CardHeader>Header Content</CardHeader>
      </Card>
    );
    const header = container.querySelector(".usa-card__header");
    expect(header).toBeInTheDocument();
  });

  it("applies CardTitle styling classes", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title Text</CardTitle>
        </CardHeader>
      </Card>
    );
    const title = screen.getByText("Title Text");
    expect(title.tagName).toBe("H3");
    expect(title.className).toContain("usa-card__heading");
  });

  it("applies CardDescription styling classes", () => {
    render(
      <Card>
        <CardHeader>
          <CardDescription>Description Text</CardDescription>
        </CardHeader>
      </Card>
    );
    const description = screen.getByText("Description Text");
    expect(description.tagName).toBe("P");
    expect(description.className).toContain("usa-card__subhead");
  });

  it("applies CardContent styling classes", () => {
    const { container } = render(
      <Card>
        <CardContent>Content Text</CardContent>
      </Card>
    );
    const content = container.querySelector(".usa-card__body");
    expect(content).toBeInTheDocument();
  });

  it("applies CardFooter styling classes", () => {
    const { container } = render(
      <Card>
        <CardFooter>Footer Content</CardFooter>
      </Card>
    );
    const footer = container.querySelector(".usa-card__footer");
    expect(footer).toBeInTheDocument();
  });

  it("forwards ref correctly for Card", () => {
    let ref: HTMLDivElement | null = null;
    render(
      <Card
        ref={(el) => {
          ref = el;
        }}
      >
        Card with ref
      </Card>
    );
    expect(ref).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref correctly for CardHeader", () => {
    let ref: HTMLDivElement | null = null;
    render(
      <Card>
        <CardHeader
          ref={(el) => {
            ref = el;
          }}
        >
          Header with ref
        </CardHeader>
      </Card>
    );
    expect(ref).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref correctly for CardTitle", () => {
    let ref: HTMLHeadingElement | null = null;
    render(
      <Card>
        <CardHeader>
          <CardTitle
            ref={(el) => {
              ref = el;
            }}
          >
            Title with ref
          </CardTitle>
        </CardHeader>
      </Card>
    );
    expect(ref).toBeInstanceOf(HTMLHeadingElement);
  });

  it("applies custom className to Card", () => {
    const { container } = render(<Card className="custom-card-class">Custom Card</Card>);
    const card = container.firstChild;
    expect(card).toBeInstanceOf(HTMLElement);
    if (card instanceof HTMLElement) {
      expect(card.className).toContain("custom-card-class");
    }
  });

  it("applies custom className to CardHeader", () => {
    const { container } = render(
      <Card>
        <CardHeader className="custom-header-class">Custom Header</CardHeader>
      </Card>
    );
    const header = container.querySelector(".custom-header-class");
    expect(header).toBeInTheDocument();
  });

  it("applies custom className to CardContent", () => {
    const { container } = render(
      <Card>
        <CardContent className="custom-content-class">Custom Content</CardContent>
      </Card>
    );
    const content = container.querySelector(".custom-content-class");
    expect(content).toBeInTheDocument();
  });

  it("renders Card without sub-components", () => {
    render(<Card>Just text content</Card>);
    expect(screen.getByText("Just text content")).toBeInTheDocument();
  });

  it("renders nested content in CardContent", () => {
    render(
      <Card>
        <CardContent>
          <div>
            <p>Nested paragraph</p>
            <button>Nested button</button>
          </div>
        </CardContent>
      </Card>
    );
    expect(screen.getByText("Nested paragraph")).toBeInTheDocument();
    expect(screen.getByText("Nested button")).toBeInTheDocument();
  });
});
