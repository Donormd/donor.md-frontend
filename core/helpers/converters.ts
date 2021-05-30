export const bytesToMegabytes = (value: number, round = 2): number => {
  return +(value / 1024 / 1024).toFixed(round);
};

export const formatDate = (date: Date): string =>
  `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
