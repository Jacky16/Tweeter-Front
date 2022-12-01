import { Tweet, TweetApi } from "../types";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const tweetFactory = Factory.define<Tweet>(() => ({
  id: faker.database.mongodbObjectId(),
  username: faker.name.firstName(),
  alias: faker.name.lastName(),
  description: faker.lorem.sentence(),
  category: "comedy",
  image: faker.image.imageUrl(),
  dateOfCreation: faker.date.past().toString(),
}));

const tweetApiFactory = Factory.define<TweetApi>(() => ({
  id: faker.database.mongodbObjectId(),
  description: faker.lorem.sentence(),
  category: "comedy",
  image: faker.image.imageUrl(),
  dateOfCreation: faker.date.past().toString(),
  author: {
    username: faker.name.firstName(),
    alias: faker.name.lastName(),
  },
}));

export const getTweets = (size: number) => tweetFactory.buildList(size);

export const getTweet = (tweet?: Tweet) => tweetFactory.build(tweet);

export const getTweetsApi = (size: number) => tweetApiFactory.buildList(size);

export const getTweetApi = (tweet?: TweetApi) => tweetApiFactory.build(tweet);
