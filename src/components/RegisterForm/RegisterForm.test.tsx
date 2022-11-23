import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { RegisterForm } from "./RegisterForm";

describe("Given the Register form component", () => {
  describe("When it's renderer", () => {
    test("Then it should show 4 text inputs: Username,Alias,Email,Password and button 'Sign up'", () => {
      const labelUsername = "username";
      const labelAlias = "alias";
      const labelEmail = "email";
      const labelPassword = "password";

      const nameButton = "Sign up";

      renderWithProviders(<RegisterForm />);

      const buttonSignUp = screen.getByRole("button", {
        name: nameButton,
      });

      const inputUsername = screen.getByLabelText(labelUsername);
      const inputEmail = screen.getByLabelText(labelEmail);
      const inputPassword = screen.getByLabelText(labelPassword);
      const inputAlias = screen.getByLabelText(labelAlias);

      expect(buttonSignUp).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputAlias).toBeInTheDocument();
    });
  });
});
