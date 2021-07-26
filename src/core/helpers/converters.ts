import dayjs from 'dayjs';

export const bytesToMegabytes = (value: number, round = 2) => {
  return +(value / 1024 / 1024).toFixed(round);
};

export const formatDate = (date: Date) =>
  `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

export const yearOrYears = (age: number) => {
  if (age % 2 === 0 || age % 3 === 0 || age % 4 === 0) return 'года';

  if (age % 1 === 0) return 'год';

  return 'лет';
};

export const formatDatePicker = (date: string) => dayjs(date).format('YYYY/MM/DD');
