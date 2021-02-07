import { createGlobalStyle } from 'styled-components';

export const PopoverStyle = createGlobalStyle`
  .ant-popover {
    position: fixed;
  }
  .ant-popover-inner,
  .ant-popover-inner-content {
    border-radius: ${({ theme }) => theme.radius};
  }
  .ant-popover-inner-content {
    padding: 20px 30px;
    border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  }

  .ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
    right: 22px;
  }
`;
