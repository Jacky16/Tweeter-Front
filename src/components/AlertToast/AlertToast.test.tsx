import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { closeAlertActionCreator } from "../../redux/UiSlice/UiSlice";
import AlertToast from "./AlertToast";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));
jest.useFakeTimers();

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
  describe("When 3 seconds have passed", () => {
    test("Then it should close the alert", () => {
      jest.useFakeTimers();
      const expectedMessage = "Success";

      renderWithProviders(
        <AlertToast
          severity={"error"}
          message={expectedMessage}
          isOpen={true}
        />
      );

      jest.advanceTimersByTime(3000);

      expect(mockDispatch).toHaveBeenCalledWith(closeAlertActionCreator());
    });
  });
});
