import React from "react";
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import ThemeSettings from "./layouts/FullLayout/Customizer/settings";
import Themeroutes from "./routes/Router";
const App = () => {
  const routing = useRoutes(Themeroutes);
  const theme = ThemeSettings();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
};

export default App;
