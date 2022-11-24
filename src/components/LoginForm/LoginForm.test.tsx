import { renderWithProviders } from "../../mocks/renderWithProviders";
import LoginForm from "./LoginForm";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLoginUser,
  });
});

describe("Given the Login form component", () => {
  describe("When it's renderer", () => {
    test("Then it should show 2 text inputs: email ,password and button 'Login'", () => {
      const labelEmail = "email";
      const labelPassword = "password";

      const nameButton = "Login";

      renderWithProviders(<LoginForm />);

      const buttonSignUp = screen.getByRole("button", {
        name: nameButton,
      });

      const inputEmail = screen.getByLabelText(labelEmail);
      const inputPassword = screen.getByLabelText(labelPassword);

      expect(buttonSignUp).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
  describe("When the user click the Login button", () => {
    test("Then userLogin should be called", async () => {
      const labelEmail = "Email";
      const labelPassword = "password";

      const nameButton = "Login";

      renderWithProviders(<LoginForm />);

      const buttonLogin = screen.getByRole("button", {
        name: nameButton,
      });

      const inputEmail = screen.getByRole("textbox", { name: labelEmail });
      const inputPassword = screen.getByLabelText(labelPassword);

      await userEvent.type(inputEmail, "mario@gmail.com");
      await userEvent.type(inputPassword, "123");

      await userEvent.click(buttonLogin);

      expect(mockLoginUser).toBeCalled();
    });
  });
});
