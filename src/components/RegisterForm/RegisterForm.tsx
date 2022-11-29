import { InputAdornment, Link, TextField, Typography } from "@mui/material";
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
import { Link as RouterLink } from "react-router-dom";

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

  const conditions = {
    usernameField: {
      condition:
        registerData.username.length < 3 && registerData.username !== "",
      message: "Username must be at least 3 characters long",
    },
    aliasField: {
      condition: registerData.alias.length < 3 && registerData.alias !== "",
      message: "Alias must be at least 3 characters long",
    },
    passwordField: {
      condition:
        registerData.password.length < 8 && registerData.password !== "",
      message: "Password must be at least 8 characters long",
    },
  };

  return (
    <FormAuth
      title={"Join Tweeter today"}
      handleSubmit={() => {
        registerUser(registerData);
      }}
    >
      <Stack spacing={2}>
        <TextField
          name="alias"
          margin="normal"
          error={conditions.aliasField.condition}
          helperText={conditions.aliasField.message}
          type="text"
          fullWidth
          label="Name"
          aria-label="alias"
          placeholder="Full name"
          onChange={dataRegister}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="username"
          margin="normal"
          type="text"
          fullWidth
          label="Username"
          aria-label="username"
          placeholder="username"
          onChange={dataRegister}
          error={conditions.usernameField.condition}
          helperText={conditions.usernameField.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="email"
          margin="normal"
          fullWidth
          label="Email"
          aria-label="email"
          placeholder="Type your email"
          type="email"
          onChange={dataRegister}
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
          error={conditions.passwordField.condition}
          helperText={conditions.passwordField.message}
          onChange={dataRegister}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Typography variant="subtitle1">
        Already have account?
        <Link component={RouterLink} to="/">
          {" Sign in now"}
        </Link>
      </Typography>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign up</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};
