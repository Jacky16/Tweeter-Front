import axios from "axios";
import { useCallback } from "react";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import { addTweetsActionCreator } from "../../redux/tweetsSlice/tweetsSlice";
import {
  closeIsLoadingActionCreator,
  loadPaginationActionCreator,
  openAlertActionCreator,
  openIsLoadingActionCreator,
} from "../../redux/UiSlice/UiSlice";
import { TweetsResponse } from "../types";

const useTweets = () => {
  const dispatch = useAppDispatch();

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

        dispatch(addTweetsActionCreator(tweets));
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

  return { getTweets };
};

export default useTweets;
