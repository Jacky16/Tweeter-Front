import { render, screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import TweetDetail from "./TweetDetail";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";

TimeAgo.addDefaultLocale(en);

describe("Given the TweetDetail component", () => {
  describe("When it's rendered with a tweet", () => {
    test("Then it should show the category of tweet and his description", () => {
      const tweet = getTweet();
      const expectedCategory = "comedy";

      render(<TweetDetail tweet={tweet} />);

      const category = screen.getByText(expectedCategory);
      const description = screen.getByText(tweet.description as string);

      expect(category).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
