import React from 'react';
import InputUpload from './input';

export declare type Props = { type: 'input' | 'avatar'; maxCount: number };

const Uploader: React.FC<Props> = ({ type, maxCount }): JSX.Element => {
  if (type === 'input') return <InputUpload maxCount={maxCount} />;

  return <InputUpload maxCount={maxCount} />;
};

export default Uploader;
