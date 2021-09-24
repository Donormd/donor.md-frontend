const colors = {
  black: '#000000',
  blackGray: '#212529',
  red: '#ff4d4b',
  redDark: '#CC353D',
  redDiluted: '#f8bab4',
  background: '#fffafa',
  backgroundSm: '#fff7f4',
  primary: '#ffecdd',
  primaryDark: '#FFF1E6',
  textDark: '#333333',
  textGray: '#595757',
  textMuted: '#808080',
  white: '#ffffff',
  danger: '#ff4d4b',
  pink: '#f8bab4',
  green: '#00A17B',
} as const;

const media = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
} as const;

const sizes = {
  controls: {
    sm: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
      radius: '12px',
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      radius: '16px',
    },
    lg: {
      padding: '0.5rem 1.25rem',
      fontSize: '1.2rem',
      radius: '20px',
    },
  },
} as const;

export const theme = {
  colors,
  media,
  sizes,
  radius: '25px',
} as const;

export type ColorsType = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    media: typeof media;
    sizes: typeof sizes;
    radius: string;
  }
}
