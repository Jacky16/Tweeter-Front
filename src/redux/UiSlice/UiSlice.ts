import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertActionPayloadAction, UiState } from "../types";

const initialState: UiState = {
  isLoading: false,
  alert: {
    isOpen: false,
    message: "",
    severity: "info",
  },
};

const uiSlicer = createSlice({
  name: "UI",
  initialState,
  reducers: {
    openIsLoading: (currentState) => ({
      ...currentState,
      isLoading: true,
    }),
    closeIsLoading: (currentState) => ({
      ...currentState,
      isLoading: false,
    }),
    openAlert: (
      currentState,
      action: PayloadAction<AlertActionPayloadAction>
    ) => ({
      ...currentState,
      alert: action.payload,
    }),
    closeAlert: (currentState) => ({
      ...currentState,
      alert: { ...currentState.alert, isOpen: false, message: "" },
    }),
  },
});

export const uiReducer = uiSlicer.reducer;

export const {
  openIsLoading: openIsLoadingActionCreator,
  closeIsLoading: closeIsLoadingActionCreator,
  openAlert: openAlertActionCreator,
  closeAlert: closeAlertActionCreator,
} = uiSlicer.actions;
