import { screen } from "@testing-library/react";
import { getTweets } from "../../factory/tweetsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import TweetCardList from "./TweetCardList";

describe("Given the TweetCardList component", () => {
  describe("When it's rendered with 5 tweets", () => {
    test("Then it should display 5 tweets", () => {
      const tweets = getTweets(5);

      renderWithProviders(
        <TweetCardList tweets={tweets} showCardsSkeleton={false} />
      );

      const tweetCards = screen.getAllByRole("article");
      expect(tweetCards).toHaveLength(5);
    });
  });

  describe("When it's rendered with 5 tweets and showCardsSkeleton true", () => {
    test("Then it should display 3 skeletons", () => {
      const tweets = getTweets(5);

      renderWithProviders(
        <TweetCardList tweets={tweets} showCardsSkeleton={true} />
      );

      const tweetCards = screen.getAllByTestId("TweetCardSkeleton");
      expect(tweetCards).toHaveLength(3);
    });
  });
});
