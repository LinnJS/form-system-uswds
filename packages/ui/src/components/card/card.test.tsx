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
    const { rerender } = render(<Card variant="default">Default Card</Card>);
    expect(screen.getByText("Default Card").parentElement).toHaveClass("border-gray-200");

    rerender(<Card variant="outline">Outline Card</Card>);
    expect(screen.getByText("Outline Card").parentElement).toHaveClass("border-2");

    rerender(<Card variant="elevated">Elevated Card</Card>);
    expect(screen.getByText("Elevated Card").parentElement).toHaveClass("shadow-lg");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Card ref={ref}>Card with ref</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Custom Card</Card>);
    expect(screen.getByText("Custom Card").parentElement).toHaveClass("custom-class");
  });
});
