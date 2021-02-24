import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export declare type Props = {
  src: string;
  fullname: string;
  city: string;
  numberOfDonations: number;
  registrationDate: string;
  story: string;
  status: string;
};

type StoriesProps = Props & { key: number };

const mock: StoriesProps[] = [
  {
    key: 1,
    fullname: 'Борисов Донат',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 9,
    registrationDate: new Date().toISOString().split('T')[0],
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
    status: 'Почетный донор',
  },
  {
    key: 2,
    fullname: 'Кузьмин Аввакум',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 23,
    registrationDate: new Date().toISOString().split('T')[0],
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
    status: 'Почетный донор',
  },
  {
    key: 3,
    fullname: 'Гущин Макар',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 10,
    registrationDate: new Date().toISOString().split('T')[0],
    status: '-',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 4,
    fullname: 'Мартынов Панкрат',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 15,
    registrationDate: new Date().toISOString().split('T')[0],
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
    status: 'Почетный донор',
  },
  {
    key: 5,
    fullname: 'Тетерин Гурий',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 12,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 6,
    fullname: 'Борисов Донат',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 9,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 7,
    fullname: 'Кузьмин Аввакум',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 23,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 8,
    fullname: 'Гущин Макар',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 10,
    registrationDate: new Date().toISOString().split('T')[0],
    status: '-',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор!
     Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 9,
    fullname: 'Мартынов Панкрат',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 15,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 10,
    fullname: 'Тетерин Гурий',
    src: '/images/avatars/women.png',
    city: 'Тирасполь',
    numberOfDonations: 12,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
    story: `“В детстве я мечтала помогать людям, 
    в медицинский поступить не получилось и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
];

interface IState<T> {
  status: 'init' | 'loading' | 'loaded' | 'error';
  data: T;
  error?: string;
}

const initialState: IState<any> = {
  status: 'init',
  data: mock,
  error: '',
};

const stories = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { reducer, actions, caseReducers } = stories;
