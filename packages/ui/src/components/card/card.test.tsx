import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

describe("Card", () => {
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

  it("applies variant classes correctly", () => {
    const { container, rerender } = render(<Card variant="default">Default Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("usa-card");

    rerender(<Card variant="flag">Flag Card</Card>);
    const flagCard = container.firstChild as HTMLElement;
    expect(flagCard).toHaveClass("usa-card--flag");

    rerender(<Card variant="media-right">Media Right Card</Card>);
    const mediaRightCard = container.firstChild as HTMLElement;
    expect(mediaRightCard).toHaveClass("usa-card--media-right");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Card ref={ref}>Card with ref</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-class">Custom Card</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("custom-class");
  });
});
