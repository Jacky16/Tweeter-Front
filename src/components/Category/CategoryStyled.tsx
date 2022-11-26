import styled from "styled-components";
import { TweetCategory } from "../../types";

interface CategoryStyledProps {
  category: TweetCategory;
}
const categoryColor = (category: TweetCategory) => {
  switch (category) {
    case TweetCategory.comedy:
      return "#892dff";
    case TweetCategory.sports:
      return "#FF2D39";
    case TweetCategory.science:
      return "#00ff00";
    case TweetCategory.entertainment:
      return "#FF2DC4";
    case TweetCategory.political:
      return "#FF7B43";
  }
};
const CategoryStyled = styled.div<CategoryStyledProps>`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 21px;
  background-color: ${(props) => categoryColor(props.category)};
`;

export default CategoryStyled;
