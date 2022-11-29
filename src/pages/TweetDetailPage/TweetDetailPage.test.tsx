import { screen } from "@testing-library/react";
import TweetDetailPage from "./TweetDetailPage";

import { renderWithProviders } from "../../mocks/renderWithProviders";
import mockStore from "../../mocks/store/mockStore";
import { UiState } from "../../redux/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    getOneTweet: jest.fn(),
  });
});

describe("Given the TweetDetailPage component", () => {
  describe("When is loading", () => {
    test("Then it should display the Loader", () => {
      const initialState: Partial<UiState> = {
        isLoading: true,
      };
      const store = mockStore({ uiPreloadState: initialState as UiState });

      renderWithProviders(<TweetDetailPage />, { store });

      const loader = screen.getByRole("alert");
      expect(loader).toBeInTheDocument();
    });
  });

  describe("When click on the back button", () => {
    test("The navigate function should be called with '/home'", () => {
      const mockUiState: Partial<UiState> = {
        isLoading: false,
      };
      const store = mockStore({
        uiPreloadState: mockUiState as UiState,
      });

      renderWithProviders(<TweetDetailPage />, { store });

      const backButton = screen.getByRole("button", {
        name: "Back",
      });
      backButton.click();
      expect(mockNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
