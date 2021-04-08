const DAY_MS: number = 1000 * 60 * 60 * 24;

export interface IStorageItem {
  dateCreation: number;
  data: unknown;
}

const get = (key: string): IStorageItem | null => {
  const stringValue = localStorage.getItem(key);
  return stringValue ? JSON.parse(stringValue) : null;
};

const setMemo = (key: string, data: unknown, expire = DAY_MS): void => {
  const currentValue = get(key);

  if (!currentValue) {
    const objValue = JSON.stringify({ dateCreation: Date.now(), data });
    localStorage.setItem(key, objValue);
  } else {
    const dateExpire = +new Date(currentValue.dateCreation + expire);
    if (currentValue.dateCreation > dateExpire) {
      const objValue = JSON.stringify({ dateCreation: Date.now(), data });
      localStorage.setItem(key, objValue);
    }
  }
};

const set = (key: string, data: unknown): void => {
  const objValue = JSON.stringify({ dateCreation: Date.now(), data });
  localStorage.setItem(key, objValue);
};

const isActualData = (key: string, expire = DAY_MS) => {
  const currentValue = get(key);

  if (!currentValue) return false;

  const dateExpire = +new Date(currentValue.dateCreation + expire);
  return currentValue.dateCreation <= dateExpire;
};

const remove = (key: string): void => {
  localStorage.getItem(key);
};

export const storage = { get, set, setMemo, remove, isActualData };
