import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import AlertToast from "../AlertToast/AlertToast";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const { getToken } = useToken();
  const {
    alert: { isOpen, message, severity },
  } = useAppSelector((state) => state.ui);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  getToken();

  return (
    <Container maxWidth={"md"}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <AlertToast isOpen={isOpen} severity={severity} message={message} />
    </Container>
  );
};

export default App;
