import { Pagination as AntPagination } from 'antd';
import styled, { css } from 'styled-components';

export declare type onChangeType = (page: number) => void;

const PaginationWrapper = styled(AntPagination)<{ margin?: string }>(
  ({ margin, theme }) => css`
    margin: ${margin || '0 0 0 0'};
    text-align: center;

    li {
      border: none;
      background: transparent;

      &:first-child button {
        background: transparent;
        color: ${theme.colors.textDark};
        border-color: ${theme.colors.textDark};
        border-radius: 50%;
      }

      &:last-child button {
        background: transparent;
        color: ${theme.colors.textDark};
        border-color: ${theme.colors.textDark};
        border-radius: 50%;
      }

      a {
        color: ${theme.colors.textMuted};
        font-size: 1.05rem;
      }
    }
  `,
);

export const Pagination = ({ onChange, margin }: { onChange: onChangeType; margin?: string }) => (
  <PaginationWrapper margin={margin} onChange={onChange} defaultCurrent={1} total={50} />
);
