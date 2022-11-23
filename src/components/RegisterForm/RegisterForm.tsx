import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FormAuth } from "../FormAuth/FormAuth";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export const RegisterForm = () => {
  return (
    <FormAuth title={"Register"} handleSubmit={() => {}}>
      <Stack spacing={1}>
        <TextField
          name="username"
          margin="normal"
          type="text"
          fullWidth
          label="Username"
          aria-label="username"
        />
        <TextField
          name="alias"
          placeholder="@username"
          margin="normal"
          type="text"
          fullWidth
          label="Alias"
          aria-label="alias"
        />
        <TextField
          name="email"
          placeholder="type your email"
          margin="normal"
          type="email"
          fullWidth
          label="Email"
          aria-label="email"
        />
        <TextField
          name="password"
          margin="normal"
          type="text"
          fullWidth
          label="Password"
          aria-label="password"
        />
      </Stack>
      <PrimaryButton>
        <Typography fontWeight={700}>Sign up</Typography>
      </PrimaryButton>
    </FormAuth>
  );
};
