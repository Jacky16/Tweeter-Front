import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import mockStore from "../../mocks/store/mockStore";
import App from "./App";
import mockUserLogged from "../../mocks/states/mockUserLogged";
import { UiState } from "../../redux/types";

const mockLoadTweetsByCategory = jest.fn();
const mockGetTweetsByCategory = jest.fn();
const mockGetTweets = jest.fn();
const mockLoadTweets = jest.fn();

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    loadTweetsByCategory: mockLoadTweetsByCategory,
    getTweetsByCategory: mockGetTweetsByCategory,
    getTweets: mockGetTweets,
    loadTweets: mockLoadTweets,
  });
});

describe("Given an App component", () => {
  describe("When user is logged and stay in the login page", () => {
    describe("And go to home page", () => {
      test("Then it should show the 'Account settings' button", () => {
        const store = mockStore({ userPreloadState: mockUserLogged });

        const initialEntries = ["/home"];
        const nameButton = "Account settings";

        renderWithProviders(<App />, { store, initialEntries });

        const button = screen.getByRole("button", { name: nameButton });

        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("When user is logged and category filter is science and current page is 2", () => {
    test("Then loadTweetByCategory should be called", () => {
      const store = mockStore({
        userPreloadState: mockUserLogged,
        uiPreloadState: {
          categoryFilter: "science",
          alert: {
            isOpen: false,
          },
          pagination: {
            currentPage: 2,
          },
        } as UiState,
      });
      renderWithProviders(<App />, { store });

      expect(mockGetTweetsByCategory).toBeCalled();
    });
  });

  describe("When user is logged and category filter is all and current page is 2", () => {
    test("Then getTweets should be called", () => {
      const store = mockStore({
        userPreloadState: mockUserLogged,
        uiPreloadState: {
          categoryFilter: "all",
          alert: {
            isOpen: false,
          },
          pagination: {
            currentPage: 2,
          },
        } as UiState,
      });
      renderWithProviders(<App />, { store });

      expect(mockGetTweets).toBeCalled();
    });
  });

  describe("When user is logged and category filter is all and current page is 1", () => {
    test("Then loadTweetsByCategory should be called", () => {
      const store = mockStore({
        userPreloadState: mockUserLogged,
        uiPreloadState: {
          categoryFilter: "all",
          alert: {
            isOpen: false,
          },
          pagination: {
            currentPage: 1,
          },
        } as UiState,
      });
      renderWithProviders(<App />, { store });

      expect(mockLoadTweets).toBeCalled();
    });
  });

  describe("When user is logged and category filter is science and current page is 1", () => {
    test("Then loadTweetsByCategory should be called", () => {
      const store = mockStore({
        userPreloadState: mockUserLogged,
        uiPreloadState: {
          categoryFilter: "science",
          alert: {
            isOpen: false,
          },
          pagination: {
            currentPage: 1,
          },
        } as UiState,
      });
      renderWithProviders(<App />, { store });

      expect(mockLoadTweetsByCategory).toBeCalled();
    });
  });

  describe("When user is not logged and go to home page", () => {
    test("Then it should show the 'Sign in' button", () => {
      const store = mockStore();
      const initialEntries = ["/home"];
      const nameButton = "Sign in";

      renderWithProviders(<App />, { store, initialEntries });

      const button = screen.getByRole("button", { name: nameButton });

      expect(button).toBeInTheDocument();
    });
  });
});
