import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = styled(AntCheckbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: transparent;
    border-color: ${(props) => props.theme.red};
    border-color: ${(props) => props.theme.red};
  }

  .ant-checkbox-checked::after {
    border: 1px solid ${(props) => props.theme.red};
  }

  .ant-checkbox-wrapper:hover,
  .ant-checkbox:hover,
  .ant-checkbox-input:focus {
    border-color: ${(props) => props.theme.redDark};
  }

  .ant-checkbox-inner::after {
    border: 1px solid ${(props) => props.theme.redDark};
    border-top: 0;
    border-left: 0;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
  }
`;
