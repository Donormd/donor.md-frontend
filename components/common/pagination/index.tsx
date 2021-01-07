/* eslint no-console:0 */
import { Pagination } from 'antd';
import React from 'react';
import style from './style.module.scss';

export declare type onChangeType = (page: number) => void;

const PaginationWrapper: React.FC<{ onChange: onChangeType }> = ({ onChange }): JSX.Element => (
  <Pagination onChange={onChange} className={style.pagination} defaultCurrent={1} total={50} />
);

export default PaginationWrapper;
