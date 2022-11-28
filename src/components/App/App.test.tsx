import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import mockStore from "../../mocks/store/mockStore";
import App from "./App";
import mockUserLogged from "../../mocks/states/mockUserLogged";

describe("Given an App component", () => {
  describe("When user is logged and stay in the login page", () => {
    describe("And go to home page", () => {
      test("Then it should show the 'load more' button", () => {
        const store = mockStore({ userPreloadState: mockUserLogged });
        const initialEntries = ["/home"];
        const nameButton = "Load more";

        renderWithProviders(<App />, { store, initialEntries });

        const button = screen.getByRole("button", { name: nameButton });

        expect(button).toBeInTheDocument();
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

  describe("When user is logged in home page", () => {
    describe("And go to login page", () => {
      test("Then it should return to home page and shoud show the 'load more' button", () => {
        const store = mockStore({ userPreloadState: mockUserLogged });
        const initialEntries = ["/"];
        const nameButton = "Load more";

        renderWithProviders(<App />, { store, initialEntries });

        const button = screen.getByRole("button", { name: nameButton });

        expect(button).toBeInTheDocument();
      });
    });
  });
});
