import { screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import mockUserLogged from "../../mocks/states/mockUserLogged";
import mockStore from "../../mocks/store/mockStore";
import TweetCard from "./TweetCard";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

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

    describe("And the user is the author of the tweet", () => {
      test("Then the Tweet Options should be displayed", () => {
        const nameTweetOption = "Tweet Options";

        const tweet = getTweet();
        const store = mockStore({
          userPreloadState: { ...mockUserLogged, username: tweet.username },
        });
        renderWithProviders(<TweetCard tweet={tweet} />, { store });

        const deleteButton = screen.getByRole("button", {
          name: nameTweetOption,
        });

        expect(deleteButton).toBeInTheDocument();
      });
    });
  });
});
