import React from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserLoginData } from "../../types";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Link as RouterLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { TextField, InputAdornment, Typography, Link } from "@mui/material";
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
  const conditions = {
    passwordField: {
      condition: loginData.password.length < 8 && loginData.password !== "",
      message: "Password must be at least 8 characters long",
    },
  };
  return (
    <FormAuth
      title={"Sign in to Tweeter"}
      handleSubmit={() => {
        loginUser(loginData);
      }}
    >
      <Stack spacing={1}>
        <TextField
          name="email"
          placeholder="Type your email"
          margin="normal"
          type="email"
          fullWidth
          label="Email"
          aria-label="email"
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
          onChange={dataRegister}
          error={conditions.passwordField.condition}
          helperText={conditions.passwordField.message}
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
        Don't have account?{" "}
        <Link component={RouterLink} to="/register">
          Create an account now
        </Link>
      </Typography>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign in</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};

export default LoginForm;
