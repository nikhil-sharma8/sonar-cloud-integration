import { render, screen } from "@testing-library/react";
import { BasicButton } from "../BasicButtons/index";

describe("BasicButton component", () => {
  it("should render with default props", () => {
    render(<BasicButton text="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("should render with custom props", () => {
    render(<BasicButton text="Submit" variant="outlined" />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-outlined");
  });

  //   it("should handle click events", () => {
  //     const handleClick = jest.fn();
  //     render(<BasicButton text="Click me" onClick={handleClick} />);
  //     const button = screen.getByRole("button", { name: /click me/i });
  //     userEvent.click(button);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });

  it("should pass down additional props", () => {
    render(<BasicButton text="Click me" data-testid="basic-button" />);
    const button = screen.getByTestId("basic-button");
    expect(button).toBeInTheDocument();
  });
});
