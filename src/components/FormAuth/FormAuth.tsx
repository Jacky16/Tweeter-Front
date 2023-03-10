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
      style={{ minHeight: "90vh", width: "100%" }}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Grid item sx={{ width: "100%", maxWidth: "600px" }}>
        <Paper sx={{ paddingY: "38px", paddingX: "28px " }}>
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
