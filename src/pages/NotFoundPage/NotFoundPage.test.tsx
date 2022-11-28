import { renderWithProviders } from "../../mocks/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should match the snapshot", () => {
      const view = renderWithProviders(<NotFoundPage />);
      expect(view).toMatchSnapshot();
    });
  });
});
