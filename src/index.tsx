import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, AuthProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

