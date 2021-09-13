import { createGlobalStyle } from 'styled-components';

export const TypographyStyles = createGlobalStyle`
h6,
h5,
h4,
h3,
h2,
h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1,
.h1 {
  font-size: calc(0.01024 * 100vw + 28.7221px);
}

h2,
.h2 {
  font-size: calc(0.00909 * 100vw + 21.0909px);
}

h3,
.h3 {
  font-size: calc(0.00568 * 100vw + 17.909px);
}

h4,
.h4 {
  font-size: calc(0.0034 * 100vw + 14.909px);
}

h5,
.h5 {
  font-size: calc(0.0034 * 100vw + 11.909px);
}

h6,
.h6 {
  font-size: calc(0.0034 * 100vw + 9.909px);
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}
`;
