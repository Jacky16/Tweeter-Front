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

  describe("When is loading and is the first page", () => {
    test("Then it should show 3 TweetCardSkeleton", () => {
      const uiState: UiState = {
        pagination: {
          currentPage: 1,
          totalPages: 1,
        },
        isLoading: true,
        categoryFilter: "all",
      } as UiState;

      const store = mockStore({
        uiPreloadState: uiState,
      });

      renderWithProviders(<HomePage />, { store });

      const tweetCards = screen.getAllByTestId("TweetCardSkeleton");
      expect(tweetCards).toHaveLength(3);
    });
  });
});
