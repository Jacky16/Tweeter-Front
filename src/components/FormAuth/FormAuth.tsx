import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
interface FormAuthProps extends PropsWithChildren {
  title: string;
  handleSubmit: () => void;
}
export const FormAuth = ({ children, title, handleSubmit }: FormAuthProps) => {
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
        <Paper sx={{ padding: "24px" }}>
          <Stack component="form" onSubmit={onSubmit} spacing={4}>
            <Typography sx={{ mt: 1, mb: 1, textAlign: "center" }} variant="h2">
              {title}
            </Typography>
            {children}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
