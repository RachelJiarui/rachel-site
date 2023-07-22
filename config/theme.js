import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// specific themes
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  overrides: {
    MuiTypography: {
      h2: {
        fontSize: 78,
      },
    },
  },
});

export default theme;
