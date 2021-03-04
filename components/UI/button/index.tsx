import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

type ButtonVariant = 'primary' | 'danger' | 'outline-primary' | 'outline-danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  rest?: any;
}

export interface ButtonWrapperProps {
  active: boolean;
  className?: string;
  disabled: boolean;
  variant: ButtonVariant;
  size: 'sm' | 'md' | 'lg';
  type: 'button' | 'submit' | 'reset';
}

const buttonThemes = {
  primary: {
    default: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    hover: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    focus: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
  },
  danger: {
    default: {
      color: theme.colors.white,
      background: theme.colors.danger,
      borderColor: theme.colors.danger,
    },
    hover: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    focus: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
  },
  'outline-primary': {
    default: {
      color: theme.colors.danger,
      background: theme.colors.white,
      borderColor: theme.colors.danger,
    },
    hover: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    focus: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
  },
  'outline-danger': {
    default: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    hover: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
    focus: {
      color: theme.colors.danger,
      background: theme.colors.primary,
      borderColor: theme.colors.danger,
    },
  },
};

export const StyledButton = styled.button<ButtonWrapperProps>`
  cursor: pointer;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  color: ${({ variant }) => buttonThemes[variant].default.color};
  background: ${({ variant }) => buttonThemes[variant].default.background};
  border: 1px solid ${({ variant }) => buttonThemes[variant].default.borderColor};
  padding: ${({ size, theme }) => theme.sizes.button[size].padding};
  font-size: ${({ size, theme }) => theme.sizes.button[size].fontSize};
  border-radius: ${({ theme }) => theme.button.radius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: ${({ variant }) => buttonThemes[variant].hover.color};
    background: ${({ variant }) => buttonThemes[variant].hover.background};
    border: 1px solid ${({ variant }) => buttonThemes[variant].hover.borderColor};
  }

  &:focus {
    color: ${({ variant }) => buttonThemes[variant].focus.color};
    background: ${({ variant }) => buttonThemes[variant].focus.background};
    border: 1px solid ${({ variant }) => buttonThemes[variant].focus.borderColor};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  active = false,
  className,
  disabled = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      className={className}
      type={type}
      size={size}
      variant={variant}
      active={active}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
