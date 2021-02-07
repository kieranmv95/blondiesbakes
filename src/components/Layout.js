import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
