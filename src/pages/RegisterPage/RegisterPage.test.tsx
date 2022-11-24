import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a register page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a register form with the label 'username', 'password', 'email','alias and a 'Sign up' button", () => {
      const labelUsername = "username";
      const labelEmail = "email";
      const labelPassword = "password";
      const labelAlias = "alias";

      const nameButton = "Sign up";

      renderWithProviders(<RegisterPage />);

      const buttonSignUp = screen.getByRole("button", {
        name: nameButton,
      });

      const inputUsername = screen.getByLabelText(labelUsername);
      const inputAlias = screen.getByLabelText(labelAlias);
      const inputEmail = screen.getByLabelText(labelEmail);
      const inputPassword = screen.getByLabelText(labelPassword);

      expect(buttonSignUp).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputAlias).toBeInTheDocument();
    });
  });
});
