import { render, screen } from "@testing-library/react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { FormAuth } from "./FormAuth";

describe("Given the FormAuth component", () => {
  describe("When it's rendered with a button with name 'Sign up',title 'Register'", () => {
    test("Then it should show the button", () => {
      const formTitle = "Register";
      const expectedButtonName = "Sign up";

      render(
        <FormAuth title={formTitle} handleSubmit={jest.fn()}>
          <PrimaryButton>{expectedButtonName}</PrimaryButton>
        </FormAuth>
      );

      const button = screen.getByRole("button", { name: expectedButtonName });
      const title = screen.getByRole("heading", { name: formTitle });

      expect(button).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  });
  describe("And when user click the button Sign up", () => {
    test("The handle submit should be called", () => {
      const expectedButtonName = "Sign up";
      const handleSubmit = jest.fn();
      render(
        <FormAuth title={""} handleSubmit={handleSubmit}>
          <PrimaryButton>{expectedButtonName}</PrimaryButton>
        </FormAuth>
      );

      const buttonSignUp = screen.getByRole("button", {
        name: expectedButtonName,
      });

      buttonSignUp.click();

      expect(handleSubmit).toBeCalled();
    });
  });
});
