import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { RegisterForm } from "./RegisterForm";

const mockRegisterUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockRegisterUser,
  });
});

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
  describe("When the user click the Sign up button", () => {
    test("Then userLogin should be called", async () => {
      const labelEmail = "Email";
      const labelPassword = "password";
      const labelAlias = "alias";
      const labelUsername = "username";

      const nameButton = "Sign up";

      renderWithProviders(<RegisterForm />);

      const buttonRegister = screen.getByRole("button", {
        name: nameButton,
      });

      const inputEmail = screen.getByRole("textbox", { name: labelEmail });
      const inputPassword = screen.getByLabelText(labelPassword);
      const inputAlias = screen.getByLabelText(labelAlias);
      const inputUsername = screen.getByLabelText(labelUsername);

      await userEvent.type(inputEmail, "mario@gmail.com");
      await userEvent.type(inputPassword, "123");
      await userEvent.type(inputAlias, "Mario");
      await userEvent.type(inputUsername, "@mario");

      await userEvent.click(buttonRegister);

      expect(mockRegisterUser).toBeCalled();
    });
  });
});
