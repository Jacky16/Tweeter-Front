import { getTweets } from "../../factory/tweetsFactory";

export const mockTweetsResponse = {
  tweets: getTweets(10),
  currentPage: 1,
  totalPages: 2,
};
