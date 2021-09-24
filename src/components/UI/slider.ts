import { Slider as AntSlider, SliderSingleProps } from 'antd';
import styled, { css } from 'styled-components';

export const Slider = styled(AntSlider)<SliderSingleProps>(
  ({ theme }) => css`
    .ant-slider-track {
      background: ${theme.colors.red};
    }

    .ant-slider-step {
      background: ${theme.colors.primaryDark};
    }

    &.ant-slider:hover .ant-slider-rail {
      background: ${theme.colors.primaryDark};
    }

    .ant-slider-dot-active {
      border-color: ${theme.colors.redDiluted};
    }

    &.ant-slider:hover .ant-slider-track {
      background: ${theme.colors.redDark};
    }

    .ant-slider-handle {
      border: solid 2px ${theme.colors.redDark};
    }
    &.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: ${theme.colors.redDark};
    }
  `,
);
