import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./Context/AuthContext";

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  )
}
