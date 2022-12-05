import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreateTweetPage from "./CreateTweetPage";

describe("Given the CreateTweetPage component", () => {
  describe("When it is rendered", () => {
    test("Then should show the title 'Tweet something'", () => {
      const title = "Tweet something";
      renderWithProviders(<CreateTweetPage />);

      const titleElement = screen.getByRole("heading", {
        name: title,
      });

      expect(titleElement).toBeInTheDocument();
    });
  });
});
