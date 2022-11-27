import { Tweet } from "../types";

export interface TweetsResponse {
  totalPages: number;
  currentPage: number;
  tweets: Tweet[];
}
