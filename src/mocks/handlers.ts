// src/mocks/handlers.js
import { rest } from "msw";
import requestsUrl from "../config/requestsUrl";
import { UserLoginData, UserRegisterData } from "../types";
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
];
