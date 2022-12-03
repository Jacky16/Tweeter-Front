import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { closeAlertActionCreator } from "../../redux/UiSlice/UiSlice";

interface AlertToastProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  isOpen: boolean;
}

const AlertToast = ({ message, severity, isOpen }: AlertToastProps) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(isOpen);
    dispatch(closeAlertActionCreator());
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      onClose={handleClose}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertToast;
