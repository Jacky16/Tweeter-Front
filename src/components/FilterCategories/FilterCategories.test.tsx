import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import FilterCategories from "./FilterCategories";
import userEvent from "@testing-library/user-event";
import { changeFilterCategoryActionCreator } from "../../redux/UiSlice/UiSlice";
import mockStore from "../../mocks/store/mockStore";
import { UiState } from "../../redux/types";

const store = mockStore({
  uiPreloadState: {
    categoryFilter: "All",
  } as UiState,
});
const mockDispatch = jest.spyOn(store, "dispatch");

describe("Given a FilterCategories component", () => {
  describe("When value of select is 'All' and user click on 'Science' option", () => {
    test("Then should call the dispatch with 'sciene'", async () => {
      const roleName = "science";
      const expectedAction = changeFilterCategoryActionCreator(roleName);

      renderWithProviders(<FilterCategories />, { store });

      const filterCategoriesSelect = screen.getByRole("button");

      await userEvent.click(filterCategoriesSelect);

      const scienceOption = screen.getByRole("option", { name: roleName });

      await userEvent.click(scienceOption);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
