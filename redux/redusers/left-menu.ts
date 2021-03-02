import { createSlice } from '@reduxjs/toolkit';

export interface IMenuLinkProps {
  key: string | number;
  imageSrc: string;
  href: string;
  text: string;
}

const mock: IMenuLinkProps[] = [
  {
    key: 1,
    imageSrc: '../../public/images/pages/dashboard/left-aside/details.svg',
    href: '/dashboard/details',
    text: 'Мои данные',
  },
  {
    key: 2,
    imageSrc: '../../public/images/pages/dashboard/left-aside/donations.svg',
    href: '/dashboard/donations',
    text: 'Мои донации',
  },
  {
    key: 3,
    imageSrc: '../../public/images/pages/dashboard/left-aside/reviews.svg',
    href: '/dashboard/reviews',
    text: 'Мои отзывы',
  },
  {
    key: 4,
    imageSrc: '../../public/images/pages/dashboard/left-aside/settings.svg',
    href: '/dashboard/settings',
    text: 'Настройки',
  },
  {
    key: 5,
    imageSrc: '../../public/images/pages/dashboard/left-aside/bonuses.svg',
    href: '/dashboard/bonuses',
    text: 'Бонусы',
  },
  {
    key: 6,
    imageSrc: '../../public/images/pages/dashboard/left-aside/recipients.svg',
    href: '/dashboard/recipients',
    text: 'Реципиенты',
  },
  {
    key: 7,
    imageSrc: '../../public/images/pages/dashboard/left-aside/logout.svg',
    href: '/dashboard/logout',
    text: 'Выход',
  },
];

const initialState = {
  data: mock,
  selectId: 0,
};

const leftMenu = createSlice({
  name: 'leftMenu',
  initialState,
  reducers: {
    setMenu(state, action) {
      state.selectId = action.payload;
    },
  },
});

export const { reducer, caseReducers, actions } = leftMenu;
