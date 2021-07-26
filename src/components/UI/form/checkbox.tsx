import React, { FC, InputHTMLAttributes, LegacyRef } from 'react';
import styled from 'styled-components';

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  innerRef?: LegacyRef<any>;
  required?: boolean;
}

export const Checkbox: FC<ICheckBox> = ({ children, className, innerRef, required, ...rest }) => {
  return (
    <Label className={className}>
      <Input type='checkbox' {...rest} ref={innerRef} />
      <CheckBoxImage />
      {children && (
        <Text>
          {children}
          <Mark required={required}>*</Mark>
        </Text>
      )}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: baseline;
`;

const CheckBoxImage = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  fill: transparent;
  background-image: url('/images/icons/checkbox/uncheck.svg');
  background-size: cover;
`;

const Input = styled.input<{ ref: any }>`
  display: none;

  &:checked + ${CheckBoxImage} {
    background-image: url('/images/icons/checkbox/check.svg');
  }

  &:checked:disabled + ${CheckBoxImage} {
    background-image: url('/images/icons/checkbox/disable.svg');
  }
`;

const Text = styled.span<{ required?: boolean }>`
  top: -2px;
  padding-left: 10px;
  position: relative;
`;

const Mark = styled.span<{ required?: boolean }>`
  padding-left: 2px;
  display: ${({ required }) => (required ? 'inline-block' : 'none')};
  color: ${({ theme }) => theme.colors.pink};
  position: relative;
  top: 2px;
`;
