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
          placeholder="@username"
          onChange={dataRegister}
          required
        />
        <TextField
          name="alias"
          margin="normal"
          type="text"
          fullWidth
          label="Name"
          aria-label="alias"
          placeholder="Full name"
          onChange={dataRegister}
          required
        />
        <TextField
          name="email"
          margin="normal"
          type="email"
          fullWidth
          label="Email"
          aria-label="email"
          placeholder="Type your email"
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
          placeholder="Type your password"
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
