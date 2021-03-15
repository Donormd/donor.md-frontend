import { createGlobalStyle } from 'styled-components';
import { theme } from '../components/UI/theme';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*:after,
*:before {
  box-sizing: border-box;
  transition: all 0.3s ease-in;
}

::selection {
  color: white;
  background: ${theme.red};
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
  color: ${theme.textDark};
  background: ${theme.backgroundSm};
}

@media (min-width: 992px) {
  body {
    background: ${theme.background};
  }
}

`;

export default GlobalStyles;
