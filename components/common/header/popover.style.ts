import { createGlobalStyle } from 'styled-components';
import { theme } from '../../UI/theme';

export const PopoverStyle = createGlobalStyle`
  .ant-popover {
    position: fixed;
  }
  .ant-popover-inner,
  .ant-popover-inner-content {
    border-radius: ${theme.radius};
  }
  .ant-popover-inner-content {
    padding: 20px 30px;
    border: ${`1px solid ${theme.redDiluted}`};
  }

  .ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
    right: 22px;
  }
`;
