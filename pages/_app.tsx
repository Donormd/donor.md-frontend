import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { theme } from '../components/UI/theme';
import TypographyStyles from '../styles/typography';
import GlobalStyles from '../styles/globals';
import { store } from '../redux/store';
import { AuthProvider } from '../hooks/useAuth';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          <TypographyStyles />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
