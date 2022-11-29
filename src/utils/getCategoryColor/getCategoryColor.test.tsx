import { TweetCategory } from "../../types";
import getCategoryColor from "./getCategoryColor";

describe("Given the getCategoryColor function", () => {
  describe("When is called with a comedy category", () => {
    test("Then it should return the comedy color", () => {
      const category = TweetCategory.comedy;
      const expectedColor = "#892DFF";

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
  describe("When is called with a political category", () => {
    test("Then it should return the political color", () => {
      const category = TweetCategory.political;
      const expectedColor = "#FF7B43";

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
  describe("When is called with a sports category", () => {
    test("Then it should return the sports color", () => {
      const category = TweetCategory.sports;
      const expectedColor = "#FF2D39";

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
  describe("When is called with a entertainment category", () => {
    test("Then it should return the entertainment color", () => {
      const category = TweetCategory.entertainment;
      const expectedColor = "#FF2DC4";

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
  describe("When is called with a science category", () => {
    test("Then it should return the science color", () => {
      const category = TweetCategory.science;
      const expectedColor = "#25FF62";

      const result = getCategoryColor(category);

      expect(result).toBe(expectedColor);
    });
  });
});
