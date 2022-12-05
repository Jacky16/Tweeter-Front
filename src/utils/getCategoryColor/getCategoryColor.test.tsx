import categoryColors from "../../styles/categoryColors";
import { TweetCategory } from "../../types";
import getCategoryColor from "./getCategoryColor";

describe("Given the getCategoryColor function", () => {
  const { comedy, political, sports, entertainment, science } = categoryColors;

  describe("When is called with a comedy category", () => {
    test("Then it should return the comedy color", () => {
      const category = TweetCategory.comedy;
      const expectedColor = comedy;

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });

  describe("When is called with a political category", () => {
    test("Then it should return the political color", () => {
      const category = TweetCategory.political;
      const expectedColor = political;

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });

  describe("When is called with a sports category", () => {
    test("Then it should return the sports color", () => {
      const category = TweetCategory.sports;
      const expectedColor = sports;

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });

  describe("When is called with a entertainment category", () => {
    test("Then it should return the entertainment color", () => {
      const category = TweetCategory.entertainment;
      const expectedColor = entertainment;

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });

  describe("When is called with a science category", () => {
    test("Then it should return the science color", () => {
      const category = TweetCategory.science;
      const expectedColor = science;

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
});
