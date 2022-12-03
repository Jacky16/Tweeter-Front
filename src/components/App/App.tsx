import { Container } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import DetailPage from "../../pages/TweetDetailPage/TweetDetailPage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import AlertToast from "../AlertToast/AlertToast";
import Header from "../Header/Header";
import ProtectedAuthRoute from "../ProtectedAuthRoute/ProtectedAuthRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CreateTweetPage from "../../pages/CreateTweetPage/CreateTweetPage";

const App = () => {
  const { getToken } = useToken();
  const {
    alert: { isOpen, message, severity },
  } = useAppSelector((state) => state.ui);

  const isLogged = useAppSelector((state) => state.user.isLogged);

  getToken();

  return (
    <>
      <Header />
      <Container maxWidth={"md"}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedAuthRoute isLogged={isLogged}>
                <LoginPage />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedAuthRoute isLogged={isLogged}>
                <RegisterPage />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/tweet/:idTweet"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <DetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route path="/create" element={<CreateTweetPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <AlertToast isOpen={isOpen} severity={severity} message={message} />
      </Container>
    </>
  );
};

export default App;
