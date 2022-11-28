import { getTweet, getTweets } from "../../factory/tweetsFactory";

export const mockTweetsResponse = {
  tweets: getTweets(10),
  currentPage: 1,
  totalPages: 2,
};

export const mockTweet = getTweet();
