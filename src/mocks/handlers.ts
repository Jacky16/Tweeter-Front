import { rest } from "msw";
import requestsUrl from "../config/requestsUrl";
import { getTweetApi } from "../factory/tweetsFactory";
import { UserLoginData, UserRegisterData } from "../types";
import { mockTweetApi, mockTweetsResponse } from "./tweets/tweetsMock";
import { mockTokenMario } from "./userMocks";

export const handlers = [
  rest.post(requestsUrl.registerUser, async (req, res, ctx) => {
    const user = await req.json<UserRegisterData>();

    if (user.username === "Chals") {
      return res(
        ctx.status(409),
        ctx.json({ error: "User already in the database" })
      );
    }

    return res(ctx.status(201), ctx.json({}));
  }),

  rest.post(requestsUrl.loginUser, async (req, res, ctx) => {
    const user = await req.json<UserLoginData>();

    if (user.email !== "mario@gmail.com" || user.password !== "123") {
      return res(ctx.status(409), ctx.json({ error: "Invalid credential" }));
    }

    return res(ctx.status(200), ctx.json({ token: mockTokenMario }));
  }),

  rest.get(requestsUrl.getTweets, async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const limit = req.url.searchParams.get("limit");
    const token = req.headers.get("Authorization");

    const response = mockTweetsResponse;

    const totalPages = Math.ceil(response.tweets.length / Number(limit));

    if (token !== `Bearer ${mockTokenMario}`) {
      return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
    }

    if (Number(page) < 1 || Number(page) > totalPages) {
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
    return res(
      ctx.status(200),
      ctx.json({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        tweets: response.tweets,
      })
    );
  }),

  rest.get(
    `${requestsUrl.getTweetByCategory}/sports`,
    async (req, res, ctx) => {
      const limit = req.url.searchParams.get("limit");
      const page = req.url.searchParams.get("page");
      const token = req.headers.get("Authorization");

      const response = mockTweetsResponse;
      const totalPages = Math.ceil(response.tweets.length / Number(limit));

      if (token !== `Bearer ${mockTokenMario}`) {
        return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
      }

      if (Number(page) < 1 || Number(page) > totalPages) {
        return res(ctx.status(404), ctx.json({ error: "Not found" }));
      }
      return res(
        ctx.status(200),
        ctx.json({
          currentPage: response.currentPage,
          totalPages: response.totalPages,
          tweets: response.tweets,
        })
      );
    }
  ),

  rest.get(
    `${requestsUrl.getTweetByCategory}/invalid`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Not found" }));
    }
  ),

  rest.get(
    `${requestsUrl.getOneTweet}/${mockTweetApi.id}`,
    async (req, res, ctx) => {
      const token = req.headers.get("Authorization");

      const tweet = { ...mockTweetApi };

      if (token !== `Bearer ${mockTokenMario}`) {
        return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
      }

      return res(ctx.status(200), ctx.json({ tweet }));
    }
  ),

  rest.post(requestsUrl.createTweet, async (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    const tweetCreated = getTweetApi();
    if (token !== `Bearer ${mockTokenMario}`) {
      return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
    }

    return res(ctx.status(201), ctx.json({ tweet: tweetCreated }));
  }),

  rest.delete(
    `${requestsUrl.deleteTweet}/${mockTweetApi.id}`,
    async (req, res, ctx) => {
      const token = req.headers.get("Authorization");

      if (token !== `Bearer ${mockTokenMario}`) {
        return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
      }

      return res(ctx.status(200), ctx.json({ tweet: mockTweetApi }));
    }
  ),

  rest.patch(
    `${requestsUrl.updateTweet}/${mockTweetApi.id}`,
    async (req, res, ctx) => {
      const token = req.headers.get("Authorization");

      if (token !== `Bearer ${mockTokenMario}`) {
        return res(ctx.status(401), ctx.json({ error: "Invalid token" }));
      }

      return res(ctx.status(200), ctx.json({ tweet: mockTweetApi }));
    }
  ),
];
