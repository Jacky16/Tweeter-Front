import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a login page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a register form with the label 'email', 'password' and a 'Sign in' button", () => {
      const labelEmail = "email";
      const labelPassword = "password";
      const nameButton = "Sign in";

      renderWithProviders(<LoginPage />);

      const buttonSignUp = screen.getByRole("button", {
        name: nameButton,
      });

      const inputUsername = screen.getByLabelText(labelEmail);
      const inputPassword = screen.getByLabelText(labelPassword);

      expect(buttonSignUp).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
});
