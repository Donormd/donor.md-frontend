import { Button as AntButton } from 'antd';
import styled from 'styled-components';

declare type ButtonProps = {
  color: 'primary' | 'red';
  outlined?: boolean;
  disabled?: boolean;
  block?: boolean;
};

export const Button = styled(AntButton)<ButtonProps>`
  color: ${({ theme, outlined }) => (!outlined && 'white') || theme.red};
  border-color: ${({ theme, color, outlined }) => (!outlined && theme[color]) || theme.red};
  background: ${({ theme, color, outlined }) =>
    (!outlined && theme[color]) || color === 'primary' ? theme[color] : 'white'};

  &:hover,
  &:focus {
    color: white;
    border-color: ${({ theme, color, outlined }) =>
      (!outlined && theme[`${color}Dark`]) || theme[color]};
    background: ${({ theme, color, outlined }) =>
      (!outlined && theme[color]) || color === 'primary' ? theme[`${color}Dark`] : theme[color]};
  }
`;
