export const bytesToMegabytes = (value: number, round = 2) => {
  return +(value / 1024 / 1024).toFixed(round);
};

export const formatDate = (date: Date) => `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

export const yearOrYears = (age: number) => {
  if (age % 2 === 0 || age % 3 === 0 || age % 4 === 0) return 'года';

  if (age % 1 === 0) return 'год';

  return 'лет';
};

export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export const objectToRGBA = ({ r, g, b, a }: RGBA) => `rgba(${r}, ${g}, ${b}, ${a})`;

export const rgbaStringToObject = (color: string): RGBA => {
  const [red, green, blue, alpha] = color.split('(')[1].split(')')[0].split(',');
  return { r: +red, g: +green, b: +blue, a: +alpha };
};

export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (typeof alpha !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

export const rgbaToString = (rgba: RGBA) => {
  const { r, g, b, a } = rgba;

  if (typeof a !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
