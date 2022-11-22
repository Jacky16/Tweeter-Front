import { createTheme } from "@mui/material";
export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#1090F2",
    },
    background: {
      paper: "#111D35",
      default: "#080E24",
    },
    secondary: {
      main: "#111D35",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: 22,
  },
});
