import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "../input";

describe("Input Component", () => {
  describe("Basic Rendering", () => {
    it("renders basic input", () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("usa-input");
    });

    it("renders with label", () => {
      render(<Input label="Email Address" />);
      expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
      expect(screen.getByText("Email Address")).toHaveClass("usa-label");
    });

    it("renders with hint text", () => {
      render(<Input hint="Enter your email" />);
      const hint = screen.getByText("Enter your email");
      expect(hint).toHaveClass("usa-hint");
    });

    it("renders required indicator", () => {
      render(<Input label="Email" required />);
      const abbr = screen.getByTitle("required");
      expect(abbr).toHaveClass("usa-hint--required");
      expect(abbr).toHaveTextContent("*");
    });

    it("renders with custom id", () => {
      render(<Input id="custom-input" label="Test" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", "custom-input");
    });
  });

  describe("Input Types", () => {
    const types = ["text", "email", "password", "tel", "url", "number"] as const;
    
    types.forEach(type => {
      it(`renders ${type} input type`, () => {
        render(<Input type={type} />);
        // Password inputs don't have a textbox role
        const input = type === "password" 
          ? document.querySelector('input[type="password"]')
          : screen.getByRole(type === "number" ? "spinbutton" : "textbox");
        expect(input).toHaveAttribute("type", type);
      });
    });
  });

  describe("State Variants", () => {
    it("renders error state", () => {
      render(<Input state="error" error="Invalid email" />);
      const input = screen.getByRole("textbox");
      const errorMsg = screen.getByRole("alert");
      
      expect(input).toHaveClass("usa-input--error");
      expect(errorMsg).toHaveClass("usa-error-message");
      expect(errorMsg).toHaveTextContent("Invalid email");
    });

    it("renders success state", () => {
      render(<Input state="success" success="Valid input" />);
      const input = screen.getByRole("textbox");
      const successMsg = screen.getByText("Valid input");
      
      expect(input).toHaveClass("usa-input--success");
      expect(successMsg).toHaveClass("usa-success-message");
    });

    it("renders disabled state", () => {
      render(<Input disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
    });
  });

  describe("Prefix and Suffix", () => {
    it("renders with prefix", () => {
      const { container } = render(<Input prefix="$" />);
      expect(screen.getByText("$")).toBeInTheDocument();
      const prefixDiv = container.querySelector(".usa-input-prefix");
      expect(prefixDiv).toBeInTheDocument();
      expect(prefixDiv?.parentElement).toHaveClass("usa-input-group");
    });

    it("renders with suffix", () => {
      const { container } = render(<Input suffix=".com" />);
      expect(screen.getByText(".com")).toBeInTheDocument();
      const suffixDiv = container.querySelector(".usa-input-suffix");
      expect(suffixDiv).toBeInTheDocument();
      expect(suffixDiv?.parentElement).toHaveClass("usa-input-group");
    });

    it("renders with both prefix and suffix", () => {
      render(<Input prefix="$" suffix=".00" />);
      expect(screen.getByText("$")).toBeInTheDocument();
      expect(screen.getByText(".00")).toBeInTheDocument();
    });
  });

  describe("Character Count", () => {
    it("shows character count when enabled", () => {
      render(<Input characterCount maxLength={100} />);
      expect(screen.getByText(/characters remaining/)).toBeInTheDocument();
    });

    it("updates character count on input", () => {
      render(<Input characterCount maxLength={10} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.change(input, { target: { value: "hello" } });
      expect(screen.getByText("5 characters remaining")).toBeInTheDocument();
    });

    it("shows invalid state when over limit", () => {
      render(<Input characterCount maxLength={5} value="too long" />);
      const message = screen.getByText(/-\d+ characters remaining/);
      expect(message).toHaveClass("usa-character-count__message--invalid");
    });
  });

  describe("ARIA Attributes", () => {
    it("has correct aria-describedby for hint", () => {
      render(<Input hint="Help text" />);
      const input = screen.getByRole("textbox");
      const hint = screen.getByText("Help text");
      
      expect(input).toHaveAttribute("aria-describedby", hint.id);
    });

    it("has correct aria-describedby for error", () => {
      render(<Input error="Error message" />);
      const input = screen.getByRole("textbox");
      const error = screen.getByRole("alert");
      
      expect(input).toHaveAttribute("aria-describedby", error.id);
    });

    it("has aria-invalid for error state", () => {
      render(<Input state="error" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("has aria-required for required fields", () => {
      render(<Input required />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-required", "true");
    });

    it("combines multiple aria-describedby values", () => {
      render(<Input hint="Hint" error="Error" />);
      const input = screen.getByRole("textbox");
      const describedBy = input.getAttribute("aria-describedby");
      
      expect(describedBy).toContain("-hint");
      expect(describedBy).toContain("-error");
    });
  });

  describe("Event Handlers", () => {
    it("calls onChange handler", () => {
      const onChange = vi.fn();
      render(<Input onChange={onChange} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.change(input, { target: { value: "test" } });
      expect(onChange).toHaveBeenCalled();
    });

    it("calls onFocus handler", () => {
      const onFocus = vi.fn();
      render(<Input onFocus={onFocus} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.focus(input);
      expect(onFocus).toHaveBeenCalled();
    });

    it("calls onBlur handler", () => {
      const onBlur = vi.fn();
      render(<Input onBlur={onBlur} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe("Props and Customization", () => {
    it("applies custom className", () => {
      render(<Input className="custom-input" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("custom-input");
    });

    it("forwards ref correctly", () => {
      let ref: HTMLInputElement | null = null;
      render(<Input ref={(el) => { ref = el; }} />);
      expect(ref).toBeInstanceOf(HTMLInputElement);
    });

    it("spreads additional props", () => {
      render(<Input data-testid="test-input" placeholder="Enter text" />);
      const input = screen.getByTestId("test-input");
      expect(input).toHaveAttribute("placeholder", "Enter text");
    });

    it("respects maxLength prop", () => {
      render(<Input maxLength={10} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("maxLength", "10");
    });

    it("handles value prop", () => {
      const handleChange = vi.fn();
      render(<Input value="test value" onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      expect(input.value).toBe("test value");
    });
  });
});