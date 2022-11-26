import { Tweet, TweetCategory } from "../types";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const tweetFactory = Factory.define<Tweet>(() => ({
  username: faker.name.firstName(),
  alias: faker.name.lastName(),
  description: faker.lorem.sentence(),
  category: TweetCategory.comedy,
  image: faker.image.imageUrl(),
  dateOfCreation: faker.date.past().toString(),
}));

export const getTweets = (size: number) => tweetFactory.buildList(size);

export const getTweet = (tweet?: Tweet) => tweetFactory.build(tweet);
