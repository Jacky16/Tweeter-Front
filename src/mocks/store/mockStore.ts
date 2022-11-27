import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "../../redux/tweetsSlice/tweetsSlice";
import { TweetState, UiState, UserState } from "../../redux/types";
import { uiReducer } from "../../redux/UiSlice/UiSlice";
import { userReducer } from "../../redux/userSlice/userSlice";

interface MockStoreProps {
  uiPreloadState?: UiState;
  userPreloadState?: UserState;
  tweetsPreloadState?: TweetState;
}
const mockStore = ({
  tweetsPreloadState,
  uiPreloadState,
  userPreloadState,
}: MockStoreProps = {}) =>
  configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
      tweets: tweetsReducer,
    },
    preloadedState: {
      ui: uiPreloadState,
      user: userPreloadState,
      tweets: tweetsPreloadState,
    },
  });

export default mockStore;
