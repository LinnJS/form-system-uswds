import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { H1, H2, H3, Lead, Paragraph, Text } from "./typography";

describe("Typography Components", () => {
  describe("H1", () => {
    it("renders with correct tag and classes", () => {
      render(<H1>Heading 1</H1>);
      const element = screen.getByText("Heading 1");
      expect(element.tagName).toBe("H1");
      expect(element).toHaveClass("text-4xl", "font-extrabold");
    });

    it("applies custom className", () => {
      render(<H1 className="custom-class">Custom H1</H1>);
      expect(screen.getByText("Custom H1")).toHaveClass("custom-class");
    });
  });

  describe("H2", () => {
    it("renders with correct tag and classes", () => {
      render(<H2>Heading 2</H2>);
      const element = screen.getByText("Heading 2");
      expect(element.tagName).toBe("H2");
      expect(element).toHaveClass("text-3xl", "font-semibold");
    });
  });

  describe("H3", () => {
    it("renders with correct tag and classes", () => {
      render(<H3>Heading 3</H3>);
      const element = screen.getByText("Heading 3");
      expect(element.tagName).toBe("H3");
      expect(element).toHaveClass("text-2xl", "font-semibold");
    });
  });

  describe("Paragraph", () => {
    it("renders with correct tag and classes", () => {
      render(<Paragraph>Test paragraph</Paragraph>);
      const element = screen.getByText("Test paragraph");
      expect(element.tagName).toBe("P");
      expect(element).toHaveClass("leading-7");
    });
  });

  describe("Lead", () => {
    it("renders with correct tag and classes", () => {
      render(<Lead>Lead text</Lead>);
      const element = screen.getByText("Lead text");
      expect(element.tagName).toBe("P");
      expect(element).toHaveClass("text-muted-foreground", "text-xl");
    });
  });

  describe("Text", () => {
    it("renders with correct tag and classes", () => {
      render(<Text>Small text</Text>);
      const element = screen.getByText("Small text");
      expect(element.tagName).toBe("SPAN");
      expect(element).toHaveClass("text-base");
    });
  });

  describe("Forward Ref", () => {
    it("forwards ref correctly for all components", () => {
      const h1Ref = { current: null };
      const h2Ref = { current: null };
      const h3Ref = { current: null };
      const pRef = { current: null };

      render(
        <>
          <H1 ref={h1Ref}>H1</H1>
          <H2 ref={h2Ref}>H2</H2>
          <H3 ref={h3Ref}>H3</H3>
          <Paragraph ref={pRef}>P</Paragraph>
        </>
      );

      expect(h1Ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(h2Ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(h3Ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(pRef.current).toBeInstanceOf(HTMLParagraphElement);
    });
  });
});
