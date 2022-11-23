import { User } from "../types";

export interface UserState extends User {
  isLogged: boolean;
  token: string;
}
export interface UiState {
  alert: AlertActionProps;
}

export interface AlertActionProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
  timeOpen: number;
}
