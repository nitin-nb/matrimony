import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
  palette: {
    primary: {
      main: '#fbc300',
    },
    secondary: {
      main: '#005f4b',
    },
    background: {
      default: '#fef4eb',
    },
    text: {
      primary: '#005f4b',
      secondary: "#ffe873",
      teritory: '#f9e5f2',
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
