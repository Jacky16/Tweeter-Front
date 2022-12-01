import { TweetApi } from "../types";

export const parseTweetsApi = (tweets: TweetApi[]) =>
  tweets.map((tweet) => ({
    id: tweet.id,
    description: tweet.description,
    category: tweet.category,
    dateOfCreation: tweet.dateOfCreation,
    username: tweet.author.username,
    alias: tweet.author.alias,
    image: tweet.image,
  }));

export const parseTweetApi = (tweet: TweetApi) => ({
  id: tweet.id,
  description: tweet.description,
  category: tweet.category,
  dateOfCreation: tweet.dateOfCreation,
  username: tweet.author.username,
  alias: tweet.author.alias,
  image: tweet.image,
});
