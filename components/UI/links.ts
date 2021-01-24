import styled from 'styled-components';

declare type LinkProps = {
  underline?: boolean;
  color?: string;
  bold?: boolean;
};

export const StyledLink = styled.a<LinkProps>`
  color: ${({ color, theme }) => color && theme[color]};
  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  &:hover {
    color: ${({ color, theme }) =>
      color && theme[`${color}Dark`] ? theme[`${color}Dark`] : 'black'};
    text-decoration: underline;
  }
`;
