import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import { store } from "./redux/store";
import "@fontsource/poppins";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "./styles/mainTheme";
const container = document.getElementById("root")!;

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <Provider store={store}>
            <CssBaseline>
              <App />
            </CssBaseline>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
