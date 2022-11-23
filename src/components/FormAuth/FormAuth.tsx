import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
interface FormAuthProps extends PropsWithChildren {
  title: string;
  handleSubmit: () => void;
}
export const FormAuth = ({ children, title, handleSubmit }: FormAuthProps) => {
  return (
    <Grid direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <Paper sx={{ padding: "24px" }}>
          <Stack component="form" onSubmit={handleSubmit} spacing={4}>
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
