import React from 'react';
import style from './style.module.scss';

const Logo: React.FC = (): JSX.Element => (
  <div className={style.logo}>
    <img
      className={style.logo__image}
      src='/images/logo/heart.svg'
      alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
    />
    <p className={style.logo__brand}>donor.md</p>
    <p className={style.logo__slogan}>Люди помогают людям</p>
  </div>
);

export default Logo;
