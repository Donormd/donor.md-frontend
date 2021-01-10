import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import style from './style.module.scss';

export declare type Props = {
  className?: string;
  src: string;
  fullname: string;
  count: number;
  story: string;
};

const DonorStory: React.FC<Props> = ({ src, fullname, count, story, className }): JSX.Element => (
  <article className={cn(style.story, className)}>
    <Image src={src} width={70} height={70} layout='fixed' />
    <div className={style.story__head}>
      <h4 className={style.head__name}>{fullname}</h4>
      <p className={style.head__count}>Количество донаций {count}</p>
    </div>
    <p className={style.story__body}>{story}</p>
  </article>
);

export default React.memo(DonorStory);
