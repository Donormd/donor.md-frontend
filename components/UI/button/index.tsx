import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

type ButtonVariant = 'primary' | 'danger' | 'outline-primary' | 'outline-danger';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}

export interface IButtonWrapperProps {
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

export const StyledButton = styled.button<IButtonWrapperProps>`
  cursor: pointer;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  color: ${({ variant }) => buttonThemes[variant].default.color};
  background: ${({ variant }) => buttonThemes[variant].default.background};
  border: 1px solid ${({ variant }) => buttonThemes[variant].default.borderColor};
  padding: ${({ size, theme }) => theme.sizes.controls[size].padding};
  font-size: ${({ size, theme }) => theme.sizes.controls[size].fontSize};
  border-radius: ${({ size, theme }) => theme.sizes.controls[size].radius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: ${({ variant }) => buttonThemes[variant].hover.color};
    background: ${({ variant }) => buttonThemes[variant].hover.background};
    border: 1px solid ${({ variant }) => buttonThemes[variant].hover.borderColor};
  }

  &:focus {
    outline: 0;
    color: ${({ variant }) => buttonThemes[variant].focus.color};
    background: ${({ variant }) => buttonThemes[variant].focus.background};
    border: 1px solid ${({ variant }) => buttonThemes[variant].focus.borderColor};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;

export const Button: React.FC<IButtonProps> = ({
  children,
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
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
