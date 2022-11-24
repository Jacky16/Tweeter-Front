import { AlertActionPayloadAction, UiState } from "../types";
import {
  closeAlertActionCreator,
  openAlertActionCreator,
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

      const initialState: UiState = {
        alert: {
          isOpen: false,
          message: "",
          severity: "info",
        },
      };

      const expectedState: UiState = {
        alert: { ...openAlert },
      };
      const action = openAlertActionCreator(openAlert);

      const newState = uiReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives a action to closeModal", () => {
    test("Then should return the new state with alert closed", () => {
      const expectedStatusAlert = false;

      const initialState: UiState = {
        alert: {
          isOpen: true,
          message: "",
          severity: "info",
        },
      };

      const action = closeAlertActionCreator();

      const newState = uiReducer(initialState, action);

      expect(newState.alert).toHaveProperty("isOpen", expectedStatusAlert);
    });
  });
});
