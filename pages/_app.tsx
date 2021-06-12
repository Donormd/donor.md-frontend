import 'antd/dist/antd.css';
import 'normalize.css';

import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { PlanningButton } from '../components/planning-button';
import { theme } from '../components/UI/theme';
import { AuthProvider } from '../core/hooks/useAuth';
import configSEO from '../next-seo.config';
import { store } from '../redux/store';
import GlobalStyles from '../styles/globals';
import TypographyStyles from '../styles/typography';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          <TypographyStyles />
          <DefaultSeo {...configSEO} />
          <Component {...pageProps} />
          <PlanningButton />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
