import { Button as AntButton } from 'antd';
import styled from 'styled-components';

declare type ButtonProps = {
  active?: boolean;
  color: string;
  variant?: string;
};

export const Button = styled(AntButton)<ButtonProps>`
  color: ${({ theme, color }) => (color && theme[color]) || theme.red};
  border-color: ${({ theme, color }) => (color && theme[color]) || theme.red};
`;
