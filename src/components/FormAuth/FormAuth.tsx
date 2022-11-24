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
    <Grid alignItems="center" justifyContent="center">
      <Grid item>
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