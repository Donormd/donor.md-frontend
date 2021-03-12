import { createSlice } from '@reduxjs/toolkit';

export interface IMockItem {
  _id: string;
  image: {
    width: number;
    height: number;
    src: string;
  };
  text: {
    head: string;
    paragraph: string;
  };
  link: string;
}

export interface IMockType {
  home: IMockItem[];
  aboutPage: IMockItem[];
}

const mock: IMockType = {
  home: [
    {
      _id: '1',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/donor-requirements.svg',
      },
      text: {
        head: 'Какие требования к донору?',
        paragraph: `Перед первой донацией Вам необходимо ознакомитья с перечнем противооказаний`,
      },
      link: '/',
    },
    {
      _id: '2',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/preparation-donation.svg',
      },
      text: {
        head: 'Как подготовиться к донации?',
        paragraph: `Накануне и в день сдачи крови есть определённые запреты и рекомендации, 
      которых необходимо придерживаться`,
      },
      link: '/',
    },
    {
      _id: '3',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/donation-going.svg',
      },
      text: {
        head: 'Как проходит донация?',
        paragraph: `Куда обращаться? Нужно ли иметь при себе какие-либо документы? 
      Как происходит процедура сдачи крови?`,
      },
      link: '/',
    },
  ],
  aboutPage: [
    {
      _id: '1',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/donor-requirements.svg',
      },
      text: {
        head: 'Льготы и привилегии донора',
        paragraph: `Подробнее`,
      },
      link: '/',
    },
    {
      _id: '2',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/preparation-donation.svg',
      },
      text: {
        head: 'Донор и работа/учеба',
        paragraph: `Подробнее`,
      },
      link: '/',
    },
    {
      _id: '3',
      image: {
        width: 300,
        height: 300,
        src: '/images/pages/home/about-donations/donation-going.svg',
      },
      text: {
        head: 'Регламентирующие донорство крови документы',
        paragraph: `Подробнее`,
      },
      link: '/',
    },
  ],
};

const initialState = {
  ...mock,
};

const aboutDonations = createSlice({
  name: 'AboutDonations',
  initialState,
  reducers: {},
});

export const { reducer, caseReducers, actions } = aboutDonations;
