import 'antd/dist/antd.css';
import 'normalize.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configSEO from '../next-seo.config';
import { PlanningButton } from '../src/components/planning-button';
import { theme } from '../src/components/UI/theme';
import { AuthProvider } from '../src/core/hooks/useAuth';
import { store } from '../src/redux/store';
import GlobalStyles from '../src/styles/globals';
import TypographyStyles from '../src/styles/typography';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(App);
