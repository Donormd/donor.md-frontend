import styled from 'styled-components';

import { ColorsType } from './theme';

export declare type LinkProps = {
  underline?: boolean;
  color?: keyof ColorsType;
  bold?: boolean;
  margin?: boolean | string;
};

export const StyledLink = styled.a<LinkProps>`
  color: ${({ color, theme }) => (!color ? theme.colors.textDark : `${theme.colors[color] || color}`)};

  margin-bottom: ${({ margin }) => (!margin ? 0 : `${margin || '0.5rem'}`)};

  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  &:hover {
    color: ${({ color, theme }) => (color && theme.colors[color] ? theme.colors[color] : 'black')};
    text-decoration: ${({ underline }) => (underline ? 'underline' : '')};
  }
`;
