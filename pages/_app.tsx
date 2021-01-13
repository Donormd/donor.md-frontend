import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'antd/dist/antd.css';
import '../styles/globals.scss';
import theme from '../components/UI/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
