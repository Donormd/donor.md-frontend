export declare type KeyType = { key: number };
export declare type ImageType = {
  image: {
    width: number;
    height: number;
    src: string;
    layout: string;
  };
};
export declare type TextType = {
  text: {
    head: string;
    paragraph: string;
  };
};

export declare type MockType = KeyType & ImageType & TextType;

const mock: Array<MockType> = [
  {
    key: 1,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/donor-requirements.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Какие требования к донору?',
      paragraph: `Перед первой донацией Вам необходимо ознакомитья с перечнем противооказаний`,
    },
  },
  {
    key: 2,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/preparation-donation.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Как подготовиться к донации?',
      paragraph: `Накануне и в день сдачи крови есть определённые запреты и рекомендации, 
      которых необходимо придерживаться`,
    },
  },
  {
    key: 3,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/donation-going.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Как проходит донация?',
      paragraph: `Куда обращаться? Нужно ли иметь при себе какие-либо документы? 
      Как происходит процедура сдачи крови?`,
    },
  },
];

export default mock;
