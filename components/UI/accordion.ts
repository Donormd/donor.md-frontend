import { Collapse } from 'antd';
import styled from 'styled-components';

export const Accordion = styled(Collapse)`
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }

  &.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    left: 0;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding-left: 20px;
  }
`;
