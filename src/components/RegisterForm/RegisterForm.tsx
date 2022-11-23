import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export const RegisterForm = () => {
  return (
    <FormAuth
      title={"Register"}
      handleSubmit={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <Stack spacing={1}>
        <TextField
          name="alias"
          margin="normal"
          type="text"
          fullWidth
          label="Username"
          required
        />
        <TextField
          name="alias"
          placeholder="@username"
          margin="normal"
          type="text"
          fullWidth
          label="Alias"
          required
        />
        <TextField
          name="email"
          placeholder="type your email"
          margin="normal"
          type="email"
          fullWidth
          label="Email"
          required
        />
        <TextField
          name="password"
          margin="normal"
          type="text"
          fullWidth
          label="Password"
          required
        />
      </Stack>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign up</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};
