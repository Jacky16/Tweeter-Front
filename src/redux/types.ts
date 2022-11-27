import { Tweet, User } from "../types";

export interface UserState extends User {
  isLogged: boolean;
  token: string;
}
export interface UiState {
  isLoading: boolean;
  alert: AlertActionPayloadAction;
  pagination: Pagination;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
}
export interface TweetState {
  tweets: Tweet[];
  tweet: Tweet;
}

export interface AlertActionPayloadAction {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
}
