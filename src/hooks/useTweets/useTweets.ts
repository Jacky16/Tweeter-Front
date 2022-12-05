import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import {
  addTweetsActionCreator,
  deleteTweetActionCreator,
  loadTweetActionCreator,
  loadTweetsActionCreator,
  updateTweetActionCreator,
} from "../../redux/tweetsSlice/tweetsSlice";
import {
  closeIsLoadingActionCreator,
  loadPaginationActionCreator,
  openAlertActionCreator,
  openIsLoadingActionCreator,
} from "../../redux/UiSlice/UiSlice";
import { TweetData } from "../../types";
import { parseTweetApi, parseTweetsApi } from "../../utils/parseTweetApi";
import { TweetsResponse } from "../types";

const useTweets = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loadTweets = useCallback(
    async (token: string, limit?: number) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get<TweetsResponse>(
          requestsUrl.getTweets,

          {
            params: { page: 1, limit },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { tweets, currentPage, totalPages } = response.data;

        dispatch(loadPaginationActionCreator({ currentPage, totalPages }));
        dispatch(loadTweetsActionCreator(parseTweetsApi(tweets)));
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

  const loadTweetsByCategory = useCallback(
    async (token: string, category: string, limit?: number) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get<TweetsResponse>(
          `${requestsUrl.getTweetByCategory}/${category}`,
          {
            params: { page: 1, limit },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { tweets, currentPage, totalPages } = response.data;

        dispatch(loadPaginationActionCreator({ currentPage, totalPages }));
        dispatch(loadTweetsActionCreator(parseTweetsApi(tweets)));
        dispatch(closeIsLoadingActionCreator());
      } catch (error) {
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

  const getTweetsByCategory = useCallback(
    async (token: string, category: string, page = 1, limit = 5) => {
      dispatch(openIsLoadingActionCreator());
      try {
        const response = await axios.get(
          `${requestsUrl.getTweetByCategory}/${category}`,
          {
            params: { page, limit },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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

  const createTweet = async (token: string, tweetData: TweetData) => {
    dispatch(openIsLoadingActionCreator());
    try {
      await axios.post(requestsUrl.createTweet, tweetData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
      dispatch(closeIsLoadingActionCreator());
      dispatch(
        openAlertActionCreator({
          message: "Tweet created",
          severity: "success",
          isOpen: true,
        })
      );
    } catch (error: unknown) {
      dispatch(closeIsLoadingActionCreator());

      dispatch(
        openAlertActionCreator({
          message: "Error to create tweet",
          severity: "error",
          isOpen: true,
        })
      );
    }
  };

  const deleteTweet = async (token: string, idTweet: string) => {
    try {
      await axios.delete(`${requestsUrl.deleteTweet}/${idTweet}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(deleteTweetActionCreator(idTweet));
      dispatch(
        openAlertActionCreator({
          message: "Tweet deleted",
          severity: "success",
          isOpen: true,
        })
      );
    } catch (error: unknown) {
      dispatch(
        openAlertActionCreator({
          message: "Error to delete tweet",
          severity: "error",
          isOpen: true,
        })
      );
    }
  };

  const updateTweet = async (token: string, tweetData: TweetData) => {
    dispatch(openIsLoadingActionCreator());

    try {
      const response = await axios.patch(
        `${requestsUrl.updateTweet}/${tweetData.id}`,
        tweetData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { tweet } = await response.data;
      dispatch(closeIsLoadingActionCreator());
      dispatch(updateTweetActionCreator(parseTweetApi(tweet)));
      dispatch(
        openAlertActionCreator({
          message: "Tweet updated",
          severity: "success",
          isOpen: true,
        })
      );

      navigate("/");
    } catch (error: unknown) {
      dispatch(closeIsLoadingActionCreator());

      dispatch(
        openAlertActionCreator({
          message: "Error to update tweet",
          severity: "error",
          isOpen: true,
        })
      );
    }
  };

  return {
    getTweets,
    getOneTweet,
    loadTweets,
    createTweet,
    loadTweetsByCategory,
    getTweetsByCategory,
    deleteTweet,
    updateTweet,
  };
};
export default useTweets;
