import React from 'react';
import HeaderContentFooter from '../layouts/header-content-footer';
import ButtonGroup, { ButtonsProps, OnClickProps, KeyType } from '../components/button-group';
import DonorStory, { Props } from '../components/common/donor-story';
import Pagination from '../components/common/pagination';
import style from '../styles/pages/stories-page.module.scss';

const buttons: Array<ButtonsProps> = [
  { key: 1, text: 'Истории доноров' },
  { key: 2, text: 'Истории рецепиентов' },
];

type StoriesProps = Props & { key: KeyType };

const stories: Array<StoriesProps> = [
  {
    key: 1,
    src: '/images/avatars/women.png',
    fullname: 'Анастасия',
    count: 22,
    story: `“В детстве я мечтала помогать людям, в медицинский поступить не получилось
    и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 2,
    src: '/images/avatars/women.png',
    fullname: 'Анастасия',
    count: 22,
    story: `“В детстве я мечтала помогать людям, в медицинский поступить не получилось
    и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
];

/* eslint no-console: 0 */
const handleClick: OnClickProps = (val) => console.log(val);

const DonorStoriesPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter>
    <section className='container'>
      <div className={style.stories__head}>
        <h1 className={style.head__title}>Истории доноров</h1>
        <ButtonGroup
          className={style['head__button-group']}
          buttons={buttons}
          handleClick={handleClick}
        />
      </div>
      <div className={style.stories__list}>
        {stories.map((props: StoriesProps) => (
          <DonorStory {...props} />
        ))}
      </div>
    </section>
    <Pagination />
  </HeaderContentFooter>
);

export default DonorStoriesPage;
