import { render } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreateTweetPage from "./CreateTweetPage";

describe("Given the CreateTweetPage component", () => {
  describe("When it is rendered", () => {
    test("Then should match the snapshot", () => {
      const { container } = renderWithProviders(<CreateTweetPage />);
      expect(container).toMatchSnapshot();
    });
  });
});
