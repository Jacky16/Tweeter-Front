// src/mocks/handlers.js
import { rest } from "msw";
import requestsUrl from "../config/requestsUrl";
import { UserRegisterData } from "../types";

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
];
