import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>

        <Toaster 
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              paddingLeft: '1rem',
            },
            duration: 5000,
          }}
        />
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  )
}
