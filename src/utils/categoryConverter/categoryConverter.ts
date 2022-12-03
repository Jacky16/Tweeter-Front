import { TweetCategory } from "../../types";

const categoryConverter = (category: string): TweetCategory => {
  switch (category) {
    case "comedy":
      return TweetCategory.comedy;
    case "science":
      return TweetCategory.science;
    case "political":
      return TweetCategory.political;
    case "sports":
      return TweetCategory.sports;
    case "entertainment":
      return TweetCategory.entertainment;
    case "all":
      return TweetCategory.all;
    default:
      return TweetCategory.unknown;
  }
};
export default categoryConverter;
