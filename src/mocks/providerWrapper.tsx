import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import mainTheme from "../styles/mainTheme";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default ProviderWrapper;
