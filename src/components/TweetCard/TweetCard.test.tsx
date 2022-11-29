import { screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import TweetCard from "./TweetCard";

describe("Given a TweetCard component", () => {
  describe("When it is rendered with a tweet", () => {
    test("Then the tweet should be displayed the description the username of tweet author and the category(UpperCase)", () => {
      const tweet = getTweet();

      const expectedUsername = tweet.username;
      const expectedCategory = tweet.category.toUpperCase();

      renderWithProviders(<TweetCard tweet={tweet} />);

      const username = screen.getByText(expectedUsername);
      const category = screen.getByText(expectedCategory);

      expect(username).toBeInTheDocument();
      expect(category).toBeInTheDocument();
    });
  });
});
