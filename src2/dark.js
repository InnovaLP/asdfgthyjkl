import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Boton from './boton';
import {
  CssBaseline,
  AppBar,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <center><Typography variant="h1" aling="center">PIRLOTV</Typography></center>
      <Typography style={{ marginTop: 50 }}>
        Text should be white, background should be dark
      </Typography>
    </ThemeProvider>
  );
};

export default App;
