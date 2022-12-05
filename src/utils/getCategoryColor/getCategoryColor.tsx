import categoryColors from "../../styles/categoryColors";
import { TweetCategory } from "../../types";

const getCategoryColor = (category: TweetCategory) => {
  const { comedy, political, sports, entertainment, science } = categoryColors;
  switch (category) {
    case TweetCategory.comedy:
      return comedy;
    case TweetCategory.political:
      return political;
    case TweetCategory.sports:
      return sports;
    case TweetCategory.entertainment:
      return entertainment;
    case TweetCategory.science:
      return science;
  }
};
export default getCategoryColor;
