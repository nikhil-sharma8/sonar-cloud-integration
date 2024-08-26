import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { describe, it, expect, vi } from "vitest";
import { LogoutButton } from "./index";

vi.mock("@auth0/auth0-react");

const mockLogout = vi.fn();

(useAuth0 as jest.Mock).mockReturnValue({
  logout: mockLogout,
});

describe("LogoutButton component", () => {
  it('should render the BasicButton with "Logout" text', () => {
    render(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout/i });
    expect(button).toBeInTheDocument();
  });

  it("should call logout with correct parameters when the button is clicked", () => {
    render(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    expect(mockLogout).toHaveBeenCalledWith({
      logoutParams: { returnTo: window.location.origin },
    });
  });
});
