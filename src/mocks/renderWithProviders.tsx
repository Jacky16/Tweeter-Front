import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { RootState, store } from "../redux/store";
import { tweetsReducer } from "../redux/tweetsSlice/tweetsSlice";
import { uiReducer } from "../redux/UiSlice/UiSlice";
import { userReducer } from "../redux/userSlice/userSlice";
import { InitialEntry } from "@remix-run/router";
interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}
interface ExtendedRenderOptions
  extends Omit<RenderOptions, "queries">,
    ExtendedPropsWithChildren {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const Router = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    initialEntries,
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer, user: userReducer, tweets: tweetsReducer },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Router initialEntries={initialEntries}>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
