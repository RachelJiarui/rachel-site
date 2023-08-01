import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// specific themes
const theme = createTheme({
  palette: {
    background: {
      default: "#f2f1e9",
    },
    main: {
      black: "#2b2b2b",
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
      textTransform: 'uppercase',
      fontFamily: 'REM, sans-serif',
      '@media (max-width:1000px)': {
        fontSize: 88,
      },
      '@media (max-width:500px)': {
        fontSize: 68,
      }
    },
    h2: {
      fontSize: 45,
      textTransform: 'uppercase',
      fontFamily: 'REM, sans-serif',
      '@media (max-width:1000px)': {
        fontSize: 32,
      },
      '@media (max-width:500px)': {
        fontSize: 28,
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
      textTransform: 'uppercase',
      fontFamily: 'REM, sans-serif',
      '@media (max-width:1000px)': {
        fontSize: 24,
      },
      '@media (max-width:500px)': {
        fontSize: 20,
      }
    },
    body1: {
      fontSize: 18,
      '@media (max-width:1000px)': {
        fontSize: 16,
      },
      '@media (max-width:500px)': {
        fontSize: 14,
      }
    },
    body2: {
      fontSize: 18,
      fontWeight: 600,
      '@media (max-width:1000px)': {
        fontSize: 16,
      },
      '@media (max-width:500px)': {
        fontSize: 14,
      }
    }
  },
});

export default theme;
