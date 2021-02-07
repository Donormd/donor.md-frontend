import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'antd/dist/antd.css';
import theme from '../components/UI/theme';
import TypographyStyles from '../styles/typography';
import GlobalStyles from '../styles/globals';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <TypographyStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
