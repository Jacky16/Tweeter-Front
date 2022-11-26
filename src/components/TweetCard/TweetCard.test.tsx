import { render, screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import { TweetCategory } from "../../types";
import TweetCard from "./TweetCard";

describe("Given a TweetCard component", () => {
  describe("When it is rendered with a tweet", () => {
    test("Then the tweet should be displayed the description the username of tweet author and the category", () => {
      const tweet = getTweet();

      const expectedUsername = tweet.username;
      const expectedCategory = TweetCategory[tweet.category].toUpperCase();

      render(<TweetCard tweet={tweet} />);

      const username = screen.getByText(expectedUsername);
      const category = screen.getByText(expectedCategory);

      expect(username).toBeInTheDocument();
      expect(category).toBeInTheDocument();
    });
  });
});
