import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App = () => {
  return (
    <Container maxWidth={"sm"}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;
