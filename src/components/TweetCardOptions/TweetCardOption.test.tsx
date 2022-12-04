import { renderWithProviders } from "../../mocks/renderWithProviders";
import TweetCardOptions from "./TweetCardOptions";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockDeleteTweet = jest.fn();

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    deleteTweet: mockDeleteTweet,
  });
});

describe("Given the TweetCardOption component", () => {
  describe("When user click on button 'Tweet options'", () => {
    test("Then delete tweet function should be called", async () => {
      const nameTweetOption = "Tweet Options";
      const deleteItem = "Delete";

      renderWithProviders(<TweetCardOptions tweetId={""} />);

      const tweetOptionsButton = screen.getByRole("button", {
        name: nameTweetOption,
      });

      await userEvent.hover(tweetOptionsButton);
      await userEvent.click(tweetOptionsButton);

      const deleteButton = screen.getByRole("menuitem", {
        name: deleteItem,
      });

      await userEvent.click(deleteButton);

      expect(mockDeleteTweet).toBeCalled();
    });
  });
});
