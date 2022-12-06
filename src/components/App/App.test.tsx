import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";
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
    getOneTweet: jest.fn(),
  });
});

describe("Given an App component", () => {
  describe("When user is logged and stay in the login page", () => {
    describe("And go to home page", () => {
      test("Then it should show the 'Account settings' button", async () => {
        const store = mockStore({ userPreloadState: mockUserLogged });

        const initialEntries = ["/home"];
        const nameButton = "Account settings";

        renderWithProviders(<App />, { store, initialEntries });

        const button = screen.getByRole("button", { name: nameButton });

        await waitFor(async () => {
          expect(button).toBeInTheDocument();
        });
      });
    });
  });

  describe("When user is logged and category filter is science and current page is 2", () => {
    test("Then loadTweetByCategory should be called", async () => {
      const initialEntries = ["/home"];

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
      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(() => {
        expect(mockGetTweetsByCategory).toBeCalled();
      });
    });
  });

  describe("When user is logged and category filter is all and current page is 2", () => {
    test("Then getTweets should be called", async () => {
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

      await waitFor(() => {
        expect(mockGetTweets).toBeCalled();
      });
    });
  });

  describe("When user is logged and category filter is all and current page is 1", () => {
    test("Then loadTweetsByCategory should be called", async () => {
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

      await waitFor(() => {
        expect(mockLoadTweets).toBeCalled();
      });
    });
  });

  describe("When user is logged and category filter is science and current page is 1", () => {
    test("Then loadTweetsByCategory should be called", async () => {
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

      await waitFor(() => {
        expect(mockLoadTweetsByCategory).toBeCalled();
      });
    });
  });

  describe("When user is not logged and go to home page", () => {
    test("Then it should show the 'Sign in' button", async () => {
      const store = mockStore();
      const initialEntries = ["/home"];
      const nameButton = "Sign in";

      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const button = screen.getByRole("button", { name: nameButton });
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("When user is not logged and stay in Register page", () => {
    test("Then it should show the 'Sign up' button", async () => {
      const store = mockStore();
      const initialEntries = ["/register"];
      const nameButton = "Sign up";

      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const button = screen.getByRole("button", { name: nameButton });
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("When user is logged and stay in Detail page", () => {
    test("Then it should show the 'Account settings' button", async () => {
      const store = mockStore({ userPreloadState: mockUserLogged });
      const initialEntries = ["/tweet/1"];
      const nameButton = "Account settings";

      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const button = screen.getByRole("button", { name: nameButton });
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("When user type a unknown route", () => {
    test("Then it should show the '404' page", async () => {
      const store = mockStore({ userPreloadState: mockUserLogged });
      const initialEntries = ["/unknown"];

      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const textNotFoundPage = await screen.findByText("404");
        expect(textNotFoundPage).toBeInTheDocument();
      });
    });
  });

  describe("When user is logged and stay on edit tweet", () => {
    test("Then it should show 'Edit tweet' title", async () => {
      const store = mockStore({ userPreloadState: mockUserLogged });

      const initialEntries = ["/edit/1"];
      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const title = screen.getByText("Edit tweet");

        expect(title).toBeInTheDocument();
      });
    });
  });

  describe("When user is logged and stay on create tweet page", () => {
    test("Then it should show 'Tweet something' title", async () => {
      const store = mockStore({ userPreloadState: mockUserLogged });

      const initialEntries = ["/create"];
      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(async () => {
        const title = screen.getByText("Tweet something");

        expect(title).toBeInTheDocument();
      });
    });
  });
});
