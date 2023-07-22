import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// specific themes
const theme = createTheme({
  palette: {
    background: {
      default: "#f2f1e9",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Anaheim, sans-serif',
    wordBreak: 'break-all',

    h1: {
      fontSize: 128,
      '@media (max-width:500px)': {
        fontSize: 96,
      },
    },
    h2: {
      fontSize: 96,
      '@media (max-width:500px)': {
        fontSize: 64,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: 64,
      '@media (max-width:500px)': {
        fontSize: 48,
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
      '@media (max-width:500px)': {
        fontSize: 24,
      },
    }
  },
});

export default theme;
