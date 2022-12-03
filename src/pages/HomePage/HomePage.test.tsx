import { renderWithProviders } from "../../mocks/renderWithProviders";
import mockStore from "../../mocks/store/mockStore";
import { UiState } from "../../redux/types";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockGetTweets = jest.fn();
const mockLoadTweets = jest.fn();

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    getTweets: mockGetTweets,
    loadTweets: mockLoadTweets,
  });
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the HomePage component", () => {
  describe("When the user click the FAB to create a tweet", () => {
    test("Then should navigate to be called with /create", async () => {
      const fabName = "Add tweet";

      renderWithProviders(<HomePage />);
      const fab = screen.getByRole("button", { name: fabName });

      await userEvent.click(fab);

      expect(mockNavigate).toHaveBeenCalledWith("/create");
    });
  });
});
