import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Select = styled(AntSelect)`
  width: 100%;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${(props) => props.theme.redDiluted};
    font-size: 1rem;
    border-radius: 16px;
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
