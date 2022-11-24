import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { useAppDispatch } from "../../redux/hooks";
import { closeAlertActionCreator } from "../../redux/UiSlice/UiSlice";

interface AlertToastProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
}

const AlertToast = ({ message, severity, isOpen }: AlertToastProps) => {
  const dispatch = useAppDispatch();
  if (isOpen) {
    setTimeout(() => {
      dispatch(closeAlertActionCreator());
    }, 3000);
  }
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertToast;
