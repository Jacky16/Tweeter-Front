import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetsSlice/tweetsSlice";
import { uiReducer } from "./UiSlice/UiSlice";
import { userReducer } from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    tweets: tweetsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
