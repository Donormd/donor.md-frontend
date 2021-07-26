import styled from 'styled-components';

export declare type LinkProps = {
  underline?: boolean;
  color?: string;
  bold?: boolean;
  margin?: boolean | string;
};

export const StyledLink = styled.a<LinkProps>`
  color: ${({ color, theme }) => (!color ? theme.textDark : `${theme[color] || color}`)};

  margin-bottom: ${({ margin }) => (!margin ? 0 : `${margin || '0.5rem'}`)};

  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  &:hover {
    color: ${({ color, theme }) =>
      color && theme[`${color}Dark`] ? theme[`${color}Dark`] : 'black'};
    text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  }
`;
