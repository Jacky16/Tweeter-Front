import { getTweetApi, getTweetsApi } from "../../factory/tweetsFactory";
import { TweetData } from "../../types";
import { parseTweetApi } from "../../utils/parseTweetApi";

export const mockTweetsResponse = {
  tweets: getTweetsApi(10),
  currentPage: 1,
  totalPages: 2,
};

export const mockTweetApi = getTweetApi();

export const mockTweet = parseTweetApi(mockTweetApi);

export const mockDataTweet: TweetData = {
  image: {} as File,
  id: mockTweet.id,
  description: "asdfg",
  category: "sports",
  dateOfCreation: "1111",
  visibilityOpen: false,
  author: "111111",
};
