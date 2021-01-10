import { Pagination } from 'antd';
import React from 'react';
import cn from 'classnames';
import style from './style.module.scss';

export declare type onChangeType = (page: number) => void;

const PaginationWrapper: React.FC<{ onChange: onChangeType; className?: string }> = ({
  onChange,
  className,
}): JSX.Element => (
  <Pagination
    onChange={onChange}
    className={cn(style.pagination, className)}
    defaultCurrent={1}
    total={50}
  />
);

export default PaginationWrapper;
