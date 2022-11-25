import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import AlertToast from "../AlertToast/AlertToast";

const App = () => {
  const { isOpen, message, severity } = useAppSelector(
    (state) => state.ui.alert
  );
  return (
    <Container maxWidth={"md"}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <AlertToast isOpen={isOpen} severity={severity} message={message} />
    </Container>
  );
};

export default App;
