import React, { InputHTMLAttributes, LegacyRef, useState } from 'react';
import styled from 'styled-components';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  scale?: 'sm' | 'md' | 'lg';
  innerRef?: LegacyRef<any>;
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

const InputLabel = styled.label`
  cursor: pointer;
`;

const StyledFileInput = styled(StyledInput)`
  display: none;
`;

const HiddenInput = styled.span<{ scale: 'sm' | 'md' | 'lg' }>`
  display: flex;
  justify-content: space-between;
  background: white;
  border: 1px solid ${({ theme }) => `${theme.colors.danger}50`};
  padding: ${({ scale, theme }) => theme.sizes.controls[scale].padding};
  font-size: ${({ scale, theme }) => theme.sizes.controls[scale].fontSize};
  border-radius: ${({ scale, theme }) => theme.sizes.controls[scale].radius};
`;

const FileInput: React.FC<IInputProps> = ({ innerRef, scale = 'md', ...rest }): JSX.Element => {
  const [isSelect, useSelect] = useState(false);
  return (
    <InputLabel>
      <StyledFileInput
        onChange={(data) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useSelect(!!data.target.value.length);
        }}
        {...rest}
        ref={innerRef}
        scale={scale}
        type='file'
      />
      <HiddenInput scale={scale}>
        <span>{isSelect ? 'Выбран 1 файл' : 'Выбрать файл'}</span> &#128391;
      </HiddenInput>
    </InputLabel>
  );
};

export const Input: React.FC<IInputProps> = ({
  innerRef,
  scale = 'md',
  type = 'text',
  ...rest
}) => {
  if (type === 'file') return <FileInput {...rest} innerRef={innerRef} type={type} scale={scale} />;
  return <StyledInput {...rest} ref={innerRef} type={type} scale={scale} />;
};
