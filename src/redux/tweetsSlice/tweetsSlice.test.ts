import { getTweet, getTweets } from "../../factory/tweetsFactory";
import { Tweet } from "../../types";
import { TweetState } from "../types";
import {
  addTweetsActionCreator,
  deleteTweetActionCreator,
  loadTweetActionCreator,
  loadTweetsActionCreator,
  tweetsReducer,
  updateTweetActionCreator,
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

  describe("When receives a action 'deleteTweet'", () => {
    test("Then should return a new state with the tweets without the deleted tweet", () => {
      const tweets = getTweets(5);
      const tweetToDelete = tweets[0];

      const initialState: TweetState = {
        tweets,
        tweet: {} as Tweet,
      };

      const action = deleteTweetActionCreator(tweetToDelete.id);

      const expectedState: TweetState = {
        tweets: tweets.filter((tweet) => tweet.id !== tweetToDelete.id),
        tweet: {} as Tweet,
      };

      const newState = tweetsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When receives a action 'updateTweet'", () => {
    test("Then should return a new state with the tweets updated", () => {
      const tweets = getTweets(2);

      const tweetPayload = { ...tweets[0], description: "new description" };

      const initialState: TweetState = {
        tweets,
        tweet: {} as Tweet,
      };

      const action = updateTweetActionCreator(tweetPayload);

      const expectedState: TweetState = {
        tweets: [
          ...tweets.map((tweet) =>
            tweet.id === tweetPayload.id ? tweetPayload : tweet
          ),
        ],
        tweet: {} as Tweet,
      };

      const newState = tweetsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
