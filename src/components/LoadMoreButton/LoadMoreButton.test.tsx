import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { store } from "../../redux/store";
import { advancePaginationActionCreator } from "../../redux/UiSlice/UiSlice";
import LoadMoreButton from "./LoadMoreButton";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the LoadMoreButton component", () => {
  describe("When it receives isLoading as true", () => {
    test("Then it should display a loading spinner", () => {
      const isLoading = true;
      const pagination = { currentPage: 1, totalPages: 2 };

      renderWithProviders(
        <LoadMoreButton isLoading={isLoading} pagination={pagination} />
      );
      const loadingSpinner = screen.getByRole("progressbar");

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
  describe("When it receives isLoading as false", () => {
    test("Then it should display a load more button", () => {
      const pagination = { currentPage: 1, totalPages: 2 };

      const isLoading = false;

      renderWithProviders(
        <LoadMoreButton isLoading={isLoading} pagination={pagination} />
      );
      const loadMoreButton = screen.getByRole("button");

      expect(loadMoreButton).toBeInTheDocument();
    });

    describe("And the current page is not equal to the total pages", () => {
      test("Then the load more button should be enabled", () => {
        const pagination = { currentPage: 1, totalPages: 2 };

        const isLoading = false;

        renderWithProviders(
          <LoadMoreButton isLoading={isLoading} pagination={pagination} />
        );
        const loadMoreButton = screen.getByRole("button");

        expect(loadMoreButton).toBeEnabled();
      });
    });
  });
  describe("When click on the load more button with currentPage 1 and total pages 2", () => {
    test("The the dispatch should be called with action AdvancePagination", async () => {
      const pagination = { currentPage: 1, totalPages: 2 };
      const expectedAction = advancePaginationActionCreator();
      const isLoading = false;

      renderWithProviders(
        <LoadMoreButton isLoading={isLoading} pagination={pagination} />,
        {
          store,
        }
      );
      const loadMoreButton = screen.getByRole("button");

      await userEvent.click(loadMoreButton);

      expect(dispatchSpy).toBeCalledWith(expectedAction);
    });
  });

  describe("When click on the load more button with currentPage 2 and total pages 2", () => {
    test("The the dispatch should not be called", async () => {
      const pagination = { currentPage: 2, totalPages: 2 };
      const isLoading = false;

      renderWithProviders(
        <LoadMoreButton isLoading={isLoading} pagination={pagination} />,
        {
          store,
        }
      );
      const loadMoreButton = screen.getByRole("button");

      await userEvent.click(loadMoreButton);

      expect(dispatchSpy).not.toBeCalled();
    });
  });
});
