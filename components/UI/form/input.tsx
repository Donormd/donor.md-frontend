import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  scale?: 'sm' | 'md' | 'lg';
  inputRef?: any;
}

export interface IInputWrapperProps {
  className?: string;
  scale: 'sm' | 'md' | 'lg';
  ref?: any;
}

export const StyledInput = styled.input<IInputWrapperProps>`
  appearance: none;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => `${theme.colors.danger}50`};
  padding: ${({ scale, theme }) => theme.sizes.controls[scale].padding};
  font-size: ${({ scale, theme }) => theme.sizes.controls[scale].fontSize};
  border-radius: ${({ scale, theme }) => theme.sizes.controls[scale].radius};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => `${theme.primary}30`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textMuted};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.danger};
  }

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.danger};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;

export const Input: React.FC<IInputProps> = ({
  inputRef,
  scale = 'md',
  type = 'text',
  ...rest
}) => {
  return <StyledInput {...rest} ref={inputRef} type={type} scale={scale} />;
};
