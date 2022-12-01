import axios from "axios";
import { useCallback } from "react";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import {
  addTweetsActionCreator,
  loadTweetActionCreator,
  loadTweetsActionCreator,
} from "../../redux/tweetsSlice/tweetsSlice";
import {
  closeIsLoadingActionCreator,
  loadPaginationActionCreator,
  openAlertActionCreator,
  openIsLoadingActionCreator,
} from "../../redux/UiSlice/UiSlice";
import { parseTweetApi, parseTweetsApi } from "../../utils/parseTweetApi";
import { TweetsResponse } from "../types";

const useTweets = () => {
  const dispatch = useAppDispatch();

  const loadTweets = useCallback(
    async (token: string) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get<TweetsResponse>(
          requestsUrl.getTweets,

          {
            params: { page: 1 },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { tweets, currentPage, totalPages } = response.data;

        dispatch(loadTweetsActionCreator(parseTweetsApi(tweets)));
        dispatch(loadPaginationActionCreator({ currentPage, totalPages }));

        dispatch(closeIsLoadingActionCreator());
      } catch (error) {
        dispatch(
          openAlertActionCreator({
            message: "Error to load tweets",
            severity: "error",
            isOpen: true,
          })
        );
      }
      dispatch(closeIsLoadingActionCreator());
    },
    [dispatch]
  );
  const getTweets = useCallback(
    async (token: string, page = 1, limit = 5) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get(requestsUrl.getTweets, {
          params: { page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { tweets, currentPage, totalPages } =
          (await response.data) as TweetsResponse;

        dispatch(addTweetsActionCreator(parseTweetsApi(tweets)));

        dispatch(loadPaginationActionCreator({ currentPage, totalPages }));
        dispatch(closeIsLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(
          openAlertActionCreator({
            message: "Error to load tweets",
            severity: "error",
            isOpen: true,
          })
        );

        dispatch(closeIsLoadingActionCreator());
      }
    },
    [dispatch]
  );

  const getOneTweet = useCallback(
    async (token: string, idTweet: string) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get(
          `${requestsUrl.getOneTweet}/${idTweet}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { tweet } = await response.data;

        dispatch(closeIsLoadingActionCreator());
        dispatch(loadTweetActionCreator(parseTweetApi(tweet)));
      } catch (error: unknown) {
        dispatch(
          openAlertActionCreator({
            message: "Error to load tweet",
            severity: "error",
            isOpen: true,
          })
        );
        dispatch(closeIsLoadingActionCreator());
      }
    },
    [dispatch]
  );

  return { getTweets, getOneTweet, loadTweets };
};
export default useTweets;
