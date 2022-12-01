import { TweetApi } from "../types";

export interface TweetsResponse {
  totalPages: number;
  currentPage: number;
  tweets: TweetApi[];
}
