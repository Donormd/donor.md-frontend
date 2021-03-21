import { createSlice } from '@reduxjs/toolkit';
import { IQuestion } from '../components/forms/question';

export interface IOptions {
  key: string | number;
  value: string | number;
  text: string | number;
}

const bloodGroups: IOptions[] = [
  { key: 0, value: 1, text: 'Любая' },
  { key: 1, value: 1, text: '0 (I) - Rh+' },
  { key: 2, value: 2, text: '0 (I) - Rh-' },
  { key: 3, value: 3, text: 'A (II) - Rh+' },
  { key: 4, value: 3, text: 'A (II) - Rh-' },
  { key: 5, value: 2, text: 'B (III) - Rh+' },
  { key: 6, value: 1, text: 'B (III) - Rh-' },
  { key: 7, value: 2, text: 'AB (IV) - Rh+' },
  { key: 8, value: 3, text: 'AB (IV) - Rh-' },
];

const cities: IOptions[] = [
  { key: 1, value: 'Тирасполь', text: 'Тирасполь' },
  { key: 2, value: 'Бендеры', text: 'Бендеры' },
  { key: 3, value: 'Рыбница', text: 'Рыбница' },
  { key: 4, value: 'Слободзея', text: 'Слободзея' },
  { key: 5, value: 'Днестровск', text: 'Днестровск' },
  { key: 6, value: 'Дубосары', text: 'Дубосары' },
  { key: 7, value: 'Каменка', text: 'Каменка' },
];

const organizations: IOptions[] = [
  { key: 1, value: 'Тест', text: 'Тест' },
  { key: 2, value: 'Тест', text: 'Тест' },
  { key: 3, value: 'Тест', text: 'Тест' },
  { key: 4, value: 'Тест', text: 'Тест' },
  { key: 5, value: 'Тест', text: 'Тест' },
  { key: 6, value: 'Тест', text: 'Тест' },
  { key: 7, value: 'Тест', text: 'Тест' },
];

const bloodCenter: IOptions[] = [
  {
    key: 1,
    value: 'Тирасполь',
    text: 'РКБ, отделение «Онкология»',
  },
  {
    key: 2,
    value: 'aaaaaaaaaaa',
    text: 'РКБ, отделение «Хирургия»',
  },
  {
    key: 3,
    value: 'aaaaaaaaaaa',
    text: 'РКБ, отделение «Гастрология»',
  },
  {
    key: 4,
    value: 'aaaaaaaaaaa',
    text: 'РКБ, отделение «Травматология»',
  },
  {
    key: 5,
    value: 'Тирасполь',
    text: 'ЦМиР, г. Тирасполь',
  },
  {
    key: 6,
    value: 'aaaaaaaaaaa',
    text: 'Бендерская больница',
  },
  {
    key: 7,
    value: 'aaaaaaaaaaa',
    text: 'ЦРБ г. Слободзея',
  },
  {
    key: 8,
    value: 'aaaaaaaaaaa',
    text: 'ЦРБ г. Григориополь',
  },
  {
    key: 9,
    value: 'aaaaaaaaaaa',
    text: 'ЦРБ г. Рыбница',
  },
  {
    key: 10,
    value: 'aaaaaaaaaaa',
    text: 'ЦРБ г. Каменка',
  },
  {
    key: 11,
    value: 'Другое',
    text: 'Другое',
  },
];

const transfusionCenter: IOptions[] = [
  { key: 1, value: 'aaa', text: 'Центр переливания крови г. Тирасполь' },
  { key: 2, value: 'aaa', text: 'Центр переливания крови г. Бендеры' },
  { key: 3, value: 'aaa', text: 'Центр переливания крови г. Рыбница' },
];

const initialState = { cities, bloodGroups, bloodCenter, organizations, transfusionCenter };

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
});

export const { reducer, caseReducers, actions } = common;
