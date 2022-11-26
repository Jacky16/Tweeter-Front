import { render, screen } from "@testing-library/react";
import { TweetCategory } from "../../types";
import Category from "./Category";

describe("Given the Category component", () => {
  describe("When it is rendered with the comedy category", () => {
    test("Then it should show the category name", () => {
      const expectedCategoryName = "COMEDY";
      render(<Category category={TweetCategory.comedy}></Category>);
      const categoryName = screen.getByText(expectedCategoryName);
      expect(categoryName).toBeInTheDocument();
    });
  });
  describe("When it is rendered with the sports category", () => {
    test("Then it should show the category name", () => {
      const expectedCategoryName = "SPORTS";
      render(<Category category={TweetCategory.sports}></Category>);
      const categoryName = screen.getByText(expectedCategoryName);
      expect(categoryName).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the science category", () => {
    test("Then it should show the category name", () => {
      const expectedCategoryName = "SCIENCE";
      render(<Category category={TweetCategory.science}></Category>);
      const categoryName = screen.getByText(expectedCategoryName);
      expect(categoryName).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the entertainment category", () => {
    test("Then it should show the category name", () => {
      const expectedCategoryName = "ENTERTAINMENT";
      render(<Category category={TweetCategory.entertainment}></Category>);
      const categoryName = screen.getByText(expectedCategoryName);
      expect(categoryName).toBeInTheDocument();
    });
  });
  describe("When it is rendered with the political category", () => {
    test("Then it should show the category name", () => {
      const expectedCategoryName = "POLITICAL";
      render(<Category category={TweetCategory.political}></Category>);
      const categoryName = screen.getByText(expectedCategoryName);
      expect(categoryName).toBeInTheDocument();
    });
  });
});
