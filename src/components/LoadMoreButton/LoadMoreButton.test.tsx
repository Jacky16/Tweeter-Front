import { render, screen } from "@testing-library/react";
import LoadMoreButton from "./LoadMoreButton";

describe("Given the LoadMoreButton component", () => {
  describe("When it receives isLoading as true", () => {
    test("Then it should display a loading spinner", () => {
      const isLoading = true;

      render(<LoadMoreButton isLoading={isLoading} />);
      const loadingSpinner = screen.getByRole("progressbar");

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
  describe("When it receives isLoading as false", () => {
    test("Then it should display a load more button", () => {
      const isLoading = false;

      render(<LoadMoreButton isLoading={isLoading} />);
      const loadMoreButton = screen.getByRole("button");

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
