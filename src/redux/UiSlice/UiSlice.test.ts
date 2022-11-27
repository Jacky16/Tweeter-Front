import { AlertActionPayloadAction, Pagination, UiState } from "../types";
import {
  advancePaginationActionCreator,
  closeAlertActionCreator,
  closeIsLoadingActionCreator,
  loadPaginationActionCreator,
  openAlertActionCreator,
  openIsLoadingActionCreator,
  uiReducer,
} from "./UiSlice";

describe("Given the UiReducer", () => {
  describe("When it receives a action to openModal with: message 'Error' severety:'error' isOpen true and the timeOpen 3000", () => {
    test("Then the new state should be with the action payload", () => {
      const openAlert: AlertActionPayloadAction = {
        severity: "error",
        message: "Error",
        isOpen: true,
      };

      const initialState: Partial<UiState> = {
        alert: {
          isOpen: false,
          message: "",
          severity: "info",
        },
      };

      const expectedState: Partial<UiState> = {
        alert: { ...openAlert },
      };
      const action = openAlertActionCreator(openAlert);

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives a action to closeModal", () => {
    test("Then should return the new state with alert closed", () => {
      const expectedStatusAlert = false;

      const initialState: Partial<UiState> = {
        alert: {
          isOpen: true,
          message: "",
          severity: "info",
        },
      };

      const action = closeAlertActionCreator();

      const newState = uiReducer(initialState as UiState, action);

      expect(newState.alert).toHaveProperty("isOpen", expectedStatusAlert);
    });
  });

  describe("When it receives a action to openLoading", () => {
    test("Then should return the new state with isLoading true", () => {
      const expectedStatusLoading = true;

      const initialState: Partial<UiState> = {
        isLoading: false,
      };

      const action = openIsLoadingActionCreator();

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("isLoading", expectedStatusLoading);
    });
  });

  describe("When it receives a action to closeLoading", () => {
    test("Then should return the new state with isLoading false", () => {
      const expectedStatusLoading = false;

      const initialState: Partial<UiState> = {
        isLoading: true,
      };

      const action = closeIsLoadingActionCreator();

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("isLoading", expectedStatusLoading);
    });
  });

  describe("When it receives a action to loadPagination", () => {
    test("Then should return the new state with pagination", () => {
      const expectedPagination: Pagination = {
        currentPage: 1,
        totalPages: 2,
      };

      const initialState: Partial<UiState> = {
        pagination: {
          currentPage: 0,
          totalPages: 0,
        },
      };

      const action = loadPaginationActionCreator(expectedPagination);

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("pagination", expectedPagination);
    });
  });

  describe("When it receives a action to advancePagination", () => {
    test("Then should return the new state with pagination", () => {
      const expectedPagination: Pagination = {
        currentPage: 2,
        totalPages: 2,
      };

      const initialState: Partial<UiState> = {
        pagination: {
          currentPage: 1,
          totalPages: 2,
        },
      };

      const action = advancePaginationActionCreator();

      const newState = uiReducer(initialState as UiState, action);

      expect(newState).toHaveProperty("pagination", expectedPagination);
    });
  });
});
