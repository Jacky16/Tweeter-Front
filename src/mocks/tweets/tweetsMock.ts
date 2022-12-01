import { getTweetApi, getTweetsApi } from "../../factory/tweetsFactory";

export const mockTweetsResponse = {
  tweets: getTweetsApi(10),
  currentPage: 1,
  totalPages: 2,
};

export const mockTweet = getTweetApi();
