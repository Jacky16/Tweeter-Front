import { getTweet, getTweets } from "../../factory/tweetsFactory";
import { Tweet } from "../../types";
import { TweetState } from "../types";
import {
  addTweetsActionCreator,
  loadTweetActionCreator,
  loadTweetsActionCreator,
  tweetsReducer,
} from "./tweetsSlice";

describe("Given the tweetsReducer", () => {
  describe("When receives a action 'loadTweets'", () => {
    test("Then should return a new state with the tweets", () => {
      // Arrange
      const initialState: TweetState = {
        tweets: [],
        tweet: {} as Tweet,
      };
      const tweets = getTweets(5);

      const action = loadTweetsActionCreator(tweets);

      const expectedState: TweetState = {
        tweets,
        tweet: {} as Tweet,
      };

      const newState = tweetsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When receives a action 'loadTweet'", () => {
    test("Then should return a new state with the tweet", () => {
      const initialState: TweetState = {
        tweets: [],
        tweet: {} as Tweet,
      };
      const tweet = getTweet();

      const action = loadTweetActionCreator(tweet);

      const expectedState: TweetState = {
        tweets: [],
        tweet,
      };

      const newState = tweetsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When receives a action 'addTweets'", () => {
    test("Then should return a new state with the tweets added", () => {
      const initialState: TweetState = {
        tweets: [],
        tweet: {} as Tweet,
      };
      const tweets = getTweets(5);

      const action = addTweetsActionCreator(tweets);

      const expectedState: TweetState = {
        tweets,
        tweet: {} as Tweet,
      };

      const newState = tweetsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
