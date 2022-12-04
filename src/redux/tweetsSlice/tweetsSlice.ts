import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from "../../types";
import { TweetState } from "../types";

const initialState: TweetState = {
  tweets: [],
  tweet: {} as Tweet,
};

const twitterSlice = createSlice({
  name: "tweeter",
  initialState,
  reducers: {
    loadTweets: (currentState, action: PayloadAction<Tweet[]>) => ({
      ...currentState,
      tweets: [...action.payload],
    }),
    loadTweet: (currentState, action: PayloadAction<Tweet>) => ({
      ...currentState,
      tweet: action.payload,
    }),
    addTweets: (currentState, action: PayloadAction<Tweet[]>) => ({
      ...currentState,
      tweets: [...currentState.tweets, ...action.payload],
    }),
    deleteTweet: (currentState, action: PayloadAction<string>) => ({
      ...currentState,
      tweets: [
        ...currentState.tweets.filter((tweet) => tweet.id !== action.payload),
      ],
    }),
  },
});

export const tweetsReducer = twitterSlice.reducer;
export const {
  loadTweets: loadTweetsActionCreator,
  loadTweet: loadTweetActionCreator,
  addTweets: addTweetsActionCreator,
  deleteTweet: deleteTweetActionCreator,
} = twitterSlice.actions;
