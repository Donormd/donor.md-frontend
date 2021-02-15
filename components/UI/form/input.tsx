import styled from 'styled-components';
import { Input as AntInput, InputNumber as AntInputNumber } from 'antd';

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
