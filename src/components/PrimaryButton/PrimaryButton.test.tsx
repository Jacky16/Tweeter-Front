import { render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

describe("Given the Primary Button component", () => {
  describe("When it's rendered with a text called 'Button primary'", () => {
    test("Then it should show 'Button primary inside of button'", () => {
      const expectedText = "Button primary";

      render(<PrimaryButton>{expectedText}</PrimaryButton>);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
