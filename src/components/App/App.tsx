import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../redux/hooks";
import AlertToast from "../AlertToast/AlertToast";
import Header from "../Header/Header";
import ProtectedAuthRoute from "../ProtectedAuthRoute/ProtectedAuthRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { lazy, Suspense } from "react";
import { S } from "msw/lib/SetupApi-0d3126ba";

const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(
  () => import("../../pages/RegisterPage/RegisterPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const DetailPage = lazy(
  () => import("../../pages/TweetDetailPage/TweetDetailPage")
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);
const CreateTweetPage = lazy(
  () => import("../../pages/CreateTweetPage/CreateTweetPage")
);
const EditTweetPage = lazy(
  () => import("../../pages/EditTweetPage/EditTweetPage")
);

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
              <Suspense fallback={<></>}>
                <ProtectedAuthRoute isLogged={isLogged}>
                  <LoginPage />
                </ProtectedAuthRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<></>}>
                <ProtectedAuthRoute isLogged={isLogged}>
                  <RegisterPage />
                </ProtectedAuthRoute>
              </Suspense>
            }
          />
          <Route
            path="/tweet/:idTweet"
            element={
              <Suspense fallback={<></>}>
                <ProtectedRoute isLogged={isLogged}>
                  <DetailPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<></>}>
                <ProtectedRoute isLogged={isLogged}>
                  <HomePage />
                </ProtectedRoute>
              </Suspense>
            }
          />

          <Route
            path="/create"
            element={
              <Suspense fallback={<></>}>
                <ProtectedRoute isLogged={isLogged}>
                  <CreateTweetPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/edit/:idTweet"
            element={
              <Suspense fallback={<></>}>
                <ProtectedRoute isLogged={isLogged}>
                  <EditTweetPage />
                </ProtectedRoute>
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<></>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
        <AlertToast isOpen={isOpen} severity={severity} message={message} />
      </Container>
    </>
  );
};

export default App;
