import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertActionProps, UiState } from "../types";

const initialState: UiState = {
  alert: {
    isOpen: false,
    message: "",
    severity: "info",
    timeOpen: 3000,
  },
};

const uiSlicer = createSlice({
  name: "UI",
  initialState,
  reducers: {
    openAlert: (currentState, action: PayloadAction<AlertActionProps>) => ({
      ...currentState,
      alert: action.payload,
    }),
    closeAlert: (currentState) => ({
      ...currentState,
      alert: { ...currentState.alert, isOpen: false },
    }),
  },
});

export const uiReducer = uiSlicer.reducer;

export const {
  openAlert: openAlertActionCreator,
  closeAlert: closeAlertActionCreator,
} = uiSlicer.actions;
