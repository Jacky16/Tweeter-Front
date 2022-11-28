import React from "react";
import Loader from "../../components/Loader/Loader";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../redux/hooks";

export const LoginPage = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  return (
    <>
      <LoginForm />
      {isLoading && <Loader />}
    </>
  );
};
export default LoginPage;
