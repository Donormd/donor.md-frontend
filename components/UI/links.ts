import styled from 'styled-components';

declare type LinkProps = {
  underline?: boolean;
  color?: string;
};

export const StyledLink = styled.a<LinkProps>`
  color: ${({ color, theme }) => color && theme[color]};
  text-decoration: ${(props) => (props.underline ? 'underline' : '')};

  &:hover {
    color: ${({ color, theme }) =>
      color && theme[`${color}Dark`] ? theme[`${color}Dark`] : 'black'};
    text-decoration: underline;
  }
`;
