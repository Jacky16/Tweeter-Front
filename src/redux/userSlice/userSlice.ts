import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";

export const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
  id: "",
  alias: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogin: (initialState, action: PayloadAction<UserState>) => ({
      ...action.payload,
      isLogged: true,
    }),
    userLogout: (initialState) => ({
      ...initialState,
      username: "",
      alias: "",
      id: "",
      token: "",
      isLogged: false,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
