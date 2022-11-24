import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import AlertToast from "./AlertToast";

describe("Given the AlertToast component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the alert with message 'Success'", () => {
      const expectedMessage = "Success";

      renderWithProviders(
        <AlertToast
          severity={"error"}
          message={expectedMessage}
          isOpen={true}
        />
      );
      const alertToast = screen.getByRole("presentation");
      const textAlert = screen.getByText(expectedMessage);

      expect(alertToast).toBeInTheDocument();
      expect(textAlert).toBeInTheDocument();
    });
  });
});
