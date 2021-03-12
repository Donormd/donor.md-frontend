export declare type MockType = Array<{
  id: number | string;
  href: string;
  text: string;
}>;
export const column1: MockType = [
  {
    id: 1,
    href: '/articles/#about-donation',
    text: 'Как готовиться',
  },
  {
    id: 2,
    href: '/articles/#places',
    text: 'Где сдать ?',
  },
  {
    id: 3,
    href: '/articles/#monitoring',
    text: 'Мониторинг',
  },
  {
    id: 4,
    href: '/articles/useful',
    text: 'Полезное',
  },
];

export const column2: MockType = [
  {
    id: 1,
    href: '/articles/about',
    text: 'О нас',
  },
  {
    id: 2,
    href: '/articles/top-donors',
    text: 'Топ-доноров сервиса',
  },
  {
    id: 3,
    href: '/donor-stories',
    text: 'Истории доноров',
  },
  {
    id: 4,
    href: '/articles/privacy-policy',
    text: 'Политика конфиденциальности',
  },
];

export const column3: MockType = [
  {
    id: 1,
    href: '/articles/corporate-donation',
    text: 'Корпоративное донорство',
  },
  {
    id: 2,
    href: '/articles/bonus-program',
    text: 'Бонусная программа',
  },
  {
    id: 3,
    href: '/articles/become-volunteer',
    text: 'Волонтерам',
  },
  {
    id: 4,
    href: '/articles/support-project',
    text: 'Поддержать',
  },
];
