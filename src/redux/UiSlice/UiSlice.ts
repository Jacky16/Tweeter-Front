import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertActionPayloadAction, Pagination, UiState } from "../types";

const initialState: UiState = {
  isLoading: false,
  pagination: {
    currentPage: 1,
    totalPages: 0,
  },
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
    loadPagination: (currentState, action: PayloadAction<Pagination>) => ({
      ...currentState,
      pagination: action.payload,
    }),
    advancePagination: (currentState) => ({
      ...currentState,
      pagination: {
        ...currentState.pagination,
        currentPage: currentState.pagination.currentPage + 1,
      },
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
  loadPagination: loadPaginationActionCreator,
  advancePagination: advancePaginationActionCreator,
} = uiSlicer.actions;
