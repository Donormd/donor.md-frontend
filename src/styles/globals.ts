import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }

    ::selection {
      color: white;
      background: ${theme.colors.red};
    }

    html,
    body,
    #__next {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 100%;
      color: ${theme.colors.textDark};
      background: ${theme.colors.backgroundSm};
    }

    @media (min-width: 992px) {
      body {
        background: ${theme.colors.background};
      }
    }
  `,
);
