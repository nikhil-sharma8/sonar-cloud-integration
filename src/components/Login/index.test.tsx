import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/index";

vi.mock("@auth0/auth0-react");

const mockLoginWithRedirect = vi.fn();

(useAuth0 as jest.Mock).mockReturnValue({
  loginWithRedirect: mockLoginWithRedirect,
});

describe("LoginButton component", () => {
  it("should render the welcome message", () => {
    render(<LoginButton />);
    expect(
      screen.getByText(
        "Hi Welcome to the Person Management App! Please Login to Continue"
      )
    ).toBeInTheDocument();
  });

  it("should render the BasicButton with 'Login' text", () => {
    render(<LoginButton />);
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
  });

  it("should call loginWithRedirect when the button is clicked", () => {
    render(<LoginButton />);
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(1);
  });
});
