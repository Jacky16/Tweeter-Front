export interface UiState {
  alert: AlertActionProps;
}

export interface AlertActionProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
  timeOpen: number;
}
