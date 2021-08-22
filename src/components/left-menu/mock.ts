export interface IMenuLinkProps {
  key: number;
  imageSrc: string;
  href: string;
  text: string;
}

export const mock: IMenuLinkProps[] = [
  {
    key: 0,
    imageSrc: '../../images/pages/dashboard/left-aside/details.svg',
    href: '/dashboard/details',
    text: 'Мои данные',
  },
  {
    key: 1,
    imageSrc: '../../images/pages/dashboard/left-aside/donations.svg',
    href: '/dashboard/donations',
    text: 'Мои донации',
  },
  {
    key: 2,
    imageSrc: '../../images/pages/dashboard/left-aside/reviews.svg',
    href: '/dashboard/reviews',
    text: 'Мои отзывы',
  },
  {
    key: 3,
    imageSrc: '../../images/pages/dashboard/left-aside/settings.svg',
    href: '/dashboard/settings',
    text: 'Настройки',
  },
  {
    key: 4,
    imageSrc: '../../images/pages/dashboard/left-aside/bonuses.svg',
    href: '/dashboard/bonuses',
    text: 'Бонусы',
  },
  {
    key: 5,
    imageSrc: '../../images/pages/dashboard/left-aside/recipients.svg',
    href: '/dashboard/recipients',
    text: 'Реципиенты',
  },
  {
    key: 6,
    imageSrc: '../../images/pages/dashboard/left-aside/logout.svg',
    href: '/dashboard/logout',
    text: 'Выход',
  },
];
