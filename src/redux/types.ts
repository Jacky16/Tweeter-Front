import { Tweet, User } from "../types";

export interface UserState extends User {
  isLogged: boolean;
  token: string;
}
export interface UiState {
  alert: AlertActionPayloadAction;
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
