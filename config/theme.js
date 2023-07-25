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
      fontSize: 100,
      fontFamily: "Victor Mono",
      '@media (max-width:1000px)': {
        fontSize: 88,
      },
      '@media (max-width:500px)': {
        fontSize: 68,
      }
    },
    h2: {
      fontSize: 68,
      '@media (max-width:1000px)': {
        fontSize: 54,
      },
      '@media (max-width:500px)': {
        fontSize: 48,
      }
    },
    h3: {
      fontSize: 64,
      '@media (max-width:1000px)': {
        fontSize: 48,
      },
      '@media (max-width:500px)': {
        fontSize: 32,
      }
    },
    h4: {
      fontSize: 32,
      fontFamily: "EB Garamond, san-serif",
      '@media (max-width:1000px)': {
        fontSize: 24,
      },
      '@media (max-width:500px)': {
        fontSize: 20,
      }
    },
    body1: {
      fontSize: 16,
      '@media (max-width:1000px)': {
        fontSize: 15,
      },
      '@media (max-width:500px)': {
        fontSize: 14,
      }
    }
  },
});

export default theme;
