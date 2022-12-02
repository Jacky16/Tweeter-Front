import { getTweetApi, getTweetsApi } from "../../factory/tweetsFactory";
import { TweetData } from "../../types";

export const mockTweetsResponse = {
  tweets: getTweetsApi(10),
  currentPage: 1,
  totalPages: 2,
};

export const mockTweet = getTweetApi();

export const mockDataTweet: TweetData = {
  image: {} as File,
  id: "",
  description: "",
  category: "",
  dateOfCreation: "",
  visibilityOpen: false,
  author: "",
};
