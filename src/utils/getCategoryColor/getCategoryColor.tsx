import { TweetCategory } from "../../types";

const getCategoryColor = (category: TweetCategory) => {
  switch (category) {
    case TweetCategory.comedy:
      return "#892DFF";
    case TweetCategory.political:
      return "#FF7B43";
    case TweetCategory.sports:
      return "#FF2D39";
    case TweetCategory.entertainment:
      return "#FF2DC4";
    case TweetCategory.science:
      return "#25FF62";
  }
};
export default getCategoryColor;
