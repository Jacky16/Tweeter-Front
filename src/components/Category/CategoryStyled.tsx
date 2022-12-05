import styled from "styled-components";
import { TweetCategory } from "../../types";
import getCategoryColor from "../../utils/getCategoryColor/getCategoryColor";

interface CategoryStyledProps {
  category: TweetCategory;
}
const categoryColor = (category: TweetCategory) => {};
const CategoryStyled = styled.div<CategoryStyledProps>`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 21px;
  background-color: ${(props) => getCategoryColor(props.category)};
`;

export default CategoryStyled;
