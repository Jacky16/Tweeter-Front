import { InputAdornment, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterData } from "../../types";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

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
      <Stack spacing={2}>
        <TextField
          name="username"
          margin="normal"
          type="text"
          fullWidth
          label="Username"
          aria-label="username"
          placeholder="username"
          onChange={dataRegister}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign up</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};
