import { mockUser } from "../../mocks/userMocks";
import { UserState } from "../types";
import {
  initialState,
  userLoginActionCreator,
  userLogoutActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it is invoked with it's method userLogin", () => {
    test("Then it should change the user admin state isLogged to true", () => {
      const action = userLoginActionCreator(mockUser);

      const expectedState: UserState = {
        ...mockUser,
        isLogged: true,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with it's method userLogout", () => {
    test("Then it should change the user admin state isLogged to false", () => {
      const action = userLogoutActionCreator();
      const expectedState: UserState = {
        username: "",
        isLogged: false,
        token: "",
        id: "",
        alias: "",
      };

      const newState = userReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
