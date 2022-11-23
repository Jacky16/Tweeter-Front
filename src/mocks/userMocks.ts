import { UserState } from "../redux/types";

export const mockUser: UserState = {
  isLogged: false,
  token: "abc",
  id: "123",
  alias: "@mario",
  username: "mario",
};
