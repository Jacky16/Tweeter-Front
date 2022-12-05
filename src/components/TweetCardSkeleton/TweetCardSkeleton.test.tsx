import { render, screen } from "@testing-library/react";
import TweetCardSkeleton from "./TweetCardSkeleton";

describe("Given the TweetCardSkeleton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a TweetCardSekeleton with aria busy true", () => {
      render(<TweetCardSkeleton />);
      const tweetCardSkeleton = screen.getByTestId("TweetCardSkeleton");

      expect(tweetCardSkeleton).toHaveAttribute("aria-busy", "true");
    });
  });
});
