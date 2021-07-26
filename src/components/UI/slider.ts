import { Slider as AntSlider, SliderSingleProps } from 'antd';
import styled, { css } from 'styled-components';

export const Slider = styled(AntSlider)<SliderSingleProps>(
  ({ theme }) => css`
    .ant-slider-track {
      background: ${theme.red};
    }

    .ant-slider-step {
      background: ${`${theme.primaryDark}99`};
    }

    &.ant-slider:hover .ant-slider-rail {
      background: ${theme.primaryDark};
    }

    .ant-slider-dot-active {
      border-color: ${theme.redDiluted};
    }

    &.ant-slider:hover .ant-slider-track {
      background: ${theme.redDark};
    }

    .ant-slider-handle {
      border: solid 2px ${theme.redDark};
    }
    &.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: ${theme.redDark};
    }
  `,
);
