import { TweetCategory } from "../../types";
import categoryConverter from "./categoryConverter";

describe("Given the function categoryConverter", () => {
  describe("When it receives a string category comedy", () => {
    test("Then it should return the Comedy enum", () => {
      const category = "comedy";

      const result = categoryConverter(category);

      expect(result).toEqual(TweetCategory.comedy);
    });
    describe("When it receives a string category science", () => {
      test("Then it should return the Science enum", () => {
        const category = "science";

        const result = categoryConverter(category);

        expect(result).toEqual(TweetCategory.science);
      });
    });
    describe("When it receives a string category political", () => {
      test("Then it should return the Political enum", () => {
        const category = "political";

        const result = categoryConverter(category);

        expect(result).toEqual(TweetCategory.political);
      });
    });
    describe("When it receives a string category sports", () => {
      test("Then it should return the Sports enum", () => {
        const category = "sports";

        const result = categoryConverter(category);

        expect(result).toEqual(TweetCategory.sports);
      });
    });
    describe("When it receives a string category entertainment", () => {
      test("Then it should return the Entertainment enum", () => {
        const category = "entertainment";

        const result = categoryConverter(category);

        expect(result).toEqual(TweetCategory.entertainment);
      });
    });
    describe("When it receives a string category that not exist", () => {
      test("Then it should return the unknown enum", () => {
        const category = "unknown";

        const result = categoryConverter(category);

        expect(result).toEqual(TweetCategory.unknown);
      });
    });
  });
});
