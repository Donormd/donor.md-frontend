const get = <T>(key: string): T | null => {
  const stringValue = localStorage.getItem(key);
  return stringValue ? JSON.parse(stringValue) : null;
};

const set = <T>(key: string, data: T): void => {
  const objValue = JSON.stringify(data);
  localStorage.setItem(key, objValue);
};

const remove = (key: string): void => {
  localStorage.removeItem(key);
};

export const storage = { get, set, remove };
