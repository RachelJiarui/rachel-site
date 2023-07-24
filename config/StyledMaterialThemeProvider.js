import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme'; // Import your custom theme from theme.js

const MyThemeProvider = ({ children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </StylesProvider>
);

export default MyThemeProvider;
