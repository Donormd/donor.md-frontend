import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  black: '#000000',
  red: '#ff434b',
  redDark: '#CC353D',
  redDiluted: '#f8bab4',
  background: '#fffafa',
  backgroundSm: '#fff7f4',
  primary: '#ffecdd',
  primaryDark: '#FFF1E6',
  textDark: '#333333',
  textGray: '#595757',
  textMuted: '#808080',
  radius: '25px',
};

export default theme;
declare module 'styled-components' {
  export interface DefaultTheme {
    black: string;
    red: string;
    redDark: string;
    redDiluted: string;
    background: string;
    backgroundSm: string;
    primary: string;
    primaryDark: string;
    textDark: string;
    textGray: string;
    textMuted: string;
    radius: string;
  }
}
