import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*:after,
*:before {
  box-sizing: border-box;
}

::selection {
  color: white;
  background: ${({ theme }) => theme.red};
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
  color: ${({ theme }) => theme.textDark};
  background: ${({ theme }) => theme.backgroundSm};
}

@media (min-width: 992px) {
  body {
    background: ${({ theme }) => theme.background};
  }
}

`;

export default GlobalStyles;
