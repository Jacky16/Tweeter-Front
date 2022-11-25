import {
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
interface FormAuthProps extends PropsWithChildren {
  title: string;
  handleSubmit: () => void;
}
export const FormAuth = ({ children, title, handleSubmit }: FormAuthProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item sx={{ width: "100%" }}>
        <Paper sx={{ paddingY: "62px", paddingX: `${matches ? 16 : 150}px` }}>
          <Stack component="form" onSubmit={onSubmit} spacing={4}>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h3"
              fontWeight={700}
            >
              {title}
            </Typography>
            {children}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
