import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import { mockTweet, mockTweetsResponse } from "../../mocks/tweets/tweetsMock";
import { mockTokenMario } from "../../mocks/userMocks";
import { store } from "../../redux/store";
import {
  addTweetsActionCreator,
  loadTweetActionCreator,
  loadTweetsActionCreator,
} from "../../redux/tweetsSlice/tweetsSlice";
import {
  loadPaginationActionCreator,
  openAlertActionCreator,
} from "../../redux/UiSlice/UiSlice";
import useTweets from "./useTweets";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the custom hook useTweets", () => {
  describe("When loadTweets is called", () => {
    test("Then the dispatch should be called with loadTweetsActionCreator and loadPaginationActionCreator", async () => {
      const {
        result: {
          current: { loadTweets },
        },
      } = renderHook(() => useTweets(), {
        wrapper: ProviderWrapper,
      });
      await loadTweets(mockTokenMario);

      expect(dispatch).toHaveBeenCalledWith(
        loadTweetsActionCreator(mockTweetsResponse.tweets)
      );
      expect(dispatch).toHaveBeenCalledWith(
        loadPaginationActionCreator({
          currentPage: mockTweetsResponse.currentPage,
          totalPages: mockTweetsResponse.totalPages,
        })
      );
    });
  });

  describe("When loadTweets is called with invalid token", () => {
    test("Then the dispatch should be called with openAlertActionCreator", async () => {
      const {
        result: {
          current: { loadTweets },
        },
      } = renderHook(() => useTweets(), {
        wrapper: ProviderWrapper,
      });
      await loadTweets("invalid token");

      expect(dispatch).toHaveBeenCalledWith(
        openAlertActionCreator({
          message: "Error to load tweets",
          severity: "error",
          isOpen: true,
        })
      );
    });
  });

  describe("When getTweets is called with a valid token", () => {
    test("The dispatch should be called with 'addTweetsActionCreator' and 'loadPaginationActionCreator'", async () => {
      const expectedTweets = mockTweetsResponse.tweets;
      const expectedPagination = {
        currentPage: mockTweetsResponse.currentPage,
        totalPages: mockTweetsResponse.totalPages,
      };

      const expectedActionTweets = addTweetsActionCreator(expectedTweets);
      const expectedActionPagination =
        loadPaginationActionCreator(expectedPagination);

      const token = mockTokenMario;
      const {
        result: {
          current: { getTweets },
        },
      } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

      await getTweets(token);

      expect(dispatch).toBeCalledWith(expectedActionTweets);
      expect(dispatch).toBeCalledWith(expectedActionPagination);
    });

    describe("And is called without token", () => {
      test("The dispatch should be called with OpenAlertActionCreator", async () => {
        const token = "123";
        const expectedAction = openAlertActionCreator({
          message: "Error to load tweets",
          severity: "error",
          isOpen: true,
        });

        const {
          result: {
            current: { getTweets },
          },
        } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

        await getTweets(token);

        expect(dispatch).toBeCalledWith(expectedAction);
      });
    });

    describe("When getTweets is called with a -1 page", () => {
      test("The dispatch should be called with OpenAlertActionCreator", async () => {
        const expectedAction = openAlertActionCreator({
          message: "Error to load tweets",
          severity: "error",
          isOpen: true,
        });

        const token = mockTokenMario;
        const page = -1;

        const {
          result: {
            current: { getTweets },
          },
        } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

        await getTweets(token, page);

        expect(dispatch).toBeCalledWith(expectedAction);
      });

      describe("When getTweets is called with a page greater than the total pages", () => {
        test("The dispatch should be called with OpenAlertActionCreator", async () => {
          const expectedAction = openAlertActionCreator({
            message: "Error to load tweets",
            severity: "error",
            isOpen: true,
          });

          const token = mockTokenMario;
          const page = 10;

          const {
            result: {
              current: { getTweets },
            },
          } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

          await getTweets(token, page);

          expect(dispatch).toBeCalledWith(expectedAction);
        });
      });
    });
  });

  describe("When getOneTweet is called with a valid token", () => {
    test("The dispatch should be called with 'loadTweet'", async () => {
      const tweet = { ...mockTweet };
      const token = mockTokenMario;

      const {
        result: {
          current: { getOneTweet },
        },
      } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

      await getOneTweet(token, tweet.id);

      expect(dispatch).toBeCalledWith(loadTweetActionCreator(tweet));
    });
  });

  describe("When getOneTweet is called with a invalid token", () => {
    test("The dispatch should be called with 'openAlertActionCreator'", async () => {
      const tweet = { ...mockTweet };
      const token = "123";
      const expectedAction = openAlertActionCreator({
        message: "Error to load tweet",
        severity: "error",
        isOpen: true,
      });

      const {
        result: {
          current: { getOneTweet },
        },
      } = renderHook(() => useTweets(), { wrapper: ProviderWrapper });

      await getOneTweet(token, tweet.id);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
