import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import { mockTweetsResponse } from "../../mocks/tweets/tweetsMock";
import { mockTokenMario } from "../../mocks/userMocks";
import { store } from "../../redux/store";
import { addTweetsActionCreator } from "../../redux/tweetsSlice/tweetsSlice";
import {
  loadPaginationActionCreator,
  openAlertActionCreator,
} from "../../redux/UiSlice/UiSlice";
import useTweets from "./useTweets";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the custom hook useTweets", () => {
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

    describe("When getTweets is called without token", () => {
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
});
