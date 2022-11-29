import { screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import TweetCard from "./TweetCard";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

    describe("And the user clicks on the tweet", () => {
      test("Then the mockNavigate should be called with '/tweet/idTweet'", () => {
        const tweet = getTweet();

        renderWithProviders(<TweetCard tweet={tweet} />);

        const tweetCard = screen.getByRole("button", {
          name: "tweet",
        });
        tweetCard.click();

        expect(mockNavigate).toHaveBeenCalledWith(`/tweet/${tweet.id}`);
      });
    });
  });
});
