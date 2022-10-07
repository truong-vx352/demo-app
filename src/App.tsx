import React from "react";
import "./Style/app.css";
import LandingPage from "./Containers/LandingPageConnect";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
