import { rest } from "msw";
import requestsUrl from "../config/requestsUrl";
import { UserLoginData, UserRegisterData } from "../types";
import { mockTweetsResponse } from "./tweets/tweetsMock";
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
];
