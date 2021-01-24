import React from 'react';
import { Upload, message, Button } from 'antd';
import Image from 'next/image';

export declare type Props = {
  maxCount: number;
};

const onChange = (info: any) => {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const InputUpload: React.FC<Props> = (props): JSX.Element => {
  return (
    <Upload {...props} onChange={onChange}>
      <Button>
        Выбрать файл
        <Image src='/images/clip.svg' width={15} height={15} />
      </Button>
    </Upload>
  );
};

export default InputUpload;
