import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterData } from "../../types";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export const RegisterForm = () => {
  const { registerUser } = useUser();

  const [registerData, setRegisterData] = React.useState<UserRegisterData>({
    username: "",
    password: "",
    alias: "",
    email: "",
  });

  const dataRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormAuth
      title={"Register"}
      handleSubmit={() => {
        registerUser(registerData);
      }}
    >
      <Stack spacing={1}>
        <TextField
          name="username"
          margin="normal"
          type="text"
          fullWidth
          label="Username"
          aria-label="username"
          onChange={dataRegister}
          required
        />
        <TextField
          name="alias"
          placeholder="@username"
          margin="normal"
          type="text"
          fullWidth
          label="Alias"
          aria-label="alias"
          onChange={dataRegister}
          required
        />
        <TextField
          name="email"
          placeholder="type your email"
          margin="normal"
          type="email"
          fullWidth
          label="Email"
          aria-label="email"
          onChange={dataRegister}
          required
        />
        <TextField
          name="password"
          margin="normal"
          type="password"
          fullWidth
          label="Password"
          aria-label="password"
          onChange={dataRegister}
          required
        />
      </Stack>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign up</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};
