import { renderWithProviders } from "../../mocks/renderWithProviders";
import mockStore from "../../mocks/store/mockStore";
import { UiState } from "../../redux/types";
import HomePage from "./HomePage";

const mockGetTweets = jest.fn();
const mockLoadTweets = jest.fn();

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    getTweets: mockGetTweets,
    loadTweets: mockLoadTweets,
  });
});

describe("Given the HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then should match the snapshot", () => {
      const { container } = renderWithProviders(<HomePage />);
      expect(container).toMatchSnapshot();
    });

    describe("And the current page is 1", () => {
      test("Then loadTweets should be called", () => {
        renderWithProviders(<HomePage />);

        expect(mockLoadTweets).toBeCalled();
      });
    });
    describe("When the currenPage is 2", () => {
      test("Then should getTweets of useTweets should be called", () => {
        const mockUiState: Partial<UiState> = {
          pagination: {
            currentPage: 2,
            totalPages: 3,
          },
        };
        const store = mockStore({ uiPreloadState: mockUiState as UiState });

        renderWithProviders(<HomePage />, { store });

        expect(mockGetTweets).toHaveBeenCalled();
      });
    });
  });
});
