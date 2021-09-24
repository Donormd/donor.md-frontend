import { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';

import { hexToRGB } from '../../../core/helpers/converters';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  scale?: 'sm' | 'md' | 'lg';
}

export interface IInputWrapperProps {
  className?: string;
  scale: 'sm' | 'md' | 'lg';
}

const FileInput = forwardRef<HTMLInputElement, IInputProps>(({ scale = 'md', ...rest }, ref) => {
  const [isSelect, setSelect] = useState(false);
  return (
    <InputLabel>
      <StyledFileInput
        onChange={(data) => {
          setSelect(!!data.target.value.length);
        }}
        {...rest}
        ref={ref}
        scale={scale}
        type='file'
      />
      <HiddenInput scale={scale}>
        <span>{isSelect ? 'Выбран 1 файл' : 'Выбрать файл'}</span> &#128391;
      </HiddenInput>
    </InputLabel>
  );
});

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ scale = 'md', type = 'text', ...rest }, ref) => {
    if (type === 'file') return <FileInput {...rest} ref={ref} type={type} scale={scale} />;
    return <StyledInput {...rest} type={type} scale={scale} ref={ref} />;
  },
);

export const StyledInput = styled.input<IInputWrapperProps>(
  ({ scale, theme }) => css`
    appearance: none;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${hexToRGB(theme.colors.danger, 0.5)};
    padding: ${theme.sizes.controls[scale].padding};
    font-size: ${theme.sizes.controls[scale].fontSize};
    border-radius: ${theme.sizes.controls[scale].radius};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      background: ${hexToRGB(theme.colors.primary, 0.3)};
    }

    &::placeholder {
      font-size: 0.9em;
      color: ${theme.colors.textMuted};
    }

    &:hover {
      border-color: ${theme.colors.danger};
    }

    &:focus {
      outline: 0;
      border-color: ${theme.colors.danger};
      box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
    }
  `,
);

const InputLabel = styled.label`
  cursor: pointer;
`;

const StyledFileInput = styled(StyledInput)`
  display: none;
`;

const HiddenInput = styled.span<{ scale: 'sm' | 'md' | 'lg' }>(
  ({ scale, theme }) => css`
    display: flex;
    justify-content: space-between;
    background: white;
    border: 1px solid ${hexToRGB(theme.colors.danger, 0.5)};
    padding: ${theme.sizes.controls[scale].padding};
    font-size: ${theme.sizes.controls[scale].fontSize};
    border-radius: ${theme.sizes.controls[scale].radius};
  `,
);
