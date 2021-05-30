import { FC } from 'react';
import { Pagination as AntPagination } from 'antd';
import styled from 'styled-components';

export declare type onChangeType = (page: number) => void;

const Pagination = styled(AntPagination)`
  text-align: center;

  li {
    border: none;
    background: transparent;

    &:first-child button {
      background: transparent;
      color: ${({ theme }) => theme.textDark};
      border-color: ${({ theme }) => theme.textDark};
      border-radius: 50%;
    }

    &:last-child button {
      background: transparent;
      color: ${({ theme }) => theme.textDark};
      border-color: ${({ theme }) => theme.textDark};
      border-radius: 50%;
    }

    a {
      color: ${({ theme }) => theme.textMuted};
      font-size: 1.05rem;
    }
`;

const PaginationWrapper: FC<{ onChange: onChangeType }> = ({ onChange }) => (
  <Pagination onChange={onChange} defaultCurrent={1} total={50} />
);

export default PaginationWrapper;
