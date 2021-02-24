import { Slider as AntSlider } from 'antd';
import styled from 'styled-components';

export const Slider = styled(AntSlider)`
  .ant-slider-track {
    background: ${({ theme }) => theme.red};
  }

  .ant-slider-step {
    background: ${({ theme }) => `${theme.primaryDark}99`};
  }

  &.ant-slider:hover .ant-slider-rail {
    background: ${({ theme }) => `${theme.primaryDark}`};
  }

  .ant-slider-dot-active {
    border-color: ${({ theme }) => theme.redDiluted};
  }

  &.ant-slider:hover .ant-slider-track {
    background: ${({ theme }) => theme.redDark};
  }

  .ant-slider-handle {
    border: solid 2px ${({ theme }) => theme.redDark};
  }
  &.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: ${({ theme }) => theme.redDark};
  }
`;
