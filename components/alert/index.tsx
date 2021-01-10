import React from 'react';
import cn from 'classnames';
import style from './style.module.scss';

export declare type Props = {
  className?: string;
  message?: string;
  children?: React.ReactNode;
};

const getBody = (body: string | React.ReactNode, className?: string): JSX.Element => (
  <div className={cn(style.alert, className)}>{body}</div>
);

const Alert: React.FC<Props> = ({ className, message = '', children }): JSX.Element => {
  if (children) return getBody(children, className);
  return getBody(message, className);
};

export default React.memo(Alert);
