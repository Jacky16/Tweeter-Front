import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserLoginData } from "../../types";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const LoginForm = () => {
  const { loginUser } = useUser();

  const [loginData, setLoginData] = React.useState<UserLoginData>({
    email: "",
    password: "",
  });

  const dataRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <FormAuth
      title={"Login"}
      handleSubmit={() => {
        loginUser(loginData);
      }}
    >
      <Stack spacing={1}>
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
        <Typography fontWeight={700}>Login</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};

export default LoginForm;
