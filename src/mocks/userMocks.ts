import { UserState } from "../redux/types";

export const mockUser: UserState = {
  isLogged: false,
  token: "abc",
  id: "123",
  alias: "@mario",
  username: "mario",
};
export const mockTokenMario =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2U4YjM2ZTkzNjA5YjkzNWFmMzI1ZCIsInVzZXJuYW1lIjoibWFyaW8iLCJhbGlhcyI6IkBtYXJpbyIsImlhdCI6MTY2OTIzNzU4MH0.u2aexOIed_x9oeECUS89NWaGzE-OeEqn623eYnM8FfU";
