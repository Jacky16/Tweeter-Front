// src/mocks/handlers.js
import { rest } from "msw";
import requestsUrl from "../config/requestsUrl";

export const handlers = [
  rest.post(requestsUrl.registerUser, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}));
  }),
];
