import { User } from "../types";

export interface UserState extends User {
  isLogged: boolean;
  token: string;
}
export interface UiState {
  alert: AlertActionPayloadAction;
}

export interface AlertActionPayloadAction {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
}
