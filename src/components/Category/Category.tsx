import React from "react";
import { TweetCategory } from "../../types";
import CategoryStyled from "./CategoryStyled";

interface CategoryProps {
  category: TweetCategory;
}
const Category = ({ category }: CategoryProps) => {
  const categoryName = TweetCategory[category].toUpperCase();

  return <CategoryStyled category={category}>{categoryName}</CategoryStyled>;
};

export default Category;
