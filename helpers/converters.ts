export const bytesToMegabytes = (value: number, round = 2) => {
  return (value / 1024 / 1024).toFixed(round);
};
