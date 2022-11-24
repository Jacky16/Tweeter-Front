import { Button } from "@mui/material";
import { PropsWithChildren } from "react";

interface PrimaryButtonProps extends PropsWithChildren {}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <Button
      fullWidth
      color="primary"
      size="large"
      sx={{ borderRadius: "4px" }}
      variant="contained"
      type="submit"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
