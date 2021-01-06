import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import style from './style.module.scss';

const aboutDonationsLinks = [
  {
    id: 1,
    href: '/#about-donation',
    text: 'Как готовиться',
  },
  {
    id: 2,
    href: '/#places',
    text: 'Где сдать ?',
  },
  {
    id: 3,
    href: '/#monitoring',
    text: 'Мониторинг',
  },
  {
    id: 4,
    href: '/',
    text: 'Полезное',
  },
];

const cooperationLinks = [
  {
    id: 1,
    href: '/corporate-donation',
    text: 'Копаративное донорство',
  },
  {
    id: 2,
    href: '/bonus-program',
    text: 'Бонусная программа',
  },
  {
    id: 3,
    href: '/become-volunteer',
    text: 'Волонтерам',
  },
  {
    id: 4,
    href: '/support-project',
    text: 'Поддержать',
  },
];

const aboutLinks = [
  {
    id: 1,
    href: '/about',
    text: 'О нас',
  },
  {
    id: 2,
    href: '/top-donors',
    text: 'Топ-доноров сервиса',
  },
  {
    id: 3,
    href: '/donor-stories',
    text: 'Истории доноров',
  },
  {
    id: 4,
    href: '/privacy-policy',
    text: 'Политика конфиденциальности',
  },
];

const Footer: React.FC = (): JSX.Element => (
  <footer className={style.footer}>
    <div className={cn('container', style.footer__grid)}>
      <div className={style.footer__column}>
        <h3 className={cn(style.column__title, style.brand)}>donor.md</h3>
        <p className={style.brand__description}>
          Проект созданный с концепцией «Люди помогают людям» для формирования стабильной базы крови
          восполняемой регулярными донорами.
        </p>
      </div>
      <div className={style.footer__column}>
        <h3 className={style.column__title}>О донорстве</h3>
        <ul className={style.column__list}>
          {aboutDonationsLinks.map((item) => (
            <li className={style.list__item}>
              <Link key={item.id} href={item.href}>
                <a className={style.item__link}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.footer__column}>
        <h3 className={style.column__title}>О нас</h3>
        <ul className={style.column__list}>
          {cooperationLinks.map((item) => (
            <li className={style.list__item}>
              <Link key={item.id} href={item.href}>
                <a className={style.item__link}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.footer__column}>
        <h3 className={style.column__title}>Сотрудничество</h3>
        <ul className={style.column__list}>
          {aboutLinks.map((item) => (
            <li className={style.list__item}>
              <Link key={item.id} href={item.href}>
                <a className={style.item__link}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
