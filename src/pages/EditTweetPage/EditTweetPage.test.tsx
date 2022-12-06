import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import EditTweetPage from "./EditTweetPage";

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    getOneTweet: jest.fn(),
  });
});

describe("Given the EditTweetPage component", () => {
  describe("When the page is rendered", () => {
    test("Then it should show the title 'Edit tweet'", () => {
      const title = "Edit tweet";
      renderWithProviders(<EditTweetPage />);

      const titleElement = screen.getByRole("heading", {
        name: title,
      });

      expect(titleElement).toBeInTheDocument();
    });
  });
});
