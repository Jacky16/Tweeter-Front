import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <Container maxWidth={"sm"}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Container>
  );
};

export default App;
