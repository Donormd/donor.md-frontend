import {
  Form as AntForm,
  Input as AntInput,
  DatePicker as AntDatePicker,
  Select as AntSelect,
  InputNumber as AntInputNumber,
  Checkbox as AntCheckbox,
} from 'antd';
import styled from 'styled-components';

export const Form = AntForm;

export declare type FormItemProps = {
  columns?: number;
};
export const FormItem = styled(AntForm.Item)<FormItemProps>`
  display: grid;

  .ant-form-item-label {
    text-align: left;
  }
  @media (min-width: 992px) {
    grid-template-columns: ${({ columns: c }) => (c ? `repeat(${c}, 1fr)` : `repeat(2, 1fr)`)};
  }
`;
export const Input = styled(AntInput)`
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
export const InputPassword = styled(AntInput.Password)`
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus,
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%) !important;
  }
`;
export const InputNumber = styled(AntInputNumber)`
  width: 100%;
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  .ant-input-number-handler-wrap {
    border-radius: ${(props) => `0 ${props.theme.radius} ${props.theme.radius} 0`};
  }

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus,
  &.ant-input-number:focus,
  &.ant-input-number-focused {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%) !important;
  }

  .ant-input-number-handler:hover,
  .ant-input-number-handler-down-inner {
    color: ${(props) => props.theme.red};
  }
`;
export const TextArea = styled(AntInput.TextArea)`
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
export const DatePicker = styled(AntDatePicker)`
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};
  display: block;

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus,
  &.ant-picker-focused {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
export const Select = styled(AntSelect)`
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${(props) => props.theme.redDiluted};
    border-radius: ${(props) => props.theme.radius};
    display: block;
  }

  &.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${(props) => props.theme.red};
  }

  &:focus,
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
export const Checkbox = styled(AntCheckbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: transparent;
    border-color: ${(props) => props.theme.red};
    border-color: ${(props) => props.theme.red};
  }

  .ant-checkbox-checked::after {
    border: 1px solid ${(props) => props.theme.red};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${(props) => props.theme.redDark};
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border: 1px solid ${(props) => props.theme.redDark};
    border-top: 0;
    border-left: 0;
  }
`;
