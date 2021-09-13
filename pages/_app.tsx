import 'antd/dist/antd.css';
import 'normalize.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import configSEO from '../next-seo.config';
import { PlanningButton } from '../src/components/planning-button';
import { theme } from '../src/components/UI/theme';
import { ErrorBoundary } from '../src/core/decorators/ErrorBoundary';
import { DebugObserver } from '../src/store/debugObserver';
import { GlobalStyles } from '../src/styles/globals';
import { TypographyStyles } from '../src/styles/typography';

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
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <DebugObserver />
              <GlobalStyles />
              <TypographyStyles />
              <DefaultSeo {...configSEO} />
              <Component {...pageProps} />
              <PlanningButton />
            </RecoilRoot>
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
