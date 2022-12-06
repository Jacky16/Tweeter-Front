import { render, screen } from "@testing-library/react";
import { getTweet } from "../../factory/tweetsFactory";
import TweetDetail from "./TweetDetail";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";
import userEvent from "@testing-library/user-event";

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

  describe("When it's rendered with a tweet and image and click", () => {
    test("Then it should show the image visualizer", async () => {
      const tweet = getTweet();
      const imageVisualizerText = "×";

      tweet.image = "https://picsum.photos/200/300";

      render(<TweetDetail tweet={tweet} />);

      const image = screen.getByRole("img", {
        name: "tweet",
      });
      await userEvent.click(image);

      const imageVisualizer = await screen.findByText(imageVisualizerText);

      expect(imageVisualizer).toBeInTheDocument();
    });
  });

  describe("When user click the image and click the close button of image visualizer", () => {
    test("Then it should close the image visualizer", async () => {
      const tweet = getTweet();
      const imageVisualizerText = "×";

      tweet.image = "https://picsum.photos/200/300";

      render(<TweetDetail tweet={tweet} />);

      const image = screen.getByRole("img", {
        name: "tweet",
      });
      await userEvent.click(image);

      const imageVisualizer = await screen.findByText(imageVisualizerText);
      await userEvent.click(imageVisualizer);

      expect(imageVisualizer).not.toBeInTheDocument();
    });
  });
});
