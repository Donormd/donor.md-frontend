import { InputHTMLAttributes, LegacyRef } from 'react';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  scale?: 'sm' | 'md' | 'lg';
  innerRef?: LegacyRef<any>;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

interface IInputWrapperProps {
  className?: string;
  scale: 'sm' | 'md' | 'lg';
  ref?: any;
  error?: string;
}

export const Input = ({
  innerRef,
  scale = 'md',
  type = 'text',
  error,
  placeholder,
  required,
  ...rest
}: IProps) => {
  return (
    <InputWrapper placeholder={placeholder}>
      <StyledInput {...rest} ref={innerRef} type={type} scale={scale} error={error} required />
      {placeholder && <Placeholder required={required}>{placeholder}</Placeholder>}
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ placeholder?: string }>`
  padding-top: ${({ placeholder }) => placeholder && '18px'};
  position: relative;
`;

const Placeholder = styled.span<{ required?: boolean }>`
  position: absolute;
  bottom: 30px;
  left: 6px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.space};
  transition: all 0.15s ease-out;
  user-select: none;

  &::after {
    display: ${({ required }) => (required ? 'inline-block' : 'none')};
    color: ${({ theme }) => theme.colors.craiola};
    content: '*';
    margin-left: 2px;
  }

  &:hover {
    bottom: 50px;
    font-size: 0.8125em;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.85em;
  color: ${({ theme }) => theme.colors.craiola};
  height: 14px;
  margin: 5px 0;
`;

const StyledInput = styled.input<IInputWrapperProps>`
  width: 100%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.space};
  padding: ${({ scale, theme }) => theme.sizes.inputs[scale].padding};
  font-size: ${({ scale, theme }) => theme.sizes.inputs[scale].fontSize};
  border: none;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.craiola : theme.colors.platinumGray)};

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.smokyWhite};
  }

  &:focus {
    outline: 0;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important;
  }

  &:hover ~ ${Placeholder}, &:focus ~ ${Placeholder} {
    bottom: 50px;
    font-size: 0.8125em;
  }

  &:valid ~ ${Placeholder} {
    bottom: 50px;
    font-size: 0.8125em;
  }
`;
