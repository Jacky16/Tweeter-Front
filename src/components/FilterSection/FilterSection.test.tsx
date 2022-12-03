import { renderWithProviders } from "../../mocks/renderWithProviders";
import FilterSection from "./FilterSection";
import { screen } from "@testing-library/react";
import { store } from "../../redux/store";

describe("Given the FilterSection component", () => {
  describe("When is rendered with filtered category by 'all'", () => {
    test("Then it should display all tweets", () => {
      const expectedTitle = "all tweets";
      renderWithProviders(<FilterSection />, { store });

      const title = screen.getByText(expectedTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
