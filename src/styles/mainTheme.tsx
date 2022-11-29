import { createTheme } from "@mui/material";
const mainTheme = createTheme({
  palette: {
    mode: "dark",
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
    text: {
      primary: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: 22,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default mainTheme;
