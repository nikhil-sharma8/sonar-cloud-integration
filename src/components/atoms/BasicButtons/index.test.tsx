import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("BasicButton component", () => {
  it("should render with default props", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("should render with custom props", () => {
    render(<Button text="Submit" variant="outlined" />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-outlined");
  });

  it("should pass down additional props", () => {
    render(<Button text="Click me" data-testid="basic-button" />);
    const button = screen.getByTestId("basic-button");
    expect(button).toBeInTheDocument();
  });
});
