import { Switch as AntSwitch } from 'antd';
import styled from 'styled-components';

export const Switch = styled(AntSwitch)`
  &.ant-switch {
    border: 2px solid ${({ theme }) => theme.colors.redDiluted};
    background: transparent;
  }
  .ant-switch-handle {
    width: 14px;
    height: 14px;
  }
  .ant-switch-handle:before {
    background: ${({ theme }) => theme.colors.redDiluted};
  }
  &.ant-switch:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.redDiluted}10`};
  }
`;
